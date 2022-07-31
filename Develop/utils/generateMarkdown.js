// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  console.log("ANSWERS FROM index.js to be templated", input)
  return `# ${input.title}

  ${input.description}

  ## Table of Contents

  *[Installtion](#installation)
  *[Usage](#usage)
  *[Contributions](#contributions)
  *[Test](#test)
  *[License](#license)
  *[Github](#github)
  *[Email](#email)


  ## Installation

  ${input.installation}

  ## Usage

  ${input.usage}

  ## Contribution

  ${input.contribution}

  ## Test

  ${input.test}

  ## License

  This application is licensed under the ${input.license} license.

  ## Github

  Find my other applications at [${input.github}](https://github.com/${input.github}).

  ## Questions

  If you have any questions about my application contact me at ${input.email}.



`;
}

module.exports = generateMarkdown;
