var movie = JSON.parse(movies);
console.log(movie);

function printInfo() {
    for (let x = 0; x < movie.length; x++) {
        document.getElementById("mov").innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${movie[x].imag}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${movie[x].name}</h5>
            <p class="card-text">${movie[x].description}</p>
            <p class="card-text"><small class="text-muted">${movie[x].minutes}</small></p>
            <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="like button border-dark">Like</button>
                <p class="hm">${movie[x].likes} Likes till now</p>
            </div>
        </div>
      </div>
    </div>
  </div>
 </div>   
`;
    }
    var likebuttons = document.getElementsByClassName("like");
    for (let i = 0; i < likebuttons.length; i++) {
        likebuttons[i].addEventListener("click", function() {
            likesup(i);
        })
    }
}

printInfo();

function likesup(x) {
    movie[x].likes += 1;
    document.getElementsByClassName("hm")[x].innerHTML = movie[x].likes + "Likes till now";
}

function sortlikes() {
    movie.sort((a, b) => b.likes - a.likes);
    document.getElementById("mov").innerHTML = "";
    printInfo();
}

document.getElementById("likessorted").addEventListener("click", function() {
    sortlikes();
})