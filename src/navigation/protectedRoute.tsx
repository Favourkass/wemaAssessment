import { loginRecoilState } from '../pages/auth/login';
import {useRecoilState} from 'recoil';
import {Outlet} from 'react-router-dom';



import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

const ProtectedRoute = () => {
  const[logStatus] = useRecoilState(loginRecoilState);
  let location = useLocation();

  if (!logStatus.email && !logStatus.password ) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;