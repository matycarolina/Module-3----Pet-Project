export const testData = [
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

export const formatedData = [
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

export interface OgRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: [];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
}

export interface testRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
}
