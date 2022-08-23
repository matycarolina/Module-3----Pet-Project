import axios from "axios";
import { OgRepo, testRepo } from "./test/dataTest";
export const BASE_URL = "https://api.github.com/orgs/stackbuilders/repos";

interface Repo {
  name: string;
  stars: number;
  updated: string;
}

export const fill = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const reposList = response.data;
    return reposList;
  } catch (error) {
    return [];
  }
};

export const formatList = (list: OgRepo[] | testRepo[]): Repo[] => {
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

export const top5Stars = (list: Repo[]) => {
  const top5Repos = list.sort((s1, s2) => s2.stars - s1.stars).slice(0, 5);

  return top5Repos;
};

export const filterReposAlpha = (list: Repo[]) => {
  const reposAlpha = list
    .sort((n1, n2) => n1.name.localeCompare(n2.name))
    .filter((repo: Repo) => repo.name[0] !== "h");

  return reposAlpha;
};
