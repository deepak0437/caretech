
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import navigation from '../menu-items/navigation';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import RouteTracker from '../components/common/RouteTracker';


const NAVIGATION = navigation

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function AppLayout() {

  const navigate = useNavigate();
  const location = useLocation();

  // Convert React Router's pathname to `segment` expected by `DashboardLayout`
  const router = React.useMemo(() => {
    return {
      pathname: location.pathname,
      // searchParams: new URLSearchParams(),
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    };
  }, [location.pathname, location.search, navigate]);
  // }, [location.pathname, navigate]);



  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: <BiotechSharpIcon color="primary" fontSize="large" />,
        title: "CareLyte",
      }}
    >
      <DashboardLayout defaultSidebarCollapsed sidebarExpandedWidth={250}>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}


export default AppLayout;
