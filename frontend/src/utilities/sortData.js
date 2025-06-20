const sortData = (events, sortBy) => {
  switch (sortBy) {
    case "date":
      console.log("sorting data");
      events.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      break;
    default:
      console.log("default by date");
  }
};

export default sortData;
