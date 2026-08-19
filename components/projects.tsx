"use client"

import { ImagePlus } from "lucide-react"
import { useLang } from "./language-context"

export default function Projects() {
  const { t } = useLang()

  const projects = [
    { id: "project-1", title: "", description: "", imageSrc: "" },
    { id: "project-2", title: "", description: "", imageSrc: "" },
  ]

  return (
    <section id="projects" className="py-24 px-6 pixel-grid-bg relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-pixel)" }}>
            {t("// مشاريعنا", "// OUR PROJECTS")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("مشاريعنا", "Our Projects")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t("ألعاب وتجارب تفاعلية نصنعها لتحويل المعرفة والتوعية إلى أثر قابل للتجربة.", "Games and interactive experiences that turn knowledge and awareness into tangible experiences.")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {projects.map((project) => (
            <article key={project.id} className="pixel-card overflow-hidden group">
              <div className="relative z-10">
                <div className="flex aspect-video items-center justify-center bg-primary/10 pixel-border m-5">
                  {project.imageSrc ? (
                    <img src={project.imageSrc} alt={project.title} className="h-full w-full object-cover" />
                  ) : (
                    <ImagePlus className="h-10 w-10 text-accent/60" aria-hidden="true" />
                  )}
                </div>
                <div className="px-7 pb-7">
                  {project.title && <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>}
                  {project.description && <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
