## React To-Do List App

This is a React front-end application for managing daily tasks and to-do lists. It provides a user-friendly interface to add, update, and delete tasks, allowing user to stay organized and keep track of their responsibilities.

## Available scripts

### Development

To up the project in the development mode, run:\
`docker-compose -f docker-compose.dev.yml up --build`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint/typescript errors in the console.

### Cypress

Navigate to folder /e2e.

To run headless tests, execute:\
`docker-compose up --abort-on-container-exit --exit-code-from cypress`

To run tests in interactive mode, follow the steps:

_For Mac_

1. [Install XQuartz](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/#install-xquartz) - allows you to run GUI applications and graphical tools inside Docker containers and interact with them from your host.
2. Set the IP variable as the ip of your local machine. Run the following command in the terminal: `IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')`. If you’re on wifi you may want to use en1 instead of en0, check the value of the variable using `echo $IP`.
3. Add the IP using Xhost with `xhost + $IP`. If the xhost command is not found check /usr/X11/bin/xhost as that might not be in your path.
4. Set `DISPLAY=$IP:0`.
5. Finally run: `docker-compose -f docker-compose.yml -f cy-open.yml up --exit-code-from cypress`. Be ready to see the Cypress interface in the XQuartz window. The page will reload if you make any edits inside the e2e/cypress folder.

[!NOTE]\
Stay inside the /e2e directory.

_For Windows_

More info on this [link](https://turgaykivrak.medium.com/running-gui-applications-using-docker-in-mac-linux-and-windows-b280c1fb52d0#:~:text=app%20with%20GUI-,Running%20On%20Windows,-Prerequisites%3A).

## License

This project is licensed under the MIT License. Feel free to use and modify the code as per your needs.
