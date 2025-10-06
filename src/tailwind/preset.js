const { colors } = require("../tokens/colors");
const { spacing } = require("../tokens/spacing");
const { typography } = require("../tokens/typography");

module.exports = {
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
    },
  },
};
