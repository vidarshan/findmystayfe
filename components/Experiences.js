import Image from "next/image";

export default function Experiences() {
  return (
    <div>
      {/* <span className="text-center text-4xl font-semibold">
        Featured Hotels
      </span>
      <span className="text-center text-2xl">
        This week's most visited hotels.
      </span> */}
      <div className="grid grid-cols-2 gap-8 ">
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col">
            <Image
              className="rounded my-3"
              src="/images/user2.jpeg"
              width={60}
              height={60}
              layout="fixed"
            />
            <div className="text-xl bg-red-400">Sarah Johns</div>
          </div>

          <div className="flex flex-row mx-6">
            Find hotels helped me to find my hotel very easily when I last
            visited California. The reviews on the website helped me to choose
            the best and the easiest for me.
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <Image
            className="rounded my-3"
            src="/images/user2.jpeg"
            width={60}
            height={60}
            layout="fixed"
          />
          <div className="flex flex-col">
            <div className="text-xl mx-6 mb-3 bg-red-400">Tim Buttler</div>
            <div className="mx-6">
              My busy schedule always gets in the way when I'm trying to find a
              hotel when I'm on a business trip. With Find my hotel, I don't
              need to worry about that no more.
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <Image
            className="rounded my-3"
            src="/images/user2.jpeg"
            width={60}
            height={60}
            layout="fixed"
          />
          <div className="flex flex-col">
            <div className="text-xl mx-6 mb-3 bg-red-400">Kane Smith</div>
            <div className="mx-6">
              What makes Find my hotel easy to use is that the information on
              the hotels are presented in such a rigid way, that is easy to get
              the information I need within few clicks.
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col shadow-2xl">
          <Image
            className="rounded my-3"
            src="/images/user2.jpeg"
            width={60}
            height={60}
            layout="fixed"
          />
          <div className="flex flex-col">
            <div className="text-xl mx-6 mb-3 bg-red-400">Erica Williams</div>
            <div className="mx-6">
              This is it. And what I needed. A place to find the hotels around
              California, the best place in America.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
