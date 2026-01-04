import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { isMaintenanceMode } from "@/lib/maintenance";
import MaintenanceMode from "@/components/MaintenanceMode";

export default function HowItWorksPage() {
  if (isMaintenanceMode()) {
    return <MaintenanceMode />;
  }

  return (
    <main className="page-transition min-h-screen bg-dark-900">
      <HowItWorks />
      <Footer />
    </main>
  );
}
