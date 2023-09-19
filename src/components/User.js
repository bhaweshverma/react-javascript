import { useState, useEffect } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // let timerId = setInterval(() => {
    //   console.log("Calling setInterval");
    // }, 1000);
    // return () => {
    //   clearInterval(timerId);
    //   console.log("useEffect return method");
    // };
  }, []);

  return (
    <div className="user-card">
      <h2>Count - {count}</h2>
      <h2>Count2 - {count2}</h2>
      <h3>{props.name}</h3>
      <h4>Bengaluru</h4>
      <h5>bhaweshverma.com</h5>
    </div>
  );
};

export default User;
