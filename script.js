var infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    document.querySelector(".container").append(infoContainer);


    // add event listener to add active class to info container
    infoContainer.addEventListener("click", function(event) {
        infoDescription.classList.toggle("active");
      });
