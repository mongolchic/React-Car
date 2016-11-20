import React from "react";
import ReactDOM from "react-dom";
// import "../index.css";

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

var MyCar = React.createClass({
  render: function() {
    var carStyle = {
      fontSize: 36,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return <div style={carStyle}>{this.props.carField}</div>;
  }
});

var Car = React.createClass({
  getInitialState: function () {
    return {
      speed: 0,
      carField: '',
      carInfo: '',
      carLightsOn: false
    };
  },

  onChange: function (e) {
     this.setState({
       carField: e.target.value
     });

  },

  onSubmit: function (e) {
    e.preventDefault();
    this.setState({carField: '', carInfo: this.state.carField});
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
      width: 200,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      margin: 10
    };

    var formStyle = {
      width: 200,
      height: 30,
      color: "#333",
      fontWeight: "bold",
      fontSize: 12,
      margin: 10
    };

    var spanStyle = {
      borderWidth: 20,
      borderHeight: 20,

      borderStyle: 'solid',

    };


    return (
        <div className="container">
          <h1>Awesome Car Simulation App</h1>
          <form onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.carField}>
            <input placeholder="Enter car model and make" style={formStyle}></input>
            <button type="submit" style={buttonStyle}>Build My Car Car</button>
          </form>
          <h3>Your Car:</h3><MyCar carField={this.state.carInfo} />
          <h2>{this.state.renderCar}</h2>
          <hr/>
          <h3>Speedometer:</h3> <Counter display={this.state.speed}/>
          <br></br>
          <button onClick={this.increase} style={buttonStyle}>Accelerate</button>
          <button onClick={this.decrease} style={buttonStyle}>Brake</button>
          <br/>
          <hr/>
          <span style={spanStyle}></span>
          <br/>
          <br/>
          <form>
            Switch On
            <input type="radio" style={buttonStyle} value="Lights On"/>
            Switch Off
            <input type="radio" style={buttonStyle} value="Lights Off"/>
          </form>
        </div>

    );
  }
});

ReactDOM.render(
  <Car/>,
  document.querySelector("#container")
);
