import "./Progress.css";
import React,{useState,useEffect} from 'react';

export default function Progress(){
    const [filled,setFilled]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    useEffect(()=>{
        if(filled<100 && isRunning){
            setTimeout(()=> setFilled(prev=>prev+=1),100)
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
            <button className="btn" onClick={()=>{
                setIsRunning(true) 
                setFilled(0)
            }}>Run</button>
        </div>
    )
}