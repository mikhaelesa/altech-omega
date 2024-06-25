export interface IHomePricingSectionCardProps {
  description: string;
  features: string[];
  isFeaturesOpened?: boolean;
  isPopular?: boolean;
  onClickSeeFeatures?(): void;
  price: string;
  title: string;
}
