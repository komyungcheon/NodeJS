let dayOfTheWeek = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
let currentDate = new Date("10/5/2023")
let indexDay = currentDate.getDay();
let currentDay = dayOfTheWeek[indexDay];
console.log(currentDay);
