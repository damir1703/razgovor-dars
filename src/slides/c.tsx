// Часть 3: методика и продажа курса (14:00–20:00)
import { motion } from 'framer-motion';
import { ArrowRight, Music, ShieldCheck, Clock, Wallet, Wifi, RotateCcw, Play, Send, PhoneCall, ClipboardCheck, MousePointerClick } from 'lucide-react';
import { useTx, type L } from '../lib/ctx';
import { In, Head } from '../lib/common';
import { Step } from '../lib/step';
import { DAYS, LIVE, VIDEO, KARAOKE, HOURS, RESULTS_CHANNEL, SENTENCES_NEG, INSTALL_MONTHS, tariffs, stack, pains, sp } from '../data';

export function TwoPaths() {
  const tx = useTx();
  const alone: L[] = [
    { uz: 'So\'z daftari va YouTube', ru: 'Тетрадь со словами и YouTube' },
    { uz: 'Gaplashadigan odam yo\'q', ru: 'Разговаривать не с кем' },
    { uz: 'Xatoni hech kim aytmaydi', ru: 'Об ошибках никто не скажет' },
    { uz: 'Bir yildan keyin ham: «tushunaman, lekin…»', ru: 'Через год всё то же: «понимаю, но…»' },
  ];
  const withUs: L[] = [
    { uz: 'Har hafta jonli darslar', ru: 'Живые уроки каждую неделю' },
    { uz: 'Ustoz bilan yakkama-yakka gapirasiz', ru: 'Говорите с преподавателем один на один' },
    { uz: 'Xato o\'sha zahoti tuzatiladi', ru: 'Ошибку исправляют сразу' },
    { uz: `${DAYS} kunda razgovor darajasi`, ru: `Разговорный уровень за ${DAYS} дней` },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Ikki yo\'l', ru: 'Два пути' })} title={tx({ uz: 'Bugundan keyin nima qilasiz?', ru: 'Что вы сделаете после этого урока?' })} />
      <div className="two-col">
        <Step n={1}>
          <div className="card" style={{ height: '100%' }}>
            <div className="h-md" style={{ color: 'var(--ink3)' }}>{tx({ uz: '1. O\'zingiz davom etasiz', ru: '1. Продолжаете сами' })}</div>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>{alone.map((a, k) => <div className="tick" key={k} style={{ fontSize: 32 }}>{tx(a)}</div>)}</div>
          </div>
        </Step>
        <Step n={2}>
          <div className="card card-blue" style={{ height: '100%' }}>
            <div className="h-md">{tx({ uz: '2. Razgovor.uz bilan', ru: '2. Вместе с Razgovor.uz' })}</div>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>{withUs.map((a, k) => <div className="tick" key={k} style={{ fontSize: 32, color: '#fff' }}>{tx(a)}</div>)}</div>
          </div>
        </Step>
      </div>
    </div>
  );
}

export function Method() {
  const tx = useTx();
  const rows: { p: L; s: L; d: L }[] = [
    { p: { uz: 'So\'z yodlaysiz, gap chiqmaydi', ru: 'Учите слова, фраза не выходит' }, s: { uz: `${VIDEO} ta video dars + lug'atlar`, ru: `${VIDEO} видеоуроков + словари` }, d: { uz: 'Tayyor qoliplar, audio va matnli lug\'at', ru: 'Готовые шаблоны, аудио- и текстовый словарь' } },
    { p: { uz: 'Tinglaysiz, lekin gapirmaysiz', ru: 'Слушаете, но не говорите' }, s: { uz: `${LIVE} ta jonli razgovor darsi`, ru: `${LIVE} живых разговорных уроков` }, d: { uz: 'Darsda ustoz emas, siz gapirasiz', ru: 'На уроке говорит не преподаватель, а вы' } },
    { p: { uz: 'Xatoni hech kim tuzatmaydi', ru: 'Ошибки никто не исправляет' }, s: { uz: 'Individual dars: 15, 30 yoki 60 daqiqa', ru: 'Индивидуальный урок: 15, 30 или 60 минут' }, d: { uz: 'Ustoz aynan sizning talaffuzingiz bilan ishlaydi', ru: 'Преподаватель работает именно с вашим произношением' } },
    { p: { uz: 'Nazorat yo\'q, tashlab qo\'yasiz', ru: 'Нет контроля, бросаете' }, s: { uz: 'O\'qituvchi + nazoratchi ustoz', ru: 'Преподаватель + куратор' }, d: { uz: `Har kuni ${HOURS} aloqada`, ru: `На связи каждый день ${HOURS}` } },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Razgovor.uz metodikasi', ru: 'Методика Razgovor.uz' })} title={tx({ uz: '4 ta sabab, 4 ta yechim', ru: '4 причины, 4 решения' })} />
      <div style={{ display: 'grid', gap: 16 }}>
        {rows.map((r, k) => (
          <Step n={k + 1} key={k}>
            <div style={{ display: 'grid', gridTemplateColumns: '.8fr 70px 1.2fr', alignItems: 'center' }} className="two-col">
              <div className="card" style={{ padding: '22px 30px', fontSize: 30, fontWeight: 700, color: 'var(--ink3)', textDecoration: 'line-through', textDecorationColor: 'var(--bad)' }}>{tx(r.p)}</div>
              <ArrowRight size={44} color="var(--orange)" style={{ justifySelf: 'center' }} />
              <div className="card card-blue" style={{ padding: '18px 30px' }}>
                <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-.02em' }}>{tx(r.s)}</div>
                <div style={{ fontSize: 26, fontWeight: 600, opacity: .85 }}>{tx(r.d)}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function Week() {
  const tx = useTx();
  const kinds = {
    ind: { c: 'var(--blue)', t: { uz: 'Individual jonli dars', ru: 'Индивидуальный живой урок' } },
    grp: { c: 'var(--orange)', t: { uz: 'Guruh jonli darsi', ru: 'Групповой живой урок' } },
    mus: { c: '#8B5CF6', t: { uz: 'Musiqali dars', ru: 'Музыкальный урок' } },
    off: { c: 'transparent', t: { uz: 'Dam olish', ru: 'Отдых' } },
  } as const;
  const days: { d: L; k: keyof typeof kinds }[] = [
    { d: { uz: 'Du', ru: 'Пн' }, k: 'ind' }, { d: { uz: 'Se', ru: 'Вт' }, k: 'grp' }, { d: { uz: 'Chor', ru: 'Ср' }, k: 'ind' },
    { d: { uz: 'Pay', ru: 'Чт' }, k: 'grp' }, { d: { uz: 'Ju', ru: 'Пт' }, k: 'ind' }, { d: { uz: 'Sha', ru: 'Сб' }, k: 'mus' }, { d: { uz: 'Yak', ru: 'Вс' }, k: 'off' },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Bir haftangiz', ru: 'Ваша неделя' })} title={<>{tx({ uz: 'Haftada', ru: 'В неделю' })} <span className="b">{tx({ uz: '5 kun jonli dars', ru: '5 дней живых уроков' })}</span> + {tx({ uz: 'musiqali dars', ru: 'музыкальный урок' })}</>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 14 }}>
        {days.map((d, k) => {
          const kind = kinds[d.k];
          return (
            <Step n={d.k === 'ind' ? 1 : d.k === 'grp' ? 2 : d.k === 'mus' ? 3 : 0} key={k}>
              <div style={{ height: 300, borderRadius: 30, padding: '22px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: d.k === 'off' ? 'transparent' : kind.c, border: d.k === 'off' ? '3px dashed var(--line)' : 'none', color: d.k === 'off' ? 'var(--ink3)' : '#fff' }}>
                <div style={{ fontSize: 40, fontWeight: 800 }}>{tx(d.d)}</div>
                <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>{tx(kind.t)}</div>
              </div>
            </Step>
          );
        })}
      </div>
      <Step n={4}>
        <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
          <span className="chip"><Play size={26} color="var(--blue)" /> {tx({ uz: `${VIDEO} ta video dars: istalgan vaqtda`, ru: `${VIDEO} видеоуроков: в любое время` })}</span>
          <span className="chip"><Clock size={26} color="var(--orange)" /> {tx({ uz: `Dars vaqtini o'zingiz tanlaysiz: ${HOURS}`, ru: `Время урока выбираете сами: ${HOURS}` })}</span>
        </div>
      </Step>
      <p className="small" style={{ marginTop: 16 }}>{tx({ uz: 'Kunlar namuna sifatida ko\'rsatilgan.', ru: 'Дни показаны для примера.' })}</p>
    </div>
  );
}

export function Karaoke() {
  const tx = useTx();
  const words = ['Я', 'хочу', 'говорить', 'по-русски'];
  return (
    <div className="two-col" style={{ alignItems: 'center', gap: 60 }}>
      <div>
        <In><div className="eyebrow">{tx({ uz: 'Faqat bizda', ru: 'Только у нас' })}</div></In>
        <In d={0.06}><h2 className="h-lg" style={{ marginTop: 22, fontSize: 80 }}>{KARAOKE} {tx({ uz: 'ta musiqali dars:', ru: 'музыкальных уроков:' })}<br /><span className="b">{tx({ uz: 'qo\'shiq aytib o\'rganasiz', ru: 'учитесь, подпевая' })}</span></h2></In>
        <In d={0.12}><p className="lead">{tx({ uz: 'Qo\'shiqdagi so\'z yodlanmaydi. U o\'zi esda qoladi.', ru: 'Слово из песни не зубрят. Оно запоминается само.' })}</p></In>
        <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
          {pains.map((p, k) => <Step n={k + 1} key={k}><span className="chip" style={{ fontSize: 24 }}><Music size={22} color="var(--orange)" /> {tx(p.k)}</span></Step>)}
        </div>
      </div>
      <In d={0.15}>
        <div className="card card-blue" style={{ padding: '60px 50px', textAlign: 'center' }}>
          <Music size={64} color="var(--yellow)" />
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, marginTop: 22 }}>
            {words.map((w, k) => (
              <motion.span key={w} style={{ display: 'inline-block', marginRight: 18 }} animate={{ color: ['rgba(255,255,255,.4)', '#FFD23F', '#FFFFFF'] }} transition={{ duration: 3.2, times: [0, .25, 1], delay: k * 0.7, repeat: Infinity, repeatDelay: 1.2 }}>{w}</motion.span>
            ))}
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, opacity: .85, marginTop: 18 }}>{tx({ uz: 'Men ruscha gapirmoqchiman', ru: 'Я хочу говорить по-русски' })}</div>
        </div>
      </In>
    </div>
  );
}

export function Stack() {
  const tx = useTx();
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Kurs tarkibi', ru: 'Состав курса' })} title={<>{tx({ uz: 'Har bir tarifda', ru: 'В каждом тарифе' })} <span className="b">{tx({ uz: 'nima bor', ru: 'что есть' })}</span></>} />
      <div className="two-col" style={{ gap: '14px 28px' }}>
        {stack.map((s, k) => (
          <Step n={Math.floor(k / 2) + 1} key={k}>
            <div className="card" style={{ padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 20, borderRadius: 26 }}>
              <span className={'badge' + (k % 3 === 1 ? ' o' : '')} style={{ width: 52, height: 52, borderRadius: 16, fontSize: 24 }}>{k + 1}</span>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.015em' }}>{tx(s.k)}</div>
                <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--ink2)' }}>{tx(s.d)}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function Guarantee() {
  const tx = useTx();
  return (
    <div className="two-col" style={{ gridTemplateColumns: '360px 1fr', alignItems: 'center', gap: 70 }}>
      <In><div style={{ width: 340, height: 340, borderRadius: '50%', background: 'var(--yellow)', color: '#0F1B3D', display: 'grid', placeItems: 'center' }}><ShieldCheck size={190} strokeWidth={1.6} /></div></In>
      <div>
        <In d={0.05}><div className="eyebrow">{tx({ uz: 'Kafolat', ru: 'Гарантия' })}</div></In>
        <In d={0.1}><h2 className="h-xl" style={{ fontSize: 92, marginTop: 24 }}>{tx({ uz: 'Natija', ru: 'Результат закреплён' })} <span className="under">{tx({ uz: 'shartnomada', ru: 'в договоре' })}</span> {tx({ uz: 'yoziladi', ru: '' })}</h2></In>
        <Step n={1}><p className="lead" style={{ fontSize: 42 }}>{tx({ uz: `${DAYS} kunda natija. Bo'lmasa, pulingiz qaytadi.`, ru: `Результат за ${DAYS} дней. Иначе вернём деньги.` })}</p></Step>
        <Step n={2}><p className="body" style={{ marginTop: 22 }}>{tx({ uz: 'Shuning uchun biz sizni nazorat qilamiz: natija bizga ham kerak.', ru: 'Поэтому мы вас и контролируем: результат нужен и нам.' })}</p></Step>
      </div>
    </div>
  );
}

export function Tariffs() {
  const tx = useTx();
  const cls = { cream: 'card-cream', blue: 'card-blue', sky: 'card-sky' } as const;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 30, marginBottom: 34 }}>
        <div>
          <In><div className="eyebrow">{tx({ uz: 'Tariflar', ru: 'Тарифы' })}</div></In>
          <In d={0.05}><h2 className="h-lg" style={{ marginTop: 10, fontSize: 54 }}>{tx({ uz: 'Farqi: ustoz bilan individual vaqt', ru: 'Разница: время один на один с преподавателем' })}</h2></In>
        </div>
      </div>
      <div className="cols3" style={{ display: 'grid', gridTemplateColumns: '1fr 1.08fr 1fr', gap: 26, alignItems: 'stretch' }}>
        {tariffs.map((t, k) => (
          <Step n={k + 1} key={t.name}>
            <div className={'card ' + cls[t.tone]} style={{ height: '100%', padding: '24px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {t.tone === 'blue' && <span style={{ position: 'absolute', top: -20, right: 30, background: 'var(--yellow)', color: '#0F1B3D', fontWeight: 800, fontSize: 22, padding: '8px 20px', borderRadius: 999, letterSpacing: '.06em' }}>{tx({ uz: 'ENG KO\'P TANLANADI', ru: 'ВЫБИРАЮТ ЧАЩЕ' })}</span>}
              <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-.02em' }}>{t.name}</div>
              <div style={{ marginTop: 14, borderRadius: 22, padding: '14px 20px', background: t.tone === 'blue' ? 'rgba(255,255,255,.16)' : '#fff' }}>
                <div style={{ fontSize: 22, fontWeight: 700, opacity: .75 }}>{tx({ uz: 'Ustoz bilan individual', ru: 'Индивидуально с преподавателем' })}</div>
                <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: '-.02em', color: t.tone === 'blue' ? 'var(--yellow)' : 'var(--blue-d)' }}>{tx(t.indiv)}</div>
              </div>
              <div style={{ display: 'grid', gap: 8, marginTop: 16, flex: 1, alignContent: 'start', minHeight: 250 }}>
                <div className="tick" style={{ fontSize: 26 }}>{tx({ uz: `${LIVE} jonli + ${VIDEO} video + ${KARAOKE} musiqali dars`, ru: `${LIVE} живых + ${VIDEO} видео + ${KARAOKE} музыкальных уроков` })}</div>
                {t.extra.map((e, j) => <div className="tick" key={j} style={{ fontSize: 26, color: 'var(--ink)', fontWeight: 800 }}>{tx(e)}</div>)}
                <div className="tick" style={{ fontSize: 26 }}>{tx(t.guarantee)}</div>
              </div>
              <div style={{ marginTop: 18, borderRadius: 26, padding: '14px 22px', background: t.tone === 'blue' ? 'var(--yellow)' : t.tone === 'sky' ? 'var(--blue-d)' : '#fff', color: t.tone === 'sky' ? '#fff' : '#0F1B3D' }}>
                <div className="num" style={{ fontSize: 46 }}>{sp(t.price)} <span style={{ fontSize: 28 }}>so'm</span></div>
                <div style={{ fontSize: 22, fontWeight: 700, opacity: .8 }}>{tx({ uz: `bo'lib to'lasangiz: oyiga ~${sp(Math.round(t.price / INSTALL_MONTHS / 1000) * 1000)}`, ru: `в рассрочку: ~${sp(Math.round(t.price / INSTALL_MONTHS / 1000) * 1000)} в месяц` })}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function PerDay() {
  const tx = useTx();
  const day = Math.round(tariffs[0].price / DAYS / 100) * 100;
  return (
    <div className="two-col" style={{ alignItems: 'center', gap: 70 }}>
      <div>
        <In><div className="eyebrow">{tx({ uz: 'Hisoblab ko\'ring', ru: 'Посчитайте' })}</div></In>
        <In d={0.06}><div className="num" style={{ fontSize: 190, lineHeight: 1, marginTop: 20, color: 'var(--blue-d)' }}>~{sp(day)}</div></In>
        <In d={0.1}><p className="h-md" style={{ marginTop: 8 }}>{tx({ uz: 'so\'m: kuniga, RAZGOVOR tarifida', ru: 'сум в день на тарифе RAZGOVOR' })}</p></In>
        <In d={0.14}><p className="small" style={{ marginTop: 12, fontSize: 26 }}>{sp(tariffs[0].price)} ÷ {DAYS} {tx({ uz: 'kun', ru: 'дней' })}</p></In>
      </div>
      <div style={{ display: 'grid', gap: 20 }}>
        <Step n={1}><div className="card"><div className="h-md" style={{ fontSize: 38 }}>{tx({ uz: 'Bir tushlik narxi', ru: 'Цена одного обеда' })}</div><div className="body" style={{ marginTop: 6, fontSize: 30 }}>{tx({ uz: 'Evaziga har kuni jonli amaliyot va nazorat.', ru: 'Взамен — живая практика и контроль каждый день.' })}</div></div></Step>
        <Step n={2}><div className="card card-cream"><div className="h-md" style={{ fontSize: 38 }}>{tx({ uz: 'Bo\'lib to\'lash mumkin', ru: 'Можно в рассрочку' })}</div><div className="body" style={{ marginTop: 6, fontSize: 30 }}>Alif Nasiya · Uzum Nasiya</div></div></Step>
      </div>
    </div>
  );
}

export function Objections() {
  const tx = useTx();
  const rows = [
    { I: Clock, q: { uz: '«Vaqtim yo\'q»', ru: '«Нет времени»' }, a: { uz: `Kuniga 20–30 daqiqa. Vaqtni o'zingiz tanlaysiz: ${HOURS}.`, ru: `20–30 минут в день. Время выбираете сами: ${HOURS}.` } },
    { I: Wallet, q: { uz: '«Qimmat»', ru: '«Дорого»' }, a: { uz: 'Bo\'lib to\'lash bor. Natija esa shartnomada kafolatlangan.', ru: 'Есть рассрочка. А результат гарантирован договором.' } },
    { I: Wifi, q: { uz: '«Onlayn o\'rgana olmayman»', ru: '«Онлайн не научусь»' }, a: { uz: 'Bu video kurs emas. Jonli ustoz, yakkama-yakka. Yo\'lga vaqt ketmaydi.', ru: 'Это не видеокурс. Живой преподаватель один на один. И не надо никуда ехать.' } },
    { I: RotateCcw, q: { uz: '«Kursda o\'qiganman, foydasi bo\'lmagan»', ru: '«Уже учился на курсах, не помогло»' }, a: { uz: 'U yerda tinglagansiz. Bu yerda har darsda o\'zingiz gapirasiz.', ru: 'Там вы слушали. Здесь на каждом уроке говорите сами.' } },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Halol javoblar', ru: 'Честные ответы' })} title={tx({ uz: 'Hozir nima deb o\'ylayapsiz', ru: 'О чём вы сейчас думаете' })} />
      <div className="two-col" style={{ gap: 22 }}>
        {rows.map((r, k) => (
          <Step n={k + 1} key={k}>
            <div className="card" style={{ height: '100%', padding: '28px 34px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <span style={{ flex: 'none', width: 60, height: 60, borderRadius: 18, background: 'var(--orange-dim)', color: 'var(--orange)', display: 'grid', placeItems: 'center' }}><r.I size={30} /></span>
                <span className="h-md" style={{ fontSize: 38 }}>{tx(r.q)}</span>
              </div>
              <div className="body" style={{ marginTop: 14, fontSize: 30 }}>{tx(r.a)}</div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function Proof() {
  const tx = useTx();
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Natijalar', ru: 'Результаты' })} title={tx({ uz: 'O\'quvchilarimiz qanday gapiryapti', ru: 'Как говорят наши ученики' })} />
      <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {[1, 2, 3].map(n => (
          <div key={n} style={{ height: 430, borderRadius: 36, border: '3px dashed #C7D4F5', background: 'rgba(70,129,255,.06)', display: 'grid', placeItems: 'center', color: 'var(--blue)' }}>
            <div style={{ textAlign: 'center' }}><Play size={72} /><div style={{ fontSize: 26, fontWeight: 700, marginTop: 10 }}>{tx({ uz: `O'quvchi videosi ${n}`, ru: `Видео ученика ${n}` })}</div></div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26 }}><span className="chip"><Send size={26} color="var(--blue)" /> {tx({ uz: 'Barcha natijalar:', ru: 'Все результаты:' })} <b className="b">{RESULTS_CHANNEL}</b></span></div>
    </div>
  );
}

export function Cta() {
  const tx = useTx();
  const steps = [
    { I: MousePointerClick, t: { uz: 'Video ostidagi tugmani bosing', ru: 'Нажмите кнопку под видео' }, d: { uz: 'Ariza 30 soniyada to\'ldiriladi', ru: 'Заявка заполняется за 30 секунд' } },
    { I: PhoneCall, t: { uz: 'Menejer qo\'ng\'iroq qiladi', ru: 'Вам позвонит менеджер' }, d: { uz: 'Darajangiz va maqsadingizni aniqlaydi', ru: 'Определит ваш уровень и цель' } },
    { I: ClipboardCheck, t: { uz: 'Shaxsiy reja olasiz', ru: 'Получаете личный план' }, d: { uz: 'Sizga mos tarif va dars vaqti', ru: 'Подходящий тариф и время уроков' } },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Keyingi qadam', ru: 'Следующий шаг' })} title={<>{tx({ uz: 'Bepul konsultatsiyaga', ru: 'Запишитесь на' })} <span className="under">{tx({ uz: 'yoziling', ru: 'бесплатную консультацию' })}</span></>} />
      <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {steps.map((s, k) => (
          <Step n={k + 1} key={k}>
            <div className="card" style={{ height: '100%', padding: '34px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="num" style={{ fontSize: 90, lineHeight: 1, color: 'var(--yellow)' }}>{k + 1}</span>
                <s.I size={64} />
              </div>
              <div className="h-md" style={{ marginTop: 20, fontSize: 42 }}>{tx(s.t)}</div>
              <div className="body" style={{ marginTop: 8, fontSize: 30 }}>{tx(s.d)}</div>
            </div>
          </Step>
        ))}
      </div>
      <Step n={4}><p className="lead" style={{ fontSize: 36 }}>{tx({ uz: 'Konsultatsiya bepul va sizni hech narsaga majburlamaydi.', ru: 'Консультация бесплатная и ни к чему вас не обязывает.' })}</p></Step>
    </div>
  );
}

export function Final() {
  const tx = useTx();
  return (
    <div className="two-col" style={{ alignItems: 'center', gap: 60 }}>
      <div>
        <In><div className="eyebrow">{DAYS} {tx({ uz: 'kundan keyin', ru: 'дней спустя' })}</div></In>
        <In d={0.08}><h2 className="h-xl" style={{ marginTop: 26 }}>«Я <span className="under">говорю</span><br />по-русски»</h2></In>
        <In d={0.16}><p className="lead" style={{ fontSize: 40 }}>{tx({ uz: 'Bugun siz 3 ta qolipni bilasiz. 90 kundan keyin suhbatni o\'zingiz boshlaysiz.', ru: 'Сегодня вы знаете 3 шаблона. Через 90 дней вы сами начнёте разговор.' })}</p></In>
      </div>
      <div style={{ display: 'grid', gap: 20 }}>
        <Step n={1}><div className="card"><div className="small" style={{ fontWeight: 800, letterSpacing: '.1em' }}>{tx({ uz: 'BUGUN', ru: 'СЕГОДНЯ' })}</div><div className="h-md" style={{ marginTop: 4 }}>{SENTENCES_NEG} {tx({ uz: 'ta gap va bitta dialog', ru: 'фраз и один диалог' })}</div></div></Step>
        <Step n={2}><div className="card" style={{ background: 'var(--yellow)', borderColor: 'var(--yellow)', color: '#0F1B3D' }}><div style={{ fontSize: 25, fontWeight: 800, letterSpacing: '.1em', opacity: .7 }}>{DAYS} {tx({ uz: 'KUNDAN KEYIN', ru: 'ДНЕЙ СПУСТЯ' })}</div><div className="h-md" style={{ marginTop: 4, color: '#0F1B3D' }}>{tx({ uz: 'Ishda, do\'konda, telefonda: erkin suhbat', ru: 'На работе, в магазине, по телефону: свободный разговор' })}</div></div></Step>
        <Step n={3}><div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 38, fontWeight: 800 }}><MousePointerClick size={46} color="var(--yellow)" /> {tx({ uz: 'Tugma video ostida', ru: 'Кнопка под видео' })}</div></Step>
      </div>
    </div>
  );
}
