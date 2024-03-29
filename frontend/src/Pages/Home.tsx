import { useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import FormField from "../Components/FormField";

interface CardData {
  title: string;
  url: string;
}

interface RenderCardsProps {
  data: CardData[];
  title: string;
}

function RenderCards({ data, title }: RenderCardsProps) {
  if (data?.length > 0) {
    return (
      <>
        {data.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </>
    );
  }
}
const Home = () => {
  const [allPosts, setAllPosts] = useState<CardData[] | null>(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No Search Results Found" />
              ) : (
                <RenderCards data={[]} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
