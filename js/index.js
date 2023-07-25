
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


const carouselContainer = document.querySelector('.carousel');
const carouselControlContainer = document.querySelector('.carousel-control');
const carouselControl = ['previous', 'next'];
const projectItems = document.querySelectorAll('.project')

class Gallery {

    constructor(container, items, controls){
      this.galleryContainer = container;
      this.galleryControls = controls;
      this.galleryArray = [...items];
    }

    updateProject(){
      this.galleryArray.forEach(el => {
        el.classList.remove('project-1');
        el.classList.remove('project-2');
        el.classList.remove('project-3');
        el.classList.remove('project-4');
        el.classList.remove('project-5');    
      })

      this.galleryArray.slice(0,5).forEach((el, i) => {
        el.classList.add('project-${i+1}');
      });
    }

    setCurrentState(direction) {
      if (direction.className == 'carousel-control-previous') {

        this.galleryArray.unshift(this.galleryArray.pop());
      }else {
        this.galleryArray.push(this.galleryArray.shift());
      }
      this.updateProject();
    }

    setupGalleryControls(){
      this.galleryControls.forEach(control=> {
        carouselControlContainer.appendChild(document.createElement('button')).className = 'carousel-control-${control}';
        document.querySelector('.carousel-control-${control}').innerText = control;
      });

    }

    enableGalleryControls(){

      const triggers = [...carouselControlContainer.childNodes];
      triggers.forEach(control => {
        control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });

    }

}


const myGallery = new Gallery(carouselContainer, projectItems, carouselControl);

myGallery.setupGalleryControls();
myGallery.enableGalleryControls();