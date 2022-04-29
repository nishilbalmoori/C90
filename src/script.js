var probs = ["6x6",
"8x4",
"9x9",
"9x3",
"6x8",
"10x10"]
var prob = Math.floor(Math.random()*probs.length);


console.log(probs, prob,probs[prob]);
var ldfgl = probs[prob]
document.getElementById("problem").innerHTML = "asdsd";

async function run(){
    const res = await fetch('/src/json/qa.json', {
        headers: {
          'Accept': 'application/json'
        }
      });
    const w = await res.json();
    if(document.getElementById("answer").value == w[probs[prob]]){
        console.log("pog")
    }
}