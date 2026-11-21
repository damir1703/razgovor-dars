// Полная текстовая версия урока: сценарий спикера по слайдам. Открывается кнопкой или ?text=1.
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Copy, Check, Printer } from 'lucide-react';
import { useSettings, useTx } from './lib/ctx';
import { SLIDES, PARTS } from './slides';
import { SCRIPT, INTRO } from './script';

export function ScriptView({ onClose, onJump }: { onClose: () => void; onJump: (i: number) => void }) {
  const tx = useTx();
  const { lang, setLang } = useSettings();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  }, [onClose]);

  const plain = () => {
    const out: string[] = [tx({ uz: 'Razgovor.uz · bepul dars ssenariysi (20 daqiqa)', ru: 'Razgovor.uz · сценарий бесплатного урока (20 минут)' }), '', tx(INTRO), ''];
    SLIDES.forEach((s, i) => {
      if (i === 0 || SLIDES[i - 1].part !== s.part) out.push('', `=== ${tx(PARTS[s.part].title)} · ${PARTS[s.part].time} ===`, '');
      out.push(`${i + 1}. ${tx(s.title)} · ${SCRIPT[i].t}`, tx(SCRIPT[i].say));
      if (s.note) out.push(`(${tx({ uz: 'Eslatma', ru: 'Заметка' })}: ${tx(s.note).replace(/^\d+:\d+\.\s*/, '')})`);
      out.push('');
    });
    return out.join('\n');
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(plain()); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* буфер недоступен */ }
  };

  // рендерим прямо в body: при печати слайды скрываются, остаётся только документ
  return createPortal(
    <div className="script" role="dialog" aria-modal="true" aria-label={tx({ uz: 'Ssenariy', ru: 'Сценарий' })}>
      <div className="script-bar">
        <img src="./logo-h.png" alt="razgovor.uz" style={{ height: 22 }} />
        <span style={{ flex: 1 }} />
        {(['uz', 'ru'] as const).map(l => <button key={l} className={'sbtn' + (lang === l ? ' on' : '')} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
        <button className="sbtn" onClick={copy}>{copied ? <Check size={15} /> : <Copy size={15} />} {copied ? tx({ uz: 'Nusxalandi', ru: 'Скопировано' }) : tx({ uz: 'Matnni nusxalash', ru: 'Скопировать текст' })}</button>
        <button className="sbtn" onClick={() => print()}><Printer size={15} /> {tx({ uz: 'Chop etish / PDF', ru: 'Печать / PDF' })}</button>
        <button className="sbtn on" onClick={onClose}><X size={15} /> {tx({ uz: 'Slaydlarga qaytish', ru: 'К слайдам' })}</button>
      </div>
      <div className="script-doc">
        <h1>{tx({ uz: 'Bepul dars ssenariysi', ru: 'Сценарий бесплатного урока' })}</h1>
        <p className="script-sub">{tx({ uz: '20 daqiqa · 30 slayd · «3 shablon → 48 gap»', ru: '20 минут · 30 слайдов · «3 шаблона → 48 фраз»' })}</p>
        <div className="script-intro"><b>{tx({ uz: 'Kontekst', ru: 'Контекст' })}</b>{tx(INTRO)}</div>
        <p className="script-hint">{tx({ uz: '[kvadrat qavs] ichidagi so\'zlar o\'qilmaydi: bu spiker uchun ko\'rsatma. Slayd raqamini bossangiz, o\'sha slayd ochiladi.', ru: 'Слова в [квадратных скобках] не читаются: это указания спикеру. Нажмите на номер слайда, чтобы открыть его.' })}</p>
        {SLIDES.map((s, i) => (
          <section key={i}>
            {(i === 0 || SLIDES[i - 1].part !== s.part) && <h2>{tx(PARTS[s.part].title)} <span>{PARTS[s.part].time}</span></h2>}
            <article>
              <button className="script-num" onClick={() => onJump(i)} title={tx({ uz: 'Slaydni ochish', ru: 'Открыть слайд' })}>{i + 1}</button>
              <div>
                <h3>{tx(s.title)} <span>{SCRIPT[i].t}</span></h3>
                <p>{tx(SCRIPT[i].say)}</p>
                {s.note && <p className="script-note">{tx(s.note).replace(/^\d+:\d+\.\s*/, '')}</p>}
              </div>
            </article>
          </section>
        ))}
      </div>
    </div>,
    document.body,
  );
}
