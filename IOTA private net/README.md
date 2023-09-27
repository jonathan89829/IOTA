# IOTA  private net
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

## Start to create private net

