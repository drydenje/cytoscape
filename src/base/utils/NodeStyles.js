import Colours from './Colours';

const NodeDefault = {
  height: 40,
  width: 400,
  shape: 'rectangle',
  content: 'data(label)',
  'text-transform': 'uppercase',
  'font-size': '28px',
  'text-valign': 'center',
  'text-halign': 'center',
  color: '#FFFFFF',
  // 'background-color': Colours.primary,
  'background-color': 'green',
  opacity: 1,
};

const NodeProfilePic = {
  height: 150,
  width: 150,
  shape: 'ellipse',
  'background-color': '#ffffff',
  opacity: 1,
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
