This repository contains the code and configuration files to deploy a simple Node.js application on Kubernetes. It includes the necessary Dockerfile and Kubernetes YAML files that will help you deploy and run the application in a Kubernetes environment.

Files include:-

Dockerfile: Defines how to build the Docker image for the Node.js application.

app.js: The Node.js application code.

nodejs-deploy.yml: Kubernetes Deployment YAML to manage the app pods.

service-nodejs.yml: Kubernetes Service YAML to expose the Node.js application within the cluster.

package.json: Contains the app dependencies and other configuration.

package-lock.json: Defines the exact versions of dependencies for consistent installs.
