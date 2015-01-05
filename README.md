## BowlingJS

##Task

Count and sum the scores of a bowling game of one player(in javascript).

A bowling game consists of 10 frames. In each frame the player has one or two bowls to knock down 10 pins. The score of a frame is the number of knocked down pins plus bonuses for strikes(the score of the next two bowls) and spares(the score of the next bowl). After every frame the 10 pins are reset.


### Languages/Platforms/Tools

* JavaScript
* Jasmine
* JavaScript Console

### How to use

Clone this repo:
```sh
$ git clone https://github.com/EllaNancyFay/Bowling.git
```

Change into the directory:
```sh
$ cd Bowling
```

Run the Jasmine tests:
```sh
$ open SpecRunner.html
```

To run the code (e.g Perfect Game):

Run the tests (as above) and open the console.
```sh
$ game = new Game;
$ game.frames[0].bowl(10)
$ game.frames[1].bowl(10)
$ game.frames[2].bowl(10)
$ game.frames[3].bowl(10)
$ game.frames[4].bowl(10)
$ game.frames[5].bowl(10)
$ game.frames[6].bowl(10)
$ game.frames[7].bowl(10)
$ game.frames[8].bowl(10)
$ game.frames[9].bowl(10)
$ game.frames[9].bowl(10)
$ game.applyBonus();
$ game.frames[9].bonusBall(10);
$ game.pushTotal();
$ game.calculateTotal(); 
    
```

I have implemented a bowl method with which you can specify number of pins hit.

### Improvements

* Clean up applyBonuses method.
* Further testing of diferent scoring secnarios to ensure all are covered.
* Name frames rather than using [0] index to specify frames.(e.g Frame1 rather than game.frames[0]).
