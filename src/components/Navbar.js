import { Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2">
        <div className="mb-3 p-1 d-flex justify-content-around">
          <button onClick={() => navigate("/")} className="home-button">
            New user
          </button>
          <button onClick={() => navigate("/login")} className="home-button">
            Already a user
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
