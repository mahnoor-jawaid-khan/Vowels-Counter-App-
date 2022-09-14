// Vowels Counter App 

var count = 0;

function VowelsCounter(sentence)
 {
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i"|| sentence[i] === "o" || sentence[i] === "u" )
            count = count + 1;
    }
    document.write(sentence + "<br> your paragraph has " + count + " vowels.");

}
var text = prompt("Enter Your Paragraph");
text = text.toLowerCase();

VowelsCounter(text);

