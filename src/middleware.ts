import { NextRequest } from "next/server";
import { withLocales } from "nextra/locales";

export const middleware = withLocales((request: NextRequest) => {
  // Your middleware code...
});
