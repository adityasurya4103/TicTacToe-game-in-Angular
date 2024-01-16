import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})


export class SquareComponent {


  square : any =[]
  xIsNext = true;
  champion ='';
  counter = 0;
  gameDraw='';
  newPage=true;

  constructor(){

  }

  startGame(){
    this.square= Array(9).fill(null);
    this.champion='';
    this.gameDraw=''
    this.counter=0;
    this.newPage=false;
  }

  get getPlayer(){
    return this.xIsNext? 'X':'O';
  }

  makeMove(index:number){
    if(!this.square[index]){
      this.square.splice(index,1,this.getPlayer);
      this.xIsNext=!this.xIsNext;
      this.counter++;
    }

    this.champion= this.findChampion()

    if(!this.champion && this.counter==9){
      this.gameDraw='Draw'
    }
  }

  findChampion(){

    // 0 1 2
    // 3 4 5
    // 6 7 8

    const lines=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    for (let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(this.square[a] && this.square[a]===this.square[b]
        && this.square[a]===this.square[c]) {
          return this.square[a];
        }
    }

    return null;

  }
  
}
