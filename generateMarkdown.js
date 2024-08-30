// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License Badge](https://img.shields.io/badge/license-${license}-green)`;
  }
  return '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

export default generateMarkdown;
