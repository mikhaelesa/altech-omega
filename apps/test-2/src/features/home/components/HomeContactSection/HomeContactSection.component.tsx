import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Input from "@/components/molecules/Input";
import Textarea from "@/components/molecules/Textarea";
import { COLORS } from "@/styles/variables";
import s from "./HomeContactSection.module.scss";

const HomeContactSection = () => {
  return (
    <section id="contact" className={s._Wrapper}>
      <div className={s._Header}>
        <Text color={COLORS.primary} fontWeight="600" element="h2">
          Hubungi Kami
        </Text>
        <Text element="p">Ada Pertanyaan? Kami Siap Membantu!</Text>
      </div>
      <form className={s._Form} onSubmit={(e) => e.preventDefault()}>
        <Input
          autoComplete="off"
          placeholder="Susanto"
          label="Nama"
          id="nama"
          required
        />
        <Input
          autoComplete="off"
          placeholder="susanto@gmail.com"
          label="E-mail"
          id="nama"
          type="email"
          required
        />
        <Input
          autoComplete="off"
          placeholder="Permintaan untuk menambah fitur X"
          label="Subjek"
          id="subjek"
          required
        />
        <Textarea label="Pesan" id="pesan" required />
        <Button className={s._SubmitButton}>
          <Text element="p">Kirim</Text>
        </Button>
      </form>
    </section>
  );
};

export default HomeContactSection;
