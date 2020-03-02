'use strict';

var React = require("react");
var Search$ReasonReactExamples = require("./components/Search/Search.bs.js");
var Gallery$ReasonReactExamples = require("./components/Gallery/Gallery.bs.js");
var UseFlickr$ReasonReactExamples = require("./hooks/UseFlickr.bs.js");

function PhotoFinder(Props) {
  var apiKey = Props.apiKey;
  var match = UseFlickr$ReasonReactExamples.make(apiKey);
  return React.createElement("div", undefined, React.createElement(Search$ReasonReactExamples.make, {
                  handleSubmit: match[1]
                }), React.createElement(Gallery$ReasonReactExamples.make, {
                  state: match[0]
                }));
}

var make = PhotoFinder;

exports.make = make;
/* react Not a pure module */
