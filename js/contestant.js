class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name,answer){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
       
      });

      //var contestantIndex = "contestants/contestant" + this.index;
     // database.ref(contestantIndex).set({
        // answer:this.answer
       
      //});
    }

   


    
  
    static getContestantInfo(){
      var playerInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestant = data.val();
      })
    }
  }