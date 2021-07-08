import React from 'react';

// components

import MyNavbar from "./components/my-navbar/mynavbar";
import MyCarousal from "./components/my-carousal/mycarousal";
import TitleMessage from "./components/title-message/title-message";


import './App.css';

const App=()=> {
  return (
    <div>
    <MyNavbar/>
    <MyCarousal/>
    <TitleMessage/>
      
    </div>
  );
}

export default App;
