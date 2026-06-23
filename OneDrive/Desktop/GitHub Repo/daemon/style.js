const daemon = [
  {
    id: 1,
    location: "./assets/Daemon Peekaboo.jpg",
    description: "Daemon looking over the couch",
    type: "Main"
  },
  {
    id: 2,
    location: "./assets/Daemon Cuddling on Bed with me.jpg",
    description: "Me cuddling with Daemon, reluctantly",
    type: "Main"
  },
  {
    id: 3,
    location: "./assets/Daemon on Couch.jpg",
    description: "Daemon laying on the couch",
    type: "Main"
  },
  {
    id: 4,
    location: "./assets/Daemon Under Table.jpg",
    description: "Daemon laying under the coffee table.",
    type: "Main"
  },
  {
    id: 5,
    location: "./assets/early days/Daemon Hug.jpg",
    description: "Hugging Daemon against his will",
    type: "Early Days"
  },
  {
    id: 6,
    location: "./assets/early days/Daemon reading.jpg",
    description: "Daemon looking at my laptop",
    type: "Early Days"
  },
  {
    id: 7,
    location: "./assets/early days/Daemon Santa.jpg",
    description: "Daemon meeting Santa his first Christmas",
    type: "Early Days"
  },
  {
    id: 8,
    location: "./assets/early days/Daemon Sleeping Dad.jpg",
    description: "Daemon napping with dad around the holidays",
    type: "Early Days"
  },
  {
    id: 9,
    location: "./assets/early days/Daemon Sleeping First Night.jpg",
    description: "Daemon sleeping on his bed his first night",
    type: "Early Days"
  },
  {
    id: 10,
    location: "./assets/Modeling/Daemon Fall Model.jpg",
    description: "Daemon giving Fall Catalog Realness ",
    type: "Modeling"
  },
  {
    id: 11,
    location: "./assets/Modeling/Daemon Hero.jpg",
    description: "Daemon under the tree at Dad's",
    type: "Modeling"
  },
  {
    id: 12,
    location: "./assets/Modeling/Daemon in Window.jpg",
    description: "Daemon judging every who walks by",
    type: "Modeling"
  },
  {
    id: 13,
    location: "./assets/Modeling/Daemon on Porch.jpg",
    description: "Daemon strikes a pose",
    type: "Modeling"
  },
  {
    id: 14,
    location: "./assets/Modeling/Daemon Snow.jpg",
    description: "Daemon in his happy place....in the snow",
    type: "Modeling"
  },
  {
    id: 15,
    location: "./assets/& Friends/Daemon Bigby Lined Up.jpg",
    description: "Daemon with Bigby striking a pose on the porch",
    type: "With Friends"
  },
  {
    id: 16,
    location: "./assets/& Friends/Daemon Bigby Love.jpg",
    description: "Daemon and Bigby with love",
    type: "With Friends"
  },
  {
    id: 17,
    location: "./assets/& Friends/Daemon Bigby.jpg",
    description: "Daemon and Bigby",
    type: "With Friends"
  },
  {
    id: 18,
    location: "./assets/& Friends/Daemon GF.jpg",
    description: "Daemon and his gf",
    type: "With Friends"
  },
  {
    id: 19,
    location: "./assets/& Friends/Daemon Grandma Christmas.jpg",
    description: "Daemon getting his Christmas presents from grandma",
    type: "With Friends"
  },
  {
    id: 20,
    location: "./assets/& Friends/Daemon Protected by Grandma.jpg",
    description: "Daemon and grandma on the porch ",
    type: "With Friends"
  },
  {
    id: 21,
    location: "./assets/& Friends/Daemon Teaching Houseman.jpg",
    description: "Daemon teaching Housman how to get away with anything he wants",
    type: "With Friends"
  }
];

function renderGallery(gallerySelector, photoType) {
  const gallery = document.querySelector(gallerySelector);
  const photos = daemon.filter((photo) => photo.type === photoType);

  gallery.innerHTML = photos.map((photo) => {
    return `
      <div class="gallery__item">
        <img
          class="gallery__img"
          src="${photo.location}"
          alt="${photo.description}"
          data-full="${photo.location}"
        >
        <p class="gallery__description">${photo.description}</p>
      </div>
    `;
  }).join("");
}

renderGallery(".gallery.timeline__early-years", "Early Days");
renderGallery(".gallery.timeline__modeling", "Modeling");
renderGallery(".gallery.timeline__with-friends", "With Friends");


/*

LIGHTBOX

*/


const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__img")) {
    lightboxImg.src = event.target.dataset.full;
    lightboxImg.alt = event.target.alt;
    lightbox.classList.add("show");
  }
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});