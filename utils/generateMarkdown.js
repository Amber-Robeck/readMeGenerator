//[https://choosealicense.com/](https://choosealicense.com/).

// https://img.shields.io/npm/l/c?style=for-the-badge MIT
// https://choosealicense.com/licenses/mit/
// https://img.shields.io/npm/l/s?style=for-the-badge Apache 2.0
// https://choosealicense.com/licenses/apache-2.0/
// https://img.shields.io/npm/l/v?style=for-the-badge Gpl 3.0
// https://choosealicense.com/licenses/gpl-3.0/
// https://img.shields.io/npm/l/d?style=for-the-badge ISC
// https://choosealicense.com/licenses/isc/

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(projLic) {
//   if (projLic == "MIT") {
//     https://img.shields.io/npm/l/c?style=for-the-badge MIT
//   }


// }

// var link = data.projLic;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data) {
    var conLink = `https://choosealicense.com/licenses/${data}/`
    return conLink;
  } return;
}
// renderLicenseLink(projLic)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(proLic) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var link = data.projLic;
  console.log(link)
  var something = renderLicenseLink(link.toLowerCase());
  return (`# ${data.projName}

  ## Description

  ${data.projDesc}
  ---

  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contribution-guidelines)
  - [Test](#test)
  - [Questions](#questions)

  ## Usage

  ${data.projUsage}
  ---

  ## Installation

  ${data.projIns}
  ---

  ## Contribution guidelines

  ${data.projContrib}
  ---
          
  ![alt text](assets/images/screenshot.png)
      
  ## Test

  ${data.projTest}
  ---


  ## Credits

  ---

  ## License

  ${something}

  ![license](https://img.shields.io/npm/l/c?style=for-the-badge)
  ---
  
  ## How to Contribute

  [Contributor Covenant](https://www.contributor-covenant.org/)
  ---

  ## Questions
  
  Contact me here: ${data.email}
  
  [My gitHub profile](https://github.com/${data.username})
  ---

`);
}

module.exports = generateMarkdown;
