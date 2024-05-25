import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  // plugins: [
  //   react({
  //     babel: {
  //       presets: ["@babel/preset-env", "@babel/preset-react"],
  //     },
  //   }),
  // ],
});
