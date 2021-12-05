import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export default function ReviewCard({ review: { name, review, rating } }) {
  const mapRatingToStars = (rating) => {
    if (rating === 1) {
      return (
        <div className="flex flex-row mx-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (rating === 2) {
      return (
        <div className="flex flex-row mx-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-200 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (rating === 3) {
      return (
        <div className="flex flex-row mx-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (rating === 4) {
      return (
        <div className="flex flex-row mx-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-gray-400 mr-1" />
        </div>
      );
    } else if (rating === 5) {
      return (
        <div className="flex flex-row mx-3">
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
          <BsStarFill className="text-yellow-400 mr-1" />
        </div>
      );
    }
    // for (let i = 1; i <= rating; i++) {
    //   console
    //   return <BsStarFill className="text-yellow-400 mr-1" />;
    // }
  };

  return (
    <div className="flex flex-col my-2 p-5 shadow-2xl rounded-lg">
      <div className="flex flex-row items-center">
        <FaUserCircle className="mr-2" />
        <p className="text-gray-600 my-4">{name}</p>
        {mapRatingToStars(rating)}
      </div>
      <div>{review}</div>
    </div>
  );
}
