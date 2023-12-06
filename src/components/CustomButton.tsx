type CustomButtonVariant = "primary" | "secondary" | "important";

interface CustomButtonProps {
  variant: CustomButtonVariant;
  children: string;
}

const CustomButton = ({ variant, children }: CustomButtonProps) => {
  // remove if sattements and replaced with Recod utility type
  const buttonStyles: Record<CustomButtonVariant, string> = {
    primary: "primary",
    secondary: "secondary",
    important: "important",
  };

  //   if (props.variant === "primary") {
  //   return <button className="btn secondary">{props.children}</button>;
  return <button className={`btn ${buttonStyles[variant]}`}>{children}</button>;
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
