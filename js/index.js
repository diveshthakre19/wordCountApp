let text = document.querySelector("#message");
let wordCount = document.querySelector("#word-count");
let letterCount = document.querySelector("#letter-count");
let preview = document.querySelector("#preview");
const showcount =()=> {
    let arr = text.value.split(" ")
    wordCount.innerHTML = `No. of words: ${ arr.length - 1} ` ,
    arr = text.value.trim()
    arr.split("")
    letterCount.innerHTML = `No. of Letters: ${ arr.length } ` 
}
showPreview = () => {
    preview.innerHTML = text.value
}

text.addEventListener("keyup",showcount)
text.addEventListener("keyup",showPreview)
