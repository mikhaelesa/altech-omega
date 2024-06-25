import Text from "@/components/atoms/Text";
import s from "./Textarea.module.scss";
import type { ITextareaProps } from "./Textarea.type";

const Textarea = ({ ...props }: ITextareaProps) => {
  return (
    <div className={s._Wrapper}>
      <label htmlFor={props.id}>
        <Text element="span">{props.label}</Text>
      </label>
      <textarea className={s._Textarea} {...props} />
    </div>
  );
};

export default Textarea;
