function demSoKiTu(s){
    const word = s.split(' ');
    const lastWord = word[word.length - 1]
    return lastWord.length;
}

const s="Hello World";
console.log("Từ cuối có "+ demSoKiTu(s)+" kí tự")