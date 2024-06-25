import dynamic from "next/dynamic";

const DashboardView = dynamic(() => import("@/features/dashboard/view"), {
  ssr: false,
});

const Dashboard = () => {
  return <DashboardView />;
};

export default Dashboard;
