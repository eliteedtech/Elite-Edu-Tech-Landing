
import Button from '../components/ui/Button2';
import { Outlet } from 'react-router-dom'
import {Triangle} from 'lucide-react'

function Hero() {
  return (
    <div className='bg-gradient-to-br from-indigo-600 to-red-500 dark:from-red-700 dark:to-indigo-900 w-full md:pt-0 pt-16 pb-10 md:pb-0'>
      <div className="flex px-4 md:flex-row gap-y-10 flex-col items-center pt-20 min-h-screen mx-auto  container">
        <div className="relative md:w-3/6 md:text-start text-center ">
          <div className='absolute right-[265px] top-[-25px]'><i className="fa-solid fa-circle text-[80px] text-white/10"></i></div>
          <div className='absolute right-[100px] top-[190px]'><Triangle size={"120px"} className='text-white/0 abosulte' fill='#ffffff1a'/></div>
          <h1 className='lg:text-[55px] md:text-[47px] text-[35px] md:w-96/100 font-[Poppins]  md:mx-0 mx-auto md:leading-12 lg:leading-16 text-[#00356B] dark:text-[#A51C30]'>Revolutionize Your Learning Experience</h1>
          <p className='text-[20px] lg:w-5/6 md:mx-0 mx-auto md:mt-6 mt-3 text-white font-[Poppins] dark:text-white '>Elite Edu Tech transforms education with innovative technology solutions designed for today's students and educators.</p>
          <div className="flex sm:flex-row flex-col gap-4 mt-8 sm:w-[330px] md:mx-0 mx-auto">
            <div className="font-semibold w-full">
              <Button text="Get Started" type="btn-danger"/>
            </div>
            <div className="font-semibold w-full">
              <Button text="Learn More" type="btn-outline-secondary"/>
            </div>
          </div>
          
          
        </div>
        <div className="flex justify-center items-center md:w-3/6 w-full">
          <div className="w-full max-w-[450px] h-[300px] text-2xl flex justify-center items-center">
            <img className='rounded-lg hover:scale-105 transition duration-1000 shadow-2xl cursor-pointer ease-in-out' src="https://img.freepik.com/premium-photo/cartoon-illustration-little-african-girl-school-uniform-sitting-school-table_116079-770.jpg?ga=GA1.1.1527062468.1746680181&semt=ais_hybrid&w=740" alt="student learning animation" />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Hero
