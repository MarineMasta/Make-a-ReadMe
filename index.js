const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateTemplate');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Input project title:"
    },
    {
        type: "input",
        name: "badges",
        message: "Input links to the badges you want displayed:"
    },
    {
        type: "input",
        name: "description",
        message: "Input project's description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Input installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Input project's usage:"
    },
    {
        type: "list",
        name: "licencing",
        message: "Input project licence or your badge link:",
        choices: ["copyleft","lpgl","MIT","permissive","proprietary","public"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Input contributing parties:"
    },
    {
        type: "input",
        name: "testing",
        message: "Input project tests:"
    },
    {
        type: "input",
        name: "repo",
        message: "Input repo link:"
    },
    {
        type: "input",
        name: "username",
        message: "Input GitHub username:"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubData = {
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubData), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("README file was created!");
          });
        });

});

function init() {

}

init();