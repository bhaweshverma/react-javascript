import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //assigns props to this context

    this.state = {
      count: 0,
      userInfo: { name: "Bhawesh Verma", location: "Bengaluru" },
    };

    //console.log(this.props);
    //console.log("Child Component in Constructor - " + this.props.name);
  }

  async componentDidMount() {
    //console.log("Child component did mount - " + this.props.name);
    let response = await fetch("https://api.github.com/users/bhaweshverma");

    let json = await response.json();

    this.setState({
      userInfo: json,
    });

    // this.timerId = setInterval(() => {
    //   console.log(
    //     "setInterval is running, need to clear in componentWillUnmount method"
    //   );
    // }, 1000);
  }

  componentDidUpdate() {
    //console.log("Component did update");
  }

  componentWillUnmount() {
    //debugger;
    //clearInterval(this.timerId);
    //console.log("Component will unmount when this element is not in viewport");
  }
  render(props) {
    //console.log("Child Component rendered - " + this.props.name);
    //const { name, location } = this.props;
    const { count, userInfo } = this.state;

    return (
      <div className="user-card">
        <h2>Count - {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <img src={userInfo.avatar_url} />
        <h3>{userInfo.name}</h3>
        <h4>{userInfo.location}</h4>
        <h5>bhaweshverma.com</h5>
      </div>
    );
  }
}

export default UserClass;
