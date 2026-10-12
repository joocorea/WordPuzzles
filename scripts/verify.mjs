import { levels } from '../web/src/puzzleData.js';

let errors = 0;
let totalWords = 0;

console.log(`Checking ${levels.length} levels...`);

levels.forEach((puzzle, pIdx) => {
  const grid = {};
  const { rows, cols } = puzzle.gridSize;
  const stage = puzzle.id || (pIdx + 1);

  puzzle.words.forEach(w => {
    totalWords++;
    const isAcross = (w.direction === 'across');
    for (let i = 0; i < w.answer.length; i++) {
      const r = isAcross ? w.row : w.row + i;
      const c = isAcross ? w.col + i : w.col;

      if (r < 0 || r >= rows || c < 0 || c >= cols) {
        console.error(`[Stage ${stage}] Word '${w.answer}' (${w.id}) out of bounds at (${r}, ${c}), grid is ${rows}x${cols}`);
        errors++;
      }

      const key = `${r},${c}`;
      const char = w.answer[i];
      if (grid[key] && grid[key] !== char) {
        console.error(`[Stage ${stage}] Collision at (${r}, ${c}): '${grid[key]}' vs '${char}' (Word: ${w.answer}, id: ${w.id})`);
        errors++;
      } else {
        grid[key] = char;
      }
    }
  });
});

if (errors === 0) {
  console.log(`SUCCESS: All ${levels.length} levels (${totalWords} words) verified with ZERO errors!`);
} else {
  console.error(`FAILED with ${errors} errors.`);
  process.exit(1);
}
