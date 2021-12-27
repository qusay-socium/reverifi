import Navbar from 'components/Navbar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import GlobalStyles from 'styles/global-styles';

/**
 * App entry point component.
 *
 * @return {JSX.Element}
 */
function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Navbar user={user} setUser={setUser} />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {routes.map(({ label, exact, path, component: Component }) => (
            <Route
              key={label}
              path={path}
              exact={exact}
              element={<Component />}
            />
          ))}
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
