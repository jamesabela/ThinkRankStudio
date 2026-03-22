const presetData = {
  "Computer Science": [
    { topic: "Computer Networks Components", words: ["Routers", "Switches", "Firewalls", "NICs", "Cables", "Modems", "Bridges", "Gateways", "Repeaters"] },
    { topic: "Cybersecurity Threats", words: ["Phishing", "Malware", "Social", "Ransomware", "DDoS", "Physical", "Spyware", "Adware", "Keyloggers"] },
    { topic: "Ethical Issues in Computing", words: ["Privacy", "Security", "Property", "Divide", "Automation", "Open", "Transparency", "Accountability", "Consent"] },
    { topic: "Hardware Components of a Computer", words: ["CPU", "RAM", "Storage", "Motherboard", "Power", "Peripheral", "Monitor", "Keyboard", "Mouse"] },
    { topic: "Key Algorithms", words: ["Sorting", "Searching", "Graph", "Dynamic", "Greedy", "Recursion", "Tree", "Backtracking", "Hashing"] },
    { topic: "Programming Concepts", words: ["Variables", "Functions", "Loops", "Algorithms", "Objects", "Syntax", "Data", "Pseudocode", "Operators"] },
    { topic: "Programming Paradigms", words: ["OOP", "Procedural", "Functional", "Event-Driven", "Logic", "Declarative", "Imperative", "Concurrent", "Aspect"] },
    { topic: "Software Development Lifecycle Stages", words: ["Requirements", "Design", "Implementation", "Testing", "Deployment", "Maintenance", "Planning", "Review", "Closure"] },
    { topic: "Types of Software Testing", words: ["Unit", "Integration", "System", "UAT", "Regression", "Alpha", "Beta", "Load", "Stress"] },
    { topic: "Core Data Structures", words: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Hash Tables", "Heaps", "Tries"] }
  ],
  "Mathematics": [
    { topic: "Fundamental Areas of Math", words: ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry", "Logic", "Number Theory", "Topology", "Combinatorics"] },
    { topic: "Methods of Proof", words: ["Direct", "Contradiction", "Induction", "Contrapositive", "Exhaustion", "Construction", "Geometric", "Algebraic", "Statistical"] },
    { topic: "Famous Theorems", words: ["Pythagorean", "Fermat's Last", "Fundamental Theorem of Calculus", "Binomial", "Prime Number", "Four Color", "Bayes", "Euler's Formula", "Gödel's Incompleteness"] },
    { topic: "Statistical Concepts", words: ["Mean", "Median", "Mode", "Variance", "Standard Deviation", "Correlation", "Regression", "Probability", "Distribution"] },
    { topic: "Types of Numbers", words: ["Integers", "Rationals", "Irrationals", "Reals", "Complex", "Primes", "Composites", "Transcendental", "Imaginary"] },
    { topic: "Common Geometric Shapes", words: ["Triangle", "Square", "Circle", "Pentagon", "Hexagon", "Sphere", "Cube", "Cylinder", "Pyramid"] },
    { topic: "Math Applications in Real Life", words: ["Finance", "Engineering", "Cryptography", "Architecture", "Medicine", "Logistics", "Gaming", "Weather", "Sports"] },
    { topic: "Algebraic Operations", words: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Roots", "Logarithms", "Factoring", "Expanding"] },
    { topic: "Calculus Concepts", words: ["Limits", "Derivatives", "Integrals", "Series", "Sequences", "Optimization", "Rates of Change", "Area", "Volume"] },
    { topic: "Problem Solving Strategies", words: ["Draw a Picture", "Guess and Check", "Find a Pattern", "Work Backwards", "Solve a Simpler Problem", "Use a Formula", "Make a List", "Logical Reasoning", "Set up an Equation"] }
  ],
  "Science": [
    { topic: "Branches of Science", words: ["Physics", "Chemistry", "Biology", "Astronomy", "Geology", "Meteorology", "Ecology", "Genetics", "Neuroscience"] },
    { topic: "States of Matter & Transitions", words: ["Solid", "Liquid", "Gas", "Plasma", "Melting", "Freezing", "Evaporation", "Condensation", "Sublimation"] },
    { topic: "Forms of Energy", words: ["Kinetic", "Potential", "Thermal", "Chemical", "Electrical", "Nuclear", "Radiant", "Sound", "Gravitational"] },
    { topic: "Scientific Method Steps", words: ["Observation", "Question", "Hypothesis", "Experiment", "Data", "Analysis", "Conclusion", "Peer Review", "Replication"] },
    { topic: "Human Body Systems", words: ["Circulatory", "Respiratory", "Digestive", "Nervous", "Skeletal", "Muscular", "Immune", "Endocrine", "Excretory"] },
    { topic: "Space Exploration Milestones", words: ["Sputnik", "Apollo 11", "Hubble Tracker", "Voyager", "ISS Launch", "Mars Rover", "Webb Telescope", "Space Shuttle", "Commercial Flights"] },
    { topic: "Ecological Biomes", words: ["Tundra", "Taiga", "Temperate Forest", "Rainforest", "Grassland", "Desert", "Savanna", "Marine", "Freshwater"] },
    { topic: "Types of Chemical Reactions", words: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement", "Combustion", "Acid-Base", "Redox", "Precipitation", "Isomerization"] },
    { topic: "Renewable Energy Sources", words: ["Solar", "Wind", "Hydroelectric", "Geothermal", "Biomass", "Tidal", "Wave", "Hydrogen", "Nuclear Fusion"] },
    { topic: "Fundamental Forces", words: ["Gravity", "Electromagnetism", "Weak Nuclear", "Strong Nuclear", "Friction", "Tension", "Normal", "Applied", "Spring"] }
  ],
  "History": [
    { topic: "Ancient Civilizations", words: ["Egypt", "Mesopotamia", "Indus Valley", "China", "Greece", "Rome", "Maya", "Inca", "Aztec"] },
    { topic: "Causes of WWI", words: ["Militarism", "Alliances", "Imperialism", "Nationalism", "Assassination", "Crises", "Arms Race", "Media", "Diplomacy"] },
    { topic: "Major Global Revolutions", words: ["American", "French", "Haitian", "Russian", "Industrial", "Agricultural", "Scientific", "Digital", "Cultural"] },
    { topic: "Eras of Human History", words: ["Stone Age", "Bronze Age", "Iron Age", "Antiquity", "Middle Ages", "Renaissance", "Enlightenment", "Industrial", "Information Age"] },
    { topic: "Important Historical Figures", words: ["Julius Caesar", "Cleopatra", "Genghis Khan", "Joan of Arc", "Leonardo da Vinci", "Newton", "Gandhi", "Einstein", "Mandela"] },
    { topic: "Significant Treaties", words: ["Versailles", "Tordesillas", "Westphalia", "Utrecht", "Paris", "Ghent", "Kyoto", "Geneva", "Magna Carta"] },
    { topic: "Forms of Historical Governance", words: ["Monarchy", "Republic", "Empire", "Oligarchy", "Theocracy", "Feudalism", "Democracy", "Dictatorship", "Tribalism"] },
    { topic: "World War II Events", words: ["Pearl Harbor", "D-Day", "Stalingrad", "Midway", "Hiroshima", "Holocaust", "Blitzkrieg", "Battle of Britain", "El Alamein"] },
    { topic: "Great Inventions", words: ["Wheel", "Printing Press", "Compass", "Gunpowder", "Steam Engine", "Electricity", "Telephone", "Airplane", "Internet"] },
    { topic: "Causes for Empire Collapse", words: ["Economic", "Military", "Political", "Social", "Disease", "Climate", "Corruption", "Overexpansion", "Invasion"] }
  ],
  "Business & Strategy": [
    { topic: "Competitive Advantage Factors", words: ["Cost", "Differentiation", "Niche", "Innovation", "Brand", "Network", "IP", "Talent", "Speed"] },
    { topic: "Essential Business Metrics", words: ["Revenue", "Profit", "CAC", "LTV", "Churn", "NPS", "ROI", "Burn", "Market Share"] },
    { topic: "Stages of Business Growth", words: ["Ideation", "Validation", "Launch", "Traction", "Scaling", "Maturity", "Expansion", "Exit", "Renewal"] },
    { topic: "Go-to-Market Strategies", words: ["Inbound", "Outbound", "Channel", "Product-Led", "Sales-Led", "Community", "ABM", "Freemium", "PR"] },
    { topic: "Core Business Functions", words: ["Sales", "Marketing", "Product", "Engineering", "Finance", "HR", "Legal", "Operations", "Customer Success"] },
    { topic: "Strategic Frameworks", words: ["SWOT", "Porter's 5", "PESTLE", "Ansoff", "BCG Matrix", "McKinsey 7S", "OKR", "Balanced Scorecard", "VRIO"] },
    { topic: "Risks to Businesses", words: ["Financial", "Operational", "Strategic", "Compliance", "Reputational", "Cyber", "Market", "Economic", "Competitor"] },
    { topic: "Types of Business Models", words: ["SaaS", "E-commerce", "Marketplace", "Subscription", "Franchise", "Freemium", "Direct Sales", "Advertising", "Agency"] },
    { topic: "Corporate Culture Traits", words: ["Transparency", "Innovation", "Accountability", "Agility", "Diversity", "Empathy", "Collaboration", "Results-Driven", "Customer-Centric"] },
    { topic: "Methods of Scaling", words: ["Automation", "Hiring", "Acquisition", "Partnerships", "New Markets", "Product Lines", "Pricing", "Optimization", "Outsourcing"] }
  ],
  "Product Management": [
    { topic: "Prioritization Frameworks", words: ["RICE", "MoSCoW", "Kano", "Value vs Effort", "Eisenhower", "Weighted", "Story Mapping", "Buy a Feature", "Opportunity"] },
    { topic: "Product Artifacts", words: ["PRD", "Roadmap", "User Personas", "Journey Maps", "Wireframes", "Prototypes", "Release Notes", "Metrics Dash", "Backlog"] },
    { topic: "Key Product Metrics", words: ["Acquisition", "Activation", "Retention", "Referral", "Revenue", "DAU/MAU", "TTV", "NPS", "Feature Usage"] },
    { topic: "Agile Ceremonies", words: ["Sprint Planning", "Daily Standup", "Sprint Review", "Retrospective", "Backlog Refinement", "Release Planning", "Demo", "Story Estimation", "Spike"] },
    { topic: "User Research Methods", words: ["Interviews", "Surveys", "Usability Testing", "A/B Testing", "Card Sorting", "Analytics", "Focus Groups", "Ethnography", "Diary Studies"] },
    { topic: "Stages of Product Lifecycle", words: ["Introduction", "Growth", "Maturity", "Decline", "Discovery", "Ideation", "Development", "Launch", "Iteration"] },
    { topic: "Stakeholders to Manage", words: ["Engineering", "Design", "Marketing", "Sales", "Support", "Executives", "Legal", "Users", "Partners"] },
    { topic: "Causes of Feature Failure", words: ["No Market Need", "Poor UX", "Bugs", "Pricing", "Wrong Timing", "Bad Marketing", "Complexity", "Competition", "Misunderstanding"] },
    { topic: "Common PM Tools", words: ["Jira", "Linear", "Figma", "Mixpanel", "Amplitude", "Notion", "Trello", "Miro", "Confluence"] },
    { topic: "Skills of a Great PM", words: ["Communication", "Empathy", "Analytical", "Strategic", "Technical Context", "Design Sense", "Leadership", "Execution", "Adaptability"] }
  ],
  "Personal Development": [
    { topic: "Daily Habits for Success", words: ["Reading", "Exercise", "Meditation", "Journaling", "Planning", "Hydration", "Healthy Sleep", "Networking", "Learning"] },
    { topic: "Time Management Techniques", words: ["Pomodoro", "Time Blocking", "Eisenhower", "2-Minute Rule", "Eat the Frog", "Batching", "GTD", "Parkinson's", "Delegation"] },
    { topic: "Emotional Intelligence Pillar", words: ["Self-Awareness", "Self-Regulation", "Motivation", "Empathy", "Social Skills", "Listening", "Resilience", "Adaptability", "Gratitude"] },
    { topic: "Goal Setting Frameworks", words: ["SMART", "HARD", "OKRs", "WOOP", "BHAG", "Micro-goals", "Reverse Engineering", "Vision Board", "Habit Tracking"] },
    { topic: "Ways to Build Resilience", words: ["Optimism", "Support Network", "Acceptance", "Self-Care", "Flexibility", "Meaning", "Humor", "Action", "Perspective"] },
    { topic: "Productivity Killers", words: ["Multitasking", "Social Media", "Clutter", "Perfectionism", "Procrastination", "Lack of Sleep", "Poor Diet", "Meetings", "Notifications"] },
    { topic: "Mindfulness Practices", words: ["Breathing", "Body Scan", "Walking", "Observation", "Listening", "Gratitude", "Yoga", "Single-tasking", "Journaling"] },
    { topic: "Skills to Learn in 2026", words: ["AI Tools", "Coding Basics", "Public Speaking", "Writing", "Data Analysis", "Design", "Investing", "Negotiation", "Languages"] },
    { topic: "Ways to De-stress", words: ["Nature Walk", "Music", "Reading", "Exercise", "Baking", "Socializing", "Bath", "Stretching", "Creative Hobby"] },
    { topic: "Values to Live By", words: ["Integrity", "Compassion", "Courage", "Curiosity", "Respect", "Gratitude", "Discipline", "Loyalty", "Humility"] }
  ]
};
