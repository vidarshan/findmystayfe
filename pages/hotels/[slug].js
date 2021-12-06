import Image from "next/image";
import { useEffect, useState } from "react";
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
import { API_URL } from "@/config/index";

export default function HotelPage({
  htl: {
    name,
    description,
    images,
    features,
    phone,
    email,
    reviews,
    price,
    location,
  },
}) {
  const [image, setImage] = useState(images[0]);
  const [totalRating, setTotalRating] = useState(0);
  //inverted buttons to be added

  const calculateTotalRating = (ratings) => {
    if (ratings.length) {
      ratings.map((rating) => {
        totalRating = totalRating + rating.rating;
      });
    }

    setTotalRating(totalRating / ratings.length);
  };

  useEffect(() => {
    calculateTotalRating(reviews);
  }, [reviews]);

  return (
    <Layout title={`${name} | Findmystay`}>
      <div className="m-10 xs:m-3 sm:m-5 lg:m-10 xl:m-10">
        <p className="text-4xl">{name}</p>
        <div className="grid grid-cols-2 p-5 my-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div className="flex flex-col content-center items-center bg-gray-100 rounded-xl">
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
                  src={images[0]}
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage(images[0])}
                />
              </div>
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-contain cursor-pointer"
                  src={images[1]}
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage(images[1])}
                />
              </div>
              <div className="mx-1">
                <Image
                  alt="hotel_main"
                  className="rounded object-contain cursor-pointer"
                  src={images[2]}
                  width={150}
                  height={100}
                  layout="intrinsic"
                  onMouseEnter={() => setImage(images[2])}
                />
              </div>
            </div>
          </div>
          <div className="text-xl xs:p-3 sm:p-4 lg:p-6">
            <div className="flex flex-row justify-center items-center my-3 text-lg text-gray-600 ">
              <MdShareLocation className="mr-1 text-red-700" />{" "}
              <p>{location}</p>
            </div>
            <p className="mb-6 text-lg">{description}</p>
            <div className="grid grid-cols-2 gap-5 xs:grid-cols-1">
              {features.map((feature) => {
                return (
                  <div className="flex flex-row text-base items-center justify-center text-center p-2 border-2 rounded-lg border-2 border-yellow-300 bg-yellow-200">
                    {feature}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 bg-blue-300 border-2 py-2 rounded-lg border-blue-400 text-center mt-3 text-base font-font-semibold">
              ${price} / Per night
            </div>
            <div className="grid grid-cols-2 gap-5 my-5 xs:grid-cols-1">
              <a
                href={`tel:${phone}`}
                className="flex flex-row justify-center items-center text-base py-2 rounded-lg bg-green-400 text-white"
              >
                <GiRotaryPhone className="mr-2" />
                Call Reception
              </a>
              <a
                className="flex flex-row justify-center items-center text-base py-2 rounded-lg bg-red-500 text-white"
                href={`mailto:${email}`}
              >
                <IoIosMail className="mr-2" /> Email reception
              </a>
            </div>
          </div>
        </div>
        <div className="p-1">
          <div className="grid">
            <div className="flex flex-row items-center justify-center text-xl font-bold mb-5">
              <BsStarFill className="text-yellow-400 mr-1" />
              <p className="text-gray-600">{totalRating} [5 Reviews]</p>
            </div>
            <div>
              {reviews.map((review, key) => {
                return <ReviewCard key={key} review={review} />;
              })}
            </div>
            {/* <div className="flex flex-col shadow-xl bg-gray-100 mt-3 p-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/hotels`);

  const hotels = await res.json();

  const paths = hotels.map((hotel) => ({
    params: { slug: hotel.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/hotels/${slug}`);

  const hotels = await res.json();

  return {
    props: {
      htl: hotels[0],
    },
    revalidate: 1,
  };
}
