import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex mx-8 my-8 items-center">
      <div className="flex-1">
        <span className="text-7xl py-4 items-stretch">
          {" "}
          Find your stay in California.
        </span>
        <br />
        <span className="text-xl">
          Planning to spend your vacation in California? Find your hotels
          conviniently.
        </span>
        <div className="flex-1">
          <button className="bg-yellow-400 my-6 py-2 px-5 rounded-lg">
            Explore hotels
          </button>
        </div>
      </div>
      <div className="flex-1 ...">
        {" "}
        <Image
          alt="cover"
          src="/images/cover.jpeg"
          height={600}
          width={1000}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
