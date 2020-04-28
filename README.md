# GameAid
A video game recommendation application where users can answer various questions about themselves and their interests, and the application will evaluate those answers and recommend a video game that best suits them.

# Table of Contents
- [Goals](#Goals)
- [Workflow](#Workflow)
- [Challenges](#Challenges)
- [User Stories](#User-Stories)
- [Features To Be Added](#Features-To-Be-Added)
- [Known Bugs](#Known-Bugs)
- [Tech Stack](#Tech-Stack)

# Goals
This was a different kind of project because I am very interested in transitioning into and learning video game development and a significant portion of that industry experiences "crunch" where developers are working for very long hours in a short amount of time.  I wanted to simulate this by giving myself 48 hours to design and build this application from scratch and get it to a minimum level of viability.

# Workflow
My workflow consisted of breaking down my project into 5 phases: Planning, coming up with the initial idea and whiteboarding the different parts and technologies needed; Scaffolding, just setting up the basic skeleton of the project; Production, getting most of the meat of the project finished; Testing, making sure basic components are working and rendering correctly along with bug fixing; Polishing, most styling and UI passes were made here.  I also used Trello to break down the project into different tickets to make sure I stayed on track.

# Challenges
I initially wanted to make a mobile app using React Native, however because of the time deadline I gave myself, the issues I ran into with setting up my mobile developement environment (having never done it before) really hampered my progress and ultimately I had to pivot to a web application.

# User Stories
- Users should be able to select a platform for which a game will be recommended
- Users should be able to, mid-quiz, go back and change answers before the final submission
- Users should be able to return to the main screen after completing the quiz to do it again

# Features To Be Added
- More titles to be added for recommendation
- Move to mobile application
- Tweaking the way the application evaluates the questions to provide better and more varied results

# Known Bugs
- After returning to the title screen after finishing a quiz, the page needs to be refreshed to reset answer state
- Application will recommend the same game sometimes even with different answers

# Tech Stack
<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">APIs</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"/></td>
    <td align="center"><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="React Router" title="React Router" width="70px"/></td>
    <td align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap" width="60px"/></td>
    <td align="center"><img src="https://www.logolynx.com/images/logolynx/f4/f436442c17fa509c78e28aa28c76b923.png" alt="MongoDB" title="MongoDB" width="60px"/></td>
  </tr>
</table>
