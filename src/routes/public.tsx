import { DashboardPage } from '../pages/DashboardPage';
import { ProposalsPage } from '../pages/ProposalsPage';
import { SymbolPage } from '../pages/SymbolPage';

export const publicRoutes = [
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/:symbol',
    element: <SymbolPage />,
  },
  {
    path: '/proposals',
    element: <ProposalsPage />,
  }
];
