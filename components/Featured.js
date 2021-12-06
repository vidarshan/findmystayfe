import HotelCard from "./HotelCard";

export default function Featured({ hotels }) {
  return (
    <div className="flex flex-col m-10">
      <span className="text-center text-4xl font-bold">Featured Hotels</span>
      <span className="text-center text-gray-400 text-xl my-4 ">
        {"This week's most visited hotels."}
      </span>
      <div className="grid grid-cols-4 gap-9 items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1">
        {hotels.map((hotel, key) => {
          return <HotelCard key={key} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}
