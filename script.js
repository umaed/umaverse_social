// DAFTAR VIDEO (ISI 5 VIDEO)
const videoList = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4"
];

// PILIH VIDEO RANDOM
const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];

// SET VIDEO RANDOM KE BACKGROUND
const bgVideo = document.getElementById("bgVideo");
bgVideo.src = randomVideo;



// === SISTEM POPUP USERNAME ===
const buttons = document.querySelectorAll(".btn");
const popup = document.getElementById("popupBox");
const popupText = document.getElementById("popupText");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let user = btn.getAttribute("data-user");

        popupText.textContent = user;
        popup.style.opacity = 1;

        setTimeout(() => {
            popup.style.opacity = 0;
        }, 2000);
    });
});
