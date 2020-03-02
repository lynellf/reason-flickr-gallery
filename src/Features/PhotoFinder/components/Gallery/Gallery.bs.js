'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Gallery(Props) {
  var state = Props.state;
  var tmp;
  tmp = typeof state === "number" ? (
      state === /* Ready */0 ? React.createElement("div", undefined, "Search for something!") : React.createElement("div", undefined, "An Error Has Occured.")
    ) : (
      state.tag ? React.createElement("div", {
              className: "photo-container"
            }, React.createElement("ul", undefined, Belt_Array.mapWithIndex(state[0], (function (_i, photo) {
                        var src = "https://farm" + (String(photo.farm) + (".staticflickr.com/" + (photo.server + ("/" + (photo.id + ("_" + (photo.secret + ".jpg")))))));
                        return React.createElement("li", {
                                    key: photo.id,
                                    className: "photo"
                                  }, React.createElement("img", {
                                        alt: "",
                                        src: src
                                      }));
                      })))) : React.createElement("div", undefined, React.createElement("img", {
                  alt: "Loading Results",
                  src: "public/img/Flickr.svg"
                }))
    );
  return React.createElement("div", undefined, tmp);
}

var make = Gallery;

exports.make = make;
/* react Not a pure module */
