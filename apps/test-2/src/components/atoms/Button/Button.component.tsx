import clsx from "clsx";
import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import s from "./Button.module.scss";
import type { IButtonLink, TButtonProps } from "./Button.type";

const Button = ({
  className,
  element = "button",
  variant = "primary",
  ...props
}: TButtonProps) => {
  const lookup = useMemo(
    () =>
      new Map<TButtonProps["element"], ReactNode>([
        [
          "button",
          <button
            className={clsx(
              s._Wrapper,
              variant === "text" && s._Text,
              className,
            )}
            key={element}
            {...props}
          >
            {props.children}
          </button>,
        ],
        [
          "link",
          <Link
            style={{
              height: "fit-content",
            }}
            className={s._Link}
            href={(props as IButtonLink).href}
            key={element}
          >
            <button
              className={clsx(
                s._Wrapper,
                variant === "text" && s._Text,
                className,
              )}
              key={1}
              {...props}
            >
              {props.children}
            </button>
            ,
          </Link>,
        ],
      ]),
    [props, className, variant, element],
  );
  return lookup.get(element);
};

export default Button;
