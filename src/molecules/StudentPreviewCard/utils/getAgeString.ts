export function getAgeString (age: number) :string {
  const lastDigit = age % 10

  switch (true) {
    case age > 19 && lastDigit === 1:
      return `${age} год`;
    case age > 19 && lastDigit <= 4:
      return `${age} года`;
    default:
      return `${age} лет`;
  }
}