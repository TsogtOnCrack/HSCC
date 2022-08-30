import { Elderly, Sell } from '@mui/icons-material'
import { FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'

export const ListComp = (props) => {
  const { text, className, index, list } = props
  return (
    <div className={'flex flex-row w-full items-center ' + className}>
      <Checkbox
        sx={{
          color: 'white',
          '& .MuiSvgIcon-root': { fontSize: 40 },
          '&.Mui-checked': {
            color: '#32DF16',
          },
        }}
        onClick={() => {
          list.map((el) => {
            el.name == text ? (el.stat = el.stat + 1) : (el.stat = el.stat)
          })
        }}
      />
      <div className="w-[10px]"></div>
      <p className="font-roboto text-[30px] text-white">{text}</p>
    </div>
  )
}
