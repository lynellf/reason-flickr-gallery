'use strict';

var React = require("react");
var PhotoFinder$ReasonReactExamples = require("../Features/PhotoFinder/PhotoFinder.bs.js");

function App(Props) {
  var apiKey = Props.apiKey;
  return React.createElement("div", {
              className: "container"
            }, React.createElement(PhotoFinder$ReasonReactExamples.make, {
                  apiKey: apiKey
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
