import React from "react";
import type {Grid} from "../types";
import { Box } from "@mui/material";

interface BoardProps {
    grid: Grid;
    toggleCell: (r: number, c: number) => void;
}

export const Board: React.FC<BoardProps> = ({ grid, toggleCell }) => {
    return (
        <Box
            display="grid"
            justifyContent="center"
            alignItems="center"
            gridTemplateColumns={`repeat(${grid[0].length}, 20px)`}
            sx={{ margin: "0 auto" }}
        >
            {grid.flatMap((row, r) =>
                row.map((cell, c) => (
                    <Box
                        key={`${r}-${c}`}
                        width={20}
                        height={20}
                        onClick={() => toggleCell(r, c)}
                        sx={{
                            border: "1px solid #ccc",
                            backgroundColor: cell ? "black" : "white",
                            cursor: "pointer",
                        }}
                    />
                ))
            )}
        </Box>
    );
};
