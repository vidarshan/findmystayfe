import Image from "next/image";

export default function Experiences() {
  return (
    <div className="flex flex-col my-20">
      <span className="text-center text-4xl font-semibold">
        Delighted users
      </span>
      <span className="text-center text-2xl">
        Some of the many users who admired our service.
      </span>
      <div className="grid grid-cols-2 gap-8 ">
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
          <div class="flex flex-col mx-6 justify-center">
            <div className="text-xl mb-2 font-bold text-gray-500">
              Sarah Johns
            </div>
            <div className="flex flex-row">
              "Find hotels helped me to find my hotel very easily when I last
              visited California. The reviews on the website helped me to choose
              the best and the easiest for me."
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
          <div class="flex flex-col mx-6 justify-center">
            <div className="text-xl mb-2">Tim Buttler</div>
            <div className="flex flex-row">
              "My busy schedule always gets in the way when I'm trying to find a
              hotel when I'm on a business trip. With Find my hotel, I don't
              need to worry about that no more."
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
          <div class="flex flex-col mx-6 justify-center">
            <div className="text-xl mb-2">Kane Smith</div>
            <div className="flex flex-row">
              "What makes Find my hotel easy to use is that the information on
              the hotels are presented in such a rigid way, that is easy to get
              the information I need within few clicks."
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg border-top">
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
          <div class="flex flex-col mx-6 justify-center">
            <div className="text-xl mb-2">Erica Williams</div>
            <div className="flex flex-row">
              "This is it. And what I needed. A place to find the hotels around
              California, the best place in America."
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
