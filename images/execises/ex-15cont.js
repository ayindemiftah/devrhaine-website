import anyOtherName from "./isWeekend.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


  let date = dayjs()
  console.log(date.format('dddd, MMMM D'));
  console.log (anyOtherName(date));


  date = dayjs().add(2, 'day')
  console.log(date.format('dddd, MMMM D'));
  console.log (anyOtherName(date));
  

  date = dayjs().add(4, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log (anyOtherName(date));


  date = dayjs().add(5, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log (anyOtherName(date));

  