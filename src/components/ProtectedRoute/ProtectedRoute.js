import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CreateContext } from '../../contexts/CreateContext';

const ProtectedRoute = (children, ...props) => {
  const { isLoggedIn } = React.useContext(CreateContext);

  return (
    <Route {...props}>
      {isLoggedIn === true ? children : <Redirect to="/main" />}
    </Route>
  );
};

export default ProtectedRoute;
