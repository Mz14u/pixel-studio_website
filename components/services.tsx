"use client"

import { GraduationCap, HeartPulse, Landmark, Leaf, Brain, School, Gamepad2, Globe2 } from "lucide-react"
import { useLang } from "./language-context"

export default function Services() {
  const { t } = useLang()

  const services = [
    {
      icon: GraduationCap,
      title: t("تجارب تعليمية", "Educational Experiences"),
      description: t(
        "نقدم التعليم والتدريب عبر ألعاب تعليمية ومحاكاة ومختبرات افتراضية وتجارب لحل المشكلات.",
        "We deliver learning and training through educational games, simulations, virtual labs, and problem-solving experiences."
      ),
    },
    {
      icon: HeartPulse,
      title: t("تجارب صحية وتوعوية", "Health & Awareness Experiences"),
      description: t(
        "نقدم التوعية الصحية والعادات الصحية والنشاط البدني عبر ألعاب تفاعلية تثقيفية دون ادعاءات علاجية.",
        "We deliver health awareness, healthy habits, and physical activity through educational interactive games without treatment claims."
      ),
    },
    {
      icon: Landmark,
      title: t("تجارب ثقافية وتراثية", "Cultural & Heritage Experiences"),
      description: t(
        "نحوّل التاريخ والتراث والحرف والقصص والمواقع والمتاحف إلى ألعاب وتجارب تفاعلية.",
        "We turn history, heritage, crafts, stories, sites, and museums into games and interactive experiences."
      ),
    },
    {
      icon: Leaf,
      title: t("تجارب بيئية", "Environmental Experiences"),
      description: t(
        "نقدم التوعية بالبيئة والتشجير وترشيد المياه والطاقة وإعادة التدوير عبر ألعاب بيئية تفاعلية.",
        "We deliver environmental awareness through interactive games about planting, water, energy, recycling, and sustainability."
      ),
    },
    {
      icon: Brain,
      title: t("تجارب اجتماعية", "Social Experiences"),
      description: t(
        "نستخدم الألعاب والتجارب التفاعلية لنشر الوعي بالقضايا والمفاهيم الاجتماعية بطريقة مبتكرة.",
        "We use games and interactive experiences to raise awareness of social issues and concepts."
      ),
    },
    {
      icon: School,
      title: t("محاكاة وتدريب", "Simulation & Training"),
      description: t(
        "نطوّر محاكاة تعليمية ومهنية وتجارب افتراضية للمعارض والمتاحف والتدريب.",
        "We develop educational and professional simulations and virtual experiences for exhibitions, museums, and training."
      ),
    },
    { icon: Gamepad2, title: t("ألعاب هادفة", "Purposeful Games"), description: t("نصنع ألعابًا تجمع بين المتعة والفائدة والتعلم وصناعة الأثر.", "We create games that combine enjoyment, learning, and meaningful impact.") },
    { icon: Globe2, title: t("تجارب تفاعلية رقمية", "Digital Interactive Experiences"), description: t("نحوّل المعرفة والثقافة والرسائل التوعوية إلى تجارب رقمية تفاعلية.", "We turn knowledge, culture, and awareness messages into digital interactive experiences.") },
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
            {t("ماذا نصنع؟", "What We Create")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t(
              "مجالات عمل واهتمام توظف الألعاب والتقنيات التفاعلية لصناعة أثر حقيقي.",
              "Areas of work and interest that use games and interactive technology to create real impact."
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
