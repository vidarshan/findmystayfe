import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 mx-8 my-8 items-center xs:grid-cols-1 xs:order-1 ">
      <div className="flex-1">
        <p className="text-5xl py-4 items-stretch font-semibold">
          {" "}
          Find your stay in California.
        </p>

        <p className="text-md my-2">
          Planning to spend your vacation in California? Find your hotel
          conviniently.
        </p>

        <div className="my-7">
          <Link href="/hotels">
            <a className="bg-yellow-400 p-5 rounded-lg">Explore hotels</a>
          </Link>
        </div>
      </div>
      <div className="flex-1 ...">
        {" "}
        <Image
          alt="cover"
          src="/images/cover.jpeg"
          className="rounded-lg"
          height={600}
          width={1000}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
