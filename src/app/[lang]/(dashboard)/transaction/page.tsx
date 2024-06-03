// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import InvoiceList from '@views/transaction/index'

import { fetchData } from '@/helpers/fetcher'

export default async function Page() {
  const dataCatalog = await fetchData({
    url: '/wallet/transactions'
  })

  const data = dataCatalog?.data

  return (
    <Grid container>
      <Grid item xs={12}>
        <InvoiceList invoiceData={data} />
      </Grid>
    </Grid>
  )
}
