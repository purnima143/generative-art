//Definition of the lsystem class.
function lsys() {
    this.angle = radians(4)
    this.axiom = "F";
    this.sentence = this.axiom;
    this.len = 150
    this.branchValue = 0;
    this.alphabet = ["F", "f", 'X', 'x',  "[", "]", "+", "-"];
    this.rules1 = {
      letter: "F",
      becomes: "F+1F-5[XY]+5[XY]"
    };
    this.rules2 = {
      letter: "X",
      becomes: "+5F+1FY"
    };
    this.rules3 = {
      letter: "Y",
      becomes: "-5F-1FX"
    };
    this.colors = ['#013220', '#228B22']
  }
  
  //Generates the next sentence. It applies the rules to the current 
  //sentence to do so.
  lsys.prototype.generate = function() {
    this.len *= 0.5 //So the tree becomes denser instead of larger.
    this.branchValue += 1; //To ensure increased thickness of trunk.
    var nextSentence = "";
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
      if (current == current.toLowerCase()) {
        current = current.toUpperCase();
      }
      var found = false;
  
      if (current == this.rules1.letter) {
        found = true;
        nextSentence += this.rules1.becomes;
      } else if (current == this.rules2.letter) {
        found = true;
        nextSentence += this.rules2.becomes;
      } else if (current == this.rules3.letter) {
        found = true;
        nextSentence += this.rules3.becomes;
      }
  
      if (!found) {
        nextSentence += current;
      }
    }
    this.sentence = nextSentence;
  }
  
  //The drawing of the lsystem
  lsys.prototype.draw = function() {
  
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
  
      if (current == "F" || current == "f") {
        
        if (random() < 0.8) {
  
          // All the designing happens here!
  
          let lineColor = lerpColor(color(this.colors[0]), color(this.colors[1]), i/this.sentence.length)
          lineColor.setAlpha(150)
          stroke(lineColor)
          //strokeWeight(3 + abs((sin((i+timer)/this.sentence.length*PI) * 15)))
          strokeWeight(this.branchValue)
          line(0, 0, 0, -this.len)
          translate(0, -this.len)
          if (i/this.sentence.length > 0.9) {
            if(random() > 0.2) {
              let flowerColor = color('red')
              flowerColor.setAlpha(150)
              fill(flowerColor)
              stroke(flowerColor)
              //triangle(0, 0, -2, -5, 2, -5)
              arc(0, 0, 10, 10, 180, 220)
            }
          } else if (this.branchValue <= 2) {
            if (random() > 0.7) {
              let flowerColor = color('#5B3739')
              flowerColor.setAlpha(150)
              fill(flowerColor)
              stroke(flowerColor)
              //triangle(0, 0, -2, -5, 2, -5)
              arc(0, 0, 10, 10, 180, 220)
            }
          }
          //point(0,0)
          //point(0, -this.len)
          
        }
  
      } else if (current == "+") {
        rotate(this.angle * parseInt(this.sentence.charAt(i+1)))
        i++
      } else if (current == "-") {
        rotate(-this.angle * parseInt(this.sentence.charAt(i+1)))
        i++
      } else if (current == "[") {
        this.branchValue -= 1;
        push();
      } else if (current == "]") {
        this.branchValue += 1;
        pop();
      }
    }
  }
  
  function plantgen() {
    var plant = new lsys()
    
    plant.angle = radians(ceil(random(3) + 1))
    if (random() < 0.33) {
      plant.axiom = '+' + floor(random(20)).toString() + 'F'
      let num = floor(random(4) + 4)
      plant.rules1.becomes = 'F-1F-' + num.toString() + '[XY]+' + num.toString() + '[XY]'
    } else if (random() < 0.66){
      plant.axiom = '-' + floor(random(20)).toString() + 'F'
      let num = floor(random(4) + 4)
      plant.rules1.becomes = 'F+1F+' + num.toString() + '[XY]-' + num.toString() + '[XY]'
    } else {
      if (random() > 0.5)
        plant.axiom = '-' + floor(random(20)).toString() + 'F'
      else
        plant.axiom = '-' + floor(random(20)).toString() + 'F'
      let num = floor(random(4) + 4)
      plant.rules1.becomes = 'FF-' + num.toString() + '[XY]+' + num.toString() + '[XY]'
    }
    return plant
  }
  
  
  
  //Runs on loading.
  function setup() {
    
    // Set background and canvas
    createCanvas(900, 740)
    angleMode(RADIANS)
    let colorValue = color('#ffdedd')
    setGradient(color(255, 204, 0), color(255));
    
    addSpots()
    
    resetMatrix()
    
    for (let bush = 0; bush < 3; bush++) {  
      for (let n = 0; n < 10; n++) {
        var plant = plantgen()
        for (let i = 0; i < 4; ++i) {
          plant.generate()
        }    
        push()
        translate(width/3 + bush*(150), height)
        plant.draw()
        pop()
  
      }
    }
  }
  
  function setGradient(c1, c2) {
    // noprotect
    noFill()
    for (var y = 0; y < height; y++) {
      var c = lerpColor(c1, c2, y/(height*1.2))
      stroke(c)
      line(0, y, width, y)
    }
  }
  
  function addSpots() {
    noFill()
    var c = color('white')
    c.setAlpha(100)
    stroke(c)
    let i = 0
    while(i < 1000) {
      circle(random(width), random(height), 10, 10)
      i++
    }
  }
  
  function mouseDragged() {
    var c = color('#808080')
    c.setAlpha(150)
    stroke(c)
    noFill()
    if(mouseIsPressed)
      circle(mouseX, mouseY, 15, 15)
  }