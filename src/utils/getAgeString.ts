export const getAgeString = (age: number) :string => {
  const lastDigit = age % 10

  switch (true) {
    case age > 20 && lastDigit === 1:
      return `${age} год`;
    case age > 20 && lastDigit <= 4:
      return `${age} года`;
    default:
      return `${age} лет`;
  }
}
