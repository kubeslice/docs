# Kubeslice Documentation
This project repository contains the documentation for KubeSlice. We are so glad that you want to contribute!

## Prerequisites

To use this website, you need
- [Git](https://git-scm.com/downloads)
- [Nodejs version 16.14 or greater](https://nodejs.org/en/download/)
- [Docusaurus](https://docusaurus.io/docs/installation)

## Installation

### 1. Fork the Repository

Fork the project, to try out new ideas.

To fork the project:

1. Go to the project (docs) repository on GitHub.

2. click the **Fork** button on the top right side.
   
   ![fork](/images/community-dg/fork.png)

3. Enter the **Repository name** and click the **Create fork** button.
  
   ![fork](/images/community-dg/fork-2.png)


### 2. Clone the Project

Get the HTTPS link of the forked repository to clone the project to your local system.

To clone the project:

1. Go to the forked repo (docs).

2. Click the **Clone** button on the top right side.

   ![clone](/images/community-dg/clone.png)

4. Under **Local** >> **HTTPS**, copy the link of the repo.

5. Use the following command to clone the repo:

   ```
   git clone https://github.com/<github-username>/<forked-repo-name>.git
   ```


### 3. Create the Working Directory

Use the editor that supports the markdown to edit the doc files.

To create a working directory, navigate to the directory that contains the project from the editor of your choice and update the files.

```
cd <forked-repo-name>
```



## Local Development

### 1.  Create a Symlink

Create symlink to the static image folder using mlink.

mklink /D C:\Users\HP\Doc-repos\docs-ent\static\images C:\Users\HP\Doc-repos\docs-ent\images


### 2. Install the Node Modules

The following command installs all the dependencies of the project in the local `node_modules` folder.

```
npm install
```

The following command starts a local development server and opens a browser window. The changes are reflected in real-time
without the need to restart the server.

```
npm run start
```

### 3. Local Build

Run the following command to create a local build to verify if there are any errors.


```
npm run build
```


## Create a PR

After pushing changes to the working directory, create a PR and share the PR link for review.

![createpr](/images/community-dg/create-pr.png)

To create a PR:

1. Click on the **Pull requests** tab.

2. Select your branch and click the **New pull requests** button.

3. Add the details and click the **Create pull requests** button.