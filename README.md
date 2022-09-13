# MYSQL

## This is for installing mysql locally, for using docker, refer to https://github.com/yellowduck99/docker-compose-config
### 1.Create mysql DB
**Follow Guide from mysql:**
https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/

### 2.Test mysql
```$ mysql -u $username -p```

### 3.Add new user for remote access

https://stackoverflow.com/questions/50570592/mysql-8-remote-access
```mysql
mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'PASSWORD';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
```

# Nodejs 
**Use mysql2 to prevent bugs**
```
npm i mysql2
```