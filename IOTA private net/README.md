# IOTA  private net
This file is to create a private tangle net on your Windows.  
  
## Requirement  
We need to install Docker and Docker compose first using WSL.  
### Execute WSL and install Linux Ubuntu
Go to your terminal or PowerShell run as system administrator.  
```
wsl --install
```  
This command enables the functionality required to execute WSL and install the Linux Ubuntu distribution.  
### Install Docker and Docker compose
Next we need to install Docker and Docker compose.  
```
sudo apt install curl
```  
After installation type this command.  
```
curl -sSL https://get.docker.com | sh
```
  
We can use these two command to check the Docker and Docker compose version.
```
sudo docker --version  
sudo docker-compose --version
```

