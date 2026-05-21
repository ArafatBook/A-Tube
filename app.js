// 🔥 YOUR API KEY HERE
const API_KEY = "AIzaSyCY9QEHljBlrRFRc0a24pbJCzc5k9Q1yso";

const grid = document.getElementById("videoGrid");
const frame = document.getElementById("frame");
const player = document.getElementById("player");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// DEFAULT LOAD
loadVideos("Trending");

// SEARCH BUTTON
searchBtn.addEventListener("click", () => {
  const q = searchInput.value.trim();
  if(q) loadVideos(q);
});

// ENTER KEY SEARCH
searchInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const q = searchInput.value.trim();
    if(q) loadVideos(q);
  }
});

// MAIN FUNCTION
async function loadVideos(query){

grid.innerHTML = "Loading...";

try{

const res = await fetch(
`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
);

const data = await res.json();

grid.innerHTML = "";

if(!data.items){
  grid.innerHTML = "API Error or No Data";
  return;
}

// SHOW VIDEOS

data.items.forEach(video => {

const videoId = video.id.videoId;

const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${video.snippet.thumbnails.high.url}">
}
