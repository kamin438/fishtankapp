import React, { useState } from 'react';
import axios from "axios";
import { Button } from '@shopify/polaris';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const fishgif = "https://bestanimations.com/media/fish/1225845781pretty-goldfish-gif-3.gif#.YpT6ZWfxDo8.link";
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  let handleOnSubmit = () => {
    navigate(`/dashboard`);
  }

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res = response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div className="App">
      <header className="App-header">
        <img src={fishgif} className="" alt="logo" />
        <br></br>
        <p>To view dashboard: </p>
        <Button onClick={handleOnSubmit} primary>Dashboard</Button>
        <br></br>
        {/* new line start*/}
        <p>To get your profile details: </p>
        <Button onClick={getData}>Details</Button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;