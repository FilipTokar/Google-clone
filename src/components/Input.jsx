import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

export default function Input({hideButtons = false}) {

    // Material UI theme
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000de'
            }
        }
    })

    const [state, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    function search (event) {
      event.preventDefault()

      console.log(input)

      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term:input
      })

      navigate('/search')
    }

  return (
    <form className='search'>
      <div className="search__wrapper">
        <SearchIcon className="search__input--icon"/>
        <input type="text" value={input}  onChange={(event) => setInput(event.target.value)}/>
        <MicIcon />
      </div>

      {
        !hideButtons ? 
          <div className="search-buttons__wrapper">
        <ThemeProvider theme={theme}>
        <Button onClick={search} type='submit' color="primary" variant='outlined'>Google Search</Button>
        <Button color="primary" variant='outlined'>I'm feeling lucky</Button>
        </ThemeProvider>
        </div>
         : 
        
          
      <div className="search-buttons__wrapper">
              <ThemeProvider theme={theme}>
              <Button className='search__btn--hiden' onClick={search} type='submit' color="primary" variant='outlined'>Google Search</Button>
              <Button className='search__btn--hiden' color="primary" variant='outlined'>I'm feeling lucky</Button>
              </ThemeProvider>
              
       </div> 
      }
      
      
    </form>
  )
}
