import React, { useState } from 'react';
import './FlipCard.css';
import frontBg from '@/assets/images/wukong-front.jpeg';
import backBg from '@/assets/images/wukong-back.jpg';

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
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleCardClick}
        style={{
          '--card-front-bg': `url(${frontBg})`,
          '--card-back-bg': `url(${backBg})`
        } as React.CSSProperties}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="category">
              <div className="text-with-pinyin">
                {showPinyin && <span className="pinyin">{categoryPinyin}</span>}
                <span>{category}</span>
              </div>
            </div>
            <div className="content">
              <div className="text-with-pinyin">
                {showPinyin && <span className="pinyin">{frontPinyin}</span>}
                <span>{front}</span>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="text-with-pinyin">
              {showPinyin && <span className="pinyin">{backPinyin}</span>}
              <span>{back}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="pinyin-toggle" onClick={togglePinyin}>
        {showPinyin ? '隐藏拼音' : '显示拼音'}
      </button>
    </div>
  );
};

export default FlipCard; 