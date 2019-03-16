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
  "Isordil",
  "Isosorbide Nitroglycerin",
  "Rapid heartbeat, sudden changes in blood pressure, dizziness, fainting"
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
  "Coumadin",
  "Warfarin",
  "Occasional drinking may lead to internal bleeding; heavier drinking also may cause bleeding or may have the opposite effect, resulting in possible blood clots, strokes, or heart attacks"
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
  interaction = [
    "Drowsiness, dizziness; increased risk for overdose; increased feelings of depression or hopelessness"
  ];

  if (
    depression[j][1] == "Phenelzine" ||
    depression[j][1] == "Tranylcypromine"
  ) {
    interaction = interaction.concat(MAOI);
  }
  depression[j].push(interaction);
}

// diabetes
let diabetes = [["Diabinese", "Chlorpropamide"], ["Glucotrol", "Glipizide"],
["Glucophage", "Metformin"],
["Glynase", "Glyburide"],
["DiaBeta", "Glyburide"],
["Micronase", "Glyburide"],
["Orinase", "Tolbutamide"],
["Tolinase", "Tolazamide"]];


for (var k = 0; k < diabetes.length; k++) {
    interaction = "Abnormally low blood sugar levels, flushing reaction(nausea, vomiting, headache, rapid heartbeat, sudden changes in blood pressure)";

    if (diabetes[k][1] === "Metformin") {
        interaction = interaction.concat(", symptoms of nausea and weakness may occur");
    }
    diabetes[k].push(interaction);
}
