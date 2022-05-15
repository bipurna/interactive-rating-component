import './App.css';
import Card from './Card/Card';

function App() {
  let cardContent={
    heading:"How did we do?",
    text:"Please let us know how we did with your support request.All feedback is appriciated to help us improve our offering!",
    ratings:[1,2,3,4,5],
  }
  return (
    <div className="App">
     <Card {...cardContent}/>
     <div className="attribution">
       
    Challenge by  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://www.tarakumarsunuwar.com.np" target="_blank" rel="noreferrer">Tara Kumar Sunuwar</a>.
  </div>
    </div>
  );
}

export default App;
