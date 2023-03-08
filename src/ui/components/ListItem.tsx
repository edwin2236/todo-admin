import { Checkbox, Grid, Typography } from '@mui/material'
import Button from '@mui/material-next/Button'
import { FC } from 'react'

import RemoveIcon from './RemoveIcon'

interface ListItemProps {
  title: string
  completed: boolean
}

const ListItem: FC<ListItemProps> = ({ title, completed }) => {
  return (
    <Grid
      item
      xs={6}
      sx={{
        border: 1,
        borderColor: '#7a7979',
        borderRadius: 1,
        margin: '2px',
      }}
    >
      <Checkbox
        checked={completed}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography>{title}</Typography>
      <Button variant="filled" size="small">
        <RemoveIcon size="24" />
      </Button>
    </Grid>
  )
}

export default ListItem
