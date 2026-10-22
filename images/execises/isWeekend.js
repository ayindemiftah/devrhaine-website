
  function isWeekend(date){
    const todaysDate = date.format('dddd');
      return todaysDate === 'Saturday' || todaysDate === 'Sunday'
  }

  export default isWeekend; 