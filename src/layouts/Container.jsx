import { Outlet } from "react-router-dom";
import Header from "../layouts/Headers";

export default function Container() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
