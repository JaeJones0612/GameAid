import React from 'react'
import {WebRouter as Router, Link} from "react-router-dom"

function Players() {
    return(
        <>
        <div className={"d-flex justify-content-center"}>

        <div className={"row"}>
        Do you prefer the solo life?  Or would you prefer to bring a friend?
        </div>

        </div>

        <Link to="/excites">
            <button>Prev</button>
        </Link>

        <Link to="/mood">
        <button>Next</button>
        </Link>
        </>
    )
}

export default Players;