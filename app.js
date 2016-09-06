$('.quiz-overlay').hide();
$('.finish').hide();
$('.final-overlay').hide();

$(document).ready(function() {

  var quizObj = {
    counter: 0,
    correct: 0,
    questions: [
      {
        question: "What fruit has a cameo in every episode?",
        answer1: "Apple",
        answer2: "Grapes",
        answer3: "Kiwi",
        answer4: "Pineapple",
        correct: "Pineapple"
      },
      {
        question: "What was the nickname for Gus's car?",
        answer1: "Blue Bandit:",
        answer2: "Blue Bullet",
        answer3: "Blueberry",
        answer4: "Bluetooth",
        correct: "Blueberry"
      },{
        question: "Where did Juliet work before Santa Barbara?",
        answer1: "Miami",
        answer2: "Vegas",
        answer3: "Seattle",
        answer4: "Dallas",
        correct: "Miami"
      },{
        question: "Fill in the blank: In between the lines there's a lot of _______?",
        answer1: "Maturity",
        answer2: "Truth",
        answer3: "Proof",
        answer4: "Obscurity",
        correct: "Obscurity"
      },{
        question: "Who created the show?",
        answer1: "James Roday",
        answer2: "Dule Hill",
        answer3: "Steve Franks",
        answer4: "Carlton Lassiter",
        correct: "Steve Franks"
      },{
        question: "What is Gus' ex-wife's name?",
        answer1: "Lavendar",
        answer2: "Juliet",
        answer3: "Mira",
        answer4: "Emma",
        correct: "Mira"
      },{
        question: "What is the name of the serial killer who has a crush on Shawn?",
        answer1: "Yin",
        answer2: "Yang",
        answer3: "Yo-Yo",
        answer4: "Yuppie",
        correct: "Yang"
      },{
        question: "Which is NOT a nickname Shawn gave Gus?",
        answer1: "Ctrl-Alt-Delete",
        answer2: "Happy Pants",
        answer3: "Longbranch Pennywhistle",
        answer4: "Sh'Dynasty",
        correct: "Happy Pants"
      },{
        question: "What was the TV talent competition Shawn and Gus sang in?",
        answer1: "American Duos",
        answer2: "America's Duos",
        answer3: "Duets Across America",
        answer4: "California Duos",
        correct: "American Duos"
      },{
        question: "What is Gus's paleontologist name?",
        answer1: "Bruton Gaster",
        answer2: "Gurton Baxter",
        answer3: "Brutus Gassius",
        answer4: "Guston Bruxter",
        correct: "Bruton Gaster"
      },
    ],
    submit: $('form#quiz-form').submit(function(event) {
      event.preventDefault();
      quizObj.checkAnswer();

    }),
    nextQuestion: $('.next').on('click', function(){
      quizObj.renderQuestion();
      $('.quiz-overlay').fadeOut(100, function(){
        $('.quiz-container').fadeIn(50);
      });
      $('input[name=answers]:checked').attr('checked', false);
      $('.question-count').text(quizObj.counter + 1);
    }),
    seeFinal: $('.final').on('click', function(){
      $('.quiz-overlay').fadeOut(100, function() {
        $('.final-overlay').fadeIn(50);
      });
      $('.final-score').text(quizObj.correct * 10);
    }),
    newQuiz: $('.new').on('click', function() {
      quizObj.counter = 0;
      quizObj.correct = 0;
      $('.question-count').text(quizObj.counter + 1);
      $('.correct-count').text(quizObj.counter);
      console.log(quizObj.counter)
      quizObj.renderQuestion();
      $('.finish').hide();
      $('input[name=answers]:checked').attr('checked', false);
      $('.final-overlay').fadeOut(100);
    }),
    renderQuestion: function(){
      // console.log(quizObj.questions[2].correct === quizObj.questions[2].answer1);
      // console.log(typeof quizObj.questions[quizObj.counter].correct);
      // console.log(quizObj.counter);
      // debugger
      $(".question").text(quizObj.questions[quizObj.counter].question);
      $(".answer1").text(quizObj.questions[quizObj.counter].answer1);
      $("#answer1").attr('value', quizObj.questions[quizObj.counter].answer1);
      $(".answer2").text(quizObj.questions[quizObj.counter].answer2);
      $("#answer2").attr('value', quizObj.questions[quizObj.counter].answer2);
      $(".answer3").text(quizObj.questions[quizObj.counter].answer3);
      $("#answer3").attr('value', quizObj.questions[quizObj.counter].answer3);
      $(".answer4").text(quizObj.questions[quizObj.counter].answer4);
      $("#answer4").attr('value', quizObj.questions[quizObj.counter].answer4);
      if(quizObj.counter + 1 === quizObj.questions.length) {
        $('.finish').show();
        $('.submit').hide();
      } else {
        $('.submit').show();
      }
    },
    renderOverlay: function(boolean) {
      if (boolean) {
        $('.quiz-overlay').css('background-color', '#5fb32a');
        $('.quiz-overlay h1').text('GOOD JOB!');
        $('.correct-answer').hide();
        if(quizObj.counter === quizObj.questions.length) {
          $('.final').show();
          $('.next').hide();
        }
      } else {
        $('.quiz-overlay').css('background-color', '#ff2300');
        $('.quiz-overlay h1').text('Maybe Next Time!');
        $('.correct-answer span').text(quizObj.questions[quizObj.counter - 1].correct);
        $('.correct-answer').show();
        if(quizObj.counter === quizObj.questions.length) {
          $('.final').show();
          $('.next').hide();
        }
      }
    },
    checkAnswer: function(){
      console.log($('input[name=answers]:checked').val());
      console.log(quizObj.questions[quizObj.counter].correct);
      console.log($('input[name=answers]:checked').val() === quizObj.questions[quizObj.counter].correct)
      if($('input[name=answers]:checked').val() === quizObj.questions[quizObj.counter].correct) {
        quizObj.correct++;
        $('.correct-count').text(quizObj.correct);
        quizObj.counter++;
        quizObj.renderOverlay(true);
      } else {
        quizObj.counter++;
        quizObj.renderOverlay(false);
      }
      $('.quiz-container').fadeOut(100, function(){
        $('.quiz-overlay').fadeIn(100);
      })

    }
  };

  quizObj.renderQuestion();
  $(".begin").click(function(){
    $(".intro").fadeOut(500, function() {
      $(".hide-this").fadeOut(50);
      $(".quiz-container").fadeIn(1000);
      $(".overlay").show();
      $(".counter").fadeIn(1000).css("display", "inline");
    });
  });

  // console.log(quizObj.correct)
});
