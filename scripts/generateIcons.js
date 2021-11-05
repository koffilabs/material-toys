const { readFile, writeFile, readdir, rm, mkdir } = require("fs").promises;
const { toPascalCase, toValidName, toIconType } = require("./util");
const START_DIRECTORY = "./packages/material-yue/resources/icons";
const TARGET_DIRECTORY = "./packages/material-yue/src/icons";
const startDate = Date.now();
let iconsCounter = 0;
console.log("Icons generator - start");
let indexContents = "";
(async () => {
  // clean up
  await rm(TARGET_DIRECTORY, { recursive: true, force: true });
  const dirs = await readdir(START_DIRECTORY);
  for (const dir of dirs) {
    const iconNames = await readdir(`${START_DIRECTORY}/${dir}`);
    for (const iconName of iconNames) {
      const iconTypes = await readdir(`${START_DIRECTORY}/${dir}/${iconName}`);
      // let dirCount = 0;
      for (const iconType of iconTypes) {
        // !dirCount &&
        await mkdir(`${TARGET_DIRECTORY}/${iconType}`, { recursive: true });
        // dirCount++;
        const svg = await readFile(
          `${START_DIRECTORY}/${dir}/${iconName}/${iconType}/24px.svg`
        );
        const componentName = `${toPascalCase(toValidName(iconName))}Icon`;
        const iconComponent = `<template>
  <div ref="root">${svg}</div>
</template>
<script lang="ts">
  export default {
    name: "${componentName}",
  }
</script>
`;
        await writeFile(
          `${TARGET_DIRECTORY}/${iconType}/${componentName}.vue`,
          iconComponent
        );
        indexContents += `export {default as ${toIconType(
          iconType
        )}${componentName}} from "./${iconType}/${componentName}.vue";\r\n`;
        iconsCounter++;

        // console.log(iconComponent);
      }
    }
  }
  await writeFile(`${TARGET_DIRECTORY}/index.ts`, indexContents);
  const endDate = Date.now();
  console.log(
    `${iconsCounter} icons generated in ${(endDate - startDate) / 1e3} seconds.`
  );
})();