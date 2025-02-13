import React, { useState } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  front: string;
  frontPinyin: string;
  back: string;
  backPinyin: string;
  category: string;
  categoryPinyin: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, frontPinyin, back, backPinyin, category, categoryPinyin }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyin, setShowPinyin] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // 如果点击的是按钮，不翻转卡片
    if ((e.target as HTMLElement).closest('.pinyin-toggle')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const togglePinyin = () => {
    setShowPinyin(!showPinyin);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="category">
              <span>{category}</span>
            </div>
            <div className="content">
              <span>{front}</span>
            </div>
          </div>
          <div className="flip-card-back">
            <span>{back}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 