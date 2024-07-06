class shape{
    constructor(){
        this.color='';
    }
    setColor(color){
        this.color=(color);
    }
}
class circle extends shape{
    render(){
        return `<circle height="100%" width="100%" cx="50" cy="50" r="50" fill="${this.color}">`
    }
}
class triangle extends shape{
    rednder(){
        return `<polygon height="100%" width="100%" points="0,200 300.200 150,0" fill="${this.color}">`
    }
}
class square extends shape{
    render(){
        return `<rect height="100%" width="100%" x="50" fill="${this.color}">`
    }
}
module.exports ={circle, square, triangle}