import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import s from "./HomeAboutSectionWhyUsCard.module.scss";
import type { IHomeAboutSectionWhyUsCardProps } from "./HomeAboutSectionWhyUsCard.type";

const HomeAboutSectionWhyUsCard = ({
  ...props
}: IHomeAboutSectionWhyUsCardProps) => {
  return (
    <div className={s._Wrapper}>
      <Text color={COLORS["primary"]} fontWeight="700" element="p">
        {props.title}
      </Text>
      <Text element="p">{props.description}</Text>
    </div>
  );
};

export default HomeAboutSectionWhyUsCard;
