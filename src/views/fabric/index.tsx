import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const FabricDemo = () => {
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);

  const [canvasWidth, setCanvasWidth] = useState(500);
  const [drawingMode, setDrawingMode] = useState(true);

  const canvas = useRef<any>("");
  const backgroundColorRef = useRef("#f0f0f0");

  useEffect(() => {
    const canvasItem = new fabric.Canvas("canvas", {
      height: canvasWidth,
      isDrawingMode: true,
      // backgroundColor: backgroundColorRef.current,
    });

    // 畫筆
    canvasItem.freeDrawingBrush.width = 15;
    canvasItem.freeDrawingBrush.color = "red";

    canvas.current = canvasItem;

    return () => {
      // 在元件卸載時清除畫布
      canvasItem.dispose();
    };
  }, [canvasWidth]);

  const handleErasing = () => {
    // 保留當前背景色

    // 清除畫布
    canvas.current.clear();
    backgroundColorRef.current = canvas.current.backgroundColor;
  };

  return (
    <div style={{ margin: "30px" }}>
      <canvas id="canvas" width={800} height={600}></canvas>
      <div style={{ zIndex: "100" }}>
        <button onClick={handleErasing}>取消操作</button>
        {/* <button onClick={() => setCanvasWidth((prev) => prev + 500)}>
          增加畫布
        </button> */}
      </div>
    </div>
  );
};

export default FabricDemo;
