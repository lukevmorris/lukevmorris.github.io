CardColumn = require("./card_column");
BufferContainer = require("./buffer_container");
RewindStream = require("./rewind_stream");
SearchQuery = require("./search_query");

var SearchVisualizer = React.createClass({
  render: function() {
    return (
      React.createElement("div", {className: "searchVisualizer"},
        React.createElement(CardColumn),
        React.createElement(BufferContainer),
        React.createElement(RewindStream),
        React.createElement(SearchQuery)
      )
    );
  }
});

module.exports = SearchVisualizer;
