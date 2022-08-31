import { Elderly, Sell } from '@mui/icons-material'
import { FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'

export const ListComp = (props) => {
  const { text, className, index, checked } = props
  return (
    <div className={'flex flex-row w-full items-center cursor-pointer ' + className}>
      <Checkbox
        checked={checked}
        sx={{
          color: 'white',
          '& .MuiSvgIcon-root': { fontSize: 40 },
          '&.Mui-checked': {
            color: '#32DF16',
          },
          defaultValue: 'checked',
        }}
      />
      <div className="w-[10px]"></div>
      <p className="font-roboto text-[30px] text-white">{text}</p>
    </div>
  )
}
