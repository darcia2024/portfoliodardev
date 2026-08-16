"use client";

import { useState, type FormEvent } from "react";
import { createWhatsAppUrl } from "@/lib/contact";

type Option = {
  value: string;
  label: string;
};

type ProjectBriefFormProps = {
  title: string;
  intro: string;
  projectLabel: string;
  projectOptions: Option[];
  timelineLabel: string;
  timelineOptions: Option[];
  budgetLabel: string;
  budgetOptions: Option[];
  budgetFallback: string;
  needLabel: string;
  needPlaceholder: string;
  submitLabel: string;
  message: {
    greeting: string;
    project: string;
    timeline: string;
    budget: string;
    need: string;
  };
};

export function ProjectBriefForm({
  title,
  intro,
  projectLabel,
  projectOptions,
  timelineLabel,
  timelineOptions,
  budgetLabel,
  budgetOptions,
  budgetFallback,
  needLabel,
  needPlaceholder,
  submitLabel,
  message,
}: ProjectBriefFormProps) {
  const [project, setProject] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [need, setNeed] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedProject = projectOptions.find((option) => option.value === project)?.label ?? project;
    const selectedTimeline = timelineOptions.find((option) => option.value === timeline)?.label ?? timeline;
    const selectedBudget =
      (budgetOptions.find((option) => option.value === budget)?.label ?? budget) ||
      budgetFallback;
    const messageBody = [
      message.greeting,
      "",
      `${message.project}: ${selectedProject}`,
      `${message.timeline}: ${selectedTimeline}`,
      `${message.budget}: ${selectedBudget}`,
      `${message.need}: ${need.trim()}`,
    ].join("\n");

    window.open(createWhatsAppUrl(messageBody), "_blank", "noopener,noreferrer");
  }

  const selectClassName =
    "mt-2 w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <section className="mt-12 border-t border-border pt-8 md:mt-16 md:pt-10">
      <div className="max-w-3xl rounded-2xl border border-border bg-surface p-5 sm:p-6 md:rounded-[20px] md:p-8">
        <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{intro}</p>

        <form onSubmit={handleSubmit} className="mt-7 grid gap-5 md:mt-8 md:grid-cols-2">
          <label className="text-sm text-foreground">
            {projectLabel}
            <select
              required
              value={project}
              onChange={(event) => setProject(event.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                {projectLabel}
              </option>
              {projectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm text-foreground">
            {timelineLabel}
            <select
              required
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                {timelineLabel}
              </option>
              {timelineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm text-foreground md:col-span-2">
            {needLabel}
            <textarea
              required
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              rows={4}
              placeholder={needPlaceholder}
              className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <label className="text-sm text-foreground">
            {budgetLabel}
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className={selectClassName}
            >
              <option value="">{budgetLabel}</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-end">
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-accent active:translate-y-px dark:bg-accent dark:text-background dark:hover:bg-foreground"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
