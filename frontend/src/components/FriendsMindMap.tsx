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
  { source: 1, target: 2 },
  { source: 1, target: 3 },
  { source: 1, target: 5 },
  { source: 2, target: 3 },
  { source: 2, target: 4 },
  { source: 3, target: 6 },
  { source: 4, target: 5 },
  { source: 5, target: 6 },
  { source: 6, target: 7 },
  { source: 7, target: 8 },
  { source: 8, target: 5 },
];

export default function FriendsMindMap() {
    const fgRef = useRef<any>(null);

  return (
    <div className="w-full h-[500px] border rounded-lg">
      <ForceGraph2D
        ref={fgRef}
        graphData={{ nodes: friends, links }}
        nodeLabel="name"
        nodeAutoColorBy="id"
        linkDistance={120} // increase spacing between nodes
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 10 / globalScale; // smaller text
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = "steelblue";
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 5, 0, 2 * Math.PI, false); // smaller node
          ctx.fill();
          ctx.fillStyle = "black";
          ctx.fillText(label, node.x! + 8, node.y! + 3);
        }}
        linkColor={() => "#aaa"}
      />
    </div>
  );
}