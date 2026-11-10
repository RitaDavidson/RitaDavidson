/* ============================================================================
   YOUR WEBSITE CONTENT
   ============================================================================

   This is the ONLY file you need to edit. Everything on your website comes
   from here.

   THREE RULES:
     1. Text always goes between "quote marks".
     2. Every line ends with a comma.
     3. For an apostrophe inside text, write \' — for example:
        "the miners\' journey"

   To add something to a list, copy an existing block (from { to },),
   paste it, and change the text inside.

   Anything you leave as an empty string ""  is hidden on the site.
   To hide a whole section, set its list to []  — for example: projects: []

   -----------------------------------------------------------------------
   >>> PLACES THAT STILL NEED YOUR INPUT are marked with  CHECK:
   -----------------------------------------------------------------------

============================================================================ */

const CONTENT = {

  /* ==========================================================================
     1. THE BASICS
     ========================================================================== */

  basics: {
    name: "Dr. Rita Davidson",

    // CHECK: your CV lists "Lecturer" (teaching) and "Associate professor"
    // (research) at USACH for the same period. Pick whichever is the correct
    // formal title — this is the line people read first.
    role: "Associate Professor",

    // CHECK: your faculty or department at USACH. Your CV mentions the FAE
    // seminar series, so this is probably "Faculty of Administration and
    // Economics" — please confirm, or leave it as "" to hide the line.
    department: "",

    university: "Universidad de Santiago de Chile",
    location: "Santiago, Chile",

    tagline: "Organisation and management scholar using ethnography to understand occupational health — what happens to people when work travels.",

    pageTitle: "Dr. Rita Davidson",
    metaDescription: "Dr. Rita Davidson — organisation and management scholar at the Universidad de Santiago de Chile. Qualitative research on occupational health, global work travel, job crafting, and organisational ethnography.",

    // CHECK: replace assets/photo.jpg with a real photograph.
    // Square works best, around 800 x 800 pixels.
    photo: "assets/photo.jpg",
    photoAlt: "Portrait of Dr. Rita Davidson",

    banner: "assets/banner.jpg",
  },


  /* ==========================================================================
     2. CONTACT + LINKS
     ========================================================================== */

  contact: {
    // CHECK: this is the address from your CV. If you have an institutional
    // address (…@usach.cl), that usually looks better on an academic site.
    email: "davidson.rita6@gmail.com",
    emailButtonLabel: "Send me an email",
    emailSubject: "Hello from your website",

    // Deliberately left empty. Your CV has your home address and mobile
    // number on it — those should not go on a public web page. If you want a
    // contact address here, use your university office, never your home.
    office: "",
    address: "",
    phone: "",
  },

  /* --------------------------------------------------------------------
     A NOTE ON  "#"

     Writing  "#"  as a link means: show this button, but it doesn't go
     anywhere yet. The button appears in its proper place and clicking it
     does nothing. Replace the "#" with a real address when you have one.

     Nothing is currently set to "#": the CV, Google Scholar, and the
     university page all have real links.
     -------------------------------------------------------------------- */

  // The CV is the PDF at assets/cv.pdf. It is a public version with no home
  // address, phone number, or referee contacts — keep it that way, because
  // anything in the assets folder of a public repository can be downloaded by
  // anyone who knows the URL.
  cv: {
    file: "assets/cv.pdf",
    label: "Download CV",
  },

  profiles: [
    { icon: "orcid",    label: "ORCID",    url: "https://orcid.org/0000-0003-0863-4262" },
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/ritadavidsonresearch" },

    { icon: "scholar",    label: "Google Scholar",  url: "https://scholar.google.com/citations?user=kLKqTwUAAAAJ&hl=en" },
    { icon: "university", label: "University page", url: "https://fae.usach.cl/fae/index.php/academicos-as?view=article&id=239:davidson-rita&catid=11" },
  ],


  /* ==========================================================================
     3. ABOUT
     Each item below becomes one paragraph.
     ========================================================================== */

  about: [
    "I am an organisation and management scholar at the Universidad de Santiago de Chile. My research asks what happens to people's health and wellbeing when work stops staying in one place — when it moves across borders, sites, and languages, and the organisation has to follow it.",

    "Most of my work concerns occupational hazards in out-of-premises work and work-related travel, approached qualitatively rather than through survey instruments. Alongside this I study psychological safety and climate in cross-cultural teams, and the social conditions that shape how people craft their own jobs in response to risk.",

    "I completed my PhD at Alliance Manchester Business School in 2021 with an ethnography of the travelling organisation, supervised by Prof. Damian O\'Doherty and Prof. Damian Hodgson. During my doctorate I spent a year as a research specialist at Tetra Pak in Sweden, running a twelve-month consultancy project on organisational culture that took me to six countries and four languages — an experience that continues to shape how I think about mobile work from the inside.",

    "Methodologically I work with multi-sited, international, and multi-lingual ethnography: participant observation, field interviews, focus groups, workplace shadowing, and archival and biographical methods. I teach strategy and qualitative research methods at undergraduate, MSc, and MBA level, and I am an Associate Fellow of Advance HE.",
  ],

  researchInterests: [
    {
      title: "Occupational health in mobile work",
      text: "Hazards that appear when work happens away from the premises — business travel, fieldwork, and mobile consulting — and how organisations fail to see them.",
    },
    {
      title: "Job crafting and wellbeing",
      text: "How travelling workers reshape their own roles to manage risk and protect wellbeing on the road, and what conditions make that possible.",
    },
    {
      title: "Psychological safety across cultures",
      text: "Productivity norms and the emergence of psychological safety consensus in cross-cultural teams, with a focus on Latin America.",
    },
    {
      title: "Organisational ethnography",
      text: "Multi-sited, international, and multi-lingual ethnographic methods for studying organisational phenomena that will not hold still.",
    },
  ],

  // Shown as a short list at the end of the About section.
  education: [
    {
      period: "2017 – 2021",
      degree: "PhD in Business and Management",
      institution: "Alliance Manchester Business School, The University of Manchester",
      detail: "Thesis: Organising global work travel — An ethnography of the travelling organisation. Supervised by Prof. Damian O\'Doherty and Prof. Damian Hodgson.",
    },
    {
      period: "2016 – 2017",
      degree: "MSc in Sociological Research (Merit)",
      institution: "School of Social Sciences, The University of Manchester",
      detail: "",
    },
    {
      period: "2013 – 2016",
      degree: "BSc Management (Hons), First Class",
      institution: "Alliance Manchester Business School, The University of Manchester",
      detail: "",
    },
  ],


  /* ==========================================================================
     4. PUBLICATIONS
     Published work first, then work under review and in progress.

     "status" is optional — it shows as a small tag above the title.
     Use it for things like "Under revision" or "In progress". Leave it out
     (or set it to "") for published work.

     Items with a year sort themselves newest-first. Items with no year stay
     at the bottom, in the order you write them.
     ========================================================================== */

  publications: [
    {
      year: 2025,
      title: "Minding the gap: an analysis of hopeful, mindful organizing in the Chilean miners’ underground journey from collapse to resilience",
      authors: "Matías Sanfuentes, Francisco Valenzuela, and Rita Davidson",
      venue: "Culture and Organization",
      details: "pp. 1–19",
      links: [
        { label: "DOI", url: "https://doi.org/10.1080/14759551.2025.2551319" },
      ],
    },

    {
      year: "",
      status: "Under revision",
      title: "The Chilling Effect: Productivity Norms and the Emergence of Psychological Safety Consensus in Latin America",
      authors: "Rita Davidson, Maximiliano Escaffi-Schwarz, Lyonel Laulié, and Mahamadou Biga",
      venue: "Journal of Managerial Psychology",
      details: "Revise and resubmit, March 2026",
      links: [],
    },
    {
      year: "",
      status: "Under revision",
      title: "The joys and maladies of mobile work: Understanding global work travel as ambivalence",
      authors: "Rita Davidson",
      venue: "Scandinavian Journal of Management",
      details: "Revise and resubmit",
      links: [],
    },

    {
      year: "",
      status: "In progress",
      title: "Mitigating occupational hazards in global work travel: a job crafting perspective",
      authors: "Rita Davidson and Maximiliano Escaffi-Schwarz",
      venue: "To be submitted to European Journal of Work and Organizational Psychology",
      details: "",
      links: [],
    },
    {
      year: "",
      status: "In progress",
      title: "Crafting wellbeing on the road: job crafting strategies for occupational hazards in work-related travel",
      authors: "Rita Davidson",
      venue: "To be submitted to Journal of Management",
      details: "",
      links: [],
    },
    {
      year: "",
      status: "In progress",
      title: "Mobile subjectivities: understanding mobile work as embodied",
      authors: "Rita Davidson",
      venue: "To be submitted to Organization Studies",
      details: "",
      links: [],
    },
  ],


  /* ==========================================================================
     5. PROJECTS
     ========================================================================== */

  projects: [
    {
      title: "SUSESO — Managing psychosocial occupational hazards",
      period: "2025",
      funder: "Universidad Diego Portales",
      text: "Qualitative researcher on a project addressing the mitigation of occupational psychosocial risks, responsible for collecting focus-group data.",
      links: [],
    },
    {
      title: "Occupational hazards in global work travel",
      period: "2021 – present",
      funder: "",
      text: "An ongoing programme of work, growing out of my doctoral ethnography, on how travelling workers encounter and manage occupational hazards — and how job crafting becomes a form of self-protection when the organisation provides none.",
      links: [],
    },
    {
      title: "FONDECYT — Identity formation in entrepreneurship",
      period: "2023",
      funder: "Pontificia Universidad Católica de Valparaíso",
      text: "Research assistant on a project studying identity formation in entrepreneurship, conducting document search and analysis, ethnographic research on everyday life within the project context, and interviews.",
      links: [],
    },
    {
      title: "Departmental research seminar programme",
      period: "2024 – present",
      funder: "Universidad de Santiago de Chile",
      text: "Leading the department-level research seminar programme, bringing together local faculty with national and international presenters to circulate ideas in business and management.",
      links: [],
    },
  ],


  /* ==========================================================================
     6. TEACHING
     ========================================================================== */

  teaching: [
    {
      title: "Strategy and qualitative research methods",
      role: "Lecturer",
      period: "2024 – present",
      institution: "Universidad de Santiago de Chile",
      text: "Designed and delivered postgraduate modules in strategy and qualitative research methods, including a six-lecture MBA course on strategy and a seventeen-lecture course on qualitative methods for an MSc in Marketing, alongside an undergraduate strategy module. Supervised MSc and MBA dissertation projects through to completion, and examined postgraduate theses.",
    },
    {
      title: "Strategy",
      role: "Lecturer",
      period: "2023",
      institution: "Universidad Diego Portales, Chile",
      text: "Developed and designed a thirty-lecture undergraduate module on strategy for management students, creating the curriculum, assessments, and lecture materials.",
    },
    {
      title: "Doctoral mentoring programme",
      role: "Postdoctoral investigator",
      period: "2022 – 2023",
      institution: "Pontificia Universidad Católica de Valparaíso, Chile",
      text: "Designed and implemented a mentoring programme for a cohort of twenty doctoral students, providing support in research methods and project management, and led a training seminar to develop their research and academic skills.",
    },
    {
      title: "Introduction to Management and Organisation Studies",
      role: "Lecturer",
      period: "2019 – 2020",
      institution: "Alliance Manchester Business School, United Kingdom",
      text: "Developed a one-semester undergraduate module from scratch and delivered it across ten lectures to an audience of four hundred students. Led a team of five teaching assistants and administered the course, including assessment design, mark moderation, and support for students with special requirements.",
    },
    {
      title: "Seminar leadership and coordination",
      role: "Seminar leader and coordinator",
      period: "2016 – 2021",
      institution: "Alliance Manchester Business School, United Kingdom",
      text: "Taught three undergraduate modules across management and organisation studies, work psychology, and transformational leadership. Coordinated teams of four to twelve seminar leaders and mentored groups of fifteen to twenty students. Kept the seminar programme running through the pandemic, including converting isolating cohorts to hybrid delivery at short notice. Twice awarded the Teaching Excellence Award.",
    },
  ],


  /* ==========================================================================
     7. CONFERENCES AND TALKS
     ========================================================================== */

  conferences: [
    {
      year: 2025,
      kind: "Paper",
      title: "Tracing the Cascade: An Organisational Ethnography of Strategy Dissemination and Meaning-Making",
      event: "AOM Andes Connect Conference",
      place: "",
    },
    {
      year: 2025,
      kind: "Invited talk",
      title: "Crafting Wellbeing on the Road: Job Crafting Strategies for Occupational Hazards in Work-related Travel",
      event: "FAE Seminar Series, Universidad de Santiago de Chile",
      place: "Santiago, Chile",
    },
    {
      year: 2025,
      kind: "Paper",
      title: "Crafting Wellbeing on the Road: Job Crafting Strategies for Occupational Hazards in Work-related Travel",
      event: "SOCIPCO 2025 Conference, Universidad de los Andes",
      place: "Santiago, Chile",
    },
    {
      year: 2024,
      kind: "Co-organiser",
      title: "Co-organised and chaired a panel at a day-long international conference on organisational behaviour",
      event: "SOCIPCO 2024 Conference, Universidad de Santiago de Chile",
      place: "Santiago, Chile",
    },
    {
      year: 2024,
      kind: "Paper",
      title: "Mitigating occupational hazards in global work travel: a job crafting perspective",
      event: "European Academy of Occupational Health Psychology",
      place: "Granada, Spain",
    },
    {
      year: 2024,
      kind: "Panel",
      title: "Managing in a changing world: organising global work travel and remote work",
      event: "MBA Seminar Series, Universidad Privada Boliviana",
      place: "Bolivia",
    },
    {
      year: 2022,
      kind: "Workshop",
      title: "Multi-sited and multilingual ethnography",
      event: "PUCV Luncheon Seminar",
      place: "Valparaíso, Chile",
    },
    {
      year: 2022,
      kind: "Co-organiser",
      title: "Co-organised and presented “‘You are here’: Charting, mapping, and organising mobile work”",
      event: "Ethnography Workshop Manchester",
      place: "Manchester, United Kingdom",
    },
    {
      year: 2021,
      kind: "Paper",
      title: "Ethnographic stories of becoming in mobile consulting work",
      event: "12th PROS Symposium",
      place: "Online",
    },
    {
      year: 2021,
      kind: "Co-organiser",
      title: "Co-organised and chaired an interdisciplinary day-long event for PhD students across four universities in the North West of England",
      event: "ESRC MethodsX Ethnography Stream",
      place: "Online",
    },
    {
      year: 2020,
      kind: "Paper",
      title: "“You are here”: Charting, mapping, and organising mobile work",
      event: "European Group of Organisation Studies (EGOS)",
      place: "Hamburg, Germany",
    },
    {
      year: 2019,
      kind: "Paper",
      title: "Getting into Neoliberalism: An ethnographic account of mobile work",
      event: "European Group of Organisation Studies (EGOS)",
      place: "Edinburgh, United Kingdom",
    },
    {
      year: 2019,
      kind: "Summer school",
      title: "Qualitative research methods",
      event: "AIDEA Capri Summer School",
      place: "Capri, Italy",
    },
  ],


  /* ==========================================================================
     8. AWARDS, SKILLS AND AFFILIATIONS
     Each block below becomes one column. Add or delete whole blocks freely.
     "year" is optional — leave it as "" and only the text shows.
     ========================================================================== */

  lists: [
    {
      title: "Awards & recognition",
      items: [
        { year: "2021", text: "Associate Fellow of Advance HE — UK teaching excellence accreditation in higher education" },
        { year: "", text: "Teaching Excellence Award, Alliance Manchester Business School (twice awarded)" },
        { year: "", text: "Economic and Social Research Council (ESRC) doctoral funding" },
        { year: "", text: "President’s Doctoral Researcher Scholarship, The University of Manchester" },
        { year: "", text: "Alliance Manchester Business School doctoral funding" },
      ],
    },
    {
      title: "Professional affiliations",
      items: [
        { year: "", text: "European Academy of Occupational Health Psychology (EAOHP)" },
        { year: "", text: "Sociedad Científica Chilena de Psicología y Comportamiento Organizacional (SOCIPCO)" },
        { year: "", text: "European Group of Organisation Studies (EGOS)" },
        { year: "", text: "MethodsX Ethnography research stream, North West Social Science Doctoral Training Partnership (ESRC)" },
      ],
    },
    {
      title: "Research methods",
      items: [
        { year: "", text: "Multi-sited, international, and multi-lingual ethnography" },
        { year: "", text: "Participant observation and workplace shadowing" },
        { year: "", text: "Qualitative and field interviewing" },
        { year: "", text: "Focus groups" },
        { year: "", text: "Archival and biographical research methods" },
        { year: "", text: "Narrative, thematic, and discourse analysis" },
        { year: "", text: "NVivo; SPSS Modeller and Statistics" },
      ],
    },
    {
      title: "Languages",
      items: [
        { year: "", text: "English — native / bilingual" },
        { year: "", text: "Russian — native / bilingual" },
        { year: "", text: "Hebrew — native / bilingual" },
        { year: "", text: "Spanish — professional working proficiency" },
        { year: "", text: "Swedish — elementary" },
      ],
    },
  ],


  /* ==========================================================================
     9. FOOTER
     ========================================================================== */

  footer: {
    note: "",
  },

};
