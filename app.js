const htm = require('htm');
const html = htm.bind();

const title = 'Audio Playback Visualizer';
const content = 'Room Studio.';

const template = html`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Room Studio | Audio Playback Visualizer</title>
</head>
<body>
    <div class="visualizer-container">
        <header>
            <h1>
                Room Studio
            </h1>
            <hr />
            <div class="text-container">
                <p5>
                    by:
                </p5>
                <p5>
                    <trademark>239 Ricky Waterss</trademark>
                </p5>
            </div>
        </header>
        <canvas id="visualizer"></canvas>
    </div>

    <!--Placement Holder-->
    <!-- Watermark Container -->
    <div id="watermark-container">
        <!--<p class="watermark-text">Your Watermark</p>-->
        <!--<p class="watermark-text">Trademark</p>-->
        <!--Watermark Image Placement-->
        <a style="cursor: pointer;" href="TRADEMARK_IMAGE" class="button" type="button"><img src="Trademark.png" alt="Watermark" id="watermark-image"></a>
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
