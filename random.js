random_btn.onclick = function() {
	// generate a random number then round it down
	var random = Math.floor(Math.random()*2) + 1;
	img_answer.style.visibility = "hidden";
	console.log(random)
	// the topic which will be chosen randomly too
	var topics = ["complex_numbers", "math_induction", "trigonometry"]
	topicsRandom = Math.ceil(Math.random()*2);
	console.log(topicsRandom)
	// you will have to spam the "random" button before it works properly
	img_question.style.visibility = "visible";
	img_question.src = "images/" + topics[topicsRandom] + "/" + random + "q.png"
	if (img_question.style.visibility == "visible") {
		answer_btn.style.opacity = "1"
		answer_btn.onclick = function() {
			img_answer.style.visibility = "visible";
			img_answer.src = "images/" + topics[topicsRandom] + "/" + random + "ms.png"			
		}
	}
}