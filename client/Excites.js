import React from 'react'
import {WebRouter as Router, Link} from "react-router-dom"

function Excites(props) {
        return(
            <>
            <div className={"d-flex justify-content-center"}>
    
            <div className={"row"}>
            What Excites you?
            </div>
    
            <button onClick={() => {console.log(this.state.platform)}}>Test</button>
    
            </div>
    
            <Link to="/">
                <button>Prev</button>
            </Link>
    
            <Link to="/players">
            <button>Next</button>
            </Link>
            </>
        )

    }

export default Excites;