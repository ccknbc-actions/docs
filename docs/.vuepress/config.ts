import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CC",
  description: "CCKNBC",

  base: "/",

  theme,
});
