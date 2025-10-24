// build.js
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

esbuild.build({
  entryPoints: ["app/javascript/application.js"], // your main JS file
  bundle: true,
  sourcemap: true,
  format: "esm",
  outdir: "app/assets/builds",
  publicPath: "/assets",
  loader: {
    ".js": "jsx",
    ".jsx": "jsx",
    ".woff": "file",
    ".woff2": "file",
    ".ttf": "file",
    ".eot": "file",
    ".svg": "file",
  },
  plugins: [
    sassPlugin({
      loadPaths: ["node_modules"], // use loadPaths (newer option) so Sass finds Bootstrap and other node packages
    }),
  ],
}).catch(() => process.exit(1));
