var solveNQueens = function(n) {
    let result = [];

    function isSafe(board, row, col, n) {
        for (let i=0; i<row;i++) {
            if (board[i][col]==='Q') return false;
        }
        for (let i=row-1, j=col-1; i>=0 && j>=0; i--, j--) {
            if (board[i][j]==='Q') return false;
        }

        for (let i=row-1,j=col+1;i>=0 && j<n; i--, j++) {
            if (board[i][j]==='Q') return false;
        }

        return true;
    }

    function solve(board, row) {
        if (row===n) {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                let rowStr = '.'.repeat(n).split('');
                rowStr[col] = 'Q';
                board.push(rowStr.join(''));

                solve(board, row + 1);
                board.pop();
            }
        }
    }

    solve([], 0);
    return result;
};
