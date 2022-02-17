enum Month {
  January = 'января',
  February = 'февраля',
  March = 'марта',
  April = 'апреля',
  May = 'мая',
  June = 'июня',
  July = 'июля',
  August = 'августа',
  September = 'сентября',
  October = 'октября',
  November = 'ноября',
  December = 'декабря'
}

export const getFullDateString = (date: string) :string => {
  const dateArray = date.split('-');
  const day = Number(dateArray[2]);
  const month = Number(dateArray[1]);
  const year = Number(dateArray[0]);

  return `${day} ${Object.values(Month)[month - 1]} ${year}`;
};
