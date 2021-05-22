
function generateTemplate(data, githubData) {
  return `

## *${data.title}*

${data.badges}

## Description 

${data.description}

## Table of contents 

1. [Instal](#Installation)
2. [Use](#Usage)
3. [Licences](#Licences)
4. [Project Contributors](#Contributors)
5. [Tests](#Tests)
6. [Repo Link](#Repo)
7. [Author's GitHub Info](#GitHubInfo) 


## Installation

        ${data.installation}

## Usage

${data.usage}

## Licences

${data.licencing}

## Contributors

${data.contributors}

## Tests

${data.testing}


## Repo

${data.repo}

## GitHubInfo

${githubData.name}
${githubData.profile}
${githubData.email}

`;
}

module.exports.generateTemplate = (data, githubData);
module.exports = generateTemplate;
