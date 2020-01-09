# typescript-node-package-template
This is a project template for Typescript projects intended to be published as github packages. It includes opinionated best practices and all the boilerplate to publish your package. To use this project as a template, simply create a new project using the fork as a template. [More information](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) 


# What's In the Box 
Included in this template is an opinionated set of dependencies for node development.
- typescript with an opinionated config including strict=true
- jest for testing with separate unit and integration test directives
- opinionated eslint and prettier configuration
- VSCode settings for cleaning up code on save


# Bug? Enhancement?
If you find issues with this template, please feel free to make an [issue](https://github.com/digibodies/typescript-node-package-template/issues) or better yet, a [pull request](https://github.com/digibodies/typescript-node-package-template/pulls).


# Getting Started
Once you have created your project using the template, you can delete everything in the `./src/greeter` folder as well as change the `./src/index.ts` and this `./README.md` file to suit your needs. Be sure to modify your `package.json` file to reflect your repository details too! Happy Coding.


## Installation
Installs a solid set of basics including typescript, jest, and eslint with typescript support (good bye tslint).

```
npm install
```


## Tests 
Tests are separated into `unit` and `integration` tests. Feel free to modify the configuration in the package.json to modify as needed. Having separate unit and integration tests is good practice to ensure that unit tests are fast to run thus supporting TDD.

```
npm run unit
```

```
npm run integration
```

To run all of the tests and generate coverage report:
```
npm run test
```



## Building 
You can manually build by running the following command:
```
npm run build
```
If you have not modified the tsconfig.json, this will transpile your typescript code to the ./dist folder and generate the index.d.ts types file.

## Publishing 
Publishing your package to Github is fairly easy. You will need to ensure that you have authenticated to Github using your user's Personal Access Token ([learn more](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)). 

Once you authenticated with Github, you can publish packages by running:
```
npm publish
```
Note: The `prepare` script in package.json will automatically run a build and output to your dist folder before publishing.

