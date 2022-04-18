const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const sliders = document.querySelectorAll('.player__slider');

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    toggleButton.textContent = video.paused ? '►' : '❚ ❚';
}

function updateSliders() {
    video[this.name] = this.value;
}

function skipVideo() {
    video.currentTime += parseInt(this.dataset.skip);
}

function handleProgress() {
    progressBar.style.flexBasis = `${Math.round((video.currentTime / video.duration) * 100)}%`;
}

function updateVideo(e) {
    video.currentTime = Math.round((e.offsetX / progress.offsetWidth) * video.duration);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggleButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skipVideo));

sliders.forEach(slider => slider.addEventListener('input', updateSliders));


progress.addEventListener('click', updateVideo);
// progress.addEventListener('mousemove', updateVideo);
