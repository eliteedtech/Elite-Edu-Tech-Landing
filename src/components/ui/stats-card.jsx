const StatCard = ({
    number,
    label,
    className = "",
    numberClassName = "",
    labelClassName = "",
    animated = true,
    ...props
  }) => {
    return (
      <div
        className={`p-6 text-center transform hover:scale-105 transition-all duration-300 ${
          animated ? "opacity-0 animate-fade-in" : ""
        } ${className}`}
        {...props}
      >
        <div className={`text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 ${numberClassName}`}>
          {number}
        </div>
        <div className={`text-gray-600 dark:text-gray-400 font-medium ${labelClassName}`}>{label}</div>
      </div>
    )
  }
  
  export default StatCard