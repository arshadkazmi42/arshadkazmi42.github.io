Deploy on github pages

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