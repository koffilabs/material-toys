const {generateIcons} = require("@material-yue/icons/scripts/generateIcons");
(async () => {
    await generateIcons({targetDir: `${__dirname}/../src/icons`, targetLib: "react"})
})();