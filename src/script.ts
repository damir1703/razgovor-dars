// Полный текст спикера по слайдам (в том же порядке, что SLIDES). t — ориентир по времени.
// Открывается кнопкой «Ssenariy / Сценарий» или ссылкой ?text=1.
import type { L } from './lib/ctx';

export const INTRO: L = {
  uz: 'Bu 20 daqiqalik bepul video-dars (VSL). Maqsad: tomoshabin darsning o\'zida ruscha gapirib ko\'radi, natijani his qiladi va kursga ariza qoldiradi. Tomoshabin: o\'zbek tilida so\'zlashuvchi kattalar, ko\'pchiligi boshlang\'ich darajada, ruschani biroz tushunadi, lekin gapira olmaydi. Ohang: do\'stona, sodda, bosimsiz. Eng muhim qoida: spiker har bir ruscha gapdan keyin pauza qiladi, tomoshabin ovoz chiqarib qaytaradi.',
  ru: 'Это 20-минутный бесплатный видеоурок (VSL). Цель: зритель прямо на уроке пробует говорить по-русски, чувствует результат и оставляет заявку на курс. Зритель: узбекоязычные взрослые, большинство на начальном уровне, немного понимают по-русски, но не говорят. Тон: дружеский, простой, без давления. Главное правило: после каждой русской фразы спикер делает паузу, зритель повторяет вслух.',
};

export const SCRIPT: { t: string; say: L }[] = [
  // ── 1-qism. Muammo ──
  { t: '0:00', say: {
    uz: 'Assalomu alaykum! Bitta savol beraman. Ruscha gapirishsa, tushunasiz. Lekin o\'zingiz gapirmoqchi bo\'lsangiz, so\'z chiqmaydi. Shundaymi? Unda bu dars siz uchun. Mening ismim [ism], men Razgovor.uz maktabida rus tilidan dars beraman. Keyingi 20 daqiqada siz 3 ta shablon bilan 48 ta gap tuzasiz va ularni o\'zingiz ovoz chiqarib aytasiz.',
    ru: 'Здравствуйте! Задам один вопрос. Когда говорят по-русски, вы понимаете. А когда хотите сказать сами — слова не идут. Так? Тогда этот урок для вас. Меня зовут [имя], я преподаю русский в школе Razgovor.uz. За следующие 20 минут вы по 3 шаблонам составите 48 фраз и сами произнесёте их вслух.' } },
  { t: '0:30', say: {
    uz: 'Bu darsda uchta narsa bo\'ladi. Birinchisi: nega shu paytgacha o\'zingiz o\'rgana olmadingiz. To\'rtta sabab bor, bittasi aniq sizniki. Ikkinchisi: 3 ta shablon. Yodlamaysiz, shu yerning o\'zida gapirasiz. Uchinchisi: 90 kunda razgovorga chiqish rejasi. Uni oxirida ko\'rsataman, shuning uchun videoni o\'chirmang.',
    ru: 'На уроке будет три вещи. Первая: почему до сих пор не получалось выучить самому. Причин четыре, одна точно ваша. Вторая: 3 шаблона. Не зубрите, говорите прямо здесь. Третья: план, как выйти на разговор за 90 дней. Его покажу в конце, поэтому не выключайте видео.' } },
  { t: '1:00', say: {
    uz: 'Avval ayting-chi, bu holatlar sizga tanishmi? Ishda boshliq ruscha gapiradi. Siz tushunasiz, lekin faqat bosh irg\'ab turasiz. Do\'konga yoki bankka borishdan oldin aytadigan gapingizni yo\'lda yodlab borasiz. So\'zni bilasiz, lekin gapni tuzguningizcha suhbat boshqa mavzuga o\'tib ketadi. Telefon ruscha jiringlasa, yoningizdagi odamga uzatasiz. Agar bittasi bo\'lsa ham sizniki bo\'lsa, davom eting.',
    ru: 'Сначала скажите: знакомы ли вам эти ситуации? Начальник говорит по-русски. Вы понимаете, но только киваете. Перед магазином или банком по дороге заучиваете фразу. Слово знаете, но пока строите фразу, разговор уже ушёл дальше. Звонят по-русски — передаёте трубку тому, кто рядом. Если хоть одна ситуация ваша — смотрите дальше.' } },
  { t: '1:40', say: {
    uz: 'Uyaladigan joyi yo\'q. Biz obunachilarimiz orasida so\'rovnoma o\'tkazdik, 221 kishi javob berdi. Ularning 78 foizi hali boshlang\'ich darajada. Eng ko\'p nimada qiynalishadi? So\'z boyligi yetmaydi. Talaffuz va urg\'u. Eshitganini tushunmaydi. Va deyarli hamma bitta narsani so\'ragan: «gaplashishni o\'rgating».',
    ru: 'Стыдиться нечего. Мы провели опрос среди подписчиков, ответил 221 человек. 78 процентов из них всё ещё на начальном уровне. С чем труднее всего? Не хватает слов. Произношение и ударение. Не понимают на слух. И почти все просили одного: «научите разговаривать».' } },
  { t: '2:10', say: {
    uz: 'Nega o\'zingiz o\'rgana olmayapsiz? To\'rtta sabab bor. Birinchi: siz so\'z yodlaysiz. Lekin alohida so\'z miyada turmaydi, ertasiga yarmi esdan chiqadi. Ikkinchi: siz video ko\'rasiz, tinglaysiz, lekin gapirmaysiz. Video sizga gapiradi, siz unga javob bermaysiz. Uchinchi: xatoingizni hech kim tuzatmaydi, talaffuz noto\'g\'ri o\'rnashib qoladi. To\'rtinchi: nazorat yo\'q. «Bugun charchadim» deysiz va ikki haftadan keyin tashlab qo\'yasiz.',
    ru: 'Почему не получается самому? Причин четыре. Первая: вы учите слова. Но слово в одиночку не держится, назавтра половины нет. Вторая: вы смотрите видео, слушаете, но не говорите. Видео говорит вам, вы ему не отвечаете. Третья: ошибки никто не исправляет, произношение закрепляется неправильно. Четвёртая: нет контроля. «Сегодня устал» — и через две недели бросаете.' } },
  { t: '3:00', say: {
    uz: 'Endi eng muhimini aytaman: muammo sizda emas. Sizda qobiliyat bor, xotira ham joyida. Sizga amaliyot yetishmaydi. Til bu bilim emas, ko\'nikma. Suzishni kitobdan o\'rganib bo\'lmaydi, suvga tushish kerak. Odatda kurslarda nazariya ko\'p, gapirish kam. Bizda aksincha: ko\'proq gapirish, kamroq nazariya. Hozir buni amalda ko\'rsataman.',
    ru: 'Теперь главное: проблема не в вас. Способности есть, память в порядке. Вам не хватает практики. Язык — это не знание, а навык. Плавать по книге не научишься, нужно зайти в воду. Обычно на курсах много теории и мало разговора. У нас наоборот: больше разговора, меньше теории. Сейчас покажу это на практике.' } },

  // ── 2-qism. Dars ──
  { t: '3:30', say: {
    uz: 'Dars boshlandi. Bitta qoida: daftar va ruchka kerak emas. Menga ovozingiz kerak. Men aytaman, siz ovoz chiqarib qaytarasiz. Uyalmang, sizni hech kim eshitmaydi. Biz so\'z yodlamaymiz, shablon yodlaymiz. 3 ta shablon, 8 ta fe\'l, natijada 24 ta tayyor gap.',
    ru: 'Урок начинается. Одно правило: тетрадь и ручка не нужны. Мне нужен ваш голос. Я говорю, вы повторяете вслух. Не стесняйтесь, вас никто не слышит. Мы учим не слова, а шаблоны. 3 шаблона, 8 глаголов — получается 24 готовые фразы.' } },
  { t: '4:00', say: {
    uz: 'Nega ruscha gap kech chiqadi? Chunki darslikda fe\'lning olti xil shakli bor: я работаю, ты работаешь, он работает… Har safar oxirini o\'ylaysiz va suhbatdan orqada qolasiz. Shablonda esa fe\'l o\'zgarmaydi. U lug\'atdagi shaklida qoladi: работать. Я хочу работать. Мне нужно работать. Можно работать? Uchta gap, bitta shakl.',
    ru: 'Почему русская фраза запаздывает? Потому что в учебнике у глагола шесть форм: я работаю, ты работаешь, он работает… Каждый раз думаете об окончании и отстаёте от разговора. А в шаблоне глагол не меняется. Он остаётся в словарной форме: работать. Я хочу работать. Мне нужно работать. Можно работать? Три фразы, одна форма.' } },
  { t: '4:40', say: {
    uz: 'Birinchi shablon: «Я хочу». Ma\'nosi: men …moqchiman. Diqqat, «хочу» emas, «хачу» deb aytiladi. Qaytaring: я хачу. [pauza] Endi fe\'l qo\'shamiz. Я хочу работать: men ishlamoqchiman. Qaytaring. [pauza] Я хочу купить: men sotib olmoqchiman. [pauza] Я хочу спросить: men so\'ramoqchiman. [pauza] Juda yaxshi!',
    ru: 'Первый шаблон: «Я хочу». Значение: men …moqchiman. Внимание, звучит не «хочу», а «хачу». Повторите: я хачу. [пауза] Теперь добавляем глагол. Я хочу работать. Повторите. [пауза] Я хочу купить. [пауза] Я хочу спросить. [пауза] Отлично!' } },
  { t: '5:50', say: {
    uz: 'Ikkinchi shablon: «Мне нужно». Ma\'nosi: men …shim kerak. Ishda eng ko\'p kerak bo\'ladigan shablon shu. Aytilishi: «мне нужна». Qaytaring. [pauza] Мне нужно позвонить: men qo\'ng\'iroq qilishim kerak. [pauza] Мне нужно оплатить: men to\'lashim kerak. [pauza] Мне нужно отдохнуть: men dam olishim kerak. [pauza]',
    ru: 'Второй шаблон: «Мне нужно». Значение: men …shim kerak. На работе это самый нужный шаблон. Звучит: «мне нужна». Повторите. [пауза] Мне нужно позвонить. [пауза] Мне нужно оплатить. [пауза] Мне нужно отдохнуть. [пауза]' } },
  { t: '7:00', say: {
    uz: 'Uchinchi shablon: «Можно». Bu bilan har qanday ruxsat so\'raladi. Aytilishi: «можна». Bu savol, shuning uchun ovoz oxirida ko\'tariladi: Можно? Qaytaring. [pauza] Можно войти? Kirsam bo\'ladimi? [pauza] Можно спросить? So\'rasam bo\'ladimi? [pauza] Можно поесть? Ovqatlansam bo\'ladimi? [pauza]',
    ru: 'Третий шаблон: «Можно». Через него спрашивают любое разрешение. Звучит: «можна». Это вопрос, поэтому голос в конце идёт вверх: Можно? Повторите. [пауза] Можно войти? [пауза] Можно спросить? [пауза] Можно поесть? [пауза]' } },
  { t: '8:00', say: {
    uz: 'Mana sakkizta fe\'l. Bular har kuni kerak bo\'ladi. Birga o\'qiymiz: работать, купить, спросить, позвонить. [pauza] Оплатить, отдохнуть, поесть, войти. [pauza] Bitta sirni aytaman: ruschada urg\'usiz «о» «а» bo\'lib eshitiladi. «Спросить» deb yoziladi, «спрасить» deb aytiladi. Shuning uchun eshitganda tanimaysiz.',
    ru: 'Вот восемь глаголов. Они нужны каждый день. Читаем вместе: работать, купить, спросить, позвонить. [пауза] Оплатить, отдохнуть, поесть, войти. [пауза] Один секрет: безударное «о» в русском звучит как «а». Пишется «спросить», звучит «спрасить». Поэтому на слух вы слово не узнаёте.' } },
  { t: '9:00', say: {
    uz: 'Endi konstruktor. Men shablonni tanlayman, fe\'lni tanlayman, gap tayyor. [tugmalarni bosing] Я хочу оплатить. Ayting! [pauza] Мне нужно войти. [pauza] Можно позвонить? [pauza] Ko\'ryapsizmi? Uchta shablon, sakkizta fe\'l: 24 ta gap. Siz ularni yodlamadingiz, o\'zingiz yig\'dingiz. Yangi fe\'l o\'rgansangiz, darrov yana uchta gap paydo bo\'ladi.',
    ru: 'Теперь конструктор. Выбираю шаблон, выбираю глагол — фраза готова. [нажимать кнопки] Я хочу оплатить. Скажите! [пауза] Мне нужно войти. [пауза] Можно позвонить? [пауза] Видите? Три шаблона, восемь глаголов: 24 фразы. Вы их не заучивали, а собрали сами. Выучите новый глагол — сразу появятся ещё три фразы.' } },
  { t: '10:20', say: {
    uz: 'Endi bitta kichkina so\'z qo\'shamiz: «не». Я не хочу работать: men ishlamoqchi emasman. [pauza] Мне не нужно работать: men ishlashim shart emas. [pauza] Diqqat qiling: «не можно» deyilmaydi. To\'g\'risi: «нельзя». Нельзя войти: kirish mumkin emas. [pauza] Bitta so\'z, va gaplar soni ikki barobar: 48 ta.',
    ru: 'Теперь добавим одно маленькое слово: «не». Я не хочу работать. [пауза] Мне не нужно работать. [пауза] Внимание: «не можно» не говорят. Правильно: «нельзя». Нельзя войти. [пауза] Одно слово — и фраз вдвое больше: 48.' } },
  { t: '11:10', say: {
    uz: 'Endi siz. Men o\'zbekcha aytaman, siz ruscha ayting. Javobni avval o\'zingiz ayting, keyin tekshiramiz. «Men to\'lamoqchiman». [3 soniya pauza] Я хочу оплатить. To\'g\'ri! «Kirsam bo\'ladimi?» [pauza] Можно войти? «Men qo\'ng\'iroq qilishim kerak». [pauza] Мне нужно позвонить. «Men ishlamoqchi emasman». [pauza] Я не хочу работать. Ana, aytdingiz!',
    ru: 'Теперь вы. Я говорю по-узбекски, вы — по-русски. Сначала скажите ответ сами, потом проверим. «Men to\'lamoqchiman». [пауза 3 секунды] Я хочу оплатить. Верно! «Kirsam bo\'ladimi?» [пауза] Можно войти? «Men qo\'ng\'iroq qilishim kerak». [пауза] Мне нужно позвонить. «Men ishlamoqchi emasman». [пауза] Я не хочу работать. Вот, вы сказали!' } },
  { t: '12:00', say: {
    uz: 'Endi haqiqiy suhbat. Tasavvur qiling, siz vokzalda kassadasiz. Men kassirman. To\'q sariq gaplarni siz aytasiz. Boshladik. [pauza: tomoshabin] Здравствуйте! Можно спросить? — Да, конечно. [pauza] Я хочу купить билет. — Пожалуйста. [pauza] Мне нужно оплатить. Можно картой? — Да, можно. Yana bir marta, endi tezroq.',
    ru: 'Теперь настоящий разговор. Представьте: вы на вокзале у кассы. Я — кассир. Оранжевые реплики говорите вы. Начали. [пауза: зритель] Здравствуйте! Можно спросить? — Да, конечно. [пауза] Я хочу купить билет. — Пожалуйста. [пауза] Мне нужно оплатить. Можно картой? — Да, можно. Ещё раз, теперь быстрее.' } },
  { t: '13:00', say: {
    uz: 'To\'xtang. Nima bo\'lganini tushundingizmi? Siz hozirgina ruscha gapirdingiz. O\'n daqiqa ichida: uchta shablon, sakkizta fe\'l, 48 ta tayyor gap va bitta jonli dialog. Yodlamasdan. Va bu bizning kursimizdagi bitta darsning faqat bir qismi.',
    ru: 'Стоп. Понимаете, что произошло? Вы только что говорили по-русски. За десять минут: три шаблона, восемь глаголов, 48 готовых фраз и один живой диалог. Без зубрёжки. И это только часть одного урока нашего курса.' } },
  { t: '13:30', say: {
    uz: 'Lekin halol aytaman. Siz «Я хочу купить билет» dedingiz. Endi sizga javob berishadi. [tez o\'qing] «Вам на какое число? Туда и обратно? Плацкарт или купе? Паспорт с собой?» Tushundingizmi? Javob bera olasizmi? Mana shu yerda hamma to\'xtab qoladi. Buni yodlab bo\'lmaydi. Buni faqat jonli odam bilan har kuni gaplashib o\'rganasiz.',
    ru: 'Но скажу честно. Вы сказали «Я хочу купить билет». Теперь вам ответят. [читать быстро] «Вам на какое число? Туда и обратно? Плацкарт или купе? Паспорт с собой?» Поняли? Сможете ответить? Вот здесь все и останавливаются. Это нельзя выучить наизусть. Этому учатся только в ежедневном разговоре с живым человеком.' } },

  // ── 3-qism. Kurs ──
  { t: '14:00', say: {
    uz: 'Bugundan keyin sizda ikkita yo\'l bor. Birinchisi: o\'zingiz davom etasiz. So\'z daftari, YouTube. Gaplashadigan odam yo\'q, xatoni hech kim aytmaydi. Bir yildan keyin ham «tushunaman, lekin gapira olmayman» deysiz. Ikkinchisi: biz bilan. Har hafta jonli darslar, ustoz bilan yakkama-yakka, xato o\'sha zahoti tuzatiladi. 90 kunda razgovor darajasi. Ikkala yo\'l ham mumkin. Farqi vaqtda.',
    ru: 'После этого урока у вас два пути. Первый: продолжаете сами. Тетрадь со словами, YouTube. Говорить не с кем, об ошибках никто не скажет. Через год всё то же «понимаю, но не говорю». Второй: с нами. Живые уроки каждую неделю, один на один с преподавателем, ошибку исправляют сразу. Разговорный уровень за 90 дней. Возможны оба пути. Разница во времени.' } },
  { t: '14:40', say: {
    uz: 'Boshida to\'rtta sababni aytgan edim. Bizning metodikamiz aynan shularga javob. So\'z yodlaysiz, gap chiqmaydi: bizda 40 ta video dars va lug\'atlar, tayyor shablonlar bilan. Tinglaysiz, lekin gapirmaysiz: 40 ta jonli razgovor darsi, u yerda ustoz emas, siz gapirasiz. Xatoni hech kim tuzatmaydi: individual dars, ustoz faqat sizning talaffuzingiz bilan ishlaydi. Nazorat yo\'q: o\'qituvchi va nazoratchi ustoz har kuni soat 10 dan 22 gacha aloqada.',
    ru: 'В начале я назвал четыре причины. Наша методика — ответ именно на них. Учите слова, а фраза не выходит: у нас 40 видеоуроков и словари с готовыми шаблонами. Слушаете, но не говорите: 40 живых разговорных уроков, где говорит не преподаватель, а вы. Ошибки никто не исправляет: индивидуальный урок, преподаватель работает только с вашим произношением. Нет контроля: преподаватель и куратор на связи каждый день с 10 до 22.' } },
  { t: '15:30', say: {
    uz: 'Bir haftangiz shunday o\'tadi. Uch kun: ustoz bilan individual jonli dars. Ikki kun: guruhda jonli dars, boshqa o\'quvchilar bilan gaplashasiz. Bir kun: musiqali dars. Ya\'ni haftada besh kun siz jonli gapirasiz. Video darslarni istalgan vaqtda ko\'rasiz. Dars vaqtini o\'zingiz tanlaysiz, ertalab 10 dan kechki 10 gacha.',
    ru: 'Так проходит ваша неделя. Три дня: индивидуальный живой урок с преподавателем. Два дня: живой урок в группе, говорите с другими учениками. Один день: музыкальный урок. То есть пять дней в неделю вы говорите вживую. Видеоуроки смотрите в любое время. Время занятий выбираете сами, с 10 утра до 10 вечера.' } },
  { t: '16:00', say: {
    uz: 'Musiqali dars faqat bizda bor. Kursda 13 ta shunday dars. Siz qo\'shiq aytib o\'rganasiz. Nega bu ishlaydi? Qo\'shiqdagi so\'zni yodlamaysiz, u o\'zi esda qoladi. Bir vaqtning o\'zida so\'z boyligi oshadi, talaffuz to\'g\'rilanadi va quloq rus nutqiga o\'rganadi. Mana kichik parcha. [montajda: haqiqiy darsdan lavha]',
    ru: 'Музыкальный урок есть только у нас. В курсе 13 таких уроков. Вы учитесь, подпевая. Почему это работает? Слово из песни не зубрят, оно запоминается само. Одновременно растёт словарный запас, выправляется произношение и ухо привыкает к русской речи. Вот небольшой фрагмент. [на монтаже: отрывок настоящего урока]' } },
  { t: '16:30', say: {
    uz: 'Har bir tarifda nima bor, tez sanab chiqaman. 40 ta jonli razgovor darsi. Ustoz bilan individual shug\'ullanish. 40 ta video darslik. 13 ta musiqali dars. O\'qituvchi va nazoratchi ustoz. Audio va matnli lug\'atlar. Test va mashqlar. Alohida Telegram kanal. Darslarni ikki haftagacha muzlatish imkoniyati. Kurs oxirida sertifikat.',
    ru: 'Что есть в каждом тарифе — быстро перечислю. 40 живых разговорных уроков. Индивидуальные занятия с преподавателем. 40 видеоуроков. 13 музыкальных уроков. Преподаватель и куратор. Аудио- и текстовые словари. Тесты и упражнения. Отдельный Telegram-канал. Заморозка занятий до двух недель. Сертификат в конце курса.' } },
  { t: '17:10', say: {
    uz: 'Narxni aytishdan oldin eng muhimi. Biz natijani shartnomada yozamiz. 90 kunda natija bo\'ladi. Bo\'lmasa, pulingiz qaytadi. Shuning uchun biz sizni nazorat qilamiz, dars qoldirsangiz yozamiz, qo\'ng\'iroq qilamiz. Natija sizga ham, bizga ham kerak.',
    ru: 'Перед ценой — самое важное. Мы закрепляем результат в договоре. Результат за 90 дней. Иначе вернём деньги. Поэтому мы вас и контролируем: пропустили урок — напишем и позвоним. Результат нужен и вам, и нам.' } },
  { t: '17:40', say: {
    uz: 'Uchta tarif bor. Farqi bitta narsada: ustoz bilan yakkama-yakka vaqt. RAZGOVOR: har darsda 15 daqiqa, narxi 2 million 487 ming so\'m. VIP: 30 daqiqa va 12 soatlik dialog chat, 3 million 679 ming. Uni eng ko\'p tanlashadi. EXPRESS: bir soat, shaxsiy mentor va kitob, 5 million 679 ming. Bo\'lib to\'lash mumkin. Qaysi biri sizga mos kelishini menejer bilan birga tanlaysiz.',
    ru: 'Тарифов три. Разница в одном: время один на один с преподавателем. RAZGOVOR: 15 минут на уроке, 2 миллиона 487 тысяч сум. VIP: 30 минут и 12 часов диалог-чата, 3 миллиона 679 тысяч. Его выбирают чаще всего. EXPRESS: час, личный ментор и книга, 5 миллионов 679 тысяч. Можно в рассрочку. Какой подойдёт вам — выберете вместе с менеджером.' } },
  { t: '18:20', say: {
    uz: 'Keling, hisoblab ko\'ramiz. RAZGOVOR tarifi 90 kunga bo\'linsa, kuniga taxminan 27 ming 600 so\'m chiqadi. Bu bir tushlik narxi. Evaziga har kuni jonli amaliyot va nazorat. Bir yo\'la to\'lash shart emas: Alif Nasiya yoki Uzum Nasiya orqali bo\'lib to\'lash mumkin.',
    ru: 'Давайте посчитаем. Тариф RAZGOVOR, поделённый на 90 дней, — это примерно 27 600 сум в день. Цена одного обеда. Взамен — живая практика и контроль каждый день. Платить сразу не обязательно: есть рассрочка через Alif Nasiya или Uzum Nasiya.' } },
  { t: '18:40', say: {
    uz: 'Hozir nima deb o\'ylayotganingizni bilaman. «Vaqtim yo\'q». Kuniga 20–30 daqiqa kerak, vaqtni o\'zingiz tanlaysiz. «Qimmat». Bo\'lib to\'lash bor, natija esa shartnomada kafolatlangan. «Onlayn o\'rgana olmayman». Bu video kurs emas, jonli ustoz bilan yakkama-yakka, yo\'lga vaqt ketmaydi. «Oldin kursda o\'qiganman, foydasi bo\'lmagan». U yerda tinglagansiz. Bu yerda har darsda o\'zingiz gapirasiz.',
    ru: 'Знаю, о чём вы сейчас думаете. «Нет времени». Нужно 20–30 минут в день, время выбираете сами. «Дорого». Есть рассрочка, а результат гарантирован договором. «Онлайн не научусь». Это не видеокурс, а живой преподаватель один на один, и не надо никуда ехать. «Уже учился на курсах, не помогло». Там вы слушали. Здесь на каждом уроке говорите сами.' } },
  { t: '19:10', say: {
    uz: 'Mening gapimga emas, o\'quvchilarimizga quloq soling. [montajda: 2–3 ta o\'quvchi videosi] Bular bir necha oy oldin siz kabi «tushunaman, lekin gapira olmayman» degan odamlar. Barcha natijalar Telegram kanalimizda.',
    ru: 'Слушайте не меня, а наших учеников. [на монтаже: 2–3 видео учеников] Несколько месяцев назад они, как и вы, говорили «понимаю, но не могу сказать». Все результаты — в нашем Telegram-канале.' } },
  { t: '19:30', say: {
    uz: 'Keyingi qadam juda oddiy. Birinchi: shu video ostidagi tugmani bosing va ariza qoldiring, 30 soniya ketadi. Ikkinchi: menejerimiz sizga qo\'ng\'iroq qiladi, darajangiz va maqsadingizni aniqlaydi. Uchinchi: sizga mos tarif va dars vaqti bilan shaxsiy reja olasiz. Konsultatsiya bepul va sizni hech narsaga majburlamaydi.',
    ru: 'Следующий шаг очень простой. Первое: нажмите кнопку под этим видео и оставьте заявку, это 30 секунд. Второе: вам позвонит менеджер, определит уровень и цель. Третье: получите личный план с подходящим тарифом и временем уроков. Консультация бесплатная и ни к чему не обязывает.' } },
  { t: '19:50', say: {
    uz: 'Bugun siz uchta shablonni bilasiz va 48 ta gap ayta olasiz. 90 kundan keyin ishda, do\'konda, telefonda suhbatni o\'zingiz boshlaysiz va bemalol aytasiz: «Я говорю по-русски». Tugma video ostida. Darsda ko\'rishguncha!',
    ru: 'Сегодня вы знаете три шаблона и можете сказать 48 фраз. Через 90 дней на работе, в магазине, по телефону вы сами начнёте разговор и спокойно скажете: «Я говорю по-русски». Кнопка под видео. До встречи на уроке!' } },
];
