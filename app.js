//ENIGMA
var plainAlphabet =     "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var messageToEncrypt = () =>  (document.getElementById("decrypted-input").value).toLowerCase();
var messageToDecrypt = () => (document.getElementById("encrypted-input").value).toLowerCase();

var replaceLetter = (message, arrayA, arrayB) => {
    var letter;
    var newMessage = "";
    for (var i = 0; i < message.length; i++){
        letter = message[i];
        position = arrayA.indexOf(letter);
        if (position !== -1){
            newMessage += arrayB[position];
        } else{
            newMessage += letter;
        }
    } return newMessage;
}

var encryptMessage = () =>{
    document.getElementById("encrypted-input").innerHTML = replaceLetter(messageToEncrypt(), plainAlphabet, encryptedAlphabet);
}

var decryptMessage = () =>{
    document.getElementById("decrypted-input").innerHTML = replaceLetter(messageToDecrypt(), encryptedAlphabet, plainAlphabet);
}

document.getElementById("encrypt-btn").addEventListener("click", () => encryptMessage());
document.getElementById("decrypt-btn").addEventListener("click", () => decryptMessage());

//----------------------------------------------------------------------------------------------------

//GENERADOR ALEATORIO

var randomPick = (n, max, min) => {
  var range = max - min + 1;
  var auxArray = [];
  var finalArray = [];
  for (var i = min; i <= max; i++) {
      auxArray.push(i);
  }
  for (var x = 1; x <= n; x++) {
    var randomNumber = Math.floor(Math.random() * (range - x));
    finalArray.push(auxArray[randomNumber]);
    auxArray[randomNumber] = auxArray[range - x];
  } return finalArray;
}

console.log(randomPick(20, 80, 40));

