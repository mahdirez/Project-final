import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function SubscriptionNav() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div>
      {Object.keys(user).length ? (
        <>
          <div>
            {user.username}{" "}
            <button
              className="text-2xl border px-5 py-0 hover:text-sky-400 hover:border-sky-400"
              onClick={handleLogout}
            >
              Logout!
            </button>
          </div>
        </>
      ) : (
        <Link to="/login/">
          <button className="text-2xl border px-5 py-0 hover:text-sky-400 hover:border-sky-400">
            Login
          </button>
        </Link>
      )}
    </div>
  );
}
