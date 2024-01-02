document.addEventListener('DOMContentLoaded', () => {
    const audioElement = new Audio('./Trademark.mp3');
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
        watermarkImage.src = './Trademark.png'; // Replace with the actual path to your image
        watermarkImage.alt = 'Watermark Alt Text'; // Replace with appropriate alt text
    });

// Restrict Download
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

//// Image Modal
function openModal() {
    document.getElementById('imageModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }
  
  // Attach the openModal function to the link
  document.getElementById('openModalLink').addEventListener('click', openModal);  

//// Image Preview Link
function previewImage() {
    var imageURL = document.getElementById("imageURL").value;
    var previewLink = document.getElementById("previewLink");
    
    // Set the href attribute of the preview link
    previewLink.href = imageURL;

    // Create an image element for preview
    var img = document.createElement("img");
    img.src = imageURL;
    img.alt = "Image Preview";
    img.style.maxWidth = "100%";

    // Remove existing child elements inside the preview link
    while (previewLink.firstChild) {
        previewLink.removeChild(previewLink.firstChild);
    }

    // Append the image to the preview link
    previewLink.appendChild(img);
}


    audioElement.addEventListener('canplay', () => {
        audioElement.play().then(() => {
            drawVisualizer();
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    });
});
