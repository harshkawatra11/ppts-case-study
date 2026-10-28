# PROBLEM STATEMENTS 

# (HACK@BVP 8.0)

# DOMAIN 1: **Health & Well Being**

1. PS1: **The Pollution Blame Ledger: Source Attribution with Health Cost**

**Problem Statement**

Delhi’s PM2.5 pollution comes from multiple sources such as stubble burning, vehicles, construction, industry, and weather conditions. However, determining how much each source contributes to a specific pollution episode remains difficult. Build a data-driven system that estimates the contribution of different pollution sources to Delhi’s PM2.5 levels and quantifies their estimated health impact.

**What We Need**  
Develop an attribution engine using open data such as satellite fire detections, weather and wind data, CPCB air-quality readings, traffic indicators, and source-location data. The system should:

* Estimate the contribution of each major pollution source.  
* Provide uncertainty or confidence for its estimates.  
* Convert pollution exposure into estimated health impacts using published research.  
* Present results through a simple, evidence-based dashboard that clearly communicates what the model can and cannot determine.  
* Demonstrate how the attribution changes when tested on a new pollution event provided during judging.

**SDGs Covered**

* SDG 3 – Good Health and Well-Being  
* SDG 11 – Sustainable Cities and Communities  
* SDG 13 – Climate Action  
* SDG 16 – Peace, Justice and Strong Institutions

2. **PS2: Break the AI Doctor: Detect Bias, Then Fix It**

**Problem Statement**  
AI health assistants can appear accurate overall while performing poorly for specific groups, languages, age groups, genders, or communication styles. Build a system that systematically identifies hidden biases in a black-box AI health assistant, statistically validates the findings, and reduces the identified bias without significantly reducing overall performance.

**What We Need**  
Develop a testing and mitigation framework that:

* Identifies groups and situations where the AI performs differently.  
* Uses statistical evidence to distinguish real bias from random variation.  
* Applies a model-independent wrapper or mitigation technique to reduce unfair outcomes.  
* Compares fairness and overall accuracy before and after the fix.  
* Demonstrates whether the approach can detect and handle a new, unseen bias introduced by the organizers.

**SDGs Covered**

* SDG 10 – Reduced Inequalities  
* SDG 3 – Good Health and Well-Being  
* SDG 5 – Gender Equality  
* SDG 16 – Peace, Justice and Strong Institutions


3. PS3: **The Resistance Radar: City-Scale Antibiotic Resistance Intelligence**

**Problem Statement**  
 Antimicrobial resistance is making common infections increasingly difficult to treat. Hospitals often lack a clear, up-to-date view of which antibiotics remain effective locally. Build a system that combines laboratory culture and antibiotic-sensitivity data from multiple hospitals to monitor resistance patterns and identify emerging changes.

**What We Need**  
 Develop an intelligence system that:

* Generates hospital- and ward-level antibiograms from structured and semi-structured data.  
* Estimates how key drug–bacteria resistance patterns may change over the coming quarter.  
* Detects unusual resistance spikes that could indicate emerging outbreaks.  
* Provides evidence-based empirical antibiotic options with clear confidence levels.  
* Handles missing data, reporting delays, and differences in testing patterns between hospitals.

**SDGs Covered**

* SDG 3 – Good Health and Well-Being  
* SDG 10 – Reduced Inequalities

4. PS4:**The Nutri-Equity Engine: Affordable Nutrition Optimization**

**Problem Statement**  
 Low-income households often struggle to maintain nutritious diets because of food prices, seasonal availability, household needs, and access to subsidized food. Build a system that creates affordable, nutritionally adequate, and culturally practical weekly meal plans based on household characteristics, local food prices, and available food entitlements.

**What We Need**  
 Develop an optimization system that:

* Generates the lowest-cost nutritionally adequate weekly meal plan.  
* Considers household size, age, dietary preferences, cooking constraints, and local food availability.  
* Incorporates PDS entitlements and changing food prices.  
* Detects price changes and automatically adjusts meal plans.  
* Estimates potential changes in anemia risk based on nutritional adequacy.  
* Provides the results through a simple, low-literacy and vernacular-friendly interface.

**SDGs Covered**

* SDG 2 – Zero Hunger  
* SDG 3 – Good Health and Well-Being  
* SDG 5 – Gender Equality  
* SDG 1 – No Poverty

5. PS5: **The Mother-Watch Planner: Maternal Care Prioritization**

**Problem Statement**  
 Missed antenatal visits and delayed identification of high-risk pregnancies can lead to preventable complications, while frontline health workers have limited time and resources. Build a system that identifies pregnancies requiring greater attention and creates efficient weekly visit plans for frontline workers.

**What We Need**  
 Develop a system that:

* Identifies women at higher risk of missing antenatal care or developing complications.  
* Creates optimized weekly visit schedules based on risk and travel effort.  
* Clearly explains why each case is prioritized.  
* Accounts for limited workforce and geographic constraints.  
* Audits the scheduling process to identify potential bias against specific communities.

**SDGs Covered**

* SDG 3 – Good Health and Well-Being  
* SDG 5 – Gender Equality  
* SDG 10 – Reduced Inequalities

6. PS6: **The Stockout Shield: Essential Medicine Supply Optimization**

**Problem Statement**  
 Essential medicines can run out at some healthcare facilities while excess stock at others expires unused. Build a system that helps healthcare facilities anticipate medicine demand, identify stockout and expiry risks, and efficiently redistribute available supplies.

**What We Need**  
 Develop a system that:

* Forecasts medicine-level demand for each facility.  
* Detects upcoming stockout and expiry risks.  
* Accounts for seasonal trends, outbreaks, and sudden demand changes.  
* Recommends inter-facility transfers and reorder quantities to reduce shortages and wastage.  
* Handles sparse, irregular, and incomplete inventory data.  
* Clearly explains the reason behind every recommendation.

**SDGs Covered**

* SDG 3 – Good Health and Well-Being  
* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 12 – Responsible Consumption and Production

# DOMAIN 2:  Social Impact & Women Safety

1. PS1: **Silent Surveillance: Detecting Covert Tracking on Personal Devices**

**Problem Statement**  
 Covert monitoring through stalkerware, shared accounts, compromised sessions, and physical trackers can expose a survivor’s location, communication, and personal information without their knowledge. Build a defensive system that helps identify possible monitoring while minimizing the risk of alerting the person responsible.

**What We Need**  
 Develop a privacy-focused detection and assessment system that:

* Identifies potential stalkerware, compromised accounts, and nearby trackers.  
* Shows what information may be exposed and the evidence supporting the finding.  
* Provides safe, step-by-step guidance on what to secure, preserve, or avoid changing immediately.  
* Works for users with low technical literacy.  
* Evaluates false positives, evasion, and the risk of the tool itself being detected.

**SDGs Covered**

* SDG 5 – Gender Equality  
* SDG 16 – Peace, Justice and Strong Institutions  
    
2. PS2: **The Leaky Pipeline: Tracing Gaps in the Justice System**

**Problem Statement**  
 Cases of violence against women often pass through multiple institutions, including police, hospitals, forensic labs, prosecutors, and courts. Fragmented records make it difficult to track cases across these stages and identify where delays, drop-offs, or bottlenecks occur. Build a privacy-safe system to reconstruct this journey and identify systemic gaps.

**What We Need**  
 Develop a system that:

* Links fragmented case records without relying on a common identifier.  
* Reconstructs the journey of cases across different institutions.  
* Identifies patterns in delays, case drop-offs, and bottlenecks.  
* Highlights trends across stages, locations, or case categories without targeting individuals.  
* Measures and manages record-linkage errors.  
* Protects survivor identities and prevents misuse of the analysis.

**SDGs Covered**

* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 5 – Gender Equality

3. PS3: **Ten Seconds to Read a Call: Helpline Triage in Hinglish**

**Problem Statement**  
 Helpline calls can contain limited, noisy, or mixed-language information, making it difficult to quickly identify emergencies and route them to the right support service. Build an AI-based triage system that can understand Hinglish and regional language variations and extract critical information from short call transcripts.

**What We Need**  
 Develop a system that:

* Assigns an appropriate urgency level with minimal risk of missing emergencies.  
* Extracts location, threat type, and key details from noisy transcripts.  
* Routes cases to the appropriate service such as police, medical care, shelter, or legal aid.  
* Identifies potential repeat complaints involving the same individual while minimizing incorrect matches.  
* Handles indirect language, code words, dialects, and callers who cannot speak openly.  
* Evaluates performance on a hidden set of unseen transcripts.

**SDGs Covered**

* SDG 5 – Gender Equality  
* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 10 – Reduced Inequalities  
* SDG 9 – Industry, Innovation and Infrastructure

4. PS4: **The Poisoned Safety Map: Detecting Fake Safety Reports**

**Problem Statement**  
 Crowdsourced safety maps can be manipulated through coordinated fake reports, making genuinely unsafe areas appear safe or unfairly damaging the reputation of a neighbourhood or business. Build a trust system that identifies suspicious reports while minimizing the risk of suppressing genuine safety complaints.

**What We Need**  
 Develop a system that:

* Assesses the credibility of individual safety reports.  
* Detects coordinated and isolated fake-report campaigns.  
* Preserves genuine reports and minimizes false suppression.  
* Improves the reliability of the safety map using evidence from the report stream.  
* Detects new attack patterns without requiring the system to be rebuilt.  
* Measures fake detection, genuine-report suppression, and map accuracy before and after processing.

**SDGs Covered**

* SDG 5 – Gender Equality  
* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 11 – Sustainable Cities and Communities  
* SDG 9 – Industry, Innovation and Infrastructure  
    
5. PS5: **Know Your Rights in Ten Minutes: A Reliable Legal Guide**

**Problem Statement**  
 People facing harassment or violence may not know which complaint to make, where to seek help, what documents are required, or what happens next. Build a reliable Hindi-English legal guidance system that provides clear, situation-based information without inventing laws, procedures, forms, or authorities.

**What We Need**  
 Develop a system that:

* Answers legal and process-related questions using the provided legal knowledge base.  
* Gives clear, step-by-step guidance in Hindi and English.  
* Identifies situations where the available information is insufficient and directs users to legal aid support.  
* Avoids hallucinating laws, forms, offices, deadlines, or procedures.  
* Handles ambiguous and trick questions safely.  
* Immediately reflects updated rules provided by the organizers during judging.

**SDGs Covered**

* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 5 – Gender Equality  
* SDG 10 – Reduced Inequalities  
* SDG 4 – Quality Education

# DOMAIN 3: Sustainability and Smart Cities

1. PS1: Crop Health Monitoring Using Satellite Imagery

**Problem Statement**  
 Farmers and agricultural authorities often lack timely information about crop health across large farming areas. Build an intelligent system that uses satellite imagery and environmental data to identify crop stress, abnormal growth, and potential water-related issues without requiring manual inspection of every field.

**What We Need**  
 Develop a system that:

* Maps agricultural fields and assigns a crop-health status.  
* Detects areas showing signs of crop stress or abnormal growth.  
* Uses satellite imagery along with rainfall, temperature, or soil-moisture data where available.  
* Compares historical imagery to identify improving or declining crop health.  
* Generates alerts highlighting areas that require field-level inspection.

**SDGs Covered**

* SDG 2 – Zero Hunger  
* SDG 6 – Clean Water and Sanitation  
* SDG 12 – Responsible Consumption and Production  
* SDG 13 – Climate Action  
    
2. PS 2:**Satellite-Based Flood Prediction & Early Warning System**

**Problem Statement**  
Flooding and urban waterlogging can vary significantly across nearby areas, making city-wide warnings insufficient. Build a data-driven system that combines satellite imagery, terrain, rainfall, drainage, and historical flood data to identify where flooding is likely to occur, estimate its severity, and determine which areas require attention first.

**What We Need**  
Develop a system that:

* Generates a dynamic flood-risk map.  
* Identifies specific vulnerable locations or zones.  
* Estimates the potential severity of flooding.  
* Assigns priorities based on risk and severity.  
* Provides recommended actions for each high-risk area.  
* Uses historical and real-time/updated environmental data where available

**SDGs Covered**

* SDG 11 – Sustainable Cities and Communities  
* SDG 6 – Clean Water and Sanitation  
* SDG 13 – Climate Action

3. PS 3: **Smart Mobility & Carbon-Aware Route Planning**

**Problem Statement**  
Urban commuters usually choose routes based on travel time or distance, while congestion, fuel consumption, and carbon emissions are rarely considered together. Build a smart route-planning system that helps users understand the mobility and environmental impact of different travel options.

**What We Need**  
Develop a system that:

* Takes source, destination, travel mode, and optional departure time as inputs.  
* Considers distance, congestion, travel time, vehicle type, and estimated fuel/energy consumption.  
* Estimates the carbon emissions associated with each route.  
* Provides multiple route options with clear time, cost, and environmental trade-offs.  
* Allows users to choose a route based on their own priorities.

**SDGs Covered**

* SDG 11 – Sustainable Cities and Communities  
* SDG 13 – Climate Action  
* SDG 12 – Responsible Consumption and Production  
    
4. PS4: **Self-Healing Renewable Energy Grid**

**Problem Statement**  
As campuses and communities adopt solar power, batteries, EVs, and other distributed energy resources, changing demand, intermittent renewable generation, and equipment failures can cause energy wastage and local power disruptions. Build a software-defined self-healing microgrid that intelligently coordinates these resources to maintain reliable power while maximizing renewable-energy use.

**What We Need**  
Develop a system that continuously monitors simulated renewable generation, batteries, EVs, electricity demand, and critical loads, and automatically:

* Detects changes, faults, and supply-demand imbalances.  
* Predicts upcoming energy shortages or excess generation.  
* Reallocates available energy between resources.  
* Shifts flexible loads and EV charging when required.  
* Protects critical loads during disruptions.  
* Recovers from component failures without manual intervention.  
* Minimizes energy wastage, peak demand, and carbon emissions.

**Core Flow**

Detect → Predict → Reallocate → Recover

**Example:**  
Solar generation drops → Battery supplies power → Flexible loads are shifted → EV charging is delayed → Critical loads remain powered.

**SDGs Covered**

* SDG 7 – Affordable and Clean Energy  
* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 11 – Sustainable Cities and Communities  
* SDG 13 – Climate Action

# DOMAIN 4: AI4Impact

1. PS1: **AI-Powered Disaster Response**

**Problem Statement**  
During disasters, emergency teams receive large amounts of images, reports, and location data, making it difficult to quickly determine where help is needed most. Build an AI-powered disaster response system that analyzes this information to assess damage, identify affected areas, and prioritize emergency response.

**What We Need**  
Develop a system that:

* Detects floods, fires, structural damage, blocked roads, and other disaster impacts from images and reports.  
* Classifies affected locations by severity: Low, Medium, High, or Critical.  
* Estimates the extent of damage and affected infrastructure/areas.  
* Generates a dynamic priority score using severity, population impact, accessibility, and urgency.  
* Recommends the type and priority of resources required, such as rescue teams, medical aid, food, or water.  
* Displays affected locations, severity, and response priorities on an interactive map/dashboard.

**Core Flow**

Detect → Assess → Prioritize → Allocate → Respond

**SDGs Covered**

* SDG 11 – Sustainable Cities and Communities  
* SDG 13 – Climate Action  
* SDG 3 – Good Health and Well-Being  
* SDG 9 – Industry, Innovation and Infrastructure  
2. PS2: **AI-Powered Smart Irrigation**

**Problem Statement**  
Agriculture consumes significant amounts of water, while irrigation is often based on fixed schedules rather than actual crop and soil conditions. Build an AI-powered irrigation system that predicts water requirements and optimizes when, where, and how much water should be supplied.

**What We Need**  
Develop a system that:

* Predicts water requirements using soil, crop, weather, and historical irrigation data.  
* Forecasts future soil-moisture levels.  
* Generates optimized irrigation schedules for different fields.  
* Minimizes water usage while maintaining suitable soil moisture.  
* Detects over-irrigation and under-irrigation and generates alerts.  
* Automatically adapts recommendations to rainfall and weather forecasts.  
* Provides customized recommendations based on crop, soil type, and field conditions.  
* Displays conditions, predictions, schedules, alerts, and estimated water savings through an interactive dashboard.

**AI/ML Focus**  
Predictive ML → Time-Series Forecasting → Weather Analysis → Optimization → Visualization

**SDGs Covered**

* SDG 2 – Zero Hunger  
* SDG 6 – Clean Water and Sanitation  
* SDG 12 – Responsible Consumption and Production  
* SDG 13 – Climate Action

3. PS3: **AI-Powered Vendor Compliance Checker for Government Procurement**

**Problem Statement**  
Government procurement requires verification of multiple vendor documents, making manual compliance checks time-consuming and prone to missed inconsistencies or expired information. Build an AI-powered document verification system that checks vendor submissions against a predefined procurement checklist.

**What We Need**  
Develop a system that:

* Accepts vendor documents such as GST, PAN, Udyam/MSME, Startup India, OEM authorization, and other supporting documents.  
* Extracts relevant information using OCR and document intelligence.  
* Checks documents for missing, inconsistent, expired, or potentially invalid information.  
* Compares extracted details against the provided procurement requirements.  
* Highlights discrepancies and missing requirements with supporting evidence.  
* Generates a simple Compliance Report showing compliant, non-compliant, and requires-review items.

**Core Flow**  
Upload → Extract → Verify → Detect Issues → Compliance Report

**SDGs Covered**

* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 8 – Decent Work and Economic Growth  
    
4. PS4:AI-Powered Intelligent Disease Symptom Checker 

**Problem Statement**

Build an AI-powered health assessment system that analyzes symptoms and basic health information, asks relevant follow-up questions, identifies possible conditions, and assesses the urgency of medical attention.

### **What We Need**

* Accept symptoms, duration, age, medical history, and allergies.  
* Generate intelligent, symptom-specific follow-up questions.  
* Identify possible conditions based on the provided information.  
* Classify urgency, such as Self-Care, Doctor Consultation, or Emergency.  
* Clearly explain the factors behind the assessment 

# DOMAIN 5: FINTECH

1. PS1: **Parent-Controlled Teen Wallet with Financial Learning**

**Problem Statement**  
 Teenagers often lack practical financial education while parents have limited tools to guide spending safely. Build a parent-controlled digital wallet that combines spending controls with interactive financial learning.

**What We Need**  
 Develop a system that:

* Allows parents to set spending limits and merchant-category controls.  
* Provides a safe simulated or prepaid wallet for teenagers.  
* Includes short lessons on saving, budgeting, and responsible spending.  
* Rewards users with badges and goals for completing learning activities.  
* Includes mock investing or financial simulations to build practical skills.  
* Provides parents with a simple view of spending and learning progress.

**Core Flow**  
 Set Limits → Spend → Learn → Save → Earn Badges

**SDGs Covered**

* SDG 4 – Quality Education  
* SDG 8 – Decent Work and Economic Growth  
* SDG 10 – Reduced Inequalities  
    
2. PS2: **Anti-Predatory Loan App Detector**

**Problem Statement**  
 Some digital lending applications may request excessive permissions, hide important terms, or operate without appropriate authorization, exposing borrowers to financial and privacy risks. Build a loan-app risk assessment system that helps users identify potentially unsafe lending applications before using them.

**What We Need**  
 Develop a system that:

* Analyzes an app's permissions and requested access.  
* Checks available information about the lender's registration and authorization status.  
* Identifies suspicious indicators such as excessive data access or unclear lending practices.  
* Generates a simple Safe / Risky / Requires Review assessment with reasons.  
* Explains the detected risks in simple, user-friendly language.  
* Allows users to assess an app using its name, available metadata, or APK where feasible.

**Core Flow**  
 Scan → Verify → Assess Risk → Explain → Warn

**SDGs Covered**

* SDG 10 – Reduced Inequalities  
* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 9 – Industry, Innovation and Infrastructure  
    
3. PS3: **Crypto & Web3 Scam Wallet Checker**

**Problem Statement**  
 Crypto users can interact with scam wallets and malicious token contracts without realizing the associated risks. Build a risk-analysis system that evaluates wallet addresses and token contracts using available blockchain and threat-intelligence data.

**What We Need**  
 Develop a system that:

* Accepts a wallet address or token contract as input.  
* Checks for known scam associations and suspicious activity.  
* Detects indicators such as rug-pull patterns, honeypot behavior, and risky approval requests.  
* Generates a clear risk assessment with evidence behind the findings.  
* Presents the results through a simple, user-friendly dashboard.

**Core Flow**  
 Enter Address → Analyze On-Chain Data → Detect Risks → Explain → Risk Report

**SDGs Covered**

* SDG 16 – Peace, Justice and Strong Institutions  
* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 10 – Reduced Inequalities  
4. PS4: **Mutual Fund Overlap & Portfolio X-Ray**

**Problem Statement**  
 Investors may hold multiple mutual funds believing they are diversified, while several funds may contain many of the same companies or sectors. Build a portfolio analysis system that reveals hidden overlap and concentration across a user's mutual fund holdings.

**What We Need**  
 Develop a system that:

* Imports and parses a CAS statement or equivalent portfolio data.  
* Identifies overlapping holdings across multiple mutual funds.  
* Visualizes stock and sector concentration.  
* Highlights factors such as high expense ratios and significant portfolio overlap.  
* Generates an easy-to-understand portfolio X-ray showing where diversification may be limited.  
* Provides data-driven simplification options without presenting them as personalized financial advice.

**Core Flow**  
 Import → Parse → Compare Holdings → Detect Overlap → Portfolio X-Ray

**SDGs Covered**

* SDG 8 – Decent Work and Economic Growth  
* SDG 10 – Reduced Inequalities  
* SDG 12 – Responsible Consumption and Production

# DOMAIN 6: IOT , ROBOTICS AND HARDWARE 

1. PS1: **Wildfire & Forest Fire Early-Warning Mesh**

**Problem Statement**  
 Forest fires in remote areas can spread rapidly before they are detected, while poor network connectivity makes conventional monitoring difficult. Build a low-power fire detection and communication system that identifies early signs of fire and relays alerts from remote locations to a central monitoring point.

**What We Need**  
 Develop a system that:

* Monitors temperature, smoke, and humidity to detect potential fires.  
* Uses a low-power mesh network to relay alerts across remote areas.  
* Filters false alarms using sensor data and contextual analysis.  
* Displays detected fire-risk zones and alerts on a live map.  
* Demonstrates reliable communication even when direct connectivity is unavailable.

**SDGs Covered**

* SDG 15 – Life on Land  
* SDG 13 – Climate Action  
* SDG 9 – Industry, Innovation and Infrastructure  
    
2. PS2:**Swarm Robots for Warehouse & Search-and-Rescue Simulation**

**Problem Statement**  
 Large-scale tasks such as warehouse exploration and search-and-rescue can be inefficient when handled by a single robot, especially when failures or communication loss occur. Build a multi-robot coordination system where a group of robots autonomously divides tasks and adapts when conditions change.

**What We Need**  
 Develop a system that:

* Divides a map into tasks and allocates them among multiple robots.  
* Enables robots to navigate while avoiding collisions.  
* Handles communication loss and robot failures.  
* Dynamically reassigns unfinished tasks when a robot becomes unavailable.  
* Demonstrates decentralized coordination through physical robots or a ROS/Gazebo simulation.

**SDGs Covered**

* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 11 – Sustainable Cities and Communities  
3. PS3: **Computer-Vision Sorting System for Waste & Produce**

**Problem Statement**  
 Manual sorting of waste, agricultural produce, and components can be slow, inconsistent, and difficult to scale. Build a computer-vision-based automated sorting system that identifies objects and directs them to the appropriate category.

**What We Need**  
 Develop a system that:

* Uses a camera and lightweight vision model to classify objects.  
* Handles real-world variations such as lighting and object orientation.  
* Automatically directs items to the correct category using a servo, robotic arm, or simulated mechanism.  
* Demonstrates real-time or near-real-time classification and sorting.  
* Measures classification accuracy and sorting throughput.

**SDGs Covered**

* SDG 12 – Responsible Consumption and Production  
* SDG 9 – Industry, Innovation and Infrastructure  
* SDG 11 – Sustainable Cities and Communities  
    
4. PS4: **Indoor Navigation Aid for the Visually Impaired**

**Problem Statement**  
 GPS-based navigation is unreliable indoors, making it difficult for visually impaired people to independently navigate places such as hospitals, malls, and railway stations. Build an indoor navigation and obstacle-detection system that provides accessible guidance without relying on GPS.

**What We Need**  
 Develop a system that:

* Detects nearby obstacles and hazards.  
* Determines the user's approximate indoor location using technologies such as BLE beacons or other positioning methods.  
* Provides navigation through audio or haptic feedback.  
* Guides users toward a selected destination.  
* Demonstrates reliable navigation across a defined indoor environment.

**SDGs Covered**

* SDG 10 – Reduced Inequalities  
* SDG 11 – Sustainable Cities and Communities  
* SDG 3 – Good Health and Well-Being

### **AI-Powered Wildlife Monitoring & Threat Detection**

**Problem Statement**  
 Large wildlife reserves are difficult to monitor continuously, making it challenging to track animals and detect unauthorized human activity. Build an AI-powered monitoring system that analyzes aerial or camera imagery to identify wildlife, humans, vehicles, and potential threats.

**What We Need**  
 Develop a system that:

* Detects animals, humans, vehicles, and other relevant objects.  
* Identifies wildlife species where sufficient data is available.  
* Flags potential threats such as unauthorized human activity or vehicles.  
* Maps detected activity across monitored areas.  
* Handles challenges such as varying lighting, terrain, and environmental conditions.

**SDGs Covered**

* SDG 15 – Life on Land  
* SDG 13 – Climate Action  
* SDG 9 – Industry, Innovation and Infrastructure

# 

# 

# 

# 