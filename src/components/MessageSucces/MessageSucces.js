import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSucces = ({purchaseId}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
        Compra realizada con exito: Código de transacción: {purchaseId}
      </Alert>
    </Stack>
    
  )
}

export default MessageSucces