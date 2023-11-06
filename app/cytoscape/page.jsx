'use client';
import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';

const elements = [
  { data: { id: 'one', label: 'Parent' }, position: { x: 100, y: 0 } },
  { data: { id: 'two', label: 'Child 1' }, position: { x: 0, y: 100 } },
  { data: { id: 'three', label: 'Child 2' }, position: { x: 200, y: 100 } },
  {
    data: {
      source: 'one',
      target: 'two',
      label: 'Edge from Parent to Child 1',
    },
  },
  {
    data: {
      source: 'one',
      target: 'three',
      label: 'Edge from Parent to Child 2',
    },
  },
];

const style = {
  width: '600px',
  height: '600px',
  border: '1px solid black',
};

const stylesheet = [
  {
    selector: 'node',
    style: {
      width: 100,
      height: 20,
      shape: 'rectangle',
      content: 'data(label)',
      'font-size': '12px',
      'text-valign': 'center',
      'text-halign': 'center',
      color: 'blue',
      'background-color': '#000000',
      'background-opacity': 0,
    },
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'taxi',
      'taxi-direction': 'downward',
      'taxi-turn': 20,
      'taxi-turn-min-distance': 5,
    },
  },
];

const layout = { name: 'dagre' };

Cytoscape.use(dagre);

export default function Home() {
  return (
    <main>
      <h2>Cytoscape Test</h2>
      <CytoscapeComponent
        elements={elements}
        style={style}
        stylesheet={stylesheet}
        layout={layout}
      />
    </main>
  );
}
