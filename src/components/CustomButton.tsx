type CustomButtonVariant = "primary" | "secondary" | "important";
 
interface CustomButtonProps {
  variant: CustomButtonVariant;
  children: string;
}
 
const CustomButton = (props: CustomButtonProps) => {
  if (props.variant === "primary") {
    return <button className="btn primary">{props.children}</button>;
  }
 
  if (props.variant === "secondary") {
    return <button className="btn secondary">{props.children}</button>;
  }
 
  if (props.variant === "important") {
    return <button className="btn important">{props.children}</button>;
  }
};
 
export default CustomButton;