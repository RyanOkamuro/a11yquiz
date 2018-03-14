//questions storage
const STORE = [
  {
    question_Name: 'When the product Neutrogena says that their facial products causes the “Deepest feeling clean”; this is an example of which of the following:',
    option_value_0: 'Corrective advertising',
    option_value_1: 'Puffery',
    option_value_2: 'Advertising campaign',
    option_value_3: 'Public service advertising',
    option_value_4: 'Guerilla marketing',
    answer: 'Puffery'
  },
  {
    question_Name: 'Which of the following products is NOT an “image enhancement” product',
    option_value_0: 'Ferrari',
    option_value_1: 'Burberry bag',
    option_value_2: 'Hugo Boss suit',
    option_value_3: 'Flip phone',
    option_value_4: 'Lamborgini',
    answer: 'Flip phone'
  },
  {
    question_Name: 'The first step in new-product development is:',
    option_value_0: 'Test marketing',
    option_value_1: 'Business analysis',
    option_value_2: 'Idea generation',
    option_value_3: 'Technical development',
    option_value_4: 'Sevice repair',
    answer: 'Idea generation'
  },
  {
    question_Name: 'Assignment of value, or the amount the consumer must exchange to receive the offering or product is:',
    option_value_0: 'Fad product',
    option_value_1: 'Demand',
    option_value_2: 'Price',
    option_value_3: 'New-product',
    option_value_4: 'Supply',
    answer: 'Price'
  },
  {
    question_Name: 'Which of the following is a non-durable product?',
    option_value_0: 'Bed',
    option_value_1: 'Car',
    option_value_2: 'Food',
    option_value_3: 'Computer',
    option_value_4: 'Pen',
    answer: 'Food'
  },
  {
    question_Name: 'Skimming pricing will be used with what type of pricing strategy?',
    option_value_0: 'Penetration strategy',
    option_value_1: 'Trial pricing strategy',
    option_value_2: 'New-product pricing strategy',
    option_value_3: 'Old product pricing strategy',
    option_value_4: 'Decreasing pricing strategy',
    answer: 'New-product pricing strategy'
  },
  {
    question_Name: 'Bud Light Platinum beer only being sold in America is an example of what type of product?',
    option_value_0: 'New product',
    option_value_1: 'Regional product',
    option_value_2: 'Mature product',
    option_value_3: 'Cheap product',
    option_value_4: 'Faulty product',
    answer: 'Regional product'
  },
  {
    question_Name: 'Proctor and Gamble offering different products such as fabric and home care, beauty care, health care, and snacks and beverages is an example of what in the product mix?',
    option_value_0: 'Length',
    option_value_1: 'Height',
    option_value_2: 'Width',
    option_value_3: 'Thickness',
    option_value_4: 'Area',
    answer: 'Width'
  },
  {
    question_Name: 'Focusing on satisfying customers through empowering employees to be an active part of continuous quality improvement best describes:',
    option_value_0: 'Kansei engineering',
    option_value_1: 'Filling-out strategy',
    option_value_2: 'Product mix',
    option_value_3: 'Total quality management',
    option_value_4: 'Fulfillment processing',
    answer: 'Total quality management'
  },
  {
    question_Name: 'During which stage of a product life cycle where the marketer’s main goal is to “encourage brand loyalty” because there are too many product variations like iPhone and Samsung?',
    option_value_0: 'Introduction',
    option_value_1: 'Growth',
    option_value_2: 'Maturity',
    option_value_3: 'Decline',
    option_value_4: 'Transition',
    answer: 'Maturity'
  },
];

//function to create quiz question template to DOM
let questionNumber = 0;
let answersCorrectCount = 0;

function generateQuestion() {
  return `
  <section id="question_Quiz" role="region">
  <h3 class="multiple_Questions">${STORE[questionNumber].question_Name}</h3>
  <form>
    <fieldset name="quizForm">
    <legend>Marketing Quiz Q&A</legend>
      <label class="quiz_questions">
        <input type="radio" name="answerOption" value="${STORE[questionNumber].option_value_0}" checked><span>${STORE[questionNumber].option_value_0}</span>
      </label> 
        <br>
      <label class="quiz_questions">
        <input type="radio" name="answerOption" value="${STORE[questionNumber].option_value_1}"><span>${STORE[questionNumber].option_value_1}</span>
      </label> 
        <br>
      <label class="quiz_questions"> 
        <input type="radio" name="answerOption" value="${STORE[questionNumber].option_value_2}"><span>${STORE[questionNumber].option_value_2}</span>
      </label>
        <br>
      <label class="quiz_questions">
        <input type="radio" name="answerOption" value="${STORE[questionNumber].option_value_3}"><span>${STORE[questionNumber].option_value_3}</span>
      </label>
        <br>
      <label class="quiz_questions">
        <input type="radio" name="answerOption" value="${STORE[questionNumber].option_value_4}"><span>${STORE[questionNumber].option_value_4}</span>
      </label>
    </fieldset>
      <button type="submit" class="js-submit-button">Submit</button>
      <div id="questionDisplay">
        <p class="questionCount">Question:<span class=numQuestions> ${questionNumber + 1}</span>/10</p>
      </div>
      <div id="pointsDisplay">
        <p class="scoreCount">Score: ${answersCorrectCount}</p>
      </div>
  </form>
  </section>
  `;
}

//function to move from the start page to the quiz form
function handleStartButton() {
    $('.js-start-button').click(event=> {
    $('#newPageLoader').html(generateQuestion());
    $('#startPage').hide();
});
}

//function to check if answer is correct upon submitting the answer
function checkAnswer() {
    $('#newPageLoader').on('click', '.js-submit-button', event=> {
      event.preventDefault();
      let selectedChoice=$('input[name=answerOption]:checked').val();
      let correctAnswer=`${STORE[questionNumber].answer}`;
      if (selectedChoice === correctAnswer) {
        $('#question_Quiz').hide();
        $('#newPageLoader').html(correctAnswerPage());
        answersCorrectCount++;
      }
      else {
        $('#newPageLoader').html(incorrectAnswerPage());
      }
  });
}

//function to display correct answer page
function correctAnswerPage() {
  return `
  <section class="correctPage" role="region">
      <h4>CORRECT!</h4>
  </section>
  <button type="button" class="js-next-button">Next</button>
  `;
}     

//function to display correct answer page
function incorrectAnswerPage() {
  return `
  <section class="incorrectPage" role="region">
      <h5>WRONG, the correct answer:<span class="wrongAnswer">${STORE[questionNumber].answer}</span></h5>
  </section>
  <button type="button" class="js-next-button">Next</button>
  `;
}     

//function to handle next question button
function handleNextButton() {
  $('#newPageLoader').on('click', '.js-next-button', event=> {
    event.preventDefault();
    if (questionNumber === 9) {
      $('.correctPage').hide();
      $('.incorrectPage').hide();
      $('#newPageLoader').html(resultsPage());
    }
    else {
      $('.correctPage').hide();
      $('.incorrectPage').hide();
      questionNumber++;
      $('#newPageLoader').html(generateQuestion());  
    }
  });
} 

//function to display final page with results
function resultsPage() {
  return `
  <section class="finalScore" role= "region">
    <h6>Final Score: <span class=finalCount> ${answersCorrectCount}/10</div></h6>
  </section>
  <button type="button" class="js-restart-button">Restart</button>
  `;
}

//function to re-start quiz
function handleRestartButton() {
  $('#newPageLoader').on('click','.js-restart-button', event=> {
    $('.finalScore').hide();
    questionNumber = 0;
    answersCorrectCount = 0;
    $('#newPageLoader').html(generateQuestion());
  });
}

//function create quiz form
function handleCreateQuizForm() {
  handleStartButton();
  checkAnswer();
  handleNextButton();
  handleRestartButton();
}

//when the page loads, call handleCreateQuizForm
$(handleCreateQuizForm);


