const { toPascalCase } = require("./util");
const { readFile, writeFile } = require("fs").promises;

const parseValue = (value) =>
  value.startsWith("{")
    ? toPascalCase(value.replace(/\{|\}/g, ""))
    : isNaN(value)
    ? `"${value}"`
    : value;
(async () => {
  let outTokens = "";
  const [tokens, fonts] = await Promise.all([
    readFile("../dsp/data/tokens.json", { encoding: "utf8" }),
    readFile("../dsp/data/fonts.json", { encoding: "utf8" }),
  ]);
  // console.log("tokens are", JSON.parse(tokens));
  // console.log("fonts are", JSON.parse(fonts));
  const oTokens = JSON.parse(tokens);
  const oFonts = JSON.parse(fonts);
  outTokens += oFonts.entities
    .flatMap((entity) => {
      return entity.tokens.map(
        ({ id, value }) =>
          `export const ${toPascalCase(id)} = ${parseValue(value)};`
      );
    })
    .join("\r\n");
  outTokens += oTokens.entities
    .map(
      ({ id, value }) =>
        `export const ${toPascalCase(id)} = ${parseValue(value)};`
    )
    .join("\r\n");
  // console.log(outTokens);
  await writeFile("../packages/common/src/m3/default/tokens.ts", outTokens);
  console.log("done");
})();
