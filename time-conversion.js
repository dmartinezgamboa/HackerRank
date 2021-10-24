function timeConversion(s) {
  let suffix = s.slice(8); // 'PM' or 'AM'
  let newTimeWithoutHours = s.slice(2, 8); // String
  let hours = s.slice(0, 2); // String

  if (suffix == "PM" && hours != 12) {
    hours = parseInt(hours) + 12;
    hours + "";
  }

  if (suffix == "AM" && hours == 12) {
    hours = "00";
  }

  return hours + newTimeWithoutHours;
}

let s1 = "12:01:00PM";
let s2 = "12:01:00AM";
let s3 = "07:05:45AM";
let s4 = "07:05:45PM";

console.log(timeConversion(s2));
console.log(timeConversion(s1));
console.log(timeConversion(s3));
console.log(timeConversion(s4));
