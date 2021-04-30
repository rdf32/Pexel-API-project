// 563492ad6f9170000100000131d1b0673aa24973a2fb17b9e29e7080 API key

let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    $('#header').css("height", "500px");
    $('.cite').css({"text-align":"end", "margin-top":"180px"});
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           let res = JSON.parse(xhttp.responseText);
           let photoData = res.photos;
           console.log(photoData);
           let container = document.querySelector('#photo-divs');
           container.innerHTML = '';
   
           photoData.forEach(photo => {
               console.log(photo.src);
               let photoDiv = document.createElement('div');
               photoDiv.classList.add('photo-div');
               photoDiv.innerHTML = `<img src=${photo.src.medium}>
                            <p> <a href=${photo.url}>Photo</a> by 
               <a href=${photo.photographer_url}>${photo.photographer}</a> on Pexels. </p>
               `;
               container.appendChild(photoDiv);
           });              
           
           }
       };
       
    let textValue = document.querySelector('#search-bar').value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=40`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f9170000100000131d1b0673aa24973a2fb17b9e29e7080')
    xhttp.send();
});

