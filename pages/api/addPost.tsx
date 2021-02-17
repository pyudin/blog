const { writeFile } = require("fs").promises;

export default (req, res) => {
  writeFile(`${__dirname}/test.json`, "New post", { encoding: "utf8" });
  res.status(200).json({ name: "New post" });
};
