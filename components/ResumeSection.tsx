"use client";

import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { profile, skills, education, certifications } from "@/lib/data";

export function ResumeSection() {
    return (
        <section id="resume" className="border-t border-ink-800 bg-ink-950 px-6 py-24 md:py-32">
            <div className="mx-auto max-w-content">
                <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="font-display text-display-sm font-semibold tracking-tight text-ink-50">
                            Resume
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-ink-400">
                            A brief overview of my professional experience, education, and technical expertise.
                        </p>
                    </div>
                    <a
                        href={profile.resume}
                        download
                        className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:scale-105 hover:bg-accent/90"
                    >
                        <Download size={18} />
                        Download Full Resume
                    </a>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
                    <div className="space-y-12">
                        {/* Professional Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-6 flex items-center gap-3 text-accent">
                                <FileText size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-wider">Professional Summary</h3>
                            </div>
                            <p className="text-balance leading-relaxed text-ink-300">
                                {profile.resumeSummary}
                            </p>
                        </motion.div>

                        {/* Technical Skills - Mobile only / Alternative layout */}
                        <div className="lg:hidden">
                            <SkillsGrid />
                        </div>

                        {/* Experience / Featured achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="mb-8 flex items-center gap-3 text-accent">
                                <Briefcase size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-wider">Education</h3>
                            </div>
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-ink-700">
                                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                            <h4 className="font-semibold text-ink-100">{edu.school}</h4>
                                            <span className="font-mono text-xs text-ink-500">{edu.period}</span>
                                        </div>
                                        <p className="mt-1 text-sm text-ink-400">{edu.degree}</p>
                                        <p className="mt-1 text-xs text-ink-500">{edu.location}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="mb-8 flex items-center gap-3 text-accent">
                                <Award size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-wider">Certifications & Achievements</h3>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start gap-3 rounded-lg border border-ink-800 bg-ink-900/50 p-4">
                                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
                                        <span className="text-sm text-ink-300">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Skills (Desktop) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-10">
                            <SkillsGrid />
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

function SkillsGrid() {
    return (
        <div className="space-y-10">
            <div className="flex items-center gap-3 text-accent">
                <GraduationCap size={20} />
                <h3 className="font-mono text-sm uppercase tracking-wider">Technical Skills</h3>
            </div>
            <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-500">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded border border-ink-800 bg-ink-900 px-2.5 py-1 text-xs font-medium text-ink-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
