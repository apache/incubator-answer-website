// Get contributor information of github repository

var fs = require('fs');
var path = require('path');
var TeamJson = require('../community/team.json');

var outputFile = path.resolve(__dirname, '../community/team.json');

// ignore PPMC and committers members
var ignoreList = [];
TeamJson.forEach(function(u) {
  if (u.type === 'ppmc' || u.type === 'committer') {
    u.users.forEach(function(user) {
      ignoreList.push(user.name);
    });
  }
});

console.log('ignoreList', ignoreList);

// 获取所有仓库的地址
var repositoryUrls = [
  'https://api.github.com/repos/apache/incubator-answer/contributors?page=%d&per_page=100',
  'https://api.github.com/repos/apache/incubator-answer-plugins/contributors?page=%d&per_page=100',
  'https://api.github.com/repos/apache/incubator-answer-website/contributors?page=%d&per_page=100',
];

var allContributors = [];

function fetchContributors() {
  var promises = repositoryUrls.map(function(url, index) {
    return fetchPagedContributors(url, index, 1, []);
  });

  return Promise.all(promises).then(function(results) {
    // 去重
    var uniqueContributors = [];
    allContributors.forEach(function(contributor) {
      var existingContributor = uniqueContributors.find(function(c) {
        return c.name === contributor.name;
      });
      if (!existingContributor) {
        uniqueContributors.push(contributor);
      }
    });

    // Sort by name field
    uniqueContributors.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    // read existing data from team.json
    var existingData = fs.readFileSync(outputFile, 'utf8');
    var jsonData = JSON.parse(existingData);
    jsonData[2].count = uniqueContributors.length;
    jsonData[2].users = uniqueContributors;

    // save data to team.json
    fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), function(err) {
      if (err) {
        console.error('write file err：', err);
      }
    });
  });
}

function fetchPagedContributors(url, index, page, currentResults) {
  return fetch(url.replace('%d', page))
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // 将新获取的数据添加到 currentResults 中
      var newResults = currentResults.concat(
        data.map(function(contributor) {
          return {
            name: contributor.login,
            github: contributor.html_url,
            avatar: contributor.avatar_url,
          };
        }).filter(function(contributor) {
          return !ignoreList.includes(contributor.name);
        })
      );

      // If the returned data length is equal to 100, continue to request the next page
      if (data.length === 100) {
        return fetchPagedContributors(url, index, page + 1, newResults);
      } else {
        // Add the final newResults to the allContributors array.
        allContributors = allContributors.concat(newResults);
        return newResults;
      }
    });
}

fetchContributors();
