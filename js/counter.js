export default class Counter{
    constructor({
        endGame, score = _ => {}
    } = {}) {
        this.placeToRender = document.querySelector('.counter'), 
        this.time = 60,
        this.callback = endGame;
        this.score = score;
        this.timer = this.render()
    }

    render(){
        this.placeToRender.innerText = `Time: ${this.time} Score: ${this.score()}`;
        
        if(this.time > 30){
            this.placeToRender.style.color = `rgb(25, 167, 60)`;
            setTimeout(() => { this.render() }, 1000)
        }else if(this.time > 10 && this.time <= 30){
            this.placeToRender.style.color = `rgb(255, 255, 0)`;
            setTimeout(() => { this.render() }, 1000)
        }else if( this.time > 0  && this.time <= 10 ) { 
            this.placeToRender.style.color = `rgb(255, 0, 0)` 
            setTimeout(() => { this.render() }, 1000)
        }
        else if( this.time == 0 ){
            this.callback();
        }
        this.time -= 1;
    }
}