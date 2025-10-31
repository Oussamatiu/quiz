const questionX = document.getElementById("question");
const firstQuestion = document.createElement("h3");
let count = 0;
let score = 0;
let valide = 0;
function printQuestion(){
      restart();
      firstQuestion.textContent = questions[count].question;
      questionX.append(firstQuestion);
      questions[count].options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.setAttribute("class" , 'btn');
      button.addEventListener('click', function check(e){
        document.querySelectorAll('.btn').forEach(item =>{
            item.classList.remove('active');
        });
        e.target.classList.add('active');
        questions[count].reponse = button.textContent;
        let x = e.target.value;
        console.log(questions[count].reponse);
        if(option === questions[count].correct){
            valide = 1;
        }else{
            valide = 0;
        }
      })
      questionX.appendChild(button);
    })
    if(questions[count].reponse != ""){
      questions[count].options.forEach(option => {
        if(option === questions[count].reponse){
         
          const x = document.querySelector('.btn') =;
          console.log(x);
          x.classList.add('active');
          
          
        }
      })
    }
     const nextButton = document.createElement('button');
      nextButton.textContent = 'next';
      nextButton.style.display = 'block';
      questionX.appendChild(nextButton);
      const preversButton = document.createElement('button');
      preversButton.textContent = 'prevers';
      questionX.appendChild(preversButton);
      preversButton.addEventListener('click', ()=> {
        --count;
        printQuestion();
      })
      nextButton.addEventListener('click', () => {
        if(valide){
            score+=1;
            console.log(score);
        }
        ++count;
        printQuestion();
      })
    
}

function restart(){
    const elements = questionX.querySelectorAll("button");
    elements.forEach(item => {
        item.remove();
    })
}
printQuestion();
printQuestion();
