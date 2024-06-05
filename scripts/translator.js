// Get crowdin contributor information

var fs = require('fs');
var path = require('path');
var outputFile = path.resolve(__dirname, '../community/team.json');

// crowdin token
var TOKEN = '';
// Crowdin API config
var CROWDIN_PROJECTS = [
  {
    id: '546268',
    name: 'answer',
  },
  {
    id: '624686',
    name: 'answer-website'
  },
];

async function getCrowdinContributors(token) {
  let allContributors = [];

  for (const { id, name } of CROWDIN_PROJECTS) {
    const url = `https://api.crowdin.com/api/v2/projects/${id}/members`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} for project ${name}`);
    }

    const { data: contributors } = await response.json();
    allContributors = allContributors.concat(contributors.map(contributor => ({
      name: contributor.data.username,
      github: `https://crowdin.com/profile/${contributor.data.username}`,
      avatar: contributor.data.avatarUrl
    }))).sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });;
  }

  // Deduplicate contributors
  return [...new Set(allContributors.map(JSON.stringify))].map(JSON.parse);
}


async function saveContributorsToFile() {
  try {
    const contributors = await getCrowdinContributors(TOKEN);
    console.log(`Total contributors: ${contributors.length}`);

    // Read existing JSON data
    const existingData = fs.readFileSync(outputFile, 'utf8');
    const jsonData = JSON.parse(existingData);
    jsonData[3].count = contributors.length;
    jsonData[3].users = contributors;
    // Save data to team.json

    fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
    console.log(`Contributors information saved to ${outputFile}`);
  } catch (err) {
    console.error('Error:', err);
  }
}


saveContributorsToFile();
