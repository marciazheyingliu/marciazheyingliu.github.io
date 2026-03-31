const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('musicToggle');
let playing = false;

if (musicToggle) {
  musicToggle.onclick = () => {
    if (playing) {
      bgm.pause();
      musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
      bgm.play();
      musicToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    playing = !playing;
  };
}