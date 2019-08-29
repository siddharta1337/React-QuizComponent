import React, { Component } from "react";

let quizData = require("./quiz_data.json");

class Quizz extends Component {
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
    return(
        <div>
        <div className="QuizQuestion">
            {quizData.quiz_questions[0].instruction_text}
        </div>
    </div>
    );
  }


}

export default Quizz;
