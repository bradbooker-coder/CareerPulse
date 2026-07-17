/* =========================================================================
   CAREERPULSE — SECTOR & SPONSOR DATA (v4: Ontario Pathways Refinement)
   Single source of truth for sector.html and index.html. Every sector is
   a complete, standalone Ontario LMI (Labour Market Information) landing
   page in its own right. Sponsors are an optional premium layer — a
   sector with an empty `sponsors` array is still a fully valuable,
   fully complete page, now with guaranteed visual media via fallbackVideo.

   NOTE ON DATA ACCURACY: earningPotential and marketOutlook figures below
   are illustrative approximations for prototype purposes, built from
   general publicly-known Ontario labour market trends. Before any real
   production launch, verify these against official Ontario Ministry of
   Labour, Immigration, Training and Skills Development (MLITSD) and
   LMI Ontario data. Same caveat applies to course codes and SHSM track
   names — verify against the current Ontario curriculum and the official
   SHSM program list, as codes and program names can vary slightly by
   school board and change over time.

   NOTE ON fallbackVideo: every sector currently points at the same
   Creative Commons-licensed Blender Foundation sample clip ("Big Buck
   Bunny", CC BY 3.0) hosted on Google's public demo bucket — a widely
   used, freely-licensed, always-available placeholder video. Swap each
   sector's fallbackVideo for real branded B-roll before production.

   Schema per sector (keyed by sector id):
     name              - full enriched sector title, e.g. "Green Energy & Clean Tech"
     icon              - key into the ICONS map (index.html and sector.html)
     hue               - gradient used for video placeholders in this sector
     tagline           - one-line, teen-friendly hook for the hero header
     earningPotential  - "Entry: $X → Senior Pro: $Y+" structured salary string
     marketOutlook     - short 2026-2030 growth/opening indicator (the
                         headline stat shown in the "Ontario Outlook" badge)
     educationPathways - blurb on how students typically break into the field
     courses           - array of 6 Ontario HS course strings
     shsmConnections   - array of official Ontario SHSM track names this
                         sector maps to (shown as badges next to the title)
     careers           - array of exactly 3 { title, description } objects,
                         descriptions written action/impact-first for teens
     fallbackVideo     - video src (URL or local path) used whenever no
                         sponsor-supplied clip is available — guarantees
                         every sector has visual media, sponsored or not
     sponsors          - array of sponsor objects (can be empty: [])

   Schema per sponsor (only "name" and "bio" are required):
     name            - sponsor's display name
     trackId         - short slug matched against a ?track= URL param
     role            - short plain-language tag shown under the name
     bio             - booth description (HTML allowed, e.g. <strong>)
     videoSrc        - optional local .mp4 path (renders as native <video>)
     youtubeId       - optional YouTube video ID (renders as an embed)
     videoCaption    - optional caption shown under the video
     careers         - optional array of { title, description } cards,
                       sponsor-specific and richer than the sector-level list
     quiz            - optional { badge, steps } 3-step mini-game that
                       unlocks a browser-generated completion certificate
     customButtonText / customButtonUrl - optional extra CTA button
   ========================================================================= */

const CC_SAMPLE_VIDEO = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const sponsorData = {

  healthcare: {
    name: 'Healthcare & Life Sciences', icon: 'healthcare', hue: 'from-rose-400 to-rose-600',
    tagline: 'Save lives, comfort families, and be the calm in every storm.',
    earningPotential: 'Entry: $48,000 \u2192 Senior Pro: $95,000+',
    marketOutlook: '+22% projected job growth by 2030 amid Ontario\u2019s aging population and ongoing nursing shortage',
    educationPathways: 'Start with a PSW certificate (about 6-12 months) or go further with a college RPN diploma, a university BScN nursing degree, or a paramedic program \u2014 Ontario funds co-op placements in hospitals and long-term care homes across the province.',
    courses: [
      'Grade 11 Biology (SBI3U)',
      'Grade 12 Biology (SBI4U)',
      'Grade 12 Chemistry (SCH4U)',
      'Health Care (TPJ4C)',
      'Exercise Science (PSK4U)',
      'Challenge and Change in Society (HSB4U)'
    ],
    shsmConnections: ['Health and Wellness SHSM'],
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
    marketOutlook: '1 in 3 tradespeople expected to retire by 2030 \u2014 Ontario projects 100,000+ net new skilled trades openings',
    educationPathways: 'Most trades start with a paid apprenticeship combining on-the-job hours with college-based in-class training \u2014 many electricians and pipefitters graduate debt-free and earning six figures within a decade.',
    courses: [
      'Construction Technology (TCJ3E)',
      'Construction Technology (TCJ4E)',
      'Manufacturing Technology (TMJ3E)',
      'Manufacturing Technology (TMJ4E)',
      'Grade 11 Functions (MCR3U)',
      'Workplace Preparation Math (MEL3E)'
    ],
    shsmConnections: ['Construction SHSM', 'Manufacturing SHSM'],
    careers: [
      { title: 'Electrician', description: 'Wire entire buildings from the ground up, powering everything from hospitals to skyscrapers.' },
      { title: 'Welder', description: 'Fuse steel and metal into the bones of bridges, buildings, and machines that shape Ontario\u2019s skyline.' },
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

  green: {
    name: 'Green Energy & Clean Tech', icon: 'green', hue: 'from-lime-400 to-lime-600',
    tagline: 'Power Ontario\u2019s clean energy future \u2014 one reactor and turbine at a time.',
    earningPotential: 'Entry: $55,000 \u2192 Senior Pro: $115,000+',
    marketOutlook: '+30% growth expected in clean energy and nuclear refurbishment jobs through 2030 as Ontario expands its power grid',
    educationPathways: 'Nuclear operators train through employer-sponsored NOIT programs after a college diploma in engineering technology; renewable energy roles often start with a 2-year college diploma in electrical or environmental technology.',
    courses: [
      'Grade 11 Physics (SPH3U)',
      'Grade 12 Physics (SPH4U)',
      'Green Industries (THJ3M)',
      'Grade 12 Chemistry (SCH4U)',
      'Environmental Science (SVN3M)',
      'Earth and Space Science (SES4U)'
    ],
    shsmConnections: ['Energy SHSM', 'Environment SHSM'],
    careers: [
      { title: 'Nuclear Operator', description: 'Monitor the control systems that quietly power millions of Ontario homes with zero emissions.' },
      { title: 'Wind Technician', description: 'Climb 90 metres into the sky to keep turbines spinning and clean power flowing.' },
      { title: 'Solar Installer', description: 'Turn rooftops into power plants, one panel at a time.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: [
      {
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
  },

  tech: {
    name: 'AI & Emerging Technology', icon: 'tech', hue: 'from-brandBlue to-brandNavy',
    tagline: 'Write the code and train the AI shaping tomorrow\u2019s world.',
    earningPotential: 'Entry: $60,000 \u2192 Senior Pro: $140,000+',
    marketOutlook: 'Toronto-Waterloo remains Canada\u2019s #1 tech corridor, with AI and cybersecurity roles projected to grow +25% by 2030',
    educationPathways: 'A university degree in computer science or software engineering is the traditional route, but coding bootcamps and college AI/software diplomas are increasingly common fast-tracks into the industry.',
    courses: [
      'Grade 11 Computer Science (ICS3U)',
      'Grade 12 Computer Science (ICS4U)',
      'Computer Technology (TEJ3M)',
      'Computer Technology (TEJ4M)',
      'Grade 11 Functions (MCR3U)',
      'Grade 12 Advanced Functions (MHF4U)'
    ],
    shsmConnections: ['Information and Communications Technology SHSM'],
    careers: [
      { title: 'Machine Learning Engineer', description: 'Train the algorithms that power everything from medical diagnosis tools to self-driving cars.' },
      { title: 'Cybersecurity Analyst', description: 'Stand on the front line defending banks, hospitals, and governments from cyberattacks.' },
      { title: 'UX Designer', description: 'Shape how millions of people experience apps and websites every single day.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  manufacturing: {
    name: 'Advanced Manufacturing & Robotics', icon: 'manufacturing', hue: 'from-neutral4 to-neutral6',
    tagline: 'Design, build, and automate the machines that build everything else.',
    earningPotential: 'Entry: $50,000 \u2192 Senior Pro: $105,000+',
    marketOutlook: 'Ontario manufacturing is projected to add 30,000+ new automation and robotics roles by 2030 as plants modernize',
    educationPathways: 'College diplomas in mechanical, electrical, or robotics engineering technology are the most common path, often paired with a paid co-op term on a plant floor.',
    courses: [
      'Manufacturing Technology (TMJ3E)',
      'Manufacturing Technology (TMJ4E)',
      'Grade 11 Physics (SPH3U)',
      'Grade 12 Physics (SPH4U)',
      'Grade 11 Functions (MCR3U)',
      'Grade 12 Advanced Functions (MHF4U)'
    ],
    shsmConnections: ['Manufacturing SHSM', 'Construction SHSM'],
    careers: [
      { title: 'Robotics Technician', description: 'Program and repair the robotic arms building everything from cars to smartphones.' },
      { title: 'Industrial Engineer', description: 'Redesign entire factory floors to make production faster, safer, and smarter.' },
      { title: 'CNC Machinist', description: 'Turn digital blueprints into precision-cut metal parts accurate to a human hair\u2019s width.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  agrifood: {
    name: 'Agri-Food & Agri-Tech', icon: 'agrifood', hue: 'from-green-400 to-green-600',
    tagline: 'Grow, science, and ship the food that feeds the world.',
    earningPotential: 'Entry: $45,000 \u2192 Senior Pro: $95,000+',
    marketOutlook: 'Ontario\u2019s agri-food sector is projected to need 30,000+ new workers by 2030 as the province\u2019s #1 GDP-contributing industry',
    educationPathways: 'University programs in food science or agriculture, or college diplomas in agri-business and food processing technology, both lead into this fast-growing sector.',
    courses: [
      'Grade 11 Biology (SBI3U)',
      'Grade 12 Biology (SBI4U)',
      'Green Industries (THJ3M)',
      'Green Industries (THJ4M)',
      'Grade 12 Chemistry (SCH4U)',
      'Environmental Science (SVN3M)'
    ],
    shsmConnections: ['Agriculture SHSM', 'Environment SHSM'],
    careers: [
      { title: 'Food Scientist', description: 'Invent the next big snack or perfect the safety of the food on grocery shelves.' },
      { title: 'Agronomist', description: 'Use data and science to help farmers grow more food with less land and water.' },
      { title: 'Supply Chain Planner', description: 'Make sure fresh food gets from Ontario farms to dinner tables before it spoils.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  aerospace: {
    name: 'Aerospace & Aviation', icon: 'aerospace', hue: 'from-violet-400 to-violet-600',
    tagline: 'Engineer the aircraft and satellites pushing Canada into orbit.',
    earningPotential: 'Entry: $55,000 \u2192 Senior Pro: $120,000+',
    marketOutlook: 'Canada\u2019s aerospace sector is projected to grow +15% by 2030, with Ontario home to over half of national aerospace jobs',
    educationPathways: 'Aerospace engineering technology diplomas and university mechanical/aerospace engineering degrees both lead here, often alongside Transport Canada-certified apprenticeships for maintenance roles.',
    courses: [
      'Grade 11 Physics (SPH3U)',
      'Grade 12 Physics (SPH4U)',
      'Grade 11 Functions (MCR3U)',
      'Grade 12 Advanced Functions (MHF4U)',
      'Calculus and Vectors (MCV4U)',
      'Transportation Technology (TTJ3E)'
    ],
    shsmConnections: ['Aviation and Aerospace SHSM', 'Manufacturing SHSM'],
    careers: [
      { title: 'Aircraft Maintenance Engineer', description: 'Inspect and repair the aircraft that carry millions of passengers safely every year.' },
      { title: 'Avionics Technician', description: 'Wire and calibrate the electronic brains inside modern aircraft and satellites.' },
      { title: 'Flight Test Analyst', description: 'Analyze real flight data to prove a new aircraft design is safe before it ever carries passengers.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  },

  logistics: {
    name: 'Logistics & Supply Chain', icon: 'logistics', hue: 'from-orange-400 to-orange-600',
    tagline: 'Keep Ontario moving \u2014 from warehouse floor to front door.',
    earningPotential: 'Entry: $42,000 \u2192 Senior Pro: $90,000+',
    marketOutlook: 'E-commerce growth is projected to drive a +20% increase in Ontario supply chain and logistics roles by 2030',
    educationPathways: 'College diplomas in supply chain management or logistics operations are the fastest route in, with many companies offering direct-hire apprenticeship-style training for dispatch and warehouse automation roles.',
    courses: [
      'Grade 11 Business (BOH3M)',
      'Grade 12 Business Leadership (BOH4M)',
      'International Business Fundamentals (BBB4M)',
      'Transportation Technology (TTJ3E)',
      'Grade 11 Functions (MCR3U)',
      'Mathematics of Data Management (MDM4U)'
    ],
    shsmConnections: ['Transportation SHSM', 'Business SHSM'],
    careers: [
      { title: 'Supply Chain Coordinator', description: 'Orchestrate how millions of packages move from warehouse to doorstep on time.' },
      { title: 'Fleet Dispatcher', description: 'Direct entire fleets of trucks in real time, solving problems before they cause delays.' },
      { title: 'Warehouse Automation Tech', description: 'Keep robotic sorting systems running so packages never stop moving.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    // Intentionally empty — this sector is our test case for the
    // no-sponsors state. It should still be a complete, media-rich page.
    sponsors: []
  },

  tourism: {
    name: 'Tourism & Hospitality', icon: 'tourism', hue: 'from-fuchsia-400 to-fuchsia-600',
    tagline: 'Turn unforgettable experiences into your everyday job.',
    earningPotential: 'Entry: $38,000 \u2192 Senior Pro: $85,000+',
    marketOutlook: 'Ontario tourism is projected to fully rebound and grow +18% by 2030, supporting over 500,000 jobs province-wide',
    educationPathways: 'College diplomas in hospitality and tourism management or event planning are the most direct route, with many programs including paid placements at hotels, resorts, and convention centres.',
    courses: [
      'Hospitality and Tourism (TFJ3E)',
      'Hospitality and Tourism (TFJ4E)',
      'Grade 11 English (ENG3U)',
      'Grade 12 English (ENG4U)',
      'Grade 12 Business Leadership (BOH4M)',
      'Recreation and Healthy Active Living Leadership (PLF4M)'
    ],
    shsmConnections: ['Hospitality and Tourism SHSM', 'Arts and Culture SHSM'],
    careers: [
      { title: 'Hotel Operations Manager', description: 'Run the behind-the-scenes systems that make a guest\u2019s stay feel effortless.' },
      { title: 'Event Specialist', description: 'Bring concerts, conferences, and festivals to life from the ground up.' },
      { title: 'Culinary Arts Lead', description: 'Turn ingredients into experiences guests will remember for years.' }
    ],
    fallbackVideo: CC_SAMPLE_VIDEO,
    sponsors: []
  }

};