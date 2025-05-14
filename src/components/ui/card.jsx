import { forwardRef } from "react"

const variants = {
  default: "bg-white dark:bg-gray-800 shadow-md",
  outline: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  flat: "bg-gray-50 dark:bg-gray-900",
  elevated: "bg-white dark:bg-gray-800 shadow-lg",
}

const Card = forwardRef(
  (
    {
      children,
      className = "",
      variant = "default",
      hover = true,
      animate = true,
      padding = true,
      rounded = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`
          ${variants[variant]} 
          ${padding ? "p-6" : ""} 
          ${rounded ? "rounded-xl" : ""} 
          ${
            hover
              ? "hover:shadow-lg dark:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transform hover:-translate-y-1"
              : ""
          } 
          ${animate ? "transition-all duration-300" : ""} 
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = "Card"

export default Card