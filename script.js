
// require('dotenv').config();

document.addEventListener('DOMContentLoaded', () => {
    const audioElement = new Audio('Trademark.mp3');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');

    function drawVisualizer() {
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i] / 2;

            ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }

        requestAnimationFrame(drawVisualizer);
    }

// Add Watermrk Text Dynamically
    //document.addEventListener('DOMContentLoaded', function () {
    //    var watermarkText = document.querySelector('.watermark-text');
    //    watermarkText.textContent = 'Updated Watermark Text';
    //});

// Add Watermark Image Dynamically
    document.addEventListener('DOMContentLoaded', function () {
        process.env.TRADEMARK_IMAGE = document.getElementById('watermark-image');
        watermarkImage.src = 'process.env.TRADEMARK_IMAGE'; // Replace with the actual path to your image
        watermarkImage.alt = 'Watermark Alt Text'; // Replace with appropriate alt text
    });

// Restrict Download
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    audioElement.addEventListener('canplay', () => {
        audioElement.play().then(() => {
            drawVisualizer();
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    });
});
