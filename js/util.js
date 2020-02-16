const isWordExists = (word, row) => {
  const rowString = row.join('');
  
  return rowString.includes(word);
}

const getTimeInWords = () => {
  const currentDate = new Date();
  let h = currentDate.getHours();
  h = h > 12 ? h - 12 : h; //12-hour formatter
  const m = currentDate.getMinutes();
  h = m > 34 ? h + 1 : h;
  
  const minuteText = MINUTE_TEXT[m - m % 5];
  const hourText = HOUR_TEXT[h];
  if (m < 5) {
    return (hourText + ' ' + minuteText);
  }

  return(minuteText + ' ' + hourText);
}