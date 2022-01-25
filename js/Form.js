class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name").class("input");
    this.button = createButton('Play').class("customButton");
    this.greeting = createElement('h1').class("customGreeting");
    this.title = createElement('h2').class("customTitle");
    this.reset = createButton("Reset");
    this.wait = createElement('h2').class("customWait");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.wait.hide();
  }

  display(){
    this.title.html("Tambola");
    this.title.position(displayWidth/2 - 280, 0);

    

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 -40, displayHeight/2);
    this.reset.position(50,50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hi " + player.name );
      this.greeting.position(displayWidth/2 - 70, displayHeight/4 + 15);
      this.wait.html("Waiting for players...");
     this.wait.position(displayWidth/2 - 230, displayHeight/4 + 60);
   
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateRank(0);
      database.ref('players').remove();
      window.location.reload();
    })
    
  }
}
