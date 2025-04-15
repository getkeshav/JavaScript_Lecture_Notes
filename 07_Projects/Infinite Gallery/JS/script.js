const image_container = document.querySelector(".image-container");
let page = 1;

function addImage(imgUrl) {
  const img = document.createElement("img");

  console.log(imgUrl);
  img.setAttribute("src", imgUrl);
  img.setAttribute("alt", "error");
  img.className = "img";

  image_container.appendChild(img);
}

async function fetchImage(page) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=1`
  );
  const data = await response.json();

  const imgUrl = data[0].download_url;

  addImage(imgUrl);
}

fetchImage();

window.addEventListener("scroll", () => {
  fetchImage(page);
  page++;
  fetchImage(page);
  page++;
});
