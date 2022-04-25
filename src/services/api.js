const getWordList = async (props) => {
  const { inputs, searchArray, removeArray } = props;
  const { l_one, l_two, l_three, l_four, l_five } = inputs;

  const url = "https://termo-solver.herokuapp.com/api/v1/words/locate";

  let params = "";
  if (l_one) params += "l_one=" + l_one;
  if (l_two) params += "&l_two=" + l_two;
  if (l_three) params += "&l_three=" + l_three;
  if (l_four) params += "&l_four=" + l_four;
  if (l_five) params += "&l_five=" + l_five;
  if (searchArray.length) params += "&l_array=" + JSON.stringify(searchArray);
  if (removeArray.length) params += "&r_array=" + JSON.stringify(removeArray);

  if (params !== "") {
    const settings = {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url + "?" + params, settings);
    const answer = await response.json();

    return answer;
  }
};

export { getWordList };
