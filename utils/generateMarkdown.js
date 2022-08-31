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
function capitalizeFirstLetter(string) {
  string.toLowerCase;
  const firstLetterCap = string.charAt(0).toUpperCase() + string.slice(1);

  return firstLetterCap;
}


function generateSection(name, data) {
  name = capitalizeFirstLetter(name);
  return `## ${name}
  
  ${data}
  
  ---
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let basicL = ['license', 'questions'];
  let advancedL = ['usage', 'contribution', 'testing'];
  let professionalL = ['install', 'issues'];

  var link = data.projLic;
  // console.log(link)
  var fullLink = renderLicenseLink(link.toLowerCase());
  var badgeLink = renderLicenseBadge(link);


  ///if basic
  if (Object.keys(data).length <= 5) {
    console.log("Basic")

    return `# ${data.projName}

![${link}](${badgeLink})
  
${generateSection('description', data.projDesc)}
  
## Table of Contents
    
- [License](#license)
- [Questions](#questions)
    

## License

[${link}](${fullLink})

---

## Questions
  
Contact me here: ${data.email}

[My gitHub profile](https://github.com/${data.username})

---

`
  } else if (Object.keys(data).length <= 8) {
    console.log("advanced")
    return `# ${data.projName}

    ![${link}](${badgeLink})
  
    ${generateSection('description', data.projDesc)}
  
    ## Table of Contents
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributions](#how-to-contribute)
    - [Test](#test)
    - [Questions](#questions)
  
  
    ${generateSection('test', data.projTest)}
  
    ${generateSection('credits', 'empty')}
  
    ## License
  
    [${link}](${fullLink})
  
  
    ---
    
    ${generateSection('how to contribute', data.projContrib)}
  
    ## Questions
    
    Contact me here: ${data.email}
  
    [My gitHub profile](https://github.com/${data.username})
  
    ---
  
      ${generateSection("new field", "This is some random data for testing")}
  
      `;
  } else {
    console.log("professional")
    return `# ${data.projName}

  ![${link}](${badgeLink})

  ${generateSection('description', data.projDesc)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#how-to-contribute)
  - [Test](#test)
  - [Questions](#questions)


  ${generateSection('test', data.projTest)}

  ${generateSection('credits', 'empty')}

  ${generateSection('installation', data.projIns)}

  ## License

  [${link}](${fullLink})


  ---
  
  ${generateSection('how to contribute', data.projContrib)}

  ## Questions
  
  Contact me here: ${data.email}

  [My gitHub profile](https://github.com/${data.username})

  ---

    ${generateSection("new field", "This is some random data for testing")}

    `;
  }
}

module.exports = generateMarkdown;
