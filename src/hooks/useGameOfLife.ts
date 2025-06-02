import {useCallback, useEffect, useRef, useState} from "react";
import type {Grid} from "../types";
import {getNextGeneration} from "../api/gameOfLife";

const createEmptyGrid = (rows: number, cols: number): Grid =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

export const useGameOfLife = (rows = 25, cols = 25) => {
    const [grid, setGrid] = useState<Grid>(() => createEmptyGrid(rows, cols));
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const toggleCell = (r: number, c: number) => {
        setGrid((g) => {
            return g.map((row, i) =>
                row.map((cell, j) => (i === r && j === c ? (cell ? 0 : 1) : cell))
            );
        });
    };

    const step = useCallback(() => {
        setGrid((g) => getNextGeneration(g));
    }, []);

    const run = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(step, 200);
        }
    };

    const stop = () => {
        setIsRunning(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const stepX = (x: number) => {
        for (let i = 0; i < x; i++) {
            step();
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return { grid, toggleCell, step, run, stop, stepX, isRunning };
};
