import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
      if (isSignedIn) {
        return(
      <nav style={{display: 'flex', justifyContent:'flex-end', zIndex: '2'}}>
          <p onClick={() => onRouteChange('signout')} className="relative f3 link dim black underline pa3 pointer Gumball">Sign Out</p>
      </nav>
        )} else {
        return(
        <nav style={{display: 'flex', justifyContent:'flex-end', zIndex: '2'}}>
          <p onClick={() => onRouteChange('signin')} className="relative f3 link dim black underline pa3 pointer Gumball">Sign in</p>
          <p onClick={() => onRouteChange('register')} className="relative f3 link dim black underline pa3 pointer Gumball">Register</p>
        </nav>
        );
      }  
    
}

export default Navigation