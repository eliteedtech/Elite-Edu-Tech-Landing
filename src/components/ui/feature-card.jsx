import Card from "./card"

const FeatureCard = ({
  icon,
  title,
  description,
  link,
  linkText = "Learn more",
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  ...props
}) => {
  return (
    <Card className={`flex flex-col h-full ${className}`} {...props}>
      <div className={`mb-4 text-indigo-600 dark:text-indigo-400 ${iconClassName}`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 ${titleClassName}`}>{title}</h3>
      <p className={`text-gray-600 dark:text-gray-400 flex-grow ${descriptionClassName}`}>{description}</p>
      {link && (
        <a
          href={link}
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 group"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      )}
    </Card>
  )
}

export default FeatureCard