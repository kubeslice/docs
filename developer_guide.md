# Kubeslice Documentation
This project repository contains the documentation for KubeSlice. We are so glad that you want to contribute!

## Prerequisites

To use this website, you need
- [Git](https://git-scm.com/downloads)
- [Nodejs version 16.14 or greater](https://nodejs.org/en/download/)
- [Docusaurus](https://docusaurus.io/docs/installation)

## Installation

### Fork the Repository

Fork the documentation repository to test new ideas.

To fork the repository:

1. Go to the **kubeslice/docs** repository on GitHub.

2. Click the **Fork** button on the top right side.
   
3. Enter the name of the repository in the **Repository name** text box.

4. Click the **Create fork** button.


### Clone the Project

Get the HTTPS link of the forked repository to clone the project to your local system.

To clone the repository:

1. Go to the forked repository.

2. Click the **Clone** button on the top right side.

3. Under **Local** > **HTTPS** and copy the https link of the repository.

4. Use the following command to clone the repository:

   ```
   git clone https://github.com/<github-username>/<forked-repo-name>.git
   ```


## Local Development


### Navigate to Working Directory

You can use any editor that supports the markdown to edit the doc files.

Navigate to the directory that contains the repository from the editor of your choice, create a new branch, and update the files.

```
cd <forked-repo-name>
git checkout -b <new-branch>
```


### Create a Symlink

To view the changes in the local website, you can use the Docusaurus.

Create symlink to the static image folder using `mlink`.

Use the following command to create a symlink:

**Note**: **You can change the path to the images depending on the OS**.

```
mklink /D C:\<path-to-the-directory>\<repo-name>\static\images C:\<path-to-the-directory>\<repo-name>\images
```


### Install the Node Modules

The following command installs all the dependencies of the project in the local `node_modules` folder.

```
npm install
```

The following command starts a local development server and opens a browser window. The changes are reflected in real-time without the need to restart the server.

```
npm run start
```

### Local Build

Run the following command to create a local build to verify if there are any  errors related to the images or hyperlinks.

**Note**: **You can delete the build folder after pushing the changes to the master.**

```
npm run build
```

## Create a PR

After pushing changes to the branch, create a PR, and share the PR link for review.

To create the new PR:

1. Click the **Pull requests** tab.

2. Click the **Compare & pull request** button for the recently updated branch.

3. Enter the title and description for the PR.

4. Click the **Create pull requests** button to create a PR.