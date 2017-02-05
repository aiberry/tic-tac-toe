class TicTacToe {
    constructor(array){
        this.array=[[null,null,null],[null,null,null],[null,null,null],1];

    }

    getCurrentPlayerSymbol() { if (this.array[3]==0) return 'o'; else return 'x';
    }

    nextTurn(rowIndex, columnIndex) {




        if  (this.array[rowIndex][columnIndex]==null)
        {if (this.array[3]==1) this.array[rowIndex][columnIndex]='x';
            if (this.array[3]==0) this.array[rowIndex][columnIndex]='o';
            if (this.array[3]==1) this.array[3]=0; else this.array[3]=1;

        };

        //nextTurn(x, y) это следующие координаты, если прошлые
        // указывают на ячейку где уже есть x или o,
        // ход не удается(не записывается в ячейеку), то ходит тот
        // же кто и ходил повторно, но с другими координатами

        //should properly update class state (change current player, update marks
        // storage etc.)
    }

    isFinished() {        //should return true if game is finished (e.g. there is a winner or it is a draw)
        var fin=false;

        for (var nrow=0; nrow<=2; nrow++)
        {if (this.array[nrow][0]==this.array[nrow][1])
        {if (this.array[nrow][1]==this.array[nrow][2])
        {if (this.array[nrow][2]!=null) fin=true}}};

        for (var t=0; t<=2; t++)
        {if (this.array[0][t]==this.array[1][t])
        {if (this.array[1][t]==this.array[2][t])
        {if (this.array[2][t]!=null) fin=true}}};

        if (((this.array[0][0]==this.array[1][1]) && (this.array[1][1]==this.array[2][2])) &&
            (this.array[0][0]!=null)) fin=true;

        if (((this.array[2][0]==this.array[1][1]) && (this.array[1][1]==this.array[0][2])) &&
            (this.array[2][0]!=null)) fin=true;

        //  if ((this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) && this.array[2][1]!=null)
        // fin=true;

        var numer=0;

        for (var i=0; i<=2; i++) {for (var ii=0; ii<=2; ii++) if (this.array[i][ii]!=null) numer=numer+1};
        if (numer==9) fin=true;
        return fin;


    }

    getWinner() {                   //should return winner symbol (x or o) or null if there is  nowinner yet
        var win=null;
        if (this.array[0][0]==this.array[0][1] && this.array[0][0]==this.array[0][2]) win=this.array[0][0]; //строки
        if (this.array[1][0]==this.array[1][1] && this.array[1][0]==this.array[1][2]) win=this.array[1][0];
        if (this.array[2][0]==this.array[2][1] && this.array[2][0]==this.array[2][2]) win=this.array[2][0];

        if (this.array[0][0]==this.array[1][0] && this.array[0][0]==this.array[2][0]) win=this.array[0][0]; //колонны
        if (this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) win=this.array[0][1];
        if (this.array[0][2]==this.array[1][2] && this.array[0][2]==this.array[2][2]) win=this.array[0][2];

        if (this.array[0][0]==this.array[1][1] && this.array[0][0]==this.array[2][2]) win=this.array[0][0];//диагонали
        if (this.array[2][0]==this.array[1][1] && this.array[2][0]==this.array[0][2]) win=this.array[2][0];
        return win;
    }

    noMoreTurns() {             //should return true if there is no more fields to place a x or o
        var nomore=true;
        for (var i=0; i<=2; i++) {for (var ii=0; ii<=2; ii++) {if (this.array[i][ii]==null) nomore=false}};
        return nomore;

    }

    isDraw() {                 // should return true if there is no more turns and no winner

        var vin=true;
        if (this.array[0][0]==this.array[0][1] && this.array[0][0]==this.array[0][2]) vin=false;//строки
        if (this.array[1][0]==this.array[1][1] && this.array[1][0]==this.array[1][2]) vin=false;
        if (this.array[2][0]==this.array[2][1] && this.array[2][0]==this.array[2][2]) vin=false;

        if (this.array[0][0]==this.array[1][0] && this.array[0][0]==this.array[2][0]) vin=false; //колонны
        if (this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) vin=false;
        if (this.array[0][2]==this.array[1][2] && this.array[0][2]==this.array[2][2]) vin=false;

        if (this.array[0][0]==this.array[1][1] && this.array[0][0]==this.array[2][2]) vin=false;//диагонали
        if (this.array[2][0]==this.array[1][1] && this.array[2][0]==this.array[0][2]) vin=false;

        for (var i=0; i<=2; i++) {for (var ii=0; ii<=2; ii++) {if (this.array[i][ii]==null) vin=false}};
        return vin;

    }
//should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {return this.array[rowIndex][colIndex];}





}

module.exports = TicTacToe;
