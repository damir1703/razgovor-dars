// Часть 1: крючок и проблема — почему самостоятельно не получается (0:00–3:30)
import { MessageCircleOff, BookX, Headphones, UserX, TimerOff } from 'lucide-react';
import { useTx } from '../lib/ctx';
import { In, Head, Counter } from '../lib/common';
import { Step } from '../lib/step';
import { SURVEY, pains, DAYS, SENTENCES_NEG } from '../data';

export function Title() {
  const tx = useTx();
  return (
    <div style={{ maxWidth: 1500 }}>
      <In><div className="eyebrow">{tx({ uz: 'Bepul dars · 20 daqiqa', ru: 'Бесплатный урок · 20 минут' })}</div></In>
      <In d={0.08}><h1 className="h-xl" style={{ marginTop: 30 }}>
        {tx({ uz: 'Rus tilini tushunasiz,', ru: 'Понимаете по-русски,' })}<br />
        <span className="b">{tx({ uz: 'lekin gapira olmaysizmi?', ru: 'но не можете говорить?' })}</span>
      </h1></In>
      <In d={0.18}><p className="lead" style={{ fontSize: 42, maxWidth: 1250 }}>
        {tx({ uz: 'Shu darsning o\'zida 3 ta shablon bilan', ru: 'Прямо на этом уроке по 3 шаблонам вы составите' })} <b className="o">{SENTENCES_NEG} {tx({ uz: 'ta gap', ru: 'фраз' })}</b> {tx({ uz: 'tuzasiz va ovoz chiqarib aytasiz.', ru: 'и произнесёте их вслух.' })}
      </p></In>
    </div>
  );
}

export function Promise() {
  const tx = useTx();
  const rows = [
    { t: { uz: 'Nega o\'zingiz o\'rgana olmayapsiz', ru: 'Почему не получается учить самому' }, d: { uz: '4 ta sabab. Bittasi sizniki bo\'lishi aniq.', ru: '4 причины. Одна из них точно ваша.' } },
    { t: { uz: `3 ta shablon → ${SENTENCES_NEG} ta gap`, ru: `3 шаблона → ${SENTENCES_NEG} фраз` }, d: { uz: 'Yodlamaysiz. Shu yerning o\'zida gapirasiz.', ru: 'Не зубрите. Говорите прямо здесь.' } },
    { t: { uz: `${DAYS} kunda razgovorga chiqish rejasi`, ru: `План: как выйти на разговор за ${DAYS} дней` }, d: { uz: 'Hafta qanday o\'tadi va kim nazorat qiladi.', ru: 'Как проходит неделя и кто вас ведёт.' } },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Bu darsda', ru: 'На этом уроке' })} title={tx({ uz: '20 daqiqada uchta narsa', ru: 'Три вещи за 20 минут' })} />
      <div style={{ display: 'grid', gap: 22 }}>
        {rows.map((r, k) => (
          <Step n={k + 1} key={k}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 30, padding: '30px 38px' }}>
              <span className={'badge' + (k === 1 ? ' o' : '')}>{k + 1}</span>
              <div>
                <div className="h-md">{tx(r.t)}</div>
                <div className="body" style={{ marginTop: 6 }}>{tx(r.d)}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
      <Step n={4}><p className="small" style={{ marginTop: 26, fontSize: 28 }}>{tx({ uz: 'Oxirigacha ko\'ring: eng muhim qism darsning oxirida.', ru: 'Досмотрите до конца: самое важное в конце урока.' })}</p></Step>
    </div>
  );
}

export function Familiar() {
  const tx = useTx();
  const items = [
    { uz: 'Ishda boshliq ruscha gapiradi. Siz bosh irg\'ab turasiz.', ru: 'Начальник говорит по-русски. Вы молча киваете.' },
    { uz: 'Do\'konga, bankka borishdan oldin gapni yodlab olasiz.', ru: 'Перед магазином или банком заучиваете фразу заранее.' },
    { uz: 'So\'zni bilasiz. Gap tuzguningizcha suhbat tugaydi.', ru: 'Слово знаете. Пока строите фразу, разговор уже закончился.' },
    { uz: 'Telefon ruscha jiringlasa, boshqa odamga uzatasiz.', ru: 'Звонят по-русски — передаёте трубку другому.' },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: 'Tanish holatmi?', ru: 'Знакомо?' })} title={<>{tx({ uz: 'Hammasini tushunasiz.', ru: 'Всё понимаете.' })} <span className="o">{tx({ uz: 'Og\'iz ochilmaydi.', ru: 'А рот не открывается.' })}</span></>} />
      <div className="two-col" style={{ gap: 24 }}>
        {items.map((it, k) => (
          <Step n={k + 1} key={k}>
            <div className="card" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', height: '100%', padding: '32px 36px' }}>
              <span style={{ flex: 'none', width: 62, height: 62, borderRadius: 20, background: 'var(--orange-dim)', color: 'var(--orange)', display: 'grid', placeItems: 'center' }}><MessageCircleOff size={32} /></span>
              <div className="body" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 34 }}>{tx(it)}</div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

export function NotAlone() {
  const tx = useTx();
  return (
    <div className="two-col" style={{ gridTemplateColumns: '0.9fr 1.1fr', alignItems: 'center', gap: 70 }}>
      <div>
        <In><div className="eyebrow">{tx({ uz: 'Siz yolg\'iz emassiz', ru: 'Вы не одни' })}</div></In>
        <In d={0.06}><div className="num" style={{ fontSize: 250, lineHeight: 1, marginTop: 18, color: 'var(--yellow)' }}><Counter to={SURVEY.beginners} format={n => Math.round(n) + '%'} /></div></In>
        <In d={0.12}><p className="h-md" style={{ marginTop: 6 }}>{tx({ uz: 'obunachilarimiz hali boshlang\'ich darajada', ru: 'наших подписчиков всё ещё на начальном уровне' })}</p></In>
        <In d={0.18}><p className="small" style={{ marginTop: 16, fontSize: 26 }}>{tx({ uz: `So'rovnoma: ${SURVEY.n} kishi javob berdi`, ru: `Опрос: ответил ${SURVEY.n} человек` })}</p></In>
      </div>
      <div>
        <Step n={1}><p className="h-md" style={{ marginBottom: 22 }}>{tx({ uz: 'Eng ko\'p nimada qiynalishadi:', ru: 'С чем труднее всего:' })}</p></Step>
        <div style={{ display: 'grid', gap: 18 }}>
          {pains.map((p, k) => (
            <Step n={k + 1} key={k}>
              <div className="card" style={{ padding: '24px 30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20 }}>
                  <span style={{ fontSize: 34, fontWeight: 700 }}>{tx(p.k)}</span>
                  <span className="num" style={{ fontSize: 46 }}>{p.pct}%</span>
                </div>
                <div style={{ height: 14, borderRadius: 9, background: 'rgba(255,255,255,.2)', marginTop: 14, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: p.pct * 3 + '%', maxWidth: '100%', background: 'var(--yellow)', borderRadius: 9 }} />
                </div>
              </div>
            </Step>
          ))}
        </div>
        <Step n={4}><p className="body" style={{ marginTop: 24, color: 'var(--ink)' }}>{tx({ uz: 'Eng ko\'p so\'ralgan narsa:', ru: 'Чаще всего просят:' })} <b className="o">{tx({ uz: '«gaplashishni o\'rgating»', ru: '«научите разговаривать»' })}</b></p></Step>
      </div>
    </div>
  );
}

export function FourReasons() {
  const tx = useTx();
  const rs = [
    { I: BookX, t: { uz: 'So\'z yodlaysiz, gap chiqmaydi', ru: 'Учите слова, а фраза не выходит' }, d: { uz: 'Alohida so\'z miyada turmaydi. Ertasiga yarmi yo\'q.', ru: 'Слово в одиночку не держится. Назавтра половины нет.' } },
    { I: Headphones, t: { uz: 'Ko\'rasiz, tinglaysiz, gapirmaysiz', ru: 'Смотрите и слушаете, но не говорите' }, d: { uz: 'Video sizga gapiradi. Siz unga javob bermaysiz.', ru: 'Видео говорит вам. Вы ему не отвечаете.' } },
    { I: UserX, t: { uz: 'Xatoingizni hech kim tuzatmaydi', ru: 'Ошибки никто не исправляет' }, d: { uz: 'Talaffuz va urg\'u noto\'g\'ri o\'rnashib qoladi.', ru: 'Произношение и ударение закрепляются неправильно.' } },
    { I: TimerOff, t: { uz: 'Nazorat yo\'q', ru: 'Нет контроля' }, d: { uz: '«Bugun charchadim». Ikki haftadan keyin tashlab qo\'yasiz.', ru: '«Сегодня устал». Через две недели бросаете.' } },
  ];
  return (
    <div>
      <Head eyebrow={tx({ uz: '4 ta sabab', ru: '4 причины' })} title={tx({ uz: 'Nega o\'zingiz o\'rgana olmayapsiz', ru: 'Почему не получается выучить самому' })} />
      <div className="two-col" style={{ gap: 24 }}>
        {rs.map((r, k) => (
          <Step n={k + 1} key={k}>
            <div className="card" style={{ height: '100%', padding: '30px 36px', display: 'flex', gap: 26 }}>
              <span style={{ flex: 'none', width: 76, height: 76, borderRadius: 24, background: 'var(--blue-dim)', color: 'var(--blue-d)', display: 'grid', placeItems: 'center' }}><r.I size={38} /></span>
              <div>
                <div className="small" style={{ color: 'var(--orange)', fontWeight: 800, letterSpacing: '.08em' }}>{k + 1}-{tx({ uz: 'SABAB', ru: 'Я ПРИЧИНА' })}</div>
                <div className="h-md" style={{ fontSize: 40, marginTop: 4 }}>{tx(r.t)}</div>
                <div className="body" style={{ marginTop: 8, fontSize: 29 }}>{tx(r.d)}</div>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </div>
  );
}

function Bars({ theory, talk, label, hi }: { theory: number; talk: number; label: string; hi?: boolean }) {
  const tx = useTx();
  return (
    <div className="card" style={{ padding: '32px 36px', borderColor: hi ? 'var(--yellow)' : undefined, borderWidth: hi ? 4 : 2 }}>
      <div className="h-md" style={{ fontSize: 38 }}>{label}</div>
      <div style={{ display: 'flex', height: 74, borderRadius: 20, overflow: 'hidden', marginTop: 22, fontWeight: 800, fontSize: 26 }}>
        <div style={{ flex: theory, background: 'rgba(255,255,255,.22)', display: 'grid', placeItems: 'center' }}>{tx({ uz: 'Nazariya', ru: 'Теория' })}</div>
        <div style={{ flex: talk, background: hi ? 'var(--yellow)' : 'var(--orange)', color: hi ? '#0F1B3D' : '#fff', display: 'grid', placeItems: 'center' }}>{tx({ uz: 'Gapirish', ru: 'Разговор' })}</div>
      </div>
    </div>
  );
}

export function RealCause() {
  const tx = useTx();
  return (
    <div className="two-col" style={{ gridTemplateColumns: '1.15fr .85fr', alignItems: 'center', gap: 70 }}>
      <div>
        <In><div className="eyebrow">{tx({ uz: 'Asosiy sabab', ru: 'Главная причина' })}</div></In>
        <In d={0.06}><h2 className="h-xl" style={{ fontSize: 92, marginTop: 26 }}>{tx({ uz: 'Muammo sizda emas.', ru: 'Проблема не в вас.' })}<br /><span className="under">{tx({ uz: 'Amaliyot yetishmaydi.', ru: 'Не хватает практики.' })}</span></h2></In>
        <Step n={1}><p className="lead" style={{ fontSize: 38 }}>{tx({ uz: 'Til bu bilim emas, ko\'nikma. Suzishni kitobdan o\'rganib bo\'lmaydi: suvga tushish kerak.', ru: 'Язык — это не знание, а навык. Плавать по книге не научишься: нужно зайти в воду.' })}</p></Step>
      </div>
      <div style={{ display: 'grid', gap: 24 }}>
        <Step n={2}><Bars theory={8} talk={2} label={tx({ uz: 'Odatda shunday o\'qitiladi', ru: 'Как учат обычно' })} /></Step>
        <Step n={3}><Bars theory={2} talk={8} hi label={tx({ uz: 'Razgovor.uz da', ru: 'В Razgovor.uz' })} /></Step>
        <Step n={3}><p className="body" style={{ color: 'var(--ink)' }}>{tx({ uz: 'Ko\'proq gapirish, kamroq nazariya.', ru: 'Больше разговора, меньше теории.' })}</p></Step>
      </div>
    </div>
  );
}
