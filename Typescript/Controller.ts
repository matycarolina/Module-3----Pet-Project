import axios from "axios";
export const BASE_URL = "https://api.github.com/orgs/stackbuilders/repos";

interface Repo {
  name: string;
  stars: number;
  updated: Date;
}

export const fill = async () => {
  const response = await axios.get(BASE_URL);
  const reposList = response.data;
  return reposList;
};

export const formatList = (list: []): Repo[] => {
  const formatedList = list.map((repo: any) => {
    return <Repo>{
      name: repo.name,
      stars: repo.stargazers_count,
      updated: repo.updated_at,
    };
  });
  return formatedList;
};

export const sumStars = (list: Repo[]) => {
  const starsSum = list.reduce(
    (previousValue: any, currentValue: Repo) =>
      parseInt(previousValue + currentValue.stars),
    0
  );

  return starsSum;
};

export const filterByStars = (list: Repo[]) => {
  const mostStarsRepos = list.filter((repo: Repo) => repo.stars > 5);

  return mostStarsRepos;
};

export const lastModified = (list: Repo[]) => {
  const latestRepos = list
    .sort(
      (d1, d2) =>
        new Date(d2.updated).getTime() - new Date(d1.updated).getTime()
    )
    .slice(0, 5);

  return latestRepos;
};
