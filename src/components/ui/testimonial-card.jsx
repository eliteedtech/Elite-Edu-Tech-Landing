import Card from "./card"

const TestimonialCard = ({
  quote,
  name,
  title,
  imageSrc,
  className = "",
  quoteClassName = "",
  nameClassName = "",
  titleClassName = "",
  ...props
}) => {
  return (
    <Card className={`relative ${className}`} {...props}>
      <div className="absolute -top-5 left-8 text-5xl text-indigo-600 dark:text-indigo-400">"</div>
      <p className={`text-lg text-gray-700 dark:text-gray-300 mb-6 pt-4 ${quoteClassName}`}>{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 dark:bg-gray-700">
          <img
            src={imageSrc || "/placeholder.svg?height=48&width=48"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className={`font-semibold text-gray-900 dark:text-gray-100 ${nameClassName}`}>{name}</h4>
          <p className={`text-sm text-gray-600 dark:text-gray-400 ${titleClassName}`}>{title}</p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard