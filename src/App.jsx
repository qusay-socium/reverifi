import AdminPanelLayout from 'components/AdminPanelLayout';
import Navbar from 'components/Navbar';
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
      <Navbar />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {routes.map(
            ({ label, exact, path, component: Component, adminLayout }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                element={
                  !adminLayout ? (
                    <Component />
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
