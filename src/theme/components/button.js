import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  sm: defineStyle({
    h: "83px",
    fontSize: "35px",
    px: "35px",
  }),
  xs: defineStyle({
    h: "69px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_50: {
        bg: "blue_gray.50",
        boxShadow: "xs",
        color: "black.900",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["blue_gray_50"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "sm",
  },
});
export default Button;
