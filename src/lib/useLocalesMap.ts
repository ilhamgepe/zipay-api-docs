import { useRouter } from "next/router";
import React from "react";

const useLocalesMap = (localesMap: any) => {
  const { locale, defaultLocale } = useRouter();
  console.log(locale, defaultLocale, localesMap);
};

export default useLocalesMap;
