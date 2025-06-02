import type {Grid} from "../types";

export function getNextGeneration(grid: Grid): Grid {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const getCell = (r: number, c: number): number => {
        if (r < 0 || r >= numRows || c < 0 || c >= numCols) return 0;
        return grid[r][c];
    };

    const newGrid: Grid = grid.map((row, r) =>
        row.map((cell, c) => {
            const liveNeighbors = [
                getCell(r - 1, c - 1),
                getCell(r - 1, c),
                getCell(r - 1, c + 1),
                getCell(r, c - 1),
                getCell(r, c + 1),
                getCell(r + 1, c - 1),
                getCell(r + 1, c),
                getCell(r + 1, c + 1),
            ].reduce((a, b) => a + b, 0);

            if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) return 0;
            if (cell === 0 && liveNeighbors === 3) return 1;
            return cell;
        })
    );

    return newGrid;
}
