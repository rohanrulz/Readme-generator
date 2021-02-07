// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "None") {
      return "";
      }

    else if(license == "APACHE 2.0" ){
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }

    else if(license == "MIT" ){
      return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }

    else if(license == "GPL 3.0" ){
      return `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    }

    else if(license == "BSD 3" ){
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    }




}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
    }

  else if(license == "APACHE 2.0" ){
    return `https://opensource.org/licenses/Apache-2.0`;
  }

  else if(license == "MIT" ){
    return `https://opensource.org/licenses/MIT`;
  }

  else if(license == "GPL 3.0" ){
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }

  else if(license == "BSD 3" ){
    return `(https://opensource.org/licenses/BSD-3-Clause`;
  }






}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      return `${renderLicenseLink(license)}`;
    } else {
      return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

- [Walkthorugh Video Link](#walkthough video link)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}


module.exports = generateMarkdown;
