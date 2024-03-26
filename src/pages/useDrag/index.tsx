import React from "react";

import DragDropDemo from "@/components/dragDropDemo";
import useDragTest from "@/hooks/useDragTest";

const Index = () => {
  useDragTest({
    dragger: ".dragger",
    draggerBox: ".draggerBox",
    container: ".container",
    maring: [10, 10, 10, 10],
  });

  return (
    <div className="container">
      <div className="draggerBox">
        <div className="dragger"></div>
      </div>
    </div>
  );
};

export default Index;
