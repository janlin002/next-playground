import React from "react";
import Image from "next/image";

import { withStyles, withSample, withLoader } from "@/utils/withStyles";

function DogImages(props: any) {
  return props.data.message.map((dog: any, index: number) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

const Index = () => {
  const Button = () => <button>Click me!</button>;
  const Text = () => <p>Hello World!</p>;

  const StyledButton: any = withStyles(Button);
  const StyledText: any = withStyles(Text);
  const Test = withSample(Button);

  const DogImageList = withLoader(
    DogImages,
    "https://dog.ceo/api/breed/labrador/images/random/6"
  );

  return (
    <>
      {/* <StyledButton />
      <StyledText /> */}
      <Test style={{ color: "red" }} />
      <DogImageList />
    </>
  );
};

export default Index;
