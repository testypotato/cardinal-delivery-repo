(
ssh-add -D
ssh-add ~/.ssh/id_rsa_testypotato
git push origin master
ssh-add -D
ssh-add ~/.ssh/id_rsa
) | set /P "="