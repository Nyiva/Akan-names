function akan (){
var daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var akanmale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var akanfemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var day=parseInt(document.getElementsByName("day")value);
var month=parseInt(document.getElementsByName("month")value);
//let century=parseInt(document.getElementsByName(century));
let masculine=parseInt(document.getElementsByName(gender));
//let ee=parseInt(year.slice(0,2));
//let aa=parseInt(year.slice(2,4));


//let fml= ( ( (ee/4) -2*ee-1) + ((5*aa/4) ) + ((26*(MM+1)/10)) + DD )%7;
//let birthdate=fml.toFixed(0);
if(day<1 ||day>31){
    return document.getElementsByName("result").innerHTML=("Enter valid date");
  }
 if(month<1 || month>12){
    return document.getElementsByName("result").innerHTML=("Enter valid date");

}
if(year<1900 || year>2090){
    return document.getElementsByName("result").innerHTML=("Enter valid date");
}
if(month==2&& day<1||day>29){
  return document.getElementsByName("result").innerHTML=("Enter valid date");

}
var gdate= new Date(${year}-{month}-{day});
var b=gdate.getDay();
 if(masculine=="male"){
  return document.getElementsByName("result").innerHTML=akanmale(b);

}
if(masculine=="female"){
  return document.getElementsByName("result").innerHTML=akanfemale(b);

}
}