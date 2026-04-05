"use client";

import { useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

const friends = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Jack" },
  { id: 5, name: "Mergen" },
  { id: 6, name: "Jenny" },
  { id: 7, name: "Eva" },
  { id: 8, name: "Sean" },
];

// Example realistic friend relationships
const links = [
    // Alice is socially active, connected to many
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 5 },
    
    // Bob has moderate connections
    { source: 2, target: 3 },
    { source: 2, target: 4 },
  
    // Charlie bridges two clusters
    { source: 3, target: 6 },
    
    // Peripheral connections
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
  
    // Small cluster at the end
    { source: 8, target: 5 }, 
  ];

export default function FriendsMindMap() {
  const fgRef = useRef<any>();

  return (
    <div className="w-full h-[500px] border rounded-lg">
      <ForceGraph2D
        ref={fgRef}
        graphData={{ nodes: friends, links }}
        nodeLabel="name"
        nodeAutoColorBy="id"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = "steelblue";
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 8, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.fillStyle = "black";
          ctx.fillText(label, node.x! + 10, node.y! + 3);
        }}
        linkColor={() => "#aaa"}
      />
    </div>
  );
}