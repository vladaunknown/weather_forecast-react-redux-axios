import axios from "axios";

export const funcAction = () => {
  const request = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Liberec&appid=927b5df80ff72e35425ccc2168011c6a");
    console.log(request);
  return {
    type: 'DO_ACTION',
    payload: request
  }
}
