import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";

function UserThunk() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          {users.users.map((user) => (
            <div className="h5">{user.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserThunk;
