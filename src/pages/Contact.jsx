export default function Contact() {
  return (
    <div className="w-full bg-indigo-800 text-center  ">
      <div className="flex flex-col mx-4 md:mx-auto  py-8 justify-center items-center md:max-w-[730px]">
        <h3 className="text-white md:text-4xl font-bold text-3xl">
          Stay Updated with Educational Innovations
        </h3>
        <p className="text-gray-200 sm:px-[1em] md:px-[2.25em] mt-6 text-xl">
          Join thousands of educators and students receiving our newsletter with
          the latest trends, tips, and updates in educational technology.
        </p>

        <div className="w-[446px] px-1 sm:max-w-[446px] justify-center items-center mt-8 flex sm:flex-row flex-col">
          <input
            className="bg-white focus w-full sm:w-3xl focus:ring-2 focus:ring-indigo-400 focus:border-gray-700 focus:border-0 rounded-4xl flex-grow shadow-xl sm:mb-0 mb-3 px-4 py-3  sm:mr-3 border-0"
            type="text"
            name="sm:pl-7 sm:pr-30"
            id=""
            placeholder="Enter your email address"
          />
          <button className="sm:px-0  w-full font-bold px-4 py-3 sm:w-xs  rounded-4xl shadow-xl border border-indigo-400 bg-indigo-600 hover:bg-indigo-500 text-white">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-200">
          We respect your privacy. Unsubscribe at any time.
        </p>

      </div>
    </div>
  );
}
