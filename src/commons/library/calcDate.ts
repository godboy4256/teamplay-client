export const Dday = (data: any) => {
  const xmasDay: Date | null = data ? new Date(data) : null;
  const now: Date | null = new Date();
  const gap = Number(xmasDay) - Number(now);
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  return day;
};
