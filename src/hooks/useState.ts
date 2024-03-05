const React = () => {
  useState: useState;
};

const useState = <T>(initialState: T) => {
  let state = initialState;

  const setState = (newState: T) => {
    state = newState;
  };

  return [state, setState];
};

export default React;

// const [count, setCount] = useState(0);
// count, setCount(1);
