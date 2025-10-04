export default function Alert({ type = 'info', children }) {
  const colors = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  };

  return (
    <div className={`alert ${colors[type]}`} role="status">
      {children}
    </div>
  );
}
