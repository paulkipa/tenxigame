import React from "react";


export default function Die(props){
//console.log(props)
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
const dieLayout=(function(num){
    if(num===1){
        return(<div className="dice first-face" style={styles}
        onClick={props.holdDice}>
        <span className="dot"> </span>
        </div>)
    }
    if(num===2){
        return(
            <div className="dice second-face" style={styles}
            onClick={props.holdDice}>
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    if(num===3){
        return(
            <div className="dice third-face" style={styles}
            onClick={props.holdDice}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        )
    }
    if(num===4){
        return(
            <div className="fourth-face dice" style={styles}
            onClick={props.holdDice}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }
    if(num===5){  
        return(
            <div className="fifth-face dice" style={styles}
            onClick={props.holdDice}>
  
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }
    if(num===6){  
        return(
            <div className="sixth-face dice" style={styles}
            onClick={props.holdDice}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }
})




    return(
        dieLayout(props.value)
        /* <div className="die-face" 
        style={styles}
        onClick={props.holdDice}> 
            <h2 className="die-num" >{props.value}</h2>*/
            
        /* </div> */
    )
}