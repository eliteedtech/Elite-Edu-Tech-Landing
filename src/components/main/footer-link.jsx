const FooterLink = ({ title, details }) => {
    return (
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index} className="mb-3">
              <a
                href={item.to}
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 relative group"
              >
                {item.link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default FooterLink