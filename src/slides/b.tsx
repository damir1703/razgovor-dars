// Часть 2: сам урок — 3 шаблона × 8 глаголов, проговариваем вслух (3:30–14:00)
import { useState, type ReactNode } from 'react';
import { Mic, Volume2, X, Check } from 'lucide-react';
import { useTx, useStep, type L } from '../lib/ctx';
import { In, Head } from '../lib/common';
import { Step } from '../lib/step';
import { patterns, verbs, dialog, SENTENCES, SENTENCES_NEG, type Pattern } from '../data';

const SayIt = ({ children }: { children: ReactNode }) => (
  <span className="chip" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: '#fff', fontSize: 28 }}><Mic size={28} /> {children}</span>
);

export function LessonTitle() {
  const tx = useTx();
  return (
    <div style={{ maxWidth: 1500 }}>
      <In><div className="eyebrow">{tx({ uz: 'Dars boshlandi', ru: 'Урок начинается' })}</div></In>
      <In d={0.08}><h2 className="h-xl" style={{ marginTop: 28 }}>{tx({ uz: 'So\'z emas,', ru: 'Учим не слова,' })} <span className="under">{tx({ uz: 'qolip', ru: 'а шаблоны' })}</span> {tx({ uz: 'yodlaymiz', ru: '' })}</h2></In>
      <In d={0.16}><p className="lead" style={{ fontSize: 44 }}>3 {tx({ uz: 'qolip', ru: 'шаблона' })} × 8 {tx({ uz: 'fe\'l', ru: 'глаголов' })} = <b className="o">{SENTENCES} {tx({ uz: 'ta tayyor gap', ru: 'готовые фразы' })}</b></p></In>
      <In d={0.24}><div style={{ marginTop: 40 }}><SayIt>{tx({ uz: 'Daftar kerak emas. Ovozingiz kerak.', ru: 'Тетрадь не нужна. Нужен ваш голос.' })}</SayIt></div></In>
    </div>
  );
}

export function Secret() {
  const tx = useTx();
  const forms = ['я работаю', 'ты работаешь', 'он работает', 'мы работаем', 'вы работаете', 'они работают'];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Sir', ru: 'Секрет' })} title={<>{tx({ uz: 'Qolipda fe\'l', ru: 'В шаблоне глагол' })} <span className="b">{tx({ uz: 'o\'zgarmaydi', ru: 'не меняется' })}</span></>} />
      <div className="two-col" style={{ alignItems: 'stretch' }}>
        <Step n={1}>
          <div className="card" style={{ height: '100%' }}>
            <div className="small" style={{ color: 'var(--bad)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10 }}><X size={26} /> {tx({ uz: 'DARSLIKDA: 6 XIL SHAKL', ru: 'В УЧЕБНИКЕ: 6 ФОРМ' })}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 30px', marginTop: 22 }}>
              {forms.map(f => <div key={f} style={{ fontSize: 40, fontWeight: 700, color: 'var(--ink3)' }}>{f.split(' ')[0]} <span style={{ color: 'var(--ink2)' }}>{f.split(' ')[1].slice(0, 6)}</span><span style={{ color: 'var(--bad)' }}>{f.split(' ')[1].slice(6)}</span></div>)}
            </div>
            <p className="body" style={{ marginTop: 22, fontSize: 28 }}>{tx({ uz: 'Har safar oxirini o\'ylaysiz. Shuning uchun gap kech chiqadi.', ru: 'Каждый раз думаете об окончании. Поэтому фраза запаздывает.' })}</p>
          </div>
        </Step>
        <Step n={2}>
          <div className="card card-blue" style={{ height: '100%' }}>
            <div className="small" style={{ color: 'var(--yellow)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10 }}><Check size={26} /> {tx({ uz: 'QOLIPDA: BITTA SHAKL', ru: 'В ШАБЛОНЕ: ОДНА ФОРМА' })}</div>
            <div style={{ marginTop: 26, display: 'grid', gap: 14 }}>
              {patterns.map(p => <div key={p.id} style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-.02em' }}><span style={{ color: 'var(--yellow)' }}>{p.ru}</span> работать{p.q ? '?' : ''}</div>)}
            </div>
            <p className="body" style={{ marginTop: 24, fontSize: 28 }}>{tx({ uz: 'Fe\'l lug\'atdagi shaklida qoladi: работать.', ru: 'Глагол остаётся в словарной форме: работать.' })}</p>
          </div>
        </Step>
      </div>
    </div>
  );
}

/** Слайд одного шаблона: формула → произношение → 3 примера по шагам */
export const patternSlide = (idx: number, ex: number[]) => function PatternSlide() {
  const tx = useTx();
  const p = patterns[idx];
  return (
    <div>
      <In><div className="eyebrow">{idx + 1}-{tx({ uz: 'qolip', ru: 'й шаблон' })}</div></In>
      <div className="two-col" style={{ gridTemplateColumns: '.92fr 1.08fr', marginTop: 28, alignItems: 'stretch', gap: 44 }}>
        <In d={0.06}>
          <div className={'card ' + (idx === 1 ? 'card-cream' : 'card-blue')} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '44px 48px' }}>
            <div style={{ fontSize: 108, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1 }}>{p.ru}</div>
            <div style={{ fontSize: 50, fontWeight: 800, marginTop: 14, opacity: .75 }}>+ {tx({ uz: 'fe\'l', ru: 'глагол' })}{p.q ? ' ?' : ''}</div>
            <div style={{ marginTop: 34, fontSize: 40, fontWeight: 700 }}>= {tx(p.uz)}</div>
            <Step n={1}><div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 14, fontSize: 34, fontWeight: 700 }}><Volume2 size={36} /> {tx({ uz: 'Aytiladi:', ru: 'Звучит:' })} <span style={{ background: idx === 1 ? '#fff' : 'rgba(255,255,255,.18)', borderRadius: 14, padding: '4px 18px' }}>[{p.say}]</span></div></Step>
          </div>
        </In>
        <div style={{ display: 'grid', gap: 20 }}>
          {ex.map((v, k) => (
            <Step n={k + 2} key={v}>
              <div className="card" style={{ padding: '26px 34px' }}>
                <div className="ru" style={{ fontSize: 58 }}><span className={idx === 1 ? 'o' : 'b'}>{p.ru}</span> {verbs[v].ru}{p.q ? '?' : '.'}</div>
                <div className="uz" style={{ marginTop: 6 }}>{verbs[v][p.id]}</div>
              </div>
            </Step>
          ))}
          <Step n={ex.length + 2}><SayIt>{tx({ uz: 'Men bilan birga ovoz chiqarib ayting', ru: 'Повторяйте вслух вместе со мной' })}</SayIt></Step>
        </div>
      </div>
    </div>
  );
};

export function Verbs() {
  const tx = useTx();
  return (
    <div>
      <Head eyebrow={tx({ uz: '8 ta fe\'l', ru: '8 глаголов' })} title={tx({ uz: 'Har kuni kerak bo\'ladigan fe\'llar', ru: 'Глаголы, которые нужны каждый день' })} />
      <div className="cols4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {verbs.map((v, k) => (
          <Step n={k < 4 ? 1 : 2} key={v.ru}>
            <div className="card" style={{ padding: '26px 28px', height: '100%' }}>
              <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-.02em' }}>{v.ru}</div>
              <div className="say" style={{ marginTop: 4 }}>[{v.say}]</div>
              <div className="uz" style={{ marginTop: 10 }}>{v.uz}</div>
            </div>
          </Step>
        ))}
      </div>
      <Step n={3}><p className="body" style={{ marginTop: 26 }}>{tx({ uz: 'Urg\'usiz «о» «а» bo\'lib eshitiladi: yoziladi «спросить», aytiladi', ru: 'Безударное «о» звучит как «а»: пишется «спросить», звучит' })} <b className="o">[спраси́ть]</b>.</p></Step>
    </div>
  );
}

function sentence(p: Pattern, v: number, neg: boolean) {
  return `${neg ? p.neg : p.ru} ${verbs[v].ru}${p.q && !neg ? '?' : '.'}`;
}

/** Конструктор: спикер нажимает шаблон и глагол — на экране собирается фраза */
export function Builder() {
  const tx = useTx();
  const [pi, setPi] = useState(0);
  const [vi, setVi] = useState(0);
  const p = patterns[pi];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Konstruktor', ru: 'Конструктор' })} title={<>3 × 8 = <span className="b">{SENTENCES} {tx({ uz: 'ta gap', ru: 'фразы' })}</span></>} />
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 34, alignItems: 'start' }} className="two-col">
        <div style={{ display: 'grid', gap: 14 }}>
          {patterns.map((q, k) => <button key={q.id} className={'pick o' + (k === pi ? ' on' : '')} aria-pressed={k === pi} onClick={() => setPi(k)}>{q.ru}</button>)}
        </div>
        <div>
          <div className="cols4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {verbs.map((v, k) => <button key={v.ru} className={'pick' + (k === vi ? ' on' : '')} aria-pressed={k === vi} style={{ fontSize: 30, padding: '16px 20px' }} onClick={() => setVi(k)}>{v.ru}</button>)}
          </div>
          <div className="card card-blue" style={{ marginTop: 22, padding: '34px 44px', minHeight: 250 }} aria-live="polite">
            <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05 }}><span style={{ color: 'var(--yellow)' }}>{p.ru}</span> {verbs[vi].ru}{p.q ? '?' : '.'}</div>
            <div style={{ fontSize: 36, fontWeight: 600, marginTop: 14, opacity: .9 }}>{verbs[vi][p.id]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Negation() {
  const tx = useTx();
  const ex: [number, number][] = [[0, 0], [1, 0], [2, 7]];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Bitta so\'z qo\'shamiz', ru: 'Добавляем одно слово' })} title={<>{tx({ uz: '«Не» qo\'shing:', ru: 'Добавьте «не»:' })} {SENTENCES} + {SENTENCES} = <span className="o">{SENTENCES_NEG} {tx({ uz: 'ta gap', ru: 'фраз' })}</span></>} />
      <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {ex.map(([pi, v], k) => {
          const p = patterns[pi];
          return (
            <Step n={k + 1} key={k}>
              <div className="card" style={{ height: '100%', padding: '30px 32px' }}>
                <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--ink3)', textDecoration: 'line-through' }}>{sentence(p, v, false)}</div>
                <div className="ru" style={{ fontSize: 52, marginTop: 14 }}><span className="o">{p.neg}</span><br />{verbs[v].ru}.</div>
                <div className="uz" style={{ marginTop: 12 }}>{tx(p.negUz)}</div>
              </div>
            </Step>
          );
        })}
      </div>
      <Step n={4}><p className="body" style={{ marginTop: 26 }}>{tx({ uz: 'Diqqat: «не можно» deyilmaydi. To\'g\'risi:', ru: 'Внимание: «не можно» не говорят. Правильно:' })} <b className="o">нельзя</b> [нильзя́].</p></Step>
    </div>
  );
}

export function Practice() {
  const tx = useTx();
  const step = useStep();
  const qs: { uz: L; a: string }[] = [
    { uz: { uz: 'Men to\'lamoqchiman', ru: 'Я хочу оплатить' }, a: 'Я хочу оплатить.' },
    { uz: { uz: 'Kirsam bo\'ladimi?', ru: 'Можно войти?' }, a: 'Можно войти?' },
    { uz: { uz: 'Men qo\'ng\'iroq qilishim kerak', ru: 'Мне нужно позвонить' }, a: 'Мне нужно позвонить.' },
    { uz: { uz: 'Men ishlamoqchi emasman', ru: 'Я не хочу работать' }, a: 'Я не хочу работать.' },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Mashq', ru: 'Практика' })} title={tx({ uz: 'Endi siz. Ruscha ayting', ru: 'Теперь вы. Скажите по-русски' })} lead={tx({ uz: 'Javobni avval o\'zingiz ovoz chiqarib ayting, keyin tekshiramiz.', ru: 'Сначала скажите ответ вслух сами, потом проверим.' })} />
      <div style={{ display: 'grid', gap: 16 }}>
        {qs.map((q, k) => {
          const shown = step >= k * 2 + 1, open = step >= k * 2 + 2;
          return (
            <div key={k} className="card" style={{ padding: '20px 32px', display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center', opacity: shown ? 1 : 0, transition: 'opacity .4s' }}>
              <span style={{ fontSize: 38, fontWeight: 700 }}>{tx(q.uz)}</span>
              <span style={{ fontSize: 38, color: 'var(--ink3)', textAlign: 'center' }}>→</span>
              <span style={{ fontSize: 44, fontWeight: 800, color: 'var(--blue-d)', opacity: open ? 1 : 0, filter: open ? 'none' : 'blur(8px)', transition: 'opacity .4s, filter .4s' }}>{q.a}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Dialog() {
  const tx = useTx();
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Jonli suhbat', ru: 'Живой разговор' })} title={tx({ uz: 'Kassada: to\'q sariq gaplarni siz aytasiz', ru: 'У кассы: оранжевые реплики говорите вы' })} />
      <div style={{ display: 'grid', gap: 10 }}>
        {dialog.map((d, k) => (
          <Step n={k + 1} key={k}>
            <div style={{ display: 'flex', justifyContent: d.me ? 'flex-start' : 'flex-end' }}>
              <div style={{ maxWidth: 1250, borderRadius: d.me ? '28px 28px 28px 8px' : '28px 28px 8px 28px', padding: '10px 30px 12px', background: d.me ? 'var(--orange)' : '#fff', color: d.me ? '#fff' : 'var(--ink)', border: d.me ? 'none' : '2px solid var(--line)', boxShadow: '0 12px 30px rgba(15,27,61,.07)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.2 }}><span style={{ fontSize: 20, letterSpacing: '.1em', opacity: .7, marginRight: 14, verticalAlign: 'middle' }}>{d.me ? tx({ uz: 'SIZ', ru: 'ВЫ' }) : tx({ uz: 'KASSIR', ru: 'КАССИР' })}</span>{d.ru}</div>
                <div style={{ fontSize: 24, fontWeight: 600, opacity: .82 }}>{d.uz}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function Result() {
  const tx = useTx();
  const st = [
    { n: '3', l: { uz: 'qolip', ru: 'шаблона' } },
    { n: '8', l: { uz: 'fe\'l', ru: 'глаголов' } },
    { n: String(SENTENCES_NEG), l: { uz: 'tayyor gap', ru: 'готовых фраз' } },
    { n: '1', l: { uz: 'jonli dialog', ru: 'живой диалог' } },
  ];
  return (
    <div>
      <In><div className="eyebrow">{tx({ uz: '10 daqiqada natija', ru: 'Результат за 10 минут' })}</div></In>
      <In d={0.06}><h2 className="h-xl" style={{ marginTop: 26, fontSize: 96 }}>{tx({ uz: 'Siz hozirgina', ru: 'Вы только что' })} <span className="under">{tx({ uz: 'ruscha gapirdingiz', ru: 'говорили по-русски' })}</span></h2></In>
      <div className="cols4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 44 }}>
        {st.map((s, k) => (
          <Step n={1} key={k}>
            <div className="card" style={{ padding: '26px 30px' }}>
              <div className="num" style={{ fontSize: 120, lineHeight: 1, color: 'var(--yellow)' }}>{s.n}</div>
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 6 }}>{tx(s.l)}</div>
            </div>
          </Step>
        ))}
      </div>
      <Step n={2}><p className="lead" style={{ fontSize: 40 }}>{tx({ uz: 'Bu kursimizdagi bitta darsning bir qismi, xolos.', ru: 'И это только часть одного урока нашего курса.' })}</p></Step>
    </div>
  );
}

export function Ceiling() {
  const tx = useTx();
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Lekin…', ru: 'Но…' })} title={<>{tx({ uz: 'Siz gapirdingiz.', ru: 'Вы сказали.' })} <span className="o">{tx({ uz: 'Endi sizga javob berishadi', ru: 'Теперь вам ответят' })}</span></>} />
      <div style={{ display: 'grid', gap: 18 }}>
        <Step n={1}>
          <div style={{ display: 'flex' }}><div style={{ borderRadius: '30px 30px 30px 8px', padding: '18px 34px', background: 'var(--orange)', color: '#fff', fontSize: 46, fontWeight: 800 }}>Я хочу купить билет.</div></div>
        </Step>
        <Step n={2}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}><div className="card" style={{ borderRadius: '30px 30px 8px 30px', padding: '22px 36px', maxWidth: 1250 }}>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '.1em', color: 'var(--ink3)' }}>{tx({ uz: 'KASSIR · TEZ GAPIRADI', ru: 'КАССИР · ГОВОРИТ БЫСТРО' })}</div>
            <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.2 }}>Вам на какое число? Туда и обратно? Плацкарт или купе? Паспорт с собой?</div>
          </div></div>
        </Step>
      </div>
      <div className="two-col" style={{ marginTop: 30, alignItems: 'center' }}>
        <Step n={3}><p className="h-md" style={{ fontSize: 50 }}>{tx({ uz: 'Tushundingizmi? Javob bera olasizmi?', ru: 'Поняли? Сможете ответить?' })}</p></Step>
        <Step n={4}><p className="body" style={{ fontSize: 34, color: 'var(--ink)' }}>{tx({ uz: 'Buni yodlab bo\'lmaydi. Buni faqat jonli odam bilan har kuni gaplashib o\'rganasiz.', ru: 'Это нельзя выучить наизусть. Этому учатся только в ежедневном разговоре с живым человеком.' })}</p></Step>
      </div>
    </div>
  );
}
