/**
 * Web Audio API 기반의 효과음 시스템
 * 외부 오디오 파일 다운로드 없이 브라우저 내장 합성기로 즉각적이고 경쾌한 사운드를 제공합니다.
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  // 브라우저 오디오 컨텍스트 초기화 (사용자 인터랙션 시 자동 활성화)
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 음소거 토글
  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // 기본 비프/톤 생성 헬퍼
  playTone(freq, type = 'sine', duration = 0.1, delay = 0, startGain = 0.15) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const startTime = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(startGain, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // 1. 글자 입력 효과음 (부드러운 퐁 소리)
  playTap() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const startTime = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, startTime);
    osc.frequency.exponentialRampToValueAtTime(650, startTime + 0.06);

    gain.gain.setValueAtTime(0.08, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.08);
  }

  // 2. 버튼 클릭 효과음 (경쾌한 팝 소리)
  playButton() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    this.playTone(520, 'sine', 0.05, 0, 0.08);
  }

  // 3. 100점 완벽 정답 축하 팡파레! (도-미-솔-도 화음 아르페지오)
  playFanfare() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [
      { f: 523.25, d: 0.12, t: 0.00 }, // C5 (도)
      { f: 659.25, d: 0.12, t: 0.10 }, // E5 (미)
      { f: 783.99, d: 0.14, t: 0.20 }, // G5 (솔)
      { f: 1046.50, d: 0.35, t: 0.32 }  // C6 (높은 도)
    ];

    notes.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, n.t, 0.18);
    });

    // 마무리 반짝이는 하모니
    setTimeout(() => {
      this.playTone(1318.51, 'sine', 0.25, 0, 0.08); // E6
      this.playTone(1567.98, 'sine', 0.30, 0.05, 0.06); // G6
    }, 450);
  }

  // 4. 높은 점수 (70점 이상) 딩동댕 차임
  playDingDong() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [
      { f: 523.25, d: 0.18, t: 0.00 }, // 도
      { f: 659.25, d: 0.18, t: 0.14 }, // 미
      { f: 783.99, d: 0.28, t: 0.28 }  // 솔
    ];

    notes.forEach(n => {
      this.playTone(n.f, 'sine', n.d, n.t, 0.14);
    });
  }

  // 5. 오답 / 재도전 안내음 (부드러운 실로폰 하강음)
  playTryAgain() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [
      { f: 440.00, d: 0.15, t: 0.00 }, // 라
      { f: 349.23, d: 0.25, t: 0.12 }  // 파
    ];

    notes.forEach(n => {
      this.playTone(n.f, 'sine', n.d, n.t, 0.10);
    });
  }
}

export const sound = new SoundManager();
