---
---

# Binary

## Install Answer using binary

  1. Unzip the compressed package.
  2. Use the command cd to enter the directory you just created.
  3. Execute the command ./answer init.
  4. Answer will generate a ./data directory in the current directory
  5. Enter the data directory and modify the config.yaml file
  6. Modify the database connection address to your database connection address

     connection: [username]:[password]@tcp([host]:[port])/[DbName]
  7. Exit the data directory and execute ./answer run -c ./data/conf/config.yaml