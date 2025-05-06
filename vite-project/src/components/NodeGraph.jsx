// components/NodeGraph.jsx
import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ProfileNode } from './ProfileNode'; // Make sure this path is correct

const nodeTypes = {
  profile: ProfileNode
};

export default function NodeGraph() {
  const initialNodes = [
    {
      id: '1',
      type: 'profile', // ✅ Use custom node type
      data: {
        name: 'Ben Shapiro',
        region: 'USA',
        ethnicity: 'Jewish',
        religion: 'Jewish',
        ideology: 'Conservative',
        img: '/ProfilePicture.png',
        profileLink: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
      },
      position: { x: 100, y: 100 }
    },
    {
      id: '2',
      type: 'profile', // ✅ Use custom node type
      data: {
        name: 'Matt Walsh',
        region: 'USA',
        ethnicity: 'Anglo',
        religion: 'Protestant*',
        ideology: 'Conservative',
        img: '/ProfilePicture.png',
        profileLink: 'https://en.wikipedia.org/wiki/Alan_Turing'
      },
      position: { x: 400, y: 100 }
    }
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'default' }
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes} // ✅ Register custom node
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
