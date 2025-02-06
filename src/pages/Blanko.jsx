import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

function Blanko(){
    const navigate=useNavigate()
    const strs = [
        'the fat cats',
        'larger frogs',
        'banana cakes',
        'unsw vs usyd',
        'french toast',
        'hawaii pizza',
        'barack obama',
    ];
    const styles={
        body:{
            marginTop:'80px',
            width:'100%',
            minHeight:'calc(100% - 50px)',
            textAlign:'center'
        },
        gameParent:{
            maxWidth: 'fit-content',
            paddingTop:'100px',
            marginLeft: 'auto',
            marginRight:'auto',
            display:'flex'
        },
        gameElement:{
            border:'1px solid black',
            width:'40px',
            height:'40px',
        },
        gameInput:{
            width:'80%',
            height:'45%',
            border:'none'
        }
    }
    const [currString,setCurrString]=useState(null);
    const [blanks, setBlanks]=useState(null);
    const [correctComplete,setCorrectComplete]=useState(new Set())
    const [countComplete,setCountComplete]=useState(0)
    const [currBlanks, setCurrBlanks]=useState(null);
    const [resetNum, setReset]=useState(0);

    useEffect(()=>{
        let rndmStr=Math.floor(Math.random() * 7);
        setCurrString(strs[rndmStr].split(''))
        let rndmChars= new Set()
        while(rndmChars.size<3){
            let rnd=Math.floor(Math.random() * 12)
            if(strs[rndmStr][rnd]!=' '){
                rndmChars.add(rnd)
            }
        }
        let cBlanks={}
        for (let e of rndmChars){
            cBlanks[e]=strs[rndmStr][e]
        }
        setBlanks(rndmChars)
        setCurrBlanks(cBlanks)
    },[resetNum])
    const checkValidAns=(item,index)=>{
        if(currBlanks[index]===item && !correctComplete.has(index)){
            setCountComplete(countComplete+1)
            let done=correctComplete
            done.add(index)
            setCorrectComplete(done)
            if(countComplete+1===3){
                alert("Correctly solved")
                let score=localStorage.getItem('score')
                localStorage.setItem("score",parseInt(score)+1)
                navigate(0)
            }
        }
        else if(correctComplete.has(index)){
            correctComplete.delete(index)
            setCountComplete(countComplete-1)
        }
    }
    const reset=()=>{
        setReset(resetNum+1)
    }

    return(
        (currString && <div style={{height:'100%'}}>
            <Header/>
            <div style={styles.body}>
                <div style={styles.gameParent}>
                    {currString.map((item,index)=>{
                        // console.log(index)
                        if(blanks.has(index)){
                            return(<span style={styles.gameElement}  key={index} >
                                <input style={styles.gameInput} onChange={(e)=>{checkValidAns(e.target.value,index)}} maxLength={1}></input>
                                ___
                                </span>)
                        }
                        else{
                            return(<div style={styles.gameElement} key={index}>{item}</div>)
                        }
                        
                    })}
                </div>  
                <button onClick={reset}>Reset</button>
            </div>
            <Footer />
        </div> )
    
    )
}

export default Blanko