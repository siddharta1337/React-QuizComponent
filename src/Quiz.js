import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  /// cuando se usan clases el constructor necesita injeccion de los props
  // esto es como angular, pero solo para los outputs
  constructor(props) {
    /// captura los props desde el super
    super(props);

    /// aqui tambien se inicializa el state
    this.state = { quiz_position: 1 };

  }

  //// siempre devuelve render porque es el output de la clase, este es el template
  /// es requerido y atencion a la sintaxis render(){  return }
  render() {

    const isQuizEnd = true //( (this.state.quiz_position-1) === quizData.quiz_questions.length)
    return (
      <div>
        {isQuizEnd?<QuizEnd />:
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />}
        
      </div>
    );
  }
}

export default Quiz;