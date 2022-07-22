module.exports = {
  toPascalCase: (key) => {
    // return key;
    return key
      .split(/\.|-|_/)
      .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join("");
  },
  toValidName: (name) => {
    return name
      .replace(/^1x/, "OneX_")
      .replace(/^1k/, "OneK_")
      .replace(/^4k/, "FourK_")
      .replace(/^5k/, "FiveK_")
      .replace(/^6k/, "SixK_")
      .replace(/^7k/, "SevenK_")
      .replace(/^8k/, "EightK_")
      .replace(/^9k/, "NineK_")
      .replace(/^10k/, "TenK_")
      .replace(/^4g/, "FourG_")
      .replace(/^5g/, "FiveG_")
      .replace(/^3/, "three_")
      .replace(/^2/, "two_")
      .replace(/^60fps/, "SixtyFps_")
      .replace(/^4mp/, "FourMp_")
      .replace(/^5mp/, "FiveMp_")
      .replace(/^6mp/, "SixMp_")
      .replace(/^7mp/, "SevenMp_")
      .replace(/^8mp/, "EightMp_")
      .replace(/^9mp/, "NineMp_")
      .replace(/^10mp/, "TenMp_")
      .replace(/^11mp/, "ElevenMp_")
      .replace(/^12mp/, "TwelveMp_")
      .replace(/^13mp/, "ThirteenMp_")
      .replace(/^14mp/, "FourteenMp_")
      .replace(/^15mp/, "FifteenMp_")
      .replace(/^16mp/, "SixteenMp_")
      .replace(/^17mp/, "SeventeenMp_")
      .replace(/^18mp/, "EighteenMp_")
      .replace(/^19mp/, "NineteenMp_")
      .replace(/^6ft|6_ft/i, "SixFt_")
      .replace(/^outlined_flag/, "OutFlag"); // HA!
  },
  toIconType: (type) => {
    return type
      .replace(/materialicons/, "")
      .replace(/twotone/i, "TwoTone")
      .replace(/outlined/i, "Outlined")
      .replace(/round/i, "Round")
      .replace(/sharp/i, "Sharp");
  },
};
