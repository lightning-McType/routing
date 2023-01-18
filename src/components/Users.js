import { fetchUsers } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";

const add = (one, two) => {
  console.log("Executing...");
  return one + two;
};

function Users() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const memoizedSum = useMemo(() => add(one, two), [one, two]);
  return (
    <div>
      {memoizedSum}
      <div>
        <button onClick={() => setOne((prev) => prev + 1)}>Inc one</button>{" "}
        <button onClick={() => setTwo((prev) => prev + 1)}>Inc two</button>{" "}
        <button onClick={() => setThree((prev) => prev + 1)}>Inc three</button>
      </div>
    </div>
  );
}

export default Users;
