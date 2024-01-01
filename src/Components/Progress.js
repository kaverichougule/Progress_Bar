import "./Progress.css";
import React,{useState,useEffect} from 'react';

export default function Progress(){
    const [filled,setFilled]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    const [msg,setMsg]=useState("")
    useEffect(()=>{
        if(filled<100 && isRunning){
            setTimeout(()=> setFilled(prev=>prev+=1),100)
            setMsg("Loading...");
        }
        else if(filled===100){
            setMsg("Completed")
        }

    },[filled,isRunning])

    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height:"100%",
                    width:`${filled}%`,
                    backgroundColor:"#1e052b",
                    transition:"width 0.09s",
                }}>
                </div>
                <span className="progressPercent">{filled} %</span>
            </div>
            <div className="msgDiv">
            <p className="Message">{msg}</p>
            </div>
            <button className="btn" onClick={()=>{
                setIsRunning(true) 
                setFilled(0)
            }}>Run</button>
        </div>
    )
}