import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OverviewPage } from '@/features/overview/pages/OverviewPage';

function App() {
  return (
    <DashboardLayout>
      <OverviewPage />
    </DashboardLayout>
  );
}

export default App;