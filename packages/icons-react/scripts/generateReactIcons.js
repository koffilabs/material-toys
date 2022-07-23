const { generateIcons } = require("@material-toys/icons");
(async () => {
  await generateIcons({
    targetDir: `${__dirname}/../icons`,
    targetLib: "react",
  });
})();
