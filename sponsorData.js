/* CAREERPULSE DATA BUILD MARKER: sponsordata-v7-national-pivot-2026 — search
   for this exact string in your local sponsorData.js. If it's not there,
   you're editing/serving a different copy of this file than the one below. */

/* =========================================================================
   CAREERPULSE — SECTOR & SPONSOR DATA (v7: National Pivot)
   Single source of truth for sector.html and index.html. This version
   replaces the old Ontario-specific schema (SHSM tracks, Ontario high
   school course codes like SPH3U/ICS4U) with a generic, province-agnostic
   national schema, and adds 3 new sectors (business, education, green
   [now "Environment & Natural Resources"]) to match the 6-card national
   dashboard.

   NOTE ON DATA ACCURACY: earningPotential and marketOutlook figures are
   illustrative approximations for prototype purposes, not verified
   national statistics — validate against Statistics Canada / COPS before
   any real production use. The 3 new sectors (business, education, green)
   currently have MOCK/PLACEHOLDER career and outlook content — real
   sponsors and refined data still need to be added.

   NOTE ON SPONSOR CONTENT: sponsor-level bios/quizzes (Women in Nuclear
   Canada, EllisDon) are left untouched from the Ontario build. WiN's bio
   and quiz specifically cite a real Ontario-specific statistic (nuclear's
   share of Ontario's electricity), which is accurate for Ontario but NOT
   representative of Canada as a whole — so it was deliberately NOT
   "nationalized" into something inaccurate. Only sector-level aggregate
   stats were reframed for a national audience.

   Schema per sector (keyed by sector id — must match index.html's ids:
   healthcare, trades, tech, business, education, green):
     name              - full sector title (matches the dashboard cards)
     icon              - key into the ICONS map (sector.html)
     hue               - gradient used for video placeholders in this sector
     tagline           - one-line hook for the sector page header
     earningPotential  - "Entry: $X → Senior Pro: $Y+" structured salary string
     marketOutlook     - short national growth/opening indicator
     educationPathways - blurb on how students typically break into the field
     recommendedSubjects - array of general school subject names (no
                          province-specific course codes — these vary by
                          province/board, so we stay generic here)
     careers           - array of exactly 3 { title, description } objects
     fallbackVideo     - video src used when no sponsor-supplied clip exists
     sponsors          - array of sponsor objects (can be empty: [])

   Schema per sponsor (only "name" and "bio" are required):
     name / trackId / role / bio / videoSrc / youtubeId / videoCaption /
     careers / quiz / customButtonText / customButtonUrl — unchanged from
     the previous build.
   ========================================================================= */

const CC_SAMPLE_VIDEO = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const sponsorData = {

  healthcare: {
    name: 'Health Care & Medical Sciences', icon: 'healthcare', hue: 'from-rose-400 to-rose-600',
    tagline: 'Save lives, comfort families, and be the calm in every storm.',
    earningPotential: 'Entry: $48,000 \u2192 Senior Pro: $95,000+',
    marketOutlook: "+22% projected job growth by 2030 amid Canada's aging population and an ongoing nationwide nursing shortage",
    educationPathways: 'Start with a personal support worker (PSW) certificate (about 6-12 months) or go further with a college RPN diploma, a university nursing degree (BScN), or a paramedic program \u2014 many provinces fund co-op placements in hospitals and long-term care homes.',
    recommendedSubjects: ['Biology', 'Chemistry', 'Health Sciences', 'Psychology'],
    careers: [
      { title: 'Registered Nurse', description: 'Lead patient care on the front lines, making split-second decisions that save lives every shift.' },
      { title: 'Paramedic', description: 'Race to emergencies and stabilize patients in the critical minutes before they reach a hospital.' },
      { title: 'Diagnostic Sonographer', description: 'Use ultrasound technology to spot what the human eye can\u2019t, guiding doctors toward life-saving diagnoses.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  trades: {
    name: 'Skilled Trades & Construction', icon: 'trades', hue: 'from-amber-400 to-amber-600',
    tagline: 'Build the world with your hands \u2014 no student debt required.',
    earningPotential: 'Entry: $45,000 \u2192 Senior Pro: $120,000+',
    marketOutlook: 'A wave of retirements is expected across the skilled trades by 2030, projecting strong hiring demand for tradespeople nationwide',
    educationPathways: 'Most trades start with a paid apprenticeship combining on-the-job hours with college or trade-school in-class training \u2014 many electricians and pipefitters graduate debt-free and earning six figures within a decade.',
    recommendedSubjects: ['Construction Technology', 'Manufacturing Technology', 'Mathematics', 'Physics'],
    careers: [
      { title: 'Electrician', description: 'Wire entire buildings from the ground up, powering everything from hospitals to skyscrapers.' },
      { title: 'Welder', description: 'Fuse steel and metal into the bones of bridges, buildings, and machines that shape our skylines.' },
      { title: 'HVAC Technician', description: 'Keep homes and hospitals breathing clean, comfortable air all year round.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: [
      {
        name: 'EllisDon', trackId: 'ellisdon', role: 'Construction Company',
        bio: 'One of Canada\u2019s largest construction companies, building skilled trades careers from apprenticeship to site supervisor.'
      }
    ]
  },

  tech: {
    name: 'Information Technology (IT) & AI', icon: 'tech', hue: 'from-brandBlue to-brandNavy',
    tagline: 'Write the code and train the AI shaping tomorrow\u2019s world.',
    earningPotential: 'Entry: $60,000 \u2192 Senior Pro: $140,000+',
    marketOutlook: "Canada's tech sector, anchored by hubs like Toronto-Waterloo and Vancouver, continues to grow, with AI and cybersecurity roles projected to rise +25% by 2030",
    educationPathways: 'A university degree in computer science or software engineering is the traditional route, but coding bootcamps and college AI/software diplomas are increasingly common fast-tracks into the industry.',
    recommendedSubjects: ['Computer Science', 'Mathematics', 'Physics', 'Business Studies'],
    careers: [
      { title: 'Machine Learning Engineer', description: 'Train the algorithms that power everything from medical diagnosis tools to self-driving cars.' },
      { title: 'Cybersecurity Analyst', description: 'Stand on the front line defending banks, hospitals, and governments from cyberattacks.' },
      { title: 'UX Designer', description: 'Shape how millions of people experience apps and websites every single day.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  business: {
    name: 'Business & Supply Chain', icon: 'business', hue: 'from-teal-400 to-teal-600',
    tagline: 'Steer strategy, logistics, and global trade for Canadian companies.',
    earningPotential: 'Entry: $45,000 \u2192 Senior Pro: $110,000+',
    marketOutlook: 'Business and supply chain roles are projected to grow steadily as Canadian companies expand global trade and e-commerce logistics through 2030',
    educationPathways: 'A business degree or diploma in commerce, supply chain management, or logistics opens doors here \u2014 many programs include co-op placements with major Canadian employers.',
    recommendedSubjects: ['Business Studies', 'Mathematics', 'Economics', 'Accounting'],
    careers: [
      { title: 'Supply Chain Analyst', description: 'Track how goods move across the country and keep store shelves stocked on time.' },
      { title: 'Financial Analyst', description: 'Crunch numbers that help companies decide where to invest and grow.' },
      { title: 'Operations Manager', description: 'Keep entire teams and processes running smoothly behind the scenes.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    // MOCK/PLACEHOLDER content — new sector, no real sponsors yet.
    sponsors: []
  },

  education: {
    name: 'Education & Community Services', icon: 'education', hue: 'from-violet-400 to-violet-600',
    tagline: 'Shape the next generation and strengthen communities across Canada.',
    earningPotential: 'Entry: $42,000 \u2192 Senior Pro: $95,000+',
    marketOutlook: 'Schools and community organizations across Canada are facing educator and social service shortages, projecting strong hiring demand through 2030',
    educationPathways: 'A university degree in education leads to teaching, while diplomas in social work, early childhood education, or community services open doors into youth and family support roles.',
    recommendedSubjects: ['English', 'Social Studies', 'Psychology', 'Physical Education'],
    careers: [
      { title: 'Elementary Teacher', description: 'Spark curiosity and build foundational skills in the classroom every day.' },
      { title: 'Social Worker', description: 'Support families and individuals through some of life\u2019s toughest moments.' },
      { title: 'Early Childhood Educator', description: 'Guide young children through their very first years of learning and play.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    // MOCK/PLACEHOLDER content — new sector, no real sponsors yet.
    sponsors: []
  },

  green: {
    name: 'Environment & Natural Resources', icon: 'green', hue: 'from-lime-400 to-lime-600',
    tagline: 'Protect the planet and power Canada\u2019s clean energy future.',
    earningPotential: 'Entry: $50,000 \u2192 Senior Pro: $115,000+',
    marketOutlook: "Canada's clean energy and natural resources sectors are projected to grow significantly through 2030 as nuclear, renewable, and sustainable resource projects expand nationwide",
    educationPathways: 'Nuclear and energy operators often train through employer-sponsored programs after a college diploma in engineering technology; environmental and natural resource roles typically start with a college or university program in environmental science or resource management.',
    recommendedSubjects: ['Physics', 'Chemistry', 'Environmental Science', 'Biology'],
    careers: [
      { title: 'Nuclear Operator', description: 'Monitor the control systems that quietly power millions of Canadian homes with zero emissions.' },
      { title: 'Environmental Scientist', description: 'Study and protect the air, water, and land Canadians depend on.' },
      { title: 'Renewable Energy Technician', description: 'Install and maintain the wind, solar, and hydro systems powering the grid.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: [
      {
        // Sponsor-level content intentionally left untouched — see the
        // file-level note above on why WiN's Ontario-specific stat was
        // not "nationalized."
        name: 'Women in Nuclear Canada', trackId: 'win', role: 'Nuclear Energy',
        videoSrc: 'images/win-video.mp4',
        videoCaption: 'Hannah Connolly \u00b7 Nuclear Operator-in-Training',
        bio: 'Did you know that over 50% of Ontario\u2019s daily electricity comes from emissions-free nuclear power? <strong>Women in Nuclear (WiN) Canada</strong> is a community of trailblazers making sure women have a seat at the table in this fast-growing tech sector. Since 2004, WiN has been showing how women lead the charge in clean energy, advanced robotics, and producing cancer-fighting medical technologies. Through mentoring, local events, and cool development opportunities, WiN is here to help you connect with pros in the field and launch a career that actually changes the world!',
        careers: [
          { title: 'Nuclear Operator-in-Training (NOIT)', description: 'Like piloting a spaceship, you monitor high-tech control systems, run safety tests, and ensure thousands of homes get clean power.' },
          { title: 'Radiation Safety Technician', description: 'Use high-tech devices (like dosimeters) to inspect work zones, monitor safety, and keep your team and the environment perfectly safe.' },
          { title: 'Medical Isotope Specialist', description: 'Help extract, process, and ship life-saving medical isotopes generated inside Ontario reactors to treat cancer patients worldwide.' },
          { title: 'Instrument & Control (I&C) Tech', description: 'The robotics wizards. You install, calibrate, and repair the ultra-sensitive sensors and automated computer systems in the plant.' }
        ],
        quiz: {
          badge: 'Clean Energy Ambassador',
          steps: [
            {
              type: 'mcq',
              eyebrow: 'Step 1 \u00b7 The Scavenger Hunt',
              prompt: 'According to the Women in Nuclear spotlight, what clean energy source generates over 50% of Ontario\u2019s daily electricity?',
              options: ['Solar', 'Hydro-electric', 'Nuclear', 'Coal'],
              correctIndex: 2,
              correctFeedback: 'Nuclear power provides more than half of Ontario\u2019s electricity \u2014 and it does it with virtually zero emissions.',
              wrongFeedback: 'Check the resources and try again!'
            },
            {
              type: 'mcq',
              eyebrow: 'Step 2 \u00b7 The Roleplay Scenario',
              prompt: 'You are a Radiation Safety Technician inspecting a clean-room zone. Before entering, what essential safety device must you clip to your uniform to measure radiation exposure?',
              options: ['A thermometer', 'A dosimeter badge', 'A compass', 'A heart-rate monitor'],
              correctIndex: 1,
              correctFeedback: 'Dosimeter badges track exactly how much radiation a worker is exposed to over time, keeping everyone safely within approved limits.',
              wrongFeedback: 'Not quite \u2014 give it another try!'
            },
            {
              type: 'matcher',
              eyebrow: 'Step 3 \u00b7 The Industry Matcher',
              prompt: 'Click a career on the left, then click the description that matches it.',
              careers: ['Nuclear Engineer', 'Control Room Operator', 'Environmental Specialist'],
              descriptions: {
                'Nuclear Engineer': 'Designs reactor systems',
                'Control Room Operator': 'Monitors live power generation',
                'Environmental Specialist': 'Tests local air & water quality'
              }
            }
          ]
        }
      }
    ]
  }

};