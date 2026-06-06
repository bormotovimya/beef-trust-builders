import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Search,
  GitBranch,
  Brain,
  Handshake,
  CheckCircle2,
  Building2,
  Shield,
  Layers,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/process-mining")({
  head: () => ({
    meta: [
      { title: "Анализ процессов в 1С — Process Mining | Beeff, Пермь" },
      {
        name: "description",
        content:
          "Комплексный анализ эффективности работы с 1С по цифровым следам. Рекомендации, оптимизация, внедрение. 15 лет опыта у крупных клиентов Перми. КП для ЛУКОЙЛ.",
      },
      {
        property: "og:title",
        content: "Анализ процессов в 1С — Process Mining | Beeff, Пермь",
      },
      {
        property: "og:description",
        content:
          "Process Mining + экспертиза интегратора 1С. КП для ЛУКОЙЛ Пермь.",
      },
      { property: "og:url", content: "https://beef-trust-builders.lovable.app/process-mining" },
    ],
    links: [
      { rel: "canonical", href: "https://beef-trust-builders.lovable.app/process-mining" },
    ],
  }),
  component: ProcessMiningPage,
});

function ProcessMiningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Коммерческое предложение · ЛУКОЙЛ Пермь
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Комплексный анализ процессов в 1С — <span className="text-primary">где теряются деньги</span> и как это исправить.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Beeff — 15 лет внедрения 1С у крупных клиентов Перми и края. Проводим анализ
            по цифровым следам (Process Mining), даём рекомендации и помогаем выстроить
            эффективные процессы.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "15 лет · 10 специалистов · Пермский край",
              "Process Mining внутри 1С",
              "ИИ для управленческих решений",
              "От анализа до внедрения и сопровождения",
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Обсудить анализ для вашей базы 1С <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#stages"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Как мы работаем
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Мы знаем 1С изнутри
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Не консалтинг на PowerPoint — практика внедрения.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                За 15 лет мы внедряли и сопровождали информационные системы на базе 1С у
                промышленных предприятий, торговых сетей, инжиниринговых компаний и органов
                власти Пермского края. Видели одни и те же проблемы у разных заказчиков:
              </p>
              <ul className="space-y-3 text-base">
                {[
                  "процесс «на бумаге» не совпадает с тем, что происходит в программе;",
                  "ошибки в настройках бюджетирования и учёта дают управленческие решения на неверных данных;",
                  "менеджеры и бухгалтерия работают в разных «ветках» одного процесса;",
                  "переделки документов, дубли, простои между этапами — никто не считает, сколько это стоит;",
                  "руководство узнаёт о проблемах постфактум, из Excel или на совещании.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p>
                Мы знаем, где в 1С:Комплексная автоматизация и смежных конфигурациях возникают
                узкие места, и умеем не только найти их, но и устранить — настройкой,
                регламентом или доработкой.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border self-start">
              {[
                ["Внедрение под бизнес", "не типовое «как в инструкции», а под реальные процессы"],
                ["Бюджетирование и управленческий учёт", "где ошибки в настройках бьют по решениям"],
                ["Документооборот и цепочки", "заказ → отгрузка → оплата и смежные процессы"],
                ["Сопровождение и развитие", "долгосрочное партнёрство, а не разовый проект"],
              ].map(([title, text]) => (
                <div key={title} className="bg-background p-6">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Что предлагаем сейчас
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Комплексный анализ эффективности процессов в 1С.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Process Mining — анализ по цифровым следам, которые система уже хранит.
          </p>

          <div className="mt-12 grid gap-8 rounded-2xl border border-border bg-background p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Search className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Process Mining восстанавливает <span className="text-foreground font-medium">реальный ход процессов</span> по данным 1С:
                какие документы создаются, в каком порядке, с какими паузами, кто участвует,
                где процесс обрывается или идёт «обходным путём». Не нужно опрашивать
                сотрудников и описывать процесс вручную — цифровые следы уже есть в базе.
              </p>
              <p>
                <span className="text-foreground font-medium">Пилотный фокус:</span> цепочка
                продаж — Заказ клиента → Реализация → Счёт-фактура → Оплата. Дальше — другие
                процессы по согласованию (закупки, производство, бюджетирование).
              </p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-background">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="p-4 font-medium">Этап</th>
                  <th className="p-4 font-medium">Что делаем</th>
                  <th className="p-4 font-medium">Что получает заказчик</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Сбор данных", "Подключаем инструмент анализа к базе 1С, выбираем период и процесс", "Данные не покидают контур 1С"],
                  ["Process Mining", "Строим карту процесса, считаем KPI, находим узкие места и варианты", "Объективная картина «как есть»"],
                  ["Экспертный разбор", "Наши аналитики интерпретируют цифры с учётом специфики отрасли и 1С", "Выводы на языке бизнеса, не IT"],
                  ["Рекомендации", "Конкретные шаги: регламент, настройка, доработка, обучение", "План оптимизации с приоритетами"],
                  ["Внедрение", "По запросу — реализуем улучшения силами нашей команды", "Процесс «как должно быть»"],
                ].map(([stage, what, result]) => (
                  <tr key={stage} className="align-top">
                    <td className="p-4 font-medium">{stage}</td>
                    <td className="p-4 text-muted-foreground">{what}</td>
                    <td className="p-4 text-muted-foreground">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What analysis shows */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Что покажет анализ
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Вопросы, на которые ответит анализ.
          </h2>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "Сколько заказов реально доходят до отгрузки, счёта-фактуры и оплаты — и где отваливаются остальные",
              "Сколько дней теряется между этапами — и на каком переходе «застревает» больше всего",
              "У кого из менеджеров выше доля завершённых цепочек, а у кого процесс обрывается",
              "Где переделки — дубли документов, отмены проведения, восстановление версий",
              "Какие реальные маршруты процесса существуют (не только «идеальный» по регламенту)",
              "Где узкое место — переход, на котором теряется больше всего времени и денег",
            ].map((q) => (
              <li
                key={q}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-base leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Визуализация результатов
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {[
                { icon: GitBranch, title: "Карта процесса", text: "Граф переходов между этапами" },
                { icon: Layers, title: "Воронка и конверсия", text: "От заказа до оплаты" },
                { icon: Search, title: "KPI", text: "Время цикла, переделки, полные цепочки" },
                { icon: UserCheck, title: "Срезы", text: "Менеджеры, подразделения, контрагенты" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-background p-6">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ИИ для управленческих решений
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Искусственный интеллект — не ради моды, а для решений.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-[auto_1fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Помимо классического Process Mining, мы внедряем ИИ для анализа данных и
                помощи в принятии управленческих решений — поверх уже посчитанных метрик,
                а не вместо них.
              </p>
              <ul className="space-y-3">
                {[
                  ["AI-консультант по результатам анализа", "«почему упала конверсия», «что делать с узким местом», «кого из менеджеров разобрать первым» — ответы с опорой на цифры, а не «из головы модели»"],
                  ["Локальное или облачное развёртывание", "по политике информационной безопасности заказчика"],
                  ["Экспорт контекста для корпоративного AI-портала", "без сумм заказов и персональных данных"],
                  ["Конфиденциальность", "суммы и номера документов в запросы к модели не передаются"],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="text-foreground font-medium">{t}</span> — {d}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                ИИ — ускоритель интерпретации для руководителя. Основа решений —{" "}
                <span className="text-foreground font-medium">проверяемые метрики из 1С</span>,
                которые мы считаем детерминированно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            От анализа до постоянного партнёрства
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Не только отчёт — выстраиваем процессы и остаёмся рядом.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Анализ и рекомендации",
                text: "Process Mining + экспертиза интегратора → объективная картина + план улучшений",
              },
              {
                icon: Code2Icon,
                title: "Внедрение улучшений",
                text: "Настройка 1С, доработки, регламенты, обучение пользователей — нашей командой",
              },
              {
                icon: Handshake,
                title: "Постоянное сопровождение",
                text: "Готовы быть единым подрядчиком по всем работам, связанным с 1С: поддержка, обновления, развитие, новые анализы процессов",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-8">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base italic text-muted-foreground">
            15 лет мы строим долгосрочные отношения с клиентами — не разовые проекты.
          </p>
        </div>
      </section>

      {/* Stages timeline */}
      <section id="stages" className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Этапы работы
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Как мы запускаем анализ и развиваем сотрудничество.
          </h2>

          <ol className="mt-12 space-y-6">
            {[
              ["Знакомство и scope", "3–5 дней", "Какой процесс анализируем, доступ к базе, согласование KPI"],
              ["Process Mining-анализ", "1–2 недели", "Цифровые следы, карта процесса, метрики, узкие места"],
              ["Презентация результатов", "1 день", "Разбор с руководством и ключевыми пользователями, приоритизация рекомендаций"],
              ["Внедрение улучшений", "по согласованию", "Настройки, доработки, обучение, контроль эффекта"],
              ["Сопровождение", "ongoing", "Мониторинг метрик, повторный анализ, развитие системы"],
            ].map(([title, time, text], i) => (
              <li
                key={title}
                className="grid gap-4 rounded-lg border border-border bg-background p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
                <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {time}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Запросить сроки и формат пилота для ЛУКОЙЛ Пермь <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Наши клиенты
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Нам доверяют в Перми и крае.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Промышленность, торговля, инжиниринг, госсектор — внедрение и сопровождение 1С.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-muted-foreground">
                <Building2 className="h-4 w-4" strokeWidth={1.75} />
                Промышленность и бизнес
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["ПКНМ", "Рост Интек", "Лента", "ГК Технология", "ПРО ТКО", "АСУ Инжиниринг", "Промобот"].map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-card px-3 py-2 text-sm font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-muted-foreground">
                <Shield className="h-4 w-4" strokeWidth={1.75} />
                Госсектор
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Избирательная комиссия Пермского края",
                  "Минфин Пермского края",
                  "Администрация города Перми",
                  "Законодательное собрание Пермского края",
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-card px-3 py-2 text-sm font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Beeff */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Почему Beeff
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Почему Beeff для ЛУКОЙЛ Пермь.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Регион и масштаб", "15 лет в Перми, опыт у крупных промышленных и госклиентов края"],
              ["Полный цикл", "от диагностики Process Mining до доработки 1С и сопровождения"],
              ["Данные в контуре", "анализ внутри 1С, без обязательной выгрузки во внешние системы"],
              ["Ключевой эксперт", "личное участие собственника в сложных проектах (Райс С.В.)"],
            ].map(([title, text]) => (
              <div key={title} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Частые вопросы.
          </h2>

          <div className="mt-12 divide-y divide-border rounded-lg border border-border bg-background">
            {[
              ["Это готовый продукт или услуга?", "Услуга комплексного анализа с применением нашего инструмента Process Mining. Инструмент — средство; ценность — в экспертизе и рекомендациях."],
              ["Нужно ли менять конфигурацию 1С?", "На этапе анализа нет. Для постоянного мониторинга — обсуждается."],
              ["Какие процессы можно анализировать?", "Пилот: продажи (заказ → оплата). Далее: закупки, бюджетирование, производство — по согласованию."],
              ["Чем это лучше аудита «руками»?", "Объективные данные по всей выборке, а не выборочные интервью."],
              ["Что после анализа?", "Рекомендации + по запросу внедрение + постоянное сопровождение 1С."],
              ["Как с информационной безопасностью?", "Расчёт в 1С, RLS, ИИ опционален и настраивается локально."],
            ].map(([q, a]) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section
        id="contacts"
        className="border-b border-border/60 bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] opacity-70">Контакты</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Обсудим анализ процессов для ЛУКОЙЛ Пермь.
          </h2>

          <div className="mt-14 grid gap-16 md:grid-cols-2">
            <ContactForm />

            <div className="space-y-6 text-lg">
              <a
                href="mailto:rice@beeff.ru"
                className="flex items-center gap-4 border-b border-primary-foreground/20 pb-6 transition-opacity hover:opacity-80"
              >
                <Mail className="h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
                <span>rice@beeff.ru</span>
              </a>
              <a
                href="tel:83422719655"
                className="flex items-center gap-4 border-b border-primary-foreground/20 pb-6 transition-opacity hover:opacity-80"
              >
                <Phone className="h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
                <span>8 (342) 271-96-55</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
                <span className="text-base leading-relaxed opacity-90">
                  Пермь, ул. Карпинского, 77
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-10 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} ООО «БИФ» (Beeff). Все права защищены.</span>
          <Link to="/" className="hover:text-foreground transition-colors">
            ← На главную
          </Link>
        </div>
      </footer>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight">Beeff</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            1С · Пермь
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition-colors">
            О компании
          </Link>
          <Link
            to="/process-mining"
            className="text-foreground transition-colors"
          >
            Анализ процессов
          </Link>
          <a href="#contacts" className="hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>
        <a
          href="#contacts"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
      >
        <span className="text-base font-medium">{q}</span>
        <span className="text-muted-foreground text-xl leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>
      )}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent("КП Process Mining — заявка с сайта");
        const body = encodeURIComponent(
          `Имя: ${data.get("name") || ""}\nДолжность: ${data.get("role") || ""}\nEmail: ${data.get("email") || ""}\nТелефон: ${data.get("phone") || ""}\n\nКомментарий:\n${data.get("comment") || ""}`,
        );
        window.location.href = `mailto:rice@beeff.ru?subject=${subject}&body=${body}`;
        setSent(true);
      }}
      className="space-y-4 rounded-xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/15"
    >
      {[
        { name: "name", placeholder: "Имя", required: true, type: "text" },
        { name: "role", placeholder: "Должность", required: false, type: "text" },
        { name: "email", placeholder: "Email", required: true, type: "email" },
        { name: "phone", placeholder: "Телефон", required: false, type: "tel" },
      ].map((f) => (
        <input
          key={f.name}
          name={f.name}
          type={f.type}
          required={f.required}
          placeholder={f.placeholder}
          className="w-full rounded-md border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/60"
        />
      ))}
      <textarea
        name="comment"
        rows={4}
        placeholder="Комментарий"
        className="w-full rounded-md border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/60"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
      >
        Отправить заявку <ArrowRight className="h-4 w-4" />
      </button>
      {sent && (
        <p className="text-sm opacity-80">Открыт почтовый клиент — отправьте письмо.</p>
      )}
    </form>
  );
}

// lucide doesn't export Code2Icon; alias locally
import { Code2 as Code2Icon } from "lucide-react";
