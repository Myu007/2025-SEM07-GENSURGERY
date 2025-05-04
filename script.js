const questions = [
  {
    question: "The sealing of the chest wound is created by a bandage:",
    answers: [
      { text: "occlusive", correct: true },
      { text: "cotton swab bandage", correct: false },
      { text: "Kerchief", correct: false },
      { text: "gypsum", correct: false },
      { text: "glue", correct: false },
    ],
  },
  {
    question: "In case of the fracture of the scapula, the immobilization is enough with:",
    answers: [
      { text: "Kerchief bandage", correct: true },
      { text: "sticky patch", correct: false },
      { text: "Elansky's tire", correct: false },
      { text: "laying on the shield", correct: false },
      { text: "Dieterich's tire", correct: false },
    ],
  },
  {
    question: "If one eye is damaged, it is superimposed:",
    answers: [
      { text: "monocular bandage", correct: true },
      { text: "binocular bandage", correct: false },
      { text: "turtle bandage", correct: false },
      { text: "\"bridle\" bandage", correct: false },
      { text: "\"cap\" bandage", correct: false },
    ],
  },
  {
    question: "If there is damage in the area of the shoulder joint, a bandage is applied:",
    answers: [
      { text: "spikelike", correct: true },
      { text: "turtle", correct: false },
      { text: "8-shaped", correct: false },
      { text: "Dezo", correct: false },
      { text: "spiral bandage", correct: false },
    ],
  },
  {
    question: "What is usesd to control the quality of preoperative hand treatment?",
    answers: [
      { text: "bacteriological control", correct: true },
      { text: "thermal indicators", correct: false },
      { text: "phenolphthalein test", correct: false },
      { text: "amidopyrine test", correct: false },
      { text: "Mikulich's method", correct: false },
    ],
  },
  {
    question: "Which solution of ammonia is used to wash hands according to Spasokukotsky-Kochergin?",
    answers: [
      { text: "0.005", correct: true },
      { text: "0.01", correct: false },
      { text: "1.5%", correct: false },
      { text: "0.02", correct: false },
      { text: "0.03", correct: false },
    ],
  },
  {
    question: "How long is the general cleaning in the operating unit carried out?",
    answers: [
      { text: "1 time in a week", correct: true },
      { text: "1 time in a month", correct: false },
      { text: "1 time in 10 days", correct: false },
      { text: "1 time in a day", correct: false },
      { text: "1 time in 2 weeks", correct: false },
    ],
  },
  {
    question: "The storage period of a closed sterile bix without a filter is no more than:",
    answers: [
      { text: "3 days", correct: true },
      { text: "1 day", correct: false },
      { text: "2 days", correct: false },
      { text: "20 days", correct: false },
      { text: "6 hours", correct: false },
    ],
  },
  {
    question: "When packing the bix by type, they put in it:",
    answers: [
      { text: "only one type of material", correct: true },
      { text: "everything necessary for a certain operation", correct: false },
      { text: "necessary during the working day of the dressing room", correct: false },
      { text: "necessary for preparing the operating nurse for the operation", correct: false },
      { text: "necessary for the surgeon", correct: false },
    ],
  },
  {
    question: "Anesthetic and respiratory equipment is disinfected with a solution of:",
    answers: [
      { text: "3% hydrogen peroxide - 60 min", correct: true },
      { text: "96% ethyl alcohol - 10 min", correct: false },
      { text: "96% ethyl alcohol - 20 min", correct: false },
      { text: "10% formaldehyde - 10 min", correct: false },
      { text: "1% chloramine - 60 min", correct: false },
    ],
  },
  {
    question: "The concept of \"antiseptics\" was introduced into medicine by:",
    answers: [
      { text: "J. Pringle", correct: true },
      { text: "N.I.Pirogov", correct: false },
      { text: "E. Bergmann", correct: false },
      { text: "K. Schimmelbush", correct: false },
      { text: "I.V. Buyalsky", correct: false },
    ],
  },
  {
    question: "What does the pre-sterilization treatment provide?",
    answers: [
      { text: "removal of protein, fatty impurities and medications from the surface", correct: true },
      { text: "removal of spores from the surface", correct: false },
      { text: "removal of fatty impurities from the surface", correct: false },
      { text: "removal of vegetative forms of microorganisms from the surface", correct: false },
      { text: "removal of protein from the surface", correct: false },
    ],
  },
  {
    question: "Instruments are sterilized in a glassperlene sterilizer with:",
    answers: [
      { text: "heated sterile beads", correct: true },
      { text: "irradiation", correct: false },
      { text: "dry heat", correct: false },
      { text: "hot steam", correct: false },
      { text: "chemical indicators", correct: false },
    ],
  },
  {
    question: "Which materials are processed in a glassperlene sterilizer?",
    answers: [
      { text: "endodontic tools", correct: true },
      { text: "tips", correct: false },
      { text: "suture material", correct: false },
      { text: "trays", correct: false },
      { text: "cotton swabs", correct: false },
    ],
  },
  {
    question: "When carrying out chemical disinfection, the disinfectant must cover the intruments over:",
    answers: [
      { text: "at least 1 cm", correct: true },
      { text: "at least 2 cm", correct: false },
      { text: "0.5 cm", correct: false },
      { text: "at the top", correct: false },
      { text: "the instruments must be completely in solution", correct: false },
    ],
  },
  {
    question: "The current control of steam sterilization is carried out using:",
    answers: [
      { text: "control and measuring devices and chemical indicators", correct: true },
      { text: "biological indicators", correct: false },
      { text: "sowing indicator for sterility of samples of sterilized items", correct: false },
      { text: "vacuum-test", correct: false },
      { text: "physical indicators", correct: false },
    ],
  },
  {
    question: "Blood clot of the size of a clenched fist is roughly equal to:",
    answers: [
      { text: "500 ml", correct: true },
      { text: "600 ml", correct: false },
      { text: "250 ml", correct: false },
      { text: "350 ml", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with sudden headache, vomiting and unconsciousness, diagnosis is:",
    answers: [
      { text: "Subarachnoid hemorrhage", correct: true },
      { text: "Intracerebral hemorrhage", correct: false },
      { text: "Subdural hemorrhage", correct: false },
      { text: "Extradural hemorrhage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following blood components are used in emergency reversal of anticoagulant (warfarin) therapy in uncontrolled haemorrhage?",
    answers: [
      { text: "Prothrombin complex concentrates", correct: true },
      { text: "Fresh-frozen plasma", correct: false },
      { text: "Platelets", correct: false },
      { text: "Autologous blood", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A female with suspected child abuse was brought to the casualty with severe bleeding from perineum. What should be the first line of management? ",
    answers: [
      { text: "Airway maintenance", correct: true },
      { text: "Internal iliac artery ligation", correct: false },
      { text: "Whole blood transfusion", correct: false },
      { text: "Inform police before starting the treatment", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A Female patient, 32 years of age, was admitted to hospital with severe hemorrhagic shock due to polytrauma with hip fracture, who developed acidosis, coagulopathy, and hypothermia. The first line of therapy in this patient of trauma is ",
    answers: [
      { text: "Crystalloids", correct: true },
      { text: "Colloids ", correct: false },
      { text: "lnotropes", correct: false },
      { text: "Blood_transfusion ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is false about hemorrhagic shock?",
    answers: [
      { text: "Low heart rate", correct: true },
      { text: "Cold extremity", correct: false },
      { text: "Due to fluid loss", correct: false },
      { text: "Vascular resistance is high", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-years old male come to causality with head injury. Examination reveals normal I consciousness and blood in the tympanic membrane. Most likely cause is?",
    answers: [
      { text: "Basilar fracture", correct: true },
      { text: "Extradural hemorrhage", correct: false },
      { text: "Subdural hemorrhage", correct: false },
      { text: "Intraventricular hemorrhage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient presented with pallor, cold sweat, weakness, lightheadedness, thirst, air I hunger, and eventually, Loss of consciousness. 0/E - He was found to be mildly anxious, 20% blood loss of about 1200 ml, HR -110, Urine output-> 0.5 ml/kg/hr. Patient falls under which class of hypovolemic shock?",
    answers: [
      { text: "Class II", correct: true },
      { text: "Class III", correct: false },
      { text: "Class IV", correct: false },
      { text: "Class I", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You are a medical officer at the blood bank and receive several units of packed RBCs, platelets, fresh frozen plasma, and cryoprecipitate following a blood donation camp. Which among the following components would you want to use at the earliest?",
    answers: [
      { text: "Platelets", correct: true },
      { text: "Packed RBCs", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Cryoprecipitate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In surgical stress all hormone is increased except: ",
    answers: [
      { text: "Insulin", correct: true },
      { text: "ADH", correct: false },
      { text: "ACTH", correct: false },
      { text: "Cortisol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In triage, immediate treatment necessity is indicated by which colour code?",
    answers: [
      { text: "Black", correct: true },
      { text: "Red", correct: false },
      { text: "Yellow", correct: false },
      { text: "Blue", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "As an immediate response to surgical stress, all hormones are increased except which of the following?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "ACTH", correct: false },
      { text: "Cortisol", correct: false },
      { text: "GH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with abdominal injury presents to the emergency department with signs of signs of peritonitis and shock. Airway and breathing were secured and IV fluids were started with 2 large bore cannulas. The next line of management should be: ",
    answers: [
      { text: "Exploratory laparotomy under general anesthesia", correct: true },
      { text: "Insertion of abdominal drain followed by laparotomy", correct: false },
      { text: "Laparoscopy", correct: false },
      { text: "FAST", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An important auscultative sign of peritonitis is:",
    answers: [
      { text: "absence of peristaltic noises", correct: true },
      { text: "crepitation of the peritoneal leaves", correct: false },
      { text: "tension of the abdominal wall muscles", correct: false },
      { text: "free gas in the abdominal cavity", correct: false },
      { text: "enlargement of lymph nodes", correct: false },
    ],
  },
  {
    question: "Instrumental methods of examination include:",
    answers: [
      { text: "chest X-ray", correct: true },
      { text: "clinical blood test", correct: false },
      { text: "visual examination of the chest", correct: false },
      { text: "determination of embryonic antigen", correct: false },
      { text: "stool analysis for the presence of hidden blood", correct: false },
    ],
  },
  {
    question: "Physical examination methods do not include:",
    answers: [
      { text: "endoscopy", correct: true },
      { text: "auscultation", correct: false },
      { text: "palpation", correct: false },
      { text: "percussion", correct: false },
      { text: "auscultoafriction", correct: false },
    ],
  },
  {
    question: "Additional examination methods include:",
    answers: [
      { text: "CT scan", correct: true },
      { text: "percussion", correct: false },
      { text: "auscultation", correct: false },
      { text: "palpation", correct: false },
      { text: "determination of the apical shock", correct: false },
    ],
  },
  {
    question: "An invasive examination method implies:",
    answers: [
      { text: "a method in which the integrity of the integumentary tissues is violated and, accordingly, there is a possibility of complications in the form of bleeding, surgical infection, damage to internal organs", correct: true },
      { text: "a method that is safe for the patient", correct: false },
      { text: "the method associated with the risk of infection of the doctor as a result of his contact with the patient", correct: false },
      { text: "the method associated with the risk of the doctor receiving any harm as a result of contact with the patient", correct: false },
      { text: "a method that is safe for both the patient and the doctor", correct: false },
    ],
  },
  {
    question: "The main difference between a surgical medical history and therapeutic in:",
    answers: [
      { text: "the presence of the section \"local status\"", correct: true },
      { text: "a shorter and more specific statement of complaints", correct: false },
      { text: "setting the time of the onset of the disease to the minute", correct: false },
      { text: "a more detailed description of the musculoskeletal system", correct: false },
      { text: "mandatory entry into the medical history of information about previously performed surgical interventions to the patient", correct: false },
    ],
  },
  {
    question: "The sequence of examination of the patient os as follows:",
    answers: [
      { text: "examination, palpation, percussion, auscultation", correct: true },
      { text: "auscultation, percussion, palpation, examination", correct: false },
      { text: "examination, percussion, palpation, auscultation", correct: false },
      { text: "palpation, examination, percussion, auscultation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Information about heredity should be reflected in the medical history section:",
    answers: [
      { text: "life history", correct: true },
      { text: "complaints", correct: false },
      { text: "history of the development of the present disease", correct: false },
      { text: "local status", correct: false },
      { text: "results of additional examination", correct: false },
    ],
  },
  {
    question: "The preoperative period includes the following stages:",
    answers: [
      { text: "diagnostic satge", correct: true },
      { text: "the stage of the dispensary examination of the patient", correct: false },
      { text: "the stage of preoperative preparation in the operating room", correct: false },
      { text: "pre-hospital stage of preoperative preparation", correct: false },
      { text: "the start of the operation", correct: false },
    ],
  },
  {
    question: "The main task of the preoperative period is:",
    answers: [
      { text: "to prepare the patient for a surgery", correct: true },
      { text: "to imrpove the patient's condition", correct: false },
      { text: "to examine the cardiovascular system", correct: false },
      { text: "to sanitize the foci of infection", correct: false },
      { text: "a linen change", correct: false },
    ],
  },
  {
    question: "The preoperative period begins with:",
    answers: [
      { text: "the beginning of a preparation for the operation", correct: true },
      { text: "the onset of the disease", correct: false },
      { text: "the diagnosis", correct: false },
      { text: "the moment of admission to the surgical hospital", correct: false },
      { text: "a partial sanitary cleanup", correct: false },
    ],
  },
  {
    question: "The method of transporting the patient to the operating room is:",
    answers: [
      { text: "lying on a gurney", correct: true },
      { text: "sitting in a wheelchair", correct: false },
      { text: "taking the patient under the arm", correct: false },
      { text: "send the patient himself", correct: false },
      { text: "to go with a surgeon", correct: false },
    ],
  },
  {
    question: "A nurse will schedule the shaving of the surgical field for a patient preparing for a planned operation:",
    answers: [
      { text: "on the day of the operation ", correct: true },
      { text: "on the operating table", correct: false },
      { text: "in the evening berfore the operation", correct: false },
      { text: "1 day before the operation", correct: false },
      { text: "1 hour before the operation", correct: false },
    ],
  },
  {
    question: "Which is not a feature of minimal access surgery:",
    answers: [
      { text: "Good tactile sense", correct: true },
      { text: "Decreased wound size", correct: false },
      { text: "Improved vision", correct: false },
      { text: "Decreased pain", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You are the 2nd year PG in the surgery department assisting the chief surgeon in Exploratory laparotomy for a patient with severe abdominal trauma. The patient was successfully managed and while closing the abdomen after a midline laparotomy, you have been asked by your chief to suture the incision. What length of suture will you choose to close the incision? ",
    answers: [
      { text: "4x incision length ", correct: true },
      { text: "6x incision length ", correct: false },
      { text: "8x incision length ", correct: false },
      { text: "2x incision length ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following are the methods to reduce the surgical site infection except ?",
    answers: [
      { text: "Shaving of the operative site before operation", correct: true },
      { text: "Preoperative antibiotics", correct: false },
      { text: "Use of monofilament sutures", correct: false },
      { text: "Proper sterile technique", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Treatment of choice for stab injury caecum:",
    answers: [
      { text: "ilea-transverse anastomosis", correct: true },
      { text: "Colostomy", correct: false },
      { text: "Transverse colostomy", correct: false },
      { text: "Sigmoid colostomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "When knots are cut short, the free ends of ‘ears’ should be left at least _____ mm long?",
    answers: [
      { text: "1-2 mm", correct: true },
      { text: "3-4 mm", correct: false },
      { text: "5-6 mm", correct: false },
      { text: "7-8 mm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Optimum urine output in post-operative patient: ",
    answers: [
      { text: "1 ml/kg ", correct: true },
      { text: "2 ml/kg ", correct: false },
      { text: "3 ml/kg ", correct: false },
      { text: "4 ml/kg ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman suffered massive infarction of the small bowel and after surgical resection was left with only 40 cm of the post-duodenal small bowel. She was maintained initially on total parenteral nutrition (TPN), but because of poor compliance with her dietary regimen, she had a stormy course when given enteral feedings. In this patient, Teduglutide can be used to treat short bowel syndrome which works by promoting mucosal growth and possibly restoring gastric emptying and secretion. This drug is an ",
    answers: [
      { text: "GLP-2 analog ", correct: true },
      { text: "HT la inhibitor ", correct: false },
      { text: "GLP-1 analogs ", correct: false },
      { text: "C- peptic analogs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old female has undergone surgery for an aortic aneurysm. Postoperatively the patient was infused with a colloidal solution dextran to prevent clotting. Low molecular weight dextran is contraindicated in which of the following condition?",
    answers: [
      { text: "Thrombocytopenia", correct: true },
      { text: "Fetal distress syndrome", correct: false },
      { text: "Cerebrovascular accident ", correct: false },
      { text: "Electrical burns ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "40-year-old male with type 2 diabetes mellitus and a BMI of 40 kg/m2 underwent roux en Y gastric bypass surgery for weight loss. What percentage of patients are likely to get diabetes remission after 3 years of gastric bypass surgery?",
    answers: [
      { text: "0.5", correct: true },
      { text: "1", correct: false },
      { text: "0.25", correct: false },
      { text: "0.7", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a method for providing enteral nutrition? ",
    answers: [
      { text: "PICC", correct: true },
      { text: "Sip feeding ", correct: false },
      { text: "Nasojejunal tube", correct: false },
      { text: "PEG", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 52-year-old woman underwent laparoscopic sleeve gastrectomy for morbid obesity. She did not require postoperative intensive care and was discharged well on postoperative day three. She was tolerating a liquid diet at home but came back on postoperative day 1 O with complaints of fever & left hypochondrium abdominal pain. On examination, the patient was febrile & PR- 11O/min. CBC shows leucocytosis. What is the next best step in the management of this patient?",
    answers: [
      { text: "Re-exploration", correct: true },
      { text: "Broad-spectrum antibiotics ", correct: false },
      { text: "Abdominal USG to locate the septic focus ", correct: false },
      { text: "CECT abdomen", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In classification of contaminated wound which of the following is included?",
    answers: [
      { text: "Perforated appendix resection", correct: true },
      { text: "Inguinal hernia surgery", correct: false },
      { text: "Hydrocele surgery", correct: false },
      { text: "Resection of intestinal fistula", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Clear and Haemoserous discharge' comes under which grade of Southampton wound grading system",
    answers: [
      { text: "III", correct: true },
      { text: "IV", correct: false },
      { text: "V", correct: false },
      { text: "II", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following are true about wound dehiscence, EXCEPT:",
    answers: [
      { text: "It typically occurs on postoperative day 3", correct: true },
      { text: "Salmon colored fluid coming out of the wound is the first sign of wound dehiscence", correct: false },
      { text: "If evisceration occurs after wound dehiscence emergency abdominal closure is required", correct: false },
      { text: "Reoperation is needed to avoid peritonitis.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Tensile strength of wound becomes normal after:",
    answers: [
      { text: "Never", correct: true },
      { text: "4 months", correct: false },
      { text: "6 months", correct: false },
      { text: "Tensile strength of wound becomes normal after:", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pyrexia due to wound infection occurs commonly after ?",
    answers: [
      { text: "5th Post OP day", correct: true },
      { text: "3rd Post OP day", correct: false },
      { text: "4th Post OP day", correct: false },
      { text: "2nd Post OP day", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following are the principles of negative pressure wound therapy except:",
    answers: [
      { text: "Clearance of infection", correct: true },
      { text: "Microdeformation of wound", correct: false },
      { text: "Decreased edem", correct: false },
      { text: "Stabilization of wound environment", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Cellulitis is most commonly caused by ?",
    answers: [
      { text: "Streptococcus", correct: true },
      { text: "H.Influenza", correct: false },
      { text: "Clostridium", correct: false },
      { text: "Staphylococcus epidermidis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Most common nosocomial infection is ?",
    answers: [
      { text: "Urinary tract infection", correct: true },
      { text: "Skin and soft tissue infection", correct: false },
      { text: "Surgical site infection", correct: false },
      { text: "Respiratory tract infection", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is true regarding 'ebb' and 'flow' phase of physiological response to injury?",
    answers: [
      { text: "The 'ebb' phase is characterised by Hypovolemia, Hypothermia and low BMR", correct: true },
      { text: "The ebb' phase involves mobilisation of body stores for recovery and repair", correct: false },
      { text: "The 'ebb' phase lasts for approximately 6-12 hrs.", correct: false },
      { text: "The 'flow' phase lasts for 24-48 hrs.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Cellulitis is a spreading bacterial infection of the skin and the tissues immediately beneath the skin. The initial symptoms of cellulitis include redness of the skin and which of the following sensations?",
    answers: [
      { text: "pain", correct: true },
      { text: "coolness", correct: false },
      { text: "itching", correct: false },
      { text: "tingling", correct: false },
      { text: "edema", correct: false },
    ],
  },
  {
    question: "Which of the following body parts is the most common location for cellulitis to develop?",
    answers: [
      { text: "leg", correct: true },
      { text: "face", correct: false },
      { text: "trunk", correct: false },
      { text: "arm", correct: false },
      { text: "abdomen", correct: false },
    ],
  },
  {
    question: "Which of the following statements about cellulitis is NOT true?",
    answers: [
      { text: "laboratory indentification of bacteria from the skin is usually required", correct: true },
      { text: "cellulitis is most often caused by Streptococcus", correct: false },
      { text: "individuals with rapidly spreading cellulitis are usually hospitalized and given antibiotics by vein", correct: false },
      { text: "symptoms usually disappear after a few days of antibiotic therapy", correct: false },
      { text: "cellulitis is most often caused by Staphylococcus", correct: false },
    ],
  },
  {
    question: "Generalized hypercementesis is seen in:",
    answers: [
      { text: "paget's disease", correct: true },
      { text: "hypophosphatasia", correct: false },
      { text: "fibrous dysplasia", correct: false },
      { text: "cherubism", correct: false },
      { text: "cleft palate", correct: false },
    ],
  },
  {
    question: "Class III malocclusion is seen in all of the following except:",
    answers: [
      { text: "pierre robinson syndrome", correct: true },
      { text: "cleft palate", correct: false },
      { text: "cleidocranial dysplasia", correct: false },
      { text: "craniofacial dysostosis", correct: false },
      { text: "hyperthyroidism", correct: false },
    ],
  },
  {
    question: "The histopathology of osteopetrosis shows:",
    answers: [
      { text: "endosteal bone formation and lack of normal bone resorption", correct: true },
      { text: "periosteal bone formation and lack of normal bone resoption", correct: false },
      { text: "persence of extra collagen fibres and less calcification resulting in resistance of bones to fracture", correct: false },
      { text: "presence of numerous osteoclasts and a few osteoblasts", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most common complication following rheumatoid arthritis of the TMJ is:",
    answers: [
      { text: "ankylosis", correct: true },
      { text: "synovial chondromatosis", correct: false },
      { text: "subluxation", correct: false },
      { text: "osteoarthritis", correct: false },
      { text: "osteosclerosis", correct: false },
    ],
  },
  {
    question: "A child with Down's syndrome has Moon faces, retarded mentally and which of the facial characteristic:",
    answers: [
      { text: "maxillary hypoplasia", correct: true },
      { text: "mandibular prognathism", correct: false },
      { text: "mandibular retrognathia", correct: false },
      { text: "maxillary prognathism", correct: false },
      { text: "hyperparathyroidism", correct: false },
    ],
  },
  {
    question: "A non-neoplastic hereditary bone lesion, histologically similar to central giant cell granuloma affects children and shows, a bilateral involvement of the jaws with eye to heaven appearance clinically is:",
    answers: [
      { text: "cherubism", correct: true },
      { text: "fibrous dysplasia", correct: false },
      { text: "craniofacial dysostosis", correct: false },
      { text: "chondro-ectodermal dysplasia", correct: false },
      { text: "osteosclerosis", correct: false },
    ],
  },
  {
    question: "Which of the following terms stand for damage to the spinal cord during tertiary stage of syphilis?",
    answers: [
      { text: "Tabes dorsalis", correct: true },
      { text: "paresis", correct: false },
      { text: "malaise", correct: false },
      { text: "lymphadenopathy", correct: false },
      { text: "melioidosis", correct: false },
    ],
  },
  {
    question: "In which body part does the C. jejuni causes infection?",
    answers: [
      { text: "small and large intestine", correct: true },
      { text: "mouth", correct: false },
      { text: "stomach", correct: false },
      { text: "limbs", correct: false },
      { text: "esophagus", correct: false },
    ],
  },
  {
    question: "Which drug is used for the treatment of brucellosis in humans?",
    answers: [
      { text: "tetracycline", correct: true },
      { text: "erythromycin", correct: false },
      { text: "carbenicillin", correct: false },
      { text: "gentamicin", correct: false },
      { text: "clarithromycine", correct: false },
    ],
  },
  {
    question: "Which of the following capsular polysaccharides is used for preparing a vaccine against meningococcal meningitis?",
    answers: [
      { text: "serovar A and C", correct: true },
      { text: "serovar A", correct: false },
      { text: "serovar B", correct: false },
      { text: "serovar C", correct: false },
      { text: "serovar B and C", correct: false },
    ],
  },
  {
    question: "Thayer-Martin medium is used for isolation of organism for which disease?",
    answers: [
      { text: "gonorrhea", correct: true },
      { text: "gastroenteritis", correct: false },
      { text: "diphtheria", correct: false },
      { text: "meningococcal meningitis", correct: false },
      { text: "brucellosis", correct: false },
    ],
  },
  {
    question: "Bedsores are distinguished:",
    answers: [
      { text: "endogenous and exogenous", correct: true },
      { text: "hidden and explicit", correct: false },
      { text: "iatrogenic and pathological", correct: false },
      { text: "erythematous, bullous, phlegmonous and necrotic", correct: false },
      { text: "acute, subacute, chronic and recurrent", correct: false },
    ],
  },
  {
    question: "An external artifical fistula is:",
    answers: [
      { text: "gastrostomy", correct: true },
      { text: "tracheoesophageal", correct: false },
      { text: "arteriovenous shunt", correct: false },
      { text: "choledohodenoanastomosis", correct: false },
      { text: "urachus", correct: false },
    ],
  },
  {
    question: "Pale phlegmasia is a thrombosis of the iliac veins, accompanied by:",
    answers: [
      { text: "persistent arterial spasm", correct: true },
      { text: "thrombosis of the entire venous bed of the lower extremities", correct: false },
      { text: "thromboembolism of the femoral arteries", correct: false },
      { text: "obliterating endarteritis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Blue phlegmasia is a thrombosis of the iliac veins, accompanied by:",
    answers: [
      { text: "thrombosis of the entire venous bed of the lower extremities", correct: true },
      { text: "persistent arterial spasm", correct: false },
      { text: "thromboembolism of the femoral arteries", correct: false },
      { text: "obliterating endarteritis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In case of obliterating endarteritis, all operations are performed except:",
    answers: [
      { text: "dilation of the vessel using a Fogarty probe", correct: true },
      { text: "amputations", correct: false },
      { text: "sympathectomy", correct: false },
      { text: "bypass surgery", correct: false },
      { text: "thrombintimectomy", correct: false },
    ],
  },
  {
    question: "In case of nonspecific gangrene develops:",
    answers: [
      { text: "thrombosis or embolism of a large vessel", correct: true },
      { text: "clostridial infection", correct: false },
      { text: "syphilis", correct: false },
      { text: "ergot poisoning", correct: false },
      { text: "diabetes mellitus", correct: false },
    ],
  },
  {
    question: "The 1st stage of pharmacotherapy of pain is prescribed for:",
    answers: [
      { text: "low pain intensity (assessed by the patient)", correct: true },
      { text: "severe pain intensity (assessed by the patient)", correct: false },
      { text: "moderate to severe pain intensity (assessed by the patient)", correct: false },
      { text: "the highest intensity of pain (assessed by a doctor)", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In neuroleptanalgesia, a combination is used:",
    answers: [
      { text: "droperidol with fentanyl", correct: true },
      { text: "aminazine with analgin", correct: false },
      { text: "ditiline with relanium", correct: false },
      { text: "fentanyl with promedol", correct: false },
      { text: "ditiline with promedol", correct: false },
    ],
  },
  {
    question: "Adjuvant analgesics are drugs:",
    answers: [
      { text: "the direct purpose of which is not related to anesthesia, but in some situations help to reduce pain", correct: true },
      { text: "the direct purpose of which is associated with anesthesia", correct: false },
      { text: "from the group of narcotic painkillers", correct: false },
      { text: "from the NSAID group", correct: false },
      { text: "from antibiotic group", correct: false },
    ],
  },
  {
    question: "The main difference between a dysfunctional type of pain is that:",
    answers: [
      { text: "with a traditional examination, it is not possible to identify the cause of pain or organic diseases that could explain its origin", correct: true },
      { text: "the structures of the nervous system are damaged ", correct: false },
      { text: "nociceptors are activated", correct: false },
      { text: "there are visible organic damages", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "To assess the intensity of pain and the effectiveness of treatment, it is recommended:",
    answers: [
      { text: "apply special scales", correct: true },
      { text: "apply duplex angioscanning", correct: false },
      { text: "do not register the localization of pain", correct: false },
      { text: "perform periodic CT scans of the pain source", correct: false },
      { text: "do not register the type of pain", correct: false },
    ],
  },
  {
    question: "For intercostal anesthesia, an anesthetic is used in a concentration of:",
    answers: [
      { text: "0.0025", correct: true },
      { text: "0.01", correct: false },
      { text: "0.03", correct: false },
      { text: "0.035", correct: false },
      { text: "0.05", correct: false },
    ],
  },
  {
    question: "Anesthesia according to Brown is used:",
    answers: [
      { text: "during operations on the abdominal cavity", correct: true },
      { text: "during operations on the upper limb", correct: false },
      { text: "with renal colic", correct: false },
      { text: "with fractures of the lower extremities", correct: false },
      { text: "during surgery on the pleural surgery", correct: false },
    ],
  },
  {
    question: "Conductor anesthesia includes:",
    answers: [
      { text: "intercostal", correct: true },
      { text: "retromammar", correct: false },
      { text: "case", correct: false },
      { text: "internal", correct: false },
      { text: "infiltrative", correct: false },
    ],
  },
  {
    question: "To prolong the effect of infiltration anesthesia, an anesthetic per 100ml is added:",
    answers: [
      { text: "a small amount of adrenaline", correct: true },
      { text: "a small amount of analgin", correct: false },
      { text: "a small amount of ketorolac", correct: false },
      { text: "a small amount of promedol", correct: false },
      { text: "a small amount of atropine", correct: false },
    ],
  },
  {
    question: "When using 0,25% novocaine solution, the volume of solution used should not exceed:",
    answers: [
      { text: "800ml in 1 hour", correct: true },
      { text: "200ml in 1 hour", correct: false },
      { text: "300ml in 1 hour", correct: false },
      { text: "500ml in 1 hour", correct: false },
      { text: "1200ml inn1 hour", correct: false },
    ],
  },
  {
    question: "The air duct during anesthesia is used for:",
    answers: [
      { text: "tongue retention warnings", correct: true },
      { text: "prevention of aspiration of foreign bodies", correct: false },
      { text: "laryngospasm prevention", correct: false },
      { text: "tracheal intubation", correct: false },
      { text: "bronchospasm prevention", correct: false },
    ],
  },
  {
    question: "Which of the following is the best guide for fluid resuscitation in shock?",
    answers: [
      { text: "CVP", correct: true },
      { text: "Urine output", correct: false },
      { text: "Pulse rate", correct: false },
      { text: "Pulse volume", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The way to combat clinical death as a complication of anesthesia is:",
    answers: [
      { text: "jet blood transfusion", correct: true },
      { text: "heart massage", correct: false },
      { text: "the introduction of cardiac glycosides", correct: false },
      { text: "the introduction of steroid hormones", correct: false },
      { text: "nothing to do", correct: false },
    ],
  },
  {
    question: "Artificial arterial hypertension is used for:",
    answers: [
      { text: "to reduce blood loss", correct: true },
      { text: "to increase the body's resistance to oxygen", correct: false },
      { text: "to prevent surgical shock", correct: false },
      { text: "to relax muscles", correct: false },
      { text: "to deepen anesthesia", correct: false },
    ],
  },
  {
    question: "Which of the following is considered balanced resuscitation?",
    answers: [
      { text: "Allow permissible hypotension", correct: true },
      { text: "Maintain Ph by ensuring acid- base balance", correct: false },
      { text: "Fluid resuscitation by giving colloids and 14.7% crystalloids", correct: false },
      { text: "Maintaining airway, breathing and circulation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In case of clearing airway one of the following is not included: ",
    answers: [
      { text: "Head lift", correct: true },
      { text: "Neck tilt", correct: false },
      { text: "Mouth gag", correct: false },
      { text: "Chin lift", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Best parameter to assess the efficacy of fluid resuscitation in a shock patient is?",
    answers: [
      { text: "Urine output", correct: true },
      { text: "Pulse rate.", correct: false },
      { text: "CVP", correct: false },
      { text: "Cardiac output", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old man is admitted after severing his arm on industrial machinery. His airway is patent and there is no identifiable hindrance to breathing. His pulse is 110 beats/min, blood pressure is 130/105 mm Hg, and respiratory rate is 25 breaths/min. Which stage of shock is this patient in? ",
    answers: [
      { text: "Class II", correct: true },
      { text: "Class III", correct: false },
      { text: "Class IV", correct: false },
      { text: "Class I", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the most complete definition of the term \"bandage\"?",
    answers: [
      { text: "a complex of means of prolonged exposure to a pathological focus", correct: true },
      { text: "a complex of means used to fix the dressing", correct: false },
      { text: "a complex of means used to create pressure on the body area in order to stop venous bleeding", correct: false },
      { text: "a complex of means used to hold the damaged part of the body (most often limbs) in the required position", correct: false },
      { text: "a complex of funds used to ensure long-term", correct: false },
    ],
  },
  {
    question: "Which bandage is applied in case of the extensive chest injuries?",
    answers: [
      { text: "spiral", correct: true },
      { text: "occlusive", correct: false },
      { text: "cruciform", correct: false },
      { text: "Dezo", correct: false },
      { text: "spikelike", correct: false },
    ],
  },
  {
    question: "Which bandage is used to fix the lower jaw?",
    answers: [
      { text: "a bandage \"bridle\"", correct: true },
      { text: "a bandage \"cap\"", correct: false },
      { text: "a spike-shaped bandage", correct: false },
      { text: "a cruciform bandage", correct: false },
      { text: "a circular bandage", correct: false },
    ],
  },
  {
    question: "What is better to use after opening the carbuncle on the back of the neck?",
    answers: [
      { text: "a cruciform bandage", correct: true },
      { text: "a bandage \"cap\"", correct: false },
      { text: "a bandage \"bridle\"", correct: false },
      { text: "a returning bandage", correct: false },
      { text: "Hippocratic cap", correct: false },
    ],
  },
  {
    question: "The method of preventing the penetration of microbes into a wound or body during diagnostic or therapeutic manipulation is called: ",
    answers: [
      { text: "asepsis", correct: true },
      { text: "antiseptics", correct: false },
      { text: "disinfection", correct: false },
      { text: "sterilization", correct: false },
      { text: "utilization", correct: false },
    ],
  },
  {
    question: "What percentage of hydrogen peroxide is used for sterilization of the instruments?",
    answers: [
      { text: "0.06", correct: true },
      { text: "0.04", correct: false },
      { text: "0.03", correct: false },
      { text: "0.02", correct: false },
      { text: "0.01", correct: false },
    ],
  },
  {
    question: "How often is wet cleaning of the wards carried out?",
    answers: [
      { text: "daily, morning and evening", correct: true },
      { text: "every morning", correct: false },
      { text: "every evening", correct: false },
      { text: "every afternoon", correct: false },
      { text: "as sson as it gets dirty", correct: false },
    ],
  },
  {
    question: "In case of blood contamination of the skin, the skin cleaning begins with:",
    answers: [
      { text: "skin cleaning with alcohol antiseptic", correct: true },
      { text: "double cleaning of the skin with an alcohol antiseptic", correct: false },
      { text: "with hand washing with soap and water", correct: false },
      { text: "triple cleaning of the skin with an alcohol antiseptic", correct: false },
      { text: "with hand washing with water", correct: false },
    ],
  },
  {
    question: "In case of the contact with HIV-infected material, the skin cleaning is carried out with: ",
    answers: [
      { text: "70% alcohol", correct: true },
      { text: "96% alcohol", correct: false },
      { text: "3% hydrogen peroxide solution", correct: false },
      { text: "6% hydrogen peroxide solution", correct: false },
      { text: "water", correct: false },
    ],
  },
  {
    question: "How to perform all manipulations in which contactwith blood is possible?",
    answers: [
      { text: "wearing gloves", correct: true },
      { text: "wearing safety glasses", correct: false },
      { text: "wearing a medical mask", correct: false },
      { text: "wearing a surgical gown", correct: false },
      { text: "with clean hands", correct: false },
    ],
  },
  {
    question: "What is used for a direct action on microorganisms?",
    answers: [
      { text: "antibiotics", correct: true },
      { text: "therapeutic serums", correct: false },
      { text: "antitoxins", correct: false },
      { text: "gamma globulins", correct: false },
      { text: "vitamins", correct: false },
    ],
  },
  {
    question: "The main method of sterilization of cutting tools is:",
    answers: [
      { text: "cold chemical method", correct: true },
      { text: "chemical cleaning", correct: false },
      { text: "autoclaving", correct: false },
      { text: "gas sterilization", correct: false },
      { text: "UV-radiation", correct: false },
    ],
  },
  {
    question: "The main method of sterilization of non-cutting metal tools is:",
    answers: [
      { text: "autoclaving", correct: true },
      { text: "gas sterilization", correct: false },
      { text: "chemical cleaning", correct: false },
      { text: "cold chemical method", correct: false },
      { text: "UV-radiation", correct: false },
    ],
  },
  {
    question: "Which instruments are sterilized in a dry-burning cabinet?",
    answers: [
      { text: "tweezers, probe", correct: true },
      { text: "probe, syringe", correct: false },
      { text: "mirror", correct: false },
      { text: "tweezers", correct: false },
      { text: "cotton balls", correct: false },
    ],
  },
  {
    question: "The surface of the operational table is cleaned with a disinfectant solution:",
    answers: [
      { text: "after receiving each patient", correct: true },
      { text: "twice a day", correct: false },
      { text: "once a day", correct: false },
      { text: "three times a day", correct: false },
      { text: "after the end of the operation", correct: false },
    ],
  },
  {
    question: "The surfaces of the surgical tables in case of blood contamination is cleaned with 3% chloramine solution:",
    answers: [
      { text: "twice with an interval of 15 minutes", correct: true },
      { text: "twice with an interval of 10 minutes", correct: false },
      { text: "twice with an interval of 20 minutes", correct: false },
      { text: "twice with an interval of 5 minutes", correct: false },
      { text: "once", correct: false },
    ],
  },
  {
    question: "How is called the bleeding, in which blood accumulates in the body cavity?",
    answers: [
      { text: "internal", correct: true },
      { text: "venous", correct: false },
      { text: "abdominal", correct: false },
      { text: "local ", correct: false },
      { text: "capillary", correct: false },
    ],
  },
  {
    question: "If the blood has a bright red color and beats from the wound in a pulsating stream, then the bleeding is called:",
    answers: [
      { text: "arterial", correct: true },
      { text: "venous", correct: false },
      { text: "abdominal", correct: false },
      { text: "parenchymal", correct: false },
      { text: "capillary", correct: false },
    ],
  },
  {
    question: "What is the main purpose of the first aid for bleeding at the accident?",
    answers: [
      { text: "temporary blood stop", correct: true },
      { text: "anesthesia", correct: false },
      { text: "ambulance call", correct: false },
      { text: "psychological support of the victim", correct: false },
      { text: "call the surgeon", correct: false },
    ],
  },
  {
    question: "Which of the following can harm the victim with nosebleeds?",
    answers: [
      { text: "a warm warmer on the affected area", correct: true },
      { text: "cold lotion on the bridge of the nose", correct: false },
      { text: "compression of the nose", correct: false },
      { text: "a plastic bag with ice on the nose area", correct: false },
      { text: "nothing", correct: false },
    ],
  },
  {
    question: "After tooth extraction, to prevent bleeding,it is necessary to:",
    answers: [
      { text: "clamp cotton wool at the site of removal", correct: true },
      { text: "rinse the wound every hour", correct: false },
      { text: "rinse the wound with chlorhexidine", correct: false },
      { text: "apply an alcohol swab", correct: false },
      { text: "seal with a Band-aid", correct: false },
    ],
  },
  {
    question: "The patient's body temperature rose to 39C during blood transfusion. There was a chill, a tremor. What type of reaction is observed in the patient?",
    answers: [
      { text: "febrile non-hemolytic", correct: true },
      { text: "allergic", correct: false },
      { text: "hypotensive", correct: false },
      { text: "hypertensive", correct: false },
      { text: "acute hemolytic", correct: false },
    ],
  },
  {
    question: "During what period of blood transfusion do severe transfusion reactions occur and the nurse needs to be especially careful?",
    answers: [
      { text: "during the first 15 minutes of transfusion", correct: true },
      { text: "during the first 10 minutes of transfusion", correct: false },
      { text: "during the first 20 minutes of transfusion", correct: false },
      { text: "within an hour of transfusion", correct: false },
      { text: "within 3 hours of transfusion", correct: false },
    ],
  },
  {
    question: "The patient has a serious condition with fever, rash, liver dysfunction, diarrhea and pancytopenia. The condition developed 2 weeks after the blood transfusion for no other reason. What could it be?",
    answers: [
      { text: "the \"transplant-versus-host\" reaction", correct: true },
      { text: "febrile non-hemolytic reaction", correct: false },
      { text: "acute hemolytic reaction", correct: false },
      { text: "hypertensive", correct: false },
      { text: "hypotensive", correct: false },
    ],
  },
  {
    question: "How long can unfrozen plasma be stored at a temperature of 2-6C?",
    answers: [
      { text: "24 hours", correct: true },
      { text: "12 hours", correct: false },
      { text: "8 hours", correct: false },
      { text: "4 hours", correct: false },
      { text: "2 hours", correct: false },
    ],
  },
  {
    question: "Which of the following models of the \"surgeon-patient\" relationship is the most rational from the point of view of the interests of patients?",
    answers: [
      { text: "the \"paternalistic model\" - the surgeon as a \"spiritual father\"", correct: true },
      { text: "the \"engineering and technical model\" - the surgeon as a specialist", correct: false },
      { text: "the \"cooperative model\" - the cooperation of the surgeon and the patient", correct: false },
      { text: "the \"contractual model\" is the surgeon as a \"provider\" ", correct: false },
      { text: "the patient as a \"consumer of medical services\"", correct: false },
    ],
  },
  {
    question: "The observance of medical confidentiality is necessary for:",
    answers: [
      { text: "all of the above", correct: true },
      { text: "protection of the inner world of a patient, his autonomy", correct: false },
      { text: "protection of the social and economic interests of the patient", correct: false },
      { text: "creating a basis for trust and frankness of the surgeon-patient relationship", correct: false },
      { text: "maintaining the prestige of the medical profession", correct: false },
    ],
  },
  {
    question: "The main model of the relationship between a surgeon and a patient in modern society is:",
    answers: [
      { text: "informed consent", correct: true },
      { text: "paternalistic", correct: false },
      { text: "contractual", correct: false },
      { text: "\"engineering\"", correct: false },
      { text: "negotiable", correct: false },
    ],
  },
  {
    question: "What is the main purpose of the professional activity of a surgeon?",
    answers: [
      { text: "saving and preserving human life", correct: true },
      { text: "scientific objectives", correct: false },
      { text: "social trust in the surgeons", correct: false },
      { text: "respect of colleagues", correct: false },
      { text: "material benefit", correct: false },
    ],
  },
  {
    question: "Why should the surgeon take the informed consent from a patient?",
    answers: [
      { text: "all of the above", correct: true },
      { text: "ensure that the person is treated with respect as an autonomous person", correct: false },
      { text: "minimize the possibility of moral damage", correct: false },
      { text: "minimize the possibility of material damage", correct: false },
      { text: "create conditions conductive to increase the sense of responsibility of surgeon for the moral and physical well-being of patients", correct: false },
    ],
  },
  {
    question: "Does the patient have the right to receive complete and comprehensive information about his health status?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
      { text: "depends on the disease", correct: false },
      { text: "only the guardian", correct: false },
      { text: "only the attorney", correct: false },
    ],
  },
  {
    question: "What does the examination of the surgical patient begin with?",
    answers: [
      { text: "clarification of complaints", correct: true },
      { text: "an external examination", correct: false },
      { text: "clarification of the history of the disease", correct: false },
      { text: "life history", correct: false },
      { text: "objective research", correct: false },
    ],
  },
  {
    question: "Which section are the data from previous additional research methods described in the medical history?",
    answers: [
      { text: "history of the present disease", correct: true },
      { text: "life history", correct: false },
      { text: "general information about the patient", correct: false },
      { text: "general objective research", correct: false },
      { text: "results of additional research methods", correct: false },
    ],
  },
  {
    question: "How should the medical insurance be described in the medical history?",
    answers: [
      { text: "indicate the place of work and the presence (absence) of the disability sheet on hand ", correct: true },
      { text: "indicate the annual insurance deductions from wages", correct: false },
      { text: "indicate the amount of the maximum insurance payment", correct: false },
      { text: "list the insurance companies in which the patient was insured", correct: false },
      { text: "indicate the total insurance premium of the patient for the entire time", correct: false },
    ],
  },
  {
    question: "How does the description of the local status of a patient with acute appendicitis imply? ",
    answers: [
      { text: "a detailed description of the results of an objective examination of the entire digestive system", correct: true },
      { text: "a description of the specific symptoms of acute appendicitis", correct: false },
      { text: "a detailed description of the patient's complaints", correct: false },
      { text: "a description of the development of the disease in chronological order", correct: false },
      { text: "a detailed description of the results of additional research methods", correct: false },
    ],
  },
  {
    question: "How fast should the clinical diagnosis in emergency patients be formulated?",
    answers: [
      { text: "during the first day", correct: true },
      { text: "immediately upon admission", correct: false },
      { text: "within the next 6 hours", correct: false },
      { text: "within 12 hours", correct: false },
      { text: "after 3 days", correct: false },
    ],
  },
  {
    question: "Which section of the medical history is the information about previous illnesses and injuries described?",
    answers: [
      { text: "life history", correct: true },
      { text: "complaints", correct: false },
      { text: "history of the disease development", correct: false },
      { text: "examination of the place of the disease", correct: false },
      { text: "additional examination", correct: false },
    ],
  },
  {
    question: "What is the preoperative period?",
    answers: [
      { text: "the time from the patient's admission to a medical institution to the beginning of the operation", correct: true },
      { text: "the time from diagnosis to surgery", correct: false },
      { text: "the last day of active preparation on the eve of the operation", correct: false },
      { text: "ensuring the sterility of tools and materials", correct: false },
      { text: "carrying out all possible methods of examination", correct: false },
    ],
  },
  {
    question: "The main tasks of the preoprative period include:",
    answers: [
      { text: "to establish a diagnosis, to prepare the patient for the surgery", correct: true },
      { text: "to calculate the duration of the operation ", correct: false },
      { text: "to carry out infusion therapy ", correct: false },
      { text: "to carry out preventive antibiotic therapy", correct: false },
      { text: "to calculate the postoperative period", correct: false },
    ],
  },
  {
    question: "Which investigation methods are mandatory before the surgery?",
    answers: [
      { text: "ECG, general urinalysis, clinical blood test, blood glucose", correct: true },
      { text: "tomography, echocardiography", correct: false },
      { text: "ECG, ultrasound", correct: false },
      { text: "chest and abdominal X-ray, blood test", correct: false },
      { text: "rheovasography of the lower extremities, dopplerography of the veins of the lower extremities", correct: false },
    ],
  },
  {
    question: "What should be applied for the prevention of thrombolic complications after operations in the preoperative period? ",
    answers: [
      { text: "elastic compression of the lower extremities", correct: true },
      { text: "antispasmodics, disaggregants", correct: false },
      { text: "fibrinolytics", correct: false },
      { text: "massive infusion therapy", correct: false },
      { text: "nothing", correct: false },
    ],
  },
  {
    question: "What are the contraindications for urgent surgery in among the listed?",
    answers: [
      { text: "stroke, severe anemia, myocardial infarction", correct: true },
      { text: "HIV infection, hepatitis B, hepatitis C", correct: false },
      { text: "mechanical jaundice, kidney stone disease", correct: false },
      { text: "liver cirrhosis", correct: false },
      { text: "there are no indications among the listed", correct: false },
    ],
  },
  {
    question: "A mandatory measure carried out by the patient before an emergency operation (to prepare the gastrointestinal tract) is:",
    answers: [
      { text: "evacuation of stomach contents by probe", correct: true },
      { text: "the use of laxatives", correct: false },
      { text: "siphon enema", correct: false },
      { text: "cleansing enema", correct: false },
      { text: "fibrogastroscopy with evacuation of stomach contents", correct: false },
    ],
  },
  {
    question: "Define the concept of the surgical operation:",
    answers: [
      { text: "performing special mechanical effects on organs or tissues for therapeutic or diagnostic purposes", correct: true },
      { text: "dissection of tissues of a living organism using a laser", correct: false },
      { text: "dissection of tissues of a living organism with a scalpel", correct: false },
      { text: "exposure of the pathological focus by dissection of tissues", correct: false },
      { text: "dissection of tissues of a living organism with a electrocoagulator", correct: false },
    ],
  },
  {
    question: "According to the urgency of execution, the following types of operations are distinguished:",
    answers: [
      { text: "planned, emergency", correct: true },
      { text: "short-term, long-term", correct: false },
      { text: "radical, palliative", correct: false },
      { text: "open, minimally invasive", correct: false },
      { text: "simultaneous operations", correct: false },
    ],
  },
  {
    question: "Specify the stages of the surgical operation sequentially:",
    answers: [
      { text: "surgical access, operative reception", correct: true },
      { text: "wound suturing, surgical admission, surgical access", correct: false },
      { text: "operative reception, surgical access", correct: false },
      { text: "surgery, stopping bleeding, suturing the wound", correct: false },
      { text: "operative reception, suturing the wound", correct: false },
    ],
  },
  {
    question: "What manipulation can be attributed to diagnostic operations?",
    answers: [
      { text: "trial laparotomy", correct: true },
      { text: "laryngoscopy", correct: false },
      { text: "appendectomy", correct: false },
      { text: "correction of shoulder dislocation", correct: false },
      { text: "finger examination of the rectum", correct: false },
    ],
  },
  {
    question: "Which period do we say the early postoperative period? ",
    answers: [
      { text: "the time from completion of the operation to discharge of the patient", correct: true },
      { text: "the first day after the operation", correct: false },
      { text: "the first 3 to 5 days after surgery", correct: false },
      { text: "the first 10-12 days after surgery", correct: false },
      { text: "the time from the patient's admission to a medical institution to the beginning of the operation", correct: false },
    ],
  },
  {
    question: "Which period do we say the late postoperative period? ",
    answers: [
      { text: "the time from the moment of discharge of the patient to his recovery", correct: true },
      { text: "the time interval from the end of the operation to recovery", correct: false },
      { text: "the first day after the operation", correct: false },
      { text: "the time from the patient's admission to a medical institution to the beginning of the operation", correct: false },
      { text: "the last days of the patient discharge", correct: false },
    ],
  },
  {
    question: "Among the early complications in the first day after surgery, the most likely are:",
    answers: [
      { text: "bleeding", correct: true },
      { text: "pneumonia", correct: false },
      { text: "suppuration of the wound", correct: false },
      { text: "acute renal failure", correct: false },
      { text: "postoperative hernia", correct: false },
    ],
  },
  {
    question: "Clinical signs of impaired water-electrolyte balance in the postoperative period are:",
    answers: [
      { text: "thirst, dry skin", correct: true },
      { text: "dry wheezing in the lungs", correct: false },
      { text: "dulling of percussion sound", correct: false },
      { text: "no intestinal noises, no peristalsis", correct: false },
      { text: "edema, ascites, hydrothorax", correct: false },
    ],
  },
  {
    question: "After prolonged and traumatic interventions on the abdominal organs in the postoperative period, a typical complication is:",
    answers: [
      { text: "paresis of the gastrointestinal tract", correct: true },
      { text: "oliguria or anuria", correct: false },
      { text: "peritonitis", correct: false },
      { text: "aspiration pneumonia", correct: false },
      { text: "thromboembolism of mesenteric vessels", correct: false },
    ],
  },
  {
    question: "Prolonged bed rest in the postoperative period can lead to the following complications:",
    answers: [
      { text: "pneumonia, venous thrombosis of the lower extremities", correct: true },
      { text: "laigature fistulas, seromas", correct: false },
      { text: "suppuration of the wound", correct: false },
      { text: "acute respiatory failure, cardiac arrhythmias", correct: false },
      { text: "edema of the lower extremities, ascites", correct: false },
    ],
  },
  {
    question: "Give the most general and precise definition of the concept - wound:",
    answers: [
      { text: "open damage, violation of the integrity of the outer integuments with possible damage to underlying tissues (organs)", correct: true },
      { text: "tissue damage with destruction of blood vessels and nerve elements", correct: false },
      { text: "damage to soft tissues by piercing and cutting tools", correct: false },
      { text: "mechanical damage to the outer integuments with possible damage to underlying tissues", correct: false },
      { text: "mechanical damage to the skin, underlying tissues and organs", correct: false },
    ],
  },
  {
    question: "Which wounds do we say microbially contaminated?",
    answers: [
      { text: "any accidental wound", correct: true },
      { text: "an operating wound", correct: false },
      { text: "a wound after opening an abscess", correct: false },
      { text: "a wound with signs of inflammation without purulent discharge and necrosis", correct: false },
      { text: "a wound after incision for carbuncle", correct: false },
    ],
  },
  {
    question: "Which wounds do we say penetrating ones?",
    answers: [
      { text: "a wound that creates a message through the wound channel of the body cavity with the external environment", correct: true },
      { text: "an organ wound with penetration of its contentsinto the body cavity", correct: false },
      { text: "a through wound of a limb segment", correct: false },
      { text: "a wound with penetration of foreign bodies into its cavity", correct: false },
      { text: "any wound", correct: false },
    ],
  },
  {
    question: "First aid measures in case of injury are:",
    answers: [
      { text: "application of an aseptic bandage", correct: true },
      { text: "washing the wound with alcohol", correct: false },
      { text: "final stop of bleeding", correct: false },
      { text: "revision of the wound, removal of foreign bodies", correct: false },
      { text: "application of a bandage with antiseptic ointments", correct: false },
    ],
  },
  {
    question: "Choose the most correct and complete definition of the primary surgical treatment of a wound:",
    answers: [
      { text: "the first surgery on the skin, performed to prevent wound infection and create conditions for healing by primary tension", correct: true },
      { text: "washing the wound with antiseptics and treating the edges of the wound with a scalpel or alcohol", correct: false },
      { text: "revision of the wound with a tool, washing and suturing it", correct: false },
      { text: "suturing of a gaping wound", correct: false },
      { text: "an operation performed to prevent wound infection, which consists in stopping bleeding, removing infected tissues, foreign bodies and microorganisms with mandatory suturing of the wound", correct: false },
    ],
  },
  {
    question: "The main method of primary surgical treatment of a wound, ensuring the achievement of its main goal (Prevetion of the development of a wound infection):",
    answers: [
      { text: "removing non-viable tissues", correct: true },
      { text: "suturing the wound", correct: false },
      { text: "treating the wound with antiseptics and antibiotics", correct: false },
      { text: "draining the wound cavity", correct: false },
      { text: "dissecting the wound", correct: false },
    ],
  },
  {
    question: "For the clinical picture of a furuncle in the stage pf formation and rejection of the purulent-necrotic rod is characterized by:",
    answers: [
      { text: "cone-shaped infiltrate with gray masses and ahir in the center", correct: true },
      { text: "pronounced edema without discoloration of the skin ", correct: false },
      { text: "a small area of soreness and hyperemia", correct: false },
      { text: "blisters with serous-hemorrhagic contents", correct: false },
      { text: "pronounced hyperemia of the skin with clear boundaries", correct: false },
    ],
  },
  {
    question: "Localization of a furuncle on the face is dangerous because of possible complications in the form of:",
    answers: [
      { text: "thrombosis of the cavernous sinus and purulent meningitis", correct: true },
      { text: "paresthesia on the affected side and cervical lymphadenitis", correct: false },
      { text: "rhinitis and sinusitis", correct: false },
      { text: "mumps and stomatitis", correct: false },
      { text: "trigeminal neuralgia", correct: false },
    ],
  },
  {
    question: "The development of the furunculosis is most predisposed to:",
    answers: [
      { text: "skin pollution, microtrauma, weakened immunity", correct: true },
      { text: "alcoholism and tobacco smoking ", correct: false },
      { text: "physical inactivity and high-calorie diet", correct: false },
      { text: "irregular diet, stress and physical activity", correct: false },
      { text: "contact with patients with pustular skin disease", correct: false },
    ],
  },
  {
    question: "The local treatment of a furuncle in the purulent stage of the necrotic rod is:",
    answers: [
      { text: "opening of the lesion, rod removal, drainage", correct: true },
      { text: "semi-alcoholic compresses", correct: false },
      { text: "dry heat and physiotherapy", correct: false },
      { text: "rod removal and primary suture", correct: false },
      { text: "wide excision of the inflammatory lesion to the fascia", correct: false },
    ],
  },
  {
    question: "Systemic etiopathogenetic therapy for furunculosis includes:",
    answers: [
      { text: "antibacterial therapy and immunocorrection", correct: true },
      { text: "normalization of acid-base balance", correct: false },
      { text: "normalization of water-electrolyte balance", correct: false },
      { text: "infusion therapy and forced diuresis", correct: false },
      { text: "hemostatic therapy and iron-containing drugs", correct: false },
    ],
  },
  {
    question: "In the stage of purulent melting, the main method of carbuncle treatment is:",
    answers: [
      { text: "surgical ", correct: true },
      { text: "homepathy", correct: false },
      { text: "physiotherapy", correct: false },
      { text: "puncture of the abscess with the introduction of antibiotics", correct: false },
      { text: "local application of the absorbents", correct: false },
    ],
  },
  {
    question: "For an abscess of superficial localization, the most characteristic local signs are:",
    answers: [
      { text: "pain, edema, local hyperemia and hyperthermia, fluctuation", correct: true },
      { text: "itching and cyanosis of the skin", correct: false },
      { text: "pain, the presence of a cone-shaped infiltrate", correct: false },
      { text: "pronounced hyperemia of the skin with clear boundaries", correct: false },
      { text: "rounded wound defect with scant purulent discharge", correct: false },
    ],
  },
  {
    question: "Hematogenous osteomyelitis is most typical for:",
    answers: [
      { text: "children from 1 to 18 years old", correct: true },
      { text: "children under 1 year old", correct: false },
      { text: "infants", correct: false },
      { text: "adults from 18 to 50 years old", correct: false },
      { text: "adults over 50 years old", correct: false },
    ],
  },
  {
    question: "All acute purulent diseases of bones and joints are characterized by:",
    answers: [
      { text: "increased level of C-reactive protein, ESR and WBC", correct: true },
      { text: "leukopenia", correct: false },
      { text: "leukocytosis, decreased level of ESR", correct: false },
      { text: "reducing the level of C-reactive protein", correct: false },
      { text: "leukopenia, increased level of ESR", correct: false },
    ],
  },
  {
    question: "To clarify the localization and prevalence of purulent cavity in chronic fistulous osteomyelitis, the following methods are used:",
    answers: [
      { text: "fistulography", correct: true },
      { text: "CT scan", correct: false },
      { text: "MRI", correct: false },
      { text: "chest X-ray", correct: false },
      { text: "abdominal X-ray", correct: false },
    ],
  },
  {
    question: "What groups of antibiotics are used in the treatment of purulent arthritis?",
    answers: [
      { text: "aminoglycosides", correct: true },
      { text: "carbapenems", correct: false },
      { text: "metronidazole", correct: false },
      { text: "fluoroquinolones", correct: false },
      { text: "macrolides", correct: false },
    ],
  },
  {
    question: "Which diagnostic method will allow to detect the earliest diagnosis of osteomyeilitis?",
    answers: [
      { text: "scintigraphy of skeletal bones", correct: true },
      { text: "CT scan", correct: false },
      { text: "MRI", correct: false },
      { text: "physical examination", correct: false },
      { text: "ultrasound", correct: false },
    ],
  },
  {
    question: "What is the causative agent of non-clostridial anaerobic infection?",
    answers: [
      { text: "fusobacterium", correct: true },
      { text: "streptococcus", correct: false },
      { text: "proteus", correct: false },
      { text: "klebsiella", correct: false },
      { text: "E.Coli", correct: false },
    ],
  },
  {
    question: "What is the predominant localization of the process in gas gangrene?",
    answers: [
      { text: "limbs", correct: true },
      { text: "head and neck", correct: false },
      { text: "trunk", correct: false },
      { text: "perineum", correct: false },
      { text: "intestines", correct: false },
    ],
  },
  {
    question: "What are the characteristic clinical signs of anaerobic infection of soft tissues?",
    answers: [
      { text: "edema, marbled skin pattern, gas formation ", correct: true },
      { text: "hyperemia of the skin with clear boundaries", correct: false },
      { text: "phlegmon with yellowish pus", correct: false },
      { text: "cold abscesses", correct: false },
      { text: "muscle fibrillation in the area of inflammation", correct: false },
    ],
  },
  {
    question: "Surgical treatment of Clostridial anaerobic infection uses:",
    answers: [
      { text: "wide dissection of the soft tissues of the affected area with excision of necrosis sites", correct: true },
      { text: "primary surgical treatment of the wound", correct: false },
      { text: "dissection of the skin over the sites of infiltration and fluctuation, drainage of fiber", correct: false },
      { text: "dissection of the skin and subcutaneous tissue in the place of the greatest accumulation of gases", correct: false },
      { text: "multiple incisions-notches of the skin", correct: false },
    ],
  },
  {
    question: "Wounds with gas gangrene are recommended to be tamponed with cotton tissues with:",
    answers: [
      { text: "hydrogen peroxide", correct: true },
      { text: "boric acid", correct: false },
      { text: "furacilin", correct: false },
      { text: "antibiotics", correct: false },
      { text: "methyluracil", correct: false },
    ],
  },
  {
    question: "Wound cleansing from necrotic tissues occurs due to:",
    answers: [
      { text: "enzymatic processes", correct: true },
      { text: "phagocytosis", correct: false },
      { text: "absorption into the vascular system", correct: false },
      { text: "revascularization of the tissue", correct: false },
      { text: "organization, germination by connective tissue", correct: false },
    ],
  },
  {
    question: "What should be used for faster lysis of necrotic tissues in a purulent wound?",
    answers: [
      { text: "trypsin", correct: true },
      { text: "antibiotics", correct: false },
      { text: "glucocorticoids", correct: false },
      { text: "methyluracil", correct: false },
      { text: "trichopol", correct: false },
    ],
  },
  {
    question: "In the local treatment of a purulent wound in the hydration phase, the use of bandages is indicated:",
    answers: [
      { text: "water-soluble ointments", correct: true },
      { text: "ointments based on fat", correct: false },
      { text: "ointments with steroid hormones", correct: false },
      { text: "isotonic sodium chloride", correct: false },
      { text: "solution of immunostimulants", correct: false },
    ],
  },
  {
    question: "The most informative instrumental method for diagnosing fistulas is:",
    answers: [
      { text: "MRI", correct: true },
      { text: "ultrasound examination", correct: false },
      { text: "CT scan", correct: false },
      { text: "laparoscopy", correct: false },
      { text: "fistulography", correct: false },
    ],
  },
  {
    question: "What is the prevention method of bed sores?",
    answers: [
      { text: "all of the above", correct: true },
      { text: "wiping the skin in places where bedsores may form with camphor alcohol", correct: false },
      { text: "elimination of creases on bed linen", correct: false },
      { text: "frequent flipping of patients", correct: false },
      { text: "placing inflatable circles under the bone protrusions", correct: false },
    ],
  },
  {
    question: "In the conservative treatment of trophic ulcers, limbs are necessary:",
    answers: [
      { text: "thorough toilet of the ulcerated surface and the skin around the ulcer", correct: true },
      { text: "bed rest, position with a lowered limb", correct: false },
      { text: "stopping the outflow of the discharge from the ulcer into the bandage", correct: false },
      { text: "bandages with salicylic ointment", correct: false },
      { text: "applying a warming compress to the ulcer", correct: false },
    ],
  },
  {
    question: "Adjuvant analgesics are drugs:",
    answers: [
      { text: "the direct purpose of which is not related to anesthesia, but in some situations help to reduce pain", correct: true },
      { text: "the direct purpose of which is associated with anesthesia", correct: false },
      { text: "from the group of narcotic painkillers", correct: false },
      { text: "from the NSAID group", correct: false },
      { text: "from antibiotic group", correct: false },
    ],
  },
  {
    question: "The pain history should contain information all, except to:",
    answers: [
      { text: "about the age of the patient", correct: true },
      { text: "the effect of pain on physical activity", correct: false },
      { text: "on the effectiveness of previous pain therapy", correct: false },
      { text: "about the analgesics used", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "As a conservative therapy for pain syndrome, WHO has proposed:",
    answers: [
      { text: "\"3-step ladder of anesthesia\"", correct: true },
      { text: "\"2-sterp ladder of anesthesia\"", correct: false },
      { text: "\"4-step ladder of anesthesia\"", correct: false },
      { text: "do not apply pain intensity assessment", correct: false },
      { text: "divide analgesics into paracetamol and non-paracetamol", correct: false },
    ],
  },
  {
    question: "A doctor who collects a history of pain should find out:",
    answers: [
      { text: "the effect of pain on the duration of night sleep", correct: true },
      { text: "about communication problems related to pain", correct: false },
      { text: "about the effect of pain on the possibility of eating", correct: false },
      { text: "on the influence of lunar cycles on the nature of pain", correct: false },
      { text: "about the menstrual cycle", correct: false },
    ],
  },
  {
    question: "The main difference between a dysfunctional type of pain is that:",
    answers: [
      { text: "with a traditional examination, it is not possible to identify the cause of pain or organic diseases that could explain its origin", correct: true },
      { text: "the structures of the nervous system are damaged", correct: false },
      { text: "nociceptors are activated", correct: false },
      { text: "there are visible organic damages", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "Ditilin belongs to the group of:",
    answers: [
      { text: "muscle relaxants", correct: true },
      { text: "sedatives", correct: false },
      { text: "analgesics", correct: false },
      { text: "neuroleptics", correct: false },
      { text: "antiadrenergics", correct: false },
    ],
  },
  {
    question: "For anesthesia with a face mask, you can use:",
    answers: [
      { text: "fluorotane", correct: true },
      { text: "promedol", correct: false },
      { text: "ditilin", correct: false },
      { text: "ketamine (calypsol)", correct: false },
      { text: "droperidol", correct: false },
    ],
  },
  {
    question: "Of the listed drugs for intravenous anesthesia, you can use:",
    answers: [
      { text: "ketamine, hexenal", correct: true },
      { text: "kefzol, claritin", correct: false },
      { text: "analgin, ", correct: false },
      { text: "nimesulide", correct: false },
      { text: "lidocaine, articaine", correct: false },
    ],
  },
  {
    question: "The advantage of endotracheal anesthesia over mask anesthesia is:",
    answers: [
      { text: "prevention of aspiration", correct: true },
      { text: "the absence of the toxic effect of an anesthesia", correct: false },
      { text: "ease of managing the depth of anesthesia", correct: false },
      { text: "ease of implementation", correct: false },
      { text: "prevention of cardiac arrest", correct: false },
    ],
  },
  {
    question: "When performing endotracheal anesthesia, the first action of the following is:",
    answers: [
      { text: "introductory anesthesia", correct: true },
      { text: "the introduction of muscle relaxants", correct: false },
      { text: "the use of ganglioblockers", correct: false },
      { text: "the use of supportive anesthesia", correct: false },
      { text: "intubation of the trachea", correct: false },
    ],
  },
  {
    question: "Introductory anesthesia is used:",
    answers: [
      { text: "to quickly put the patient to sleep without the stage of arousal", correct: true },
      { text: "for muscle relaxation", correct: false },
      { text: "to prevent hypotension", correct: false },
      { text: "to enhance the effect of supportive anesthesia", correct: false },
      { text: "to prevent paralysis of the respiratory center", correct: false },
    ],
  },
  {
    question: "Basic anesthesia is used to:",
    answers: [
      { text: "quickly enter anesthesia", correct: true },
      { text: "to eliminate emotional reactions before surgery", correct: false },
      { text: "to relax muscles", correct: false },
      { text: "to control vital body functions during surgery", correct: false },
      { text: "prevention of asphyxia during the operation", correct: false },
    ],
  },
  {
    question: "When using a closed method of respiratory ciculation mixtures must be provided with an air moisture absorber in the anesthetic apparatus:",
    answers: [
      { text: "carbon dioxide absorber", correct: true },
      { text: "an air moisture absorber", correct: false },
      { text: "volumeter", correct: false },
      { text: "safety valve", correct: false },
      { text: "manometer", correct: false },
    ],
  },
  {
    question: "The air duct during anesthesia is used for:",
    answers: [
      { text: "prevention of tongue entrapment", correct: true },
      { text: "prevention of aspiration of foreign bodies", correct: false },
      { text: "laryngospasm warnings", correct: false },
      { text: "bronchospasm warnings", correct: false },
      { text: "tracheal intubation", correct: false },
    ],
  },
  {
    question: "Sudden coronary death is based on:",
    answers: [
      { text: "ventricular fibrillation", correct: true },
      { text: "arterial hypertension", correct: false },
      { text: "ventricular hypertrophy", correct: false },
      { text: "centralization of blood circulation", correct: false },
      { text: "arterial hypotension", correct: false },
    ],
  },
  {
    question: "The way to combat clinical death as a complication of anesthesia is:",
    answers: [
      { text: "heart massage", correct: true },
      { text: "the introduction of cardiac glycosides", correct: false },
      { text: "the introduction of steroid hormones", correct: false },
      { text: "jet blood transfusion", correct: false },
      { text: "nothing to do", correct: false },
    ],
  },
  {
    question: "The presence of breathing in the patient during CPR is determined by:",
    answers: [
      { text: "tilting the cheek towards the patient's face", correct: true },
      { text: "counting respiratory movements", correct: false },
      { text: "Heimlich's reception", correct: false },
      { text: "spirometry", correct: false },
      { text: "ECG", correct: false },
    ],
  },
  {
    question: "Indirect heart massage is performed in the position:",
    answers: [
      { text: "lying on your back on a hard surface", correct: true },
      { text: "lying on a wooden board", correct: false },
      { text: "arbitrary", correct: false },
      { text: "with his head down", correct: false },
      { text: "on a sitting position", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
