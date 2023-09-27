# IOTA  private net
This file is to create a private tangle net on your Windows.  
  
## Requirement  
We need to install Docker and Docker compose first using WSL.  
Go to your terminal or PowerShell run as system administrator.  
'''bash
wsl --install
'''  
This command enables the functionality required to execute WSL and install the Linux Ubuntu distribution.  
Next we need to install Docker and Docker compose.  
'''bash
sudo apt install curl
'''  
After installation type this command.  
'''bash
curl -sSL https://get.docker.com | sh
'''  
We can use these two command to check the Docker and Docker compose version.
'''bash
sudo docker --version  
sudo docker-compose --version
'''

