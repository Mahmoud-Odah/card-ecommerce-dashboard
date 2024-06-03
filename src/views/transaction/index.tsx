// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { InvoiceType } from '@/types/invoiceTypes'

// Component Imports
import InvoiceListTable from './InvoiceListTable'


const InvoiceList = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
