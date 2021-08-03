var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//component for the update boat screen
var UpdateBoat = function (_React$Component) {
  _inherits(UpdateBoat, _React$Component);

  function UpdateBoat(props) {
    _classCallCheck(this, UpdateBoat);

    var _this = _possibleConstructorReturn(this, (UpdateBoat.__proto__ || Object.getPrototypeOf(UpdateBoat)).call(this, props));

    _this.state = {
      boatId: props.boatId,
      swimLane: props.swimLane
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(UpdateBoat, [{
    key: "handleClick",
    value: function handleClick() {
      var swimLane = this.state.swimLane;
      var boatId = this.state.boatId;
      axios.put("/boats/" + boatId, {
        swimLane: swimLane
      }).then(function () {
        ReactDOM.render(React.createElement(App, { key: new Date().getTime() }), document.getElementById("root"));
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ swimLane: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Title, null),
        React.createElement(HomeButton, { display: "Back", rerender: false }),
        React.createElement(
          "select",
          { value: this.state.swimLane, onChange: this.handleChange },
          React.createElement(SwimLaneOptions, null)
        ),
        React.createElement(
          "button",
          { onClick: this.handleClick },
          "Update Boat"
        )
      );
    }
  }]);

  return UpdateBoat;
}(React.Component);