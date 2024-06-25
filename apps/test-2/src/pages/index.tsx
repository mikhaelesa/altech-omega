import AppLayout from "@/components/templates/AppLayout";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@/features/home/view"), {
  ssr: false,
});

export default function Home() {
  return (
    <AppLayout>
      <HomeView />
    </AppLayout>
  );
}
