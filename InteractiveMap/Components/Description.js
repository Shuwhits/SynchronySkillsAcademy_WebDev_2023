import "./Description.css";
import React from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../FirebaseConfig";
// import { useEffect, useState } from "react";
// import Stories from "../Components/Stories";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const { Name } = this.props;
    return (
      <div className="Description">
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <p>{this.state.count}, people have been here</p>
        <h1>{Name}</h1>
      </div>
    );
  }
}

export default Description;
