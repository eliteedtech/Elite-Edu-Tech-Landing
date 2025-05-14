import { FaStar } from "react-icons/fa";

export default function StarsRating({rating}) {
    let stars = new Array(5).fill(0);

  return (
    <span className="flex gap-1">
      {stars.map((star, index) => {
            if (index < rating) {
                return  <FaStar key={index} size="1em" color="#f0b100" />
            }
            return <FaStar key={index} size="1em" color="#c6d2f5" />;
      })}
    </span>
  );
}
