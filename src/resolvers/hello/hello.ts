async function hello() {
  try {
    console.log("This resolver is about to send a message")
    // Here some prisma query to database to do some randome stuff
    console.log("Task done !")
    return "This is some random data returned"
  } catch (e) {
    console.log();
    (e);
    throw e;
  }
}

export { hello };
