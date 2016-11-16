import React from "react";
import ReactDOM from "react-dom";


var Counter = React.createClass({
  render: function() {
    var textStyle = {
      fontSize: 48,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
});

var Car = React.createClass({
  getInitialState: function () {
    return {
      speed: 0,
      carInfo: "car"
    };
  },

  renderCar: function (e) {
     this.setState({
       carInfo: a + b
     });

     this._inputElement.value = "";

     e.preventDefault();
  },

  increase: function (e) {
    this.setState({
      speed: this.state.speed + 10
    });
  },

  decrease: function (e) {
    if (this.state.speed < 7) {
      this.setState({
        speed: this.state.speed = 0
      });
     } else {
      this.setState({
        speed: this.state.speed - 7
     });
    }
  },


  render: function () {
    var buttonStyle = {
      fontSize: "1em",
      width: 100,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",

    };

    var formStyle = {
      width: 200,
      height: 30,
      color: "#333",
      fontWeight: "bold",
      fontSize: 12,
    }

    return (
      <div>
        <h1>Awesome Car Simulation App</h1>
        <form onSubmit={this.renderCar}>
          <input ref={(a) => this._inputElement = a} placeholder="Enter car model and make" style={formStyle}></input>
          <br></br>
          <br></br>
          <input ref={(b) => this._inputElement = b} placeholder="Enter car year" style={formStyle}></input>
          <br></br>
          <br></br>
          <button type="submit" style={buttonStyle}>Create Car</button>
        </form>
        <br></br>
        <br></br>
        Your car is {this.state.renderCar}
        <Counter display={this.state.speed}/>
        <br></br>
        <button onClick={this.increase} style={buttonStyle}>Accelerate</button>
        <br></br>
        <br></br>
        <button onClick={this.decrease} style={buttonStyle}>Brake</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Car/>,
  document.querySelector("#container")
);
