//--------------------------- Base url ----------------------------------------------
const base_URL = `https://api.rawg.io/api/games`;

//-------------------------- getting date -------------------------------------------

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};
const getCurrentDay = () => {
  const day = new Date().getDay() + 1;
  return `0${day}`;
};
const getCurrentDate = () => {
  const date = new Date().getDate();
  return date < 10 ? `0${date}` : date;
};
const getCurrentFullYear = () => {
  const FullYear = new Date().getFullYear();
  return FullYear < 10 ? `0${FullYear}` : FullYear;
};

//---------------------- current day/date/year ---------------------------------------

const currentYear = getCurrentFullYear();
const currenMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currenMonth}-${getCurrentDate()}`;
const currentDay = getCurrentDay();
const prevYear = `${currentYear - 1}-${currenMonth}-${getCurrentDate()}`;
const nextYear = `${currentYear + 1}-${currenMonth}-${getCurrentDate()}`;

//----------------------- popular games ---------------------------------------------

const popular_games = `?key=${process.env.REACT_APP_GAMEAPI_KEY}&dates=${prevYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `?key=${process.env.REACT_APP_GAMEAPI_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `?key=${process.env.REACT_APP_GAMEAPI_KEY}&dates=${prevYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_URL}${popular_games}`;
export const upcomingURL = () => `${base_URL}${upcoming_games}`;
export const newGamesURL = () => `${base_URL}${new_games}`;
export const gameDetailsURL = (game_id) =>
  `${base_URL}/${game_id}?key=${process.env.REACT_APP_GAMEAPI_KEY}`;
export const screenShortURL = (game_id) =>
  `${base_URL}/${game_id}/screenshots?key=${process.env.REACT_APP_GAMEAPI_KEY}`;
