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

const Car = React.createClass({
  getInitialState: function () {
    return {
      speed: 0
    };
  },

  // componentDidMount: function (){
  //
  // }
  render: function () {
    return (
     <div>
        <Counter display={this.state.speed}/>
        <button>+</button>
    </div>
    );
  }
});

ReactDOM.render(
  <Car/>,
  document.querySelector("#container")
);
