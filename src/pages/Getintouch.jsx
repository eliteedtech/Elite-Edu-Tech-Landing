
import { MapPin,Phone,Mail,Clock } from "lucide-react";
function Getintouch(){
    return(
        <div className="bg-indigo-600 py-20">
            <h1 className="font-bold text-white mx-au text-3xl text-center">Get in Touch</h1>
            <p className="font-sm tet-white text-center text-white ">Have questions or ready to transform your school? Reach out to our team.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                <div className="">
              
                    <div className="space-y-4 px-8 grid lg:grid-cols-1 md:grid-cols-2 ">
                    <p className="text-2xl font-bold text-white mb-6 ">Contact Information </p>
                    
                        <div className="flex">
                            <div className="h-6 w-6 text-indigo-400 m-2"> <MapPin /></div>
                            <div><p className="font-medium text-lg text-white">Address</p>
                                  <p className="text-white text-md">Plot 25, Tech Hub Avenue
                                    <br></br>
                                  Kano State, Nigeria</p>  
                            </div>
                        </div>

                        <div className="flex">
                            <div className="h-6 w-6 text-indigo-400 m-2"> <Phone /></div>
                            <div><p className="font-sm text-white">
                                +234 8012345678
                                     <br></br>
                                 +234 9087654321</p> 
                            </div>
                        </div>

                        <div className="flex">
                            <div className="h-6 w-6 text-indigo-400 m-2"> <Mail /></div>
                            <div><p className="font-medium text-lg text-white">Email</p>
                                  <p className="text-white">info@eliteedtech.com
                                    <br></br>
                                    support@eliteedtech.com</p>  
                            </div>
                        </div>

                        <div className="flex">
                            <div className="h-6 w-6 text-indigo-400 m-2"> <Clock /></div>
                            <div><p className="font-medium text-lg text-white">Business Hours</p>
                                  <p className="text-white">Monday - Friday: 8am - 5pm
                                    <br></br>
                                    Saturday: 9am - 1pm</p>  
                            </div>
                        </div>

                        

                    
                    </div>
                    {/* <div className="mt-8"><p className="font-medium text-lg text-white mx-4 mb-4">Follow Us</p>
                            <p className="flex text-white">  </p>
                            <div className="flex space-x-4 text-white">
                                <a href="#" className="m-2"><Facebook /></a>
                                <a href="#" className="m-2"> <Instagram /></a>
                                <a href="#" className="m-2"><Twitter /></a>
                                <a href="#" className="m-2"><Linkedin /></a>
                            </div>
                    </div> */}
                </div>
                <div className="mx-auto">
                    <p className="text-2xl font-bold text-white mb-6">Send Us a Message </p>
                    <form className="space-y-4 pr-8">
                        <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
                        <div>
                            <label className="text-white text-sm" htmlFor="fullname">Full Name</label><br></br>
                            <input className=" border border-white focus:outline-none px-4 py-2 w-full placeholder-white rounded-lg" type="text" id="fullname" name="fullname" placeholder="your name"></input>
                        </div>
                        <div>
                            <label className="text-white text-sm" htmlFor= "email">Email</label><br></br>
                            <input className=" border border-white focus:outline-none px-4 py-2 w-full placeholder-white rounded-lg" type="text" id="email" name="email" placeholder="your name"></input>
                        </div>

                        </div>
                        <div>
                            <label className="text-white text-sm" name="phone" htmlFor="phone">Phone Number</label><br></br>
                            <input type="number" id="phone" className="border border-white focus-outline-none placeholder-white w-full px-4 py-2 rounded-lg"placeholder="Your phone number" ></input>
                        </div>
                        <div>
                            <label className="text-white text-sm" name="schoolname" htmlFor= "schoolname">School Name</label><br></br>
                            <input type="text"id="schoolname" className="border border-white placeholder-white w-full px-4 py-2 rounded-lg"placeholder="Your School Name" ></input>
                        </div>
                        <div>
                            <label className="text-white text-sm" name="message" htmlFor= "message" >Message</label><br></br>
                            <textarea type="textarea" id="message" rows="4" className="border border-white placeholder-white w-full px-4 py-2 rounded-lg"placeholder="How can we help you" />
                        </div>
                        <div className="items-center flex">
                            <input type="checkbox" name= "check" className="h-4 w-4 rounded" id="check"></input>
                            <label className="text-white text-sm ml-2 " htmlFor="check">I agree </label>
                        </div>
                        <div>
                            <button type="submit" className="text-white rounded-xl px-4 py-2 border border-white w-full ">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
    );
}
export default Getintouch;