import React from "react"
import {Link} from "react-router-dom"

function Investment() {
    return(
        <>
        <div className={"d-flex justify-content-center"}>
            <div className={"row"}>
                What amount of time are you willing to spend?
            </div>

        </div>
        
            <Link to="/mood">
            <button>Prev</button>
            </Link>

            <Link to="/results">
            <button>Show Me What To Play!</button>
            </Link>
        </>
    )
}

export default Investment;