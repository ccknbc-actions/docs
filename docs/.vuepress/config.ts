import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CC的部落格",
  description: "CC康纳百川",

  base: "/",

  theme,
});
