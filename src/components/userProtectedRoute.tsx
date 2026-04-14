import { Navigate } from "react-router-dom";

export default function UserProtected({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signin" />;
  }
  return children;
}
