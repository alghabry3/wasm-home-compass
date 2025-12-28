import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  { id: "general", label: "عام" },
  { id: "buying", label: "الشراء" },
  { id: "financing", label: "التمويل" },
  { id: "investment", label: "الاستثمار" },
  { id: "support", label: "الدعم السكني" },
];

const faqs = [
  // General
  {
    category: "general",
    question: "ما هي خدمات وسم هوم العقارية؟",
    answer: "نقدم حلولاً عقارية متكاملة تشمل: الوساطة العقارية، الاستشارات العقارية، خدمات التمويل العقاري، حلول التعثر المالي، والمساعدة في الاستفادة من برامج الدعم السكني.",
  },
  {
    category: "general",
    question: "هل خدماتكم مجانية؟",
    answer: "نعم، الاستشارات الأولية مجانية بالكامل. نحصل على عمولتنا من المطورين العقاريين عند إتمام الصفقة، لذلك لا يتحمل العميل أي تكاليف إضافية.",
  },
  {
    category: "general",
    question: "ما هي المناطق التي تغطونها؟",
    answer: "نغطي جميع مناطق المملكة العربية السعودية، مع تركيز خاص على المنطقة الشرقية (الخبر، الدمام، الظهران)، الرياض، وجدة.",
  },
  {
    category: "general",
    question: "كيف يمكنني التواصل معكم؟",
    answer: "يمكنك التواصل معنا عبر الواتساب على الرقم 920017195، أو زيارة مكتبنا في الخبر، أو من خلال نموذج التواصل على الموقع.",
  },
  
  // Buying
  {
    category: "buying",
    question: "ما هي خطوات شراء العقار عبر وسم هوم؟",
    answer: "1) تحديد احتياجاتك ومتطلباتك، 2) اقتراح المشاريع المناسبة، 3) زيارة العقارات، 4) المساعدة في التمويل، 5) إتمام الإجراءات والإفراغ.",
  },
  {
    category: "buying",
    question: "كيف أختار العقار المناسب لي؟",
    answer: "ننصح باستخدام أداة 'اختر لك عقارك' على موقعنا، أو التواصل مع مستشارينا الذين سيساعدونك في اختيار العقار الأنسب بناءً على احتياجاتك وميزانيتك.",
  },
  {
    category: "buying",
    question: "هل يمكنني زيارة العقار قبل الشراء؟",
    answer: "بالتأكيد! نرتب لك زيارات ميدانية للعقارات والمشاريع التي تهمك مع مرافقة أحد مستشارينا.",
  },
  {
    category: "buying",
    question: "ما هي الوثائق المطلوبة للشراء؟",
    answer: "الهوية الوطنية، تعريف الراتب أو السجل التجاري لأصحاب الأعمال، كشف حساب بنكي، وتقرير سمة (الاستعلام الائتماني).",
  },
  
  // Financing
  {
    category: "financing",
    question: "ما هي نسبة التمويل المتاحة؟",
    answer: "يمكن الحصول على تمويل يصل إلى 90% من قيمة العقار للمسكن الأول، و70% للمسكن الثاني، مع الدعم السكني يمكن أن يصل إلى 100%.",
  },
  {
    category: "financing",
    question: "ما هي البنوك التي تتعاملون معها؟",
    answer: "نتعامل مع جميع البنوك السعودية: البنك الأهلي، الراجحي، الرياض، البلاد، الفرنسي، العربي الوطني، وغيرها من شركات التمويل المرخصة.",
  },
  {
    category: "financing",
    question: "كم تستغرق الموافقة على التمويل؟",
    answer: "عادة ما تستغرق الموافقة المبدئية 24-48 ساعة، والموافقة النهائية من 5-10 أيام عمل حسب البنك واكتمال المستندات.",
  },
  {
    category: "financing",
    question: "هل يمكنني الحصول على تمويل وعلي التزامات سابقة؟",
    answer: "نعم، يعتمد ذلك على نسبة الالتزامات من الدخل. نساعدك في تحسين أهليتك الائتمانية والبحث عن أفضل الخيارات المتاحة.",
  },
  
  // Investment
  {
    category: "investment",
    question: "ما هو العائد الاستثماري المتوقع؟",
    answer: "يختلف العائد حسب نوع العقار والموقع، لكنه يتراوح عادة بين 7-15% سنوياً. نوفر تحليلات تفصيلية لكل فرصة استثمارية.",
  },
  {
    category: "investment",
    question: "ما الفرق بين الاستثمار السكني والتجاري؟",
    answer: "الاستثمار السكني أقل مخاطرة وأكثر استقراراً، بينما التجاري يوفر عوائد أعلى مع مخاطر أكبر. ننصح بالتنويع حسب قدرتك على تحمل المخاطر.",
  },
  {
    category: "investment",
    question: "هل تنصحون بالشراء على الخارطة؟",
    answer: "نعم، الشراء على الخارطة يوفر أسعاراً أقل وخطط سداد مرنة، لكن ننصح بالتأكد من موثوقية المطور وحصوله على تراخيص وافي.",
  },
  
  // Housing Support
  {
    category: "support",
    question: "ما هو الدعم السكني وكيف أستفيد منه؟",
    answer: "برنامج حكومي يقدم دعماً للمواطنين لامتلاك مسكنهم الأول. يشمل دعم الدفعة المقدمة ودعم الأقساط الشهرية. نساعدك في التسجيل والحصول على الدعم.",
  },
  {
    category: "support",
    question: "كيف أعرف إذا كنت مؤهلاً للدعم السكني؟",
    answer: "الشروط الأساسية: سعودي الجنسية، لا يملك عقاراً، الدخل أقل من 14,000 ريال. تواصل معنا للتحقق من أهليتك مجاناً.",
  },
  {
    category: "support",
    question: "هل يمكنني شراء عقار جاهز بالدعم السكني؟",
    answer: "نعم، يمكنك شراء عقار جاهز أو تحت الإنشاء أو أرض للبناء الذاتي، كلها مدعومة من برنامج سكني.",
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery ? matchesSearch : true);
  });

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <Helmet>
        <title>الأسئلة الشائعة | وسم هوم العقارية</title>
        <meta name="description" content="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا العقارية، التمويل، الدعم السكني، والاستثمار العقاري." />
        <meta name="keywords" content="أسئلة شائعة, تمويل عقاري, دعم سكني, استثمار عقاري, شراء عقار" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              الأسئلة <span className="text-accent">الشائعة</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث في الأسئلة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-4 rounded-xl border-0 bg-background text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground hover:bg-accent/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-background">
          <div className="section-container max-w-4xl">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex items-center justify-between p-6 text-right"
                    >
                      <span className="font-bold text-foreground text-lg pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                          openQuestions.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openQuestions.includes(index) && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  لا توجد نتائج لبحثك
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  إعادة ضبط البحث
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-secondary">
          <div className="section-container text-center">
            <MessageCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              لم تجد إجابة سؤالك؟
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              فريقنا جاهز للإجابة على جميع استفساراتك. تواصل معنا الآن
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966920017195" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  تواصل عبر واتساب
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">نموذج التواصل</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;