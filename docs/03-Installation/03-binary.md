---
---

# Binary

:::tip

If you want to install and deploy in binary mode, you need a database environment, such as mysql.

:::

## Install Answer using binary

  1. Unzip the compressed package.
  2. Use the command cd to enter the directory you just created.
  3. Execute the command `./answer init`.
  4. Answer will generate a `./data` directory in the current directory
  5. Enter the data directory and modify the `./data/conf/config.yaml` file
  6. Modify the database connection address to your database connection address

     connection: [username]:[password]@tcp([host]:[port])/[DbName]
  7. Exit the data directory and execute `./answer run -c ./data/conf/config.yaml`