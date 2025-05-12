import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant: 'solid' | 'outline' | 'ticket';
}

const Button = ({ text, icon, variant }: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'solid':
        return 'bg-primary text-white min-w-[155px] h-[45px]';
      case 'outline':
        return 'bg-transparent text-primary min-w-[155px] h-[45px]';
      case 'ticket':
        return 'bg-bluesea text-white border-none text-sm p-1';
      default:
        return '';
    }
  };

  return (
    <button
      className={`
        flex items-center justify-center
        border-2 border-primary rounded-full
        px-4 py-2 
        ${getVariantClasses()}
      `}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
  