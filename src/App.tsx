import FlipCard from './components/FlipCard';
import { cards } from './data/cards';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>黑神话：悟空 - 词汇闪卡</h1>
      </header>
      <div className="cards-container">
        {cards.map(card => (
          <FlipCard
            key={card.id}
            front={card.front}
            frontPinyin={card.frontPinyin}
            back={card.back}
            backPinyin={card.backPinyin}
            category={card.category}
            categoryPinyin={card.categoryPinyin}
          />
        ))}
      </div>
    </div>
  );
}

export default App; 