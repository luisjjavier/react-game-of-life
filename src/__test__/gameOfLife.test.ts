// TEST FILE: src/__tests__/gameOfLife.test.ts
import { getNextGeneration } from "../api/gameOfLife";
import type {Grid} from "../types";

describe("getNextGeneration", () => {
    it("should return an empty grid when given an empty grid", () => {
        const grid: Grid = [[0, 0], [0, 0]];
        const next = getNextGeneration(grid);
        expect(next).toEqual([[0, 0], [0, 0]]);
    });

    it("should correctly handle a blinker oscillator", () => {
        const grid: Grid = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];
        const expectedNext: Grid = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];
        expect(getNextGeneration(grid)).toEqual(expectedNext);
    });

    it("should die from underpopulation", () => {
        const grid: Grid = [[1, 0], [0, 0]];
        const next = getNextGeneration(grid);
        expect(next).toEqual([[0, 0], [0, 0]]);
    });

    it("should create life with exactly 3 neighbors", () => {
        const grid: Grid = [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 0],
        ];
        const expectedNext: Grid = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0],
        ];
        expect(getNextGeneration(grid)).toEqual(expectedNext);
    });
});
