// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);


//var headerTitle=document.getElementById("header-title");
//console.log(headerTitle);
var header=document.getElementById("main-header");
//header.style.borderBottom="solid 3px #000"
var subtitle=document.getElementsByClassName("title");
//console.log(subtitle);
//subtitle.style.fontWeight="bold";
subtitle[0].style.fontWeight='bold';
subtitle[0].style.color='green';
subtitle[1].style.color='yellow';
var item=document.getElementsByClassName('list-group-item')
console.log(item)
for (var i=0; i<item.length;i++){
    item[i].style.fontWeight='bold';
}
item[2].style.backgroundColor='green';
//

var li=document.getElementsByTagName("li");
//console.log(subtitle);
//subtitle.style.fontWeight="bold";
// li[0].style.fontWeight='bold';
// li[0].style.color='green';
// li[1].style.color='yellow';

for (var i=0; i<li.length;i++){
    li[i].style.fontWeight='bold';
    li[i].style.backgroundColor='#f2f2f2';
}
