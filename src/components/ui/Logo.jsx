import React from 'react';
import { BookOpen, Users } from 'lucide-react';
// import logo from './logo.png';

const Logo = ({ className = '', size = 'md', withText = true }) => {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 128, height: 128 },
    xxl: { width: 256, height: 256 },
    xxxl: { width: 512, height: 512 },
    xxxxl: { width: 1024, height: 1024 },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Icon-based logo (current implementation) */}
        <div className="flex flex-col items-center justify-center">
          <BookOpen
            size={currentSize.width}
            className="text-[#00356B] dark:text-[#A51C30]"
          />
          <Users
            size={currentSize.width * 0.7}
            className="text-[#A51C30] dark:text-[#00356B] -mt-2"
          />
        </div>

        {/* Image-based logo (future implementation) */}
        {/* <div className="relative">
          <Image
            src={logo}
            alt="Elite Edu Tech"
            width={currentSize.width}
            height={currentSize.height}
            className="object-contain"
          />
        </div> */}
      </div>


      {withText && (
        <div className="ml-2">
          <h1
            className={`font-bold ${size === 'sm' ? 'text-sm' :
                size === 'lg' ? 'text-xl' :
                  size === 'xl' ? 'text-2xl' :
                    'text-base'
              }`}
          >
            <span className="text-[#A51C30] dark:text-[#00356B]">Elite</span> Edu Tech
          </h1>
        </div>
      )}
    </div>
  );
};

export default Logo;
