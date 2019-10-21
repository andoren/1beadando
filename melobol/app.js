const dataDiv = document.querySelector("#data");
dataDiv.innerHTML="Adatfeldolgozás folyamatban";
let readData;
$.get("../resources/data.txt",function(data){
    readData=data;
}).then(()=>{
    readData = readData.split("\n");
    //const cimregex = /\${3}(([\w ]+)[a-zA-Z]+([\w ]+))\${3}/g;  
    let article = readData[0].substr(readData[0].lastIndexOf("$")-3,readData[0].length);   
    readData[0] = readData[0].replace(article,"");
    article = article.substr(5,article.length);
    let name = readData[0].substr(readData[0].lastIndexOf("$")-3,readData[0].length);
    readData[0] = readData[0].replace(name,"");   
    name = name.substr(5,name.length);
    readData[0] = readData[0].replace(/\${3}/g,"");
    //readData[0] = readData[0].replace(/\@{2}/g," ");
    
    const obj = {
        cim:name,
        szoveg:article
    };    
    const year = readData[0].match(/year(.+?)($|\s)/g);
    readData[0] = readData[0].replace(year[0],"");
    console.log(year);
    const genre = readData[0].match(/genre(.+?)($|\s)/g);
    readData[0] = readData[0].replace(genre[0],"");
    console.log(genre);
    const labels = readData[0].match(/__label__.(.+?)($|\s)/g);
    const numbers = readData[0].match(/[0-9].[0-9]+($|\s)/g);
    console.log(readData[0]);
    console.log(labels);
    console.log(numbers);
    console.log(obj);
});