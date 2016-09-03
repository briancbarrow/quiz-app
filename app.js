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
      $('.next').hide();
    },
    checkAnswer: $('form#quiz-form').submit(function(event) {
      event.preventDefault();
      if($('input[name=answers]:checked').val() === quizObj.questions[quizObj.counter].correct) {
        quizObj.correct++;
        console.log(quizObj.correct)
      }
    })
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
