const { generateIcons } = require("@material-toys/icons/scripts/generateIcons");
(async () => {
  await generateIcons({
    targetDir: `${__dirname}/../icons`,
    targetLib: "react",
  });
})();
