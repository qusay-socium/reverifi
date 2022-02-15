import TransactionSharedComponent from 'components/transaction/TransactionSharedComponent';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import routes from 'pages/Transaction/routes';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TransactionContainer } from './transaction.styles';

/**
 * Transaction component.
 *
 * @return {JSX.Element}
 */
function Transaction() {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (!isLoggedIn) navigate('/sign-up');
  });
  return (
    <TransactionContainer>
      <TransactionSharedComponent />

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
    </TransactionContainer>
  );
}

export default Transaction;
