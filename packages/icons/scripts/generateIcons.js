const { readFile, writeFile, readdir, rm, mkdir } = require("fs").promises;
const { toPascalCase, toValidName, toIconType } = require("./util");
const START_DIRECTORY = `${__dirname}/../resources/icons`;
module.exports.generateIcons = async ({ targetDir, targetLib }) => {
  const extension = targetLib === "vue" ? "vue" : "tsx";
  const startDate = Date.now();
  let iconsCounter = 0;
  console.log("Icons generator - start");
  let indexContents = "";
  // clean up
  await rm(targetDir, { recursive: true, force: true });
  const dirs = await readdir(START_DIRECTORY);
  for (const dir of dirs) {
    const iconNames = await readdir(`${START_DIRECTORY}/${dir}`);
    for (const iconName of iconNames) {
      const iconTypes = await readdir(`${START_DIRECTORY}/${dir}/${iconName}`);
      // let dirCount = 0;
      for (const iconType of iconTypes) {
        // !dirCount &&
        await mkdir(`${targetDir}/${iconType}`, { recursive: true });
        // dirCount++;
        const svg = await readFile(
          `${START_DIRECTORY}/${dir}/${iconName}/${iconType}/24px.svg`
        );
        const componentName = `${toPascalCase(toValidName(iconName))}Icon`;
        const iconComponent =
          targetLib === "vue"
            ? `<template>${svg
                .toString()
                .replace(
                  /<svg/,
                  '<svg :style="{ width: styleSize, height: styleSize }" '
                )
                .replace(/enable-background/)}</template>
<script lang="ts">
  export default {
    props: {
      size: String
    },
    name: "${componentName}",
    setup(props){
      const styleSize:string = typeof props.size !== "undefined" ? parseInt(props.size) + "px" :"24px";
      return {
        styleSize
      }
    }
  }
</script>`
            : `import React from "react";
interface IconProps{
  size?: string
  style?: any
}
const Icon = ({size = "24", style = {}, ...rest}: IconProps) => {
    const styleSize = \`\${parseInt(size)}px\`;
    return (${svg
      .toString()
      .replace(
        /<svg/,
        "<svg {...rest} style={ {width: styleSize, height: styleSize, ...style} } "
      )
      .replace(/enable-background/gim, "enableBackground")
      .replace(/class=/gim, "className=")
      .replace(/style="(.)*?"/gim, "")})
}
export default Icon;
`;
        await writeFile(
          `${targetDir}/${iconType}/${componentName}.${extension}`,
          iconComponent
        );
        indexContents += `export {default as ${toIconType(
          iconType
        )}${componentName}} from "./${iconType}/${componentName}";\r\n`;
        iconsCounter++;
      }
    }
  }
  await writeFile(`${targetDir}/index.ts`, indexContents);
  const endDate = Date.now();
  console.log(
    `${iconsCounter} icons generated in ${(endDate - startDate) / 1e3} seconds.`
  );
};
