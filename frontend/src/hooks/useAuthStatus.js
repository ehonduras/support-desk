import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, loggedinInSet] = useState(false);
  const [checkingStatus, checkingStatusSet] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      loggedinInSet(true);
    } else {
      loggedinInSet(false);
    }

    checkingStatusSet(false);
  }, [user]);

  return { loggedIn, checkingStatus };
};
