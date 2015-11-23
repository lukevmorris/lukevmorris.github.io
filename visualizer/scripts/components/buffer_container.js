BufferingCollator = require("./buffering_collator");

var BufferContainer = React.createClass({
  render: function() {
    return (
      React.createElement("div", {className: "bufferContainer"},
        React.createElement("div", {className: "componentLabel"}, "Buffering Collator"),
        React.createElement(BufferingCollator)
      )
    )
  }
});

module.exports = BufferContainer;
