function renderInvoices() {
    for (let i = 0; i < invoices.length; i++) {
        addHtmlToId("invoices", `<div class="invoice" onclick="openInvoice(${invoices[i].invoiceId})">
                <div class="column-id">${invoices[i].invoiceId}</div>
                <div class="column-name">${invoices[i].clientName}</div>
                <div class="column-nui">${invoices[i].clientNUI}</div>
                <div class="column-add">${invoices[i].clientAddress}</div>
                <div class="column-total">${calculateTotalPriceOfAnInvoice(invoices[i].productsOrServices) + ' ' + invoices[i].currency}</div>
            </div>`)
    }
    addHtmlToId("invoices", `<div class="invoice total">
        <div>${invoices.length}</div>
        <div>${calculateTotalOfAllInvoices(invoices) }</div>
    </div>`)
}

function calculateTotalOfAllInvoices(invoices) {
    let total = 0;
    for (let i = 0; i < invoices.length; i++) {
        total = total + calculateTotalPriceOfAnInvoice(invoices[i].productsOrServices);
    }
    return total
}

function addHtmlToId(id, html) {
    document.getElementById(id).innerHTML =
        document.getElementById(id).innerHTML +
        html
}

function calculateTotalPriceOfAnInvoice(products) {
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
