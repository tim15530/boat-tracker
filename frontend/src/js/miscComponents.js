//miscellaneous components

function Title(props) {
  return (
    <h1>
      Boat Tracker
    </h1>
  )
}

class HomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.display = props.display;
    this.rerender = props.rerender;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if(this.rerender) {
      ReactDOM.render(<App key={(new Date()).getTime()}/>, document.getElementById("root"));
    } else {
      ReactDOM.render(<App/>, document.getElementById("root"));
    }
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.display}
      </button>
    );
  }
}

class AddBoatButton extends React.Component {
  handleClick() {
    ReactDOM.render(<AddBoat key={(new Date()).getTime()}/>, document.getElementById("root"));
  }
  render() {
    return (
      <button onClick={this.handleClick} className="buttonRight">
        Add Boat
      </button>
    );
  }
}
