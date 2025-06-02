import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Stack from '@mui/material/Stack';

interface ControlsProps {
    onStep: () => void;
    onRun: () => void;
    onStop: () => void;
    onStepX: (x: number) => void;
    isRunning: boolean;
}

export const Controls: React.FC<ControlsProps> = ({onStep, onRun, onStop, onStepX, isRunning}) => {
    const [steps, setSteps] = useState(10);

    return (
        <Stack direction="row" spacing={2} mt={2}>
            <Button variant="contained" onClick={onStep} disabled={isRunning}>Step</Button>
            <Button variant="contained" onClick={isRunning ? onStop : onRun}>{isRunning ? "Stop" : "Play"}</Button>
            <TextField
                type="number"
                value={steps}
                onChange={(e) => setSteps(Number(e.target.value))}
                label="Steps"
                size="small"
            />
            <Button variant="contained" onClick={() => onStepX(steps)} disabled={isRunning}>Step X</Button>
        </Stack>
    );
}
