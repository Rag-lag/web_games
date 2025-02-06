import { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function Tetro(){
    const MAX_ROW=12;
    const MAX_COL=10;

    const styles={
        body:{
            marginTop:'80px',
            width:'100%',
            minHeight:'calc(100% - 50px)',
            textAlign:'center'
        },
        parentGame:{
            display:'grid',
            gridTemplateRows:'repeat(12, 30px)',
            paddingTop:'20px',
            marginLeft: '20px',
            marginRight:'20px',
            marginBottom:'100px',
        },

    }
    const[reset,setReset]=useState(false)
    const[fullRows,setFullRows]=useState(null)    
    const[startGame,setStartGame]=useState(false)
    const[currBlock,setCurrBlock]=useState(null)
    const[block,setBlock]=useState(null)

    const[currPos,setPos]=useState(null)
    const [grid,setGrid]=useState(null)
    useEffect(()=>{
        setFullRows(null)
        const makeGrid= []
        let id=0;
        for( let i=1; i<=12;i++){
            for(let j=1;j<=10;j++){
                const newEntry={id:id,row:i,col:j,filled:false,rowFilled:false}
                makeGrid.push(newEntry)
                id=id+1
            }
        }
        let newFullRows=new Set()
        setFullRows(newFullRows)
        setGrid(makeGrid)
    },[reset])

    const gameUpdate=()=>{

        if(startGame){
           let block=currBlock
           let pos=currPos
           if(block==0){
            let tempGrid=[...grid]
            let checkRow1=0;
            let checkRow2=0;
            let terminate=false
            tempGrid.map((item)=>{
                if(terminate){
                    return
                }
                if(pos[0]===1 && (item.row===pos[0]+1 || item.row===pos[0]) && (item.col===pos[1]||item.col===pos[1]+1) && item.filled){
                    alert("Failed")
                    resetGame()
                    terminate=true
                }
                else if(item.row===pos[0]+2 && (item.col===pos[1]||item.col===pos[1]+1)){
                    if(item.filled){
                        let tempFullRows=new Set([...fullRows])
                        tempGrid.map((it)=>{
                            if(it.row===pos[0]){
                                if(it.col===pos[1] || it.col===pos[1]+1){
                                    it.filled=true
                                }
                                if(it.filled){
                                    checkRow1+=1
                                    if(checkRow1===10){
                                        tempFullRows.add(it.row)
                                    }
                                }
                            }
                            if(it.row===pos[0]+1){
                                if(it.col===pos[1] || it.col===pos[1]+1){
                                    it.filled=true
                                }
                                if(it.filled){
                                    checkRow2+=1
                                    if(checkRow2===10){
                                        tempFullRows.add(it.row)
                                    }
                                }
                            }
                        })
                        setFullRows(tempFullRows)
                        terminate=true
                        createNewBlock()
                    }  
                }
                else if( pos[0]+1===MAX_ROW){
                    let tempFullRows=new Set([...fullRows])
                    tempGrid.map((it)=>{
                        if(it.row===pos[0]){
                            if(it.col===pos[1] || it.col===pos[1]+1){
                                it.filled=true
                            }
                            if(it.filled){
                                checkRow1+=1
                                if(checkRow1===10){
                                    tempFullRows.add(it.row)
                                }
                            }
                        }
                        if(it.row===pos[0]+1){
                            if(it.col===pos[1] || it.col===pos[1]+1){
                                it.filled=true
                            }
                            if(it.filled){
                                checkRow2+=1
                                if(checkRow2===10){
                                    tempFullRows.add(it.row)
                                }
                            }
                        }
                    })
                    setFullRows(tempFullRows)
                    createNewBlock()
                    terminate=true
                    
                }
                else{
                    let oldRow=pos[0]
                    let oldCol=pos[1]
                    let b=[
                        {id:0,row:oldRow+1,col:oldCol},
                        {id:1,row:oldRow+1,col:oldCol+1},
                        {id:2,row:oldRow+2,col:oldCol},
                        {id:3,row:oldRow+2,col:oldCol+1},
                    ]
                    setPos([oldRow+1,oldCol])
                    setBlock(b)
                }
            })
            setGrid(tempGrid)
           }
           else if(block==1){
            let tempGrid=[...grid]
            let checkRow1=0;
            let checkRow2=0;
            let terminate=false
            tempGrid.map((item)=>{
                if(terminate){
                    return
                }
                if(pos[0]===1 && (item.row===pos[0]+1 || item.row===pos[0]) && (item.col===pos[1]) && item.filled){
                    alert("Failed")
                    resetGame()
                    terminate=true
                }
                else if(item.row===pos[0]+2 && (item.col===pos[1])){
                    if(item.filled){
                        let tempFullRows=new Set([...fullRows])
                        tempGrid.map((it)=>{
                            if(it.row===pos[0]){
                                if(it.col===pos[1] ){
                                    it.filled=true
                                }
                                if(it.filled){
                                    checkRow1+=1
                                    if(checkRow1===10){
                                        tempFullRows.add(it.row)
                                    }
                                }
                            }
                            if(it.row===pos[0]+1){
                                if(it.col===pos[1]){
                                    it.filled=true
                                }
                                if(it.filled){
                                    checkRow2+=1
                                    if(checkRow2===10){
                                        tempFullRows.add(it.row)
                                    }
                                }
                            }
                        })
                        setFullRows(tempFullRows)
                        terminate=true
                        createNewBlock()
                    }  
                }
                else if( pos[0]+1===MAX_ROW){
                    let tempFullRows=new Set([...fullRows])
                    tempGrid.map((it)=>{
                        if(it.row===pos[0]){
                            if(it.col===pos[1]){
                                it.filled=true
                            }
                            if(it.filled){
                                checkRow1+=1
                                if(checkRow1===10){
                                    tempFullRows.add(it.row)
                                }
                            }
                        }
                        if(it.row===pos[0]+1){
                            if(it.col===pos[1] ){
                                it.filled=true
                            }
                            if(it.filled){
                                checkRow2+=1
                                if(checkRow2===10){
                                    tempFullRows.add(it.row)
                                }
                            }
                        }
                    })
                    setFullRows(tempFullRows)
                    createNewBlock()
                    terminate=true
                    
                }
                else{
                    let oldRow=pos[0]
                    let oldCol=pos[1]
                    let b=[
                        {id:0,row:oldRow+1,col:oldCol},
                        {id:1,row:oldRow+2,col:oldCol},
                    ]
                    setPos([oldRow+1,oldCol])
                    setBlock(b)
                }
            })
            setGrid(tempGrid)
           }
           else{
            let tempGrid=[...grid]
            let checkRow1=0;
            let checkRow2=0;
            let terminate=false
            tempGrid.map((item)=>{
                if(terminate){
                    return
                }
                if(pos[0]===1 && (item.row===pos[0]) && (item.col===pos[1]) && item.filled){
                    alert("Failed")
                    resetGame()
                    terminate=true
                }
                else if(item.row===pos[0]+1 && (item.col===pos[1])){
                    if(item.filled){
                        let tempFullRows=new Set([...fullRows])
                        tempGrid.map((it)=>{
                            if(it.row===pos[0]){
                                if(it.col===pos[1] ){
                                    it.filled=true
                                }
                                if(it.filled){
                                    checkRow1+=1
                                    if(checkRow1===10){
                                        tempFullRows.add(it.row)
                                    }
                                }
                            }
                        })
                        setFullRows(tempFullRows)
                        terminate=true
                        createNewBlock()
                    }  
                }
                else if( pos[0]===MAX_ROW){
                    let tempFullRows=new Set([...fullRows])
                    tempGrid.map((it)=>{
                        if(it.row===pos[0]){
                            if(it.col===pos[1]){
                                it.filled=true
                            }
                            if(it.filled){
                                checkRow1+=1
                                if(checkRow1===10){
                                    tempFullRows.add(it.row)
                                }
                            }
                        }
                    })
                    setFullRows(tempFullRows)
                    createNewBlock()
                    terminate=true
                    
                }
                else{
                    let oldRow=pos[0]
                    let oldCol=pos[1]
                    let b=[
                        {id:0,row:oldRow+1,col:oldCol},
                    ]
                    setPos([oldRow+1,oldCol])
                    setBlock(b)
                }
            })
            setGrid(tempGrid)

           }

        }
    }
    const handleKeyDown = (e) => {
        if (!startGame) return;

        e.preventDefault();
        const [row, col] = currPos;
        let newRow = row;
        let newCol = col;

        let cBlock=currBlock
        if(cBlock===0){
            if (e.key === "ArrowLeft" && col > 1) {
                // Move left
                newCol -= 1;
            } else if (e.key === "ArrowRight" && col < MAX_COL - 1) {
                // Move right
                newCol += 1;
            } 
            // else if (e.key === "ArrowDown" && row < MAX_ROW - 1) {
            //     // Move down
            //     newRow += 1;
            // }
    
            // Update position and block
            setPos([newRow, newCol]);
            setBlock([
                { id: 0, row: newRow, col: newCol },
                { id: 1, row: newRow, col: newCol + 1 },
                { id: 2, row: newRow + 1, col: newCol },
                { id: 3, row: newRow + 1, col: newCol + 1 },
            ]);
        }
        else if(cBlock===1){
            if (e.key === "ArrowLeft" && col > 1) {
                // Move left
                newCol -= 1;
            } else if (e.key === "ArrowRight" && col < MAX_COL) {
                // Move right
                newCol += 1;
            } 
            // else if (e.key === "ArrowDown" && row < MAX_ROW - 1) {
            //     // Move down
            //     newRow += 1;
            // }
    
            // Update position and block
            setPos([newRow, newCol]);
            setBlock([
                {id:0,row:newRow,col:newCol},
                {id:1,row:newRow+1,col:newCol},

            ])
        }
        else{
            if (e.key === "ArrowLeft" && col > 1) {
                // Move left
                newCol -= 1;
            } else if (e.key === "ArrowRight" && col < MAX_COL) {
                // Move right
                newCol += 1;
            } 
            // else if (e.key === "ArrowDown" && row < MAX_ROW) {
            //     // Move down
            //     newRow += 1;
            // }
    
            // Update position and block
            setPos([newRow, newCol]);
            setBlock([
                {id:0,row:newRow,col:newCol},
            ])
        }
    };
    const winCheck=()=>{
        if(fullRows.size>=5){
            alert("Correct!")
            let score=localStorage.getItem('score')
            localStorage.setItem('score',parseInt(score)+1)
            resetGame()
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            
        };
    }, [currPos,startGame]);

    useEffect(()=>{
        const timer= setTimeout(()=>{
            gameUpdate()
            winCheck()
        },1000)
        return ()=>{
            clearTimeout(timer)
        }
    },[grid,startGame,block])

    const createNewBlock=()=>{
        let option=Math.floor(Math.random() * 3);
        option=0
        setCurrBlock(option)
        if(option===0){
            let b=[
                {id:0,row:1,col:1},
                {id:1,row:1,col:2},
                {id:2,row:2,col:1},
                {id:3,row:2,col:2},
            ]
            setBlock(b)
        }
        else if(option===1){
            let b=[
                {id:0,row:1,col:1},
                {id:1,row:2,col:1},
            ]
            setBlock(b)
        }
        else{
            let b=[
                {id:0,row:1,col:1},
            ]
            setBlock(b)
        }
        setPos([1,1])
    }
    const activateGame=()=>{
        if(!startGame){
            createNewBlock()
            setStartGame(true)
        }
        
    }
    const resetGame=()=>{
        setStartGame(false)
        setCurrBlock(null)
        setBlock(null)
        setPos(null)
        setReset(!reset)
    }
    return(
        (grid && 
            <div style={{height:'100%'}}>
            <Header/>
            <div style={styles.body}>
                <div onClick={activateGame} style={styles.parentGame}>
                    {grid.map((item)=>{
                        const rowComplete=fullRows.has(item.row)
                        const isInBlock = block?.some(
                            (b) => b.row === item.row && b.col === item.col
                        );
                        return (
                            <div
                                key={item.id}
                                style={{
                                    background: `${
                                        rowComplete
                                            ? 'green'
                                            : isInBlock
                                            ? 'pink'
                                            : item.filled
                                            ? 'pink'
                                            : 'white'
                                    }`,
                                    border: `${isInBlock?'1px solid yellow':'1px solid #333333'}`,
                                    gridRow: `${item.row}`,
                                    gridColumn: `${item.col}`,
                                }}
                            ></div>
                        )
                    })}
                </div>
                <button onClick={resetGame}>reset</button>
            </div>
            <Footer/>

        </div>
        )
        
    )
}

export default Tetro