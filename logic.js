// alert("JS FILE CONNECTED");
//selecting the text input by the user
var txtInput = document.querySelector("#input-text");
//selecting the button on which we will handle click event
var translateBtn = document.querySelector(".btn-style");
//selecting the div where we want to output
var txtOutput = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

/**
 *
 * translationURL is the url with our input text attached as request param to original URL
 */
function translationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

/*
function to handle error*/
function errorHandler(error) {
  console.log("error occured", error);
  alert("Error in server");
}

/**
 * we need to pass the text input by user and generate translate url
 * when we get that url we need to process it and then output it inside our output div
 */

function clickHandler() {
  //getting the actual value of text inputted by the user
  var txtInputEnglish = txtInput.value;
  fetch(translationUrl(txtInputEnglish))
    .then((response) => response.json())
    .then((json) => (txtOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

/*
click event called when translate button is called
*/
translateBtn.addEventListener("click", clickHandler);
