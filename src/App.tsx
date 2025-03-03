import { useEffect, useState, ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./common/Loader";
import SignIn from "./pages/Authentication/SignIn";
import AdminRoute from "./AppRouter/Admin";
import NotFound from "./components/NotFound";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === "/") {
      localStorage.clear();
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  interface PublicRouteProps {
    element: ReactNode;
  }

  const PublicRoute = ({ element }: PublicRouteProps) => <>{element}</>;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute element={<SignIn />} />} />
        <Route path="*" element={<PublicRoute element={<NotFound />} />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </>
  );
}

export default App;
