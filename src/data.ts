// Все цифры и факты урока — только здесь.
// Источники: «Методика обучения RazGovor.uz» (17.11.2026), карточка тарифов (скрин),
// опрос подписчиков 04.06–10.10.2026 (221 уникальный ответ), база знаний отдела продаж.
import type { L } from './lib/ctx';

export const DAYS = 90;
export const LIVE = 40;      // живых разговорных уроков
export const VIDEO = 40;     // видеоуроков
export const KARAOKE = 13;   // музыкальных (караоке) уроков
export const HOURS = '10:00–22:00';
export const RESULTS_CHANNEL = 't.me/razgovoruz_natijalar';

// Опрос подписчиков
export const SURVEY = { n: 221, beginners: 78, russia: 41, askSpeak: 36 };
export const pains: { k: L; pct: number }[] = [
  { k: { uz: 'So\'z boyligi yetmaydi', ru: 'Не хватает словарного запаса' }, pct: 31 },
  { k: { uz: 'Talaffuz va urg\'u', ru: 'Произношение и ударение' }, pct: 25 },
  { k: { uz: 'Eshitib tushunish', ru: 'Понимание на слух' }, pct: 22 },
];

// ── Урок: 3 шаблона × 8 глаголов ─────────────────────────────────────────────
// Глагол после шаблона стоит в начальной форме и не меняется.
export type Pattern = { id: 'want' | 'need' | 'can'; ru: string; neg: string; say: string; uz: L; negUz: L; q?: boolean };
export const patterns: Pattern[] = [
  { id: 'want', ru: 'Я хочу', neg: 'Я не хочу', say: 'я хачу́', uz: { uz: 'Men …moqchiman', ru: 'Я хочу …' }, negUz: { uz: 'Men …moqchi emasman', ru: 'Я не хочу …' } },
  { id: 'need', ru: 'Мне нужно', neg: 'Мне не нужно', say: 'мне ну́жна', uz: { uz: 'Men …shim kerak', ru: 'Мне нужно …' }, negUz: { uz: 'Men …shim shart emas', ru: 'Мне не нужно …' } },
  { id: 'can', ru: 'Можно', neg: 'Нельзя', say: 'мо́жна', uz: { uz: '…sam bo\'ladimi?', ru: 'Можно …?' }, negUz: { uz: '… mumkin emas', ru: 'Нельзя …' }, q: true },
];

export type Verb = { ru: string; say: string; uz: string; want: string; need: string; can: string };
export const verbs: Verb[] = [
  { ru: 'работать', say: 'рабо́тать', uz: 'ishlamoq', want: 'Men ishlamoqchiman', need: 'Men ishlashim kerak', can: 'Ishlasam bo\'ladimi?' },
  { ru: 'купить', say: 'купи́ть', uz: 'sotib olmoq', want: 'Men sotib olmoqchiman', need: 'Men sotib olishim kerak', can: 'Sotib olsam bo\'ladimi?' },
  { ru: 'спросить', say: 'спраси́ть', uz: 'so\'ramoq', want: 'Men so\'ramoqchiman', need: 'Men so\'rashim kerak', can: 'So\'rasam bo\'ladimi?' },
  { ru: 'позвонить', say: 'пазвани́ть', uz: 'qo\'ng\'iroq qilmoq', want: 'Men qo\'ng\'iroq qilmoqchiman', need: 'Men qo\'ng\'iroq qilishim kerak', can: 'Qo\'ng\'iroq qilsam bo\'ladimi?' },
  { ru: 'оплатить', say: 'аплати́ть', uz: 'to\'lamoq', want: 'Men to\'lamoqchiman', need: 'Men to\'lashim kerak', can: 'To\'lasam bo\'ladimi?' },
  { ru: 'отдохнуть', say: 'аддахну́ть', uz: 'dam olmoq', want: 'Men dam olmoqchiman', need: 'Men dam olishim kerak', can: 'Dam olsam bo\'ladimi?' },
  { ru: 'поесть', say: 'пае́сть', uz: 'ovqatlanmoq', want: 'Men ovqatlanmoqchiman', need: 'Men ovqatlanishim kerak', can: 'Ovqatlansam bo\'ladimi?' },
  { ru: 'войти', say: 'вайти́', uz: 'kirmoq', want: 'Men kirmoqchiman', need: 'Men kirishim kerak', can: 'Kirsam bo\'ladimi?' },
];
export const SENTENCES = patterns.length * verbs.length;   // 24
export const SENTENCES_NEG = SENTENCES * 2;                // 48 — с отрицанием

// Диалог для проговаривания вслух. me = реплика зрителя.
export const dialog: { me: boolean; ru: string; uz: string }[] = [
  { me: true, ru: 'Здравствуйте! Можно спросить?', uz: 'Assalomu alaykum! So\'rasam bo\'ladimi?' },
  { me: false, ru: 'Да, конечно.', uz: 'Ha, albatta.' },
  { me: true, ru: 'Я хочу купить билет.', uz: 'Men chipta sotib olmoqchiman.' },
  { me: false, ru: 'Пожалуйста.', uz: 'Marhamat.' },
  { me: true, ru: 'Мне нужно оплатить. Можно картой?', uz: 'Men to\'lashim kerak. Karta bilan bo\'ladimi?' },
  { me: false, ru: 'Да, можно.', uz: 'Ha, bo\'ladi.' },
];

// ── Тарифы (карточка школы) ──────────────────────────────────────────────────
export type Tariff = { name: string; price: number; indiv: L; guarantee: L; extra: L[]; tone: 'cream' | 'blue' | 'sky' };
export const tariffs: Tariff[] = [
  { name: 'RAZGOVOR', price: 2_487_000, tone: 'cream', indiv: { uz: '15 daqiqa', ru: '15 минут' }, guarantee: { uz: 'Natija kafolati', ru: 'Гарантия результата' }, extra: [] },
  { name: 'VIP', price: 3_679_000, tone: 'blue', indiv: { uz: '30 daqiqa', ru: '30 минут' }, guarantee: { uz: '100% natija kafolati', ru: '100% гарантия результата' }, extra: [{ uz: '12 soatlik dialog chat', ru: '12 часов диалог-чата' }] },
  { name: 'EXPRESS', price: 5_679_000, tone: 'sky', indiv: { uz: '1 soat', ru: '1 час' }, guarantee: { uz: '100% natija kafolati', ru: '100% гарантия результата' }, extra: [{ uz: '12 soatlik dialog chat', ru: '12 часов диалог-чата' }, { uz: 'Shaxsiy mentor nazorati', ru: 'Контроль личного ментора' }, { uz: '«Razgovornik. Dangasa rus tili» kitobi', ru: 'Книга «Razgovornik. Dangasa rus tili»' }] },
];
export const INSTALL_MONTHS = 6;   // bo'lib to'lash: Alif Nasiya / Uzum Nasiya

// Во всех тарифах
export const stack: { k: L; d: L }[] = [
  { k: { uz: `${LIVE} ta jonli razgovor darsi`, ru: `${LIVE} живых разговорных уроков` }, d: { uz: 'Ustoz bilan, siz gapirasiz', ru: 'С преподавателем, говорите вы' } },
  { k: { uz: 'Ustoz bilan individual shug\'ullanish', ru: 'Индивидуально с преподавателем' }, d: { uz: '15 / 30 / 60 daqiqa: tarifga qarab', ru: '15 / 30 / 60 минут: зависит от тарифа' } },
  { k: { uz: `${VIDEO} ta video darslik`, ru: `${VIDEO} видеоуроков` }, d: { uz: 'Istalgan vaqtda ko\'rasiz', ru: 'Смотрите в любое время' } },
  { k: { uz: `${KARAOKE} ta musiqali (karaoke) dars`, ru: `${KARAOKE} музыкальных (караоке) уроков` }, d: { uz: 'So\'z va talaffuz qo\'shiq bilan', ru: 'Слова и произношение через песню' } },
  { k: { uz: 'O\'qituvchi + nazoratchi ustoz', ru: 'Преподаватель + куратор' }, d: { uz: `Har kuni ${HOURS}`, ru: `Каждый день ${HOURS}` } },
  { k: { uz: 'Audio va matnli lug\'atlar', ru: 'Аудио- и текстовые словари' }, d: { uz: 'Har bir mavzuga', ru: 'К каждой теме' } },
  { k: { uz: 'Test va mashqlar', ru: 'Тесты и упражнения' }, d: { uz: 'Bilimingizni tekshirasiz', ru: 'Проверяете себя' } },
  { k: { uz: 'Alohida Telegram kanal', ru: 'Отдельный Telegram-канал' }, d: { uz: 'Qo\'shimcha materiallar bilan', ru: 'С дополнительными материалами' } },
  { k: { uz: 'Darslarni muzlatish', ru: 'Заморозка занятий' }, d: { uz: '2 haftagacha', ru: 'До 2 недель' } },
  { k: { uz: 'Sertifikat', ru: 'Сертификат' }, d: { uz: 'Kurs yakunida', ru: 'По окончании курса' } },
];

export const sp = (n: number) => Math.round(n).toLocaleString('ru-RU').replace(/[\s,]/g, ' ');
