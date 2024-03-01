import { useState, useEffect } from "react";

export function withStyles(Component: any) {
  console.log(Component, "Component");
  return (props: any) => {
    const style = { padding: "0.2rem", margin: "1rem" };
    return <Component style={style} {...props} />;
  };
}

export const withSample = (WrappedComponent: any) => (props: any) => {
  const { style: passedStyle, ...rest } = props;
  const style = { padding: "0.2rem", margin: "1rem", ...passedStyle };
  return (
    <WrappedComponent
      style={style}
      {...rest}
      // value={sampleCtx.value}
      // setValue={sampleCtx.setValue}
    />
  );
};

export function withLoader(Element: any, url: string) {
  return (props: any) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}
