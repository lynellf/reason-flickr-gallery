'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

function updateState($$event, state) {
  if (typeof $$event === "number") {
    return /* Error */1;
  } else {
    switch ($$event.tag | 0) {
      case /* GetData */0 :
          return /* Loading */Block.__(0, [$$event[0]]);
      case /* ResolveData */1 :
          return /* Done */Block.__(1, [$$event[0]]);
      case /* Submit */2 :
          var url = $$event[0];
          if (typeof state === "number" || state.tag) {
            return /* Loading */Block.__(0, [url]);
          } else {
            return /* Loading */Block.__(0, [state[0]]);
          }
      
    }
  }
}

var Err = Caml_exceptions.create("UseFlickr-ReasonReactExamples.Err");

function parsePhotos(payload) {
  return payload.photo;
}

function handleData(responseData, dispatch) {
  var payload = responseData.photos;
  var photos = payload.photo;
  console.log(photos);
  Curry._1(dispatch, /* ResolveData */Block.__(1, [photos]));
  return Promise.resolve(payload);
}

function handleErr(dispatch) {
  Curry._1(dispatch, /* HandleErr */0);
  return Promise.reject([
              Err,
              "Something went wrong!"
            ]);
}

function get(url, dispatch) {
  fetch(url).then((function (response) {
              return response.json();
            })).then((function (d) {
            return handleData(d, dispatch);
          })).catch((function (_err) {
          return handleErr(dispatch);
        }));
  return /* () */0;
}

function make(apiKey) {
  var match = React.useReducer((function (state, $$event) {
          return updateState($$event, state);
        }), /* Ready */0);
  var dispatch = match[1];
  var state = match[0];
  var handleSubmit = function (query, $$event) {
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + (apiKey + ("&tags=" + (query + "&per_page=16&format=json&nojsoncallback=1")));
    $$event.preventDefault();
    Curry._1(dispatch, /* Submit */Block.__(2, [url]));
    return /* () */0;
  };
  React.useEffect((function () {
          if (typeof state !== "number" && !state.tag) {
            get(state[0], dispatch);
          }
          return ;
        }), [state]);
  return /* tuple */[
          state,
          handleSubmit
        ];
}

exports.updateState = updateState;
exports.Err = Err;
exports.parsePhotos = parsePhotos;
exports.handleData = handleData;
exports.handleErr = handleErr;
exports.get = get;
exports.make = make;
/* react Not a pure module */
