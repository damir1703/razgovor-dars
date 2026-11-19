import type { ComponentType } from 'react';
import type { L } from '../lib/ctx';
import { Title, Promise, Familiar, NotAlone, FourReasons, RealCause } from './a';
import { LessonTitle, Secret, patternSlide, Verbs, Builder, Negation, Practice, Dialog, Result, Ceiling } from './b';
import { TwoPaths, Method, Week, Karaoke, Stack, Guarantee, Tariffs, PerDay, Objections, Proof, Cta, Final } from './c';

// Три части VSL. time — ориентир по хронометражу, виден только вне режима записи.
export const PARTS: { title: L; time: string }[] = [
  { title: { uz: '1-qism · Muammo', ru: 'Часть 1 · Проблема' }, time: '0:00–3:30' },
  { title: { uz: '2-qism · Dars', ru: 'Часть 2 · Урок' }, time: '3:30–14:00' },
  { title: { uz: '3-qism · Kurs', ru: 'Часть 3 · Курс' }, time: '14:00–20:00' },
];

// note — текст-подсказка спикеру (клавиша N). steps — сколько нажатий внутри слайда.
export type Slide = { C: ComponentType; part: 0 | 1 | 2; title: L; tone?: 'blue'; steps?: number; note?: L };

export const SLIDES: Slide[] = [
  // ── Часть 1. Крючок и проблема ──
  { C: Title, part: 0, title: { uz: 'Sarlavha', ru: 'Заголовок' },
    note: { uz: '0:00. Savoldan boshlang: «Ruschani tushunasiz, lekin gapira olmaysizmi?» O\'zingizni tanishtiring: ism, Razgovor.uz, necha yildan beri o\'qitasiz. Va\'da: 20 daqiqada 48 ta gap.', ru: '0:00. Начать с вопроса: «Понимаете по-русски, но не можете сказать?» Представиться: имя, Razgovor.uz, сколько лет преподаёте. Обещание: 48 фраз за 20 минут.' } },
  { C: Promise, part: 0, steps: 4, title: { uz: 'Va\'da', ru: 'Обещание' },
    note: { uz: '0:30. Uch narsani sanang. «Oxirida 90 kunlik rejani ko\'rsataman, shuning uchun o\'chirmang».', ru: '0:30. Перечислить три вещи. «В конце покажу план на 90 дней, поэтому не выключайте».' } },
  { C: Familiar, part: 0, steps: 4, title: { uz: 'Tanish holat', ru: 'Знакомо?' },
    note: { uz: '1:00. Har birini hayotdan misol bilan ayting. Tomoshabin «bu men» deyishi kerak. Shoshilmang.', ru: '1:00. Каждый пункт — с примером из жизни. Зритель должен сказать «это я». Не торопиться.' } },
  { C: NotAlone, part: 0, tone: 'blue', steps: 4, title: { uz: 'So\'rovnoma', ru: 'Опрос' },
    note: { uz: '1:40. «Biz 221 obunachidan so\'radik». Uyalish kerak emas: ko\'pchilik shu holatda.', ru: '1:40. «Мы спросили 221 подписчика». Стыдиться нечего: в такой ситуации большинство.' } },
  { C: FourReasons, part: 0, steps: 4, title: { uz: '4 sabab', ru: '4 причины' },
    note: { uz: '2:10. To\'rt sabab. Har biriga 15–20 soniya. Bu sabablar keyin kurs taqdimotida yechim bilan qaytadi.', ru: '2:10. Четыре причины, по 15–20 секунд. Они вернутся в презентации курса уже с решениями.' } },
  { C: RealCause, part: 0, tone: 'blue', steps: 3, title: { uz: 'Asosiy sabab', ru: 'Главная причина' },
    note: { uz: '3:00. Aybni tomoshabindan oling: «Muammo sizda emas». Suzish misoli. Keyin: «Hozir buni amalda ko\'rsataman».', ru: '3:00. Снять вину со зрителя: «Проблема не в вас». Пример с плаванием. Затем: «Сейчас покажу на практике».' } },

  // ── Часть 2. Урок ──
  { C: LessonTitle, part: 1, title: { uz: 'Dars', ru: 'Урок' },
    note: { uz: '3:30. «Ruchka olmang. Men aytaman, siz ovoz chiqarib qaytarasiz». Bu darsning asosiy qoidasi.', ru: '3:30. «Ручку не берите. Я говорю, вы повторяете вслух». Это главное правило урока.' } },
  { C: Secret, part: 1, steps: 2, title: { uz: 'Sir', ru: 'Секрет' },
    note: { uz: '4:00. Nega gap kech chiqadi: fe\'lning 6 shakli. Qolipda fe\'l o\'zgarmaydi.', ru: '4:00. Почему фраза запаздывает: 6 форм глагола. В шаблоне глагол не меняется.' } },
  { C: patternSlide(0, [0, 1, 2]), part: 1, steps: 5, title: { uz: '1-qolip · Я хочу', ru: 'Шаблон 1 · Я хочу' },
    note: { uz: '4:40. Har gapni 2 marta ayting, pauza qiling: tomoshabin qaytarsin. Talaffuz: «хачу».', ru: '4:40. Каждую фразу произнести дважды, сделать паузу: зритель повторяет. Произношение: «хачу».' } },
  { C: patternSlide(1, [3, 4, 5]), part: 1, steps: 5, title: { uz: '2-qolip · Мне нужно', ru: 'Шаблон 2 · Мне нужно' },
    note: { uz: '5:50. «Мне нужно» ishda eng kerakli qolip. Talaffuz: «нужна».', ru: '5:50. «Мне нужно» — самый нужный шаблон на работе. Произношение: «нужна».' } },
  { C: patternSlide(2, [7, 2, 6]), part: 1, steps: 5, title: { uz: '3-qolip · Можно', ru: 'Шаблон 3 · Можно' },
    note: { uz: '7:00. «Можно» bilan har qanday ruxsat so\'raladi. Savol ohangini ko\'rsating: ovoz oxirida ko\'tariladi.', ru: '7:00. Через «можно» спрашивают любое разрешение. Показать вопросительную интонацию: голос вверх в конце.' } },
  { C: Verbs, part: 1, steps: 3, title: { uz: '8 fe\'l', ru: '8 глаголов' },
    note: { uz: '8:00. 8 fe\'lni birga o\'qing. Urg\'usiz «о» = «а» qoidasini ayting.', ru: '8:00. Прочитать 8 глаголов вместе. Правило: безударное «о» = «а».' } },
  { C: Builder, part: 1, title: { uz: 'Konstruktor', ru: 'Конструктор' },
    note: { uz: '9:00. Tugmalarni bosing: qolip + fe\'l. 6–8 ta gap yig\'ing, har birini tomoshabin bilan ayting. «Hohlagan fe\'lni qo\'ysangiz, yangi gap».', ru: '9:00. Нажимать кнопки: шаблон + глагол. Собрать 6–8 фраз, каждую проговорить со зрителем. «Подставьте любой глагол — новая фраза».' } },
  { C: Negation, part: 1, steps: 4, title: { uz: '«Не» bilan', ru: 'С «не»' },
    note: { uz: '10:20. Bitta so\'z, gaplar soni ikki barobar. «Не можно» xatosini alohida ayting.', ru: '10:20. Одно слово — фраз вдвое больше. Отдельно про ошибку «не можно».' } },
  { C: Practice, part: 1, steps: 8, title: { uz: 'Mashq', ru: 'Практика' },
    note: { uz: '11:10. Savol chiqadi, 3 soniya jim turing, keyin javobni oching. Maqtang: «Ana, aytdingiz!»', ru: '11:10. Появляется вопрос, 3 секунды молчать, потом открыть ответ. Хвалить: «Вот, вы сказали!»' } },
  { C: Dialog, part: 1, steps: 6, title: { uz: 'Dialog', ru: 'Диалог' },
    note: { uz: '12:00. Siz kassirsiz. To\'q sariq gapda pauza qiling: tomoshabin aytadi. Dialogni 2 marta o\'tkazing.', ru: '12:00. Вы — кассир. На оранжевой реплике пауза: говорит зритель. Пройти диалог дважды.' } },
  { C: Result, part: 1, tone: 'blue', steps: 2, title: { uz: 'Natija', ru: 'Результат' },
    note: { uz: '13:00. G\'alaba hissini bering: «Siz hozir ruscha gapirdingiz». Keyin: «Bu bitta darsning bir qismi».', ru: '13:00. Дать ощущение победы: «Вы сейчас говорили по-русски». Затем: «Это часть одного урока».' } },
  { C: Ceiling, part: 1, steps: 4, title: { uz: 'Shift', ru: 'Потолок' },
    note: { uz: '13:30. Kassir javobini haqiqiy tezlikda o\'qing. Tomoshabin tushunmasligi kerak. Xulosa: gapirishni bilish yetmaydi, jonli amaliyot kerak.', ru: '13:30. Ответ кассира прочитать в настоящем темпе. Зритель не должен понять. Вывод: уметь сказать мало, нужна живая практика.' } },

  // ── Часть 3. Курс ──
  { C: TwoPaths, part: 2, steps: 2, title: { uz: 'Ikki yo\'l', ru: 'Два пути' },
    note: { uz: '14:00. Bosimsiz: ikkala yo\'l ham mumkin. Farqi vaqtda.', ru: '14:00. Без давления: оба пути возможны. Разница во времени.' } },
  { C: Method, part: 2, steps: 4, title: { uz: 'Metodika', ru: 'Методика' },
    note: { uz: '14:40. Boshidagi 4 sababga qayting. Har biriga kursdagi aniq yechim.', ru: '14:40. Вернуться к 4 причинам из начала. На каждую — конкретное решение в курсе.' } },
  { C: Week, part: 2, steps: 4, title: { uz: 'Hafta', ru: 'Неделя' },
    note: { uz: '15:30. Bir haftani ko\'rsating. Urg\'u: haftada 5 kun jonli gapirasiz.', ru: '15:30. Показать одну неделю. Акцент: 5 дней в неделю вы говорите вживую.' } },
  { C: Karaoke, part: 2, steps: 3, title: { uz: 'Musiqali dars', ru: 'Музыкальный урок' },
    note: { uz: '16:00. Bizning farqimiz. Montajda shu yerga haqiqiy musiqali darsdan 10–15 soniya qo\'yiladi.', ru: '16:00. Наше отличие. На монтаже сюда вставить 10–15 секунд настоящего музыкального урока.' } },
  { C: Stack, part: 2, steps: 5, title: { uz: 'Kurs tarkibi', ru: 'Состав курса' },
    note: { uz: '16:30. Tez sanang, to\'xtamang. Narxni hali aytmang.', ru: '16:30. Перечислить быстро, не останавливаясь. Цену пока не называть.' } },
  { C: Guarantee, part: 2, tone: 'blue', steps: 2, title: { uz: 'Kafolat', ru: 'Гарантия' },
    note: { uz: '17:10. Kafolatni narxdan OLDIN ayting. Sekin va ishonch bilan. Shartnomani ko\'rsatish mumkin.', ru: '17:10. Гарантию назвать ДО цены. Медленно и уверенно. Можно показать договор.' } },
  { C: Tariffs, part: 2, steps: 3, title: { uz: 'Tariflar', ru: 'Тарифы' },
    note: { uz: '17:40. Farqi bitta: ustoz bilan individual vaqt. VIP ni tavsiya qiling: 30 daqiqa + dialog chat.', ru: '17:40. Разница одна: индивидуальное время с преподавателем. Рекомендовать VIP: 30 минут + диалог-чат.' } },
  { C: PerDay, part: 2, steps: 2, title: { uz: 'Kuniga', ru: 'В день' },
    note: { uz: '18:20. Narxni kunga bo\'lib ko\'rsating. Bo\'lib to\'lashni ayting.', ru: '18:20. Показать цену в пересчёте на день. Сказать про рассрочку.' } },
  { C: Objections, part: 2, steps: 4, title: { uz: 'E\'tirozlar', ru: 'Возражения' },
    note: { uz: '18:40. Tomoshabin ichida aytayotgan gaplar. Qisqa va halol javob.', ru: '18:40. То, что зритель говорит про себя. Короткие честные ответы.' } },
  { C: Proof, part: 2, title: { uz: 'Natijalar', ru: 'Результаты' },
    note: { uz: '19:10. Montajda ramkalar o\'rniga 2–3 ta o\'quvchi videosi qo\'yiladi (natijalar kanalidan, roziligi bilan).', ru: '19:10. На монтаже вместо рамок — 2–3 видео учеников (из канала результатов, с их согласия).' } },
  { C: Cta, part: 2, tone: 'blue', steps: 4, title: { uz: 'Keyingi qadam', ru: 'Следующий шаг' },
    note: { uz: '19:30. Aniq uch qadam. Tugma qayerda ekanini qo\'l bilan ko\'rsating.', ru: '19:30. Три конкретных шага. Рукой показать, где кнопка.' } },
  { C: Final, part: 2, tone: 'blue', steps: 3, title: { uz: 'Final', ru: 'Финал' },
    note: { uz: '19:50. Kelajak surati: 90 kundan keyin o\'zi suhbat boshlaydi. Oxirgi gap: «Tugma video ostida. Darsda ko\'rishamiz».', ru: '19:50. Картинка будущего: через 90 дней сам начинает разговор. Последняя фраза: «Кнопка под видео. Увидимся на уроке».' } },
];
