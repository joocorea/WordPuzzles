import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import { levels } from './puzzleData';
import { sound } from './sound';

const PASTEL_COLORS = [
  '#e8f5e9', // Light green
  '#fff3e0', // Light orange
  '#e3f2fd', // Light blue
  '#fce4ec', // Light pink
  '#f3e5f5', // Light purple
  '#fffde7', // Light yellow
  '#e0f2f1'  // Light teal
];

function App() {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [currentView, setCurrentView] = useState('map');
  const [grid, setGrid] = useState([]);
  const [inputs, setInputs] = useState({});
  const [wrongCells, setWrongCells] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);
  const [resultModal, setResultModal] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [emptyColor, setEmptyColor] = useState(PASTEL_COLORS[0]);
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const puzzleData = levels[currentLevelIdx];

  useEffect(() => {
    // Reset inputs and selection on level change
    setInputs({});
    setWrongCells({});
    setSelectedWord(null);
    setIsChecked(false);
    setEmptyColor(PASTEL_COLORS[currentLevelIdx % PASTEL_COLORS.length]);

    const { rows, cols } = puzzleData.gridSize;
    const newGrid = Array.from({ length: rows }, () => Array(cols).fill(null));

    puzzleData.words.forEach((word) => {
      for (let i = 0; i < word.answer.length; i++) {
        const r = word.direction === 'across' ? word.row : word.row + i;
        const c = word.direction === 'across' ? word.col + i : word.col;
        
        if (!newGrid[r][c]) {
          newGrid[r][c] = { words: [], number: null, direction: null };
        }
        newGrid[r][c].words.push(word.id);
        if (i === 0) {
          newGrid[r][c].number = word.num || word.id;
          newGrid[r][c].direction = word.direction;
        }
      }
    });
    setGrid(newGrid);
  }, [currentLevelIdx, puzzleData]);

  const handleInputChange = (r, c, val) => {
    const char = val.slice(-1); 
    if (char) {
      sound.playTap();
    }
    setInputs({ ...inputs, [`${r}-${c}`]: char });
    setWrongCells(prev => {
      if (prev[`${r}-${c}`]) {
        const next = { ...prev };
        delete next[`${r}-${c}`];
        return next;
      }
      return prev;
    });
  };

  const getCellClasses = (r, c, cellData) => {
    let classes = 'cell ';
    if (!cellData) return classes + 'empty';
    if (selectedWord && cellData.words.includes(selectedWord.id)) classes += 'highlight ';
    return classes;
  };

  const checkAnswers = () => {
    let allCorrect = true;
    const newWrongCells = {};
    let totalCells = 0;
    let correctCells = 0;
    const checkedCells = new Set();
    const updatedInputs = { ...inputs };

    puzzleData.words.forEach(word => {
      for (let i = 0; i < word.answer.length; i++) {
        const r = word.direction === 'across' ? word.row : word.row + i;
        const c = word.direction === 'across' ? word.col + i : word.col;
        const key = `${r}-${c}`;
        const expected = word.answer[i];
        const actual = inputs[key];
        
        if (!checkedCells.has(key)) {
          checkedCells.add(key);
          totalCells++;
          if (actual && actual === expected) {
            correctCells++;
          }
        }

        if (actual !== expected) {
          allCorrect = false;
          newWrongCells[key] = true;
          updatedInputs[key] = expected; // Reveal correct answer
        }
      }
    });

    setInputs(updatedInputs);
    setWrongCells(newWrongCells);
    setIsChecked(true);
    const score = totalCells === 0 ? 0 : Math.round((correctCells / totalCells) * 100);

    let msg = "";
    if (score === 100) {
      sound.playFanfare();
      msg = "🎉 최고예요! 완벽하게 맞췄어요! 🎉";
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.35 },
        zIndex: 9999
      });
      // 모달 양쪽 위에서도 화려하게 터지도록 추가 발사
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0.15, y: 0.4 },
          zIndex: 9999
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 0.85, y: 0.4 },
          zIndex: 9999
        });
      }, 200);
    } else if (score >= 70) {
      sound.playDingDong();
      msg = "훌륭해요! 빈 칸이나 틀린 곳에 정답을 빨간색으로 보여줄게요! 💪";
    } else if (score > 0) {
      sound.playTryAgain();
      msg = "아깝네요! 못 풀었거나 틀린 정답을 빨간색으로 확인해보세요! ✊";
    } else {
      sound.playTryAgain();
      msg = "어려웠나요? 정답을 빨간색으로 채워드렸어요. 읽어보며 배워봅시다! 😊";
    }

    setResultModal({ score, msg });
  };

  const renderClue = (text) => {
    const match = text.match(/(\[(비|예|반|관)\].*)$/);
    if (match) {
      const mainText = text.slice(0, match.index);
      const auxText = text.slice(match.index);
      return (
        <span>
          {mainText}
          <span className="clue-aux">{auxText}</span>
        </span>
      );
    }
    return text;
  };

  if (currentView === 'map') {
    return (
      <div className="app-container">
        <header className="header no-print" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div className="header-title">
            <img src="/mascot.png" alt="부캉이" className="mascot-img" />
            <h1>낱말 퍼즐 모험 🗺️</h1>
          </div>
          <button 
            className="sound-btn" 
            onClick={toggleSound} 
            title={isMuted ? "소리 켜기" : "소리 끄기"}
          >
            {isMuted ? "🔇 소리 끔" : "🔊 소리 켬"}
          </button>
        </header>
        <div className="level-map">
          {levels.map((lvl, idx) => (
            <button 
              key={lvl.id} 
              className="level-node"
              onClick={() => {
                sound.playButton();
                setCurrentLevelIdx(idx);
                setCurrentView('puzzle');
              }}
            >
              <div className="level-number">{parseInt(lvl.id, 10)}</div>
              <div className="level-label">단계</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {resultModal && (
        <div className="modal-overlay" onClick={() => setResultModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{resultModal.msg}</h2>
            <p style={{ color: '#888', marginTop: '1.5rem', fontSize: '1rem' }}>(화면을 클릭하면 닫힙니다)</p>
          </div>
        </div>
      )}

      <header className="header">
        <div className="header-title">
          <img src="/mascot.png" alt="부캉이" className="mascot-img" />
          <h1>{puzzleData.title}</h1>
        </div>
        <div className="header-controls no-print">
          <button className="sound-btn icon-only" onClick={toggleSound} title={isMuted ? "소리 켜기" : "소리 끄기"}>
            {isMuted ? "🔇" : "🔊"}
          </button>
          <button className="back-btn" onClick={() => { sound.playButton(); setCurrentView('map'); }}>🗺️ 맵으로</button>
          <button className="check-btn" onClick={checkAnswers}>정답 확인 ✨</button>
          {isChecked && currentLevelIdx < levels.length - 1 && (
            <button className="next-level-btn" onClick={() => { sound.playButton(); setCurrentLevelIdx(currentLevelIdx + 1); }}>다음 단계로 ➡️</button>
          )}
          {isChecked && currentLevelIdx === levels.length - 1 && (
            <button className="next-level-btn" onClick={() => { sound.playButton(); setCurrentView('map'); }}>모험 완료! 🌟</button>
          )}
          <button className="print-btn" onClick={() => window.print()}>프린트 🖨️</button>
        </div>
      </header>

      <div className="main-content">
        {/* Left: Clues */}
        <div className="clues-panel">
          <div className="clues-section across">
            <h3><span className="arrow-box across">→</span> 가로 열쇠</h3>
            <ul>
              {puzzleData.words.filter(w => w.direction === 'across').sort((a, b) => a.num - b.num).map(w => (
                <li 
                  key={w.id} 
                  className={selectedWord?.id === w.id ? 'active' : ''}
                  onClick={() => setSelectedWord(w)}
                >
                  <span className="clue-num across">{w.num || w.id}</span> {renderClue(w.clue)}
                </li>
              ))}
            </ul>
          </div>
          <div className="clues-section down">
            <h3><span className="arrow-box down">↓</span> 세로 열쇠</h3>
            <ul>
              {puzzleData.words.filter(w => w.direction === 'down').sort((a, b) => a.num - b.num).map(w => (
                <li 
                  key={w.id} 
                  className={selectedWord?.id === w.id ? 'active' : ''}
                  onClick={() => setSelectedWord(w)}
                >
                  <span className="clue-num down">{w.num || w.id}</span> {renderClue(w.clue)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Grid */}
        <div className="puzzle-board">
          <div className="grid">
            {grid.map((row, r) => (
              <div key={`row-${r}`} className="row">
                {row.map((cell, c) => (
                  <div 
                    key={`${r}-${c}`} 
                    className={getCellClasses(r, c, cell)}
                    style={!cell ? { backgroundColor: emptyColor } : {}}
                    onClick={() => cell && setSelectedWord(puzzleData.words.find(w => w.id === cell.words[0]))}
                  >
                    {cell && cell.number && <span className={`cell-number ${cell.direction}`}>{cell.number}</span>}
                    {cell && (
                      <input
                        type="text"
                        className={wrongCells[`${r}-${c}`] ? 'wrong' : ''}
                        maxLength={1}
                        value={inputs[`${r}-${c}`] || ''}
                        onChange={(e) => handleInputChange(r, c, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
