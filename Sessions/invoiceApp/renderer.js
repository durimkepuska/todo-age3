function renderInvoices() {
    for (let i = 0; i < invoices.length; i++) {
        addHtmlToId("invoices", `<div class="invoice" onclick="openInvoice(${invoices[i].invoiceId})">
                <div class="column-id">${invoices[i].invoiceId}</div>
                <div class="column-name">${invoices[i].clientName}</div>
                <div class="column-nui">${invoices[i].clientNUI}</div>
                <div class="column-add">${invoices[i].clientAddress}</div>
                <div class="column-total">${calculateTotalPrice(invoices[i].productsOrServices)}</div>
            </div>`)
    }
}

function addHtmlToId(id, html) {
    document.getElementById(id).innerHTML =
        document.getElementById(id).innerHTML +
        html
}

function calculateTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + (products[i].pricePerUnit * products[i].amount);
    }
    return total;
}

function openInvoice(invoiceId) {
    alert(invoiceId)
}

renderInvoices()
