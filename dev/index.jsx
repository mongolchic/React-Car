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

var MyCar = React.createClass({
  render: function() {
    var carStyle = {
      fontSize: 36,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return <div style={carStyle}>{this.props.carForm}</div>;
  }
});

var Lights = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.lightstatus}
      </div>
    );
  }
});


var Car = React.createClass({
  getInitialState: function () {
    return {
      speed: 0,
      carForm: '',
      carInfo: '',
      carLights: 'Off'
    };
  },

  onChange: function (e) {
     this.setState({
       carForm: e.target.value
     });

  },

  onSubmit: function (e) {
    e.preventDefault();
    this.setState({carForm: '', carInfo: this.state.carForm});
  },

  increase: function (e) {
    if  (this.state.speed < 120) {
    this.setState({
      speed: this.state.speed + 10
    });
  }
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

  turnOn: function(e){
      this.setState({carLights: this.state.carLights = "On"
      });
  },

  turnOff: function(e){
    this.setState({carLights: this.state.carLights = "Off"
    });
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

    var bodyStyle = {
      backgroundImage: 'url(http://eskipaper.com/images/toy-car-background-1.jpg)',
      height: 1200,
      opacity: 0.8
    };
     var containerStyle = {
       backgroundImage: 'url(http://www.findingtherainbow.net/wp-content/uploads/2015/06/light_blue_parchment_paper_background_1800x1600.jpg)',
    };


    return (
      <div style={bodyStyle}>
        <div className="container" style={containerStyle}>
          <h1>Awesome Car Simulation App</h1>
          <hr/>
          <form onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.carForm}>
            <input placeholder="Enter car model and make" style={formStyle}></input>
            <button type="submit" style={buttonStyle}>Build My Car Car</button>
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
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Car/>,
  document.querySelector("#container")
);
