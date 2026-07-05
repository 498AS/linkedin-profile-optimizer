export const meta = {
  name: 'linkedin-kb-refresh',
  description: 'Re-investiga las 12 dimensiones LinkedIn (verificacion web) y devuelve packs frescos para diff contra knowledge-base-2026.json',
  whenToUse: 'Refresh trimestral del cerebro del skill linkedin-profile-optimizer (ver scripts/KB-REFRESH-RUNBOOK.md)',
  phases: [
    { title: 'Research', detail: '12 agentes en paralelo, una dimension cada uno (web-verificado)' },
  ],
}

// Extraido del workflow original wf_63e48ac1 (jul 2026). Si cambia la estructura del KB,
// actualizar RESEARCH_SCHEMA aqui y en kb_diff.py a la vez.

const RESEARCH_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    dimension: { type: 'string' },
    summary: { type: 'string', description: 'Dense 3-6 sentence current state (2025-2026) of this dimension' },
    guidelines: {
      type: 'array',
      description: 'Exhaustive list of concrete, actionable LinkedIn best-practice rules for this dimension',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          area: { type: 'string' },
          guideline: { type: 'string' },
          why: { type: 'string' },
          how: { type: 'string' },
        },
        required: ['area', 'guideline'],
      },
    },
    specs_or_benchmarks: {
      type: 'array',
      description: 'Exact numbers: character limits, image dimensions, percentages, benchmarks, feature limits, settings paths',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { field: { type: 'string' }, value: { type: 'string' }, note: { type: 'string' } },
        required: ['field', 'value'],
      },
    },
    checklists: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { name: { type: 'string' }, items: { type: 'array', items: { type: 'string' } } },
        required: ['name', 'items'],
      },
    },
    pitfalls: { type: 'array', items: { type: 'string' } },
    sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['dimension', 'summary', 'guidelines'],
}

const DIMENSIONS = [
  { key: 'algoritmo-2026', focus: 'How the LinkedIn ranking works in 2026: the unified AI/embeddings ranking model (publicly discussed as 360Brew), the shift from viral reach to depth & authority, ranking stages (filtering -> testing -> distribution), signals and their weights (dwell time thresholds and ER, comments ~15x likes, shares, saves, early engagement / golden hour 60-90 min), the profile-as-credibility / expertise-match signal, penalties (external links ~50-60% less reach, engagement bait, pods, low-effort AI content, frequent reposts, edited posts), content half-life, the 2026 reach decline (van der Blom Algorithm Insights: views -50%, engagement -25%, follower growth -59%), and how distribution differs for a personal profile vs a company page.' },
  { key: 'perfil-individual', focus: 'EVERY personal profile field with its exact limit and 2026 best practice: profile photo specs, background/banner (1584x396), name + pronunciation/audio, headline (220 chars, value formula), about/summary (2600 chars, first 2-3 lines visible), custom public URL, location & industry, contact info & website links, Featured section, Experience entries (descriptions, media, limits), Education, Licenses & Certifications, Skills (max 50, pinned top, endorsements), Recommendations strategy, Open to Work / Providing Services / Open to Hiring, creator tools (Make Follow primary, topics/hashtags, newsletter), Social Selling Index (SSI) components and how to raise each, profile language / secondary locale, public visibility settings, identity verification (CLEAR / etc), and creator/post analytics. This is the PERSON scope.' },
  { key: 'company-page', focus: 'Company/Brand Page setup and EVERY section with exact limits and SEO: page name, public URL, logo (300x300) and cover (1128x191), tagline (120 chars), About/overview (2000 chars) + keyword/SEO optimization, specialties (max 20), industry, company size, locations, website, custom CTA button options, community hashtags (max 3), page verification, admin role types and permissions (super admin, content admin, curator, analyst, sponsored content poster, recruiting, lead gen), Showcase Pages, Product Pages, Services, Events, and analytics access. This is the COMPANY scope.' },
  { key: 'formatos-contenido', focus: 'Each content format with exact specs + 2026 engagement rate + best practice: text post (3000 char limit, ideal length, line breaks, first-line hook), image (dimensions, ALT TEXT requirement), document/carousel PDF (specs, slide count, aspect ratio) ~6.6% ER, native video (vertical 9:16, length, captions/SRT, cover, specs) ~5.6% ER, poll, article (long-form SEO), newsletter, LinkedIn Live, event, reshare/repost (with-thoughts vs plain), collaborative articles, and comment strategy. Cover hashtag use (3-5), @mention/tagging etiquette, emoji use, accessibility (alt text, captions, camel-case hashtags). Confirm format ER ordering: document > video > image > text, and the external-link penalty.' },
  { key: 'estrategia-contenido', focus: 'Content strategy: pillar frameworks, content-mix percentages (person vs company), editorial calendar design, cadence (3-5/week sweet spot, diminishing returns >5), best posting times 2026 (Tue-Thu 10am-12pm, Wednesday best day, afternoons 3-8pm rising), storytelling frameworks (hook-story-lesson, PAS, listicle, contrarian, behind-the-scenes), hook formulas and first-line patterns, decline of broetry, CTA-in-post vs first-comment, genuine vs artificial engagement pods, repurposing across formats, and mapping content to the B2B funnel.' },
  { key: 'linkedin-ads', focus: 'All LinkedIn ad formats (single image, carousel, video, text, spotlight/dynamic, message/conversation ads, document ads, event ads, Thought Leader Ads, follower & job ads), campaign objectives and sub-objectives, targeting (professional attributes, matched audiences/ABM, lookalike/predictive, audience expansion, exclusions), Lead Gen Forms, conversion tracking (Insight Tag, CAPI), bidding and budget, ad specs (image/video dimensions, char limits), 2026 benchmarks (CTR by format including TLA ~2.68% vs single image ~0.42%, CPL, CPC, CPM), measurement, A/B testing, brand safety. Detail Thought Leader Ads thoroughly (3x CTR, 40-50% lower CPL, awareness/engagement objectives, permissions, author approval).' },
  { key: 'social-selling', focus: 'Sales Navigator features (lead & account lists, advanced search filters, saved searches, alerts, Smart Links, TeamLink, relationship explorer, buyer intent signals), the Social Selling Index (4 pillars: professional brand, find right people, engage with insights, build relationships) and how to raise each, InMail best practices and response rates, connection request best practices (300 char / 200 char with note limits, personalization), value-first outreach sequences, warm vs cold, account-based selling, and the line between allowed activity and automation that risks restriction.' },
  { key: 'employer-brand-advocacy', focus: 'Employer branding and Employee Advocacy: build a program (pilot -> content library -> tools -> gamify -> scale), advocacy reach/engagement multipliers and trust stats, Life Page and Career Pages, EVP storytelling, employee-generated content, talent attraction, Job posts vs paid Job Ads, Recruiter integration, the Notify Employees feature, brand ambassador guidelines, and clear do/dont rules for employees posting.' },
  { key: 'newsletters-video-live', focus: 'Advanced formats: LinkedIn Newsletters (how to start, eligibility, subscriber push+email notifications, cadence, growth tactics, limits), Video (the vertical video feed/tab, specs, length, captions, +36% YoY views, growth 2x other formats), LinkedIn Live (eligibility, third-party tools, promotion, restreaming), Audio Events, Collaborative Articles (co-authoring, Top Voice / community Top Voice badge), and Events (setup, promotion, registration). Mechanics + best practices for each.' },
  { key: 'analitica-kpis', focus: 'Measurement: personal profile analytics (post impressions, members reached, profile viewers, search appearances, follower analytics, top posts, audience demographics), Company Page analytics (visitors, followers, content/updates, competitor benchmarking, leads, employee advocacy, newsletter analytics), key metrics and formulas (engagement rate, follower growth rate, share of voice, CTR, dwell-time proxies), 2026 benchmarks, reporting cadence and dashboard structure, third-party analytics tools (Shield, AuthoredUp), and attribution from LinkedIn to pipeline/revenue.' },
  { key: 'guidelines-compliance', focus: 'LinkedIn rules and compliance: Professional Community Policies (be safe, be trustworthy, be professional), key User Agreement clauses, the Prohibited Software and Extensions policy (no scraping/automation), prohibited content, engagement-bait and pod penalties, account restriction/ban triggers and how to avoid them, invitation/connection weekly limits (~100-200) and pending-invite caps, messaging limits, accessibility requirements (alt text, captions, camel-case hashtags, plain language), AI-generated content policy and disclosure norms, authenticity/impersonation, copyright/IP, GDPR considerations for outreach, and advertising policies. Produce an exhaustive DO and DONT list.' },
  { key: 'tendencias-2026', focus: 'Change timeline and outlook 2024 -> 2026: Creator Mode retired (Feb/Mar 2024) and what replaced it, Thought Leader Ads expansion (Mar 2024), the 360Brew/AI ranking rollout, the vertical video feed launch, the reach decline, van der Blom Algorithm Insights data, AI integration inside LinkedIn (AI writing/tools and low-effort-AI detection), skills-based hiring, the creator economy on LinkedIn, B2B/sector nuances, predicted next changes, and common myths to debunk.' },
]

phase('Research')
log('Re-investigando las 12 dimensiones de LinkedIn (estado actual)...')
const research = (await parallel(DIMENSIONS.map((d) => () =>
  agent(
    `You are a senior LinkedIn marketing research analyst. Research this dimension EXHAUSTIVELY as of TODAY (verify the current date and prioritize the last 12 months): "${d.key}".\n\nFOCUS:\n${d.focus}\n\nMETHOD:\n- Use WebSearch and WebFetch to verify the most recent facts. If those tools are not directly available, load them first via ToolSearch with query "select:WebSearch,WebFetch". If web access still fails, rely on your training knowledge but mark any time-sensitive figure as approximate.\n- Be SPECIFIC and numeric: exact character limits, image/video dimensions, percentages, benchmarks, feature names, settings paths.\n- Cover BOTH personal profiles and company pages wherever the dimension touches them.\n- The output is a knowledge pack that will feed a system prompt and a Claude skill, so completeness beats brevity. Aim for the most thorough guideline list possible.\n\nReturn the structured object per the schema.`,
    { label: `research:${d.key}`, phase: 'Research', schema: RESEARCH_SCHEMA, effort: 'medium' }
  )
))).filter(Boolean)

return { packs: research, researched: research.length }
