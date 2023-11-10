'use client';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import popper from 'cytoscape-popper';
import Colours from '@/base/utils/Colours';
import {
  NodeDefault,
  NodeProfilePic,
  NodeTeamTitle,
} from '@/base/utils/NodeStyles';
import { Button } from '@/base/components/ui/button';

const elements = [
  {
    data: { id: 'head', label: 'HEAD', type: 'profilePic' },
    position: { x: 100, y: 0 },
  },
  {
    data: { id: 'toronto', label: 'TORONTO ACQUIRES', type: 'teamTitle' },
    position: { x: 0, y: 100 },
  },
  {
    data: { id: 'calgary', label: 'CALGARY ACQUIRES', type: 'teamTitle' },
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
    data: { id: 'c5', label: 'Brett Sutter' },
    position: { x: 200, y: 100 },
  },
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
  {
    data: {
      source: 'c3',
      target: 'c5',
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
  backgroundColor: Colours.primary,
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
    selector: "node[type='teamTitle']",
    style: {
      ...NodeDefault,
      ...NodeTeamTitle,
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
Cytoscape.use(popper);

const PlayerInfo = () => {
  return <Button>Oh Hai</Button>;
  // return <div>Oh Hai</div>;
};

const createContentFromComponent = (component) => {
  // creates a div and assigns it to a variable
  const container = document.createElement('div');
  const ele = createRoot(container);
  ele.render(component);
  document.body.appendChild(container);
  return container;
};

// const createContentFromComponent = (component) => {
//   const dummyDomEle = document.createElement('div');
//   ReactDOM.render(component, dummyDomEle);
//   document.body.appendChild(dummyDomEle);
//   return dummyDomEle;
// };

export default function Home() {
  const cyRef = useRef(null);
  const cyPopperRef = useRef(null);

  useEffect(() => {
    const cy = cyRef.current;

    cy.nodes().on('mouseover', (event) => {
      cyPopperRef.current = event.target.popper({
        content: createContentFromComponent(<PlayerInfo />),
        popper: {
          placement: 'right',
          removeOnDestroy: true,
        },
      });
    });

    cy.nodes().on('mouseout', async () => {
      // if (cyPopperRef) {
      // console.log('cyPopperRef:', cyPopperRef.current);

      cyPopperRef.current.destroy();
      console.log('after:', cyPopperRef.current);
      // }
    });
  }, []);

  return (
    <main>
      <h2>Cytoscape Test</h2>
      <CytoscapeComponent
        elements={elements}
        style={style}
        stylesheet={stylesheet}
        layout={layout}
        cy={(cy) => {
          cyRef.current = cy;
          cy.layout(layout).run();
        }}
      />
    </main>
  );
}
