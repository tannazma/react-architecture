type variant = "Success" | "Error" | "Warning";

interface CustomDivProps {
  variant: variant;
  children: string;
}

function getIcon(variant: variant) {
  switch (variant) {
    case "Error":
      return "❌";
    case "Success":
      return "✅";
    case "Warning":
      return "⚠️";
  }
}

const Alert = ({ variant, children }: CustomDivProps) => {
  return (
    <div className={`alert ${variant}`}>
      <span>{getIcon(variant)}</span>
      {children}
    </div>
  );
};
export default Alert;
