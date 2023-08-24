import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer() {
  const usersData = useSelector((globalState) => globalState.user);
  //   console.log(usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return usersData.loading ? (
    <h2>loading....</h2>
  ) : usersData.error ? (
    <>
      <h2>{usersData.error}</h2>
      <h3>Something went wrong</h3>
    </>
  ) : (
    <>
      <div>
        {usersData?.data?.map((user, index) => (
          <h2 key={index}>{user.name}</h2>
        ))}
      </div>
    </>
  );
}

export default UserContainer;
