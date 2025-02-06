import { useState,useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'

function Header(){
    const [h,setH]=useState('Home')
    const [b,setB]=useState('Blanko')
    const [s,setS]=useState('Slido')
    const [t,setT]=useState('Tetro')
    const [width,setWidth]=useState(window.innerWidth)
    const navigate=useNavigate()
    const styles={
        header:{
            height:"80px",
            width:"100vw",
            position:'fixed',
            display:'flex',
            justifyContent: 'space-between',
            alignItems:'center',
            top:'0',
            left:'0',
            backgroundColor:'#eeeeee',
        },
        logo:{
            margin:'15px',
            width:'50px',
            height:'50px'
          },
          navigation:{
            alignItems:'center',
            justifyContent:"flex-end",
            paddingRight:'20px'
          },
    }
    const navigateTo=(section)=>{
        if(section==='home'){
            navigate('/')
        }
        else if(section==='blanko'){
            navigate('/blanko')
        }
        else if(section==='slido'){
            navigate('/slido')
        }
        else{
            navigate('/tetro')
        }
    }
    return(
        <>
            <div style={styles.header}>
                <img src={reactLogo} alt="Logo" style={styles.logo} />
                <span style={styles.navigation}>
                    <span style={{cursor:'pointer'}} onClick={()=>{navigateTo("home")}}>{h}</span>|
                    <span style={{cursor:'pointer'}} onClick={()=>{navigateTo("blanko")}}>{b}</span>|
                    <span style={{cursor:'pointer'}} onClick={()=>{navigateTo("slido")}}>{s}</span>|
                    <span style={{cursor:'pointer'}} onClick={()=>{navigateTo("tetro")}}>{t}</span>
                </span>
            </div>
        </>
    )
}

export default Header