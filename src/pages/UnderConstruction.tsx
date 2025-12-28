import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Phone,
  ArrowLeft
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const underConstructionProjects = [
  {
    id: 1,
    name: "مشروع واحة الخبر",
    developer: "شركة الإعمار",
    location: "الخبر - حي الشاطئ",
    completionDate: "Q4 2025",
    progress: 65,
    startingPrice: "580,000",
    units: 120,
    availableUnits: 45,
    type: "شقق سكنية",
    image: project1,
    features: ["دعم سكني", "تمويل متاح", "خطط سداد مرنة"],
  },
  {
    id: 2,
    name: "أبراج النخيل",
    developer: "دار الأركان",
    location: "الدمام - حي الفيصلية",
    completionDate: "Q2 2026",
    progress: 40,
    startingPrice: "720,000",
    units: 200,
    availableUnits: 150,
    type: "شقق فاخرة",
    image: project2,
    features: ["إطلالة بحرية", "مرافق متكاملة", "أمن 24 ساعة"],
  },
  {
    id: 3,
    name: "فلل الياسمين",
    developer: "روشن",
    location: "الرياض - حي الياسمين",
    completionDate: "Q1 2026",
    progress: 55,
    startingPrice: "1,200,000",
    units: 50,
    availableUnits: 20,
    type: "فلل",
    image: project3,
    features: ["تصميم حديث", "حديقة خاصة", "موقف مغطى"],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "أسعار أقل",
    description: "احصل على سعر أقل مقارنة بالعقارات الجاهزة",
  },
  {
    icon: Calendar,
    title: "خطط سداد مرنة",
    description: "ادفع على أقساط مريحة خلال فترة البناء",
  },
  {
    icon: Shield,
    title: "ضمان المطور",
    description: "عقود موثقة وضمانات من مطورين معتمدين",
  },
  {
    icon: Building2,
    title: "اختيار الوحدة",
    description: "اختر الدور والإطلالة التي تناسبك",
  },
];

const UnderConstruction = () => {
  return (
    <>
      <Helmet>
        <title>مشاريع تحت الإنشاء | وسم هوم العقارية</title>
        <meta name="description" content="اكتشف مشاريع تحت الإنشاء بأسعار تنافسية وخطط سداد مرنة. احجز وحدتك الآن واستفد من أسعار ما قبل الإطلاق." />
        <meta name="keywords" content="مشاريع تحت الإنشاء, البيع على الخارطة, وحدات سكنية جديدة, عقارات قيد البناء" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              البيع على الخارطة
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              مشاريع <span className="text-accent">تحت الإنشاء</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              استثمر في المستقبل مع مشاريع مميزة بأسعار تنافسية وخطط سداد مرنة
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-soft">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                المشاريع المتاحة
              </h2>
              <p className="text-muted-foreground text-lg">
                احجز وحدتك الآن واستفد من أسعار ما قبل الإطلاق
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {underConstructionProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all group"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                        {project.type}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground font-medium">نسبة الإنجاز</span>
                        <span className="text-accent font-bold">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{project.developer}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground">التسليم</p>
                        <p className="font-bold text-foreground">{project.completionDate}</p>
                      </div>
                      <div className="text-center p-3 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground">وحدات متاحة</p>
                        <p className="font-bold text-foreground">{project.availableUnits} / {project.units}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">يبدأ من</p>
                        <p className="text-xl font-bold text-accent">{project.startingPrice} ريال</p>
                      </div>
                      <Button variant="gold" size="sm" asChild>
                        <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                          احجز الآن
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                كيف يعمل البيع على الخارطة؟
              </h2>
              <p className="text-muted-foreground text-lg">
                خطوات بسيطة لامتلاك وحدتك
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: 1, title: "اختر المشروع", desc: "تصفح المشاريع المتاحة" },
                  { step: 2, title: "اختر الوحدة", desc: "حدد الوحدة والدور المناسب" },
                  { step: 3, title: "ادفع الحجز", desc: "دفعة مقدمة لتأكيد الحجز" },
                  { step: 4, title: "استلم مفاتيحك", desc: "عند اكتمال البناء" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              لا تفوت فرصة الاستثمار
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              تواصل معنا الآن واحصل على أفضل العروض والأسعار
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  تواصل معنا
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/projects">جميع المشاريع</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UnderConstruction;