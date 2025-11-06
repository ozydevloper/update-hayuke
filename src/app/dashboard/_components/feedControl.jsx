const { default: FeedContentCard } = require("@/_components/feed.content.card");
const { useModeFeed } = require("@/lib/globalVariabelZustand");

const feedSearch = (data) => {};

const feedUpcoming = (data) => {
  const today = new Date();
  const todayYMD = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return data.filter((item) => {
    const d = new Date(item.tanggal);
    const dYMD = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return dYMD > todayYMD;
  });
};

const feedHariIni = (data) => {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return data.filter(
    (agenda) => new Date(agenda.tanggal).toISOString().split("T")[0] == todayStr
  );
};

const FeedControl = ({ data, optionData, router, optionSearch }) => {
  const { stateMode } = useModeFeed();

  switch (stateMode) {
    case "home":
      const agendaHariIni = feedHariIni(data);
      if (agendaHariIni.length !== 0) {
        return agendaHariIni.map((e, i) => {
          return (
            <FeedContentCard
              key={i}
              data={e}
              optionData={optionData}
              router={router}
            />
          );
        });
      }
    case "upcoming":
      const agendaUpcoming = feedUpcoming(data);
      if (agendaUpcoming.length !== 0) {
        return agendaUpcoming.map((e, i) => {
          return (
            <FeedContentCard
              key={i}
              data={e}
              optionData={optionData}
              router={router}
            />
          );
        });
      }
    case "search":
      const agendaSearch = feedSearch(optionSearch);
      console.log(agendaSearch);
  }
};
export default FeedControl;
