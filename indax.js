const questionX = document.getElementById("question");
const firstQuestion = document.createElement("h3");
const startButton = document.createElement('button');
startButton.setAttribute('class' , 'btn-start');
startButton.textContent = "start quiz";
startButton.addEventListener('click',printQuestion);
questionX.appendChild(startButton);
const btnControle = document.createElement('div');
const groupOption = document.createElement('div');
groupOption.setAttribute('class', 'options-group');
let count = 0;
let score = 0;
let valide = 0;


function printQuestion() {
 restart();
  if (count >= questions.length) {
    const resulta = document.createElement('h3');
    resulta.textContent = `your score is ${score}/${questions.length}`;
    questionX.appendChild(resulta);
  }
  else {
    firstQuestion.textContent = questions[count].question;
    questionX.append(firstQuestion);
    questions[count].options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.setAttribute("class", 'btn');
      if (questions[count].reponse === option) {
        button.classList.add('active');
      }

        button.addEventListener('click', function check(e) {
        nextButton.style.visibility = 'visible'
        document.querySelectorAll('.btn').forEach(item => {
          item.classList.remove('active');
        });
        e.target.classList.add('active');
        questions[count].reponse = button.textContent;
        console.log(questions[count].reponse);
        if (questions[count].reponse === questions[count].correct) {
          valide = 1;
        } else {
          valide = 0;
        }

      })
      groupOption.appendChild(button);
      questionX.appendChild(groupOption);

    })
    const nextButton = document.createElement('button');
    if(count == questions.length-1){
      nextButton.textContent = 'Terminer';
    }else {
      nextButton.textContent = 'Next';
    }
    
    nextButton.style.display = 'block';
    const checkActive = document.querySelector('.active');

    if(!checkActive){
      nextButton.style.visibility = 'hidden'
    }

    btnControle.setAttribute('class','btn-controle');
    const preversButton = document.createElement('button');
    preversButton.textContent = 'Prevers';
    btnControle.appendChild(preversButton);
    if( count == 0){
      preversButton.style.visibility = 'hidden';
    }else {
      preversButton.style.visibility = 'visible';
    }
    btnControle.appendChild(nextButton);
    questionX.appendChild(btnControle);
    preversButton.addEventListener('click', () => {
      --count;
      printQuestion();
    })
    nextButton.addEventListener('click', () => {
      if (valide) {
        score += 1;
        console.log(score);
      }
      ++count;
      printQuestion();
    })
  }
}

function restart() {
  const elements = questionX.querySelectorAll("button , h3");
  elements.forEach(item => {
    item.remove();
  })
}


