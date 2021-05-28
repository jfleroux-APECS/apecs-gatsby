const React = require("react");

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "has-navbar-fixed-top",
  });
};
