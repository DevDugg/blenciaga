"use client";

import moment from "moment-timezone";

const Time = () => {
  const timezone: string[] = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/");
  const region = timezone[0];
  const city = timezone[1];
  const time = moment.tz(`${region}/${city}`);
  const formattedTime = time.format("DD/MM/YYYY HH:mm");
  return (
    <p className="text-xs text-WHITE uppercase flex items-center gap-2">
      <span>{formattedTime}</span> <span className="uppercase">{city}</span>
    </p>
  );
};
export default Time;
