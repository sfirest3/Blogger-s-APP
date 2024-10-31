import { login, logout, loggedInUserDisplayName } from "../services/authService";

export function SignIn() {
  return (
    <button className="auth-button" onClick={login}>
      Log In
    </button>
  );
}

export function SignOut() {
  return (
    <div className="auth-container">
      <span className="greeting">Hello, {loggedInUserDisplayName()}</span>
      <button className="auth-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}