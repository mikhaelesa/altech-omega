import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import { useState } from "react";
import HomePricingSectionCard from "../HomePricingSectionCard";
import s from "./HomePricingSection.module.scss";

const HomePricingSection = () => {
  const [openedFeaturesId, setOpenedFeaturesId] = useState(0);
  const handleToggleOpenedFeaturesId = (id: number) => () => {
    if (openedFeaturesId === id) setOpenedFeaturesId(0);
    else setOpenedFeaturesId(id);
  };
  return (
    <section id="pricing" className={s._Wrapper}>
      <div className={s._Header}>
        <Text color={COLORS.primary} fontWeight="600" element="h2">
          Harga ERP
        </Text>
        <Text element="p">
          Dapatkan penawaran terbaik untuk semua kebutuhan bisnis Anda. Tanpa
          biaya tersembunyi.
        </Text>
      </div>
      <div className={s._CardsContainer}>
        <HomePricingSectionCard
          description="Mulai kelola bisnis Anda dengan cara yang sederhana dan efektif!"
          title="Basic"
          price="150.000"
          features={[
            "Mencatat barang masuk",
            "Mencatat barang keluar",
            "Mencatat hasil keuntungan",
          ]}
          onClickSeeFeatures={handleToggleOpenedFeaturesId(1)}
          isFeaturesOpened={openedFeaturesId === 1}
        />
        <HomePricingSectionCard
          description="Dapatkan wawasan bisnis yang lebih mendalam dan dukungan sepanjang waktu!"
          title="Business"
          price="250.000"
          features={[
            "Mencatat barang masuk dan keluar",
            "Mencatat keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
          ]}
          onClickSeeFeatures={handleToggleOpenedFeaturesId(2)}
          isFeaturesOpened={openedFeaturesId === 2}
          isPopular
        />
        <HomePricingSectionCard
          description="Maksimalkan potensi bisnis Anda dengan fitur-fitur premium dan teknologi AI!"
          title="Enterprise"
          price="500.000"
          features={[
            "Mencatat barang masuk dan keluar",
            "Mencatat keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
            "Export data ke Excel",
            "AI Prediksi penghasilan",
          ]}
          onClickSeeFeatures={handleToggleOpenedFeaturesId(3)}
          isFeaturesOpened={openedFeaturesId === 3}
        />
      </div>
    </section>
  );
};

export default HomePricingSection;
