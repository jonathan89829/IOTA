# IOTA  Private Net
This file is to create a private tangle net on your Windows.  
  
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
This command is to allow the port. We need to allow 14265, 15600, 8081, 1881, 14626/udp, 4000:
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

## Starting to Create Private Net
### Clone the scrip repository
Fisrt clone the one-click-tangle repository:
```
git clone https://github.com/iotaledger/one-click-tangle  
cd one-click-tangle
```
Then, ensure that the private-tangle.sh script has execution permissions:
```
cd hornet-private-net
chmod +x ./private-tangle.sh
```
  
### Run your new Tangle
Starting the Tangle:
```
sudo ./private-tangle.sh install
```
After that, you can use the following command to check the docker containers:
```
sudo docker ps -a
```
This command is to operate your Tangle:
```
sudo ./private-tangle.sh [start|stop|update]
```
The Coordinator: This node emits milestones periodically and has to be bootstrapped and set up appropriately. With the IOTA 2.0 update, the Coordinator will no longer used as explained here.  

The Spammer: A node that periodically sends messages to your Tangle, thus enabling a minimal message load to support transaction approval as per the IOTA protocol.  

The Regular Hornet Node (node1): An initial node that is exposed to the outside through the IOTA protocol (port 14265) to be the recipient of messages or to peer with other Nodes (through port 15600) that can later join your Tangle.  

Check the dashboard on http://localhost:8081.  
  
### Tangle explorer
Type the following commamd to run a Tangle explorer:
```
cd ../explorer  
sudo ./tangle-explorer.sh install ../hornet-private-net
```

### Adding extra nodes
These are the following steps:
```
cd ./extra-nodes
chmod +x ./private-hornet.sh
sudo ./private-hornet.sh install "my-node:14266:15601:8082"
```

## Next
To send the data on the private net please check the Sending data file.  
