export function avg(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function getRiskGrade(value) {
  if (value < 30) return "Low";
  if (value < 70) return "Medium";
  return "High";
}

export function getActivityStatus(value) {
  if (value < 30) return "Low Activity";
  if (value < 70) return "Moderate Activity";
  return "High Activity";
}

export function getHRStatus(value) {
  if (value < 60) return "Low HR";
  if (value < 100) return "Normal HR";
  return "High HR";
}

export function getMovementLabel(value) {
  if (value < 20) return "Very Low";
  if (value < 50) return "Low";
  if (value < 80) return "Moderate";
  return "High";
}

export function getMovementStatus(value) {
  if (value < 20) return "Poor";
  if (value < 50) return "Average";
  if (value < 80) return "Good";
  return "Excellent";
}