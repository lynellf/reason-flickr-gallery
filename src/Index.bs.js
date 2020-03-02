'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactExamples = require("./App/App.bs.js");

function main(param) {
  var entryPoint = document.getElementById("app");
  ReactDom.render(React.createElement(App$ReasonReactExamples.make, {
            apiKey: ""
          }), entryPoint);
  return /* () */0;
}

main(/* () */0);

exports.main = main;
/*  Not a pure module */
