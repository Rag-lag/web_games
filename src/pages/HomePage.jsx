import { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

function HomePage(){
    const [score,setScore]=useState(0)
    const styles={
        body:{
            marginTop:'80px',
            width:'100%',
            minHeight:'calc(100% - 50px)',
            textAlign:'center',
        }
    }
    const loadScore=()=>{
        if(localStorage.getItem("score")){
            setScore(localStorage.getItem('score'))
        }
        else{
            axios.get("https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json").then((response)=>{
                localStorage.setItem("score",response.data.score)
                setScore(response.data.score)
            }).catch((error)=>{
                alert("Error fetching score, starting from 0")
            })
        }
    }
    useEffect(()=>{
        loadScore()
    },[score])
    const reloadData=()=>{
        axios.get("https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json").then((response)=>{
            localStorage.setItem("score",response.data.score)
            setScore(response.data.score)
        }).catch((error)=>{
            alert("Error fetching score, starting from 0")
        })
    }
    return(
        <div style={{height:'100%'}}>
            <Header/>
            <div style={styles.body}>
                <h2 style={{fontSize:'2em',color:"red", paddingTop:'100px'}}>
                Please choose an option from the navbar.
                </h2>
                <h4>Games won: {score} <span onClick={reloadData} style={{cursor:'pointer'}} >(reset)</span></h4>   
            </div>
            <Footer />
        </div>
    )
}
export default HomePage