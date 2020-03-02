'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Search(Props) {
  var handleSubmit = Props.handleSubmit;
  var match = React.useState((function () {
          return "";
        }));
  var setQuery = match[1];
  var query = match[0];
  return React.createElement("form", {
              className: "search-form",
              onSubmit: (function (e) {
                  return Curry._2(handleSubmit, query, e);
                })
            }, React.createElement("input", {
                  name: "search",
                  placeholder: "Search",
                  type: "text",
                  value: query,
                  onChange: (function (e) {
                      return Curry._1(setQuery, e.target.value);
                    })
                }), React.createElement("button", {
                  className: "search-button",
                  type: "submit"
                }, React.createElement("img", {
                      alt: "search-icon",
                      src: "public/img/search.svg"
                    })));
}

var make = Search;

exports.make = make;
/* react Not a pure module */
