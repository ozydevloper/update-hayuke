import NoContent from "./no.content";

const { default: FeedContentCard } = require("@/_components/feed.content.card");
const { useModeFeed } = require("@/lib/globalVariabelZustand");

const feedSearch = (data, optionSearch, optionData) => {
  const result = [];
  const judul = optionSearch.judul.trim();
  if (judul.length >= 3) {
    data.map((agenda) => {
      if (agenda.judul.toLowerCase().includes(judul.toLowerCase())) {
        result.push(agenda);
      }
    });
  }

  const biaya = optionSearch.biaya.by.trim();
  if (biaya.length > 0) {
    data.map((agenda) => {
      if (agenda.biayaId === biaya) {
        result.push(agenda);
      }
    });
  }

  const kalangan = optionSearch.kalangan.kl.trim();
  if (kalangan.length > 0) {
    data.map((agenda) => {
      if (agenda.kalanganId === kalangan) {
        result.push(agenda);
      }
    });
  }

  const kota = optionSearch.kota.kt.trim();
  if (kota.length > 0) {
    data.map((agenda) => {
      if (agenda.kotaId === kota) {
        result.push(agenda);
      }
    });
  }

  const kategori = optionSearch.kategori.kat.trim();
  if (kategori.length > 0) {
    data.map((agenda) => {
      if (agenda.kategoriId === kategori) {
        result.push(agenda);
      }
    });
  }

  const topik = optionSearch.topik.tp.trim();
  if (topik.length > 0) {
    data.map((agenda) => {
      if (agenda.topikId === topik) {
        result.push(agenda);
      }
    });
  }

  const tanggal = optionSearch.tanggal.tg;
  if (tanggal.length > 0) {
    data.map((agenda) => {
      if (new Date(agenda.tanggal).toISOString().split("T")[0] === tanggal) {
        result.push(agenda);
      }
    });
  }

  const uniqueIds = new Set();
  const uniqueArray = result.filter((obj) => {
    if (uniqueIds.has(obj.id)) {
      return false; // Duplicate id, exclude from the new array
    } else {
      uniqueIds.add(obj.id); // Not seen before, add the id to the set
      return true; // Include in the new array
    }
  });
  return uniqueArray;
};

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
      } else {
        return <NoContent />;
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
      } else {
        return <NoContent />;
      }
    case "search":
      const agendaSearch = feedSearch(data, optionSearch, optionData);
      if (agendaSearch.length !== 0) {
        return agendaSearch.map((e, i) => {
          return (
            <FeedContentCard
              key={i}
              data={e}
              optionData={optionData}
              router={router}
            />
          );
        });
      } else {
        return <NoContent message="Hasil tidak ditemukan" />;
      }
  }
};
export default FeedControl;
