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
    var infoContent = document.createTextNode(text.infoLogin);
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
    var promptContent = document.createTextNode(text.infoCommand);
    prompt.appendChild(promptContent);
    commandPrompt.appendChild(prompt);

    this.commandLine = document.createElement('input');
    this.commandLine.type = "text";
    commandPrompt.appendChild(this.commandLine);

    document.body.appendChild(commandPrompt);

    this.commandLine.focus();
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
      var helpContent = document.createTextNode(text.help);
      var help = document.createElement('div');
      help.setAttribute('id', 'help');
      help.appendChild(helpContent);

      document.body.appendChild(help);
    }
    else if (command == 'about') {
      var aboutContent = document.createTextNode(text.about);
      var about = document.createElement('div');
      about.setAttribute('id', 'about');
      about.appendChild(aboutContent);

      document.body.appendChild(about);
    }
    else {
      var noCommandContent = document.createTextNode(text.noCommandFound);
      var noCommand = document.createElement('div');
      noCommand.setAttribute('id', 'no-command');
      noCommand.appendChild(noCommandContent);

      document.body.appendChild(noCommand);
    }

    this.setPrompt();

    // clear
  },

  disableCommandLine: function(){
    this.commandLine.disabled = true;
  }
};

terminal.init();




