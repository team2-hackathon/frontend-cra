import { Outlet } from "react-router-dom";

export const ProtectedPage = () => {
  return <>{false ? <Outlet /> : <p>You may not view this page</p>}</>;
};
