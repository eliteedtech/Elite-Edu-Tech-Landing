"use client"

import { Link } from "react-router-dom"
import Button from "../components/ui/button"

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4 text-center">
      <div className="relative mb-8">
        <div className="text-9xl font-bold text-indigo-600 dark:text-indigo-400 animate-pulse">404</div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-70 animate-pulse"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Page Not Found</h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="space-y-4">
        <Button variant="primary" size="lg" className="w-full m-auto" onClick={() => window.history.back()}>
          Go Back
        </Button>

        <div className="flex justify-center">
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>

      <div className="mt-16 relative">
        <svg
          className="w-full max-w-lg mx-auto text-indigo-600 dark:text-indigo-400"
          viewBox="0 0 1120 699"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M560 699C869.199 699 1120 542.5 1120 350C1120 157.5 869.199 1 560 1C250.801 1 0 157.5 0 350C0 542.5 250.801 699 560 699Z"
            fill="currentColor"
          />
          <path
            d="M560 579C763.803 579 930 465.803 930 326C930 186.197 763.803 73 560 73C356.197 73 190 186.197 190 326C190 465.803 356.197 579 560 579Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
          <svg
            className="w-16 h-16 text-indigo-600 dark:text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage