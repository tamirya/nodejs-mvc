const fs = require("fs");

exports.index = (req, res, next) => {
  res.json({ data: "Hello From index route" });
};

exports.fileReader = (req, res, next) => {
  const filename = __dirname + "/../mock/file.txt";
  const readStream = fs.createReadStream(filename, "utf8");

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on("open", function() {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on("error", function(err) {
    res.end(err);
  });
};
