import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";
import { useGameOfLife } from "./hooks/useGameOfLife";

const App: React.FC = () => {
    const { grid, toggleCell, step, run, stop, stepX, isRunning } = useGameOfLife();

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Typography variant="h4" align="center" mt={4} mb={2}>
                    Conway's Game of Life
                </Typography>
                <Board grid={grid} toggleCell={toggleCell} />
                <Controls onStep={step} onRun={run} onStop={stop} onStepX={stepX} isRunning={isRunning} />
            </Box>
        </Container>
    );
};

export default App;
