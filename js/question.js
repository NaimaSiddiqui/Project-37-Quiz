class Question{
    constructor(){
       // this.name=createInput("");
        this.title = createElement('h1');
        this.question=createElement("h2");
        this.option1=createElement("h2");
        this.option2=createElement("h2");
        this.input1=createInput("Enter your name");
        this.input2=createInput("Enter ur answer");
        this.button=createButton("Submit !")
    }


    display(){
        this.title.html("My Quiz");
        this.title.position(350,0);
        this.question.html("Que: What starts and end with 'E', but has only one letter? ");
        this.question.position(150,80);

        this.option1.html("1: Everyone ");
        this.option1.position(150,150);

        this.option2.html("2: Envelope ");
        this.option2.position(150,200);

        this.input1.position(150,300)
        this.input2.position(350,300)

        this.button.position(320,350);

        this.button.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
        contestant.name=this.input1.value();
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update(contestant.name,contestant.answer);
       // contestant.updateAns(contestant.ans);
        contestant.updateCount(contestantCount);
        
        
        });



    }
}
// ● Create all the input, heading elements you need to create your Quiz game UI
// inside the constructor.
// ● Write a hide( ) to hide the elements.
// ● Create display( ) function and inside it assign the position, text, heading names
// to all the HTML elements you create in the constructor