// starting the project getting both tags that im going to work with
const canvasEvent = document.querySelector('canvas'), canvasCtx = canvasEvent.getContext('2d');
const lineWidth = 15;


function setUp(){
// getting the screen width and height for canvas
    canvasEvent.width = canvasCtx.width = window.innerWidth;
    canvasEvent.height = canvasCtx.height = window.innerHeight;
};
function draw(){
// canvas properties to create the "field"  
    canvasCtx.fillStyle = '#004a00';
    canvasCtx.fillRect (0,0, window.innerWidth, window.innerHeight)
// canvas properties to create the line in the mid field
    canvasCtx.fillStyle = '#ffffff';
    canvasCtx.fillRect(window.innerWidth / 2 - lineWidth / 2, 0, lineWidth, window.innerHeight);
//  canvas properties to draw the left bar 
    canvasCtx.fillStyle = '#ffffff';
    canvasCtx.fillRect(10, window.innerHeight/2, lineWidth, window.innerHeight/5);

    // canvas properties to draw the right bar 
    canvasCtx.fillStyle = '#ffffff';
    canvasCtx.fillRect(window.innerWidth - lineWidth - 15, window.innerHeight / 2 , lineWidth, window.innerHeight/5);
    // canvas properties to draw the ball
    canvasCtx.beginPath()
    canvasCtx.arc(500, 300, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();
    // canvas properties to draw the scoring
    canvasCtx.font = "bold 5rem Arial"
    canvasCtx.textAlign = 'center'
    canvasCtx.textBaseline = 'top'
    canvasCtx.fillStyle =  '#00000050'
    canvasCtx.fillText ('1', window.innerWidth / 4, 50); 
    canvasCtx.fillText ('3', window.innerWidth / 4 + window.innerWidth/2, 50); 
};

setUp();
draw();