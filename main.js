var hour = new Date().getHours();

if(hour >=19 && hour < 24){
window.alert('こんばんは');
}else if(hour === 12){
window.alert('こんにちは');
}else if(hour >= 3 && hour < 11){
window.alert('おはようございます');
}
console.log(hour);
