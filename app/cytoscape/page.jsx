'use client';
import React, { useEffect, useRef } from 'react';
import { createRoot, unmount } from 'react-dom/client';
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
  { data: { id: 'head', label: 'HEAD', type: 'profilePic' } },

  { data: { id: 'toronto', label: 'TORONTO ACQUIRES', type: 'teamTitle' } },
  { data: { id: 't1', label: 'Fredrik Sjostrom' } },
  { data: { id: 't2', label: 'Keith Aulie' } },
  { data: { id: 't4', label: 'To Tampa Bay For', type: 'teamTitle' } },
  { data: { id: 't5', label: 'Carter Ashton' } },
  { data: { id: 't6', label: 'David Brolll' } },
  { data: { id: 't7', label: 'To Tampa Bay For', type: 'teamTitle' } },
  { data: { id: 't8', label: '7th Round Pick (2016)' } },
  { data: { id: 't9', label: 'Ryan Lohin - 208th Overall' } },
  { data: { id: 't3', label: 'Dion Phaneuf' } },

  { data: { id: 'calgary', label: 'CALGARY ACQUIRES', type: 'teamTitle' } },
  { data: { id: 'c1', label: 'Matt Stajan' } },
  { data: { id: 'c2', label: 'Jamal Mayers' } },
  { data: { id: 'c3', label: 'Iam White' } },
  { data: { id: 'c4', label: 'Niklas Hagman' } },
  { data: { id: 'c5', label: 'Brett Sutter' } },
  { data: { id: 'c6', label: 'To Carolina For', type: 'teamTitle' } },
  { data: { id: 'c7', label: 'Anton Babchuk' } },
  { data: { id: 'c8', label: 'Tom Kostopoulos' } },

  // Edges
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
      source: 't2',
      target: 't4',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 't4',
      target: 't5',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 't5',
      target: 't6',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 't6',
      target: 't7',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 't7',
      target: 't8',
      label: 'Edge from Toronto to t2',
    },
  },
  {
    data: {
      source: 't8',
      target: 't9',
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
  {
    data: {
      source: 'c5',
      target: 'c6',
      label: 'Edge from Calgary to c4',
    },
  },
  {
    data: {
      source: 'c6',
      target: 'c7',
      label: 'Edge from Calgary to c4',
    },
  },
  {
    data: {
      source: 'c6',
      target: 'c8',
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
  return <Button id="playerTooltip">Hi</Button>;
  // return <Button>Hi, {name}</Button>;
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
  const playerDetailsRef = useRef(null);

  useEffect(() => {
    const cy = cyRef.current;

    cy.nodes().on('mouseover', (event) => {
      // console.log('ref:', cyPopperRef);
      // console.log('e:', event);
      cyPopperRef.current = event.target.popper({
        content: createContentFromComponent(<PlayerInfo />),
        popper: {
          placement: 'right',
          removeOnDestroy: true,
        },
      });
    });

    cy.nodes().on('mouseout', async () => {
      if (cyPopperRef) {
        // console.log('cyPopperRef:', cyPopperRef.current.state.elements.popper);
        // console.log(cyPopperRef.current);

        // const root = cyPopperRef.current.state.elements.popper;
        // root.destroy();
        cyPopperRef.current.destroy();

        const div = document.getElementById('playerTooltip');
        if (div !== null) {
          console.log('div:', div);
          const parent = div.closest('div');
          playerDetailsRef.current = parent;
        }
        const root = createRoot(playerDetailsRef);
        root.unmount();
        console.log('playerDetailsRef.current:', playerDetailsRef.current);
        // console.log('after:', cyPopperRef.current);
      }
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
          // cy.layout(layout).run();
        }}
      />
    </main>
  );
}

// const tmp =
