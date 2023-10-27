import moment from "moment";
import { useEffect, useState } from "react";

export const dateFormat = (publicDate) => {
  const [date, setDate] = useState(null);

  const formatting = (datePublic) => {
    const momentFormat = (datePublic) => {
      return (format) => moment(datePublic).startOf(format).fromNow();
    };

    const currentDate = Date.now();
    const publicDate = Date.parse(datePublic);
    const timeDifference = currentDate - publicDate;

    const format = momentFormat(publicDate);

    const hour = 3600 * 1000;
    const day = hour * 24;

    return timeDifference < hour
      ? format("min")
      : timeDifference < day
      ? format("hour")
      : format("day");
  };

  useEffect(() => {
    setDate(formatting(publicDate));
  }, [publicDate]);

  return date;
};
