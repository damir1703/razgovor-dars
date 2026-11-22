import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Video, StickyNote, Layers, Columns2, User, FileText } from 'lucide-react';
import { ScriptView } from './ScriptView';
import { SettingsProvider, useSettings, useTx, StepCtx } from './lib/ctx';
import { SLIDES, PARTS } from './slides';

const W = 1920, H = 1080;
const PANEL_W = W * 0.4;   // правая панель в режиме 60/40
const VIRT_W = 1150;       // слайд верстается на эту ширину и ужимается в панель
const params = new URLSearchParams(location.search);

function readHash() {
  const n = parseInt(location.hash.replace('#', ''), 10);
  return Number.isFinite(n) && n >= 1 && n <= SLIDES.length ? n - 1 : 0;
}

// Размер экрана берём из нескольких источников: браузеры смарт-досок и ТВ часто отдают неверный innerWidth
function viewport() {
  const vv = window.visualViewport;
  const w = Math.round(vv?.width || document.documentElement.clientWidth || innerWidth);
  const h = Math.round(vv?.height || document.documentElement.clientHeight || innerHeight);
  return { w, h };
}
function useScale() {
  const [v, setV] = useState(viewport);
  useEffect(() => {
    const f = () => setV(prev => { const n = viewport(); return n.w === prev.w && n.h === prev.h ? prev : n; });
    f();
    addEventListener('resize', f); addEventListener('orientationchange', f); addEventListener('load', f);
    document.addEventListener('fullscreenchange', f);
    window.visualViewport?.addEventListener('resize', f);
    const t = setInterval(f, 700);   // страховка: некоторые браузеры не шлют resize
    return () => {
      removeEventListener('resize', f); removeEventListener('orientationchange', f); removeEventListener('load', f);
      document.removeEventListener('fullscreenchange', f);
      window.visualViewport?.removeEventListener('resize', f);
      clearInterval(t);
    };
  }, []);
  const s = Math.min(v.w / W, v.h / H) || 1;
  return { s, left: (v.w - W * s) / 2, top: (v.h - H * s) / 2, w: v.w, h: v.h };
}

const BG_LIGHT = '#FBF8F2';
const BG_BLUE = 'linear-gradient(150deg, #2F6BF0 0%, #1746BF 100%)';

function Deck() {
  const [i, setI] = useState(readHash);
  const [dir, setDir] = useState(1);
  const [rec, setRec] = useState(params.get('rec') === '1');     // режим записи: без кнопок и подсказок
  const [notes, setNotes] = useState(params.get('notes') === '1');
  const [text, setText] = useState(params.get('text') === '1');   // полная текстовая версия (сценарий)
  const { lang, setLang } = useSettings();
  const tx = useTx();
  const reduce = useReducedMotion();
  const sc = useScale();
  const touch = useRef<number | null>(null);

  const [step, setStep] = useState(0);
  // пошаговое появление: можно выключить (для записи) — тогда всё на слайде видно сразу
  const [stepsOn, setStepsOn] = useState(() => { if (params.get('steps') === '0') return false; try { return localStorage.getItem('rz-steps') !== '0'; } catch { return true; } });
  useEffect(() => { try { localStorage.setItem('rz-steps', stepsOn ? '1' : '0'); } catch { /* приватный режим */ } }, [stepsOn]);
  // раскладка: весь экран или 60/40 (слева спикер, справа слайд)
  const [split, setSplit] = useState(() => { if (params.get('split') === '1') return true; if (params.get('split') === '0') return false; try { return localStorage.getItem('rz-split') === '1'; } catch { return false; } });
  useEffect(() => { try { localStorage.setItem('rz-split', split ? '1' : '0'); } catch { /* приватный режим */ } }, [split]);
  const maxStep = (k: number) => (stepsOn ? SLIDES[k].steps ?? 0 : 0);
  const go = useCallback((n: number, atEnd = false) => {
    setI(cur => {
      const next = Math.max(0, Math.min(SLIDES.length - 1, n));
      setDir(next >= cur ? 1 : -1);
      setStep(atEnd ? maxStep(next) : 0);
      return next;
    });
  }, [stepsOn]);
  // вперёд: сначала шаги внутри слайда, потом следующий слайд; назад — наоборот
  const fwd = useCallback(() => { const max = maxStep(i); if (step < max) setStep(step + 1); else go(i + 1); }, [i, step, go, stepsOn]);
  const back = useCallback(() => { if (step > 0) setStep(step - 1); else if (i > 0) go(i - 1, true); }, [i, step, go]);

  useEffect(() => { history.replaceState(null, '', location.search + '#' + (i + 1)); }, [i]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (text) return;   // открыт сценарий: слайды не листаем
      if (e.key === 't' || e.key === 'T') { setText(true); return; }
      if ((e.target as HTMLElement)?.tagName === 'BUTTON' && (e.key === ' ' || e.key === 'Enter')) return;
      if (['ArrowRight', 'PageDown', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); fwd(); }
      if (['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key)) { e.preventDefault(); back(); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(SLIDES.length - 1);
      if (e.key === 'f' || e.key === 'F') document.documentElement.requestFullscreen?.();
      if (e.key === 'h' || e.key === 'H') setRec(r => !r);
      if (e.key === 'n' || e.key === 'N') setNotes(v => !v);
      if (e.key === 's' || e.key === 'S') { setStepsOn(v => !v); setStep(0); }
      if (e.key === 'p' || e.key === 'P') setSplit(v => !v);
      if (e.key === 'l' || e.key === 'L') setLang(lang === 'uz' ? 'ru' : 'uz');
    };
    const onHash = () => go(readHash());
    addEventListener('keydown', onKey); addEventListener('hashchange', onHash);
    return () => { removeEventListener('keydown', onKey); removeEventListener('hashchange', onHash); };
  }, [i, go, fwd, back, lang, setLang, text]);

  const S = SLIDES[i];
  const blue = S.tone === 'blue';
  const part = PARTS[S.part];

  return (
    <div style={{ position: 'fixed', left: 0, top: 0, width: sc.w, height: sc.h, overflow: 'hidden', background: '#0B1433' }}
      onTouchStart={e => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={e => { if (touch.current === null) return; const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 60) { if (dx < 0) fwd(); else back(); } touch.current = null; }}>
      {/* холст 16:9 */}
      <div className={(split ? 'split ' : '') + (blue ? 'tone-blue' : '')} style={{ width: W, height: H, transform: `scale(${sc.s})`, transformOrigin: '0 0', position: 'absolute', left: sc.left, top: sc.top, overflow: 'hidden', background: BG_LIGHT, color: 'var(--ink)' }}>
        {/* фон: синий слой проявляется на акцентных слайдах, фирменные «пузыри» по углам */}
        <motion.div aria-hidden initial={false} animate={{ opacity: blue ? 1 : 0 }} transition={{ duration: .5 }} style={{ position: 'absolute', inset: 0, background: BG_BLUE }} />
        <motion.div aria-hidden initial={false} animate={{ opacity: blue ? .22 : 1, scale: blue ? 1.15 : 1 }} transition={{ duration: .6 }}
          style={{ position: 'absolute', left: -270, bottom: -250, width: 400, height: 400, borderRadius: '50%', background: '#FF811A' }} />
        <motion.div aria-hidden initial={false} animate={{ opacity: blue ? .18 : 1 }} transition={{ duration: .6 }}
          style={{ position: 'absolute', right: -280, top: -360, width: 700, height: 700, borderRadius: '50%', background: blue ? '#fff' : '#4681FF' }} />

        {split && !rec && (
          <div style={{ position: 'absolute', left: 32, top: 32, bottom: 32, width: W - PANEL_W - 64, border: '3px dashed rgba(15,27,61,.25)', borderRadius: 36, display: 'grid', placeItems: 'center', color: 'rgba(15,27,61,.35)', fontWeight: 800, fontSize: 30, letterSpacing: '.2em', background: 'rgba(255,255,255,.5)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}><User size={34} /> {tx({ uz: 'SPIKER', ru: 'СПИКЕР' })} · 60%</span>
          </div>
        )}
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div key={i + lang} custom={dir}
            initial={reduce ? false : { opacity: 0, x: dir * 50 }} animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -50 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={split
              ? { position: 'absolute', top: 0, right: 0, width: PANEL_W, height: H, overflow: 'hidden', background: blue ? 'transparent' : 'rgba(251,248,242,.94)' }
              : { position: 'absolute', inset: 0, padding: '120px 130px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <StepCtx.Provider value={stepsOn ? step : 99}>
              {split
                ? <div style={{ width: VIRT_W, height: H * VIRT_W / PANEL_W, transform: `scale(${PANEL_W / VIRT_W})`, transformOrigin: '0 0', padding: '90px 50px 80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><S.C /></div>
                : <S.C />}
            </StepCtx.Provider>
          </motion.div>
        </AnimatePresence>

        {/* шапка: логотип + раздел урока. Остаётся и в записи. */}
        <div style={{ position: 'absolute', left: split ? W - PANEL_W + 16 : 60, top: 40, display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* два файла логотипа: тёмная надпись для светлых слайдов, белая — для синих; значок цветной в обоих */}
          <span style={{ position: 'relative', display: 'block', height: 38 }}>
            <img src="./logo-h.png" alt="razgovor.uz" style={{ height: 38, display: 'block', opacity: blue ? 0 : 1, transition: 'opacity .4s' }} />
            <img src="./logo-h-white.png" alt="" aria-hidden style={{ height: 38, position: 'absolute', left: 0, top: 0, opacity: blue ? 1 : 0, transition: 'opacity .4s' }} />
          </span>
          {!rec && <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink3)' }}>{tx(part.title)} · {part.time}</span>}
        </div>
      </div>

      {/* панель управления — вне холста, в запись не попадает */}
      {!rec && (
        <>
          <div style={{ position: 'fixed', top: 14, right: 14, display: 'flex', gap: 8, zIndex: 10 }}>
            {(['uz', 'ru'] as const).map(l => <button key={l} className={'btn' + (lang === l ? ' on' : '')} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
            <button className={'btn' + (split ? ' on' : '')} title={tx({ uz: 'Ekran: to\'liq yoki 60/40 (P)', ru: 'Экран: весь или 60/40 (P)' })} onClick={() => setSplit(v => !v)}><Columns2 size={14} /> {split ? '60/40' : tx({ uz: 'To\'liq', ru: 'Весь экран' })}</button>
            <button className={'btn' + (stepsOn ? ' on' : '')} title={tx({ uz: 'Bosqichma-bosqich chiqish (S)', ru: 'Пошаговое появление (S)' })} onClick={() => { setStepsOn(v => !v); setStep(0); }}><Layers size={14} /> {stepsOn ? tx({ uz: 'Bosqich: yoq', ru: 'Шаги: вкл' }) : tx({ uz: 'Bosqich: o\'ch', ru: 'Шаги: выкл' })}</button>
            <button className="btn" style={{ background: '#FF811A', borderColor: '#FF811A' }} title={tx({ uz: 'To\'liq matn (T)', ru: 'Полный текст (T)' })} onClick={() => setText(true)}><FileText size={14} /> {tx({ uz: 'Ssenariy', ru: 'Сценарий' })}</button>
            <button className={'btn' + (notes ? ' on' : '')} title={tx({ uz: 'Spiker uchun eslatma (N)', ru: 'Заметки спикеру (N)' })} onClick={() => setNotes(v => !v)}><StickyNote size={14} /> {tx({ uz: 'Eslatma', ru: 'Заметки' })}</button>
            <button className="btn" title={tx({ uz: 'Yozish rejimi (H)', ru: 'Режим записи (H)' })} onClick={() => setRec(true)}><Video size={14} /></button>
            <button className="btn" title="F" onClick={() => document.documentElement.requestFullscreen?.()}><Maximize2 size={14} /></button>
          </div>
          <div style={{ position: 'fixed', bottom: 14, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, zIndex: 10, pointerEvents: 'none' }}>
            <button className="btn" style={{ pointerEvents: 'auto' }} aria-label="Orqaga" onClick={back}><ChevronLeft size={16} /></button>
            <span className="btn" style={{ cursor: 'default' }}>{i + 1}/{SLIDES.length} · {tx(S.title)}{stepsOn && (S.steps ?? 0) > 0 ? ` · ${step}/${S.steps}` : ''}</span>
            <button className="btn" style={{ pointerEvents: 'auto' }} aria-label="Oldinga" onClick={fwd}><ChevronRight size={16} /></button>
          </div>
          {notes && S.note && (
            <div style={{ position: 'fixed', left: 14, bottom: 60, maxWidth: 560, maxHeight: '60vh', overflow: 'auto', background: 'rgba(11,20,51,.94)', color: '#fff', border: '1px solid rgba(255,255,255,.2)', borderRadius: 14, padding: '14px 16px', fontSize: 14, lineHeight: 1.55, zIndex: 10, whiteSpace: 'pre-line' }}>
              <b style={{ display: 'block', marginBottom: 4, color: '#FFD23F' }}>{tx({ uz: 'Spiker uchun', ru: 'Для спикера' })}</b>{tx(S.note)}
            </div>
          )}
        </>
      )}
      {text && <ScriptView onClose={() => setText(false)} onJump={k => { setText(false); go(k); }} />}
    </div>
  );
}

export default function App() { return <SettingsProvider><Deck /></SettingsProvider>; }
