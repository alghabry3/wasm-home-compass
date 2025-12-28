import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  Lock,
  CheckCircle,
  AlertTriangle,
  Phone,
  ArrowLeft
} from "lucide-react";

const mortgageTypes = [
  {
    title: "المرابحة العقارية",
    description: "يشتري البنك العقار ويبيعه لك بربح معلوم وأقساط ثابتة",
    features: ["أقساط ثابتة", "ملكية فورية", "متوافق مع الشريعة"],
  },
  {
    title: "الإجارة المنتهية بالتمليك",
    description: "تستأجر العقار مع وعد بالتمليك عند سداد جميع الأقساط",
    features: ["مرونة في السداد", "إمكانية السداد المبكر", "تملك تدريجي"],
  },
  {
    title: "المشاركة المتناقصة",
    description: "شراكة بينك وبين البنك في ملكية العقار تنتهي بالتملك الكامل",
    features: ["تقاسم المخاطر", "عدالة في الربح", "مرونة عالية"],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "تمويل يصل 70% من قيمة العقار",
    description: "احصل على سيولة نقدية مقابل رهن عقارك",
  },
  {
    icon: Lock,
    title: "احتفظ بالسكن في العقار",
    description: "استمر بالسكن في عقارك أثناء فترة الرهن",
  },
  {
    icon: FileText,
    title: "إجراءات سريعة ومبسطة",
    description: "موافقة سريعة وإجراءات واضحة",
  },
  {
    icon: Shield,
    title: "حماية قانونية كاملة",
    description: "عقود موثقة ومتوافقة مع الأنظمة السعودية",
  },
];

const steps = [
  { step: 1, title: "تقديم الطلب", description: "تواصل معنا وقدم طلبك مع المستندات المطلوبة" },
  { step: 2, title: "التقييم", description: "نقوم بتقييم العقار وتحديد قيمته السوقية" },
  { step: 3, title: "الموافقة", description: "عرض الموافقة من البنك مع الشروط والأقساط" },
  { step: 4, title: "التوقيع", description: "توقيع العقود وإتمام الإجراءات الرسمية" },
  { step: 5, title: "الصرف", description: "صرف المبلغ المتفق عليه في حسابك" },
];

const Mortgage = () => {
  return (
    <>
      <Helmet>
        <title>الرهن العقاري | وسم هوم العقارية</title>
        <meta name="description" content="خدمات الرهن العقاري المتوافقة مع الشريعة الإسلامية. احصل على سيولة مقابل عقارك مع الاحتفاظ بالسكن." />
        <meta name="keywords" content="رهن عقاري, تمويل مقابل عقار, مرابحة عقارية, إجارة منتهية بالتمليك" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              الرهن العقاري
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              احصل على سيولة <span className="text-accent">مقابل عقارك</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
              خدمات الرهن العقاري المتوافقة مع الشريعة الإسلامية بالتعاون مع البنوك السعودية المعتمدة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  استشارة مجانية
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/financing-solutions">الحلول التمويلية</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                مميزات الرهن العقاري
              </h2>
              <p className="text-muted-foreground text-lg">
                استفد من قيمة عقارك دون التخلي عنه
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mortgage Types */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أنواع الرهن العقاري
              </h2>
              <p className="text-muted-foreground text-lg">
                صيغ متوافقة مع الشريعة الإسلامية
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mortgageTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                خطوات الحصول على الرهن العقاري
              </h2>
              <p className="text-muted-foreground text-lg">
                إجراءات واضحة وسريعة
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-[calc(100%-4rem)] bg-accent/20 hidden md:block" />
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className="flex-1 bg-card p-6 rounded-2xl shadow-soft">
                        <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0 shadow-gold z-10">
                        {step.step}
                      </div>
                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Note */}
        <section className="py-12 bg-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto bg-card border-r-4 border-accent p-6 rounded-xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">ملاحظة مهمة</h3>
                <p className="text-muted-foreground text-sm">
                  الرهن العقاري يعني أن العقار سيكون ضماناً للتمويل. في حال عدم السداد، يحق للبنك التصرف في العقار وفقاً للأنظمة. ننصح بدراسة قدرتك المالية بعناية قبل اتخاذ القرار.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل تحتاج استشارة متخصصة؟
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              خبراؤنا جاهزون لمساعدتك في اختيار أفضل خيارات الرهن العقاري
            </p>
            <Button variant="gold" size="lg" className="gap-2" asChild>
              <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                تواصل الآن
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Mortgage;