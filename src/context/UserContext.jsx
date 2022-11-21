import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { apiKey, baseUrl } from "../api";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [session, setSession] = useState(initSession);
  function initSession() {
    return localStorage.getItem("session");
  }

  async function getUserData() {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`
    );
    setUser(data);
  }

  useEffect(() => {
    if (session) {
      getUserData();
    }
  }, [session]);

  function handleLogout() {
    setUser({});
    setSession(null);
    localStorage.clear();
  }

  async function login(username, password) {
    try {
      const token = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );
      const authorize = await axios.post(
        `${baseUrl}//authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: token.data.request_token,
        }
      );
      const session = await axios.post(
        `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: token.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      navigate("/", { replace: true });
      setLoading(false);
    } catch {
      toast.error("invalid");
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, login, session, handleLogout, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}
