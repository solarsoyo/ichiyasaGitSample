'use strict';

{
  const start = document.getElementsByClassName('start')[0];
  const category = document.getElementsByClassName('category')[0];
  const difficulty = document.getElementsByClassName('difficulty')[0];
  const title = document.getElementsByClassName('title')[0];
  const text = document.getElementsByClassName('text')[0];
  
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

  // 「開始」ボタンをクリックしたら発動するイベント
  start.addEventListener('click', ()=> {
    loading();
    // APIから問題を取得する
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
        title.textContent = `問題${parseInt(index)+1}`;
        category.textContent = `[ジャンル]${quiz.category}`;
        difficulty.textContent = `[難易度]${quiz.difficulty}`;
        text.textContent = quiz.question;
      });
    });
  });

  // APIから問題を取得するまでに表示させるテキスト
  function loading() {
    title.textContent = '取得中';
    text.textContent = '少々お待ちください';
  }
  
}
