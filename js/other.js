/* The Gallery class is responsible for setting up and enabling carousel controls for a gallery of
projects. */
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