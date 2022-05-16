import { roman } from "./roman";

export function romanConverterFunction(number) {
  let output = '', relative;
  for (let i of Object.keys(roman)) {
    relative = Math.floor(number / roman[i]);
    number -= relative * roman[i];
    output += i.repeat(relative);
  }
  return output;
}
