$(document).ready(function() {
  var quizObj = {
    counter: 0,
    correct: 0,
    questions: [
      {
        question: "What is your favorite color?",
        answer1: "Blue:",
        answer2: "Red",
        answer3: "Black",
        answer4: "Yellow",
        correct: "Yellow"
      },
      {
        question: "What is your favorite movie?",
        answer1: "Gladiator:",
        answer2: "Planes",
        answer3: "Cars",
        answer4: "Twilight",
        correct: "Cars"
      }
    ],
    submit: $('form#quiz-form').submit(function(event) {
      event.preventDefault();
      quizObj.checkAnswer();
      
    }),
    nextQuestion: $('.next').on('click', function(){
      quizObj.renderQuestion();
      $('.quiz-overlay').fadeOut(100);
      $('input[name=answers]:checked').attr('checked', false);
    }),
    renderQuestion: function(){
      $(".question").text(quizObj.questions[quizObj.counter].question);
      $(".answer1").text(quizObj.questions[quizObj.counter].answer1);
      $("#answer1").attr('value', quizObj.questions[quizObj.counter].answer1);
      $(".answer2").text(quizObj.questions[quizObj.counter].answer2);
      $("#answer1").attr('value', quizObj.questions[quizObj.counter].answer2);
      $(".answer3").text(quizObj.questions[quizObj.counter].answer3);
      $("#answer3").attr('value', quizObj.questions[quizObj.counter].answer3);
      $(".answer4").text(quizObj.questions[quizObj.counter].answer4);
      $("#answer4").attr('value', quizObj.questions[quizObj.counter].answer4);
      $('.submit').show();
    },
    renderOverlay: function(boolean) {
      if (boolean) {
        $('.quiz-overlay').css('background-color', 'green');
        $('.quiz-overlay h1').text('GOOD jOB!');
      } else {
        $('.quiz-overlay').css('background-color', 'red');
        $('.quiz-overlay h1').text('Maybe Next Time!');
      }
    },
    checkAnswer: function(){
      if($('input[name=answers]:checked').val() === quizObj.questions[quizObj.counter].correct) {
        quizObj.correct++;
        $('.correct-count').text(quizObj.correct);
        quizObj.counter++;
        $('.question-count').text(quizObj.counter + 1);
        quizObj.renderOverlay(true);
      } else {
        quizObj.renderOverlay(false);
        quizObj.counter++;
        $('.question-count').text(quizObj.counter + 1);
      }
      $('.quiz-overlay').fadeIn(100);
    }
  };

  quizObj.renderQuestion();
  $(".begin").click(function(){
    $(".intro").fadeOut(500, function() {
      $(".hide-this").fadeOut(50);
      $(".quiz-container").fadeIn(1000);
      $(".counter").fadeIn(1000).css("display", "inline");
    });    
  });

  console.log(quizObj.correct)
});
