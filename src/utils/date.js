import moment from "moment";

// nextjs || nestjs

// moment || dayjs

export const formatDate = (date) => {
  return moment(date).format("LLL");
};
