const images = [
    "FLICCImages/FLICC_Card_1.jpg",
    "FLICCImages/FLICC_Card_2.jpg",
    "FLICCImages/FLICC_Card_3.jpg",
    "FLICCImages/FLICC_Card_4.jpg",
    "FLICCImages/FLICC_Card_5.jpg",
    "FLICCImages/FLICC_Card_6.jpg",
    "FLICCImages/FLICC_Card_7.jpg",
    "FLICCImages/FLICC_Card_8.jpg",
    "FLICCImages/FLICC_Card_9.jpg",
    "FLICCImages/FLICC_Card_10.jpg",
    "FLICCImages/FLICC_Card_11.jpg",
    "FLICCImages/FLICC_Card_12.jpg",
    "FLICCImages/FLICC_Card_13.jpg",
    "FLICCImages/FLICC_Card_14.jpg",
    "FLICCImages/FLICC_Card_15.jpg",
    "FLICCImages/FLICC_Card_16.jpg",
    "FLICCImages/FLICC_Card_17.jpg",
    "FLICCImages/FLICC_Card_18.jpg",
    "FLICCImages/FLICC_Card_20.jpg",
    "FLICCImages/FLICC_Card_21.jpg",
    "FLICCImages/FLICC_Card_22.jpg",
    "FLICCImages/FLICC_Card_23.jpg",
    "FLICCImages/FLICC_Card_24.jpg",
    "FLICCImages/FLICC_Card_25.jpg",
    "FLICCImages/FLICC_Card_26.jpg",
    "FLICCImages/FLICC_Card_27.jpg",
    "FLICCImages/FLICC_Card_28.jpg",
    "FLICCImages/FLICC_Card_29.jpg",
    "FLICCImages/FLICC_Card_30.jpg",
    "FLICCImages/FLICC_Card_31.jpg",
    "FLICCImages/FLICC_Card_32.jpg",
    "FLICCImages/FLICC_Card_33.jpg",
    
]; // Add more image filenames as needed

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const imgElement = document.getElementById("randomImage");

function updateImage() {
    imgElement.src = getRandomImage();
}

imgElement.addEventListener("click", updateImage);

// Initialize with a random image on load
updateImage();
