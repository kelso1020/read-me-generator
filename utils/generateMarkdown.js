//this is a function that returns a license badge based on which license is passed in
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    return ''
  };
};

//This is a function that returns the license link
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  if (license === 'Apache 2.0 License') {
        return `Licensed under the [${license}](https://choosealicense.com/licenses/apache-2.0/) license.`
    } else if (license === 'Boost Software License 1.0') {
      return `Licensed under the [${license}](https://choosealicense.com/licenses/bsl-1.0/) license.`
    } else if (license === 'GNU General Public License v3.0') {
      return `Licensed under the [${license}](https://choosealicense.com/licenses/gpl-3.0/) license.`
    } else if (license === 'MIT License') {
      return `Licensed under the [${license}](https://choosealicense.com/licenses/mit/) license.`
    } else if (license === 'Mozilla Public License 2.0') {
      return `Licensed under the [${license}](https://choosealicense.com/licenses/mpl-2.0/) license.`
    } else {
        return '';
    };
};


//this is a function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Project Description](#description)
  - [Installation Instructions](#installation)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contributing)
  - [Test Instructions](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, feel free to reach out through [GitHub](https://www.github.com/${data.github}/) or [email](mailto:${data.email}).

  ## License
  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
