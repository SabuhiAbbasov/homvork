
function tarixGoster(){
    
    var aylar=["Yanvar","Fevral","Mart","Aprel","May","Iyun","iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
    var gunler=["Bazar ertesi","Cersenbe axsami","Cersenbe","Cume axsami","Cume","Senbe","Bazar"];
    bugun = new Date();
    var tarix= "salam bu gun : "+ bugun.getFullYear()+ " ci il " + aylar[bugun.getMonth()]+" "+bugun.getDate()+" "+gunler[bugun.getDay()-1]+" gunu, saat :"+bugun.getHours()+": "+bugun.getMinutes()+": "+bugun.getSeconds()+": "+bugun.getMilliseconds();
    document.getElementById("tarix").innerHTML=tarix;
}
setInterval(tarixGoster,1);