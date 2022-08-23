import * as functions from "../Controller";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { testData, formatedData } from "./dataTest";

//Fill repo list from API
describe("fill", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("should return repos list", async () => {
      // given
      mock.onGet(`${functions.BASE_URL}`).reply(200, testData);

      // when
      const result = await functions.fill();

      // then
      expect(mock.history.get[0].url).toEqual(`${functions.BASE_URL}`);
      expect(result).toEqual(testData);
    });
  });

  describe("when API call fails", () => {
    it("should return empty repos list", async () => {
      // given
      mock.onGet(`${functions.BASE_URL}`).networkErrorOnce();

      // when
      const result = await functions.fill();

      // then
      expect(mock.history.get[0].url).toEqual(`${functions.BASE_URL}`);
      expect(result).toEqual([]);
    });
  });
});

//Format repo list
describe("formatList", () => {
  describe("when list is received successfully", () => {
    it("should return formatted repos list", () => {
      expect(functions.formatList(testData)).toEqual(formatedData);
    });
  });

  describe("when list is not received", () => {
    it("should return empty repos list", () => {
      expect(functions.formatList([])).toEqual([]);
    });
  });
});

test("Should return a repo object list", () => {
  expect(functions.formatList(testData)).toEqual(formatedData);
});

//Sum of repos' stars
describe("sumStars", () => {
  describe("when list is received successfully", () => {
    it("should return the sum of all repos' stars", () => {
      expect(functions.sumStars(formatedData)).toEqual(26);
    });
  });

  describe("when list is not received", () => {
    it("should return 0", () => {
      expect(functions.sumStars([])).toEqual(0);
    });
  });
});

test("Should return the sum of all repos' stars", () => {
  expect(functions.sumStars(formatedData)).toEqual(26);
});

//Filter repos by stars
describe("filterByStars", () => {
  describe("when list is received successfully", () => {
    it("should return filtered repos list", () => {
      expect(functions.filterByStars(formatedData)).toEqual([
        {
          name: "pivotal_planning_poker",
          stars: 6,
          updated: "2017-05-21T04:36:44Z",
        },
        {
          name: "propel",
          stars: 9,
          updated: "2019-08-13T14:44:41Z",
        },
        {
          name: "stub_shell",
          stars: 7,
          updated: "2017-06-05T19:58:59Z",
        },
      ]);
    });
  });

  describe("when list is not received", () => {
    it("should return empty repos list", () => {
      expect(functions.filterByStars([])).toEqual([]);
    });
  });
});

test("Should return the repos with over 5 stars", () => {
  expect(functions.filterByStars(formatedData)).toEqual([
    {
      name: "pivotal_planning_poker",
      stars: 6,
      updated: "2017-05-21T04:36:44Z",
    },
    {
      name: "propel",
      stars: 9,
      updated: "2019-08-13T14:44:41Z",
    },
    {
      name: "stub_shell",
      stars: 7,
      updated: "2017-06-05T19:58:59Z",
    },
  ]);
});

//Last modified repos
describe("lastModified", () => {
  describe("when list is received successfully", () => {
    it("should return 5 last modified repos", () => {
      expect(functions.lastModified(formatedData)).toEqual([
        {
          name: "hubot",
          stars: 2,
          updated: "2022-02-06T02:13:28Z",
        },
        {
          name: "propel",
          stars: 9,
          updated: "2019-08-13T14:44:41Z",
        },
        {
          name: "stub_shell",
          stars: 7,
          updated: "2017-06-05T19:58:59Z",
        },
        {
          name: "pivotal_planning_poker",
          stars: 6,
          updated: "2017-05-21T04:36:44Z",
        },
        {
          name: "hackchange_demo",
          stars: 0,
          updated: "2014-12-15T12:18:33Z",
        },
      ]);
    });
  });

  describe("when list is not received", () => {
    it("should return empty repos list", () => {
      expect(functions.lastModified([])).toEqual([]);
    });
  });
});

test("Should return 5 last modified repos", () => {
  expect(functions.lastModified(formatedData)).toEqual([
    {
      name: "hubot",
      stars: 2,
      updated: "2022-02-06T02:13:28Z",
    },
    {
      name: "propel",
      stars: 9,
      updated: "2019-08-13T14:44:41Z",
    },
    {
      name: "stub_shell",
      stars: 7,
      updated: "2017-06-05T19:58:59Z",
    },
    {
      name: "pivotal_planning_poker",
      stars: 6,
      updated: "2017-05-21T04:36:44Z",
    },
    {
      name: "hackchange_demo",
      stars: 0,
      updated: "2014-12-15T12:18:33Z",
    },
  ]);
});
