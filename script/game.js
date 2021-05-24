

let canvas;
let ctx;
let world;


function init() {
    
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}
/*
addEventListener('keydown', e => {
    console.log(e);
});
*/