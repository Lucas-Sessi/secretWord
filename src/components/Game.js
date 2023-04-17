import './Game.css'

const Game = ({ verifyLetter })=> {
  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: 0000</span>
        </p>
        <h3 className="tip">
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <p>Você ainda tem xxx tentativas(s).</p>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente advinhar a letra da palavra: </p>
          <form action="">
            <input type="text" name="letter" max-length='1' required />
            <button>Jogar!</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas: </p>
          <span>a, </span>
          <span>b, </span>
        </div>
      </div>
    

    </div>
  )
}
export default Game;
