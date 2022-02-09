const prompt = require("prompt-sync")();

let choice = (prompt("Would you like to combine or deconstruct (c / d): "));

if (choice === "c"){
let color1 = (prompt("Select your first color (red, blue,yellow): "));
let color2 = (prompt("Select your second color (red, blue, yellow):  "));
// construct code
if (color1.includes("red" || "blue") && color2.includes("blue" || "red")){
    console.log("purple")
}
else if (color1.includes("red" || "yellow") && color2.includes("yellow" || "red")){
    console.log("orange")
}
else if (color1.includes("blue" || "yellow") && color2.includes("yellow" || "blue")){
    console.log("green")
}else (
    console.log("That was not a valid selection.")
)
}
// deconstruct
if(choice === "d"){
let color = (prompt(" Select the color to be deconstructed (purple, orange, green): "))

if (color.includes("purple" || "Purple")){
    console.log("red + blue")
}
else if (color.includes("orange" || "Orange")){
    console.log("red + yellow")
}
else if (color.includes("green" || "Green")){
    console.log("yellow + blue")
}else(
    console.log("That was not a valid selection.")
)
}





   