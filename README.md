# Profile Card

This is a simple profile card app build in ReactJs. It uses a JSON file for managing data. Data is fetched from the JSON file and shows in the UI.

## How to use

- Clone the repo.
- Checkout to `develop` branch using this command `git checkout develop` (Source code is available in the `develop` branch).
- Run `yarn install` to install all the dependencies.
- Change the data in `src/data/data.json` file.
- Run `yarn start` to start the application.

## Deploy on github pages

- Create a new repo `yourusername.github.io`.
- Initialize this project to your repo.
  - Delete git config file, `rm -rf .git`.
  - Initialize your repo to the directory 
    - `git init`
    - `git remote add origin https://github.com/username/yourusername.github.io`
- Make the data changes in `src/data/data.json`
- Change `"homepage": "https://arshadkazmi42.github.io/"` to `"homepage": "https://yourusername.github.io/"` in `package.json`
- Add your changes to github
  - `git add --all`
  - `git commit -m "Your commit message"`
  - `git push origin branchName` (Keep your code in a separate branch, other than master)
- Build the project `yarn build`
- To deploy the project on `https://yourusername.github.io` run the below command
  - `yarn run deploy`
  (This will push the build code to master branch and your website will be live at this url `https://yourusername.github.io`)
  
## Contributing

We would love to improve this application, we welcome all types of contribution to this application.
To contribute to this repo follow these below steps

- Fork the repo
- Clone the repo
- Create a branch using `git checkout -b feature-branch`
- Make the required changes
- Run below command to verify nothing is broken
  - `yarn build`
  - `yarn start`
- Check the running application at `http://localhost:3000`
- If everything is working fine, then create a pull request using below commands
  - `git add --all`
  - `git commit -m "your commit message"`
  - `git push origin feature-branch`
- Go to [my github page](https://github.com/arshadkazmi42/arshadkazmi42.github.io/)
- Create Pull Request againts `develop` branch
- Add a suitable title and description to the pull request and tag the issue number in Pull Request description, if the pull request is related to some issue logged here: [Issues](https://github.com/arshadkazmi42/arshadkazmi42.github.io/issues)
- You're done. Wait for your code to get reviewed and merge

## Contributors
[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/arshadkazmi42.github.io/links/7)

## Credits

We are using some images for which we want to thank the original owners of it. All credits related information are available in [Credits](CREDITS.md)
