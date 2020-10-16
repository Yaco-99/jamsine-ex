let arr = ["Html", "CSS", "Java", "PHP"];
let arrNumb = [];
let CreationTableauLangages = () => {
  return ["Html", "CSS", "Java", "PHP"];
};

let CreationTableauNombres = () => {
  for (let i = 0; i <= 5; i++) {
    arrNumb.push(i);
  }
  return arrNumb;
};

let RemplacementElement = (langages) => {
  arr.splice(2, 1, "Javascript");
  return arr;
};

let AjoutElementLangages = (langages) => {
  arr.push("Ruby", "Python");
  return arr;
};

let AjoutElementNombres = (nombres) => {
  arrNumb.unshift(-2, -1);
  return arrNumb;
};

let SuppressionPremierElement = (langages) => {
  arr.splice(0, 1);
  return arr;
};

let SuppressionDernierElement = (langages) => {
  arr.splice(arr.length - 1, 1);
  return arr;
};

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
  return reseaux_sociaux_chaine.split(",");
};

let ConversionTableauChaine = (langages) => {
  return arr.join(",");
};

let TriTableau = (reseaux_sociaux) => {
  return reseaux_sociaux.sort();
};

let InversionTableau = (reseaux_sociaux) => {
  return reseaux_sociaux.reverse();
};
