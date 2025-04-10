import React from 'react'

const Login = () => {
  return (
    <body>
    <title>PullUp</title>
    <div class="container">
        <h1>PullUp</h1>
        <h6 class="centered-text">Conquer The Parks</h6>
        <form id="locationForm">
            <div class="form-group">
                <input type="text" id="location" name="location" class="form-control" placeholder="Enter city or park name" />
                <button type="button" id="button1" class="btn btn-primary" onclick="browseCourts()">Browse Courts</button>
                <button type="button" id="button1" class="btn btn-primary" onclick="showMap()">Popular Courts</button>
                <button type="button" id="button1" class="btn btn-primary" onclick="showSavedCourts()">Saved Courts</button>
            </div>
        </form>
    </div>
    </body>
  )
}

export default Login