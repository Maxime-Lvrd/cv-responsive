// afficher navbar selon taille de l'écran
window.onload=function() {
    var btn = document.querySelector('.toggle-menu');
    var nav = document.querySelector('nav ul');
    btn.onclick = function() {
        if (nav.style.display == 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
};

window.addEventListener('resize', function() {
    var nav = document.querySelector('nav ul');
    width = window.innerWidth;
    if (width >= 600) {
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none';
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 


// Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 


const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
})

