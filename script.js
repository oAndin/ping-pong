// starting the project getting both tags that im going to work with
const canvasEvent = document.querySelector('canvas'),
    canvasCtx = canvasEvent.getContext('2d'),
    gapX = 10
    ;

const mouse = {
    x:0,
    y:0,
}

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = '#004a00';
        canvasCtx.fillRect(0, 0, this.w, this.h)
    }
};

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = '#ffffff';
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h);
    }
};

const leftPaddle = {
    x: gapX,
    y: 100,
    w: line.w,
    h: 200,
    _move : function(){
        this.y = mouse.y - this.h / 2;
    },
    draw: function () {
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
        this._move();
    }
};

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,
    _move : function(){
        this.y = ball.y;
    },
    draw: function () {
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
        this._move();
    }
};

const score = {
    human: 1,
    computer: 2,
    draw: function () {
        canvasCtx.font = "bold 5rem Arial"
        canvasCtx.textAlign = 'center'
        canvasCtx.textBaseline = 'top'
        canvasCtx.fillStyle = '#00000050'
        canvasCtx.fillText(this.human, field.w / 4, 50);
        canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50);
    }
};

const ball = {
    x: 0,
    y: 0,
    r: 20,
    speed:5,
    directionY: 1,
    directionX: 1,
    _calcPosition: function() {
        if(
            (this.y - this.r < 0 && this.directionY < 0)
            ||
            (this.y > field.h - this.r && this.directionY > 0)
            ){
            this._reverseY();
        }
    },
    _reverseX: function(){
        this.directionX *= -1;
    },
    _reverseY: function(){
        this.directionY *= -1;
    },
    _move: function(){
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
    },
    draw: function () {
        canvasCtx.fillStyle = '#ffffff';
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasCtx.fill();
        this._calcPosition();
        this._move();
    }
};


function setUp() {
    // getting the screen width and height for canvas
    canvasEvent.width = canvasCtx.width = field.w;
    canvasEvent.height = canvasCtx.height = field.h;
};
function draw() {
    field.draw();
    line.draw();
    leftPaddle.draw();
    rightPaddle.draw();
    score.draw();
    ball.draw();
};

window.animateFrame = (function() {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback){
        return window.setTimeout(callback, 1000 / 60)
    }
})();

function main (){
    animateFrame(main)
    draw()
}

setUp();
main();

canvasEvent.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})
// window.setInterval(draw, 1000 / 60)

