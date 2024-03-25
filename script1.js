let slideIndex = 0;
    imageblink();

    function imageblink() {
      let i;
      const slides = document.getElementsByClassName("img");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(imageblink, 1000); // Change image every 2 seconds (adjust as needed)
    }