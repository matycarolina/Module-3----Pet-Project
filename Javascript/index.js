import {
  fill,
  sumStars,
  filterByStars,
  lastModified,
  formatList,
} from "./Controller.js";
import axios from "axios";

(function () {
  const list = fill(axios).then((repo) => {
    const formatedList = formatList(repo);
    const starsSum = sumStars(formatedList);
    const mostStars = filterByStars(formatedList);
    const latestRepos = lastModified(formatedList);

    console.log("Complete List", repo);
    console.log("Sum of stars", starsSum);
    console.log("Repos with over 5 stars", mostStars);
    console.log("5 repos last updated", latestRepos);
  });
})();
