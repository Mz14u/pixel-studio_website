"use client"

import { useLang } from "./language-context"
import { SaudiManIcon, HijabWomanIcon } from "./team-icons"

type Member = {
  nameAr: string
  nameEn: string
  roleAr: string
  roleEn: string
  gender: "male" | "female"
}

export default function Team() {
  const { t } = useLang()

  const boardMembers: Member[] = [
    { nameAr: "ماجدة فريح ذعار العنزي", nameEn: "Majida Freih Dhaar Al-Anazi", roleAr: "عضو مؤسس ورئيس مجلس الإدارة", roleEn: "Founding Member & Board Chair", gender: "female" },
    { nameAr: "أثير أحمد رجاء العنزي", nameEn: "Atheer Ahmed Raja Al-Anazi", roleAr: "عضو مؤسس ونائب رئيس مجلس الإدارة", roleEn: "Founding Member & Vice Chair", gender: "female" },
    { nameAr: "فهد نواف بن فهد النوفل", nameEn: "Fahad Nawaf bin Fahad Al-Nawfal", roleAr: "عضو مؤسس وعضو مجلس إدارة", roleEn: "Founding Member & Board Member", gender: "male" },
    { nameAr: "أسماء أحمد رجاء العنزي", nameEn: "Asmaa Ahmed Raja Al-Anazi", roleAr: "عضو مؤسس وعضو مجلس إدارة", roleEn: "Founding Member & Board Member", gender: "female" },
    { nameAr: "معتز عصام بن سليمان الحازمي", nameEn: "Muataz Esam bin Sulaiman Al-Hazmi", roleAr: "عضو مؤسس وعضو مجلس إدارة", roleEn: "Founding Member & Board Member", gender: "male" },
  ]

  const foundingMembers: Member[] = [
    { nameAr: "سنين مهاوش سليمان البريك", nameEn: "Saneen Mahaush Sulaiman Al-Braik", roleAr: "عضو مؤسس", roleEn: "Founding Member", gender: "female" },
    { nameAr: "أنفال عبدالعزيز بن إبراهيم الضعيان", nameEn: "Anfal Abdulaziz bin Ibrahim Al-Dhayan", roleAr: "عضو مؤسس", roleEn: "Founding Member", gender: "female" },
    { nameAr: "صهيب سامر بن شمس الدين الكندي", nameEn: "Suhaib Samer bin Shams Al-Din Al-Kindi", roleAr: "عضو مؤسس", roleEn: "Founding Member", gender: "male" },
    { nameAr: "سلطانة فريح ذعار العنزي", nameEn: "Sultana Freih Dhaar Al-Anazi", roleAr: "عضو مؤسس", roleEn: "Founding Member", gender: "female" },
    { nameAr: "الجازي محمد نزال العنزي", nameEn: "Al-Jazi Mohammed Nazal Al-Anazi", roleAr: "عضو مؤسس", roleEn: "Founding Member", gender: "female" },
  ]

  const memberCard = (member: Member) => (
    <div key={member.nameAr} className="pixel-card p-6 group transition-all hover:scale-[1.02]">
      <div className="relative z-10 flex items-center gap-4">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center ${member.gender === "male" ? "bg-primary/20" : "bg-accent/20"} pixel-border overflow-hidden`}>
          {member.gender === "male" ? <SaudiManIcon className="h-14 w-14" /> : <HijabWomanIcon className="h-14 w-14" />}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{t(member.nameAr, member.nameEn)}</h3>
          <p className="text-sm text-accent">{t(member.roleAr, member.roleEn)}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section id="team" className="py-24 px-6 bg-secondary/40 relative scanlines">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// أعضاء الجمعية", "// MEMBERS")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("أعضاء استديو بيكسل", "Pixel Studio Members")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t(
              "الأعضاء المؤسسون ومجلس الإدارة الذين يقودون رسالة الجمعية في توظيف الألعاب لصناعة الأثر.",
              "Founding members and board members advancing the association's mission of creating impact through games."
            )}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <span className="pixel-divider w-12 inline-block" />
            {t("مجلس الإدارة (وأعضاء مؤسسون)", "Board of Directors (also founding members)")}
            <span className="pixel-divider w-12 inline-block" />
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{boardMembers.map(memberCard)}</div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <span className="pixel-divider w-12 inline-block" />
            {t("الأعضاء المؤسسون الآخرون", "Other Founding Members")}
            <span className="pixel-divider w-12 inline-block" />
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-8">
            {t("يظهر أعضاء مجلس الإدارة المؤسسون في القسم السابق لتجنب التكرار.", "Founding board members appear in the section above to avoid duplication.")}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{foundingMembers.map(memberCard)}</div>
        </div>

      </div>
    </section>
  )
}
