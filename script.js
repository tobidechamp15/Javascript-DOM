const clicker = document.querySelector("#changer")
const docs=document.querySelector("#doc")
clicker.addEventListener("click", backgroundChange);

const colors = ['blue', 'red', 'black', 'purple'];

// const person = {
//     FirstName = toib

// }

function backgroundChange() {
    docs.style.height = ("100vh")
    docs.style.width = ("100%");
    
    color = colors.shift();
    colors.push(color);
    docs.style.backgroundColor = color;
    //console.log(color);
    const blueQuote = document.querySelector("#blue-quote");

    if (color='blue') {
        const blueQuote = document.querySelector("#blue-quote");
        blueQuote.style.display = ("flex");
        console.log(color);
    } else {
        blueQuote.style.display = ("none");
    }
     if (color='red') {
         const blueQuote = document.querySelector("#blue-quote")
         blueQuote.style.display = ("none");
         console.log(color);
     }else{
         blueQuote.style.display = ("none");
    }
    console.log(blueQuote);


} 