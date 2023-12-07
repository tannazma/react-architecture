interface ImageProps {
  variant: "circle" | "square";
  href: string;
}

const ImageComponent = ({ variant, href }: ImageProps) => {
  return (
    <div>
      <img src={href} alt="Custom" className={`customImg ${variant}`} />
    </div>
  );
};

export default ImageComponent;
