import FeedContentCard from "@/_components/feed.content.card";
import Footer from "@/_components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

export default async function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-1">
          <Input placeholder="Cari judul agenda" />
          <div className="flex items-center gap-x-1">
            <Button size={"icon"} variant={"outline"}>
              <Filter />
            </Button>
            <Button className={"font-bold items-center"}>
              <Search />
              Cari
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 gap-y-1 items-center justify-between">
          <Button className="md:w-[49%] w-full">Event Hari ini</Button>
          <Button variant="outline" className={`md:w-[49%] w-full`}>
            Event Upcoming
          </Button>
        </div>
      </div>
      <div className="w-full">
        <FeedContentCard />
        <FeedContentCard />
        <FeedContentCard />
        <FeedContentCard />
        <FeedContentCard />
      </div>
      <Footer />
    </div>
  );
}
