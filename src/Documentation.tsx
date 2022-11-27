import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Documentation = () => {

    return(
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
            Documentation
            </Typography>
            <Typography variant="h2" gutterBottom>
            Context
            </Typography>
            <Typography variant="h2" gutterBottom>
            The Design Process
            </Typography>
            <Typography variant="h2" gutterBottom>
            Proposal Questions Revisited
            </Typography>
            <Typography variant="h2" gutterBottom>
            Reflection
            </Typography>
        </Box>
    )
}

export default Documentation

