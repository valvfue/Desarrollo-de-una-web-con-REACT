import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import YouTube from 'react-youtube';

function Aside() {
  const [selectedHero, setSelectedHero] = useState(null);
  
  const heroes = [
    { label: 'Iron Man', id: 'iron-man' },
    { label: 'Capitán América', id: 'capitan-america' },
    { label: 'Thor', id: 'thor' },
    { label: 'Hulk', id: 'hulk' },
    { label: 'Black Widow', id: 'black-widow' },
    { label: 'Spider Man', id: 'spider-man' },
    { label: 'Black Panther', id: 'black-panther' },
    { label: 'Doctor Strange', id: 'doctor-strange' },
    { label: 'Ant Man', id: 'ant-man' },
    { label: 'Scarlet Witch', id: 'scarlet-witch' },
    { label: 'Capitán Marvel', id: 'capitan-marvel' },
  ];

  const handleHeroChange = (event, newValue) => {
    setSelectedHero(newValue);
  };

  const videoOptions = {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ margin: '0 auto', width: '80%', padding: '20px', marginTop: '40px' }}>
      <Autocomplete
        options={heroes}
        getOptionLabel={(option) => option.label}
        onChange={handleHeroChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Elige el héroe de Marvel que más te guste."
            variant="outlined"
            fullWidth
            style={{ marginBottom: '15px' }}  
            InputLabelProps={{
              style: {
                whiteSpace: 'normal',  
              }
            }}
          />
        )}
      />
      <p style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
        Héroe seleccionado: {selectedHero ? selectedHero.label : 'Ninguno'}
      </p>
      <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
        <YouTube videoId="CSr4kLtdsmo" opts={videoOptions} />
      </div>
    </div>
  );
}

export default Aside;



