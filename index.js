
  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.images.forEach(imageData => {
      const imageElement = document.getElementById(imageData.id);
      if (imageElement) {
        if (imageElement.tagName.toLowerCase() === 'img') {
          imageElement.src = imageData.src;
        } else {
          imageElement.style.backgroundImage = `url('${imageData.src}')`;
          imageElement.innerHTML = `<img src="${imageData.src}" alt="${imageData.id}" class="img-fluid">`;
        }
      }
    });
  })
  .catch(error => console.log('Error loading or processing data: ', error));

  
  