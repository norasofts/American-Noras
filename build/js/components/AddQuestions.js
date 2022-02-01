import { curr, questionsCount } from "../pages/Levels.js";
import UpperFirst from "./UpperFirst.js";
const AddQuestions = (question) => {
    if (curr < +questionsCount) {
        // heading area
        const quizArea = document.querySelector(".quiz-area");
        quizArea.innerHTML = `<h2>${question.title}</h2>`;
        // the answers
        const quizAnswers = document.querySelector(".custom_radio");
        for (let i = 1; i < 5; i++) {
            // @ts-ignore
            let dataAnswer = question[`a_${i}`];
            let checked = i == 1 && "checked";
            quizAnswers.innerHTML +=
                `
                <input id="a_${i}" data-answer="${dataAnswer}" ${checked} name="answer" type="radio">
                <label for="a_${i}">${UpperFirst(dataAnswer)}</label>
                <br>
            `;
        }
    }
};
export default AddQuestions;
//# sourceMappingURL=AddQuestions.js.map