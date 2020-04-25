import React from "react";
import {Link} from "react-router-dom";

function PlatformButtons(props) {

        return(
        <div>
            
            <div className={"d-flex justify-content-center"}>

                <div className={"row pt-5"} style={{
                fontSize:"24px",
                fontFamily:"Helvetica",
                fontWeight:"bold"
                }}>

            Welcome!  Please choose your preferred platform from the list below!

            </div>

            </div>

            <div className={"d-flex justify-content-around"}>

            <div className={"row"}>
    
            <div className={"col pr-5 pt-5"}>
    
            <Link to={{
                pathname:"/excites",
                state: {
                    platform: "PlayStation 4"
                }
            }}>
    
            <button style={{
                width: "200px",
                height: "200px",
                backgroundColor: "blue",
                fontSize:"24px",
                fontWeight:"bold",
                borderRadius:"25%"
            }}>PlayStation 4</button>
            
            </Link>
    
            </div>
    
            <Link to="/excites">
            
            <div className={"col pl-5 pr-5 pt-5"}>
                <button style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor:"green",
                    fontSize:"24px",
                    fontWeight:"bold",
                    borderRadius:"25%"
                }}>Xbox One</button>
            </div>
            
            </Link>
    
            <Link to="/excites">
            
            <div className={"col pl-5 pt-5"}>
                <button style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor:"red",
                    fontSize:"24px",
                    fontWeight:"bold",
                    borderRadius:"25%"
                }}>Nintendo Switch</button>
            </div>
            
            </Link>
    
            </div>

            </div>
        </div>
    
        )
    }

export default PlatformButtons;