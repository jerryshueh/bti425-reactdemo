import React, { Component } from 'react';
import MainContainer from "./MainContainer";
// import whatever else you like here

// Declare your Component here
class NotFound extends Component {
  render() {
    return (
      <MainContainer>
        <h2>Error - Requested View Not Found!</h2>
      </MainContainer>
    );
  }
}

// export the component by name
export default NotFound; 