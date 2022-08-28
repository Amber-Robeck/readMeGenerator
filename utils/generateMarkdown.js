//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data === "MIT") {
    return ("https://img.shields.io/npm/l/c?style=for-the-badge")
  } else if (data === "ISC") {
    return ("https://img.shields.io/npm/l/d?style=for-the-badge")
  } else if (data === "Apache-2.0") {
    return ("https://img.shields.io/npm/l/s?style=for-the-badge")
  } else if (data === "Gpl-3.0") {
    return ("https://img.shields.io/npm/l/v?style=for-the-badge")
  } else if (data === "Skip") {
    return;
  } console.log("didn't work")
}

// var link = data.projLic;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data) {
    var conLink = `https://choosealicense.com/licenses/${data}/`
    return conLink;
  } return;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection() { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var link = data.projLic;
  // console.log(link)
  var fullLink = renderLicenseLink(link.toLowerCase());
  var badgeLink = renderLicenseBadge(link);
  return (`# ${data.projName}

  ![${link}](${badgeLink})

  ## Description

  ${data.projDesc}

  ---

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#how-to-contribute)
  - [Test](#test)
  - [Questions](#questions)

  ## Usage

  ${data.projUsage}

  ---

  ## Installation

  ${data.projIns}

  ---
      
  ## Test

  ${data.projTest}

  ---


  ## Credits


  ---

  ## License

  [${link}](${fullLink})

  
  ---
  
  ## How to Contribute

  ${data.projContrib}

  [Contributor Covenant](https://www.contributor-covenant.org/)

  ---

  ## Questions
  
  Contact me here:   ${data.email}
  
  [My gitHub profile](https://github.com/${data.username})

  ---

`);
}

module.exports = generateMarkdown;
