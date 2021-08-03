//component representing a boat element
class Boat extends React.Component {
  constructor(props) {
    super(props);
    this.boatId = props.boat._id;
    this.swimLane = props.boat.swimLane;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    ReactDOM.render(<UpdateBoat key={(new Date()).getTime()} boatId={this.boatId} swimLane={this.swimLane}/>, document.getElementById("root"));
  }

  render() {
    return (
      <div>
        Boat ID: {this.boatId}
        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}
