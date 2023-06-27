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
    canvasCtx.fillRect (0,0, window.innerWidth, window.innerHeight);
    canvasCtx.fillStyle = '#ffffff';
    const x =  window.innerWidth / 2 - lineWidth / 2;
    const y = 0;
    const w = lineWidth;
    const h = window.innerHeight;
    canvasCtx.fillRect(x, y, w, h);
};

setUp();
draw();