const getButtonType = (value, state) => {
  const { inputs, searchArray, removeArray } = state;

  if (Object.values(inputs).includes(value)) return "green";
  else if (searchArray.includes(value)) return "yellow";
  else if (removeArray.includes(value)) return "red";
  else return "";
};

export { getButtonType };
