const KG_in_ST = 6.35029;
const KG_in_LB = 0.453592;
const CM_in_FT = 30.48;
const CM_in_IN = 2.54;

export function heightToImperial(cm) {
  return [Math.floor(cm / CM_in_FT), (cm % CM_in_FT) / CM_in_IN];
}

export function heightToMetric(ft, inch) {
  return ft * CM_in_FT + inch * CM_in_IN;
}

export function weightToImperial(kg) {
  return [Math.floor(kg / KG_in_ST), (kg % KG_in_ST) / KG_in_LB];
}

export function weightToMetric(st, lbs) {
  return st * KG_in_ST + lbs * KG_in_LB;
}
