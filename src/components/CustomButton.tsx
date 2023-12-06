import { useState } from "react";

type CustomButtonVariant = "primary" | "secondary" | "important";

interface CustomButtonProps {
  variant: CustomButtonVariant;
  children: string;
  onClick: () => void;
}

const CustomButton = ({ variant, children, onClick }: CustomButtonProps) => {
  const [status, setStatus] = useState<boolean>(false);

  // remove if sattements and replaced with Recod utility type
  const buttonStyles: Record<CustomButtonVariant, string> = {
    primary: "primary",
    secondary: "secondary",
    important: "important",
  };

  //   if (props.variant === "primary") {
  //   return <button className="btn secondary">{props.children}</button>;
  return (
    <div>
      <p>{status ? "☀️" : "🌑"}</p>
      <button
        className={`btn ${buttonStyles[variant]}`}
        onClick={() => setStatus(!status)}
      >
        {children}
      </button>
    </div>
  );
  //   }

  //   if (props.variant === "secondary") {
  //   }

  //   if (props.variant === "important") {
  //     return <button className="btn important">{props.children}</button>;
  //   }
};

export default CustomButton;

// just an example for typescript utility types with different keys and the same values (here is string)
// type PersonStringKeys = "name" | "lastname" | "school" | "address" | "shahr";
// type Person = {
//   name: string;
//   lastname: string;
//   school: string;
//   address: string;
//   shahr: string;
// };
// type Person2 = Record<PersonStringKeys, string> & { age: number };
