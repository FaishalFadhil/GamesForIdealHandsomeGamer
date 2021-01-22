
const  url = "https://rawg-video-games-database.p.rapidapi.com"
const  opt = {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
    }
  }

export {url, opt}