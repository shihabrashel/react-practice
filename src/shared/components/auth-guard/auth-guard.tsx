// src/components/AuthGuard.tsx
import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

type Props = {
  children: JSX.Element;
};

const AuthGuard: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;
