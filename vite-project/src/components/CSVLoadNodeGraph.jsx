// components/CSVLoadNodeGraph.jsx
import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Papa from 'papaparse';
import { ProfileNode } from './ProfileNode'; // ✅ Make sure path is correct

const nodeTypes = {
  profile: ProfileNode,
};

const CSVLoadNodeGraph = ({ csvFilePath }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    const loadCSVData = async () => {
      try {
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV: ${response.statusText}`);
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (result) => {
            const parsedNodes = [];
            const parsedEdges = [];

            console.log("Parsed CSV Data:", result.data);

            result.data.forEach((row, index) => {
              if (row.id && row.name) {
                parsedNodes.push({
                  id: row.id.toString(),
                  type: 'profile',
                  data: {
                    name: row.name,
                    region: row.region || '',
                    ethnicity: row.ethnicity || '',
                    religion: row.religion || '',
                    ideology: row.ideology || '',
                    img: row.img || '/ProfilePicture.png', // fallback image
                    profileLink: row.profileLink || '#',
                  },
                  position: {
                    x: row.x || (index * 200), // fallback positions if not specified
                    y: row.y || 100,
                  },
                });
              }
              if (row.source && row.target) {
                parsedEdges.push({
                  id: `e${row.source}-${row.target}`,
                  source: row.source.toString(),
                  target: row.target.toString(),
                  type: 'default',
                });
              }
            });

            setNodes(parsedNodes);
            setEdges(parsedEdges);
            setIsLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setError(error.message);
            setIsLoading(false);
          },
        });
      } catch (error) {
        console.error('Error loading CSV:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadCSVData();
  }, [csvFilePath]);

  if (isLoading) {
    return <div style={{ padding: '20px', fontSize: '24px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', fontSize: '24px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default CSVLoadNodeGraph;
