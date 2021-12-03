const {generateIcons} = require("@material-yue/icons");
(async () => {
    generateIcons({targetDir: `${__dirname}/../src/icons`, targetLib: "vue"})
})();
