import React from "react";
import Konva from "konva";

const OffDemo = () => {
  //   var width = window.innerWidth;
  //   var height = window.innerHeight - 25;

  var width = 800;
  var height = 300;

  // first we need Konva core things: stage and layer
  var stage = new Konva.Stage({
    container: "container",
    width: width,
    height: height,
  });

  var layer = new Konva.Layer();
  stage.add(layer);

  var isPaint = false;
  var mode = "brush";
  var lastLine: any;

  stage.on("mousedown touchstart", function (e) {
    isPaint = true;
    var pos = stage.getPointerPosition() as any;
    lastLine = new Konva.Line({
      stroke: "#df4b26",
      strokeWidth: 5,
      globalCompositeOperation:
        mode === "brush" ? "source-over" : "destination-out",
      // round cap for smoother lines
      lineCap: "round",
      lineJoin: "round",
      // add point twice, so we have some drawings even on a simple click
      points: [pos.x, pos.y, pos.x, pos.y],
    });
    layer.add(lastLine);
  });

  stage.on("mouseup touchend", function () {
    isPaint = false;
  });

  // and core function - drawing
  stage.on("mousemove touchmove", function (e) {
    if (!isPaint) {
      return;
    }

    // prevent scrolling on touch devices
    e.evt.preventDefault();

    const pos = stage.getPointerPosition() as any;
    var newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
  });

  //   var select = document.getElementById("tool") as any;
  //   select.addEventListener("change", function () {
  //     mode = select.value;
  //   });
  return (
    <>
      Tool:
      <select id="tool" onChange={() => (mode = select.value)}>
        <option value="brush">Brush</option>
        <option value="eraser">Eraser</option>
      </select>
      <div id="container"></div>
    </>
  );
};

export default OffDemo;
