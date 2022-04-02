export const getTime = (time: string) => {
  const temp = time.substring(11, 16);
  let hour = Number(temp[0] + temp[1]);
  const min = temp[3] + temp[4];
  let state = "";

  if (hour > 12) {
    hour = 24 - hour;
    state = "pm";
  } else {
    state = "am";
  }

  return `${hour}:${min} ${state}`;
};
