function renderInvoices() {
    for (let i = 0; i < invoices.length; i++) {
        document.getElementById("invoices").innerHTML =
            document.getElementById("invoices").innerHTML +
            `<div class="invoice">
                <div>${invoices[i].invoiceId}</div>
                <div>${invoices[i].clientName}</div>
                <div>${invoices[i].clientNUI}</div>
                <div>${invoices[i].clientAddress}</div>
            </div>`
    }
}

renderInvoices()
