//contains list of all swim lane options as well as components pertaining to swim lanes

const SWIM_LANE_OPTIONS = ["Docked", "Outbound to Sea", "Inbound to Harbor", "Maintenance"];

function SwimLaneOptions(props) {
  const arrayOfOptions = [];
  for(let i in SWIM_LANE_OPTIONS) {
    arrayOfOptions.push(<option value={SWIM_LANE_OPTIONS[i]}>{SWIM_LANE_OPTIONS[i]}</option>);
  }
  return (
    <React.Fragment>
      {arrayOfOptions}
    </React.Fragment>
  );
}
