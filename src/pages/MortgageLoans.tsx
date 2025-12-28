import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Home, 
  Building2, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowLeft,
  Phone
} from "lucide-react";

const loanTypes = [
  {
    icon: Home,
    title: "قرض السكن الأول",
    description: "للمواطنين الراغبين بشراء مسكنهم الأول",
    features: ["تمويل يصل 90%", "دعم سكني", "إعفاء من الدفعة الأولى"],
    recommended: true,
  },
  {
    icon: Building2,
    title: "قرض السكن الإضافي",
    description: "لشراء عقار ثانٍ للاستثمار أو السكن",
    features: ["تمويل يصل 70%", "فترات سداد مرنة", "أرباح تنافسية"],
    recommended: false,
  },
  {
    icon: Users,
    title: "قرض البناء الذاتي",
    description: "لبناء منزلك على أرضك الخاصة",
    features: ["صرف على مراحل", "إشراف هندسي", "ضمان الجودة"],
    recommended: false,
  },
];

const requirements = [
  "أن يكون المتقدم سعودي الجنسية",
  "عمر المتقدم بين 21 و 65 سنة",
  "الحد الأدنى للراتب 5,000 ريال",
  "مدة الخدمة الوظيفية لا تقل عن 6 أشهر",
  "تحويل الراتب للبنك الممول",
  "صك ملكية العقار واضح ومسجل",
];

const MortgageLoans = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(5);

  const calculateMonthly = () => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    const monthly = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
    return Math.round(monthly);
  };

  const monthlyPayment = calculateMonthly();
  const totalPayment = monthlyPayment * years * 12;
  const totalProfit = totalPayment - loanAmount;

  return (
    <>
      <Helmet>
        <title>القروض العقارية | وسم هوم العقارية</title>
        <meta name="description" content="احصل على قرض عقاري بأفضل الشروط. تمويل يصل 90% مع فترات سداد تصل 25 سنة. استشارة مجانية." />
        <meta name="keywords" content="قرض عقاري, تمويل سكني, قروض البنوك, تمويل شراء منزل" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              القروض العقارية
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              امتلك منزلك <span className="text-accent">بأقساط ميسرة</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              نساعدك في الحصول على أفضل عروض القروض العقارية من البنوك السعودية
            </p>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أنواع القروض العقارية
              </h2>
              <p className="text-muted-foreground text-lg">
                اختر نوع التمويل المناسب لاحتياجاتك
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {loanTypes.map((loan, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all relative ${
                    loan.recommended ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {loan.recommended && (
                    <div className="absolute -top-3 right-6 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                      الأكثر طلباً
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <loan.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{loan.title}</h3>
                  <p className="text-muted-foreground mb-6">{loan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={loan.recommended ? "gold" : "outline"} className="w-full" asChild>
                    <Link to="/contact">احصل على عرض</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  <Calculator className="w-4 h-4 inline ml-2" />
                  حاسبة التمويل
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  احسب قسطك الشهري
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  استخدم الحاسبة لمعرفة القسط الشهري المتوقع بناءً على مبلغ التمويل ومدة السداد
                </p>

                <div className="space-y-6 bg-card p-6 rounded-2xl">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      مبلغ التمويل: {loanAmount.toLocaleString()} ريال
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="3000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>100,000</span>
                      <span>3,000,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      مدة السداد: {years} سنة
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>5 سنوات</span>
                      <span>25 سنة</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      معدل الربح السنوي: {rate}%
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="8"
                      step="0.5"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>3%</span>
                      <span>8%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8">نتائج الحساب</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                    <span className="text-primary-foreground/70">مبلغ التمويل</span>
                    <span className="text-xl font-bold">{loanAmount.toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                    <span className="text-primary-foreground/70">القسط الشهري</span>
                    <span className="text-2xl font-bold text-accent">{monthlyPayment.toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                    <span className="text-primary-foreground/70">إجمالي الأرباح</span>
                    <span className="text-xl font-bold">{totalProfit.toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">إجمالي السداد</span>
                    <span className="text-xl font-bold">{totalPayment.toLocaleString()} ريال</span>
                  </div>
                </div>

                <p className="text-sm text-primary-foreground/60 mt-6">
                  * هذه الأرقام تقديرية وقد تختلف حسب البنك والشروط الفعلية
                </p>

                <Button variant="gold" size="lg" className="w-full mt-6" asChild>
                  <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                    احصل على عرض حقيقي
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  شروط التمويل العقاري
                </h2>
                <p className="text-muted-foreground text-lg">
                  الشروط الأساسية للحصول على تمويل عقاري
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{req}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-6">
                  لا تستوفي جميع الشروط؟ تواصل معنا وسنساعدك في إيجاد الحل المناسب
                </p>
                <Button variant="gold" size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5" />
                    استشارة مجانية
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MortgageLoans;