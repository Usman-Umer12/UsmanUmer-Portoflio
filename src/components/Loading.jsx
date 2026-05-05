import React, { useEffect, useState } from "react"

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000 // total time (2 sec)
    const intervalTime = 20 // smoothness
    const increment = 100 / (duration / intervalTime)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          onFinish()
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white px-4">
      <div className="flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="
          w-12 h-12 
          sm:w-14 sm:h-14 
          md:w-16 md:h-16 
          border-4 border-gray-700 border-t-white 
          rounded-full animate-spin
        "></div>

        {/* Text */}
        <h1 className="
          text-sm 
          sm:text-base 
          md:text-xl 
          lg:text-3xl 
          tracking-[0.3em] 
          uppercase 
          text-center
        ">
          Loading Portfolio
        </h1>

        {/* Progress Bar */}
        <div className="
          w-48 
          sm:w-56 
          md:w-64 
          lg:w-72 
          h-1.5 
          bg-gray-700 
          overflow-hidden 
          rounded-full
        ">
          <div
            className="h-full bg-white transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage (Optional but Premium) */}
        <span className="text-xs tracking-widest text-gray-400">
          {Math.floor(progress)}%
        </span>

      </div>
    </div>
  )
}

export default Loading
