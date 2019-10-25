var daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var akanmale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var akanfemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var day=parseInt(document.getElementsByName("day")value);
var month=parseInt(document.getElementsByName("month")value);
var century=parseInt(document.getElementsByName(century));
var masculine=parseInt(document.getElementsByName(gender));
var ee=parseInt(year.slice(0,2));
var aa=parseInt(year.slice(2,4));
var fml= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
var birthdate=fml.toFixed(0);
  if(masculine=="male"&&birthdate==0){
      return document.getElementsByName("result").innerHTML=name(0);
  }
  else if(masculine=="male"&& birthdate==1){
      return document.getElementsByName("result").innerHTML=name(1);

  }
  else if(masculine=="male"&& birthdate==2){
      return document.getElementsByName("result").innerHTML=name(2);
  }
  else if(masculine=="male"&& birthdate==3){
    return document.getElementsByName("result").innerHTML=name(3);

}
else if(masculine=="male"&& birthdate==4){
    return document.getElementsByName("result").innerHTML=name(1);

}