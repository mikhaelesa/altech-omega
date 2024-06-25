import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import HomeAboutSectionWhyUs from "../HomeAboutSectionWhyUs";
import s from "./HomeAboutSection.module.scss";

const HomeAboutSection = () => {
  return (
    <section id="about" className={s._Wrapper}>
      <div className={s._CTA}>
        <Text color={COLORS.primary} fontWeight="600" element="h2">
          Tentang Kami
        </Text>
        <Text element="p">
          Di MyERP, kami berdedikasi untuk membantu pengusaha dalam mengelola
          bisnis mereka dengan lebih mudah dan efisien. Dengan solusi ERP kami
          yang inovatif, kami menyediakan alat yang diperlukan untuk melacak
          inventaris dan mencatat keuntungan harian secara akurat.
        </Text>
      </div>
      <HomeAboutSectionWhyUs />
    </section>
  );
};

export default HomeAboutSection;
