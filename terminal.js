var terminal = {

    commandLine : null,

    init: function(){
        terminal.setInfoLogin();
        terminal.setPrompt();

        window.addEventListener('keypress', this.getCommand.bind(this));
    },

    setInfoLogin: function() {
        var infoLogin = document.createElement('div');
        infoLogin.setAttribute('id', 'infoLogin');
        var infoContent = document.createTextNode("Last login: ");
        infoLogin.appendChild(infoContent);

        var time = document.createElement('span');
        var now = new Date();
        time.innerHTML = now.toString();
        infoLogin.appendChild(time);

        document.body.appendChild(infoLogin);
    },

    setPrompt: function() {
        var commandPrompt = document.createElement('div');
        commandPrompt.setAttribute('id', 'commandPrompt');

        var prompt = document.createElement('span');
        var promptContent = document.createTextNode("user@~daviderama.github.io$");
        prompt.appendChild(promptContent);
        commandPrompt.appendChild(prompt);

        this.commandLine = document.createElement('input');
        this.commandLine.type = "text";
        // commandLine.setAttribute('id', 'command');
        commandPrompt.appendChild(this.commandLine);

        document.body.appendChild(commandPrompt);
    },

    getCommand: function(e) {
        if (e.keyCode == 13) {
            var command = this.commandLine.value;

            this.parseCommand(command);
        }
    },

    parseCommand: function(command){
        this.disableCommandLine();

        if (command == 'help') {
            var helpContent = document.createTextNode("Welcome! This is Davide Ramaglietta's personal website. Type `about` if you want to have some general information about him.");
            var help = document.createElement('div');
            help.setAttribute('id', 'help');
            help.appendChild(helpContent);

            document.body.appendChild(help);
        }

        if (command == 'about') {
            var aboutContent = document.createTextNode("Davide is a Software Engineer currently working at .... " );
            var about = document.createElement('div');
            about.setAttribute('id', 'about');
            about.appendChild(aboutContent);

            document.body.appendChild(about);
        }

        this.setPrompt();

        // clear
    },

    disableCommandLine: function(){
        this.commandLine.disabled = true;
    }


};

terminal.init();




