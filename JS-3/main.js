var menus = document.querySelectorAll(".menu div");
var contents = document.querySelectorAll(".content div")


var btn = document.querySelector(".btn")
var add = document.querySelector(".add")
var list = document.querySelector(".list")
var del = document.querySelector(".backspace")


for (var elm of menus) {
    elm.addEventListener("click", function () {
        var active = document.querySelector(".menu .active");
        active.classList.remove("active")
        this.classList.add("active")

        var pg = this.getAttribute("data-pg")

        for (var content of contents) {
            if (content.getAttribute("data-pg") == pg) {
                content.classList.remove("d-none")
            } else {
                content.classList.add("d-none");
            }

        }
    })
}



var ImageList = [
    "photos/image1.jpg",
    "photos/image2.jpg",
    "photos/image3.jpg"
]

var image = document.querySelector('.photo');
image.src = ImageList[0];

var currentSlide = 0;
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');


next.onclick = function () {
    currentSlide++;

    if (currentSlide > ImageList.length - 1) {
        currentSlide = 0
    }

    image.src = ImageList[currentSlide];
}

prev.onclick = function () {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = ImageList.length - 1
    }
    image.src = ImageList[currentSlide];
}





btn.addEventListener("click", function () {
    let li=document.createElement('li');
    li.innerText=add.value;
    let i=document.createElement('i');
    i.className="fa-solid fa-xmark";
    li.appendChild(i);
    i.onclick=function(){
        this.parentElement.remove();
    }
    list.append(li);
})

function BackSpace() {
    var input = document.querySelector(".add").value;
    var del = input.slice(0, -1);
    document.querySelector(".add").value = del;
}