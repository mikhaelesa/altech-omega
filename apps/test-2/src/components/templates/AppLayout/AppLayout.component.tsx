import Navbar from "@/components/organisms/Navbar";
import type { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
