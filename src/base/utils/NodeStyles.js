import Colours from './Colours';

const NodeDefault = {
  height: 40,
  width: 200,
  shape: 'rectangle',
  content: 'data(label)',
  'text-transform': 'uppercase',
  'font-size': '28px',
  'text-valign': 'center',
  'text-halign': 'center',
  color: '#FFFFFF',
  'background-color': Colours.primary,
  'background-opacity': 100,
};

const NodeProfilePic = {
  height: 150,
  width: 150,
  shape: 'ellipse',
  'background-color': '#ffffff',
  'background-opacity': 100,
};

const NodeTeamTitle = {
  height: 60,
  width: 350,
  color: Colours.primary,
  'background-color': Colours.secondary,
};

// const NodeTeamTitleSmall = {

// }

export { NodeDefault, NodeProfilePic, NodeTeamTitle };
