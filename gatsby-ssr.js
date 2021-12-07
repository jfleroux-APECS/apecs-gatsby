const React = require("react");

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setBodyAttributes({
    // className: "has-navbar-fixed-top",
  }),
    setHeadComponents([
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
      />,
    ]);
};
