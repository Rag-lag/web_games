import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import _ from 'lodash';

import Header from './Header'
import Footer from './Footer'

function Slido(){
    const navigate=useNavigate()
    // const score=localStorage.getItem('score')
    const styles={
        parent:{
            height: '100%',
        },
        body:{
            marginTop:'80px',
            width:'100%',
            minHeight:'calc(100% - 50px)',
            textAlign:'center',
        },
        parentGame:{
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',/* 3 rows with fixed height */
            gap:'5px',
            maxWidth: 'fit-content',
            paddingTop:'40px',
            marginLeft: 'auto',
            marginRight:'auto',
        }

    }
    const correctAns=[
        {id:1,img:img1,row:1,col:1},
        {id:2,img:img2,row:1,col:2},
        {id:3,img:img3,row:1,col:3},
        {id:4,img:img4,row:2,col:1},
        {id:5,img:img5,row:2,col:2},
        {id:6,img:img6,row:2,col:3},
        {id:7,img:img7,row:3,col:1},
        {id:8,img:img8,row:3,col:2},
        {id:9,img:"",row:3,col:3},
    ]
    const [currAns,setCurrAns]=useState(null)
    const [currBlank,setCurrBlank]=useState(null)
    const [resetNum,setReset]=useState(0)
    const [solved,setSolve]=useState(false)
    const [movemade,setMove]=useState(false)

    const alreadyContained=(placedPos,selRow,selCol)=>{
        if(!placedPos){
            return false
        }
        let flag=false
        placedPos.map((item)=>{
            if(item.row===selRow && item.col===selCol){
                flag=true
            }
        })
        return flag;
    }
    useEffect(()=>{
        const alreadyPlaced=new Set()
        const placedPos=[]
        const intializeAns=[]
        while(alreadyPlaced.size<9){
            let selectTitle=Math.floor(Math.random() * 9);
            if(!alreadyPlaced.has(selectTitle)){
                let selRow=Math.floor(Math.random() * 3);
                let selCol=Math.floor(Math.random() * 3);
                if(!alreadyContained(placedPos,selRow,selCol)){
                    if(selectTitle===8){
                        setCurrBlank([selRow+1,selCol+1])
                    }
                    let imgSrc=selectTitle===8?"":`/src/assets/${selectTitle+1}.png`
                    let newEntry={id:selectTitle+1,img:imgSrc,row:selRow+1,col:selCol+1}
                    placedPos.push({row:selRow,col:selCol})
                    // console.log(placedPos)
                    alreadyPlaced.add(selectTitle)
                    intializeAns.push(newEntry)
                }

            }
        }
        setCurrAns(intializeAns)
        // console.log(intializeAns)
    },[resetNum])
    const isValidMove=(row,col)=>{
        if(row-1===currBlank[0] && col===currBlank[1]){return true}
        else if(row+1===currBlank[0] && col===currBlank[1]){return true}
        else if(row===currBlank[0] && col-1===currBlank[1]){return true}
        else if(row===currBlank[0] && col+1===currBlank[1]){return true}
        return false
    }
    const makeMove=(item)=>{

        if(isValidMove(item.row,item.col)){
            const newCol=currBlank[1]
            const newRow=currBlank[0]
            const oldRow=item.row
            const oldCol=item.col
            let tempCurr=[...currAns]
            tempCurr.map((i)=>{
                if(i.id===item.id){
                    i.row=newRow
                    i.col=newCol
                }
                if(i.id===9){
                    i.row=oldRow
                    i.col=oldCol
                }  
            })
            setCurrBlank([oldRow,oldCol])
            setCurrAns(tempCurr)
            setMove(true)
            if(_.isEqual(tempCurr,correctAns)){
                alert("Correct!")
                let score=localStorage.getItem('score')
                localStorage.setItem('score',parseInt(score)+1)
                navigate(0)
            }

        }
    }
    const solve=()=>{
        setMove(true)
        setCurrBlank([3,3])
        setSolve(true)
        setCurrAns(correctAns)
    }
    const reset=()=>{
        setMove(false)
        setSolve(false)
        setReset(resetNum+1)
    }
    return(
        (currAns && <div style={styles.parent}>
            <Header/>
            <div style={styles.body}>
                <div style={styles.parentGame}>
                {currAns.map((item)=>{
                    // if(_.isEqual(currAns,correctAns)){
                    //     alert("Correct!")
                    //     navigate(0)
                    // }
                    return(<div key={item.id} onClick={()=>{makeMove(item)}} style={{width:'150px',height:'150px',gridRow:`${item.row}`,gridColumn:`${item.col}`}}><img src={item.img} alt="" /></div>)
                })}
                </div>
                <button onClick={reset} disabled={!movemade}>Reset</button>
                <button onClick={solve} disabled={solved}>Solve</button>
            </div>
            <Footer />
        </div> )
    )
}

export default Slido    