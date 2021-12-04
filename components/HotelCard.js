import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

export default function HotelCard({ hotel }) {
  const slug = "the-paradise-inn";

  return (
    <div className="flex flex-col rounded-lg shadow-2xl">
      <Image
        className="rounded-img"
        src={hotel.images[0]}
        alt="hotel_img"
        width={1500}
        height={1000}
      />
      <div className="p-5">
        <p className="text-xl font-font-semibold">{hotel.name}</p>
        <p className="my-1 text-gray-500">{hotel.location}</p>
        <p className="my-1 text-sm">{hotel.description}</p>
        <div className="flex flex-row my-2">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
        </div>
        <p className="mb-4">${hotel.price} / per night</p>

        <Link href={`/hotels/${slug}`}>
          <a className="my-10 px-6 py-3 rounded-lg bg-yellow-400">View Hotel</a>
        </Link>
      </div>
    </div>
  );
}
