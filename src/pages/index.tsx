import React from "react";
import { useTheme, Theme } from "@/hooks/useTheme";

const Index = () => {
  const [theme, changeTheme] = useTheme();

  console.log(theme, "theme");
  return <button onClick={() => changeTheme()}>換</button>;
};

export default Index;
