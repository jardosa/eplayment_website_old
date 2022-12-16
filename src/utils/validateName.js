const validateName = (name, limit = 50) => {
  return name?.length <= limit;
};

export default validateName;
