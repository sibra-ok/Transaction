let Earning=document.getElementById('Earning')
let balance=document.getElementById('balance')

const UpdateExpense=()=>{
let balance=document.getElementById('balance')
let text=document.getElementById('Text').value
let divo=document.getElementById('information')
let no=document.getElementById('No').value
let create=document.createElement('div')
let hr=document.createElement('hr');
let Text=document.createElement('div');
if(no==""){
alert('Please enter the amount first')
}
else{
create.innerHTML=-no
create.className='createe'
create.style.background='#E00'
Text.innerHTML=text;
Text.className='textCreate'
divo.appendChild(create)
create.appendChild(Text);
create.appendChild(hr);
let icons=document.createElement('i')
icons.classList.add('fa','fa-trash','iconss');

icons.style.display='none'
create.appendChild(icons);
console.log('done1');
let sum=0;
let number=parseInt((no));
sum+=-number;
let Balance=balance.textContent//.split(' ');
let ok=Balance+++sum;
balance.innerHTML=ok;
console.log(balance);

document.querySelectorAll('.createe').forEach(function(element,e) {

element.id=`create${e+1}`
console.log(element.id)})
create.addEventListener('click',function(e){
ok=(icons.style.display=icons.style.display==='none'?'block':'none');
})

document.querySelectorAll('.iconss').forEach(function(element,e){
element.id=`icons${e+1}`
})
icons.addEventListener('click',function(e){
create.classList.add('show')
console.log('heha')
li=create.innerHTML
li=parseInt(li)

let ew=balance.innerHTML-li;
balance.innerHTML=ew;
console.log(ew);
})}

}

let no=document.getElementById('No').value


document.getElementById('Expense').addEventListener('click',UpdateExpense);


UpdateEarning=()=>{
let balance=document.getElementById('balance')
let text=document.getElementById('Text').value
let divo=document.getElementById('information')
let no=document.getElementById('No').value
let create=document.createElement('div')
let Text=document.createElement('div');
let hr=document.createElement('hr');


if(no==""){
alert('Please enter the amount first')
}
else{
create.innerHTML=no;

create.className='createe'
create.style.background='#4fA'
Text.innerHTML=text;
Text.className='textCreate'
divo.appendChild(create)
create.appendChild(Text);
create.appendChild(hr);
let icons=document.createElement('i')
icons.classList.add('fa','fa-trash','iconss');

icons.style.display='none'
create.appendChild(icons);
console.log('done1');
let sum=0;
let number=parseInt((no));
sum+=number;
let Balance=balance.textContent//.split(' ');
let ok=Balance+++sum;
balance.innerHTML=ok;
document.querySelectorAll('.createe').forEach(function(element,e) {
element.id=`create${e+1}`
console.log(element.id)})

create.addEventListener('click',function(e){

icons.style.display=icons.style.display==='none'?'block':'none';
})

document.querySelectorAll('.iconss').forEach(function(element,e){
element.id=`icons${e+1}`
})
icons.addEventListener('click',function(e){
create.classList.add('show')
console.log('heha')
li=create.innerHTML
li=parseInt(li)

let ew=balance.innerHTML-li;
balance.innerHTML=ew;

console.log(ew);
})}
}


document.getElementById('Earning').addEventListener('click',UpdateEarning);

