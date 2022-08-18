import * as functions from "./Controller";

const testData = [
  {
    id: 1176286,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTc2Mjg2",
    name: "pivotal_planning_poker",
    full_name: "stackbuilders/pivotal_planning_poker",
    private: false,
    html_url: "https://github.com/stackbuilders/pivotal_planning_poker",
    description: "Planning poker for distributed teams using Pivotal Tracker.",
    fork: false,
    created_at: "2010-12-17T04:19:18Z",
    updated_at: "2017-05-21T04:36:44Z",
    pushed_at: "2012-02-21T13:57:13Z",
    homepage: "http://poker.stackbuilders.com",
    size: 225,
    stargazers_count: 6,
    watchers_count: 6,
  },
  {
    id: 1493846,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDkzODQ2",
    name: "hackchange_demo",
    full_name: "stackbuilders/hackchange_demo",
    private: false,
    html_url: "https://github.com/stackbuilders/hackchange_demo",
    description: "Hackchange Demo Application",
    fork: false,
    created_at: "2011-03-17T22:59:12Z",
    updated_at: "2014-12-15T12:18:33Z",
    pushed_at: "2011-04-22T00:16:16Z",
    homepage: "",
    size: 196,
    stargazers_count: 0,
    watchers_count: 0,
  },
  {
    id: 1673657,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjczNjU3",
    name: "propel",
    full_name: "stackbuilders/propel",
    private: false,
    html_url: "https://github.com/stackbuilders/propel",
    description: "Push to your project the right way",
    fork: false,
    created_at: "2011-04-28T01:27:42Z",
    updated_at: "2019-08-13T14:44:41Z",
    pushed_at: "2012-02-05T02:13:23Z",
    homepage: "",
    size: 164,
    stargazers_count: 9,
    watchers_count: 9,
  },
  {
    id: 3148847,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTQ4ODQ3",
    name: "stub_shell",
    full_name: "stackbuilders/stub_shell",
    private: false,
    html_url: "https://github.com/stackbuilders/stub_shell",
    description: "Stub shell environment for your rspec test suite.",
    fork: false,
    created_at: "2012-01-10T21:31:19Z",
    updated_at: "2017-06-05T19:58:59Z",
    pushed_at: "2012-02-05T02:29:35Z",
    homepage: "http://github.com/stackbuilders/stub_shell",
    size: 121,
    stargazers_count: 7,
    watchers_count: 7,
  },
  {
    id: 3434667,
    node_id: "MDEwOlJlcG9zaXRvcnkzNDM0NjY3",
    name: "pull_panel",
    full_name: "stackbuilders/pull_panel",
    private: false,
    html_url: "https://github.com/stackbuilders/pull_panel",
    description: "Manage pull requests in multiple apps and organizations",
    fork: false,
    created_at: "2012-02-13T22:11:10Z",
    updated_at: "2014-05-05T05:03:07Z",
    pushed_at: "2012-06-26T21:24:13Z",
    homepage: "https://pullpanel.herokuapp.com",
    size: 292,
    stargazers_count: 2,
    watchers_count: 2,
  },
  {
    id: 3631804,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjMxODA0",
    name: "hubot",
    full_name: "stackbuilders/hubot",
    private: false,
    html_url: "https://github.com/stackbuilders/hubot",
    description: "Hubot",
    fork: false,
    created_at: "2012-03-05T21:52:56Z",
    updated_at: "2022-02-06T02:13:28Z",
    pushed_at: "2020-05-19T18:18:45Z",
    homepage: "",
    size: 13,
    stargazers_count: 2,
    watchers_count: 2,
  },
];

const formatedData = [
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
    name: "pull_panel",
    stars: 2,
    updated: "2014-05-05T05:03:07Z",
  },
  {
    name: "hubot",
    stars: 2,
    updated: "2022-02-06T02:13:28Z",
  },
];

test("Should return a repo object list", () => {
  expect(functions.formatList(testData)).toEqual(formatedData);
});

test("Should return the sum of all repos' stars", () => {
  expect(functions.sumStars(formatedData)).toEqual(26);
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
