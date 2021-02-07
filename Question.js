class Question{
    constructor(){
        this.input1=createInput()
        this.input2=createInput()
        this.title=createElement('H1');
        this.title1=createElement();
        this.title2=createElement();
        this.question=createElement('H2');
        this.a1=createElement('H3');
        this.a2=createElement('H3');
        this.a3=createElement('H3');
        this.a4=createElement('H3');
        this.button=createButton("submit")
    }
    hide(){
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
        this.title.hide()

    }
    display(){
        this.title.html("My Quiz Game")
        this.title1.html("Enter your name:")
        this.title2.html("Enter your Answer:")
        this.title.position(250,10);
        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter")
        this.question.position(100,80);
        this.a1.html("1. Everyone")
        this.a1.position(100,110);
        this.a2.html("2. Envelope")
        this.a2.position(100,130);
        this.a3.html("3. Estimate")
        this.a3.position(100,150);
        this.a4.html("4. Example")
        this.a4.position(100,170);
        this.title1.position(100,250);
        this.input1.position(100,280);
        this.title2.position(100,310);
        this.input2.position(100,330)
        this.button.position(100,350);
        this.button.mousePressed( ()=> {
            this.input1.hide();
            this.button.hide();
            this.input2.hide();
            this.title.hide();
           player.name=this.input1.value();
           player.answer=this.input2.value();
           contestantCount+=1;
           player.index=contestantCount
           player.update()
           player.updateCount(contestantCount);
        })
    }
    
}