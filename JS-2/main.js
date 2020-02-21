/*var sum = 0;
for (var i =0; i < 100; i++ ){
  if(i%2==0){
    sum =sum+i;
  }
}
console.log(sum);
while(i<100){
  if(i%3==0){
    sum =sum+i;
  }
  i++
}
console.log(sum);*/
/*var car = ['Honda','Toyota','Chev'];
console.log(car[0]);
car.push('poppy');
console.log(car[3]);
console.log(car);*/


window.onload = pageLoad;
function pageLoad(){
  var form = document.getElementById("myForm");
  form.onsubmit = myFormfunction;
}
function myFormfunction(){
  alert("OK");
  var x = document.forms["myForm"]["firstname"];
  alert(x.value);
}

