import type { TextareaHTMLAttributes } from "react";

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}
