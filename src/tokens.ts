/**
 * Industrial Skeuomorphism Design Tokens
 * Built according to the Industrial Realism specification:
 * - 45-degree top-left diffuse workshop lighting
 * - Dieter Rams + Teenage Engineering OP-1 aesthetic
 * - Strict light mode with ABS plastic chassis (#e0e5ec) and Safety Orange (#ff4757)
 */

export const INDUSTRIAL_TOKENS = {
  colors: {
    chassis: '#e0e5ec',
    panel: '#f0f2f5',
    recessed: '#d1d9e6',
    recessedDark: '#b8c3d3',
    textPrimary: '#2d3436',
    textMuted: '#4a5568',
    safetyOrange: '#ff4757',
    safetyOrangeDark: '#d63031',
    safetyGreen: '#22c55e',
    safetyAmber: '#f59e0b',
    borderShadow: '#babecc',
    borderLight: '#ffffff',
    borderDark: '#a3b1c6',
    screenBg: '#12161a',
    screenText: '#68d391',
    screenAmber: '#f6ad55',
  },
  shadows: {
    card: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
    floating: '12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255,255,255,0.6)',
    pressed: 'inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff',
    recessed: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
    recessedDeep: 'inset 6px 6px 14px #a3b1c6, inset -6px -6px 14px #ffffff',
    sharp: '4px 4px 8px rgba(0,0,0,0.15), -1px -1px 1px rgba(255,255,255,0.8)',
    btnPrimary: '4px 4px 8px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.4)',
    btnPrimaryPressed: 'inset 4px 4px 8px rgba(140,20,30,0.5), inset -4px -4px 8px rgba(255,120,130,0.4)',
    glowRed: '0 0 10px 2px rgba(255, 71, 87, 0.7)',
    glowGreen: '0 0 10px 2px rgba(34, 197, 94, 0.7)',
    glowAmber: '0 0 10px 2px rgba(245, 158, 11, 0.7)',
    glowBlue: '0 0 10px 2px rgba(59, 130, 246, 0.7)',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px',
  },
  easing: {
    mechanical: [0.175, 0.885, 0.32, 1.275] as const,
  },
} as const;

/**
 * Mechanical Audio Synthesizer:
 * Generates an authentic subtle physical switch click using Web Audio API.
 */
class MechanicalSoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playClick(type: 'click' | 'toggle' | 'heavy' = 'click') {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'heavy') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'toggle') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.035);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.025);
      }
    } catch {
      // Audio context may be restricted before user gesture
    }
  }
}

export const soundEngine = new MechanicalSoundEngine();
