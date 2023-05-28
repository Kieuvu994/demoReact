
import {Stack} from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import {useCallback, useEffect, useRef} from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import {Addchart} from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import DownloadIcon from '@mui/icons-material/Download'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const SimpleFrame = props => {

    const saveBtnRef = useRef()

    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
        // console.log(`Key pressed: `,event);
        if (event.keyCode === 13 && event.shiftKey) {
            saveBtnRef.current.click()
        }
    }, []);

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);
    return (
        <>
            <Grid item>
                <Toolbar variant='dense' sx={{
                    '&.MuiToolbar-root': {
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    minHeight: 1
                }}
                >
                    {/* <TripOriginIcon fontSize='100' color='primary'/> */}
                    <Typography
                        component='h2'
                        variant='h5'
                        color='inherit'
                        fontWeight='400'
                        fontSize='25px'
                        flexGrow={20}
                        sx={
                            {
                                flexShrink: "0",
                                fontFamily: "'Open Sans', sans-serif",
                                "height": "10%",
                                lineHeight: "50px",
                                "margin": 1,
                                borderLeft: "5px solid #1c04b8",
                            }
                        }
                    >
                        {props.syscode}

                    </Typography>
                    <Typography flexGrow={0.5} component='div'>
                        <Stack
                            spacing={1} direction={'row'}>
                            {props.onAdd &&
                                <Button size='small' variant='contained' color='primary' startIcon={<AddCircleIcon/>}
                                        onClick={props.onAdd}>Add</Button>}
                            {props.onSearch &&
                                <Button ref={saveBtnRef} size='small' variant='contained' color='info'
                                        startIcon={<SearchIcon/>}
                                        onClick={props.onSearch}>Search</Button>}
                            {props.onSave &&
                                <Button size='small' variant='contained' color='secondary' startIcon={<Addchart/>}
                                        onClick={props.onSave}>Save</Button>}
                            {props.onClear &&
                                <Button size='small' variant='contained' color='error' startIcon={<ClearIcon/>}
                                        onClick={props.onClear}>Clear</Button>}
                            {props.onExcel &&
                                <Button size='small' variant='contained' color='success' startIcon={<DownloadIcon/>}
                                        onClick={props.onExcel}>Excel</Button>}

                        </Stack>
                    </Typography>

                </Toolbar>
            </Grid>

            {
                props.filter && (
                    <Grid item>
                        {props.filter}
                    </Grid>)
            }

            <Grid item flex={1} display={'flex'} flexDirection={'column'} height={0}>
                {props.children}
            </Grid>

            {
                props.logger && (
                    <Grid item>
                        {props.logger}
                    </Grid>)
            }
        </>
    )
}
export default SimpleFrame