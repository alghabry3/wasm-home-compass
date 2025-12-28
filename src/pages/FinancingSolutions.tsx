import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  Home, 
  Building2, 
  Calculator, 
  Shield, 
  FileCheck, 
  ArrowLeft,
  CheckCircle,
  Phone
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "التمويل السكني",
    description: "تمويل شراء المنازل والشقق والفلل بأقساط ميسرة وأرباح تنافسية",
    link: "/mortgage-loans"
  },
  {
    icon: Building2,
    title: "التمويل التجاري",
    description: "تمويل العقارات التجارية والمكاتب والمحلات لدعم أعمالك",
    link: "/mortgage-loans"
  },
  {
    icon: Calculator,
    title: "حاسبة التمويل",
    description: "احسب قسطك الشهري وقيمة التمويل المتاحة لك بسهولة",
    link: "/investment"
  },
  {
    icon: Shield,
    title: "الرهن العقاري",
    description: "خدمات الرهن العقاري المتوافقة مع الشريعة الإسلامية",
    link: "/mortgage"
  },
  {
    icon: FileCheck,
    title: "حلول التعثر",
    description: "حلول متخصصة لمواجهة التعثر المالي وإيقاف الخدمات",
    link: "/default-solutions"
  },
  {
    icon: Wallet,
    title: "الدعم السكني",
    description: "استفد من برامج الدعم السكني الحكومية مع مساعدتنا",
    link: "/housing-support"
  },
];

const features = [
  "تمويل يصل إلى 90% من قيمة العقار",
  "فترات سداد مرنة تصل إلى 25 سنة",
  "أرباح تنافسية ومتوافقة مع الشريعة",
  "إجراءات سريعة وموافقة خلال أيام",
  "دعم متخصص طوال رحلة التمويل",
  "شراكات مع جميع البنوك السعودية",
];

const banks = [
  "البنك الأهلي السعودي",
  "مصرف الراجحي",
  "بنك الرياض",
  "البنك السعودي الفرنسي",
  "بنك البلاد",
  "البنك العربي الوطني",
];

const FinancingSolutions = () => {
  return (
    <>
      <Helmet>
        <title>الحلول التمويلية | وسم هوم العقارية</title>
        <meta name="description" content="حلول تمويلية متكاملة للعقارات السكنية والتجارية. تمويل عقاري، رهن، قروض، ودعم سكني بالتعاون مع البنوك السعودية." />
        <meta name="keywords" content="تمويل عقاري, قروض عقارية, رهن عقاري, دعم سكني, تمويل سكني, البنوك السعودية" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
          </div>
          <div className="section-container text-center relative z-10">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              حلول تمويلية متكاملة
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              نسهّل عليك <span className="text-accent">امتلاك عقارك</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
              نقدم لك حلولاً تمويلية شاملة بالتعاون مع البنوك السعودية الكبرى لتحقيق حلمك بامتلاك العقار المناسب
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  احصل على استشارة مجانية
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/mortgage-loans">تعرف على القروض</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                خدماتنا التمويلية
              </h2>
              <p className="text-muted-foreground text-lg">
                حلول متنوعة تناسب جميع الاحتياجات والميزانيات
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-accent font-medium flex items-center gap-2">
                    المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  لماذا نحن؟
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  مميزات التمويل مع وسم هوم
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  نعمل كوسيط معتمد بينك وبين البنوك لضمان حصولك على أفضل عروض التمويل
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-bold text-foreground mb-6">شركاؤنا في التمويل</h3>
                <div className="grid grid-cols-2 gap-4">
                  {banks.map((bank, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary rounded-xl text-center font-medium text-foreground"
                    >
                      {bank}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 text-center">
                  وغيرها من شركات التمويل المرخصة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلة التمويل الآن
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              تواصل معنا واحصل على استشارة مجانية لمعرفة أفضل خيارات التمويل المتاحة لك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  تواصل عبر واتساب
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FinancingSolutions;