const fs = require("fs");

// allergy
let allergy = [["Alavert", "Loratadine"], ["Atarax", "Hydroxyzine"], ["Benadryl", "Diphenhydramine"],["Clarinex", "Desloratadine"],
["Claritin", "Loratadine"],
["Claritin-D", "Loratadine"],
["Dimetapp Cold & Allergy", "Brompheniramine"],
["Sudafed Sinus & Allergy", "Chlorpheniramine"],
["Triaminic Cold & Allergy", "Chlorpheniramine"],
["Tylenol Allergy Sinus", "Chlorpheniramine"],
["Tylenol Cold & Flu", "Chlorpheniramine"],
["Zyrtec", "Cetirizine"]]

let interaction = "Drowsiness, dizziness; increased risk for overdose";

for (var i = 0; i < allergy.length; i++) {
    allergy[i].push(interaction);
}

// chest pain
let chest = ["Isordil", "Isosorbide Nitroglycerin", "Rapid heartbeat, sudden changes in blood pressure, dizziness, fainting"]

// anxiety
let anxiety = [["Ativan", "Lorazepam"], ["BuSpar", "Buspirone"], ["Klonopin", "Clonazepam"], ["Librium", "Chlordiazepoxide"], ["Paxil", "Paroxetine"], ["Valium", "Diazepam"], ["Xanax", "Alprazolam"]]

interaction = "Drowsiness, dizziness; increased risk for overdose; slowed or difficulty breathing; impaired motor control; unusual behavior; memory problems";

for (var i = 0; i < anxiety.length; i++) {
    anxiety[i].push(interaction);
}

anxiety.push(["Herbal preparations (Kava Kava)", "Liver damage, drowsiness"]);

