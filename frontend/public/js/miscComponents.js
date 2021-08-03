var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//miscellaneous components

function Title(props) {
  return React.createElement(
    "h1",
    null,
    "Boat Tracker"
  );
}

var HomeButton = function (_React$Component) {
  _inherits(HomeButton, _React$Component);

  function HomeButton(props) {
    _classCallCheck(this, HomeButton);

    var _this = _possibleConstructorReturn(this, (HomeButton.__proto__ || Object.getPrototypeOf(HomeButton)).call(this, props));

    _this.display = props.display;
    _this.rerender = props.rerender;
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(HomeButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      if (this.rerender) {
        ReactDOM.render(React.createElement(App, { key: new Date().getTime() }), document.getElementById("root"));
      } else {
        ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleClick },
        this.display
      );
    }
  }]);

  return HomeButton;
}(React.Component);

var AddBoatButton = function (_React$Component2) {
  _inherits(AddBoatButton, _React$Component2);

  function AddBoatButton() {
    _classCallCheck(this, AddBoatButton);

    return _possibleConstructorReturn(this, (AddBoatButton.__proto__ || Object.getPrototypeOf(AddBoatButton)).apply(this, arguments));
  }

  _createClass(AddBoatButton, [{
    key: "handleClick",
    value: function handleClick() {
      ReactDOM.render(React.createElement(AddBoat, { key: new Date().getTime() }), document.getElementById("root"));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleClick, className: "buttonRight" },
        "Add Boat"
      );
    }
  }]);

  return AddBoatButton;
}(React.Component);