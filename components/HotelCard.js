import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

export default function HotelCard({
  hotel: { name, location, description, images, reviews, slug, price },
}) {
  const mapRatingToStars = (rating) => {
    let totalRating = 0;

    rating.map((r) => {
      totalRating = totalRating + r.rating;
    });

    totalRating = totalRating / rating.length;

    if (totalRating >= 1 && totalRating < 2) {
      return (
        <div className="flex flex-row my-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (totalRating >= 2 && totalRating < 3) {
      return (
        <div className="flex flex-row my-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (totalRating >= 3 && totalRating < 4) {
      return (
        <div className="flex flex-row my-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (totalRating >= 4 && totalRating < 5) {
      return (
        <div className="flex flex-row my-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (totalRating == 5) {
      return (
        <div className="flex flex-row my-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col rounded-lg shadow-2xl">
      <Image
        className="rounded-img"
        src={images[0]}
        alt="hotel_img"
        width={1500}
        height={1000}
      />
      <div className="p-5">
        <p className="text-xl font-font-semibold">{name}</p>
        <p className="my-1 text-gray-500">{location}</p>
        <p className="my-1 text-sm">{description}</p>
        {mapRatingToStars(reviews)}
        <p className="mb-4">${price} / per night</p>

        <Link href={`/hotels/${slug}`}>
          <a className="my-10 px-6 py-3 rounded-lg bg-yellow-400">View Hotel</a>
        </Link>
      </div>
    </div>
  );
}
