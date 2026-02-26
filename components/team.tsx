"use client"

import { useLang } from "./language-context"
import { SaudiManIcon, HijabWomanIcon, AdvisorIcon } from "./team-icons"

export default function Team() {
  const { t } = useLang()

  const teamMembers = [
    {
      nameAr: "ماجدة الذعار",
      nameEn: "Majida Al-Thaar",
      roleAr: "قائد الفريق",
      roleEn: "Team Leader",
      gender: "female" as const,
      color: "bg-accent",
    },
    {
      nameAr: "فهد النوفل",
      nameEn: "Fahad Al-Nawfal",
      roleAr: "مصمم ومطور ألعاب",
      roleEn: "Game Designer & Developer",
      gender: "male" as const,
      color: "bg-primary",
    },
    {
      nameAr: "معتز الحازمي",
      nameEn: "Muataz Al-Hazmi",
      roleAr: "مصمم ومطور ألعاب",
      roleEn: "Game Designer & Developer",
      gender: "male" as const,
      color: "bg-primary",
    },
    {
      nameAr: "صهيب الكندي",
      nameEn: "Suhaib Al-Kindi",
      roleAr: "مصمم ومطور ألعاب",
      roleEn: "Game Designer & Developer",
      gender: "male" as const,
      color: "bg-primary",
    },
    {
      nameAr: "أسماء السويلمي",
      nameEn: "Asmaa Al-Swailmi",
      roleAr: "مطور أعمال",
      roleEn: "Business Developer",
      gender: "female" as const,
      color: "bg-accent",
    },
    {
      nameAr: "رسيل الخميس",
      nameEn: "Raseel Al-Khamis",
      roleAr: "مبرمجة",
      roleEn: "Programmer",
      gender: "female" as const,
      color: "bg-primary",
    },
  ]

  const advisors = [
    {
      nameAr: "أثير العنزي",
      nameEn: "Atheer Al-Anazi",
      roleAr: "مستشار",
      roleEn: "Advisor",
      descAr: "أخصائي أمن سيبراني بخبرة في التقييم التقني والإداري للمشاريع الرقمية",
      descEn: "Cybersecurity specialist with expertise in technical and administrative assessment of digital projects",
    },
  ]

  return (
    <section id="team" className="py-24 px-6 bg-secondary/40 relative scanlines">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// فريقنا", "// OUR TEAM")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("أعضاء الفريق", "Team Members")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t(
              "فريق شبابي متنوع المهارات يجمع بين التصميم والبرمجة وتطوير الألعاب وتجربة المستخدم",
              "A diverse youth team combining design, programming, game development, and user experience"
            )}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.nameAr}
              className="pixel-card p-6 group transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center ${member.gender === "male" ? "bg-primary/20" : "bg-accent/20"} pixel-border overflow-hidden`}>
                  {member.gender === "male" ? (
                    <SaudiManIcon className="h-14 w-14" />
                  ) : (
                    <HijabWomanIcon className="h-14 w-14" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t(member.nameAr, member.nameEn)}
                  </h3>
                  <p className="text-sm text-accent">
                    {t(member.roleAr, member.roleEn)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <span className="pixel-divider w-12 inline-block" />
            {t("المستشارون", "Advisors")}
            <span className="pixel-divider w-12 inline-block" />
          </h3>
          <div className="flex justify-center">
            {advisors.map((advisor) => (
              <div
                key={advisor.nameAr}
                className="max-w-md pixel-card p-8 text-center"
              >
                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center bg-accent/10 pixel-border overflow-hidden">
                    <AdvisorIcon className="h-18 w-18" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {t(advisor.nameAr, advisor.nameEn)}
                  </h3>
                  <p className="text-sm text-accent mb-3">
                    {t(advisor.roleAr, advisor.roleEn)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(advisor.descAr, advisor.descEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
