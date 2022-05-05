function renderInvoices() {
    document.getElementById("invoices").innerHTML = ""
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
        <div>${calculateTotalOfAllInvoices(invoices)}</div>
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

function saveInvoice() {
    const clientName = document.getElementById("client_name").value;
    const clientNui = document.getElementById("client_nui").value;
    const clientAdd = document.getElementById("client_add").value;
    const clientPhone = document.getElementById("client_phone").value;
    const currency = document.getElementById("currency").value;
    if (clientName === '' || clientNui === '' || clientAdd === '' || clientPhone === '') {
        alert("all fields are required");
        return;
    }
    document.getElementById("client_name").value = '';
    document.getElementById("client_nui").value = '';
    document.getElementById("client_add").value = '';
    document.getElementById("client_phone").value = '';
    document.getElementById("currency").value = '$';

    const newInvoice = {
        invoiceId: getNextInvoiceId(),
        clientName: clientName,
        clientNUI: clientNui,
        clientAddress: clientAdd,
        clientPhone: clientPhone,
        currency: currency,
        productsOrServices: []
    }

    invoices.push(newInvoice);
    renderInvoices();
}

function getNextInvoiceId() {
    return invoices[invoices.length - 1].invoiceId + 1
}

function toggleAddInvoiceForm() {
    if (document.querySelector(".invoice-form").style.display === 'flex') {
        document.querySelector(".invoice-form").style.display = 'none';
        document.querySelector(".add-button").innerHTML = `<i class="fa-solid fa-plus"></i>ADD`;
    } else {
        document.querySelector(".invoice-form").style.display = 'flex';
        document.querySelector(".add-button").innerHTML = `<i class="fa-solid fa-minus"></i>CLOSE`;

    }
}

renderInvoices()
