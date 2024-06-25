import { createElement } from "react";
import type { TTextProps } from "./Text.type";

const Text = ({ element, ...props }: TTextProps) => {
  return createElement(element, {
    style: {
      color: props.color,
      fontWeight: props.fontWeight,
      ...props.style,
    },
    ...props,
  });
};

export default Text;
