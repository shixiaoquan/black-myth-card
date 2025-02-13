import { useState, useCallback } from 'react';
import { Card as CardType } from '../types/card';

interface CardProps {
  card: CardType;
  defaultShowPinyin?: boolean;
}

export function Card({ card, defaultShowPinyin = false }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyin, setShowPinyin] = useState(defaultShowPinyin);

  const handleCardClick = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handlePinyinToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPinyin(prev => !prev);
  }, []);

  const renderText = useCallback((text: string, pinyin: string) => (
    <div className="text-container">
      <div className="text">{text}</div>
      {showPinyin && <div className="pinyin">{pinyin}</div>}
    </div>
  ), [showPinyin]);

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-controls">
        <button 
          onClick={handlePinyinToggle}
          className="pinyin-toggle"
          title="切换拼音显示"
        >
          {showPinyin ? '隐藏拼音' : '显示拼音'}
        </button>
      </div>
      
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="category">
            {renderText(card.category, card.categoryPinyin)}
          </div>
          <div className="content">
            {renderText(card.front, card.frontPinyin)}
          </div>
        </div>
        <div className="card-back">
          <div className="content">
            {renderText(card.back, card.backPinyin)}
          </div>
        </div>
      </div>
    </div>
  );
} 