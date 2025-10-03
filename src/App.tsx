import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import { useLoading, LoadingProvider } from "./context/loading-context";
import { setLoadingHandler } from "./services/api-client";

import EmailTemplate from "./components/email-template/EmailTemplate";
import ReleaseNotes from "./components/release-notes/ReleaseNotes";
import SignupForm from "./components/registration-css-module/SignupForm";
import { SignupFormTailwind } from "./components/registration-tailwind/SignupForm";
import DemoForm from "./components/demo-form/demo-form";
import SignupClassicExportForm from "./components/registration/classic-export/SignupForm";
import { RegistrationFormSmartExport } from "./components/registration-smart-export/RegistrationForm";
import Loader from "./shared/components/loader/loader";
import { AuthProvider } from "./context/auth-context";
import AuthGuard from "./shared/components/auth-guard/auth-guard";
import Login from "./components/login/login";

function Layout() {
  return (
    <div>
      {/* Common layout parts like navbar/sidebar can go here */}
      <Outlet />
    </div>
  );
}

function AppRoutes() {
  const { isLoading, setLoading } = useLoading(); // ✅ use isLoading

  useEffect(() => {
    setLoadingHandler(setLoading);
  }, [setLoading]);

  return (
    <Router>
      {/* 🔥 Global Loader Overlay */}
      {isLoading && <Loader />}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ReleaseNotes />} />
          <Route
            path="/email"
            element={
              <AuthGuard>
                <EmailTemplate />
              </AuthGuard>
            }
          />
          <Route path="/registration-css" element={<SignupForm />} />
          <Route
            path="/registration-classic"
            element={<SignupClassicExportForm />}
          />
          <Route
            path="/registration-tailwind"
            element={<SignupFormTailwind />}
          />
          <Route
            path="/registration-smart"
            element={<RegistrationFormSmartExport />}
          />
          <Route path="/demo-form" element={<DemoForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      {" "}
      {/* 🛡️ wrap with AuthProvider */}
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </AuthProvider>
  );
}
