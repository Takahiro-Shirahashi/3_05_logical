var hour = new Date().getHours();

if(hour >=0 && hour < 5){
  window.alert('おやすみなさい');
}else if(hour >=19 && hour < 24){
  window.alert('こんばんは');
}else if(hour >= 12 && hour <= 14){
  window.alert('こんにちは');
}else if(hour >= 5 && hour <= 10){
  window.alert('おはようございます');
}else{
  window.alert('お疲れ様です');
}
console.log(hour);
