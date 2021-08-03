var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//the main component containing the boats table
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("/boats").then(function (response) {
        _this2.setState({ boats: response.data });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var arrayOfBoatRows = [];
      var headers = [];
      for (var i in SWIM_LANE_OPTIONS) {
        headers.push(React.createElement(
          "th",
          null,
          SWIM_LANE_OPTIONS[i]
        ));
      }
      arrayOfBoatRows.push(React.createElement(
        "tr",
        null,
        headers
      ));

      var row = 0;
      var numberOfBoats = this.state.boats ? this.state.boats.length : 0;
      var counter = 0;

      var mapOfBoats = constructBoatsMap(this.state.boats);
      while (counter < numberOfBoats) {
        var arrayOfBoats = [];
        for (var _i in SWIM_LANE_OPTIONS) {
          var swimLane = SWIM_LANE_OPTIONS[_i];
          if (mapOfBoats[swimLane] && mapOfBoats[swimLane][row]) {
            arrayOfBoats.push(React.createElement(
              "td",
              null,
              React.createElement(Boat, { boat: mapOfBoats[swimLane][row] })
            ));
            counter = counter + 1;
          } else {
            arrayOfBoats.push(React.createElement("td", null));
          }
        }
        arrayOfBoatRows.push(React.createElement(
          "tr",
          null,
          arrayOfBoats
        ));
        row = row + 1;
      }

      return React.createElement(
        "div",
        null,
        React.createElement(Title, null),
        React.createElement(AddBoatButton, null),
        React.createElement(
          "table",
          { className: "table-responsive" },
          arrayOfBoatRows
        )
      );
    }
  }]);

  return App;
}(React.Component);

//helping function for rendering the table


function constructBoatsMap(boats) {
  var result = {};
  for (var i in boats) {
    var boat = boats[i];
    var swimLane = boat.swimLane;
    if (!result[swimLane]) {
      result[swimLane] = [];
    }
    result[swimLane].push(boat);
  }
  return result;
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));