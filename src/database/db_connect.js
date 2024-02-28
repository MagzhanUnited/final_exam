const mongoose = require("mongoose");

const dbConnect = function () {
  return mongoose.connect(
    `mongodb+srv://maga:maga2005@cluster0.jqzhqqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  );

  // mongodb://127.0.0.1:27017/${process.env.DB_NAME}
  // mongodb+srv://open-blog-admin:${process.env.DB_PASSWORD}@cluster0.wvtrr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority
};

module.exports = dbConnect;
