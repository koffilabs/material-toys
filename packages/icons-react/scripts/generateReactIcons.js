const { generateIcons } = require("./generateIcons");
(async () => {
  await generateIcons({
    targetDir: `${__dirname}/../icons`,
    targetLib: "react",
  });
})();
