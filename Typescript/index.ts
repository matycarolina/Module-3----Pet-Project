import {
  fill,
  sumStars,
  filterByStars,
  lastModified,
  formatList,
  top5Stars,
  filterReposAlpha,
} from "./Controller";

(function () {
  const list = fill().then((repo) => {
    const formatedList = formatList(repo);
    const starsSum = sumStars(formatedList);
    const mostStars = filterByStars(formatedList);
    const latestRepos = lastModified(formatedList);
    const top5Repos = top5Stars(formatedList);
    const reposAlpha = filterReposAlpha(formatedList);

    console.log("Complete List", formatedList);
    console.log("Sum of stars", starsSum);
    console.log("Repos with over 5 stars", mostStars);
    console.log("5 repos last updated", latestRepos);
    console.log("5 repos with more stars", top5Repos);
    console.log("Alphabetical repos", reposAlpha);
  });
})();
