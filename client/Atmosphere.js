import React from "react"
import {Link} from "react-router-dom"

function Atmosphere() {
    return(
    <>
        <div className={"d-flex justify-content-center"}>

            <div className={"row"}>
                Select the things that sound most appealing to you
            </div>


        </div>
        
        <Link to="/players">
        <button>Prev</button>
        </Link>

        <Link to="/invest">
        <button>Next</button>
        </Link>

    </>
    )
}

export default Atmosphere;