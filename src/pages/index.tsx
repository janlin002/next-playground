"use client";

import React from "react";

// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useTheme, Theme } from "@/hooks/useTheme";

import useRemoteConfig from "@/utils/firebase";

const Index = () => {
  const [theme, changeTheme] = useTheme();

  const message = useRemoteConfig("subscribePlan");

  const { t } = useTranslation("test");

  return <button onClick={() => changeTheme()}>換</button>;
};

export default Index;

/**
 * see https://www.codemotion.com/magazine/frontend/multilingual-site-in-next-js-with-next-i18next/
 * @param context
 * @returns
 */
export async function getStaticProps(context: any) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
