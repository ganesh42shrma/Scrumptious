
export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-content">
        {children}
      </div>
    </div>
  );
}