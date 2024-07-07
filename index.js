const inquirer =require("inquirer");
const {circle, triangle, square}= require ("./lib/shapes");

class svg {//come back to this
    constructor(){
        this.text="";
        this.shape="";
    }
}
const questions =[
    {
        type: "checkbox",
        name: "shapes",
        message: "What shape do you want your logo to be?",
        choices: ["circle", "triangle", "square"]
    },
    {
        type:"input",
        name:"bgColor",
        message:"What color do you want the background of your logo to be? ",
    },
    {
        type:"input",
        name:"text",
        message:"Enter up to three characters to be put on your logo. ",
    },
    {
        type: "input",
        name:"textColor",
        message:"What color do you want the text on your logo to be? "
    }
];

function writeToFile(fileName, data){
    FileSystem.writeToFile(fileName, data)
    {
        console.log("Generating your SVG logo....");
    }
};