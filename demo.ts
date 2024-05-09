import { Compiler, Server, logger, start } from "@farmfe/core";
async function mainModule() {
  await start({
    compilation: {
      input: {
        index: "./index.html",
      },
    },
  });
}
mainModule();
console.log("213");
