var regions = [
    {
        "name": "b",
        "coordinates": "M 1228.58 410.24 L 1228.5 422.99 L 1252.66 422.83 L 1252.26 440.28 L 1263.89 440.47 L 1264.47 409.46 L 1255.17 402.09 L 1228.58 410.24 L 1228.58 410.24 Z ",
        "data": []
    },
    {
        "name": "c",
        "coordinates": "M 1167.13 478 L 1187.32 452.98 L 1187.7 462.34 L 1202 462.66 L 1201.78 478 L 1167.13 478 L 1167.13 478 L 1167.13 478 Z ",
        "data": []
    },
    {
        "name": "d",
        "coordinates": "M 1264.22 470.36 L 1264.22 452.04 L 1296.65 452.04 L 1296.65 470.36 L 1264.22 470.36 L 1264.22 470.36 L 1264.22 470.36 Z ",
        "data": []
    },
    {
        "name": "e",
        "coordinates": "M 1320.56 498.83 L 1320.56 475.8 L 1280.24 475.8 L 1280.24 480.14 L 1225.35 480.14 L 1225.35 483.89 L 1172.64 483.89 L 1172.64 498.83 L 1320.56 498.83 L 1320.56 498.83 L 1320.56 498.83 Z ",
        "data": []
    },
    {
        "name": "f",
        "coordinates": "M 1208.93 474.52 L 1208.93 440.87 L 1256.79 440.87 L 1256.79 474.52 L 1208.93 474.52 L 1208.93 474.52 L 1208.93 474.52 Z ",
        "data": []
    },
    {
        "name": "g",
        "coordinates": "M 1276.81 415.16 L 1280.44 415.16 L 1280.44 446.02 L 1264.22 446.02 L 1264.22 415.16 L 1272.71 415.16 L 1276.36 415.16 L 1276.81 415.16 L 1276.81 415.16 Z ",
        "data": []
    },
    {
        "name": "h",
        "coordinates": "M 1309.4 470.26 L 1303.85 470.26 L 1303.85 452.04 L 1320.56 452.04 L 1320.56 470.26 L 1313.06 470.26 L 1309.4 470.26 L 1309.4 470.26 L 1309.4 470.26 Z ",
        "data": []
    },
    {
        "name": "i",
        "coordinates": "M 879.71 442.24 L 900.9 486.56 L 901.73 513.55 L 915.42 513.71 L 915.55 484.92 L 941.16 450.46 L 949.7 426.02 L 965.64 426.02 L 965.64 414.1 L 972.48 414.7 L 993.65 418.06 L 974.02 369.37 L 949.27 374.46 L 949.27 380.46 L 924.7 393.97 L 908.65 393.16 L 895.11 390.51 L 879 393.36 L 879.71 442.24 L 879.71 442.24 Z ",
        "data": []
    },
    {
        "name": "j",
        "coordinates": "M 879.03 333.72 C 879.03 333.389 879.299 333.12 879.63 333.12 L 962.81 333.12 C 963.141 333.12 963.41 333.389 963.41 333.72 L 963.41 374.46 C 963.41 374.791 963.141 375.06 962.81 375.06 L 879.6 375.06 C 879.269 375.06 879 374.791 879 374.46 L 879 333.72 L 879.03 333.72 Z ",
        "data": []
    },
    {
        "name": "k",
        "coordinates": "M 978.18 426.62 L 978.18 450.46 L 986.13 449.48 L 986.13 444.1 L 1002.8 444.1 L 1012.08 442.32 L 1009.95 432.99 L 1009.94 430.22 L 1016.37 425.05 L 1011.78 413.84 L 1017.39 407.95 L 1017.42 389.01 L 972.95 414.34 L 965.36 414.75 L 965.64 426.02 L 978.18 426.62 L 978.18 426.62 Z ",
        "data": []
    },
    {
        "name": "l",
        "coordinates": "M 934.2 450.46 L 934.2 462.37 L 923.95 462.37 L 924.35 474.26 L 946.31 473.84 L 954.26 471.55 L 977.58 471.55 L 983.13 467.93 L 1009.69 468.4 L 1009.69 450.46 L 934.2 450.46 L 934.2 450.46 Z ",
        "data": []
    },
    {
        "name": "m",
        "coordinates": "M 978 471.49 L 978.09 513.37 L 1008.94 513.37 L 1008.94 468.84 L 982.75 468.84 L 978 471.49 L 978 471.49 Z ",
        "data": []
    },
    {
        "name": "n",
        "coordinates": "M 946.74 474.06 L 946.83 513.37 L 977.68 513.37 L 977.68 471.41 L 951.49 471.41 L 946.74 474.06 L 946.74 474.06 Z ",
        "data": []
    },
    {
        "name": "o",
        "coordinates": "M 1130.76 493.604 L 1127 493.604 L 1127 493.414 L 1130.76 493.414 L 1130.76 493.604 L 1130.76 493.604 L 1130.76 493.604 Z ",
        "data": []
    },
    {
        "name": "p",
        "coordinates": "M 1131.75 493.414 L 1131.26 493.414 L 1131.26 493.594 L 1131.75 493.594 C 1131.811 493.594 1131.87 493.619 1131.913 493.662 C 1131.956 493.705 1131.98 493.763 1131.98 493.824 L 1131.98 494.464 C 1131.98 494.525 1131.956 494.584 1131.913 494.627 C 1131.87 494.67 1131.811 494.694 1131.75 494.694 L 1131.75 494.694 C 1131.689 494.694 1131.63 494.67 1131.587 494.627 C 1131.544 494.584 1131.52 494.525 1131.52 494.464 C 1131.52 494.415 1131.48 494.374 1131.43 494.374 C 1131.404 494.372 1131.379 494.38 1131.36 494.397 C 1131.341 494.414 1131.33 494.439 1131.33 494.464 C 1131.33 494.576 1131.374 494.683 1131.453 494.761 C 1131.532 494.84 1131.639 494.884 1131.75 494.884 L 1131.75 494.884 C 1131.861 494.884 1131.968 494.84 1132.047 494.761 C 1132.126 494.683 1132.17 494.576 1132.17 494.464 L 1132.17 493.824 C 1132.17 493.714 1132.125 493.608 1132.046 493.531 C 1131.967 493.454 1131.86 493.412 1131.75 493.414 L 1131.75 493.414 Z ",
        "data": []
    },
    {
        "name": "r",
        "coordinates": "M 1262.35 340.367 L 1147.99 339.747 L 1147.57 87.357 L 1274 87.937 L 1274 172.257 L 1267.34 172.097 L 1267.34 256.107 L 1262.21 257.747 L 1262.35 340.367 L 1262.35 340.367 Z ",
        "data": []
    },
    {
        "name": "s",
        "coordinates": "M 1232.06 388.39 L 1232.06 346.3 C 1232.06 345.956 1231.784 345.675 1231.44 345.67 L 1148.19 345.67 C 1147.846 345.675 1147.57 345.956 1147.57 346.3 L 1147.57 388.39 C 1147.57 388.732 1147.848 389.01 1148.19 389.01 L 1231.44 389.01 C 1231.782 389.01 1232.06 388.732 1232.06 388.39 Z ",
        "data": []
    },
    {
        "name": "t",
        "coordinates": "M 1471.84 86.96 L 1471.84 112.75 M 1473.14 86.96 L 1473.14 112.75 M 1474.48 86.96 L 1474.48 112.75 M 1475.79 86.96 L 1475.79 112.75 M 1477.1 86.96 L 1477.1 112.75 M 1478.4 86.96 L 1478.4 112.75 M 1479.71 86.96 L 1479.71 112.75 M 1481.02 86.96 L 1481.02 112.75 M 1482.33 99.86 L 1482.33 112.75 M 1482.33 86.96 L 1482.33 99.86 M 1483.63 99.86 L 1483.63 112.76 M 1483.63 86.97 L 1483.63 99.85 M 1484.94 99.85 L 1484.94 112.75 M 1484.94 86.96 L 1484.94 99.85",
        "data": []
    },
    {
        "name": "u",
        "coordinates": "M 1484.91 93.43 L 1471.84 93.43 M 1484.91 106.32 L 1471.84 106.32",
        "data": []
    }
]






var body = document.getElementById("body");
var text = document.createElement("div");
var map = document.createElementNS("http://www.w3.org/2000/svg", "svg");

var activeRegion = 0;
var mapWidth = 0
var mapHeight = 0

var x = 800;
var y = 150;
var zx = 500;
var zy = 500;

var positionInfo = map.getBoundingClientRect();
var height = positionInfo.height;
var width = positionInfo.width;

let mx1 = 0;
let mx2 = 0;
let my1 = 0;
let my2 = 0;
let dx = 0;
let dy = 0;

let mouseDown = false;


function init() {
    body.appendChild(map);
    body.appendChild(text);

    updateView()

    mapWidth = map.clientWidth;
    mapHeight = map.clientHeight;

    console.log(mapWidth)

    loadStyles();
}

function drawRegions(region) {
    // draw background

    region.forEach((x, i) => {
        map.innerHTML += '<path id="region_' + i + '" d= " ' + x.coordinates + '" fill="grey" stroke="white"> </path>'
    })
}

function addEventListeners() {

    map.addEventListener('wheel', (event) => zoom(event))

    map.addEventListener('mousemove', (event) => moveAround(event))

    map.addEventListener('mousedown', (event) => setMouseDown(event))

    map.addEventListener('mouseup', () => setMouseUp())

    map.addEventListener('touchstart', () => setMouseDown())
    map.addEventListener('touchend', () => setMouseUp())
    map.addEventListener('touchmove', () => moveAround())
    

    //regios should have property ID so pro could get
    for (let i = 0; i < regions.length; i++) {
        // set colorssss for active region and stuff
        let x = document.getElementById("region_" + String(i))
        x.style.fill = "grey";

        x.addEventListener('mouseover', () => {
            x.style.fill = "blue";
            map.style.cursor = "pointer"
        })

        x.addEventListener('mouseleave', () => {
            if (activeRegion != i) {
                x.style.fill = "grey";
                map.style.cursor = "default"
            }
        })

        x.addEventListener('click', () => activateRegion(i, regions))
    }
}

function activateRegion(i, regions) {
    activeRegion = i
    text.innerHTML = regions[i].name
}

function highlightRegion() {
    x.style.fill = "blue";
    map.style.cursor = "pointer"
}

function clearRegions(event) {

}

function moveAround(event) {
    if (mouseDown) {
        map.style.cursor = "move"
        mx2 = event.clientX
        my2 = event.clientY

        dx = mx2 - mx1
        dy = my2 - my1

        x -= dx * zx / mapWidth; // mapWidth
        y -= dy * zy / mapHeight;

        mx1 = mx2
        my1 = my2

        updateView()
    }
}

function setMouseDown(event) {
    mouseDown = true;
    mx1 = event.clientX;
    my1 = event.clientY;

    map.style.cursor = "default"
}

function setMouseUp(event) {
    mouseDown = false;
    mx1 = 0;
    my1 = 0;

    map.style.cursor = "default"
}

function zoom(event) {
    if (zx > 100 && zy > 100) {
        zx -= event.deltaX
        zy -= event.deltaX
    } else {
        zx += 1;
        zy += 1;
    }
    if (zx > 110 && zy > 110) {
        x += event.deltaX / 2
        // y -= event.deltaY / 4
    }
    updateView()
}


function loadStyles() {
    //make 'em beautiful
    text.style.fontSize = "64px"

    map.style.cursor = "default"
    map.style.background = "black"
    map.style.width = "100%"
    map.style.height = "100%"
    body.style.overflow = "hidden"
    body.style.height = "100%"


    console.log(height, width)
}

function setPosVal(x, y, zx, zy) {
    return x + " " + y + " " + zx + " " + zy;
}

function updateView() {
    map.setAttributeNS(null, "viewBox", setPosVal(x, y, zx, zy));
}

init();
drawRegions(regions);
addEventListeners();
moveAround();




