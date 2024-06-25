import Text from "@/components/atoms/Text";
import s from "./Input.module.scss";
import type { IInputProps } from "./Input.type";

const Input = ({ ...props }: IInputProps) => {
  return (
    <div className={s._Wrapper}>
      <label htmlFor={props.id}>
        <Text element="span">{props.label}</Text>
      </label>
      <input className={s._Input} {...props} />
    </div>
  );
};

export default Input;
