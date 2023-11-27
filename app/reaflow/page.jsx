'use client';
import React from 'react';
import { Canvas } from 'reaflow';

const nodes = [
  {
    id: '1',
    text: '1',
  },
  {
    id: '2',
    text: '2',
  },
];

const edges = [
  {
    id: '1-2',
    from: '1',
    to: '2',
  },
];

const selections = ['1'];

export default function Home() {
  return (
    <Canvas
      maxWidth={800}
      maxHeight={600}
      nodes={[
        {
          id: '1',
          text: '1',
        },
        {
          id: '2',
          text: '2',
        },
      ]}
      edges={[
        {
          id: '1-2',
          from: '1',
          to: '2',
        },
      ]}
      selections={selections}
    />
  );
}
