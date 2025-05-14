import { forwardRef } from "react"

// Button variants
const variants = {
  primary: "bg-[#00356B] hover:bg-[#00356B]/90 text-white dark:bg-[#00356B] dark:hover:bg-[#00356B]/90",
  secondary: "bg-[#A51C30] hover:bg-[#A51C30]/90 text-white dark:bg-[#A51C30] dark:hover:bg-[#A51C30]/90",
  accent: "bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white dark:bg-[#F59E0B] dark:hover:bg-[#F59E0B]/90",
  success: "bg-[#10B981] hover:bg-[#10B981]/90 text-white dark:bg-[#10B981] dark:hover:bg-[#10B981]/90",
  warning: "bg-[#F97316] hover:bg-[#F97316]/90 text-white dark:bg-[#F97316] dark:hover:bg-[#F97316]/90",
  error: "bg-[#EF4444] hover:bg-[#EF4444]/90 text-white dark:bg-[#EF4444] dark:hover:bg-[#EF4444]/90",
  outline:
    "border-2 border-[#00356B] text-[#00356B] hover:bg-[#00356B]/50 dark:border-[#00356B] dark:text-[#00356B] dark:hover:bg-[#00356B]/50",
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800",
  link: "bg-transparent text-[#00356B] hover:underline dark:text-[#00356B]",
}

// Button sizes
const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
  xl: "px-6 py-3 text-xl",
}

// Button shapes
const shapes = {
  default: "rounded-md",
  rounded: "rounded-full",
  square: "rounded-none",
}

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      shape = "default",
      className = "",
      fullWidth = false,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          ${variants[variant]} 
          ${sizes[size]} 
          ${shapes[shape]} 
          ${fullWidth ? "w-full" : ""} 
          ${className}
          font-medium shadow-sm hover:shadow-md 
          transform hover:scale-105 transition-all duration-300
          flex items-center justify-center gap-2
          disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
        `}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !isLoading && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button