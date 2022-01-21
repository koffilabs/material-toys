const { generateIcons } = require("@material-toys/icons");
(async () => {
  generateIcons({ targetDir: `${__dirname}/../src/icons`, targetLib: "vue" });
})();
