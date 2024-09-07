var key = ["h","+","-","a","{","]","w","r",";","4","2",".","/","$","&","=","-","~","f","'","c","}","[","e","*","`","^",")","(","@","!","_","|",":","w","h"];
var alp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var encoded = "";
var decoded = "";

function encode(toEncode, output){
    encoded = "";
    for (let i = 0; i < toEncode.length; i++){
        var curLet = toEncode[i].toLowerCase();
        console.log(`Does alp include curLet?: ${alp.includes(curLet)}`);
        if (alp.includes(curLet)){
            encoded = encoded + key[alp.indexOf(curLet)];
        } else{
            encoded = encoded + curLet;
        }
    }
    if (output){
        output.value = encoded;
    }else{
        return encoded;
    }
}
function decode(toDecode, output){
    decoded = "";
    for (let i = 0; i < toDecode.length; i++){
        var curLet = toDecode[i].toLowerCase();
        console.log(`Does key include curLet?: ${key.includes(curLet)}`);
        if (key.includes(curLet)){
            decoded = decoded + alp[key.indexOf(curLet)];
        } else{
            decoded = decoded + curLet;
        }
    }
    if (output){
        output.value = decoded;
    }else{
        return decoded;
    }
}