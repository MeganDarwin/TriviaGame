$( document ).ready(function(){
	$("#quiz").hide();

var clock;
var counter = 30;
var userGuess= [];
var questionCounter=0;
var quiz = $("quiz")
var correct = 0;;
var incorrect = 0;
var unanswered =0;
var questionList =  {

	question1: {
	question: "question1 text here?",
	choices: ["answer1/1",  "answer2/1", "answer3/1", "answer4/1"],
	answer: 2,
	},
	question2: {
	question: "question2 text here?",
	choices: ["answer1/2",  "answer2/2", "answer3/2", "answer4/2"],
	answer: 1,
	},
	question3: {
	question: "question3 text here?",
	choices: ["answer1/3",  "answer2/3", "answer3/3", "answer4/3"],
	answer: 1,
	},
	question4: {
	question: "question4 text here?",
	choices: ["answer1/4",  "answer2/4", "answer3/4", "answer4/4"],
	answer: 1,
	},
	question5: {
	question: "question5 text here?",
	choices: ["answer1/5",  "answer2/5", "answer3/5", "answer4/5"],
	answer: 1,
	},
	question6: {
	question: "question6 text here?",
	choices: ["answer1/6",  "answer2/6", "answer3/6", "answer4/6"],
	answer: 1,
	},
	question7: {
	question: "question7 text here?",
	choices: ["answer1/7",  "answer2/7", "answer3/7", "answer4/7"],
	answer: 1,
	},
	question8: {
	question: "question8 text here?",
	choices: ["answer1/8",  "answer2/8", "answer3/8", "answer4/8"],
	answer: 1,
	},
	question9: {
	question: "question9 text here?",
	choices: ["answer1/9",  "answer2/9", "answer3/9", "answer4/9"],
	answer: 1,
	},
	question10: {
	question: "question10 text here?",
	choices: ["answer1/10",  "answer2/10", "answer3/10", "answer4/10"],
	answer: 1,
	},


}


function loadQuestion() {   
	
	$("#question").html(questionList.question1.question);
	$("#option-1").html(questionList.question1.choices[0]);
	$("#option-2").html(questionList.question1.choices[1]);
	$("#option-3").html(questionList.question1.choices[2]);
	$("#option-4").html(questionList.question1.choices[3]);
}


$("#start").on("click", function() {
  $("#quiz").show();
  $("#start").hide();
  timer();
 loadQuestion();
})

$("#question").each(function() {

  for (var i = 0; i < questionLists.length; i++) {
    questions[i]
    console.log(questionList[i].questions);
  }

  //$("#questions") 
});


function timer() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			//unanswered ++;
		}
		if (counter > 0) {
			counter--;
		}
		$("#timer").html("Time Remaining: " + " " + counter);
	}
}

})



