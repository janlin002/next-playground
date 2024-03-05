import React from "react";

const Index = () => {
  const objj: any = {};

  Object.defineProperty(objj, "a", {
    value: 1,
  });

  console.log(Object.getOwnPropertyDescriptor(objj, "a"), "obj");

  const obj = {
    a: 1,
    b: 2,
  };
  let unknow = obj.b;
  Object.defineProperty(obj, "b", {
    // 当然我们也可以重写它的默认的get/set行为
    get() {
      return unknow * 4;
    },
    set(value) {
      unknow = value;
    },
  });

  //   obj.b; // 8
  //   console.log(obj.b, "bbb");
  //   obj.b = 2;
  //   console.log(obj.b, "bbb");
  //   obj.b = 2; // 2

  const handleClick = () => {
    obj.b = 2;
  };

  console.log(obj, "obj");

  return (
    <>
      <div>{obj.b}</div>
      <button onClick={handleClick}>點擊</button>
    </>
  );
};

export default Index;
