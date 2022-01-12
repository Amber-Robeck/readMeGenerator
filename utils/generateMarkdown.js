// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (`#${data.projName}
  ## Description
  ${data.projDesc}
  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Usage
          
  ![alt text](assets/images/screenshot.png)
      
  ## Credits
      
  ## License
   [https://choosealicense.com/](https://choosealicense.com/).
  ---
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)

`);
}

module.exports = generateMarkdown;
