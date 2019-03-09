random_btn.onclick = function() {
	// generate a random number then round it down
	var random = Math.ceil(Math.random()*5)
	console.log(random)
	// the topic which will be chosen randomly too
	var topics = [" ", "series_induction", "functions", "complex_numbers", "calculus", "logarithms", "statistics_probability", "trigonometry", "vectors"]
	topicsRandom = Math.ceil(Math.random()*8)
	console.log(topicsRandom)
	// you will have to spam the "random" button before it works properly
	img_question.style.visibility = "visible";
	img_answer.style.visibility = "hidden";
	img_question.src = "images/" + topics[topicsRandom] + "/" + random + "q.png"
	if (img_question.style.visibility == "visible") {
		answer_btn.style.opacity = "1"
		answer_btn.onclick = function() {
			img_answer.style.visibility = "visible";
			img_answer.src = "images/" + topics[topicsRandom] + "/" + random + "ms.png"			
		}
	}
}
