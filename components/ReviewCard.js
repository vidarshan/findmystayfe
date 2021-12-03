import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export default function ReviewCard() {
  return (
    <div className="flex flex-col m-2 p-5 shadow-2xl rounded-lg">
      <div className="flex flex-row items-center">
        <FaUserCircle className="mr-2" />
        <p className="text-gray-600 my-4">John Smith</p>
        <BsStarFill className="text-yellow-400 ml-3 mr-1" />
        <BsStarFill className="text-yellow-400 mr-1" />
        <BsStarFill className="text-yellow-400 mr-1" />
        <BsStarFill className="text-yellow-400 mr-1" />
        <BsStarFill className="text-yellow-400 mr-1" />
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        praesentium cum sint numquam qui quis ipsum nisi! Quos sunt, magnam
        soluta eaque ea, cumque distinctio exercitationem hic qui recusandae
        tempora doloremque porro voluptatem? Cumque facilis voluptate nam
        aliquid incidunt sint architecto sunt consequatur, dicta cupiditate eum
        ab consectetur velit itaque ipsam est, sequi quas exercitationem ratione
        sapiente perferendis. Officia totam delectus, quidem repellendus debitis
        vero sint corrupti aspernatur autem omnis veritatis ex cupiditate!
        Sapiente aperiam ut ullam assumenda velit exercitationem quos minima
        nobis nostrum. Aliquam, quia consequuntur velit corrupti at quas,
        cupiditate voluptas possimus mollitia quo quae veniam eum cum?
      </div>
    </div>
  );
}
