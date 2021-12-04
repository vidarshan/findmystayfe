import { API_URL } from "@/config/index";
import HotelCard from "../../components/HotelCard";
import Layout from "../../components/Layout";

export default function HotelsPage({ hotels }) {
  return (
    <Layout
      title="Hotels | Findmystay"
      description="Best rated hotels in California"
    >
      <div className="grid gap-8 grid-cols-4 m-10 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {hotels.map((hotel, key) => {
          return <HotelCard hotel={hotel} key={key} />;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/hotels`);
  const hotels = await res.json();

  return {
    props: { hotels },
    revalidate: 1,
  };
}
