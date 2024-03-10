fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Here you would typically call a function to process and display this data on your web page.
  })
  .catch(error => console.error('Error loading the JSON file:', error));


  document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.images.forEach(img => {
          // Assuming the place where the image needs to be inserted has an ID corresponding to the image's ID
          const placeholder = document.getElementById(img.id);
          if (placeholder) {
            // Create an <img> element
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.alt;
            imgElement.className = 'd-block w-100'; // Bootstrap class for full width
  
            // Optionally, clear the placeholder content before inserting new content if it's not empty
            placeholder.innerHTML = '';
  
            // Insert the <img> element
            placeholder.appendChild(imgElement);
  
            // If you want to add captions or other elements, you can similarly create and append them here
            // Example: Adding a caption based on the image's title and description
            if (img.title && img.description) {
              const captionDiv = document.createElement('div');
              captionDiv.className = 'carousel-caption';
  
              const titleH1 = document.createElement('h1');
              titleH1.textContent = img.title;
              const descriptionP = document.createElement('p');
              descriptionP.textContent = img.description;
  
              captionDiv.appendChild(titleH1);
              captionDiv.appendChild(descriptionP);
  
              // Assuming the structure is to append the caption inside the placeholder or another specific element
              placeholder.appendChild(captionDiv);
            }
          }
        });
      })
      .catch(error => console.error('Error loading or processing data.json', error));
  });
  
  
  
