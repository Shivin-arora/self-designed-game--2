class Player {
  constructor(){
    this.index = null;
    
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      
    });
  }

  static getPlayerInfo(){
    playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getRank(){
    database.ref('rank').on("value",(rankData)=>{
      this.rank = rankData.val();
    })
  }
  static updateRank(Data){
    database.ref('/').update({
      rank:Data});
  }
}
