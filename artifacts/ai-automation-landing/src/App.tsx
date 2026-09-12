import { useEffect, useRef, type ReactNode } from "react";
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
import "./index.css";

const whatsappUrl =
  "https://wa.me/213560843444?text=مرحبا%20أريد%20طلب%20منتج%20AI%20Automation";

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
    body: "التسويق الرقمي · مكاتب المحاماة · التجارة الإلكترونية · العيادات · العقارات · الخدمات المحلية.",
    icon: BriefcaseBusiness,
  },
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node?.classList.add("is-visible");
      return;
    }
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
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
  children: ReactNode;
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

function SeoHead() {
  useEffect(() => {
    const description =
      "تعلم AI Automation مع n8n بالعربية والإنجليزية، وابنِ أنظمة ذكية قابلة للبيع من الصفر إلى النشر.";
    document.title = "AI Automation — من الصفر إلى الاحتراف مع n8n";
    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
    };
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: document.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:image"]', { property: "og:image", content: "/images/automation-book.jpg" });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: document.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: "/images/automation-book.jpg" });
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, []);

  return null;
}

function App() {
  return (
    <>
      <SeoHead />
      <main className="automation-page" dir="rtl">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="AI Automation home" data-testid="link-home">
            <span className="brand-mark">A</span>
            <span>AI AUTOMATION / N8N</span>
          </a>
          <nav className="top-nav" aria-label="التنقل الرئيسي">
            <a href="#learning" data-testid="link-learning">المحتوى</a>
            <a href="#pricing" data-testid="link-pricing">الاستثمار</a>
            <a
              className="mini-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-whatsapp-navbar"
            >
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
                <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-whatsapp-hero">
                  <MessageCircle size={18} />
                  اطلب الآن عبر واتساب
                </a>
                <a className="text-link" href="#learning" data-testid="link-discover-curriculum">
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
                  src="/images/automation-book.jpg"
                  width="765"
                  height="1024"
                  decoding="async"
                  alt="غلاف كتاب Automation & AI لإتقان Workflows مع n8n"
                />
                <span className="book-note">FROM ZERO<br />TO SYSTEMS</span>
              </div>
            </Reveal>
          </div>
          <div className="scroll-cue"><ChevronDown size={14} /> SCROLL TO BUILD</div>
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
                <h2 id="value-title">أكثر من مجرد<br /><em>تعلّم تقني.</em></h2>
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
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-whatsapp-pricing">
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
            <a className="brand footer-brand" href="#top" data-testid="link-footer-home">
              <span className="brand-mark">A</span>
              <span>AI AUTOMATION / N8N</span>
            </a>
            <div className="footer-links">
              <a className="footer-link" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-whatsapp-footer"><MessageCircle size={14} /> +213560843444</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;