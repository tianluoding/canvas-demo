import { AcGameObject } from "./AcGameObjects.js";


export class Ball extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.gamemap = gamemap;
        this.color = info.color;
        this.r = info.r;
        this.c = info.c;

        this.x = this.c + 0.5;
        this.y = this.r + 0.5;

        this.dx = [1, -1];
        this.direction = this.dx[0];

        this.speed = 5;

    }

    start() {

    }

    next_step() {
        this.update_move();
    }

    change_direction() {
        
        if(this.y >= this.gamemap.rows){
            this.direction = this.dx[1];
            // console.log(this.direction);
        }
        if(this.y <= 0 ){
            this.direction = this.dx[0];
        }
    }

    update_move(){
        
        const move_distance = this.speed * this.timedelta / 1000;

        this.y += move_distance * this.direction;

    }

    update() {
        // console.log("flush!");
        this.change_direction();
        this.render();
    }

    render() {
        const L = this.gamemap.L;

        this.gamemap.ctx.fillStyle = this.color;
        this.gamemap.ctx.beginPath();
        this.gamemap.ctx.arc(this.x * L, this.y*L, L / 2, 0, Math.PI * 2);
        this.gamemap.ctx.fill();
    }
}