"use client"

import { Joystick, GraduationCap, HeartPulse, Leaf, Brain, Sparkles } from "lucide-react"
import { useLang } from "./language-context"

export default function Services() {
  const { t } = useLang()

  const services = [
    {
      icon: Joystick,
      title: t("تصميم ألعاب تفاعلية", "Interactive Game Design"),
      description: t(
        "تطوير ألعاب رقمية بتجارب لعب ممتعة وتفاعلية تناسب مختلف الفئات العمرية",
        "Developing digital games with engaging and interactive gameplay for all age groups"
      ),
    },
    {
      icon: GraduationCap,
      title: t("ألعاب تعليمية", "Educational Games"),
      description: t(
        "ألعاب تعزز التعلم وتنقل المعرفة بأساليب مبتكرة وحديثة من خلال التجربة التفاعلية",
        "Games that enhance learning and deliver knowledge through innovative interactive experiences"
      ),
    },
    {
      icon: HeartPulse,
      title: t("ألعاب الصحة النفسية", "Mental Health Games"),
      description: t(
        "ألعاب تسهم في تعزيز الصحة النفسية ونشر الوعي حول أهميتها في المجتمع",
        "Games that promote mental health and spread awareness about its importance in society"
      ),
    },
    {
      icon: Leaf,
      title: t("ألعاب الاستدامة", "Sustainability Games"),
      description: t(
        "محتوى تفاعلي يدعم مفاهيم الاستدامة البيئية والسلوكيات الإيجابية اليومية",
        "Interactive content that supports environmental sustainability and positive daily behaviors"
      ),
    },
    {
      icon: Brain,
      title: t("ورش تدريبية", "Training Workshops"),
      description: t(
        "برامج تدريبية في تصميم وتطوير الألعاب للشباب والمهتمين بصناعة الألعاب",
        "Training programs in game design and development for youth and gaming enthusiasts"
      ),
    },
    {
      icon: Sparkles,
      title: t("استشارات تقنية", "Technical Consulting"),
      description: t(
        "جلسات إرشاد واستشارات في مجال تطوير الألعاب وتجربة المستخدم",
        "Mentoring sessions and consulting in game development and user experience"
      ),
    },
  ]

  return (
    <section id="services" className="py-24 px-6 pixel-grid-bg relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// خدماتنا", "// SERVICES")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("ماذا نقدم", "What We Offer")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t(
              "نقدم مجموعة من الخدمات والمنتجات التي تجمع بين التقنية والإبداع لخدمة المجتمع",
              "We offer a range of services and products that combine technology and creativity to serve the community"
            )}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="pixel-card p-8 group transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center justify-center bg-primary/15 p-3 pixel-border">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground flex items-center gap-2">
                  <span
                    className="text-primary/60 text-xs"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
