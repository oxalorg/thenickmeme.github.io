var ctx;
var imgBg;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 50;
var fallingDrops = [];
var width = 0;
var height = 0;

// function drawBackground(){
//     ctx.drawImage(imgBg, 0, 0); //Background
// }

function draw() {
    ctx.clearRect(0, 0, width, height);

    for (var i=0; i< noOfDrops; i++)
    {
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop

        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        if (fallingDrops[i].y > height) {  //Repeat the raindrop when it falls out of view
            fallingDrops[i].y = -125 //Account for the image size
            fallingDrops[i].x = -50 + Math.random() * width;    //Make it appear randomly along the width
        }
    }
}

function setup() {
    var canvas = document.getElementById('canvasRegn');

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        window.onresize = function onresize() {
        	width = canvas.width = window.innerWidth;
        	height = canvas.height = window.innerHeight;
        }

        window.onresize();
        setInterval(draw, 36);
        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            imageSource = ['http://t10.deviantart.net/nr-2ZfE7vlwLM5O5qYnmm-YrYBw=/300x200/filters:fixed_height(100,100):origin()/pre03/2876/th/pre/i/2012/128/7/4/the_infamous_troll_face___cleaned_up_in_super_hd__by_johnluke728-d4z0kxa.png', 'http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395991705/gjn81wvxqsq6yzcwubok.png',
        'http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395991705/gjn81wvxqsq6yzcwubok.png']
            fallingDr.image.src = imageSource[Math.floor(Math.random() * imageSource.length)];

            fallingDr["x"] = Math.random() * width;
            fallingDr["y"] = Math.random() * height/3;
            fallingDr["speed"] = 3 + Math.random() * 6;
            fallingDrops.push(fallingDr);
        }

    }
}




setup();
