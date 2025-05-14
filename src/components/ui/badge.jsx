const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300",
    secondary: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/50 dark:text-secondary-300",
    accent: "bg-accent-100 text-accent-800 dark:bg-accent-900/50 dark:text-accent-300",
    success: "bg-success/10 text-success dark:bg-success/20 dark:text-success/90",
    warning: "bg-warning/10 text-warning dark:bg-warning/20 dark:text-warning/90",
    error: "bg-error/10 text-error dark:bg-error/20 dark:text-error/90",
  }
  
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  }
  
  const Badge = ({ children, variant = "default", size = "md", className = "", ...props }) => {
    return (
      <span
        className={`
          ${variants[variant]} 
          ${sizes[size]} 
          inline-block rounded-full font-medium 
          transition-all duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    )
  }
  
  export default Badge