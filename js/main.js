(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<div class="col-md-4 mb-5"><div class="options"><label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label><div class="option-icon"></div></div></div>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers text-center row"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
    var men = document.getElementById("men");
    var menX = 0;
    function move(e){
      menX += 400;
      men.style.transform = "translateX(" + menX + "px)";
    }
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      move();
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
    
    
    function showNextSlide() {
        showSlide(currentSlide + 1);
        move();
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "your most important expectation from a life insurance company is...",
        answers: {
          a: "Competitive Pricing",
          b: "Competitive Pricing",
          c: "Competitive Pricing"
        },
        correctAnswer: "c"
      },
      {
        question: "your most important expectation from a life insurance company is...",
        answers: {
          a: "Competitive Pricing",
          b: "Competitive Pricing",
          c: "Competitive Pricing"
        },
        correctAnswer: "c"
      },
      {
        question: "your most important expectation from a life insurance company is...",
        answers: {
          a: "Competitive Pricing",
          b: "Competitive Pricing",
          c: "Competitive Pricing"
        },
        correctAnswer: "c"
      }
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
    
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  