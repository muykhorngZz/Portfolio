/* ============================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   Nothing else needs to change when you add a project, award,
   photo, or volunteering experience.

   PHOTOS: put image files in  assets/images/
           then reference them as "assets/images/your-file.jpg"
           Every photo takes { src, caption }.
           An empty photos: [] array is fine — the card just
           renders without a gallery.
   ============================================================ */

const DATA = {

  /* ---------- HOME PHOTO ROTATION ----------
     The portrait in the Home section crossfades through these every
     3 seconds (change heroInterval below). Add or remove entries
     freely; a single entry just sits there without rotating.
     Until a file exists in assets/images/ the slot shows a labelled
     placeholder, so the layout never breaks.                             */
  heroInterval: 3000,   // milliseconds between photos

  heroPhotos: [
    { src: "assets/images/portrait.jpg", alt: "Portrait of Hang Muykhorng",
      caption: "Add your photo at assets/images/portrait.jpg" },
    { src: "assets/images/hero-2.jpg",   alt: "Hang Muykhorng presenting research",
      caption: "Add a photo at assets/images/hero-2.jpg" },
    { src: "assets/images/hero-3.jpg",   alt: "Hang Muykhorng at work",
      caption: "Add a photo at assets/images/hero-3.jpg" },
    { src: "assets/images/hero-4.jpg",   alt: "Hang Muykhorng",
      caption: "Add a photo at assets/images/hero-4.jpg" },
    { src: "assets/images/hero-5.jpg",   alt: "Hang Muykhorng",
      caption: "Add a photo at assets/images/hero-5.jpg" }
  ],

  /* ---------- HERO INTEREST MARQUEE ---------- */
  interests: [
    "Artificial Intelligence", "Machine Learning", "Computer Vision",
    "Data Engineering", "Business Intelligence", "IoT",
    "Large Language Models", "Retrieval-Augmented Generation",
    "Reinforcement Learning", "Entrepreneurship"
  ],

  /* ---------- ABOUT ---------- */
  about: [
    "I'm Hang Muykhorng, Year 5 student in Applied Mathematics and Statistics (Data Science) at the Institute of Technology of Cambodia. I finished Year 4 ranked first in my cohort with a GPA of 4.00, but the number I'm prouder of is the count of projects I shipped alongside it.",

    "My path into AI started with curiosity rather than a plan. I wanted to know how a machine could look at an image and recognise a face, how a model could read Khmer and answer back. Every question turned into a project, and every project taught me something wherethe lecture notes couldn't.",

    "Today my work sits at the intersection of research and practice. I've experienced building end-to-end data pipelines and BI dashboards, worked with LLMs and RAG systems for Khmer-language education. I present that work when I can with the most recently at IEEE TIC 2026 in Malaysia and the NUS Young Fellowship Program in Singapore.",

    "Outside the lab, I'm the co-founder and CFO of RielAds, where we're building marketing analytics for Cambodian SMEs who deserve better than guesswork. I also lead the Data & Business Analytics student club, and I volunteer regularly as a translator, an interpreter, an IT hand, and occasionally an MC.",

    "I'm still early, and I know it. My aspiration is to become an AI researcher and technology entrepreneur who builds things that make sense for Cambodia and for people like the ones I grew up with."
  ],

  /* ---------- ABOUT PHOTOS ----------
     Two images shown beside the About text. Drop your files into
     assets/images/ and update src + caption. Until a file exists the
     slot renders as a labelled placeholder, so the layout never breaks.  */
  aboutPhotos: [
    { src: "assets/images/about-1.jpg", caption: "Add a photo — assets/images/about-1.jpg" },
    { src: "assets/images/about-2.jpg", caption: "Add a photo — assets/images/about-2.jpg" }
  ],

  /* ---------- PHOTO STRIP ----------
     A continuously scrolling band of images just above the footer.
     Add or remove entries freely — the loop adapts to any number.
     Landscape crops look best (roughly 4:3 or 3:2).                      */
  photoStrip: [
    { src: "assets/images/strip-1.jpg",  caption: "strip-1.jpg"  },
    { src: "assets/images/strip-2.jpg",  caption: "strip-2.jpg"  },
    { src: "assets/images/strip-3.jpg",  caption: "strip-3.jpg"  },
    { src: "assets/images/strip-4.jpg",  caption: "strip-4.jpg"  },
    { src: "assets/images/strip-5.jpg",  caption: "strip-5.jpg"  },
    { src: "assets/images/strip-6.jpg",  caption: "strip-6.jpg"  },
    { src: "assets/images/strip-7.jpg",  caption: "strip-7.jpg"  },
    { src: "assets/images/strip-8.jpg",  caption: "strip-8.jpg"  },
    { src: "assets/images/strip-9.jpg",  caption: "strip-9.jpg"  },
    { src: "assets/images/strip-10.jpg", caption: "strip-10.jpg" },
    { src: "assets/images/strip-11.jpg", caption: "strip-11.jpg" },
    { src: "assets/images/strip-12.jpg", caption: "strip-12.jpg" },
    { src: "assets/images/strip-13.jpg", caption: "strip-13.jpg" },
    { src: "assets/images/strip-14.jpg", caption: "strip-14.jpg" },
    { src: "assets/images/strip-15.jpg", caption: "strip-15.jpg" }
  ],

  /* ---------- CONTACT / SOCIAL LINKS ----------
     These render as the link row in the footer.
     Replace the "#" placeholders with your real URLs.
     Flags: footer:false  hides it from the footer row
            newTab:true   opens in a new tab
            download:true forces a download instead of opening

     `logo` is optional: save a square icon into assets/images/ and it
     replaces the `icon` character in the dropdown. If the file isn't
     there, the character shows instead — so both always work.          */
  links: [
    { icon: "✉️", label: "Email",          value: "muykhorng.hang@outlook.com", href: "mailto:muykhorng.hang@outlook.com", logo: "assets/images/icon-email.png" },
    { icon: "in", label: "LinkedIn",       value: "Muykhorng Hang",         href: "https://www.linkedin.com/in/muykhorng-hang-337a963bb/", logo: "assets/images/icon-linkedin.png" },
    { icon: "f",  label: "Facebook",       value: "Muy Khorng",             href: "https://www.facebook.com/muy.khorng", logo: "assets/images/icon-facebook.png" },
    { icon: "✈",  label: "Telegram",       value: "@muykhornghang",         href: "https://t.me/muykhornghang", logo: "assets/images/icon-telegram.png" },
    { icon: "📄", label: "Resume",         value: "View resume",            href: "assets/resume/Hang-Muykhorng-Resume.pdf", newTab: true, logo: "assets/images/icon-resume.png" }
  ],

  /* ---------- PHONE NUMBERS ----------
     Shown as a "Call" group at the bottom of the Contact dropdown.
     Save each operator's logo into assets/images/ and point `logo` at it;
     if the file is missing the row still works, just without the image.   */
  phones: [
    { name: "Smart",    number: "0966178945", logo: "assets/images/smart.png" },
    { name: "Cellcard", number: "012881972",  logo: "assets/images/cellcard.png" }
  ],

  /* ---------- JOURNEY TIMELINE ---------- */
  timeline: [
    { year: "2022", title: "Institute of Technology of Cambodia", text: "Began an engineering degree in Applied Mathematics & Statistics (Data Science) after ranking 1st at Santhormok High School." },
    { year: "2023", title: "Languages & foundations",             text: "IELTS 7.5 through GEP 12 at ACE, HSK 3 at Cambodia-China University, and my first UNESCO UNITWIN Data Science Camp." },
    { year: "2024", title: "Learning to build",                   text: "Programming coursework in C/C++/OOP at ETEC, plus web fundamentals." },
    { year: "2025", title: "Competitions & a startup",            text: "CATALYST champion, YFS Phnom Penh winner, Honda YES top 15, CO-founding RielAds." },
    { year: "2026", title: "Research on the international stage", text: "Champion at the NUS Young Fellowship Program in Singapore and Best Presentation at IEEE TIC 2026 in Malaysia. Ranked #1 in Year 4 with a 4.00 GPA." }
  ],

  /* ============================================================
     PROJECTS — three groups. Add new entries anywhere.
     ============================================================ */
  projectGroups: [
    {
      id: "startup",
      title: "Personal Startup",
      blurb: "The one I'm building for keeps.",
      projects: [
        {
          name: "RielAds",
          role: "Co-Founder & Chief Financial Officer",
          type: "Startup · Marketing Analytics",
          summary: "An AI-powered marketing analytics platform that helps Cambodian SMEs measure and optimise their advertising performance.",
          tech: ["Python", "Machine Learning", "Data Pipelines", "Dashboards", "Business Strategy"],
          photos: [
            // { src: "assets/images/rielads-1.jpg", caption: "Pitching RielAds at CATALYST 2025" }
          ]
        }
      ]
    },
    {
      id: "academic",
      title: "Academic & School Projects",
      blurb: "Coursework that grew past the assignment brief.",
      projects: [
        {
          name: "Real-Time Grocery Sales Data Pipeline & Power BI Decision Intelligence System",
          type: "Data Engineering · Business Intelligence",
          summary: "A streaming pipeline that ingests grocery transactions in real time and surfaces them through a Power BI layer built for decisions, not just charts, stock movement, basket patterns, and margin health at a glance.",
          tech: ["Python", "SQL", "ETL", "Power BI", "Data Modelling"],
          photos: []
        },
        {
          name: "KhmerTrust Bank — Online Banking System",
          type: "Full-Stack Web Application",
          summary: "A complete online banking simulation covering accounts, transfers, transaction history, and role-based access.",
          tech: ["Web Development", "Databases", "Authentication", "OOP"],
          photos: []
        },
        {
          name: "HR Management Dashboard",
          type: "Business Intelligence",
          summary: "An analytics dashboard tracking headcount, attrition, and workforce demographics, designed so an HR lead can find the story without asking an analyst first.",
          tech: ["Power BI", "SQL", "Data Visualisation"],
          photos: []
        },
        {
          name: "Sales Prediction System",
          type: "Machine Learning · Forecasting",
          summary: "Regression and time-series models forecasting future sales from historical patterns, with feature engineering around seasonality and promotions.",
          tech: ["Python", "scikit-learn", "Pandas", "Time Series"],
          photos: []
        },
        {
          name: "Rain Prediction & Extreme Weather Forecasting",
          type: "Machine Learning · Climate Data",
          summary: "Classification models predicting rainfall and flagging extreme weather events from meteorological data. A small attempt at a problem Cambodia feels every year.",
          tech: ["Python", "scikit-learn", "Feature Engineering", "Model Evaluation"],
          photos: []
        },
        {
          name: "Diabetes Prediction",
          type: "Machine Learning · Healthcare",
          summary: "A predictive model for diabetes risk from clinical indicators, with careful attention to class imbalance and to the cost of a false negative in a medical setting.",
          tech: ["Python", "scikit-learn", "EDA", "Classification"],
          photos: []
        },
        {
          name: "Breast Cancer Prediction",
          type: "Machine Learning · Healthcare",
          summary: "Diagnostic classification on cytology features, comparing model families and prioritising recall. In screening, missing a case is the expensive mistake.",
          tech: ["Python", "scikit-learn", "Model Comparison"],
          photos: []
        }
      ]
    },
    {
      id: "collab",
      title: "Collaborative Projects",
      blurb: "Built with teammates who made the work better.",
      projects: [
        {
          name: "Smart Khmer Audio Learning & Conversational AI Tutor (InnerEcho)",
          type: "LLM · RAG · Speech · EdTech",
          summary: "A conversational AI tutor for Khmer learners combining speech processing with retrieval-augmented generation, so students can learn by talking rather than scrolling. The research behind it earned Best Presentation at IEEE TIC 2026.",
          tech: ["LLMs", "RAG", "Speech Processing", "Python", "Vector Search"],
          photos: []
        },
        {
          name: "AI-Based Adaptive Traffic Signal Control System",
          type: "Computer Vision · Reinforcement Learning",
          summary: "YOLOv8 detects and counts vehicles at an intersection while a Residual PPO agent learns signal timings that beat fixed schedules, built for the kind of congestion Phnom Penh knows well.",
          tech: ["YOLOv8", "PPO", "Reinforcement Learning", "PyTorch", "SUMO"],
          photos: []
        },
        {
          name: "Intelligent Face Attendance System",
          type: "Computer Vision · Deep Learning",
          summary: "YOLO11 for face detection paired with ArcFace embeddings for recognition, producing an attendance system that works on real classroom footage rather than clean benchmark photos.",
          tech: ["YOLO11", "ArcFace", "OpenCV", "PyTorch"],
          photos: []
        },
        {
          name: "Cyber-Physical Smart Air-Conditioning Control System",
          type: "IoT · Embedded Systems",
          summary: "An ESP32-based controller applying rule-based automation to air-conditioning, with sensor telemetry streamed to the cloud for monitoring and analysis.",
          tech: ["ESP32", "C++", "MQTT", "Cloud Monitoring", "Sensors"],
          photos: []
        }
      ]
    }
  ],

  /* ============================================================
     AWARDS — four groups.

     CERTIFICATES: an award or volunteering entry can link to a PDF,
     shown as a small "View PDF" button on the right of the row:

       pdf: "assets/certificates/my-file.pdf"

     Put the file in assets/certificates/ under that exact name.
     The document is never rendered on the page — it only opens in a
     new tab when a visitor clicks the button.

     If the file isn't there, the button removes itself, so the page
     never offers a link that leads nowhere. That means the filenames
     below are safe to leave in place while you gather the files:
     each button appears on its own once its PDF exists. (The check
     needs the site served over http:// — opening index.html directly
     shows every button regardless.) To drop a slot for good, remove
     the entry's `pdf` line.
     ============================================================ */
  awardGroups: [
    {
      id: "achievements",
      title: "Awards & Achievements",
      items: [
        { name: "Ranked #1 in Year 4 — GPA 4.00", org: "Institute of Technology of Cambodia", year: "2026", note: "First in cohort, Applied Mathematics & Statistics (Data Science).", photos: [], pdf: "assets/certificates/rank-1-year-4.pdf" },
        { name: "Best Presentation Award — IEEE TIC 2026", org: "IEEE · Kuala Lumpur, Malaysia", year: "2026", note: "For AI research on inclusive Khmer education.", photos: [], pdf: "assets/certificates/ieee-tic-2026.pdf" },
        { name: "Champion — CATALYST 2025 Pitching Competition", org: "CATALYST", year: "2025", note: "AI application in the healthcare sector.", photos: [], pdf: "assets/certificates/catalyst-2025.pdf" },
        { name: "Winner — YFS Phnom Penh Rapid Pitching Competition", org: "Young Founders Summit", year: "2025", note: "Earned full sponsorship to compete in Singapore.", photos: [], pdf: "assets/certificates/yfs-phnom-penh-2025.pdf" },
        { name: "Top 15 Finalist — Honda Young Engineers & Scientists Award", org: "Honda Foundation", year: "2025", note: "", photos: [], pdf: "assets/certificates/honda-yes-2025.pdf" },
        { name: "Gold Medal — ASPIRATION Project", org: "Ministry of Education, Youth and Sport", year: "2021", note: "Awarded with certificates.", photos: [], pdf: "assets/certificates/aspiration-gold-2021.pdf" },
        { name: "Selected for NUS Mathematics Track 2025", org: "National University of Singapore", year: "2025", note: "", photos: [] },
        { name: "2 Machine Learning projects presented", org: "14th Scientific Day, ITC", year: "2025", note: "", photos: [], pdf: "assets/certificates/itc-scientific-day-2025.pdf" }
      ]
    },
    {
      id: "international",
      title: "International Experiences",
      items: [
        { name: "Cambodia Representative & Champion — NUS Young Fellowship 2026", org: "Singapore", year: "2026", note: "Represented Cambodia and won with my team on the AI and Graduate Research theme.", photos: [], pdf: "assets/certificates/nus-fellowship-champion-2026.pdf" },
        { name: "Best Presentation Award — IEEE TIC 2026", org: "Kuala Lumpur, Malaysia", year: "2026", note: "My first international conference presentation.", photos: [], pdf: "assets/certificates/ieee-tic-2026.pdf" },
        { name: "YFS 2025 Full Scholarship Awardee", org: "Young Founders Summit · Singapore", year: "2025", note: "Fully sponsored to compete after winning the Phnom Penh round.", photos: [], pdf: "assets/certificates/yfs-scholarship-2025.pdf" },
        { name: "UNESCO UNITWIN Data Sciences Camp", org: "Phnom Penh, Cambodia", year: "2023", note: "Completed the standard level.", photos: [], pdf: "assets/certificates/unesco-unitwin-2023.pdf" }
      ]
    },
    {
      id: "leadership",
      title: "Leadership",
      items: [
        { name: "Leader — Data & Business Analytics Student Club", org: "Institute of Technology of Cambodia", year: "2025 – present", note: "Organising sessions, mentoring juniors, and keeping the club's projects moving.", photos: [], pdf: "assets/certificates/dba-club-lead.pdf" },
        { name: "Marketing & Sales Intern", org: "Spring Education Center", year: "2024", note: "My first look at how a business actually finds its customers.", photos: [], pdf: "assets/certificates/spring-education-intern-2024.pdf" },
        { name: "Team Leader — Student Sharing Knowledge Forum", org: "The Westline School", year: "2018", note: "Won the debate in a team leader role.", photos: [], pdf: "assets/certificates/westline-forum-2018.pdf" },
        { name: "MOVERS Workshop — Orientation to Entrepreneurship", org: "MOVERS", year: "2022", note: "Participant.", photos: [] }
      ]
    },
    {
      id: "certifications",
      title: "Certifications",
      items: [
        { name: "IELTS — Band 7.5", org: "GEP 12 at ACE", year: "2023", note: "", photos: [], pdf: "assets/certificates/ielts-7-5.pdf" },
        { name: "HSK Level 3", org: "Cambodia-China University of Technology and Science", year: "2024", note: "", photos: [], pdf: "assets/certificates/hsk-3.pdf" },
        { name: "AI Bootcamp — 100% Full Scholarship", org: "AI Bootcamp", year: "2025", note: "Awarded a full scholarship.", photos: [] },
        { name: "ASEAN Data Science Explorers 2025 — Enablement Session", org: "SAP & ASEAN Foundation", year: "2025", note: "SAP Analytics Cloud training session.", photos: [], pdf: "assets/certificates/asean-dse-2025.pdf" },
        { name: "HTML, CSS & Tailwind CSS", org: "I.T Training Course", year: "2025", note: "", photos: [], pdf: "assets/certificates/html-css-tailwind.pdf" },
        { name: "Basic / Advance / C / C++ / OOP & Project Course", org: "ETEC", year: "2024", note: "", photos: [], pdf: "assets/certificates/etec-c-cpp-oop.pdf" },
        { name: "Microsoft Word, Excel & PowerPoint", org: "Multi-Skilled Center", year: "2016", note: "Where it all started.", photos: [], pdf: "assets/certificates/microsoft-office.pdf" }
      ]
    }
  ],

  /* ============================================================
     VOLUNTEERING
     ============================================================ */
  volunteering: [
    {
      org: "CamTESOL & IDP Education",
      role: "IT Support & General Team",
      year: "2023 – 2024",
      summary: "Supported the 20th and 21st Annual CamTESOL Conference on English Language Teaching, keeping sessions running for hundreds of educators from across the region.",
      duties: ["AV and IT support across session rooms", "Speaker and delegate assistance", "General event operations"],
      photos: [],
      pdf: "assets/certificates/camtesol-idp.pdf"
    },
    {
      org: "IDP Education",
      role: "English Interpreter",
      year: "2023",
      summary: "Interpreted at the \"Scholarship & Study in the US & Canada\" expo, helping Cambodian students and parents understand their options in their own language.",
      duties: ["Live English–Khmer interpretation", "Booth support for university representatives"],
      photos: [],
      pdf: "assets/certificates/idp-interpreter-2023.pdf"
    },
    {
      org: "PPSA",
      role: "English–Khmer Translator",
      year: "2023",
      summary: "Translated materials and conversations between English and Khmer for programme staff and participants.",
      duties: ["Written translation", "Conversational interpretation"],
      photos: [],
      pdf: "assets/certificates/ppsa-translator-2023.pdf"
    },
    {
      org: "APYE",
      role: "Airport Pick-up & Facility Team",
      year: "2023",
      summary: "Welcomed international participants to Cambodia.",
      duties: ["Airport reception and transfers", "Facility and participant care"],
      photos: [],
      pdf: "assets/certificates/apye-2023.pdf"
    },
    {
      org: "Tech for Kids",
      role: "Registration Team",
      year: "2023",
      summary: "Ran registration for a programme introducing children to technology, a reminder of why accessible tech education matters.",
      duties: ["Participant registration", "Day-of coordination"],
      photos: []
    },
    {
      org: "ACE",
      role: "Organizer",
      year: "2023",
      summary: "Part of the organising team for the ACE graduation ceremony.",
      duties: ["Event organisation", "Guest coordination"],
      photos: [],
      pdf: "assets/certificates/ace-organizer-2023.pdf"
    },
    {
      org: "Institute of Technology of Cambodia",
      role: "Master of Ceremony",
      year: "9–10 July 2025",
      summary: "Hosted the AMS 1st generation thesis defense across two days.",
      duties: ["MC across both days", "Programme flow and speaker introductions"],
      photos: [],
      pdf: "assets/certificates/itc-mc-2025.pdf"
    },
    {
      org: "Institute of Technology of Cambodia",
      role: "Volunteer — China Scholarship & Training",
      year: "2023",
      summary: "Supported the China Scholarship & Training programme at ITC.",
      duties: ["Participant support", "Session logistics"],
      photos: []
    }
  ]
};
