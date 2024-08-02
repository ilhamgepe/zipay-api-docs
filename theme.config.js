/* eslint-disable react-hooks/rules-of-hooks */
import Logo from "@/components/logo";
import { searchPlaceholderMap } from "./translations/text";
import { useRouter } from "next/router";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  useNextSeoProps() {
    const router = useRouter();
    if (router && router.asPath !== "/") {
      return {
        titleTemplate: "%s – ZIPAY",
      };
    }
  },
  logo: () => {
    const title = "Pay anything with Zipay";
    return (
      <>
        <Logo height={12} />
        <span
          className="mx-3 font-extrabold hidden md:inline select-none"
          title={`ZIPAY: ${title}`}
        >
          ZIPAY
        </span>
      </>
    );
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ZIPAY" />
      <meta property="og:description" content="Pay anything with Zipay" />
    </>
  ),
  search: {
    placeholder: () => {
      const locale = "en-US";
      return searchPlaceholderMap[locale];
    },
  },
  // project: {
  //   link: "https://github.com/ilhamgepe",
  // },
  nextThemes: {
    defaultTheme: "light",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    // { locale: "id-ID", text: "Indonesia" },
  ],
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    text: () => {
      return (
        <a
          href={`https://zipay.com`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-2">Powered by</span>
          <span> Zipay</span>
        </a>
      );
    },
  },
};

export default config;
