# CI/CD and Containerization using AWS, CircleCI, and Docker

This project demonstrates how to set up continuous integration and deployment (CI/CD) and containerization using AWS ECR, CircleCI, and Docker using NodeJs

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

Make sure you have the following software installed on your local machine:

- Node.js
- Docker
- AWS CLI (if using AWS services)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SegunCodes/CI-CD-NodeJs-Docker
``` 

2. Install the dependencies:
```bash
npm install
```

### Building the Docker Image

To build the Docker image for the application, run the following command:
```bash
docker build -t myapp/backend .
```
Replace `myapp/backend` with the desired name for your Docker image.

### Deploying to AWS ECR
To deploy the Docker image to AWS ECR, make sure you have set up your AWS credentials and configured the AWS CLI on your machine. Then, run the following command:

```bash
echo $AWS_ECR_PASSWORD | docker login --username AWS --password-stdin $AWS_ECR_REPO_URL
docker tag myapp/backend:latest $AWS_ECR_REPO_URL/myapp/backend:latest
docker push $AWS_ECR_REPO_URL/myapp/backend:latest
```
Make sure to replace $AWS_ECR_PASSWORD and $AWS_ECR_REPO_URL with the appropriate values. 
These values can be stored in a .env file.

### Continuous Integration with CircleCI

This project is configured with CircleCI for automating the build and deployment process. The configuration file can be found in the `.circleci/config.yml` file.

To set up CircleCI for your own repository:

1. Create a CircleCI account and link your repository.
2. Add the following environment variables in the CircleCI project settings:
3. AWS_ECR_PASSWORD: The password for AWS ECR.
4. AWS_ECR_REPO_URL: The URL of your AWS ECR repository.

CircleCI will automatically trigger a build whenever changes are pushed to the repository.

### Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

### Note

```bash

Make sure to replace any placeholders (`your-username`, `myapp/backend`, etc.) with the appropriate values for your project.

Feel free to customize and expand on this README file to provide more information about your project and its features.

```