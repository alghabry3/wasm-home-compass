import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  CheckCircle, 
  FileText, 
  Calculator,
  Users,
  Phone,
  ArrowLeft,
  Building2,
  Wallet
} from "lucide-react";

const supportTypes = [
  {
    icon: Home,
    title: "دعم الدفعة المقدمة",
    description: "دعم يصل إلى 100% من الدفعة المقدمة للمستفيدين المؤهلين",
    amount: "حتى 500,000 ريال",
  },
  {
    icon: Wallet,
    title: "الدعم السكني الشهري",
    description: "دعم شهري للأقساط يصل إلى 100% من الأرباح البنكية",
    amount: "حسب الدخل",
  },
  {
    icon: Building2,
    title: "البناء الذاتي",
    description: "دعم بناء مسكنك على أرضك الخاصة",
    amount: "حتى 150,000 ريال",
  },
];

const eligibilityConditions = [
  "أن يكون المتقدم سعودي الجنسية",
  "العمر 25 سنة فما فوق للأعزب، 21 للمتزوج",
  "ألا يكون لديه عقار مسجل باسمه أو أحد أفراد أسرته",
  "ألا يكون قد استفاد من برامج الدعم السكني سابقاً",
  "أن يكون الدخل الشهري للأسرة أقل من 14,000 ريال",
  "أن يكون لديه حساب في أبشر",
];

const steps = [
  { step: 1, title: "التسجيل في سكني", description: "إنشاء حساب في منصة سكني الإلكترونية" },
  { step: 2, title: "التأهيل", description: "التحقق من أهليتك للاستفادة من الدعم" },
  { step: 3, title: "اختيار العقار", description: "اختيار المشروع أو الوحدة السكنية المناسبة" },
  { step: 4, title: "التمويل", description: "الحصول على التمويل العقاري المدعوم" },
  { step: 5, title: "الاستلام", description: "استلام مفاتيح منزلك الجديد" },
];

const faqs = [
  {
    q: "كم يستغرق الحصول على الدعم السكني؟",
    a: "يختلف حسب الحالة، لكن عادة ما يستغرق من 2-6 أشهر من التسجيل حتى الاستلام.",
  },
  {
    q: "هل يمكنني الاستفادة من الدعم إذا كان لدي قرض سابق؟",
    a: "نعم، يمكنك الاستفادة حتى مع وجود التزامات سابقة إذا كانت أهليتك الائتمانية جيدة.",
  },
  {
    q: "هل الدعم متوافق مع الشريعة الإسلامية؟",
    a: "نعم، جميع برامج الدعم السكني متوافقة مع أحكام الشريعة الإسلامية.",
  },
];

const HousingSupport = () => {
  return (
    <>
      <Helmet>
        <title>الدعم السكني | وسم هوم العقارية</title>
        <meta name="description" content="استفد من برامج الدعم السكني الحكومية. دعم الدفعة المقدمة، الدعم الشهري، وبرامج البناء الذاتي." />
        <meta name="keywords" content="دعم سكني, سكني, صندوق التنمية العقارية, دعم الدفعة المقدمة, برنامج سكني" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              الدعم السكني
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              امتلك منزلك <span className="text-accent">بدعم حكومي</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
              نساعدك في الاستفادة من برامج الدعم السكني الحكومية وإيجاد العقار المناسب
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  تحقق من أهليتك مجاناً
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/projects">تصفح المشاريع المدعومة</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Support Types */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أنواع الدعم المتاحة
              </h2>
              <p className="text-muted-foreground text-lg">
                برامج متنوعة تناسب احتياجاتك
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-bold">
                    {type.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  شروط الأهلية
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  هل أنت مؤهل للدعم السكني؟
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  تعرف على الشروط الأساسية للاستفادة من برامج الدعم
                </p>

                <ul className="space-y-4">
                  {eligibilityConditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <Calculator className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  لست متأكداً من أهليتك؟
                </h3>
                <p className="text-muted-foreground mb-6">
                  تواصل معنا الآن وسنتحقق من أهليتك مجاناً ونساعدك في جميع الإجراءات
                </p>
                <Button variant="gold" size="lg" className="w-full gap-2" asChild>
                  <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5" />
                    تحقق من أهليتك
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                خطوات الحصول على الدعم
              </h2>
              <p className="text-muted-foreground text-lg">
                رحلة سهلة نرافقك فيها خطوة بخطوة
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-accent/20" />
                    )}
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-gold relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أسئلة شائعة
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/faq">
                <Button variant="outline" size="lg" className="gap-2">
                  المزيد من الأسئلة
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلة امتلاك منزلك الآن
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              فريقنا المتخصص جاهز لمساعدتك في كل خطوة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  تواصل معنا
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/projects">تصفح المشاريع</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HousingSupport;