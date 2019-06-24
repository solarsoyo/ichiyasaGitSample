'use strict';

{
    // APIから取得したデータを入れるハコ（クラス）
    class Quiz {
        constructor(category, difficulty, question, correct_answer, incorrect_answers) {
            this.category = category;
            this.difficulty = difficulty;
            this.question = question;
            this.correct_answer = correct_answer;
            this.incorrect_answers = incorrect_answers;
        }
    }    


    fetch('https://opentdb.com/api.php?amount=10') // APIのURL
        .then(response => {
            return response.json();
        })
        .then(myJson => {            
            const obj = myJson.results;
                Object.keys(obj).forEach((index)=> {
                    const quiz = new Quiz(
                        obj[index].category,
                        obj[index].difficulty,
                        obj[index].question,
                        obj[index].correct_answer,
                        obj[index].incorrect_answers
                        ); 
                    console.log(`問題${parseInt(index)+1}`);
                    console.log(`ジャンル：${quiz.category}`);
                    console.log(`難易度：${quiz.difficulty}`);
                    console.log(`質問：${quiz.question}`);
                    console.log(`正答：${quiz.correct_answer}`);
                    console.log(`誤答：${quiz.incorrect_answers}`);
                });
        });
}
