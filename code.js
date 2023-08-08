let textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
    var text=this.value;
    let counts=0;
    for(pr of text){
        if(pr==" ")counts++;
    }
    let char=text.length;
    let sp=document.getElementById("char");
    sp.innerHTML=char-counts;

    let count=0;
    for(pr of text){
        if(pr==" ")count++;
    }
    document.getElementById("space").innerHTML=count;

    text=text.trim();
    let words=text.split(" ");
    let cleanList=words.filter(function(vikas){
        return vikas!="";
    });
    // console.log(words);
    document.getElementById("word").innerHTML=cleanList.length;


});