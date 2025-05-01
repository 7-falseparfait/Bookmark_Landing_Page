export function Button({ children, variant = "primary", className = "", ...rest }) {
  const baseStyles = "px-8 py-3 font-medium rounded-md ";
  const variants = {
    primary: "bg-blue-600 border border-transparent text-white hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600 duration-300 ease-in-out ",
    secondary: "bg-gray-50 text-blue-950 border border-transparent hover:bg-white hover:border-gray-400 transition duration-300 ease-in-out",
    contact: "bg-red-400 text-white border border-transparent hover:bg-white hover: border hover:border-red-400 hover:text-red-400 duration-300 ease-in-out",
    login: 'bg-none text-[1.3rem] border-2 text-white hover:bg-white',
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
