const API_KEY = "AIzaSyCY9QEHljBlrRFRc0a24pbJCzc5k9Q1yso"; // 👈 এখানে তোমার নতুন key বসাবে

const grid = document.getElementById("videoGrid");
const frame = document.getElementById("frame");
const player = document.getElementById("player");

// default load
loadVideos("Trending");

async function loadVideos(query){

grid.innerHTML = "Loading...";

const res = await fetch(
`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
);

const data = await res.json();

grid.innerHTML = "";

data.items.forEach(video => {

const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${video.snippet.thumbnails.high.url}">
<h3>${video.snippet.title}</h3>
`;

div.onclick = () => {
playVideo(video.id.videoId);
};

grid.appendChild(div);

});

}

function playVideo(id){
frame.src = `https://www.youtube.com/embed/${id}`;
player.style.display = "block";
}

function searchVideo(){
const q = document.getElementById("searchInput").value;
loadVideos(q);
}
