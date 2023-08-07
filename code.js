let textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
    var text=this.value;
   
    let char=text.length;
    let sp=document.getElementById("char");
    sp.innerHTML=char;

    let count=0;
    for(pr of text){
        if(pr==" ")count++;
    }
    let space=document.getElementById("space").innerHTML=count;

    text=text.trim();
    let words=text.split(" ");
    let cleanList=words.filter(function(vikas){
        return vikas!="";
    });
    // console.log(words);
    document.getElementById("word").innerHTML=cleanList.length;


});