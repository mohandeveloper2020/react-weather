export const dateConverstion = (value) => {
  // to get date with UNIX epoch (January 1, 1970)
  const date = new Date(value * 1000);

  // setting the format (August 29, 2024)
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // console.log(date);

  return formattedDate;
};
