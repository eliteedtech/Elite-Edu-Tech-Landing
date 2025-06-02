import logo from "../../assets/logo.png"

const Logo = ({ className = "", size = "md", withText = true }) => {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 128, height: 128 },
    xxl: { width: 256, height: 256 },
    xxxl: { width: 512, height: 512 },
    xxxxl: { width: 1024, height: 1024 },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="relative group">
          <img
            src={logo || "/placeholder.svg"}
            alt="Elite Edu Tech"
            width={currentSize.width}
            height={currentSize.height}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#A51C30] rounded-full animate-pulse"></div>
        </div>
      </div>

      {withText && (
        <div className="ml-3">
          <h1
            className={`font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent ${
              size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : size === "xl" ? "text-2xl" : "text-base"
            }`}
          >
            Elite Edu Tech
          </h1>
        </div>
      )}
    </div>
  )
}

export default Logo
