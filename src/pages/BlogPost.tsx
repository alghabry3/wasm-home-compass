import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen">
          <div className="section-container py-12 max-w-4xl mx-auto">
            <Skeleton className="h-[400px] w-full rounded-2xl mb-8" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">المقال غير موجود</h1>
            <p className="text-muted-foreground mb-6">لم نتمكن من العثور على المقال المطلوب</p>
            <Button variant="gold" asChild>
              <Link to="/blog">العودة للمدونة</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <title>{post.title} | مدونة وسم هوم</title>
        <meta name="description" content={post.excerpt || post.title} />
        <link rel="canonical" href={`https://wasmhome.sa/blog/${slug}`} />
        <meta property="og:title" content={`${post.title} | مدونة وسم هوم`} />
        <meta property="og:description" content={post.excerpt || post.title} />
        <meta property="og:type" content="article" />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary py-4">
          <div className="section-container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent">الرئيسية</Link>
              <ArrowRight className="w-4 h-4 rotate-180" />
              <Link to="/blog" className="hover:text-accent">المدونة</Link>
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12 bg-background">
          <div className="section-container max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              {post.category && (
                <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>فريق وسم هوم</span>
                </div>
                {post.published_at && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{format(new Date(post.published_at), 'dd MMMM yyyy', { locale: ar })}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed border-r-4 border-accent pr-4">
                {post.excerpt}
              </p>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-muted-foreground">لا يوجد محتوى متاح لهذا المقال.</p>
              )}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="font-medium text-foreground">شارك المقال:</span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/blog" className="gap-2">
                  <ArrowRight className="w-4 h-4" />
                  العودة للمدونة
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              هل تبحث عن عقارك المثالي؟
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              تواصل مع مستشارينا العقاريين للحصول على أفضل النصائح والعروض
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/projects">تصفح المشاريع</Link>
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

export default BlogPost;
