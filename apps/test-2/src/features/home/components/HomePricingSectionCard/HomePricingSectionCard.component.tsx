import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import clsx from "clsx";
import s from "./HomePricingSectionCard.module.scss";
import type { IHomePricingSectionCardProps } from "./HomePricingSectionCard.type";

const HomePricingSectionCard = ({ ...props }: IHomePricingSectionCardProps) => {
  return (
    <div className={s._Wrapper}>
      <div
        className={clsx(
          s._CardPlan,
          props.isFeaturesOpened && s._FeaturesOpened,
          props.isPopular && s._IsPopular,
        )}
      >
        {props.isPopular && (
          <div className={s._PopularBadge}>
            <Text fontWeight="700" element="p">
              Populer
            </Text>
          </div>
        )}
        <div className={s._Header}>
          <div className={s._Copywriting}>
            <Text color={COLORS.primary} fontWeight="600" element="h4">
              {props.title}
            </Text>
            <Text element="p">{props.description}</Text>
          </div>
          <div className={s._Price}>
            <Text fontWeight="600" className="h4" element="p">
              Rp {props.price}
            </Text>
            <Text className="body-md" element="p">
              per bulan
            </Text>
          </div>
        </div>
        <div>
          <Button>
            <Text element="p">Pilih paket</Text>
          </Button>
          <Button onClick={props.onClickSeeFeatures} variant="text">
            <Text element="p">
              {props.isFeaturesOpened ? "Tutup" : "Lihat fitur"}
            </Text>
          </Button>
        </div>
      </div>
      {props.isFeaturesOpened && (
        <div className={clsx(s._Features, props.isPopular && s._IsPopular)}>
          <ul>
            {props.features.map((feature, i) => (
              <li key={`${feature} ${i}`}>
                <Text element="p">{feature}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePricingSectionCard;
