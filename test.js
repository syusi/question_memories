questions = document.querySelector("#questions");

template = document.querySelector("#question1");

clone = template.cloneNode(true);

clone.setAttribute('v-if','question_status[1]');
clone.querySelector('#question1_image').setAttribute("src","./question3.png");
clone.querySelector("#question_input").setAttribute('v-model',"question_answer[2]");
clone.querySelector("#question_button").setAttribute('@click',"check_correct(question_answer[2],'3')");
clone.querySelector("#question_h5").setAttribute("v-if",'question_status[2]');
questions.appendChild(clone);

console.log(clone.innerHTML)