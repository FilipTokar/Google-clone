import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

export default function Search() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000de'
            }
        }
    })

  return (
    <div className='search'>
      <div className="search__wrapper">
        <SearchIcon className="search__input--icon"/>
        <input type="text" />
        <MicIcon />
      </div>
      <div className="search-buttons__wrapper">
        <ThemeProvider theme={theme}>
        <Button color="primary" variant='outlined'>Google Search</Button>
        <Button color="primary" variant='outlined'>I'm feeling lucky</Button>
        </ThemeProvider>
      </div>
    </div>
  )
}
