const htm = require('htm');
const html = htm.bind();

const title = 'Audio Playback Visualizer';
const content = 'Room Studio.';

const template = html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Room Studio | Audio Playback Visualizer</title>
</head>
<body>
    
    <!-- <div class="visualizer-container"> -->
    <div class="header-container">
        <header>
            <div class="text-container center-title">
                <h1>
                Room Studio
                </h1>
            </div>
            <hr>

            <div>
                <div class="text-container2 center-description">
                    <p5>
                        by:
                    </p5>
                    <p5>
                        <trademark>
                            <!-- <a href="image_url.jpg" target="_blank">
                                <img src="image_url.jpg" alt="Image Preview" style="max-width: 100%; height: auto;">
                            </a> -->
                                <a style="cursor: pointer; text-decoration: none;" href="Trademark2.png" target="default">
                                    <!-- <img src="#" style="max-width: 25%; height: auto;"> -->
                                    239 Ricky Waterss
                                </a>
                        </trademark>
                    </p5>
                </div>
            </div>
        </header>
    </div>

        <!-- <div class="overlay-mask-container">
            <div class="overlay-mask"></div>
        </div> -->
        <div class="video-container center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HhIyB3_96gE?si=ji6zo-ZkaD-_kUDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <!-- <canvas id="visualizer"></canvas> -->
    <!-- </div> -->


    <!--Placement Holder-->
    <!-- Watermark Container -->
    <div id="watermark-container">
        <!--<p class="watermark-text">Your Watermark</p>-->
        <!--<p class="watermark-text">Trademark</p>-->
        <!--Watermark Image Placement-->
        <a style="cursor: pointer;" href="https://239rickywaters.com" class="button" type="button"><img src="Trademark.png" alt="Watermark" id="watermark-image"></a>
    </div>
    <footer>
        <h6>
            Terms & Conditions <br />
            Privacy Policy
        </h6>
    </footer>
    <script src="script.js"></script>
</body>
</html>
`;

console.log(template);
