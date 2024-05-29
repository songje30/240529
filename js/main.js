    const box = document.querySelector("div#ani3");
    document.querySelector("#start").addEventListener("click", function(){
      box.style.animationPlayState = "running";
    });
    document.getElementById("paused").addEventListener("click", function(){
      box.style.animationPlayState = "paused";
    })