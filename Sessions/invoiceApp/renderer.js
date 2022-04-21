function renderInvoices() {
    for (let i = 0; i < invoices.length; i++) {
        document.getElementById("invoices").innerHTML =
            document.getElementById("invoices").innerHTML +
            `<div class="invoice" onclick="openInvoice(${invoices[i].invoiceId})">
                <div class="column-id">${invoices[i].invoiceId}</div>
                <div class="column-name">${invoices[i].clientName}</div>
                <div class="column-nui">${invoices[i].clientNUI}</div>
                <div class="column-add">${invoices[i].clientAddress}</div>
            </div>`
    }
}


function openInvoice(invoiceId) {
    alert(invoiceId)
}

renderInvoices()
