'use client';
import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import Colours from '@/base/utils/Colours';
import { NodeDefault, NodeProfilePic } from '@/base/utils/NodeStyles';

const elements = [
  {
    data: { id: 'head', label: 'HEAD', type: 'profilePic' },
    position: { x: 100, y: 0 },
  },
  {
    data: { id: 'toronto', label: 'TORONTO ACQUIRES' },
    position: { x: 0, y: 100 },
  },
  {
    data: { id: 'calgary', label: 'CALGARY ACQUIRES' },
    position: { x: 200, y: 100 },
  },
  {
    data: { id: 't1', label: 'FREDRIK SJOSTROM' },
    position: { x: 200, y: 100 },
  },
  { data: { id: 't2', label: 'KEITH AULIE' }, position: { x: 200, y: 100 } },
  { data: { id: 't3', label: 'DION PHANEUF' }, position: { x: 200, y: 100 } },
  { data: { id: 'c1', label: 'MATT STAJAN' }, position: { x: 200, y: 100 } },
  { data: { id: 'c2', label: 'JAMAL MAYERS' }, position: { x: 200, y: 100 } },
  { data: { id: 'c3', label: 'IAN WHITE' }, position: { x: 200, y: 100 } },
  { data: { id: 'c4', label: 'NIKLAS HAGMAN' }, position: { x: 200, y: 100 } },
  {
    data: {
      source: 'head',
      label: 'Toronto Acquires',
      target: 'toronto',
    },
  },
  {
    data: {
      source: 'head',
      target: 'calgary',
      label: 'Calgary Acquires',
    },
  },
  {
    data: {
      source: 'toronto',
      target: 't1',
      label: 'Edge from Toronto to t1',
    },
  },
  {
    data: {
      source: 'toronto',
      target: 't2',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 'toronto',
      target: 't3',
      label: 'Edge from Toronto to t3',
    },
  },
  {
    data: {
      source: 'calgary',
      target: 'c1',
      label: 'Edge from Calgary to c1',
    },
  },
  {
    data: {
      source: 'calgary',
      target: 'c2',
      label: 'Edge from Calgary to c2',
    },
  },
  {
    data: {
      source: 'calgary',
      target: 'c3',
      label: 'Edge from Calgary to c3',
    },
  },
  {
    data: {
      source: 'calgary',
      target: 'c4',
      label: 'Edge from Calgary to c4',
    },
  },
];

const style = {
  width: '100vw',
  height: '80vh',
  border: '1px solid black',
  margin: '0 auto',
  color: Colours.secondary,
  'background-color': Colours.primary,
};

const stylesheet = [
  {
    selector: 'node',
    style: {
      ...NodeDefault,
    },
  },
  {
    selector: 'node:orphan',
    style: {
      // ...TeamLarge,
    },
  },
  {
    selector: "node[type='profilePic']",
    style: {
      ...NodeDefault,
      ...NodeProfilePic,
    },
  },
  {
    selector: 'edge',
    style: {
      'line-color': '#ffffff',
      width: 5,
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
