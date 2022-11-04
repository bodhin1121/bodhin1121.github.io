// window.addEventListener('onload', getQuote);
const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener("click", getQuote);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote(){
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();

    // .then(text => text.text());
    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['activity']);

    displayQuote(json_response['activity']);
    
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
}

function displayQuote(x){
    // const quoteBox = document.querySelector('#js-quote-text');
    
    // const textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}

getQuote();