
const hadisler = [
    "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz. (Buhari, İlim 12)",
    "Komşusu açken tok yatan bizden değildir. (Müslim, İman 74)",
    "Sizin hayırlınız, ahlakı en güzel olanınızdır. (Buhari, Edeb 39)",
    "Hiçbir baba, çocuğuna güzel terbiyeden daha üstün bir hediye veremez. (Tirmizi, Birr 33)",
    "İnsanların hayırlısı, insanlara faydalı olandır. (Ahmed b. Hanbel, Müsned, 2/295)",
    "İlim öğrenmek her Müslüman erkek ve kadına farzdır. (İbn Mace, Mukaddime 17)",
    "Güzel söz sadakadır. (Buhari, Edeb 34)"
];

const images = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
    "image_7.jpg"
];

let currentIndex = 0;

function updateSlideshow() {
    const imageElement = document.getElementById("slideshow-image");
    const hadisElement = document.getElementById("slideshow-hadis");

    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    hadisElement.textContent = hadisler[currentIndex];
}

// Start the slideshow
setInterval(updateSlideshow, 5000);
window.onload = () => updateSlideshow();

// Play audio on button click
document.getElementById("play-button").addEventListener("click", () => {
    const audio = document.getElementById("background-audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
