import './GameOver.css'

const GameOver = ({ restartGame }) => {
  return (
    <div>
      <h2>GameOver</h2>
      <button onClick={restartGame}>Jogar Novamente</button>
    </div>
    
  )
}

export default GameOver;