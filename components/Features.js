import { FcFlashOn } from "react-icons/fc";

export default function Features() {
  return (
    <div className="flex flex-col m-10">
      <span className="text-center text-4xl font-bold">Why us?</span>
      <span className="text-center text-2xl my-4 text-gray-400">
        Our amazing services
      </span>
      <div className="grid mt-5 gap-8 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xs:grid-cols-1">
        <div className="flex flex-1 items-center flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-yellow-400">
          <span className="text-3xl font-semibold">Quick</span>
          <div className="py-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
          </div>

          <div className="py-18 font-base">
            We provide the information you need with great clarity, which will
            help you to reserve and check-in to your hotel without any waiting
            in the line.
          </div>
        </div>
        <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-black">
          <span className="text-3xl text-yellow-400 font-semibold">Easy</span>
          <div className="py-5 flex items-center justify-center text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-yellow-400 text-justify font-base">
            Find, contact, reserve and check-in. No other actions required from
            your end. Just check-in, enjoy and check-out.
          </span>
        </div>{" "}
        <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-yellow-400">
          <span className="text-3xl font-semibold">Reviewed</span>
          <div className="py-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <span className="font-medium">
            Featured reviews in our website will help you to find the best hotel
            for you, based on the experiences and ratings of our dedicated
            reviewers.
          </span>
        </div>{" "}
        <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-black">
          <span className="text-3xl text-yellow-400 font-semibold">Free</span>
          <div className="py-5 flex items-center justify-center text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-30 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-yellow-400 font-medium">
            Contact your desired hotel without any getting any other party
            involved, which will make you pay no commissions or any other
            charges.
          </span>
        </div>
      </div>
    </div>
  );
}
