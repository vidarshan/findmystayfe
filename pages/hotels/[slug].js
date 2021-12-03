import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import { BiSwim } from "react-icons/bi";
import {
  MdEmojiFoodBeverage,
  MdBedroomParent,
  MdCardGiftcard,
  MdShareLocation,
} from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import ReviewCard from "../../components/ReviewCard";

export default function HotelPage() {
  const [image, setImage] = useState("/images/hotel1.jpeg");

  return (
    <Layout>
      <div className="m-10">
        <p className="text-4xl">The Paradise Inn</p>
        <div className="grid grid-cols-2 p-5 my-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div className="flex flex-col items-center bg-gray-100 rounded-xl">
            <Image
              alt="hotel_main"
              className="rounded object-contain"
              src={image}
              width={400}
              height={300}
              layout="intrinsic"
            />
            <div className="flex flex-row my-5">
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-fill cursor-pointer"
                  src="/images/hotel1.jpeg"
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage("/images/hotel1.jpeg")}
                />
              </div>
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-contain cursor-pointer"
                  src="/images/hotel2.jpeg"
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage("/images/hotel2.jpeg")}
                />
              </div>
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-contain cursor-pointer"
                  src="/images/hotel3.jpeg"
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage("/images/hotel3.jpeg")}
                />
              </div>
            </div>
          </div>
          <div className="text-xl p-6 ">
            <div className="flex flex-row justify-center items-center my-3 text-lg text-gray-600 ">
              <MdShareLocation className="mr-1 text-red-700" />{" "}
              <p>San xxxxxxxx, California</p>
            </div>
            <p className="mb-6 text-lg">
              Enjoy a very calm and contained environment with beautiful
              sunsets. Experience 5-star service from us, and feel special like
              you are.
            </p>
            <div className="grid grid-cols-2 gap-5 xs:grid-cols-1">
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <BiSwim className="mr-2" /> 1 Infinity Pool
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <MdEmojiFoodBeverage className="mr-2" /> Free breakfast/ lunch
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <MdBedroomParent className="mr-2" /> Spacious rooms
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <MdCardGiftcard className="mr-2" /> 40% off for more than 4
                nights
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <MdCardGiftcard className="mr-2" /> 40% off for more than 4
                nights
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                <MdCardGiftcard className="mr-2" /> 40% off for more than 4
                nights
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 my-8 xs:grid-cols-1">
              <button className="flex flex-row justify-center items-center text-base py-2 rounded-lg bg-green-500 text-white">
                <GiRotaryPhone className="mr-2" />
                Get Phone Number
              </button>
              <button className="flex flex-row justify-center items-center text-base py-2 rounded-lg bg-red-500 text-white">
                <IoIosMail className="mr-2" /> Email reception
              </button>
            </div>
          </div>
        </div>
        <div className="p-1">
          <div className="grid">
            <div className="flex flex-row items-center justify-center text-xl font-bold mb-5">
              <BsStarFill className="text-yellow-400 mr-1" />
              <p className="text-gray-600">4.7 [5 Reviews]</p>
            </div>
            <div>
              <ReviewCard />

              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="flex flex-col shadow-xl bg-gray-100 mt-3 p-4">
              <p className="text-center">Add your review</p>
              <input
                className="my-3 border-2 rounded-lg p-2"
                type="text"
                placeholder="Your name"
              />
              <input
                className="mt-5 border-2 rounded-lg p-2"
                type="text"
                placeholder="Your review"
              />
              <div className="flex flex-row my-2 py-3">
                <BsStarFill className="text-yellow-400 mr-1" />{" "}
                <BsStarFill className="text-yellow-400 mr-1" />{" "}
                <BsStarFill className="text-yellow-400 mr-1" />{" "}
                <BsStarFill className="text-yellow-400 mr-1" />{" "}
                <BsStarFill className="text-yellow-400 mr-1" />
              </div>
              <button className="p-2 rounded-lg bg-yellow-400">
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}