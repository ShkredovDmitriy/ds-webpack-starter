const log = message => {
  if (process.env.NODE_ENV === "development") console.log(message);
};

export default log;
