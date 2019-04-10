// variables
//   questions (10) 
//   correct answers (10)
//   choices (1-4) xQ
//   score 
//   question index 

// buttons
//   start quiz
//   submit 
//   continue (after getting question correct OR incorrect)
//   finish
//   start over

// states 
//   start the quiz
//   question
//   correct/incorrect
//   finish

"use strict";

 

$(function(){

  function startQuizButton(){

    $(".js-start-quiz").on('click',function(event){
      generateQuestions(questionIndex);
      generateScoreBoard();
    });
  }

  function generateQuestions(question){
    const questionHTML = 
    `<form>
      <fieldset>
        <legend class="message">${QUESTIONS[question].text}</legend>
        
        <div class="choice">
          <input type="radio" id="choice1" name="answers" checked>
          <label for="choice1">${QUESTIONS[question]["choice1"]}</label><br/>
        </div>

        <div class="choice">
          <input type="radio" id="choice2" name="answers">
          <label for="choice2">${QUESTIONS[question]["choice2"]}</label><br/>
        </div>

        <div class="choice">
          <input type="radio" id="choice3" name="answers">
          <label for="choice3">${QUESTIONS[question]["choice3"]}</label><br/>
        </div>

        <div class="choice">
          <input type="radio" id="choice4" name="answers">
          <label for="choice4">${QUESTIONS[question]["choice4"]}</label><br/>
        </div>

        <input class="js-submit" type="submit" value="Scan Answer..">
      </fieldset>
    </form>`
    
    $(".js-results").empty();
    $(".js-question-set").append(questionHTML);
    handleSelect();
    handleScoreBoard();
    handleSubmit();
  };


  function generateScoreBoard(){
    const scoreBoard = 
    `<ul>
      <li>QUESTION: <span class="index"> ${questionIndex}</span></li>
      <li>SCORE: <span class="score"> ${score}/10</span></li>
    </ul>`
    $(".scoreboard").append(scoreBoard);
  };


  function handleSelect(){
  	console.log("handling selection..")
  	$(".choice").on("click", function() {
  		$(event.currentTarget).children("input").prop("checked", true)
  	});//end of onClick
  } //end of function


  function handleSubmit(){
    $(".js-submit").on("click", function(event){
      event.preventDefault();
      let userChoice = $("input:checked").next("label").html()
      
      if(userChoice === ANSWERS[questionIndex]){
        generateCorrectPage();
      } else {
          generateIncorrectPage();
      }; // end if/else
    }); // end onClick 
  }; // end func



  function handleScoreBoard() {
    $(".index").html(questionIndex);
    $(".score").html(score);
  };


  function generateCorrectPage(){
      const correctResultsHTML = 
      `<h2 class="message"> ..CORRECT! </h2>
        <input class="js-next-question" type="button" value="NEXT QUESTION">`

      $("form").remove();
      $(".js-results").append(correctResultsHTML);
      scorePoint();
      questionNext();
      handleScoreBoard();
      handleNextQuestion();
  };


  function generateIncorrectPage(){
    const incorrectResultsHTML = 
    `<h2 class="message">WROOOONNNNG! <br>The Correct Answer is..  ${ANSWERS[questionIndex]}! </h2>
      <input class="js-next-question" type="submit" value="NEXT QUESTION">`

    $("form").remove();
    $(".js-results").append(incorrectResultsHTML);
    questionNext();
    handleScoreBoard();
    handleNextQuestion(); 
  };


  function handleNextQuestion() {
    if(questionIndex <= 10 ){
      $(".js-next-question").on("click", function(event){
        generateQuestions(questionIndex);
      }); //end onCLick
    } else {
      handleFinalResults();
    }; // end of if/else
  }; // end of function


  function handleFinalResults() {
  	$(".js-next-question").val("Final Results");
     $(".js-next-question").on("click", function(event){

        generateFinalResultsPage();
  	}); //end of onClick
  } //end of function


  function generateFinalResultsPage() {
    const finalResultsHTML = 
      `<h2 class="message">Congratulations <br>Your final score was ${score}/${questionIndex}.</h2>
        <input class="js-retake-quiz" type="submit" value="RETAKE QUIZ">`

      $(".js-results").empty();
      $(".js-results").append(finalResultsHTML);
      handleResetQuiz();
  };


  function handleResetQuiz(){
    $(".js-retake-quiz").on("click", function(event){
      resetScoreBoard(); // create
      renderStartPage(); // create
    });
  };


   function scorePoint(){
  	score++;
  };


  function questionNext(){
  	questionIndex++;
  };


  function resetScoreBoard(){
    $(".scoreboard").empty();
    score = 0;
    questionIndex = 0;
  };


  function renderStartPage(){
    const startPageHTML = 
    `<h2 class="heading">Think you got what it takes, Vault Hunter? Prove it, and take this quiz!</h2>
    <input class="js-start-quiz" type="submit" value="Take Quiz"> `

    $(".js-results").empty();
    $(".js-results").append(startPageHTML);
    startQuizButton();
  };


    startQuizButton();
  

  // render questions
  // submit answer
  // display result 
  // next question 
  // final results 
  // start quiz over
});
