import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";
import "@/libs/eraser_brush_mixin.js";

import { CanvasWrap } from "./index.style";

const FabricTest = ({ canvasId }: any) => {
  const canvasRef = useRef(null);

  // 繪圖
  useEffect(() => {
    const canvasItem = new fabric.Canvas("canvas", {
      height: 450,
      isDrawingMode: true,
      selection: false,
      includeDefaultValues: false,
    });

    canvasItem.freeDrawingBrush.color = "#ff0000";
    canvasItem.freeDrawingBrush.width = 5;
    canvasItem.freeDrawingCursor = "default";
    canvasItem.isDrawingMode = true;

    canvasRef.current = canvasItem;
  }, []);

  // 文字
  //   useEffect(() => {
  //     const canvasItem = new fabric.Canvas("canvas", {
  //       height: 450,
  //       isDrawingMode: true,
  //       selection: false,
  //       includeDefaultValues: false,
  //     });

  //     const textObj = new fabric.IText("text", {
  //       editingBorderColor: "#ff0000",
  //       padding: 5,
  //     });

  //     canvasItem.add(textObj);
  //     canvasItem.defaultCursor = "text";
  //     // this.currentShape = textObj;
  //     // 文本打开编辑模式
  //     textObj.enterEditing();
  //     // 文本编辑框获取焦点
  //     textObj.hiddenTextarea.focus();
  //     canvasRef.current = canvasRef;
  //   }, []);
  return (
    <div>
      <CanvasWrap>
        {/* <div className="tool-box-out">
          <ToolBox />
        </div> */}
        {/* <div className="redo-undo-box">
          <RedoUndo />
        </div> */}
        {/* <div className="zoom-controller-box">
          <ZoomController />
        </div> */}
        {/* <div className="room-controller-box">
          <div className="page-controller-mid-box">
            <div className="page-preview-cell">
              <img style={{ width: "28px" }} alt="文件" />
            </div>
          </div>
        </div> */}

        {/* <div className="page-controller-box">
          <div className="page-controller-mid-box">
            <PageController />
            <div className="page-preview-cell">
              <img alt="PPT预览" />
            </div>
          </div>
        </div> */}

        {/* <div className="preview-controller-box">
          <PreviewController />
        </div> */}

        <canvas id="canvas" width="800" height="450"></canvas>
        <canvas id="text" width="800" height="450"></canvas>
      </CanvasWrap>
      <div className="canvas-wrap">
        <canvas id="canvas2" width="800" height="450"></canvas>
      </div>
    </div>
  );
};

export default FabricTest;
