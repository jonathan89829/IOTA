# IOTA hornet node
This folder is to create a node using Hornet on the testnet.  

## Requirement  
We need to install Docker and Docker compose first using WSL.  
### Execute WSL and install Linux Ubuntu
Go to your terminal or PowerShell run as system administrator:  
```
wsl --install
```  
This command enables the functionality required to execute WSL and install the Linux Ubuntu distribution.  
### Install Docker and Docker compose
Next we need to install Docker and Docker compose:  
```
sudo apt install curl
```  
After installation type this command:  
```
curl -sSL https://get.docker.com | sh
```
  
We can use these two command to check the Docker and Docker compose version:
```
sudo docker --version  
sudo docker-compose --version
```
### Firewall setting
Using ufw to set the firewall.  
This command is to allow the port. We need to allow 15600/tcp, 8081, 80/tcp, 14626/udp, 443/tcp:
```
sudo ufw allow port
```
This command is to active/inactive ufw:
```
sudo ufw enable/disable
```
Also we can check the status of the ufw, adding verbose for more information:
```
sudo ufw status
sudo ufw status verbose
```

## Download the latest release
Download the latest release first:
```
mkdir hornet
cd hornet
curl -L -O "https://github.com/iotaledger/node-docker-setup/releases/download/v1.0.0-rc.16/node-docker-setup_chrysalis-v1.0.0-rc.16.tar.gz"
tar -zxf node-docker-setup_chrysalis-v1.0.0-rc.16.tar.gz
```
## Prepare
### Set environment
Create a .env file with the following content:
```
COMPOSE_FILE=docker-compose.yml:docker-compose-https.yml

ACME_EMAIL=your-email@example.com

NODE_HOST=node.your-domain.com
```
The default HTTP port is 80, and if you want to change it for example 9000 just add:
```
HTTP_PORT=9000
```
### Setup neighbors
Add your Hornet neighbors addresses to the peering.json file or later use the dashboard to add neighbors.  
### Create data folder
Before you create the folder, there is an error in the prepare_docker.sh, use the following command to change the "docker compose" in prepare_docker.sh into "docker-compose":
```
vim prepare_docker.sh
```
Press "I" to insert and if you finish the change just press ESC, then save this file using the following command, the first one is the regular saving and quit command and the second on is for read only file:
```
:wq
:w !sudo tee %
```
After that run the following command:
```
sudo ./prepare_docker.sh
```
### Set dashboard credentials
First run the following command to generate a password hosh and salt for the dashboard:
```
sudo docker-compose run hornet tool pwd-hash
```
And then add the following lines to .env file:
```
DASHBOARD_PASSWORD=0000000000000000000000000000000000000000000000000000000000000000
DASHBOARD_SALT=0000000000000000000000000000000000000000000000000000000000000000
```  
If you want to change the default admin username, you can add this line to your .env file:
```
DASHBOARD_USERNAME=someotherusername
```
### Enable additional monitoring
Add the following line in the .env file:
```
COMPOSE_PROFILES=monitoring
```
## Run
### Starting the node
You can start the Hornet node by running:
```
sudo docker-compose up -d
```
After starting the node you can check the dashboard on http://localhost/dashboard and API on http://localhost/api/routes.
Stopping the node by runnung:
```
sudo docker-compose down
```

