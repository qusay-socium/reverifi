import AdminPanelLayout from 'components/shared/AdminPanelLayout';
import MainLayout from 'components/shared/MainLayout';
import { UserProvider } from 'contexts/UserContext';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import GlobalStyles from 'styles/global-styles';

/**
 * App entry point component.
 *
 * @return {JSX.Element}
 */
function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {routes.map(
            ({
              label,
              exact,
              path,
              component: Component,
              adminLayout,
              disableNavbar,
              disableFooter,
            }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                element={
                  !adminLayout ? (
                    <MainLayout
                      disableNavbar={disableNavbar}
                      disableFooter={disableFooter}
                    >
                      <Component />
                    </MainLayout>
                  ) : (
                    <AdminPanelLayout>
                      <Component />
                    </AdminPanelLayout>
                  )
                }
              />
            )
          )}
        </Routes>
      </React.Suspense>
    </UserProvider>
  );
}

export default App;
