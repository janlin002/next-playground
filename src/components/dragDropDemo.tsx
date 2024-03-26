import React, { useRef } from "react";

const list = [
  {
    id: "1",
    text: "序列 1",
  },
  {
    id: "2",
    text: "序列 2",
  },
  {
    id: "3",
    text: "序列 3",
  },
  {
    id: "4",
    text: "序列 4",
  },
  {
    id: "5",
    text: "序列 5",
  },
];

const UseDrag = () => {
  // 左側選單
  const [leftDragList, setLeftDragList] = React.useState(list);
  // 右側選單
  const [rightDragList, setRightDragList] = React.useState([]);

  const dataRef = useRef<any>(null);

  // 定義拖曳的資料
  dataRef.current = {
    left: {
      callback: setLeftDragList,
      list: leftDragList,
    },
    right: {
      callback: setRightDragList,
      list: rightDragList,
    },
  };

  // 阻止瀏覽器預設的行為
  const handleDragOver = (e: any) => e.preventDefault();

  // 拖曳邏輯
  const handleDrop = (callback: any, arrow: any) => {
    return (e: any) => {
      const {
        dataset: { id },
        classList,
      } = e.target;
      classList.remove("over");
      const curData = JSON.parse(e.dataTransfer.getData("itemData"));

      callback((prev: any) => {
        const mapPreData = structuredClone(prev).filter(
          (item: any) => item.id !== curData.id
        );
        if (!id) return [...mapPreData, curData];

        const index = mapPreData.findIndex((item: any) => item.id === id);
        mapPreData.splice(index, 0, curData);
        return mapPreData;
      });

      if (arrow === "left") {
        setRightDragList((prev) =>
          prev.filter((item: any) => item.id !== curData.id)
        );
      } else {
        setLeftDragList((prev) =>
          prev.filter((item: any) => item.id !== curData.id)
        );
      }
    };
  };

  // 拖曳進入目標元素時觸發
  const handleDragEnter = (e: any) => e.target.classList.add("over");

  // 拖曳離開目標元素時觸發
  const handleDragLeave = (e: any) => e.target.classList.remove("over");

  // 拖曳開始時觸發
  const handleDragStart = (data: any) => (e: any) => {
    e.dataTransfer.setData("itemData", JSON.stringify(data));
  };

  return (
    <div className="dragEvent-wrap">
      {Object.entries(dataRef.current).map((key, index) => {
        return (
          key && (
            <div
              key={key[0]}
              className="content-wrap"
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop(key[1].callback, key[0])}
            >
              {key[1].list &&
                key[1].list.map((item: any) => (
                  <div
                    className="item-text"
                    key={item.id}
                    data-id={item.id}
                    draggable
                    onDragStart={handleDragStart(item)}
                  >
                    {item.text}
                  </div>
                ))}
            </div>
          )
        );
      })}
    </div>
  );
};

export default UseDrag;
