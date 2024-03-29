import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

type Tool = "pen" | "eraser";

const Konva = () => {
  const [tool, setTool] = useState<Tool>("pen");
  const [lines, setLines] = useState<
    Array<{
      tool: Tool;
      points: Array<number>;
    }>
  >([]);
  const isDrawing = useRef(false);

  // 點擊
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  // 滑鼠移動
  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleClearAll = () => {
    setLines([]);
  };

  return (
    <div>
      {/* {window !== undefined && ( */}
      <Stage
        //   width={window.innerWidth}
        //   height={window.innerHeight}
        width={800}
        height={300}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>

      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value as any);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <button onClick={handleClearAll}>清除畫布</button>
    </div>
  );
};

export default Konva;
