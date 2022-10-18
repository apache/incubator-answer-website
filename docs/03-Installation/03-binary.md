---
---

# Binary

:::tip

If you want to install and deploy in binary mode, you need a database environment, such as mysql.

:::

## Install Answer using binary

  1. Download and unzip the compressed package.
  2. Use the command `cd` to enter the directory you just created.
  3. Execute the command `./answer init -C ./data/`.
  4. Answer will generate a `./data/` directory in the current directory
  5. Modify the configuration file `vim ./data/conf/config.yaml`
  6. Modify the database connection address to your database connection address

     connection: [username]:[password]@tcp([host]:[port])/[database]
  7. Execute run command `./answer run -c ./data/conf/config.yaml`

### Notice
- For other commands, please refer to [command](../Usage/command)