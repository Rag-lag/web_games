import { useState,useEffect } from 'react'

function Footer(){
    const [h,setH]=useState('Home')
    const [b,setB]=useState('Blanko')
    const [s,setS]=useState('Slido')
    const [t,setT]=useState('Tetro')
    const [width,setWidth]=useState(window.innerWidth)
    const styles={
        footer:{
            height:'50px',
            width:'100%',
            backgroundColor:'#999999',
            position:'relative',
            bottom:'0',
            left:'0',
            right:'0',
            // top:'', 
        },
    }
    return(
        <>
            <div style={styles.footer}>This is Footer</div>
        </>
    )
}

export default Footer