let question=document.querySelector('.question')
let answers=document.querySelectorAll('.answer')



class Question{
    constructor()
{

  this.a=randint(0,30)
  this.b=randint(0,30)
  this.znak=getRandomSign()
  this.question= `${this.a} ${this.znak} ${this.b}`
  this.answer_corect=
  this.answers=[
    randint(30),
    randint(30),
    this.answer_corect,
    randint(30),
    randint(30),]}
    
    

display(){
question.innerHTML=this.question;
for(let i=0; i<answers.length; i+=1){
answers[i].innerHTML=this.answers[i];
}
}


makeCorrect(){
if(this.znak =='+'){
    return this.a+this.b
}
else if( this.znak=='-'){
   return this.a-this.b
}
else if (this.znak=='*'){
   return this.a*this.b
}
else if(this.znak=='/'){
  return  this.a/this.b
}
 
  } 
} 

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  
    let j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]]
}
}
my_array = [1, 2, 3, 4, 5] 
shuffle(my_array)  

function randint(min, max) {
return Math.round(Math.random()*(max-min)+min)
}

let random_number=Math.random(Math.random()*100)
console.log(random_number)

let array_of_characters=["+", "-", "*", "/"]
function getRandomSign(){
    return array_of_characters[0, 3]
}



let questions =[
    new Question(),
    new Question(),
    new Question(),
    new Question(),
    new Question(),

]

let count=0;

let current_question=questions[count]

count
for(let i=0; i<questions.length; i += 1){
 answers[i].addEventListener('click',function(){

 if((answers[i].innerHTML==current_question.answer_corect)){
    console.log('Правильно')
    count += 1
    current_question=new Question()
    current_question.display()

 }



else{
    console.log('Неправильно')
    count += 1
    current_question=new Question()
    current_question.display()

 }
  })
 }



anime({
        targets: answers[i],
        delay: 500,
        backgroundColor: 'pink', 
        duration: 500, 
        easing: 'linear' 
    })






