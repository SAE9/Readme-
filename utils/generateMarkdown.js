//function to render license badge 
function renderLicenseBadge(license) {
  if (license === 'Academic Free License') {
    return '[![license: AFL](https://img.shields.io/badge/License-AFL-red.svg)](https://opensource.org/licenses/AFL)';
  } else if (license === 'Apache-2.0') {
    return '[[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if (license === 'BSD-2-Clause') {
    return '[[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
  }else if (license === 'ISC') {
    return '[[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  }else if (license === 'MIT') {
    return '[[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
// if the license is not recognised it returns as empty string
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}

  ## Description 
  ${data.description}

  ${licenseBadge}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is license under ${data.license}.


## Contributing
${data.contributions}

## Tests
${data.tests}


## Questions
For any questions, please contact [${data.githubUsername}](https:github.com/${data.githubUsername}) or email at $(data.email).



`;
}

module.exports = generateMarkdown;
