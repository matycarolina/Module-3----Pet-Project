import axios from "axios";
export const BASE_URL = "https://api.github.com/orgs/stackbuilders/repos";

interface Repo {
  name: string;
  stars: number;
  updated: string;
}

interface OgRepo {
  name: string;
  stargazers_count: number;
  updated_at: string;
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

export const formatList = (list: OgRepo[]) => {
  return list.map((repo) => {
    return {
      name: repo.name,
      stars: repo.stargazers_count,
      updated: repo.updated_at,
    };
  });
};

export const sumStars = (list: Repo[]) => {
  return list.reduce(
    (previousValue: any, currentValue: Repo) =>
      parseInt(previousValue + currentValue.stars),
    0
  );
};

export const filterByStars = (list: Repo[]) => {
  return list.filter((repo: Repo) => repo.stars > 5);
};

export const lastModified = (list: Repo[]) => {
  return list
    .sort(
      (d1, d2) =>
        new Date(d2.updated).getTime() - new Date(d1.updated).getTime()
    )
    .slice(0, 5);
};

export const top5Stars = (list: Repo[]) => {
  return list.sort((s1, s2) => s2.stars - s1.stars).slice(0, 5);
};

export const filterReposAlpha = (list: Repo[]) => {
  return list
    .filter((repo: Repo) => repo.name[0] !== "h")
    .sort((n1, n2) => n1.name.localeCompare(n2.name));
};
