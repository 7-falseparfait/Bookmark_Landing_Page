export function Button({ children, variant = "primary", className = "", ...rest }) {
  const baseStyles = "px-4 py-3 font-medium rounded-md ";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-50 text-blue-950",
    contact: "bg-red-400 text-white",
    login: 'bg-none text-[1.3rem] border-2 border-white text-white'
  };
  return (
    <button
      className={` ${baseStyles}${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
