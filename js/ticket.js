class Ticket{

    constructor(){
     this.ticket = generateTicket();
     this.er=[[],[],[]];
     
        for(var b = 0 ; b<9 ; b++){
        this.er[0].push(createButton(ticket[0][b]));
        }
        for(var b = 0 ; b<9 ; b++){
        this.er[1].push(createButton(ticket[1][b]));
        }
        for(var b = 0 ; b<9 ; b++){
        this.er[2].push(createButton(ticket[2][b]));
        }



        for(var i = 0; i < this.er[0].length ; i++ ){
            if(this.er[0][i]== 0){
                this.ers[0][i] = " ";
            }
            if(this.er[1][i]== 0){
              this.er[1][i] = " ";
            }
            if(this.er[2][i]== 0){
              this.er[2][i] = " ";
            }
            }

    }

    display(){


      

     var space = 50;
      for(var s = 0 ; s<this.er[0].length;s++){
          space += 50;
          this.er[0][s].position(space,20);
          this.er[1][s].position(space,50);
          this.er[2][s].position(space,80);
      }
    
      
    
    }



}