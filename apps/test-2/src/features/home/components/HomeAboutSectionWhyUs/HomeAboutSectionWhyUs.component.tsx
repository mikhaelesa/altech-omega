import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import HomeAboutSectionWhyUsCard from "../HomeAboutSectionWhyUsCard";
import s from "./HomeAboutSectionWhyUs.module.scss";

const HomeAboutSectionWhyUs = () => {
  return (
    <div className={s._Wrapper}>
      <Text color={COLORS.primary} fontWeight="600" element="h3">
        Mengapa Kami?
      </Text>
      <div className={s._CardsContainer}>
        <HomeAboutSectionWhyUsCard
          title="Sistem ERP yang Komprehensif"
          description="Kami menawarkan fitur lengkap untuk memantau keluar masuk barang dan keuntungan harian."
        />
        <HomeAboutSectionWhyUsCard
          title="Sistem TIER yang Fleksibel"
          description="Pelanggan dapat memilih produk kami sesuai dengan kategori atau level yang mereka butuhkan."
        />
        <HomeAboutSectionWhyUsCard
          title="Kemudahan Penggunaan"
          description="Antarmuka yang ramah pengguna memastikan bahwa Anda dapat mengelola bisnis Anda tanpa kesulitan."
        />
        <HomeAboutSectionWhyUsCard
          title="Dukungan Pelanggan Terbaik"
          description="Tim kami siap membantu Anda kapan saja untuk memastikan pengalaman terbaik."
        />
      </div>
    </div>
  );
};

export default HomeAboutSectionWhyUs;
