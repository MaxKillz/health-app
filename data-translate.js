const fs = require("fs");

// allergy
let allergy = [
  ["Alavert", "Loratadine"],
  ["Atarax", "Hydroxyzine"],
  ["Benadryl", "Diphenhydramine"],
  ["Clarinex", "Desloratadine"],
  ["Claritin", "Loratadine"],
  ["Claritin-D", "Loratadine"],
  ["Dimetapp Cold & Allergy", "Brompheniramine"],
  ["Sudafed Sinus & Allergy", "Chlorpheniramine"],
  ["Triaminic Cold & Allergy", "Chlorpheniramine"],
  ["Tylenol Allergy Sinus", "Chlorpheniramine"],
  ["Tylenol Cold & Flu", "Chlorpheniramine"],
  ["Zyrtec", "Cetirizine"]
];

let interaction = "Drowsiness, dizziness; increased risk for overdose";

for (var i = 0; i < allergy.length; i++) {
  allergy[i].push(interaction);
}

// chest pain
let chest = [
  ["Isordil",
  "Isosorbide Nitroglycerin",
  "Rapid heartbeat, sudden changes in blood pressure, dizziness, fainting"]
];

// anxiety
let anxiety = [
  ["Ativan", "Lorazepam"],
  ["BuSpar", "Buspirone"],
  ["Klonopin", "Clonazepam"],
  ["Librium", "Chlordiazepoxide"],
  ["Paxil", "Paroxetine"],
  ["Valium", "Diazepam"],
  ["Xanax", "Alprazolam"]
];

interaction =
  "Drowsiness, dizziness; increased risk for overdose; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems";

for (var i = 0; i < anxiety.length; i++) {
  anxiety[i].push(interaction);
}

anxiety.push([
  "Herbal preparations (Kava Kava)",
  "N/A",
  "Liver damage, drowsiness"
]);

// arthritis
let arthritis = [
  ["Celebrex", "Celecoxib", "Ulcers, stomach bleeding, liver damage"],
  ["Naprosyn", "Naproxen", "Ulcers, stomach bleeding, liver damage"],
  ["Voltaren", "Diclofenac", "Ulcers, stomach bleeding, liver damage"]
];

// ADD/ADHD
let attention = [
  [
    "Adderall",
    "Amphetamine/dextro-amphetamine",
    "Possible increased risk for heart problems"
  ],
  [
    "Concerta",
    "Methylphenidate",
    "Dizziness, drowsiness, impaired concentration"
  ],
  [
    "Ritalin",
    "Methylphenidate",
    "Dizziness, drowsiness, impaired concentration"
  ],
  [
    "Dexedrine",
    "Dextroamphetamine",
    "Possible increased risk for heart problems"
  ],
  [
    "Focalin",
    "Dexmethylphenidate",
    "Dizziness, drowsiness, impaired concentration"
  ],
  ["Strattera", "Atomoxetine", "liver damage"],
  ["Vyvanse", "Lisdexamfetamine", "Possible increased risk for heart problems"]
];

// blood clots
let bloodClots = [
  ["Coumadin",
  "Warfarin",
  "Occasional drinking may lead to internal bleeding; heavier drinking also may cause bleeding or may have the opposite effect, resulting in possible blood clots, strokes, or heart attacks"]
];

// cough
let cough = [
  [
    "Delsym",
    "Dextromethorpan",
    "Drowsiness, dizziness; increased risk for overdose"
  ],
  [
    "Robitussin Cough",
    "Dextromethorpan",
    "Drowsiness, dizziness; increased risk for overdose"
  ],
  [
    "Robitussin A–C",
    "Guaifenesin + codeine",
    "Drowsiness, dizziness; increased risk for overdose"
  ]
];

// depression
let MAOI =
  "Monoamine oxidase inhibitors (MAOIs), such as tranylcypromine and phenelzine, when combined with alcohol, may result in serious heartrelated side effects. Risk for dangerously high blood pressure is increased when MAOIs are mixed with tyramine, a byproduct found in beer and red wine";

let depression = [
  ["Abilify", "Aripriprazone"],
  ["Anafranil", "Clomipramine"],
  ["Celexa", "Citalopram"],
  ["Clozaril", "Clozapine"],
  ["Cymbalta", "Duloxetine"],
  ["Desyrel", "Trazodone"],
  ["Effexor", "Venlafaxine"],
  ["Elavil", "Amitriptyline"],
  ["Geodon", "Ziprasidone"],
  ["Invega", "Paliperidone"],
  ["Lexapro", "Escitalopram"],
  ["Luvox", "Fluvoxamine"],
  ["Nardil", "Phenelzine"],
  ["Norpramin", "Desipramine"],
  ["Parnate", "Tranylcypromine"],
  ["Paxil", "Paroxetine"],
  ["Pristiq", "Desevenlafaxine"],
  ["Prozac", "Fluoxetine"],
  ["Remeron", "Mirtazapine"],
  ["Risperdal", "Risperidone"],
  ["Seroquel", "Quetiapine"],
  ["Serzone", "Nefazodone"],
  ["Symbyax", "Fluoxetine/Olanzapine"],
  ["Wellbutrin", "Bupropion"],
  ["Zoloft", "Sertraline"],
  ["Zyprexa", "Olanzapine"],
  ["Herbal preparations (St. John’s Wort)", "N/A"]
];

for (var j = 0; j < depression.length; j++) {
  interaction = "Drowsiness, dizziness; increased risk for overdose; increased feelings of depression or hopelessness";

  if (
    depression[j][1] == "Phenelzine" ||
    depression[j][1] == "Tranylcypromine"
  ) {
    interaction = interaction.concat(MAOI);
  }
  depression[j].push(interaction);
}

// diabetes
let diabetes = [
  ["Diabinese", "Chlorpropamide"],
  ["Glucotrol", "Glipizide"],
  ["Glucophage", "Metformin"],
  ["Glynase", "Glyburide"],
  ["DiaBeta", "Glyburide"],
  ["Micronase", "Glyburide"],
  ["Orinase", "Tolbutamide"],
  ["Tolinase", "Tolazamide"]
];

for (var k = 0; k < diabetes.length; k++) {
  interaction =
    "Abnormally low blood sugar levels, flushing reaction(nausea, vomiting, headache, rapid heartbeat, sudden changes in blood pressure)";

  if (diabetes[k][1] === "Metformin") {
    interaction = interaction.concat(
      ", symptoms of nausea and weakness may occur"
    );
  }
  diabetes[k].push(interaction);
}

// prostate
let prostate = [
  ["Cardura", "Doxazosin"],
  ["Flomax", "Tamsulosin"],
  ["Hytrin", "Terazosin"],
  ["Minipress", "Prazosin"]
];

for (var l = 0; l < prostate.length; l++) {
  interaction = "Dizziness, light headedness, fainting";

  prostate[l].push(interaction);
}

// heartburn
let heartburn = [
  ["Axid", "Nizatidine", "Rapid heartbeat; increased alcohol effect"],
  [
    "Reglan",
    "Metoclopramide",
    "Rapid heartbeat; increased alcohol effect, sudden changes in blood pressure"
  ],
  ["Tagamet", "Cimetidine", "Rapid heartbeat; increased alcohol effect"],
  ["Zantac", "Ranitidine", "Rapid heartbeat; increased alcohol effect"]
];

// high blood pressure
let highPressure = [["Accupril", "Quinapril"],
["Calan", "Verapamil"],
["Capozide", "Hydrochlorothiazide"],
["Cardura", "Doxazosin"],
["Catapres", "Clonidine"],
["Cozaar", "Losartan"],
["Hytrin", "Terazosin"],
["Lopressor HCT", "Hydrochlorothiazide"],
["Lotensin", "Benzapril"],
["Minipress", "Prazosin"],
["Norvasc", "Amlodipine"],
["Prinivil", "Mesylate Lisinopril"],
["Zestril", "Mesylate Lisinopril"],
["Vaseretic", "Enalapril"]]

interaction = "Dizziness, fainting, drowsiness; heart problems such as changes in the heart’s regular heartbeat (arrhythmia)";

for (var m = 0; m < highPressure.length; m++) {
    highPressure[m].push(interaction);
}

// high cholesterol
let cholesterol = [["Advicor", "Lovastatin + Niacin"],
["Altocor", "Lovastatin"],
["Crestor", "Rosuvastatin"],
["Lipitor", "Atorvastatin"],
["Mevacor", "Lovastatin"],
["Niaspan", "Niacin"],
["Pravachol", "Pravastatin"],
["Pravigard", "Pravastatin + Aspirin"],
["Vytorin", "Ezetimibe + Simvastatin"],
["Zocor", "Simvastatin"]];

for (var p = 0; p < cholesterol.length; p++) {
    interaction = "Liver damage";

    if(cholesterol[p][1] === "Niacin") {
        interaction = interaction.concat(", increased flushing and itching")
    } else if (cholesterol[p][1] === "Pravastatin + Aspirin") {
        interaction = interaction.concat(", increased stomach bleeding")
    }

    cholesterol[p].push(interaction);
}

// infections
let infections = [["Acrodantin", "Nitrofurantoin"],
["Flagyl", "Metronidazole"],
["Grisactin", "Griseofulvin"],
["Nizoral", "Ketoconazole"],
["Nydrazid", "Isoniazid"],
["Seromycin", "Cycloserine"],
["Tindamax", "Tinidazole"],
["Zithromax", "Azithromycin"]]

for (var q = 0; q < infections.length; q++) {
    interaction = "Fast heartbeat, sudden changes in blood pressure; stomach pain, upset stomach, vomiting, headache, or flushing or redness of the face";

    if ((infections[q][1] === "Isoniazid") || (infections[q][1] === "Ketoconazole")) {
        interaction = interaction.concat(", liver damage");
    }

    infections[q].push(interaction);
} 

// mood stabilizers
let mood = [["Depakene", "Valproic acid"],
["Depakote", "Valproic acid"],
["Eskalith", "Lithium"],
["EskalithCR", "Lithium"],
["Lithobid", "Lithium"]]

for (var r = 0; r < mood.length; r++) {
interaction = "Drowsiness, dizziness; tremors; increased risk for side effects, such as restlessness, impaired motor control; loss of appetite; stomach upset; irregular bowel movement; joint or muscle pain; depression"

    if (mood[r][1] === "Valproic acid") {
        interaction = interaction.concat(", liver damage")
    }

    mood[r].push(interaction);
}

// muscle pain
let muscle = [["Flexeril", "Cyclobenzaprine", "Drowsiness, dizziness; increased risk of seizures; increased risk for overdose; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems"],
["Soma", "Carisoprodol", "Drowsiness, dizziness; increased risk of seizures; increased risk for overdose; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems"]];


// nausea
let nausea = [["Antivert", "Meclizine", "Drowsiness, dizziness; increased risk for overdose"],
["Dramamine", "Dimenhydrinate", "Drowsiness, dizziness; increased risk for overdose"],
["Phenergan", "Promethazine", "Drowsiness, dizziness; increased risk for overdose"]]

// pain
let pain = [["Advil", "Ibuprofen"],
["Aleve", "Naproxen"],
["Excedrin", "Aspirin + Acetaminophen"],
["Motrin", "Ibuprofen"],
["Tylenol", "Acetaminophen"]]

for (var s = 0; s < pain.length; s++) {
    interaction = "Stomach upset, bleeding and ulcers, apid heartbeat";

    if ((pain[s][1] === "Acetaminophen") || (pain[s][1] === "Aspirin + Acetaminophen")) {
        interaction = interaction.concat(", liver damage")
    }

    pain[s].push(interaction);
}

// seizures
let seizures = 
[["Dilantin", "Phenytoin"],
["Horizant", "Gabapentin"],
["Neurontin", "Gabapentin"],
["Keppra", "Levetiracetam"],
["Klonopin", "Clonazepam"],
["Lamictal", "Lamotrigine"],
["Lyrica", "Pregabalin"],
["Tegretol", "Carbamazepine"],
["Topamax", "Topiramate"],
["Trileptal", "Oxcarbazepine"]]

for (var t = 0; t < seizures.length; t++) {
    interaction = "Drowsiness, dizziness;";

    if ((seizures[t][1] === "Levetiracetam") || (seizures[t][1] === "Phenytoin")) {
        interaction = interaction.concat(", increased risk of seizures");
    } else if (seizures[t][1] === "Topiramate") {
        interaction = interaction.concat(", unusual behavior and changes in mental health (such as thoughts of suicide)")
    }

    seizures[t].push(interaction);
}

// severe pain
let severePain = [["Darvocet–N", "Propoxyphene"],
["Demerol", "Merepidine"],
["Fiorinal with codeine", "Butalbital + codeine"],
["Percocet", "Oxycodone"],
["Vicodin", "Hydrocodone"]]

for (var u = 0; u < severePain.length; u++) {
    interaction = "Drowsiness, dizziness; increased risk for overdose; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems"

    severePain[u].push(interaction);
}

// sleep
let sleep = [["Ambien", "Zolpidem"],
["Lunesta", "Eszopiclone"],
["Prosom", "Estazolam"],
["Restoril", "Temazepam"],
["Sominex", "Diphenhydramine"],
["Unisom", "Doxylamine"],
["Herbal preparations (chamomile, valerian, lavender)", "N/A"]];

for (var v = 0; v < sleep.length; v++) {
    interaction = "Drowsiness, sleepiness, dizziness; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems";

    if (sleep[v][1] === "N/A") {
        interaction = "Increased drowsiness"
    }

    sleep[v].push(interaction);
}

// all arrays
let combo = allergy.concat(chest).concat(anxiety).concat(arthritis).concat(attention).concat(bloodClots).concat(cough).concat(depression).concat(diabetes).concat(prostate).concat(heartburn).concat(highPressure).concat(cholesterol).concat(infections).concat(mood).concat(muscle).concat(nausea).concat(pain).concat(seizures).concat(severePain).concat(sleep);



for (var w = 0; w < combo.length; w++) {
    combo[w] = {
    brand: combo[w][0],
    generic: combo[w][1],
    interaction: combo[w][2]
    }
}

fs.writeFile("./data/interactions.json", JSON.stringify(combo, null, 2), function (error) {
    if (error) {
      console.log("something went wrong, oops!");
    } else {
      console.log("Wrote to file!");
    }
  });
