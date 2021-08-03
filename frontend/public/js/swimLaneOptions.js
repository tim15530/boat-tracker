//contains list of all swim lane options as well as components pertaining to swim lanes

var SWIM_LANE_OPTIONS = ["Docked", "Outbound to Sea", "Inbound to Harbor", "Maintenance"];

function SwimLaneOptions(props) {
  var arrayOfOptions = [];
  for (var i in SWIM_LANE_OPTIONS) {
    arrayOfOptions.push(React.createElement(
      "option",
      { value: SWIM_LANE_OPTIONS[i] },
      SWIM_LANE_OPTIONS[i]
    ));
  }
  return React.createElement(
    React.Fragment,
    null,
    arrayOfOptions
  );
}