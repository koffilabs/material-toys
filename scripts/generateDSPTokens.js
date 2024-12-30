const { toPascalCase } = require("./util");
const { readFile, writeFile } = require("fs").promises;
const export_name = "tokens";
const parseValue = (value) =>
  value.startsWith("{")
    ? toPascalCase(value.replace(/\{|\}/g, ""))
    : isNaN(value)
      ? `"${value.startsWith("#") ? value.substring(0, value.length - 2) : value}"`
      : value;
(async () => {
  let outTokens = "";
  let constTokens = "";

  const [tokens, fonts] = await Promise.all([
    readFile("./dsp/data/tokens.json", { encoding: "utf8" }),
    readFile("./dsp/data/fonts.json", { encoding: "utf8" }),
  ]);
  // console.log("tokens are", JSON.parse(tokens));
  // console.log("fonts are", JSON.parse(fonts));
  const oTokens = JSON.parse(tokens);
  const oFonts = JSON.parse(fonts);
  constTokens += oFonts.entities
    .flatMap((entity) => {
      return entity.tokens.map(
        ({ id, value }) => `const ${toPascalCase(id)} = ${parseValue(value)};`,
      );
    })
    .join("\r\n");
  constTokens += oTokens.entities
    .map(({ id, value }) => `const ${toPascalCase(id)} = ${parseValue(value)};`)
    .join("\r\n");
  outTokens += oFonts.entities
    .flatMap((entity) => {
      return entity.tokens.map(
        ({ id, value }) => `  ${toPascalCase(id)}: ${parseValue(value)},`,
      );
    })
    .join("\r\n");
  outTokens += oTokens.entities
    .map(({ id, value }) => `  ${toPascalCase(id)}: ${parseValue(value)},`)
    .join("\r\n");
  // console.log(outTokens);
  await writeFile(
    "./packages/common/src/m3/default/tokens.ts",
    `${constTokens}\n\rexport const ${export_name} = {\n\r${outTokens}\n\r};`,
  );
  console.log("done");
})();
