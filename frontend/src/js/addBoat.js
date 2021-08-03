//component for the add boat screen
class AddBoat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {swimLane: SWIM_LANE_OPTIONS[0]};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const swimLane = this.state.swimLane;
    axios.post("/boats", {swimLane: swimLane}).then(
      function() {
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
        <button onClick={this.handleClick}>Add Boat</button>
      </div>
    );
  }

}
