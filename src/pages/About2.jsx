import React from 'react'

export default function About2() {
  const misVis = [{title: "Our Mission", text: "To empower schools across Nigeria with technology that simplifies administration, enhances teaching, and improves learning outcomes for every student."},
                  {title: "Our Vision", text: "We envision a future where every school in Africa has access to affordable, efficient, and culturally relevant technology solutions."}
  ]
  const misVisCard = [{emoji: "✨", title: "Innovation", text: "Constantly evolving our solutions to meet the changing needs of education"},
                      {emoji: "🤝", title: "Integrity", text: "Building trust through honest practices and reliable service"},
                      {emoji: "🏆", title: "Excellence", text: "Delivering quality in every aspect of our products and services"},
  ]
  return (
    <section className='min-h-screen mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-7'>
        <div className='about-text flex flex-col my-8'>
          <h1 className="tracking-wide text-indigo-900 font-bold text-3xl md:text-4xl text-center mt-8">About Elite EdTech</h1>
          <p className=" text-gray-600 text-md my-3 max-w-2xl mx-auto text-center">Revolutionizing education technology across Nigeria with solutions built for African schools</p>
        </div>
        <div className="md:flex-row items-center flex flex-col gap-12">
            <div className="w-1/2 max-w-xl h-[300px] text-2xl flex justify-center items-center ">
              <img alt="Our Team" src="https://placehold.co/600x400/blue/white?text=Our+Team" class="hover:shadow-indigo-200/50 transition rounded-xl shadow-2xl" />   
            </div>
          <div className="w-1/2">
            <div className="">
              {misVis.map((mis, id) => (
                <div key={id} className="">
                  <h1 className="text-2xl font-bold text-blue-800 mb-4">{mis.title}</h1>
                  <p className='text-gray-600 mb-3'>{mis.text}</p>
                </div>))}
            </div>
            <div className="sm:grid-cols-1 mt-8 sm:mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {misVisCard.map((data, id) => (
                <div key={id} className='rounded-lg shadow-md hover:shadow-lg border-1 border-gray-100 p-8 m-2 '>
                  <div className='mb-3'>
                    <span className='text-2xl sm:text-3xl'>
                      {data.emoji}
                    </span>
                    </div>
                  <h2 className='font-bold text-xl mb-3 text-blue-800 break-words'>{data.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-normal">{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
