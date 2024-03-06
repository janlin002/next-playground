"use client";

import React from "react";
import { useSession } from "next-auth/react";

import LoginButton from "@/components/loginButton";

const Index = () => {
  const { data: session, status } = useSession();

  console.log(session, status, "client");
  return <LoginButton />;
};

export default Index;

// https://www.youtube.com/watch?v=EFucgPdjeNg
