import { useEffect, useRef } from "react";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Database,
  FileCheck2,
  Gauge,
  Instagram,
  Layers3,
  MessageCircle,
  Network,
  Rocket,
  Send,
  Settings2,
  Sparkles,
  Target,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/213560843444?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AF%D9%88%D8%B1%D8%A9%20AI%20Automation";
const instagramUrl = "https://www.instagram.com/rayan.mazari/";

const learningTopics = [
  ["ما هو AI Automation؟", "الفرق بين Automation وAI Automation وAI Agent", Network],
  ["الأساسيات التقنية", "API, Webhook, JSON, HTTP", Code2],
  ["التعرف على أداة n8n وتثبيتها", "تبدأ من جهازك وتفهم منطق الأداة من أول عقدة.", Terminal],
  ["بناء أول Workflow عملي", "تحوّل مهمة متكررة إلى نظام يعمل بهدوء من خلف الكواليس.", Layers3],
  ["دمج الذكاء الاصطناعي Claude داخل الأتمتة", "تضيف الفهم والقرار إلى تدفقاتك، لا مجرد تنفيذ آلي.", Sparkles],
  ["بناء AI Agent حقيقي بأدوات وذاكرة (Tools & Memory)", "تبني وكيلاً يتذكر، يبحث، ويتصرف بدل أن يكتفي بالرد.", Gauge],
  ["ربط قواعد البيانات (Google Sheets / Airtable)", "تربط بياناتك وتديرها دون فوضى أو نسخ ولصق.", Database],
  ["ربط قنوات التواصل (واتساب / تيليجرام)", "تصل الأتمتة إلى مكان عملك الحقيقي، حيث يتحرك العميل.", MessageCircle],
  ["بناء لوحة تحكم (Dashboard) للتحكم بالنظام", "تراقب ما يحدث في لحظته وتتحكم في النظام من مكان واحد.", Settings2],
  ["النشر على استضافة حقيقية (Hostinger VPS + Docker)", "تنتقل من تجربة على جهازك إلى نظام يعمل في الإنتاج.", Rocket],
  ["الصيانة والمراقبة والتطوير المستمر", "تبني نظاماً قابلاً للنمو، لا Workflow ينهار بعد أسبوع.", Wrench],
] as const;

const valuePoints = [
  {
    title: "بيع الأنظمة وإقناع العملاء",
    body: "أسعار حقيقية وتقنيات تفاوض تساعدك على بيع النتيجة، لا عدد الساعات.",
    icon: Target,
  },
  {
    title: "العثور على أول العملاء",
    body: "خارطة عملية للخروج من مرحلة التعلّم إلى أول محادثة وفرصة مدفوعة.",
    icon: Users,
  },
  {
    title: "تسليم المشروع باحتراف",
    body: "وثيقة تسليم رسمية جاهزة تمنح العميل وضوحاً وثقة بعد آخر خطوة.",
    icon: FileCheck2,
  },
  {
    title: "6 قوالب أتمتة جاهزة للاستعمال",
    body: "للتسويق الرقمي، مكاتب المحاماة، التجارة الإلكترونية، العيادات، العقارات، والخدمات المحلية.",
    icon: BriefcaseBusiness,
  },
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.13 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionKicker({
  index,
  children,
  light = false,
}: {
  index: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-kicker ${light ? "section-kicker-light" : ""}`}>
      <span>{index}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

export function AutomationLanding() {
  useEffect(() => {
    document.title = "AI Automation — من الصفر إلى الاحتراف مع n8n";
    const description =
      "تعلم AI Automation مع n8n بالعربية والإنجليزية، وابنِ أنظمة ذكية قابلة للبيع من الصفر إلى النشر.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  return (
    <main className="automation-page" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Space+Mono:wght@400;700&display=swap');
        .automation-page {
          --ink: #111016;
          --ink-soft: #49434d;
          --paper: #fcfaf8;
          --blush: #f8dce7;
          --pink: #df286d;
          --pink-deep: #a6134f;
          --rose-line: #efb7cb;
          --night: #18121a;
          --night-soft: #2c202a;
          min-height: 100vh;
          overflow: hidden;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
        }
        .automation-page *, .automation-page *::before, .automation-page *::after { box-sizing: border-box; }
        .automation-page a { color: inherit; text-decoration: none; }
        .automation-page button { font: inherit; }
        .automation-page h1, .automation-page h2, .automation-page h3, .automation-page p { margin: 0; }
        .automation-page h1, .automation-page h2, .automation-page h3, .serif { font-family: 'Playfair Display', Georgia, serif; }
        .container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
        .topbar {
          position: absolute; z-index: 3; top: 0; right: 0; left: 0;
          display: flex; justify-content: space-between; align-items: center;
          width: min(1220px, calc(100% - 48px)); margin: 0 auto; padding: 26px 0;
          border-bottom: 1px solid rgba(17,16,22,.14);
        }
        .brand { display: inline-flex; align-items: center; gap: 11px; font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 700; letter-spacing: -.04em; }
        .brand-mark { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--ink); color: var(--paper); font-family: 'Playfair Display', serif; font-size: 17px; }
        .top-nav { display: flex; align-items: center; gap: 28px; font-size: 12px; font-weight: 600; color: var(--ink-soft); }
        .top-nav a { transition: color .25s ease; }
        .top-nav a:hover { color: var(--pink); }
        .mini-cta { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid var(--ink); border-radius: 999px; font-size: 11px; font-weight: 700; transition: background .25s ease, color .25s ease, transform .25s ease; }
        .mini-cta:hover { background: var(--ink); color: var(--paper); transform: translateY(-2px); }
        .hero { position: relative; min-height: 790px; padding: 150px 0 90px; background: radial-gradient(circle at 78% 23%, rgba(222,39,109,.18), transparent 28%), linear-gradient(115deg, #fcfaf8 0%, #fdf7f7 58%, #f7d6e3 100%); }
        .hero::before { content: ""; position: absolute; top: 25%; left: -12%; width: 53vw; height: 53vw; max-width: 700px; max-height: 700px; border: 1px solid rgba(223,40,109,.17); border-radius: 50%; transform: rotate(-24deg); pointer-events: none; }
        .hero::after { content: "N8N / AI"; position: absolute; right: 5%; bottom: 7%; color: rgba(17,16,22,.1); font-family: 'Space Mono', monospace; font-size: clamp(58px, 11vw, 150px); font-weight: 700; letter-spacing: -.1em; line-height: .8; pointer-events: none; }
        .hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 54px; direction: ltr; }
        .hero-copy { direction: rtl; max-width: 650px; padding-top: 24px; }
        .eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; color: var(--pink-deep); font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
        .eyebrow span { display: inline-block; width: 34px; height: 1px; background: var(--pink); }
        .hero h1 { max-width: 680px; font-size: clamp(47px, 6.1vw, 88px); font-weight: 600; letter-spacing: -.065em; line-height: .98; }
        .hero h1 em { color: var(--pink); font-style: italic; }
        .hero-sub { max-width: 555px; margin-top: 28px; color: var(--ink-soft); font-size: 16px; line-height: 1.95; }
        .hero-tagline { max-width: 540px; margin-top: 24px; padding-right: 18px; border-right: 2px solid var(--pink); direction: ltr; font-family: 'Libre Baskerville', serif; font-size: 15px; font-style: italic; line-height: 1.7; }
        .hero-actions { display: flex; align-items: center; gap: 18px; margin-top: 35px; }
        .primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 11px; min-height: 56px; padding: 0 22px; border: 1px solid var(--pink); border-radius: 3px; background: var(--pink); color: #fff; font-size: 14px; font-weight: 700; box-shadow: 8px 8px 0 rgba(17,16,22,.9); transition: transform .25s ease, box-shadow .25s ease, background .25s ease; }
        .primary-button:hover { background: var(--pink-deep); transform: translate(3px, 3px); box-shadow: 4px 4px 0 rgba(17,16,22,.9); }
        .text-link { display: inline-flex; align-items: center; gap: 8px; color: var(--ink-soft); font-size: 13px; font-weight: 700; transition: color .25s ease; }
        .text-link:hover { color: var(--pink); }
        .hero-proof { display: flex; align-items: center; gap: 10px; margin-top: 36px; color: #776d77; font-size: 11px; }
        .proof-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--pink); box-shadow: 0 0 0 4px rgba(223,40,109,.15); }
        .book-stage { position: relative; direction: ltr; display: flex; align-items: center; justify-content: center; min-height: 515px; }
        .book-ring { position: absolute; width: min(440px, 78vw); aspect-ratio: 1; border: 1px solid rgba(17,16,22,.24); border-radius: 50%; transform: rotate(-21deg); }
        .book-ring::before, .book-ring::after { content: ""; position: absolute; border-radius: 50%; border: 1px solid rgba(223,40,109,.55); }
        .book-ring::before { inset: 14px; }
        .book-ring::after { inset: 31px; border-color: rgba(17,16,22,.16); }
        .book-glow { position: absolute; width: 250px; height: 250px; border-radius: 50%; background: rgba(223,40,109,.25); filter: blur(45px); }
        .book-wrap { position: relative; z-index: 1; width: min(310px, 68vw); transform: rotate(7deg); filter: drop-shadow(26px 26px 12px rgba(17,16,22,.25)); animation: bookFloat 5.6s ease-in-out infinite; transition: transform .45s cubic-bezier(.2,.8,.2,1); }
        .book-wrap:hover { transform: rotate(1deg) translateY(-11px) scale(1.035); }
        .book-wrap img { display: block; width: 100%; border-radius: 4px; }
        .book-stamp { position: absolute; left: -47px; top: 55px; display: flex; align-items: center; gap: 6px; padding: 9px 12px; border: 1px solid var(--ink); background: var(--paper); font-family: 'Space Mono', monospace; font-size: 9px; font-weight: 700; letter-spacing: -.04em; transform: rotate(-90deg); }
        .book-note { position: absolute; right: -18px; bottom: 43px; z-index: 2; padding: 13px 15px; background: var(--ink); color: var(--paper); font-family: 'Space Mono', monospace; font-size: 10px; line-height: 1.5; transform: rotate(-4deg); }
        @keyframes bookFloat { 0%,100% { transform: rotate(7deg) translateY(0); } 50% { transform: rotate(4deg) translateY(-12px); } }
        .scroll-cue { position: absolute; right: 24px; bottom: 26px; display: flex; align-items: center; gap: 8px; color: #897580; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: .06em; writing-mode: vertical-rl; }
        .scroll-cue svg { animation: cue 1.7s ease-in-out infinite; }
        @keyframes cue { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .75s ease, transform .75s cubic-bezier(.2,.7,.2,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .section { padding: 125px 0; }
        .section-kicker { display: flex; align-items: center; gap: 13px; margin-bottom: 26px; color: var(--pink-deep); font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: .04em; }
        .section-kicker span { color: var(--pink); }
        .section-kicker i { display: block; width: 38px; height: 1px; background: currentColor; }
        .section-kicker strong { font-weight: 700; }
        .section-kicker-light { color: #f29bbd; }
        .section-intro { display: flex; align-items: end; justify-content: space-between; gap: 50px; margin-bottom: 60px; }
        .section h2 { max-width: 720px; font-size: clamp(39px, 5vw, 67px); font-weight: 600; letter-spacing: -.065em; line-height: .98; }
        .section h2 em { color: var(--pink); font-style: italic; }
        .intro-copy { max-width: 300px; color: var(--ink-soft); font-size: 14px; line-height: 1.9; }
        .creator { background: var(--night); color: #fbf4f1; }
        .creator-grid { display: grid; grid-template-columns: .8fr 1.2fr; align-items: center; gap: 10%; direction: ltr; }
        .portrait-frame { position: relative; width: min(350px, 80vw); margin: auto; direction: rtl; }
        .portrait-frame::before { content: ""; position: absolute; inset: -13px 13px 13px -13px; border: 1px solid var(--pink); }
        .portrait-frame::after { content: "IN PRACTICE"; position: absolute; bottom: 19px; left: -35px; padding: 8px 10px; background: var(--pink); color: #fff; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: .08em; transform: rotate(-90deg); }
        .portrait-frame img { position: relative; display: block; width: 100%; aspect-ratio: .8; object-fit: cover; object-position: center; filter: saturate(.85) contrast(1.08); }
        .creator-copy { direction: rtl; }
        .creator-copy h2 { max-width: 600px; color: #fbf4f1; }
        .creator-copy h2 em { color: #ef76a5; }
        .creator-copy p { max-width: 570px; margin-top: 27px; color: #c9b7c1; font-size: 15px; line-height: 2; }
        .creator-signature { margin-top: 33px; color: #fff; font-family: 'Libre Baskerville', serif; font-size: 20px; }
        .instagram-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; padding: 11px 14px; border: 1px solid #60505b; color: #f7d0dd; font-family: 'Space Mono', monospace; font-size: 11px; transition: border-color .25s ease, color .25s ease, transform .25s ease; }
        .instagram-link:hover { border-color: #f29bbd; color: #fff; transform: translateX(-4px); }
        .learning { background: #fbf2f4; }
        .topic-list { position: relative; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 24px; }
        .topic-list::before { content: ""; position: absolute; top: 0; right: 23px; bottom: 0; width: 1px; background: var(--rose-line); }
        .topic { position: relative; display: grid; grid-template-columns: 47px 1fr; align-items: start; gap: 16px; min-height: 139px; padding: 15px 0 23px 0; }
        .topic-number { position: relative; z-index: 1; display: grid; place-items: center; width: 47px; height: 47px; border: 1px solid var(--pink); border-radius: 50%; background: #fbf2f4; color: var(--pink-deep); font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; }
        .topic:nth-child(n+10) .topic-number { background: var(--ink); color: #fff; }
        .topic-body { padding-top: 3px; }
        .topic h3 { margin-bottom: 9px; font-size: 19px; font-weight: 600; letter-spacing: -.045em; line-height: 1.25; }
        .topic p { color: var(--ink-soft); font-size: 13px; line-height: 1.75; }
        .value { position: relative; background: var(--paper); }
        .value::before { content: "VALUE"; position: absolute; top: 75px; left: -3vw; color: rgba(223,40,109,.09); font-family: 'Space Mono', monospace; font-size: clamp(42px, 10vw, 135px); font-weight: 700; letter-spacing: -.12em; writing-mode: vertical-rl; pointer-events: none; }
        .value-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 66px; background: var(--ink); border: 1px solid var(--ink); }
        .value-point { min-height: 245px; padding: 34px 32px; background: var(--paper); transition: background .3s ease, color .3s ease, transform .3s ease; }
        .value-point:hover { position: relative; z-index: 1; background: var(--ink); color: #fff; transform: translateY(-6px); }
        .value-icon { display: grid; place-items: center; width: 38px; height: 38px; margin-bottom: 40px; border: 1px solid var(--pink); color: var(--pink); }
        .value-point h3 { margin-bottom: 13px; font-size: 23px; font-weight: 600; letter-spacing: -.05em; }
        .value-point p { max-width: 360px; color: var(--ink-soft); font-size: 13px; line-height: 1.9; }
        .value-point:hover p { color: #d6c9d0; }
        .audience { background: var(--blush); }
        .audience-grid { display: grid; grid-template-columns: .8fr 1.2fr; align-items: end; gap: 80px; direction: ltr; }
        .audience-intro { direction: rtl; }
        .audience-intro p { max-width: 390px; margin-top: 25px; color: var(--ink-soft); font-size: 15px; line-height: 1.9; }
        .audience-list { direction: rtl; border-top: 1px solid rgba(17,16,22,.35); }
        .audience-item { display: grid; grid-template-columns: 48px 1fr 24px; align-items: center; gap: 18px; padding: 24px 0; border-bottom: 1px solid rgba(17,16,22,.35); }
        .audience-item > svg { color: var(--pink-deep); }
        .audience-item h3 { font-size: 21px; font-weight: 600; letter-spacing: -.04em; }
        .audience-item p { margin-top: 5px; color: var(--ink-soft); font-size: 12px; line-height: 1.65; }
        .audience-item .arrow { color: var(--pink); }
        .pricing { position: relative; padding: 140px 0 150px; background: var(--night); color: #fff; }
        .pricing::after { content: ""; position: absolute; right: 0; bottom: 0; left: 0; height: 42%; background: linear-gradient(180deg, transparent, rgba(223,40,109,.15)); pointer-events: none; }
        .pricing-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 8%; direction: ltr; }
        .pricing-copy { direction: rtl; }
        .pricing-copy h2 { max-width: 480px; color: #fff; }
        .pricing-copy h2 em { color: #f077a3; }
        .pricing-copy p { max-width: 420px; margin-top: 27px; color: #c4b5bf; font-size: 14px; line-height: 1.95; }
        .pricing-aside { display: flex; align-items: center; gap: 9px; margin-top: 35px; color: #f4a2bf; font-family: 'Space Mono', monospace; font-size: 11px; }
        .price-card { direction: rtl; position: relative; padding: 44px 42px 39px; border: 1px solid #8c6174; background: linear-gradient(145deg, #2d1d29 0%, #180f17 72%); box-shadow: 16px 16px 0 rgba(223,40,109,.85); }
        .limited-badge { position: absolute; top: -15px; right: 32px; padding: 8px 12px; background: var(--pink); color: #fff; font-family: 'Space Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: .03em; }
        .card-label { color: #f29bbd; font-family: 'Space Mono', monospace; font-size: 10px; font-weight: 700; }
        .price-card h3 { margin-top: 15px; color: #fff; font-size: 29px; font-weight: 600; letter-spacing: -.05em; }
        .price-line { display: flex; align-items: baseline; gap: 16px; margin-top: 31px; }
        .old-price { color: #a994a0; font-family: 'Libre Baskerville', serif; font-size: 17px; text-decoration: line-through; text-decoration-color: var(--pink); }
        .new-price { color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(38px, 5vw, 60px); font-weight: 600; letter-spacing: -.07em; line-height: 1; }
        .currency { color: #f29bbd; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; }
        .offer-note { display: flex; align-items: center; gap: 9px; margin-top: 18px; color: #dfc8d2; font-size: 12px; }
        .offer-note svg { color: #f29bbd; }
        .price-card .primary-button { width: 100%; margin-top: 31px; box-shadow: 7px 7px 0 #f29bbd; }
        .price-card .primary-button:hover { box-shadow: 3px 3px 0 #f29bbd; }
        .price-features { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; margin-top: 28px; padding-top: 25px; border-top: 1px solid #543a49; }
        .price-feature { display: flex; align-items: center; gap: 7px; color: #cdbac4; font-size: 11px; }
        .price-feature svg { flex: 0 0 auto; color: #ef76a5; }
        .footer { padding: 38px 0; background: #100c11; color: #a896a2; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .footer-brand { color: #fff; }
        .footer-links { display: flex; align-items: center; gap: 22px; font-family: 'Space Mono', monospace; font-size: 10px; }
        .footer-link { display: inline-flex; align-items: center; gap: 7px; transition: color .25s ease; }
        .footer-link:hover { color: #f29bbd; }
        .copyright { color: #675762; font-family: 'Space Mono', monospace; font-size: 9px; }
        @media (max-width: 900px) {
          .hero-grid, .creator-grid, .pricing-grid, .audience-grid { grid-template-columns: 1fr; gap: 52px; }
          .hero { min-height: auto; padding-top: 125px; }
          .hero-copy { order: 1; }
          .book-stage { order: 0; min-height: 440px; }
          .creator-grid, .pricing-grid { gap: 72px; }
          .portrait-frame { width: min(320px, 70vw); }
          .section-intro { align-items: start; flex-direction: column; gap: 25px; }
          .intro-copy { max-width: 520px; }
          .audience-grid { gap: 50px; }
        }
        @media (max-width: 640px) {
          .container, .topbar { width: min(100% - 32px, 540px); }
          .topbar { padding: 18px 0; }
          .top-nav { display: none; }
          .mini-cta { padding: 8px 11px; font-size: 10px; }
          .hero { padding: 113px 0 78px; }
          .hero h1 { font-size: clamp(43px, 13vw, 67px); }
          .hero-sub { font-size: 14px; }
          .hero-tagline { font-size: 12px; }
          .hero-actions { align-items: stretch; flex-direction: column; gap: 17px; }
          .primary-button { width: 100%; }
          .text-link { justify-content: center; }
          .book-stage { min-height: 385px; }
          .book-wrap { width: min(250px, 64vw); }
          .book-ring { width: min(350px, 87vw); }
          .book-stamp { left: -37px; }
          .scroll-cue { display: none; }
          .section { padding: 85px 0; }
          .section h2 { font-size: clamp(37px, 12vw, 58px); }
          .topic-list { grid-template-columns: 1fr; }
          .topic-list::before { right: 23px; }
          .topic { min-height: auto; padding-bottom: 22px; }
          .value::before { display: none; }
          .value-grid { grid-template-columns: 1fr; margin-top: 46px; }
          .value-point { min-height: 210px; padding: 26px 24px; }
          .value-icon { margin-bottom: 30px; }
          .audience-item { grid-template-columns: 40px 1fr 18px; gap: 11px; }
          .audience-item h3 { font-size: 17px; }
          .pricing { padding: 95px 0 110px; }
          .price-card { padding: 37px 23px 28px; box-shadow: 9px 9px 0 rgba(223,40,109,.85); }
          .price-features { gap: 12px 10px; }
          .price-feature { align-items: start; font-size: 10px; }
          .footer-inner { align-items: start; flex-direction: column; }
          .footer-links { flex-wrap: wrap; gap: 14px; }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="AI Automation home">
          <span className="brand-mark">A</span>
          <span>AI AUTOMATION / N8N</span>
        </a>
        <nav className="top-nav" aria-label="التنقل الرئيسي">
          <a href="#learning">المحتوى</a>
          <a href="#creator">عن المدرب</a>
          <a href="#pricing">الاستثمار</a>
          <a className="mini-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            ابدأ الآن <ArrowLeft size={13} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <Reveal className="hero-copy" delay={80}>
            <div className="eyebrow"><span /> THE AUTOMATION ADVANTAGE</div>
            <h1 id="hero-title">
              ابنِ أنظمة
              <br />
              <em>تفكّر</em> وتعمل
              <br />
              من أجلك.
            </h1>
            <p className="hero-sub">
              تعلّم AI Automation مع n8n بالعربية والإنجليزية، وحوّل المهام
              المتكررة إلى أنظمة ذكية تمنحك وقتاً أكثر ودخلاً أقوى.
            </p>
            <p className="hero-tagline">
              Automating business, elevating mindset — Save time, grow income, level up
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                اطلب الآن عبر واتساب
              </a>
              <a className="text-link" href="#learning">
                اكتشف المنهج <ArrowDownLeft size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-dot" />
              من الصفر إلى أول نظام قابل للبيع
            </div>
          </Reveal>

          <Reveal className="book-stage" delay={220}>
            <div className="book-glow" />
            <div className="book-ring" />
            <div className="book-wrap">
              <span className="book-stamp">FIELD GUIDE / 01</span>
              <img
                src="/__mockup/images/automation-book.jpg"
                alt="غلاف كتاب Automation & AI لإتقان Workflows مع n8n"
              />
              <span className="book-note">FROM ZERO<br />TO SYSTEMS</span>
            </div>
          </Reveal>
        </div>
        <div className="scroll-cue"><ChevronDown size={14} /> SCROLL TO BUILD</div>
      </section>

      <section className="section creator" id="creator" aria-labelledby="creator-title">
        <div className="container creator-grid">
          <Reveal className="portrait-frame" delay={80}>
            <img src="/__mockup/images/rayan-mazari.jpg" alt="Rayan Mazari، مدرب AI Automation" />
          </Reveal>
          <Reveal className="creator-copy" delay={180}>
            <SectionKicker index="01 / CREATOR" light>الشخص الذي يختصر عليك الطريق</SectionKicker>
            <h2 id="creator-title">
              المعرفة لا تغيّر دخلك.
              <br />
              <em>النظام الذي تبنيه</em> هو ما يفعل.
            </h2>
            <p>
              أنا Rayan Mazari. صمّمت هذا المسار لمن يريد أن يتعامل مع الذكاء
              الاصطناعي كأداة عمل حقيقية، لا كموضوع آخر يمرّ عليه في الأخبار.
              ستتعلم المنطق خلف كل خطوة، حتى تبني حلولاً يفهمها العميل ويحتاجها.
            </p>
            <div className="creator-signature">𝖱𝖠𝖸𝖠𝖭 𝖬𝖠𝖹𝖠𝖱𝖨</div>
            <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={15} /> تابع الرحلة على Instagram
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section learning" id="learning" aria-labelledby="learning-title">
        <div className="container">
          <Reveal>
            <SectionKicker index="02 / THE CURRICULUM">من أول عقدة إلى نظام كامل</SectionKicker>
            <div className="section-intro">
              <h2 id="learning-title">11 خطوة نحو <em>قدرة</em> جديدة.</h2>
              <p className="intro-copy">
                المنهج مبني كرحلة عملية: تفهم الأساس، تبني بيدك، ثم تنشر وتبيع
                ما بنيته بثقة.
              </p>
            </div>
          </Reveal>
          <div className="topic-list" aria-label="مواضيع البرنامج">
            {learningTopics.map(([title, description, Icon], index) => (
              <Reveal key={title} className="topic" delay={Math.min(index * 35, 300)}>
                <span className="topic-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="topic-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section value" aria-labelledby="value-title">
        <div className="container">
          <Reveal>
            <SectionKicker index="03 / BEYOND THE TECH">ما الذي تأخذه معك؟</SectionKicker>
            <div className="section-intro">
              <h2 id="value-title">
                أكثر من مجرد
                <br />
                <em>تعلّم تقني.</em>
              </h2>
              <p className="intro-copy">
                لأن معرفة بناء النظام نصف اللعبة فقط. النصف الآخر هو أن تعرف
                كيف تقدّمه، تسعّره، وتسلمه كعمل احترافي.
              </p>
            </div>
          </Reveal>
          <div className="value-grid">
            {valuePoints.map(({ title, body, icon: Icon }, index) => (
              <Reveal key={title} className="value-point" delay={index * 65}>
                <div className="value-icon"><Icon size={18} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience" aria-labelledby="audience-title">
        <div className="container audience-grid">
          <Reveal className="audience-intro">
            <SectionKicker index="04 / YOUR NEXT MOVE">هل هذا المسار لك؟</SectionKicker>
            <h2 id="audience-title">مكانك هنا إذا كنت مستعداً لتكبر.</h2>
            <p>
              لا تحتاج شهادة في البرمجة. تحتاج فضولاً، ومشكلة حقيقية تريد أن
              تحلّها، واستعداداً لتبني شيئاً يقدّر الناس قيمته.
            </p>
          </Reveal>
          <div className="audience-list">
            <Reveal className="audience-item" delay={80}>
              <Code2 size={24} strokeWidth={1.5} />
              <div><h3>مبتدئ دون خلفية برمجية</h3><p>تبدأ بلغة واضحة وتخرج بفهم عملي قابل للتطبيق.</p></div>
              <ArrowUpLeft className="arrow" size={17} />
            </Reveal>
            <Reveal className="audience-item" delay={150}>
              <BriefcaseBusiness size={24} strokeWidth={1.5} />
              <div><h3>مستقل يبحث عن مصدر دخل جديد</h3><p>أضف خدمة عالية القيمة إلى عروضك الحالية.</p></div>
              <ArrowUpLeft className="arrow" size={17} />
            </Reveal>
            <Reveal className="audience-item" delay={220}>
              <Gauge size={24} strokeWidth={1.5} />
              <div><h3>صاحب عمل يريد أتمتة عملياته</h3><p>استعد وقتك من الأعمال التي لا تحتاج وجودك.</p></div>
              <ArrowUpLeft className="arrow" size={17} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="container pricing-grid">
          <Reveal className="pricing-copy" delay={80}>
            <SectionKicker index="05 / THE INVITATION" light>استثمر في قدرتك القادمة</SectionKicker>
            <h2 id="pricing-title">لا تشترِ دورة.<br /><em>اشترِ اختصار الطريق.</em></h2>
            <p>
              كل ما تحتاجه لتبدأ من الصفر، تبني أنظمة حقيقية، وتعرف كيف تحوّل
              هذه القدرة إلى عرض يدرّ عليك دخلاً.
            </p>
            <div className="pricing-aside"><Clock3 size={16} /> العرض الأول متاح لأول 20 شخصاً فقط</div>
          </Reveal>
          <Reveal className="price-card" delay={200}>
            <div className="limited-badge">العرض محدود · خصم 50%</div>
            <div className="card-label">AI AUTOMATION / COMPLETE PATH</div>
            <h3>من الصفر إلى Advanced AI Automation</h3>
            <div className="price-line">
              <span className="old-price">5000 دينار جزائري</span>
              <span className="new-price">2500 <span className="currency">دج</span></span>
            </div>
            <div className="offer-note"><BadgeCheck size={16} /> سعر خاص لأول 20 شخصاً فقط</div>
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <Send size={17} /> اطلب الآن
            </a>
            <div className="price-features">
              <span className="price-feature"><Check size={13} /> شرح عربي واضح</span>
              <span className="price-feature"><Check size={13} /> تطبيقات حقيقية</span>
              <span className="price-feature"><Check size={13} /> قوالب جاهزة</span>
              <span className="price-feature"><Check size={13} /> مسار قابل للبيع</span>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">A</span>
            <span>AI AUTOMATION / N8N</span>
          </a>
          <div className="footer-links">
            <a className="footer-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={14} /> +213560843444</a>
            <a className="footer-link" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram / Rayan Mazari</a>
          </div>
          <span className="copyright">© 2025 Rayan Mazari</span>
        </div>
      </footer>
    </main>
  );
}