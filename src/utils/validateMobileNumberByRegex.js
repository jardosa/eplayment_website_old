export default function validateMobileNumberByRegex(number) {
  const re = /^(09|\+639)\d{9}$/;
  return re.test(number);
}
