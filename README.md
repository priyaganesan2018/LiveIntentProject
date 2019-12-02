# LiveIntentProject
1.Use npm to install Protractor globally:

npm install -g protractor

Above command will install two command line tools, protractor and webdriver-manager.



2.Try running protractor --version to make sure it's working.



3.The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

4.Now start up a server with following command

webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.


5.Download visual studio code editor and following the default install selections to Install VSC.
https://code.visualstudio.com/


6.Following steps will help to Pull the project from github to local repository and open in Visual studio code

a.Open Visual studio code 
b.Click View menu - > COmmand Pallete = Search box will open
c.Type "Git: Clone" and press <enter>  = Blank input will appear asking for URL of github Repository

d.Paste this URL: https://github.com/priyaganesan2018/LiveIntentProject  and press <enter>
e.Now it will ask for root Directory where code should be saved. Please save it in C:// for windows or Documents in Mac osx
f.Message should be shown as " Would you open the cloned Rerpository?" with "Open Repository"
g. Click Open Repository - > Now code is opened in VSC

7. click on view menu -> terminal (terminal will open in Visual studio code editor for the corresponding project)


8.Run the test

protractor conf.js


you will see passed message and green dot 
