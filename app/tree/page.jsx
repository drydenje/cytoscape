'use client';
import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';

const style = {
  width: '100vw',
  height: '80vh',
  border: '1px solid black',
  margin: '0 auto',
};

const stylesheet = [
  {
    selector: 'node',
    css: {
      content: 'data(id)',
      'text-valign': 'center',
      'text-halign': 'center',
    },
  },
  {
    selector: ':parent',
    css: {
      'text-valign': 'top',
      'text-halign': 'center',
    },
  },
  {
    selector: 'edge',
    css: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
    },
  },
];

const elements = CytoscapeComponent.normalizeElements({
  nodes: [
    { data: { id: 'a', parent: 'b' } },
    { data: { id: 'b' } },
    { data: { id: 'c', parent: 'b' } },
    { data: { id: 'd' } },
    { data: { id: 'e' } },
    { data: { id: 'f', parent: 'e' } },
  ],
  edges: [
    { data: { id: 'ad', source: 'a', target: 'd' } },
    { data: { id: 'eb', source: 'e', target: 'b' } },
  ],
});

const layout = { name: 'dagre', padding: 5 };

Cytoscape.use(dagre);

export default function Home() {
  return (
    <>
      <h2>Tree tests</h2>
      <CytoscapeComponent
        elements={elements}
        style={style}
        stylesheet={stylesheet}
        layout={layout}
      />
    </>
  );
}
