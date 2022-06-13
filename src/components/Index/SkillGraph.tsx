import G6, { Graph, GraphOptions, GraphData } from "@antv/g6";
import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const data: GraphData = {
  nodes: [],
  edges: [
    {
      source: "node1",
      target: "node2",
    },
  ],
};

const getGraphConfig = (el: HTMLElement): GraphOptions => {
  return {
    container: el,
    fitView: true,
    layout: {
      type: "force",
      linkDistance: 50,
      nodeStrength: 30,
      edgeStrength: 0.3,
      collideStrength: 0.8,
      nodeSpacing: 100,
      preventOverlap: true,
    },
    modes: {
      default: [
        "drag-canvas",
        {
          type: "zoom-canvas",
          sensitivity: 10,
        },
        "drag-node",
      ],
    },
  };
};

const SkillGraph = () => {
  const ref = useRef<HTMLDivElement>(null);
  let graph: Graph;

  useEffect(() => {
    if (!graph && ref.current) {
      graph = new G6.Graph(getGraphConfig(ref.current));
    }
    graph.data(data);
    graph.render();
  }, []);
  return (
    <>
      <div className="mx-[12vw] mt-24">
        <p className="text-4xl mb-6">My skill graph</p>
        <p className="text-lg md:text-xl mb-12">
          I connect my skills and tech stack together using graph for better
          illustration.
        </p>
      </div>
      <div
        className="w-[100vw] lg:w-auto lg:mx-[12vw] bg-gray-200 round-full h-[500px] lg:h-auto lg:aspect-[4/3]"
        ref={ref}
      ></div>
    </>
  );
};

export default SkillGraph;
