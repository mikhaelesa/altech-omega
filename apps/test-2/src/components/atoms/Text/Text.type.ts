// import type { fontWeight } from "@/styles/font";
import type { fontWeight } from "@/styles/font";
import type { HTMLAttributes } from "react";

interface ITextBaseProps {
  fontWeight?: (typeof fontWeight)[number];
}

interface IParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    ITextBaseProps {
  element: "p";
}

interface IHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    ITextBaseProps {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface ISpanProps extends HTMLAttributes<HTMLSpanElement>, ITextBaseProps {
  element: "span";
}

interface IOtherTextProps extends HTMLAttributes<HTMLElement>, ITextBaseProps {
  element: "italic" | "strong";
}

// Discriminated Union
export type TTextProps =
  | IHeadingProps
  | IOtherTextProps
  | IParagraphProps
  | ISpanProps;
