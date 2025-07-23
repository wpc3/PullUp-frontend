import React from 'react'
import './Home.css'
import Logo from '../Assets/PullUpLogoSUNSET.png'
// import CaliCourt from '../Assets/PullUPCourt.jpeg'
import SunsetCourt from '../Assets/PullUpCourt(Sunset).jpg'
import Urban from '../Assets/PullUpCourt(URBAN).jpg'
import Majestic from '../Assets/PullUpCourt(Majestic).jpg'
import slogan from '../Assets/Slogan.png'

const Home = () => {
  return (
    <body>
      <title>PullUp</title>
      <div class="container">
        <form id="locationForm">
          <div>
           <img className='Background' src={Majestic} alt="" />
            <div class="form-group"> 
            
              <h1 className='logo'>
                Pull Up
              </h1>
              <h4 class="tagline">Conquer The Parks</h4>
              <div className='button-group'>
                {/* <input type="text" id="location" name="location" class="form-control" placeholder="Enter city or park name" /> */}
                <button type="button" id="button1" class="btn btn-primary" className='button1' onclick="browseCourts()">Browse Courts</button>
                <button type="button" id="button1" class="btn btn-primary" className='button2' onclick="showCourts()">Popular Courts</button>
                <br />
                <button type="button" id="button1" class="btn btn-primary" className='profile-button' onclick=" ">My Profile</button>
                {/* <button type="button" id="button1" class="btn btn-primary" onclick="showSavedCourts()">Saved Courts</button> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  )
}

export default Home