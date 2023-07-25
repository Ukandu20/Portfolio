
/* This code is adding an event listener to the `DOMContentLoaded` event of the `document` object. When
the DOM content has finished loading, the function inside the event listener is executed. */
document.addEventListener("DOMContentLoaded", function() {
    const resumeLink = document.querySelector(".nav-resume a");
  
    resumeLink.addEventListener("click", function(event) {
      event.preventDefault();
      downloadResume(resumeLink.href);
    });
  
    function downloadResume(url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });