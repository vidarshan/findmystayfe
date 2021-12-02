import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import { BiSwim } from "react-icons/bi";
import {
  MdEmojiFoodBeverage,
  MdBedroomParent,
  MdCardGiftcard,
} from "react-icons/md";

export default function HotelPage() {
  const [image, setImage] = useState("/images/hotel1.jpeg");

  return (
    <Layout>
      <div className="m-10">
        <p className="text-4xl">The Paradise Inn</p>
        <div className="grid grid-cols-2 p-5 my-5">
          <div className="flex flex-col items-center">
            <Image
              alt="hotel_main"
              className="rounded object-contain"
              src={image}
              width={400}
              height={300}
              layout="fixed"
            />
            <div className="flex flex-row my-5">
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-fill cursor-pointer"
                  src="/images/hotel1.jpeg"
                  width={150}
                  height={100}
                  layout="fixed"
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
                  layout="fixed"
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
                  layout="fixed"
                  onMouseEnter={() => setImage("/images/hotel3.jpeg")}
                />
              </div>
            </div>
          </div>
          <div className="text-xl p-6">
            <p className="mb-6">
              Enjoy a very calm and contained environment with beautiful
              sunsets. Experience 5-star service from us, and feel special like
              you are.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-green-300">
                <BiSwim className="mr-2" /> 1 Infinity Pool
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-green-300">
                <MdEmojiFoodBeverage className="mr-2" /> Free breakfast/ lunch
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-green-300">
                <MdBedroomParent className="mr-2" /> Spacious rooms
              </div>
              <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-green-300">
                <MdCardGiftcard className="mr-2" /> 40% off for more than 4
                nights
              </div>
            </div>
            {/* <ul className="list-disc">
              <li>1 Infinity Pool</li>
              <li>Free breakfast/ lunch</li>
              <li>Free drinks on arrival</li>
              <li>40% off for more than 4 nights</li>
            </ul> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
