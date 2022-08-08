import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  console.log("someone in!");
  return res.send("My Home!");
};

const handleLogin = (req, res) => {
  return res.send("We don't use login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListen = () => {
  console.log(`Server is now listening http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
