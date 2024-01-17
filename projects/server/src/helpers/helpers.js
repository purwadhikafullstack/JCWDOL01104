export function FormatToIDR(price) {
  return new Intl.NumberFormat("ID", { style: "currency", currency: "IDR" }).format(price);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);

export const generateFacility = (propertyId, categoryId) => {
  let facilityArr = [];
  const num = 4;
  const multiplier = categoryId === 1 ? num : categoryId === 2 ? num * 2 : num * 3;

  for (let i = 1; i <= 3; i++) {
    facilityArr.push({ facilityId: i, propertyId: propertyId });
  }
  for (let i = multiplier; i < multiplier + 4; i++) {
    facilityArr.push({ facilityId: i, propertyId: propertyId });
  }
  return facilityArr;
};

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
