import type { ButtonHTMLAttributes } from "react";

interface IButtonBase extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "text";
}

export interface IButton extends IButtonBase {
  element?: "button";
}

export interface IButtonLink extends IButtonBase {
  element?: "link";
  href: string;
}

export type TButtonProps = IButton | IButtonLink;
