
      videoGrid.appendChild(card);

    });


    saveSearch(query, data.items);

  }

  catch(error){

    videoGrid.innerHTML = "<h2>Failed To Load Videos</h2>";

    console.log(error);

  }

}


// =============================
// Play Video Modal
// =============================

function playVideo(videoId){

  modal.style.display = "block";

  videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

}


// =============================
// Close Modal
// =============================

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

  videoFrame.src = "";

});


window.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.style.display = "none";

    videoFrame.src = "";

  }

});


// =============================
// Save Search Cache
// =============================

function saveSearch(query, videos){

  const cache = {
    query,
    videos,
    time: Date.now()
  };

  localStorage.setItem(`search_${query}`, JSON.stringify(cache));

}
