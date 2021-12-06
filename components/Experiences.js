import Image from "next/image";

export default function Experiences() {
  return (
    <div className="flex flex-col m-10">
      <span className="text-center mt-3 text-4xl font-semibold">
        Delighted users
      </span>
      <span className="text-center text-2xl my-4 text-gray-400">
        Some of the many users who admired our service.
      </span>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xs:grid-cols-1">
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/images/user1.jpeg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Sarah Johns</div>
            <div className="flex flex-row italic">
              {
                '"Find hotels helped me to find my hotel very easily when I last visited California. The reviews on the website helped me to choose the best and the easiest for me."'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/images/user2.jpeg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Tim Buttler</div>
            <div className="flex flex-row italic">
              {
                '"My busy schedule always gets in the way when I am trying to find a hotel when I am on a business trip. With Find my stay, I do not need to worry about that no more."'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/images/user3.jpeg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Kane Smith</div>
            <div className="flex flex-row italic">
              {
                '"What makes Find my hotel easy to use is that the information on the hotels are presented in such a rigid way, that is easy to get the information I need within few clicks."'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg border-top">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/images/user4.jpeg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">
              Erica Williams
            </div>
            <div className="flex flex-row italic">
              {
                '"This is it. And what I needed. A place to find the hotels around California, the best place in America."'
              }
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
