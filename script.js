function getRandomColor() {
    const letters = '0123456789ABCDEF';  
    let color = '#';  
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];  
    }
    return color;
}


function getRandomFont() {
    const fontList = [
        "Arial, sans-serif", "Verdana, Geneva, sans-serif", "Courier New, Courier, monospace", 
        "'Times New Roman', Times, serif", "'Georgia', serif", "Tahoma, Geneva, sans-serif", 
        "'Comic Sans MS', cursive, sans-serif", "'Lucida Console', Monaco, monospace", 
        "'Trebuchet MS', Helvetica, sans-serif", "Impact, Charcoal, sans-serif"
    ];
 
    return fontList[Math.floor(Math.random() * fontList.length)];
}


const text = document.getElementById("text");
const toggleButton = document.getElementById("toggleButton");
const changeButton = document.getElementById("changeButton");


function toggleText() {
    text.classList.toggle("hidden");  
}


function changeStyle() {
    const randomColor = getRandomColor(); 
    const randomFont = getRandomFont();  

    
    text.style.color = randomColor;
    text.style.fontFamily = randomFont;
}


toggleButton.addEventListener("click", toggleText);


changeButton.addEventListener("click", changeStyle);

let images = ["guitarPhotos/acoustic_guitar.jpg.jpg", "guitarPhotos/electric_guitar.jpg.jpg", "guitarPhotos/bass_guitar.jpg.jpg"];
let captions = [
    "This is an acoustic guitar", 
    "This is an electric guitar", 
    "This is a bass guitar"
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = images[index];
    document.getElementById("caption").textContent = captions[index];  
}

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % images.length;
    updateGallery();
});

document.getElementById("prev").addEventListener("click", function() {
    index = (index - 1 + images.length) % images.length;
    updateGallery();
});


function validateInput(input, errorId) {
    let regex = /^[A-Za-z\s]+$/;  
    if (!regex.test(input.value)) {
        document.getElementById(errorId).textContent = "Only letters and spaces allowed";
    } else {
        document.getElementById(errorId).textContent = "";
    }
}

document.getElementById("name").addEventListener("input", function() {
    validateInput(this, "nameError");
});

document.getElementById("city").addEventListener("input", function() {
    validateInput(this, "cityError");
});

