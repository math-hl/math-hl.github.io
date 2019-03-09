random_btn.onclick = function() {

	var questionAndAnswers = [
		{
			"questionUrl": "images/complex_numbers/1q.png",
			"answerUrl": "images/complex_numbers/1ms.png"
		},
		{
			"questionUrl": "images/complex_numbers/2q.png",
			"answerUrl": "images/complex_numbers/2ms.png"
		},
		{
			"questionUrl": "images/math_induction/1q.png",
			"answerUrl": "images/math_induction/1ms.png"
		},
		{
			"questionUrl": "images/math_induction/2q.png",
			"answerUrl": "images/math_induction/2ms.png"
		},
		{
			"questionUrl": "images/trigonometry/1q.png",
			"answerUrl": "images/trigonometry/1ms.png"
		},
		{
			"questionUrl": "images/trigonometry/2q.png",
			"answerUrl": "images/trigonometry/2ms.png"
		},
	];

	// generate a random number then round it down
	var randomQuestionNumber = Math.floor(Math.random() * (questionAndAnswers.length + 1));
	img_answer.style.visibility = "hidden";
	img_question.style.visibility = "visible";
	img_question.src = questionAndAnswers[randomQuestionNumber].questionUrl;
	if (img_question.style.visibility == "visible") {
		answer_btn.style.opacity = "1"
		answer_btn.onclick = function() {
			img_answer.style.visibility = "visible";
			img_answer.src = questionAndAnswers[randomQuestionNumber].answerUrl;
		}
	}
}