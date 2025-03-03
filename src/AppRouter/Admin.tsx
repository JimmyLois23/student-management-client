import { Navigate, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PageTitle from "../components/PageTitle";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard/ECommerce";
import StudentEntry from "../components/StudentEntry";
import StudentAttendence from "../components/StudentAttendence";

function AdminRoute() {
  // Protected Route Component
  interface ProtectedRouteProps {
    element: ReactNode;
    navbarComponent: React.ComponentType<{ children: ReactNode }>;
  }

  const type = localStorage.getItem("type");
  const token = localStorage.getItem("token");

  const ProtectedAdminRoute = ({
    element,
    navbarComponent: NavbarComponent,
  }: ProtectedRouteProps) => {
    if (type === "Admin" || (type === "SuperAdmin" && token)) {
      return <NavbarComponent>{element}</NavbarComponent>;
    } else {
      localStorage.removeItem("type");
      return <Navigate to="/" replace />;
    }
  };

  // const ProtectedSuperAdminRoute = ({
  //   element,
  //   navbarComponent: NavbarComponent,
  // }: ProtectedRouteProps) => {
  //   if (type === "SuperAdmin" && token) {
  //     return <NavbarComponent>{element}</NavbarComponent>;
  //   } else {
  //     localStorage.removeItem("type");
  //     return <Navigate to="/" replace />;
  //   }
  // };

  // const PublicRoute = ({
  //   element,
  //   navbarComponent: NavbarComponent,
  // }: ProtectedRouteProps) => {
  //   if (!token) {
  //     return <NavbarComponent>{element}</NavbarComponent>;
  //   } else {
  //     return <Navigate to="/" replace />;
  //   }
  // };

  const PublicRoute = ({
    element,
    navbarComponent: NavbarComponent,
  }: ProtectedRouteProps) => {
    return <NavbarComponent>{element}</NavbarComponent>;
  };

  return (
    <Routes>
      {/* Protected Routes that require DefaultLayout */}
      <Route
        path="/dashboard"
        element={
          <ProtectedAdminRoute
            navbarComponent={DefaultLayout}
            element={
              <>
                <PageTitle title="Attendence Dashboard" />
                <Dashboard />
              </>
            }
          />
        }
      />
      <Route
        path="/calendar"
        element={
          <PublicRoute
            navbarComponent={DefaultLayout}
            element={
              <>
                <PageTitle title="Attendence Calendar" />
                <Calendar />
              </>
            }
          />
        }
      />
      <Route
        path="/profile"
        element={
          <PublicRoute
            navbarComponent={DefaultLayout}
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
        }
      />
      <Route
        path="/studentEntry"
        element={
          <ProtectedAdminRoute
            navbarComponent={DefaultLayout}
            element={
              <>
                <PageTitle title="Student Entry" />
                <StudentEntry />
              </>
            }
          />
        }
      />
      <Route
        path="/studentAttendence/:id"
        element={
          <ProtectedAdminRoute
            navbarComponent={DefaultLayout}
            element={
              <>
                <PageTitle title="Student Attendence" />
                <StudentAttendence />
              </>
            }
          />
        }
      />
    </Routes>
  );
}

export default AdminRoute;
