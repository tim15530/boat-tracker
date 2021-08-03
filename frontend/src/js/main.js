//the main component containing the boats table
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/boats").then((response) => {
      this.setState({boats: response.data});
    });
  }

  render() {
    const arrayOfBoatRows = [];
    const headers = [];
    for(let i in SWIM_LANE_OPTIONS) {
      headers.push(<th>{SWIM_LANE_OPTIONS[i]}</th>)
    }
    arrayOfBoatRows.push(<tr>{headers}</tr>);

    let row = 0;
    let numberOfBoats = this.state.boats ? this.state.boats.length : 0;
    let counter = 0;

    const mapOfBoats = constructBoatsMap(this.state.boats);
    while(counter < numberOfBoats) {
      const arrayOfBoats = [];
      for(let i in SWIM_LANE_OPTIONS) {
        const swimLane = SWIM_LANE_OPTIONS[i];
        if(mapOfBoats[swimLane] && mapOfBoats[swimLane][row]) {
          arrayOfBoats.push(<td><Boat boat={mapOfBoats[swimLane][row]}/></td>);
          counter = counter + 1;
        } else {
          arrayOfBoats.push(<td></td>);
        }
      }
      arrayOfBoatRows.push(<tr>{arrayOfBoats}</tr>);
      row = row + 1;
    }

    return (
      <div>
        <Title/>
        <AddBoatButton/>
        <table className="table-responsive">
          {arrayOfBoatRows}
        </table>
      </div>
    );
  }
}

//helping function for rendering the table
function constructBoatsMap(boats) {
  const result = {};
  for(let i in boats) {
    const boat = boats[i];
    const swimLane = boat.swimLane;
    if(!result[swimLane]) {
      result[swimLane] = [];
    }
    result[swimLane].push(boat);
  }
  return result;
}

ReactDOM.render(<App/>, document.getElementById("root"));
