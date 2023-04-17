// CSS
  import './App.css';

// REACT
  import { useCallback, useEffect, useState } from 'react';

// DATA
  import { wordsList } from './data/words';

// COMPONENTS
  import StartScreen from './components/StartScreen';
  import Game from './components/Game';
  import GameOver from './components/GameOver';

const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  //picked
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState('');

  //estados do jogo
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  



  const pickedWordAndCategory = ()=> {
    //pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick random word
    const word = words[category][Math.floor(Math.random() * Object.keys(category).length)];
    console.log(word);

    return { word, category };
  }

  //Start the game
  const startGame = ()=>{
    const { word, category } = pickedWordAndCategory();

    //create and array of letters
    let wordLetters = word.split("");

    //deixando todas as letras lowercase
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    setGameStage(stages[1].name);
  }

  //verificar etapa do jogo
  const verifyLetter = ()=> {
    setGameStage(stages[2].name);
  }

  //restart the game
  const restartGame = ()=> {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">

      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver restartGame={restartGame} />}

    </div>
  );
}

export default App;
