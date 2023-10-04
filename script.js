const board = document.getElementById('board');
        const message = document.getElementById('message');
        let currentPlayer = 'X';
        const cells = [];

        // Create the game board
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.appendChild(cell);
            cells.push(cell);

            // Add click event listener to each cell
            cell.addEventListener('click', () => {
                if (!cell.textContent && !checkWinner()) {
                    cell.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    message.textContent = `Player ${currentPlayer}'s turn`;

                    if (checkWinner()) {
                        message.textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
                    } else if (isBoardFull()) {
                        message.textContent = 'It\'s a draw!';
                    }
                }
            });
        }

        // Check for a winner
        function checkWinner() {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    cells[a].style.backgroundColor = '#4caf50';
                    cells[b].style.backgroundColor = '#4caf50';
                    cells[c].style.backgroundColor = '#4caf50';
                    return true;
                }
            }

            return false;
        }

        // Check if the board is full (a draw)
        function isBoardFull() {
            return cells.every(cell => cell.textContent !== '');
        }