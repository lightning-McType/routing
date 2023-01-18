import { Outlet } from "react-router-dom";

function OtherLayout() {
  return (
    <>
      <h1>This will be shared among components</h1>
      <Outlet />
    </>
  );
}

export default OtherLayout;