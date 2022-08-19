import axios from "axios";
export const BASE_URL = "https://api.github.com/orgs/stackbuilders/repos";

export const fill = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const reposList = response.data;
    return reposList;
  } catch (error) {
    return [];
  }
};

export const formatList = (list) => {
  const formatedList = list.map((repo) => {
    try {
      return {
        name: repo.name,
        stars: repo.stargazers_count,
        updated: repo.updated_at,
      };
    } catch (error) {
      return [];
    }
  });

  return formatedList;
};

export const sumStars = (list) => {
  try {
    const starsSum = list.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue + currentValue.stars),
      0
    );

    return starsSum;
  } catch (error) {
    return 0;
  }
};

export const filterByStars = (list) => {
  try {
    const mostStarsRepos = list.filter((repo) => repo.stars > 5);

    return mostStarsRepos;
  } catch (error) {
    return [];
  }
};

export const lastModified = (list) => {
  try {
    const latestRepos = list
      .sort((d1, d2) => new Date(d2.updated) - new Date(d1.updated))
      .slice(0, 5);

    return latestRepos;
  } catch (error) {
    return [];
  }
};
