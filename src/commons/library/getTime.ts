export const getTime = (time: string) => {
  const temp = time.substring(11, 16);
  const timeArr = temp.split(":");
  let hour = Number(timeArr[0]);
  const min = timeArr[1];
  let state = "";

  if (hour > 12) {
    hour = 24 - hour;
    state = "pm";
  } else {
    state = "am";
  }

  return `${hour}:${min} ${state}`;
};
