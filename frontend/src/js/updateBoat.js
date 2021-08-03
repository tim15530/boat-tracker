//component for the update boat screen
class UpdateBoat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boatId: props.boatId,
      swimLane: props.swimLane
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const swimLane = this.state.swimLane;
    const boatId = this.state.boatId;
    axios.put("/boats/" + boatId, {
      swimLane: swimLane
    }).then(function() {
      ReactDOM.render(<App key={(new Date()).getTime()}/>, document.getElementById("root"));
    });
  }

  handleChange(event) {
    this.setState({swimLane: event.target.value});
  }

  render() {
    return (
      <div>
        <Title/>
        <HomeButton display="Back" rerender={false}/>
        <select value={this.state.swimLane} onChange={this.handleChange}>
          <SwimLaneOptions/>
        </select>
        <button onClick={this.handleClick}>Update Boat</button>
      </div>
    );
  }

}
