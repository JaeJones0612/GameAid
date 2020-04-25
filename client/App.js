import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            platform: '',
            playerCount: '',
            moods: [],
            genres: [],
            games: [],
            picture1: '',
            picture2: '',
            picture3: '',
            picture4: '',
            picture5: '',
            description: '',
            title: ''
        }

        this.handlePlatformClick = this.handlePlatformClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.handleMoodClick = this.handleMoodClick.bind(this);
        this.handleTimeClick = this.handleTimeClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handling the button selection for the Platform Choice Page

    handlePlatformClick(value) {
        this.setState({
            platform: value
        })
    }

    // Handling the button selection for the Genre Selection Page

    handleGenreClick(value) {
        this.setState({
            genres: [...this.state.genres, value]
        })
    }

    // Handling the button selection for the Player Count Page

    handlePlayerClick(value) {
        this.setState({
            playerCount: value
        })
    }

    // Handling the button selection for the Moods Selection Page

    handleMoodClick(value) {
        this.setState({
            moods: [...this.state.moods, value]
        })
    }


    // Handling the button selection for the Time Investment Page

    handleTimeClick(value) {
        this.setState({
            time: value
        })
    }

    handleSubmit() {

        const platform = this.state.platform;

        axios.get(`http://127.0.0.1:8085/games/${platform}`)
        .then((data) => {
            console.log(data)
            this.setState({
                games: [...this.state.games, ...data.data],
                picture1: data.data[0].Picture,
                picture2: data.data[1].Picture,
                picture3: data.data[2].Picture,
                picture4: data.data[3].Picture,
                picture5: data.data[4].Picture,
                description: data.data[0].Description,
                title: data.data[0].Title

            })

        })
        .catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <Router>
            <section className={"container-fluid"}>
                
                <Switch>

                    {/* Route to second page "What excites you?" */}
                    <Route path="/excites">

                        <Excites handleGenreClick={this.handleGenreClick} />

                    </Route>

                    {/* Route to third page "How Many Players?" */}
                    <Route path="/players">

                        <Players handlePlayerClick={this.handlePlayerClick}/>

                    </Route>

                    {/* Route to the fourth page "What type of atmosphere?"*/}

                    <Route path="/mood">

                        <Atmosphere handleMoodClick={this.handleMoodClick}/>

                    </Route>

                    {/* Route to the fifth page "How much time?" */}

                    <Route path="/invest">

                        <Investment handleTimeClick={this.handleTimeClick} handleSubmit={this.handleSubmit}/>

                    </Route>

                    {/* Route to the Last Page "Results" */}

                    <Route path="/results">

                        <Results picture1={this.state.picture1} description={this.state.description} title={this.state.title}/>

                    </Route>

                    {/* Route to Home Page */}
                    <Route path="/">

                        <PlatformButtons handlePlatformClick={this.handlePlatformClick}/>

                    </Route>
                </Switch>
                
                

            </section>

            </Router>
        )
    }

}

//  Home Page   -----------------------------------------------------------------------------------------------------------------

function PlatformButtons(props) {

    return(
    <div>
        
        <div className={"d-flex justify-content-center"}>

            <h1>

            Welcome to Game-Aid!  

            </h1>


        </div>

        <div className={"d-flex justify-content-center"}>

            <h3>
                Please Choose a Console Platform Below to Get Started!
            </h3>

        </div>

        <div className={"d-flex justify-content-around"}>

        <div className={"row"}>

        <div className={"col pr-5 pt-5"}>

        <Link to="/excites">

        <button id={"PS4"} onClick={() => {props.handlePlatformClick(document.getElementById("PS4").innerText)}} style={{
            width: "200px",
            height: "200px",
            backgroundColor: "blue",
            fontSize:"24px",
            fontWeight:"bold",
            borderRadius:"25%"
        }}>PS4</button>
        
        </Link>

        </div>

        <Link to="/excites">
        
        <div className={"col pl-5 pr-5 pt-5"}>
            <button id={"XBOX"} onClick={() => {props.handlePlatformClick(document.getElementById("XBOX").innerText)}} style={{
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
            <button id={"SWITCH"} onClick={() => {props.handlePlatformClick(document.getElementById("SWITCH").innerText)}} style={{
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

//  What Excites You Page (2nd Page) --------------------------------------------------------------------------------------------

function Excites(props) {
    return(
        <>
        <div className={"d-flex justify-content-center"}>

        <h2 className={"mt-auto p-2"}>
        What Excites you?
        </h2>

        </div>

        <div className={"d-flex justify-content-between pb-5"}>

            <button id={"Action"} onClick={() => {props.handleGenreClick(document.getElementById("Action").innerText)}} className={"p-2"}>Action/Adventure</button>

            <button id={"Horror"} onClick={() => {props.handleGenreClick(document.getElementById("Horror").innerText)}} className={"p-2"}>Horror</button>

            <button id={"Puzzles"} onClick={() => {props.handleGenreClick(document.getElementById("Puzzles").innerText)}} className={"p-2"}>Puzzles</button>


        </div>

        <div className={"d-flex justify-content-around"}>

            <button id={"Platforming"} onClick={() => {props.handleGenreClick(document.getElementById("Platforming").innerText)}} className={"p-2"}>Platforming</button>

            <button id={"RPG"} onClick={() => {props.handleGenreClick(document.getElementById("RPG").innerText)}} className={"p-2"}>RPG</button>

        </div>

        <div className={"d-flex align-items-start flex-column"}>

        <Link to="/">
            <button className={"mt-auto p-2"}>Prev</button>
        </Link>

        </div>

        <div className={"d-flex align-items-end flex-column"}>

        <Link to="/players">
        <button className={"mt-auto p-2"}>Next</button>
        </Link>

        </div>



        </>
    )

}

// How Many Players Page (3rd Page) ---------------------------------------------------------------------------------------------

function Players(props) {
    return(
        <>
        <div className={"d-flex justify-content-center"}>

        <h2 className={"mt-auto p-2"}>
        Do you prefer the solo life?  Or would you prefer to bring a friend?
        </h2>

        </div>

        <div className={"d-flex justify-content-around"}>
        
        <button id={"Solo"} onClick={() => {props.handlePlayerClick("Single")}} className={"p-2"}></button>

        <button id={"Multi"} onClick={() => {props.handlePlayerClick("Multi")}} className={"p-2"}></button>

        </div>

        <div className={"d-flex justify-content-between"}>

        <Link to="/excites">
            <button className={"p-2"}>Prev</button>
        </Link>

        <Link to="/mood">
            <button className={"p-2"}>Next</button>
        </Link>

        </div>


        </>
    )
}

//  What Mood do you want?  (4th Page) ------------------------------------------------------------------------------------------

function Atmosphere(props) {
    return(
    <>
        <div className={"d-flex justify-content-center"}>

            <h2 className={"mt-auto p-2"}>
                Select the things that sound most appealing to you
            </h2>

        </div>

        <div className={"d-flex justify-content-around"}>

            <button id={"Intense"} className={"p-2"} onClick={() => {props.handleMoodClick("Intense")}}>Dark brooding characters, challenging fights, skill based gameplay, explosions, adrenaline, STUFF IN CAPS</button>


            <button id={"Comedic"} className={"p-2"} onClick={() => {props.handleMoodClick("Comedic")}}>Lighthearted dialogue, witty jokes, casual gameplay, "I had fun while it lasted!", short and sweet</button>


            <button id={"Calming"} className={"p-2"} onClick={() => {props.handleMoodClick("Calming")}}>Babbling brooks, soothing music, pastel colors, not a whole lot of reading, letting your mind drift away</button>



        </div>

        <div className={"d-flex justify-content-between"}>

        <Link to="/players">
        <button className={"p-2"}>Prev</button>
        </Link>

        <Link to="/invest">
        <button className={"p-2"}>Next</button>
        </Link>

        </div>
        

    </>
    )
}


// Time Investment Page (5th Page)  ---------------------------------------------------------------------------------------------

function Investment(props) {
    return(
        <>
        <div className={"d-flex justify-content-center"}>

            <h2 className={"mt-auto p-2"}>
                How Long Do YOU Think A Game Should Last?
            </h2>
        
        </div>

        <div className={"d-flex justify-content-around"}>

        <button id={"timeTen"} onClick={() => {props.handleTimeClick(10)}}>Not Too Long...</button>

        <button id={"timeTwentyFive"} onClick={() => {props.handleTimeClick(25)}}>Long Enough To Really Dive Deep</button>

        <button id={"timeFifty"} onClick={() => {props.handleTimeClick(50)}}>This Is My Life Now</button>

        </div>

        <div className={"d-flex justify-content-between"}>

        <Link to="/mood">
        <button>Prev</button>
        </Link>
        
        <Link to="/results">
        <button onClick={() => {props.handleSubmit()}}>Show Me What To Play!</button>
        </Link>

        </div>
                
        </>
    )
}

function Results(props) {
    return (
        <>
            <h1 className={"d-flex justify-content-center"}>
                Try out this game!
            </h1>
            <div>
                <h1>
                    {props.title}
                </h1>

                <h3>
                    {props.description}
                </h3>
            </div>

            <div>
                <img src={props.picture1}/>
            </div>


            <div>
                <Link to="/">

                <button id={"Back"}>
                    Want to see a new game or tweak your answers?  Try Again!
                </button>
                
                </Link>
            </div>
        </>
    )
}

export default App;