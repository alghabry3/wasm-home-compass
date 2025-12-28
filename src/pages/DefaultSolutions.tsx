import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Clock, 
  Handshake, 
  FileText,
  AlertCircle,
  CheckCircle,
  Phone,
  Users,
  TrendingDown,
  CreditCard
} from "lucide-react";

const solutions = [
  {
    icon: TrendingDown,
    title: "جدولة الديون",
    description: "نساعدك في التفاوض مع البنوك لإعادة جدولة ديونك بأقساط ميسرة تناسب دخلك الحالي",
  },
  {
    icon: Shield,
    title: "رفع إيقاف الخدمات",
    description: "نعمل على رفع إيقاف الخدمات من خلال التسوية مع الجهات الدائنة",
  },
  {
    icon: CreditCard,
    title: "سداد الالتزامات الخارجية",
    description: "حلول لسداد الالتزامات المالية الخارجية وتحسين وضعك الائتماني",
  },
  {
    icon: Handshake,
    title: "التسوية الودية",
    description: "نفاوض نيابة عنك للوصول إلى تسوية ودية مع الدائنين",
  },
  {
    icon: FileText,
    title: "تحسين الأهلية الائتمانية",
    description: "خطة متكاملة لتحسين سجلك الائتماني وزيادة أهليتك للتمويل",
  },
  {
    icon: Clock,
    title: "إعادة الهيكلة المالية",
    description: "إعادة هيكلة وضعك المالي بالكامل لتحقيق الاستقرار المالي",
  },
];

const cases = [
  {
    title: "تعثر في سداد القرض العقاري",
    solution: "إعادة جدولة مع البنك أو بيع العقار لتسديد المديونية",
  },
  {
    title: "تراكم أقساط السيارة",
    solution: "التفاوض مع شركة التمويل لتخفيض القسط أو تمديد الفترة",
  },
  {
    title: "إيقاف الخدمات بسبب قرض استهلاكي",
    solution: "التسوية مع البنك ورفع الإيقاف عبر الإجراءات النظامية",
  },
  {
    title: "التزامات متعددة ودخل محدود",
    solution: "توحيد الديون في قرض واحد بقسط مريح",
  },
];

const steps = [
  { step: 1, title: "دراسة الحالة", description: "نحلل وضعك المالي والتزاماتك بالكامل" },
  { step: 2, title: "وضع الخطة", description: "نصمم خطة حلول مخصصة لحالتك" },
  { step: 3, title: "التفاوض", description: "نتفاوض مع الجهات الدائنة نيابة عنك" },
  { step: 4, title: "التنفيذ", description: "نتابع تنفيذ الحلول حتى الانتهاء" },
];

const DefaultSolutions = () => {
  return (
    <>
      <Helmet>
        <title>حلول التعثر المالي | وسم هوم العقارية</title>
        <meta name="description" content="حلول متخصصة للتعثر المالي وإيقاف الخدمات. جدولة ديون، رفع إيقاف، تحسين الأهلية الائتمانية." />
        <meta name="keywords" content="حلول التعثر, إيقاف الخدمات, جدولة ديون, تسوية مالية, تحسين الائتمان" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              حلول التعثر المالي
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              لا تدع الديون <span className="text-accent">توقف حياتك</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
              نقدم حلولاً متخصصة لمساعدتك في التغلب على التعثر المالي واستعادة استقرارك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  احصل على استشارة سرية
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/financing-solutions">الحلول التمويلية</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-8 bg-accent text-accent-foreground">
          <div className="section-container">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-medium">سرية تامة</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">فريق متخصص</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">حلول مضمونة</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">متابعة حتى النهاية</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                حلولنا المتخصصة
              </h2>
              <p className="text-muted-foreground text-lg">
                خدمات شاملة لمعالجة جميع أنواع التعثر المالي
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                كيف نساعدك؟
              </h2>
              <p className="text-muted-foreground text-lg">
                خطوات واضحة للوصول إلى حل مناسب
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                حالات نتعامل معها
              </h2>
              <p className="text-muted-foreground text-lg">
                أمثلة على المشكلات التي نساعد في حلها
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cases.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft border-r-4 border-accent"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        <span className="text-accent font-medium">الحل:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-12 bg-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                السرية التامة مضمونة
              </h3>
              <p className="text-muted-foreground mb-6">
                نتعامل مع جميع الحالات بسرية تامة واحترام كامل. معلوماتك محمية ولن تُشارك مع أي طرف بدون موافقتك.
              </p>
              <Button variant="gold" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  تواصل بسرية الآن
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DefaultSolutions;