// Usage: node scripts/contributor.js
// get contributors from github reset api and save to team.json
// Notice: per_page max is 100, so if contributors more than 100, need to change page number

var fs = require('fs');
var path = require('path');

var url = 'https://api.github.com/repos/apache/incubator-answer/contributors?page=1&per_page=100';
var outputFile = path.resolve(__dirname, '../community/team.json');

// ignore PPMC and committers members
var ignoreList = ['PrimmaAnna', 'chrisdutz', 'fenbox', 'joyqi', 'justinmclean', 'kumfo', 'LinkinStars', 'mingcheng', 'jiangbonadia', 'WillemJiang', 'robinv8', 'shuashuai', 'aichy126', 'haitaojarvis'];

fetch(url).then(function(res) {
  return res.json();
}).then(function(data) {
  console.log('data', data.length);
  var contributors = data.map(function(contributor) {
    return {
      name: contributor.login,
      github: contributor.html_url,
      avatar: contributor.avatar_url,
    };
  }).filter(function(contributor) {
    return !ignoreList.includes(contributor.name);
  });
  // 按照name字段进行排序
  contributors.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  // read existing data from team.json
  var existingData = fs.readFileSync(outputFile, 'utf8');
  var jsonData = JSON.parse(existingData);
  jsonData[2].users = contributors;
  // save data to team.json
  fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), function(err) {
    if (err) {
      console.error('write file err：', err);
    }
  });
}).catch(function(err) {
  console.log('err', err);
});
