export function getAgeString (age: number) :string {
  const lastDigit = age.toString().slice(-1)

  switch (true) {
    case age > 19 && lastDigit === '1':
      return `${age} год`;
    case age > 19 && lastDigit === '2':
      return `${age} года`;
    default:
      return `${age} лет`;
  }
}