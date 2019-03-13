require("dotenv").config();

let Spotify = require("node-spotify-api");

let keys = require("./keys");

let axios = require("axios");

let moment = require("moment");

let fs = require("fs");

let spotify = new Spotify(keys.spotify);