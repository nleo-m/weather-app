export function unixToTimestamp(timestamp) {
  return new Date(timestamp * 1000);
}

export function getFormattedTime(timestamp) {
  const aditionalZero = (value) => {
    return value < 10 ? "0" + value : value;
  };

  return (
    aditionalZero(timestamp.getHours()) +
    ":" +
    aditionalZero(timestamp.getMinutes())
  );
}

export function getWeekDay(timestamp) {
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return days[timestamp.getDay()];
}