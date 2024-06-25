import Text from "@/components/atoms/Text";
import { COLORS } from "@/styles/variables";
import clsx from "clsx";
import Image from "next/image";
import s from "./HomeHeroSection.module.scss";

const HomeHeroSection = () => {
  return (
    <section id="hero" className={s._Wrapper}>
      <div className={s._BlobTopLeft}>
        <Image
          src={"/images/blob-top-left.svg"}
          width={500}
          height={500}
          alt="blob top left"
        />
      </div>
      <div className={s._BlobBottomRight}>
        <Image
          src={"/images/blob-bottom-right.svg"}
          width={500}
          height={500}
          alt="blob bottom right"
        />
      </div>
      <div className={clsx(s._Container, "container")}>
        <div className={s._CTA}>
          <Text color={COLORS.primary} element="h1" fontWeight="600">
            Permudah Manajemen Bisnis Anda dengan Solusi ERP Kami
          </Text>
          <Text element="p">
            Tingkatkan efisiensi bisnis Anda dengan sistem ERP canggih kami,
            yang dirancang untuk memudahkan pencatatan keluar masuk barang dan
            keuntungan harian. Apakah Anda seorang pemilik usaha kecil atau
            mengelola perusahaan besar, sistem TIER kami menawarkan solusi
            fleksibel yang sesuai dengan kebutuhan Anda.
          </Text>
        </div>
        <div className={s._Illustration}>
          <Image
            src={"/images/home-hero-illustration.svg"}
            width={300}
            height={300}
            alt="Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
