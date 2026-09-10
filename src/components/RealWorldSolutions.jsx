import React from 'react';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const RealWorldCard = ({ project, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={String((index + 1) * 150)}
    className="relative rounded-2xl p-[1px] bg-gradient-to-br from-red-500/40 via-white/10 to-white/10 hover:from-red-500/70 hover:to-red-500/20 transition-all duration-500"
  >
    <div className="rounded-2xl p-6 md:p-8 h-full bg-[#111111]/95 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
          {project.badge}
        </span>
        <span className="text-white/30 text-xs font-mono font-bold">
          {project.type}
        </span>
      </div>

      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-5xl font-black text-white/10 font-serif italic">
          {project.number}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {project.title}
        </h3>
      </div>

      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
        {project.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-7">
        {project.highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-start gap-2 text-sm text-white/70"
          >
            <span className="text-red-400 mt-0.5">✓</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-7">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links?.demo && (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 transition-all duration-300"
        >
          <ExternalLinkIcon />
          View Live Project
        </a>
      )}
    </div>
  </div>
);

const RealWorldSolutions = ({ projects = [], section }) => {
  if (!projects.length) return null;

  return (
    <section
      id="real-world"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-sm text-red-300 font-bold mb-8 bg-red-500/5">
            Real-World Work
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {section?.title || 'Real-World Solutions'}
          </h2>

          <p className="text-white/50 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            {section?.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <RealWorldCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldSolutions;
