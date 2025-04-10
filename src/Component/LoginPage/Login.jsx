import React from 'react'
import '../LoginPage/Login.css'
import Logo from  '../Assets/PullUpLogo.png'
import CaliCourt from '../Assets/PullUPCourt.jpeg'

const Login = () => {
  return (
    <body>
    <title>PullUp</title>
    <div class="container"> 

        <form id="locationForm">
          <div>
          <img className='Background' src={CaliCourt}alt="" />
            <div class="form-group">
          
            <div className='logo'> 
               <img src={Logo} alt="" />
              
               </div>
               <br/> 
                <h4 class="tagline">Conquer The Parks</h4>
                <div>
                <input type="text" id="location" name="location" class="form-control" placeholder="Enter city or park name" />
                <button type="button" id="button1" class="btn btn-primary" onclick="browseCourts()">Browse Courts</button>
                <button type="button" id="button1" class="btn btn-primary" onclick="showMap()">Popular Courts</button>
                <button type="button" id="button1" class="btn btn-primary" onclick="showSavedCourts()">Saved Courts</button>
                </div>
            </div>
            </div>
        </form>
    </div>
    </body>
  )
}

export default Login