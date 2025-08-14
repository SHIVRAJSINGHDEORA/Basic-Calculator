let btns = document.querySelectorAll("Button");
let input = document.querySelector("input");

let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  " ", "!", "@", "#", "^", "&", "(", ")", "_", "`", "~",
  "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"",
  ",", ".", "<", ">", "?", "?", " "]

let string = input.value;
input.addEventListener("input",()=>{
    console.log(input.value);

    if(arr.indexOf(input.value.slice(-1)) != -1 ){
        console.log(arr.indexOf(input.value));
        input.value = input.value.substring(0,string.length );
    }
    else{
        string = input.value;
    }
})

input.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        string = eval(string);
        input.value = string;
    }
})


btns.forEach(b => {
    b.addEventListener("click", ()=>{
        console.log("Button Clicked");
        
        if (b.innerHTML == "="  ){
            console.log("= clicked");
            console.log(string)
            string = eval(string);
            input.value = string;
        }
        else if (b.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if (b.innerHTML == "C"){
            string = string.substring(0,string.length-1);
            input.value = string;

        }
        else {
            string += b.innerHTML
            input.value = string;
        }

    })
});


