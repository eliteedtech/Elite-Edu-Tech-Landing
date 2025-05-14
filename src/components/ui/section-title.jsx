const SectionTitle = ({
    title,
    subtitle,
    centered = true,
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    animated = true,
    ...props
  }) => {
    return (
      <div
        className={`mb-12 ${centered ? "text-center mx-auto" : ""} ${
          animated ? "opacity-0 animate-fade-in" : ""
        } ${className}`}
        {...props}
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 ${titleClassName}`}>
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl ${
              centered ? "mx-auto" : ""
            } ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    )
  }
  
  export default SectionTitle