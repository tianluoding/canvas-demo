import { AcGameObject } from "./AcGameObjects.js";
import { Ball } from "./Ball.js";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;

        this.L = 0;

        this.rows = 13;
        this.cols = 13;

        this.ball = new Ball({color: "#44A1C3", r: 0, c: parseInt(this.cols / 2)}, this);
    }

    next_step() {
        this.ball.next_step();
    }

    start() {

    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update() {
        this.update_size();
        this.next_step();
        this.render();
    }

    render() {
        const color_even = "#A4D04B", color_odd = "#AAD751";
        for(let r = 0; r < this.rows; r ++) {
            for(let c = 0; c < this.cols; c ++) {
                if((r + c) % 2 === 0) {
                    this.ctx.fillStyle = color_even;
                }else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c*this.L, r * this.L, this.L, this.L);
            }
        }
    }
}