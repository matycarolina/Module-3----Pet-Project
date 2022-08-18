import axios from "axios";
export const BASE_URL = "https://api.github.com/orgs/stackbuilders/repos";

export const fill = async () => {
  const response = await axios.get(BASE_URL);

  const reposList = response.data;

  return reposList;
};

export const formatList = (list) => {
  const formatedList = list.map((repo) => {
    return {
      name: repo.name,
      stars: repo.stargazers_count,
      updated: repo.updated_at,
    };
  });

  return formatedList;
};

export const sumStars = (list) => {
  const starsSum = list.reduce(
    (previousValue, currentValue) =>
      parseInt(previousValue + currentValue.stars),
    0
  );

  return starsSum;
};

export const filterByStars = (list) => {
  const mostStarsRepos = list.filter((repo) => repo.stars > 5);

  return mostStarsRepos;
};

export const lastModified = (list) => {
  const latestRepos = list
    .sort((d1, d2) => new Date(d2.updated) - new Date(d1.updated))
    .slice(0, 5);

  return latestRepos;
};
