var timer = 400
var timeCheck = ""
var drawnSketch = ""
var answerHolder = ""
var score1 = 0





document.getElementById("score").innerHTML = score1
document.getElementById("time").innerHTML = timer



function preload() { classifier = ml5.imageClassifier("DoodleNet", modelLoaded) }

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    /*canvas.mouseReleased(classifyCanvas)*/
    background("gainsboro")
}

function modelLoaded() {
    console.log("Model Loaded!")
}
/*
function classifyCanvas(){
    
}*/

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        drawnSketch = results[0].label
        document.getElementById("sketch1").innerHTML = drawnSketch
        document.getElementById("confidence1").innerHTML = (results[0].confidence * 100).toFixed(2) + "%"

    }
}

var time = ""
var array1 = ['river', 'leg', 'cactus', 'rain', 'hurricane']
var array = ""
function start() {
    
    var number = Math.floor(Math.floor(Math.random() * array1.length))
    console.log(array1[number])
    array = array1[number]
    document.getElementById("label").innerHTML = "Sketch to be drawn: " + array

    time = "go"
}



function draw() {
    if (mouseIsPressed) {
        strokeWeight(10)
        line(pmouseX, pmouseY, mouseX, mouseY)
    }

    classifier.classify(canvas, gotResults)

    if (time == "go") {
        timer = timer - 1
        document.getElementById("time").innerHTML = timer
    }

    checkSketch()
}



function checkSketch() {
    if (timer < 1) {
        timeCheck = "completed"
        timer = 1
    }

    if (drawnSketch == array && timeCheck == "completed") {
        score1 = score1 + 1
        timeCheck = ""
        array = ""
        console.log(score)
        document.getElementById("score").innerHTML = score1
    }
    if (timeCheck = "completed") {
        timeCheck = ""
        console.log("Timer is at 0")
    }
}



function clearCanvas() {
    /*var array1 = ['Car', 'Dog', 'House', 'Book', 'Box', 'Soup', 'Bell', 'Alligator', 'Pencil', 'Backpack', 'Human', 'Bicyle', 'Tree', 'Fence', 'T-rex']
    var number = Math.floor(Math.floor(Math.random() * array1.length))
    console.log(array1[number])
    document.getElementById("label").innerHTML = "Sketch to be drawn: " + array1[number]*/
    background("gainsboro")
    time = ""
    timer = 400
    document.getElementById("time").innerHTML = timer
}