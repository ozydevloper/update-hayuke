import DetailAgenda from "@/_components/detail.feed.layout";

const Page = async ({ params }) => {
  return <DetailAgenda params={await params} />;
};

export default Page;
