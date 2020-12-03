import React from "react";
import './App.css'

function Tweet(props) {
    /**
     * To add css, we need to forst import the css file "import './App.css'"
     * and then add it as javascript with the element like <div className="tweet">
     */
  return (
    <div className="tweet">
      <h2>Name : {props.name}</h2>
      <p>{props.tweet}</p>
      <h3>No of Likes : {props.likes}</h3>
    </div>
  );
}

export default Tweet;
