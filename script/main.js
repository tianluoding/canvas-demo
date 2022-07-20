import { GameMap } from "./GameMap.js";

let canvas = document.getElementById('canvas-demo');
let ctx = canvas.getContext('2d');
let parent = document.getElementById('parent')

// new ball(ctx, parent);
new GameMap(ctx, parent);