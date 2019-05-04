import React from 'react';
import { NavLink } from "react-router-dom";
//NavLink is a component that acts like the link tags in HTML where you can link
//your webpages to different locations within your web app

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {/*"to" is the only parameter NavLink takes. it is responsible for containing 
       the names of the URLs I defined under Routes in App.js*/}
    </div>
  );
};

export default Navigation;