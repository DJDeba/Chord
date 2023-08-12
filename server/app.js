const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const {default: mongoose} = require("mongoose");

app.use(cors({origin: true}));
app.use(express.json());


app.get("/", (req, res) => {
    return res.json("Hello")
})

//user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

//Artist Routes
const artistsRoutes = require("./routes/artists");
app.use("/api/artists/", artistsRoutes);

//Album Routes
const albumsRoutes = require("./routes/albums");
app.use("/api/albums/", albumsRoutes);

//Songs Routes
const songsRoutes = require("./routes/songs");
app.use("/api/songs/", songsRoutes);

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("Database Connected"))
.on('error', (error) => {
    console.log(`ERROR : ${error}`);
})

app.listen(4000, () => console.log("Listening to port 4000"))