// function myFunction() {
//     var x = document.getElementById("playlist");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//         x.style.display = "block";
//     }
//   }

  function mediaStuff(){
    let instagramLink = document.createElement("img");
    let igText = "FOLLOW ME ON INSTAGRAM"
    let linkedInLink = document.createElement("img");
    let liText = "FOLLOW MY LINKED IN"
    let snapchatLink = document.createElement("img");
    let scText = "ADD ME ON SNAP"
    let spotifyLink = document.createElement("img");
    let sText1 = "CLICK THE BUTTON"
    let sText2 = "TO LISTEN TO MY PLAYLIST"
    let socialMedia = document.querySelector(".socialMedia");
    // instagramLink.src = "instagram-png-instagram-png-logo-1455.png";
    // linkedInLink.src = "linkedIn_PNG32.png";
    // snapchatLink.src = "snapchat_PNG61.png";
    // spotifyLink.src = "spotify-logo-png-open-2000.png";
    socialMedia.appendChild(instagramLink);
    socialMedia.appendChild(linkedInLink);
    socialMedia.appendChild(snapchatLink);
    socialMedia.appendChild(spotifyLink);
    instagramLink.width = "275"
    instagramLink.style.display = "inline-block"
    linkedInLink.width = "275"
    linkedInLink.style.display = "inline-block"
    snapchatLink.width = "275"
    snapchatLink.style.display = "inline-block"
    spotifyLink.width = "275"
    spotifyLink.style.display = "inline-block"
    instagramLink.onclick = function() {
        window.location.href = "https://www.agorapulse.com/blog/trolls-on-instagram";
    };
    linkedInLink.onclick = function(){
        window.location.href = "https://linkfluencer.com/blog/how-to-handle-trolls-on-linkedin/"
    }
    snapchatLink.onclick = function(){
        window.location.href = "https://grouptweet.com/blog/wp-content/uploads/2018/11/snap.jpg"
    }
    spotifyLink.onclick = function(){
        var x = document.getElementById("playlist");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
            x.style.display = "block";
        }
    }
  }

  mediaStuff();

  