import React from "react";
import ReactDOM from "react-dom";

//Initializing Counter component
var Counter = React.createClass({
  render: function() {
    var textStyle = {
      fontSize: 48,
      fontFamily: "Orbitron",
      color: "#333",
      fontWeight: "bold",
      margin: 20
    };
    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
});

//Initializing MyCar component
var MyCar = React.createClass({
  render: function() {
    var carStyle = {
      fontSize: 36,
      fontFamily: "Orbitron",
      color: "#333",
      fontWeight: "bold",
      margin: 20
    };
    return <div style={carStyle}>{this.props.carForm}</div>;
  }
});

//Initializing Lights component
var Lights = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.lightstatus}
      </div>
    );
  }
});

//Initializing Car component
var Car = React.createClass({
  //Setting Initial State
  getInitialState: function () {
    return {
      speed: 0,
      carForm: '',
      carInfo: '',
      carLights: 'Off'
    };
  },

//When onChange event occurs, the value of the carForm element changes.
  onChange: function (e) {
     this.setState({
       carForm: e.target.value
     });

  },

//On buttonClick, the onSubmit event fires - rendering the value user input in the carInfo field.
  onSubmit: function (e) {
    //Prevent following the link
    e.preventDefault();
    this.setState({carForm: '', carInfo: this.state.carForm});
  },

//Initializing Accelerate function
  increase: function (e) {
    if  (this.state.speed < 120) {
    this.setState({
      speed: this.state.speed + 10
    });
  }
  },

//Initializing Brake function
  decrease: function (e) {
    //if speed is less than 7, setState to 0.
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

//Initializing Lights On function
  turnOn: function(e){
      this.setState({carLights: this.state.carLights = "On"
      });
  },

//Initializing Lights Off function
  turnOff: function(e){
    this.setState({carLights: this.state.carLights = "Off"
    });
  },

//render on DOM
  render: function () {
    var buttonStyle = {
      fontSize: "1em",
      width: 200,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      margin: 20,
      fontFamily: "Orbitron",
      textAlign: "center"
    };

    var formStyle = {
      width: 200,
      height: 30,
      color: "#333",
      fontWeight: "bold",
      fontSize: 12,
      margin: 20
    };

    var bodyStyle = {
      backgroundColor: "#0C0915",
      height: "auto",
      fontFamily: "Orbitron",
      textAlign: "center",
      color: "white"
    };

    var contacStyle = {
      fontFamily: "Orbitron",
      textAlign: "center",
      fontSize: 24,
      margin: 40,
      color: "#7A59E2"
    };

    var headerStyle = {
      backgroundImage: "url(' http://www.vactualpapers.com/web/wallpapers/an-old-vintage-classic-black-car-automotive-hd-wallpaper/thumbnail/lg.jpg')",
      height: 600,
      backgroundSize: "cover",
      margin: 30
    }

    return (
      <div style={bodyStyle}>
        <div className="container">
          <div style={headerStyle}></div>
            <h1>Dream Car Simulation</h1>
          <hr/>
            <form onSubmit={this.onSubmit} onChange={this.onChange}     value={this.state.carForm}>
              <input placeholder="Enter car model and make" style={formStyle}></input>
              <button type="submit" style={buttonStyle}>Build My Car</button>
            </form>
            <h3>Your Car:</h3><MyCar carForm={this.state.carInfo} />
          <hr/>
            <h3>Speedometer(mph):</h3> <Counter display={this.state.speed}/>
            <br></br>
            <button onClick={this.increase} style={buttonStyle}>Accelerate</button>
            <button onClick={this.decrease} style={buttonStyle}>Brake</button>
            <br></br>
          <hr/>
            <h3>Headlights: <Lights lightstatus={this.state.carLights}/></h3>
            <form>
              Turn On<input type="radio" style={buttonStyle} onChange={this.turnOn} value="On" name="Lights"/>
              Turn Off<input type="radio"  style={buttonStyle} onChange={this.turnOff} value="Off" name="Lights"/>
            </form>
            <p style={contacStyle}>Are you ready to purchase your car? Please click <a href="mailto:bulgan.batmagnai@gmail.com">here!</a></p>
        </div>
      </div>
    );
  }
});

// Render an instance into document.body
ReactDOM.render(
  <Car/>,
  document.querySelector("#container")
);
