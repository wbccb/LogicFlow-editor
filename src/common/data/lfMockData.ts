const mockData = {
  nodes: [
    {
      id: "21",
      type: "rect",
      x: 300,
      y: 200,
      text: "rect node",
    },
    {
      id: "50",
      type: "circle",
      x: 500,
      y: 400,
      text: "circle node",
    },
  ],
  edges: [
    {
      type: "polyline",
      sourceNodeId: "50",
      targetNodeId: "21",
    },
  ],
};

export default mockData;
