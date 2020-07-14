## React.js getting started

**Step 1: Install node.js**  
* Install node.js from [nodejs.org](https://nodejs.org/en/)
* check node version using: node -v
* check npm version using: npm -v

**Step 2: install the create-react-app command line interface (CLI) globally (-g)** 

* Run the command on powershell  
 npm install -g create-react-app


* Command to create production build
```powershell
npm run build
``` 

* The build folder is ready to be deployed.
You may serve it with a static server:

```powershell
  npm install -g serve
  serve -s build*
```

Trouble shooting 

Problem npm\create-react-app.ps1 cannot be loaded because running scripts is disabled on this system.
Solution
Your script is blocked from executing due to the execution policy.

You need to run PowerShell as administrator and set it on the client PC to Unrestricted. You can do that by calling Invoke with:

Set-ExecutionPolicy Unrestricted



