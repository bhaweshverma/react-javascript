import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//Functional Component

const About = () => {
  return (
    <>
      <h1>This is about page</h1>
      <h2>Description about About page</h2>
      <User name={"Bhawesh Verma from (functional component)"} />
      <UserClass
        name={"Bhawesh Verma from (class component)"}
        location={"Bengaluru"}
      />
    </>
  );
};

//Class Component - for learning and lifecycle methods
/*
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>This is about page</h1>
        <h2>Description about About page</h2>
        */
// {/* <User name={"Bhawesh Verma from (functional component)"} /> */
/*
        <UserClass
          name={"Child1 from (class component)"}
          location={"Bengaluru"}
        />
        <UserClass
          name={"Child2 from (class component)"}
          location={"Bengaluru"}
        />
      </>
    );
  }
}
*/

export default About;
