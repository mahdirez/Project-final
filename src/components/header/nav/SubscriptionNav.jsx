import React from "react";
import { Link } from "react-router-dom";

export default function SubscriptionNav() {
  return (
    <Link to="/login/">
      <button className="text-2xl border px-5 py-0 hover:text-sky-400 hover:border-sky-400">
        Login
      </button>
    </Link>
  );
}
