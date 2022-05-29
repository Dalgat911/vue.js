// const name={
//     country:"",
//     age:0
// }


// const name = "Далгат";
// const age = "20 лет"
// document.write(name + age)


// const number = 10;
// const chiclo = 5;
// if (number > chiclo) {
//     alert("Салам алейкум")
// }
 
// const number = 10;
// const chiclo=5;
// if (number<chiclo){alert('Нефига не верно')
// }else{ 
//     alert('Все четко')}

// const num = 6;
// if (num == 1){alert('Салам попалам');
// } else if (num == 2){alert ('Салам мужикам');
// }else if (num  >=5){alert('Все четко');
// }else {alert ('Не салам');}
// const day=5;
// switch(day){
//     case 1:
//         alert('Monday');
//         break;
//         case 2:
//             alert('Tuesday');
//             break;
//                 case 3:
//                     alert('Wednesday');
//                     break;
//                         default:
//                             alert('Another day');
// }

// let i=1
// for(i=1; i<=9; i++){
//     document.write(i + "<br />");
// }
// let k=0
// for (; k <=20 ; k += 2){
// alert(k)}

// let o=500
// for(; o >= 0; o -= 100){
//     alert(o)
// }

// let i=0
// while(i <=10){
//     document.write(i + '<br />');
//     i=i + 1;
// }


// let i=10;
// do{
//     document.write(i + '<br />');
//     i++;
// }
// while(i <= 15)

// let age = 5;
// for (; age >= 0; age--){
//     if (age ==3){
//         break;
//     }
//     alert(age)
// } 


// let i=10;
// for(; i >=0; i--){
//     if (i ==5){
//         continue;
//     }
//     document.write(i + '<br/>')
// }

// function SayHello (name)
// {
//     alert ( 'Hello '+ name )
// }
// SayHello ('Dalgat');
// SayHello ('Shamil');

// function Status(name, country, city){
// alert('Dear '+ name +' we happy in seen you ' + country + ' capital '+ city)
// }
// Status('Dalgat','USA', 'San Diego');
// Status('Shamil','USA', 'San Diego');

// function num(x, y){
//     if(x>y){
//         alert('Xxx');
//     }else{
//         alert('Yyy')
//     }
// }
// num(5,5)

// function Myfunc(a,b){
//     return a * b;
// }
// var x=Myfunc(5,6);
// alert(x)


// function Num(a,b){
//     var c= a*b;
//     return c;
// }
// document.write(Num (40,2));

// var user=prompt('Нажмите лучше "Да"  чем "Нет"');
// alert(user)


// var i=confirm('Как дела в качалке пацаны?');
// if (i=true){
//     prompt('Напиши подробнее');
// } else{
//     alert(' позанимайся');
// }

// function test(number){
//     while(number < 5){
//         number++
//     }
//     return number;
// } alert(test(2))
// function html(i){
//     while(i < 5){
//         i++
//     }
//     return i;
// }
// alert(html(7))

// var text = {
//     name:'Jhon',
//     kiki:'olololo',
//     female:'Gold',
//     age:28
// };
// document.write(text.kiki.length)

// var text = {
//     name:'Jonh',
//     age:28,
//     female:'Gold'
// };


// function Name1(text,age){
//     this.text=text;
//     this.age=age;
// }
// var H1= new Name1 ('Dalgat ', 19 );
// var H2= new Name1 (' Nata ', 15 );
// var H3= new Name1 (' kiki ', 10 );

// document.write(H1.text);
// document.write(H1.age + '<br/>');
// document.write(H2.text);
// document.write(H2.age + '<br/>');
// document.write(H3.text);
// document.write(H3.age);




//  НЕФИГА НЕ ПОНЯЛ !!! 
// function person (name, age){
//     this.name = name;
//     this.age = age;
//     this.changeName = function (name){
//         this.name = name;
//     }
// }
// var p = new person('David', 22);
// p.changeName('John')

// function person1 (name, age){
//     this.name = name;
//     this.age = age;
//     this.year=bornYear;}
//     function bornYear(){
//         return 2016 - this.age;
//     }
// var p = new person1('A', 22);
// document.write(p.year());


// var courses = new Array('HTML ', 'CSS ', 'JS ')
// var course=courses;
// document.write(course[2])

// var i=new Array();
// i[0]='0';
// i[1]='1';
// i[2]='2';
// document.write(i[1])

// var i=['нулевой массив ','первый массив ']
// alert(i.length)

// var c1= ['HTML', 'CSS'];
// var c2= ['JS', 'C++'];
// var courses = c1.concat(c2);
// document.write(courses)

// document.write(Math.E)

// var n= prompt ('Корень из числа', '');
// var answer = Math.sqrt(n);
// alert('Корень из числа ' + n + ' будет '+ answer);
// var k = prompt('Давайте угадаю ваш корень', '');
// var vopros = Math.sqrt(k);
// alert('Корень из числа '+ k + ' будет '+ vopros);

// function myAlert(){
//     alert('hello');
// }
// setInterval(myAlert,3000);
 
// var d = new Date();
// var d1=d.getDay();
//  document.write(d1)


// document.getElementById(id);
// document.getElementsByClassName(name);
// document.getElementsByTagName(name);

// var elem = 
// document.getElementById('enigma');
// elem.innerHTML = 'Hello';

// var arr = 
// document.getElementsByTagName('p');
// for (var x = 0; x < arr.length; x++){
//     arr[x].innerHTML = 'Hi';
// }

// var dalgat =
// document.getElementsByTagName('p');
// for (var x = 0; x < dalgat.length; x++){
//     dalgat[x].innerHTML = 'Hi do'
// }

// let a =10;
// if (a >=3){
//     let a=5;
// }
// const b=a;
// console.log(b);

// var el=
// document.getElementsByTagName('a');
// for (var x=0; x < el.length; x++){
//     el[x].href='https://www.youtube.com/'
// }

// var s = 
// document.getElementsByTagName('span');
// for (var x=0; x < s.length; x++){
// s[x].style.backgroundColor='#33EA73';}

// var k=
// document.getElementsByTagName('span');
// for (var o=0; o < k.length; o++){
//     k[o].style.backgroundColor='#33EA22'
// }

// var p = document.createElement('p');
// var node = 
// document.createTextNode('New text');
// p.appendChild(node);

// var div=
// document.getElementById('demo');
// div.appendChild(p)

// var parent = 
// document.getElementById('demo');
// var child = 
// document.getElementById('p1');
// parent.removeChild(child);    



//  Зеленая коробка с красным двигающим квадратиком внутри
// var t =setInterval(move, 5);
// var pos = 0;
// var box = 
// document.getElementById('box');
// function move(){
//     if (pos >= 150){
//         clearInterval(t);
//     }  else{
//         pos +=1;
//     box.style.left = pos+'px';
// }
// }

/* Кнопка с алертом
function show(){
    alert('hiii');
}
var x = document.getElementById('demo');
x.onclick = function() {
    document.body.innerHTML = Date();
} */
 
// хз что это 
// function change(){
//     var x = 
//     document.getElementById('name');
//     x.value=x.value.toUpperCase();
// }


// Слайдеры изображений 
// var images = [
//     "https://avatars.mds.yandex.net/get-autoru-vos/2173862/0e0cc3512a307e01bbce632e3a8447e2/456x342",
//     "https://avatars.mds.yandex.net/get-autoru-vos/6213549/e2c62a7993487a2c83ee7bf5942cfe69/456x342n",
//     "https://avatars.mds.yandex.net/get-autoru-vos/6303976/b165ece9da8d3d9b64456eafdeb2951b/456x342n"       
// ];
// var num = 0;
// function next(){
//     var slider = 
//     document.getElementById('slider');
//     num++;
//     if (num >=images.length){
//         num=0;
//     }
//     slider.src = images[num];
// }
// function prew(){
//     var slider = 
//     document.getElementById('slider');
//     num--;
//     if (num <0){
//         num = images.length-1;
//     }
//     slider.src = images[num];
// }

// var cor = [
//     'https://avatars.mds.yandex.net/get-autoru-vos/2163924/5c65595fca17e9d326ad476ab75a6f38/456x342n',
//     'https://s1.1zoom.ru/b5050/491/Chevrolet_2011_Hennessey_490926_1366x768.jpg,',
//     "https://avatars.mds.yandex.net/get-autoru-vos/6303976/b165ece9da8d3d9b64456eafdeb2951b/456x342n"       

// ];
// var chic=0;
// function b1(){
//     var sliders = 
//     document.getElementById('sliders');
//     chic++;
//     if (chic >=cor.length){
//         chic=0;
//     }
//     sliders.src = cor[chic];
// }
// function b0(){
//     var sliders = 
//     document.getElementById('sliders');
//     chic--;
//     if (chic <0){
//         chic = cor.length-1;
//     }
//     sliders.src=cor[chic];
// }

// function validate(){
//     var n1 =
//     document.getElementById('num1');
//     var n2=
//     document.getElementById('num2');
//     if (n1.value !='' && n2.value !=''){
//         if(n1.value == n2.value) {
//             return true;
//         }
//     }
//     alert ('что то что то');
//     return false;
// }


