import React from "react";
import { useTheme, Theme } from "@/hooks/useTheme";

import useRemoteConfig from "@/utils/firebase";

const Index = () => {
  const [theme, changeTheme] = useTheme();

  const message = useRemoteConfig("subscribePlan");

  return <button onClick={() => changeTheme()}>換</button>;
};

export default Index;
