
// ====================================
// A Tube YouTube Clone
// ====================================


const API_KEY = "PASTE_YOUR_YOUTUBE_API_KEY_HERE";


const videoGrid = document.getElementById("videoGrid");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");


const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");


// =============================
// Load Default Videos
// =============================

loadVideos("Trending videos");


// =============================
// Search Button
// =============================

searchBtn.addEventListener("click", () => {

  const query = searchInput.value;

  if(query !== ""){
    loadVideos(query);
  }

});


// =============================
// Enter Key Search
// =============================

searchInput.addEventListener("keypress", (e) => {

  if(e.key === "Enter"){

    const query = searchInput.value;

    if(query !== ""){
      loadVideos(query);
    }

  }

});


// =============================
