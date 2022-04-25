// function renderInvoices() {
//     for (let i = 0; i < invoices.length; i++) {
//         document.getElementById("invoices").innerHTML =
//             document.getElementById("invoices").innerHTML +
//             `<div class="invoice" onclick="openInvoice(${invoices[i].invoiceId})">
//                 <div class="column-id">${invoices[i].invoiceId}</div>
//                 <div class="column-name">${invoices[i].clientName}</div>
//                 <div class="column-nui">${invoices[i].clientNUI}</div>
//                 <div class="column-add">${invoices[i].clientAddress}</div>
//             </div>`
//     }
// }


// function invoiceRender ()
//     {

//         for (let i = 0; i < invoicesData.length; i++) {
//             document.querySelector("#invoicesData").innerHTML = 
//             document.querySelector("#invoicesData").innerHTM + 
//             `<div class="tablesData" onclick="openInvoice(${invoicesData[i].invoiceId})">
//                 <div class="column-id">${invoicesData[i].invoiceId}</div>
//                 <div class="column-name">${invoicesData[i].clientName}</div>
//                 <div class="column-nui">${invoicesData[i].clientNUI}</div>
//                 <div class="column-add">${invoicesData[i].clientAddress}</div>

//             </div>`
//         }
// //     }

// <tr>
// <td class="id">${invoicesData[i].invoiceId}</td>
// <td class="id">${invoicesData[i].clientName}</td>
// <td class="id">${invoicesData[i].clientNUI}</td>
// <td class="id">${invoicesData[i].clientAddress}</td>
// </tr>    

    function invoiceRender () {

        for (let i = 0; i < invoicesData.length; i++) {
            document.querySelector("#invoices").innerHTML = 
            document.querySelector("#invoices").innerHTML + 
            `<div class="tablesData" onclick="openInvoice(${invoicesData[i].invoiceId})">
             <table>
                    <tr>
                        <td class="id-Name">${invoicesData[i].invoiceId}</td>
                        <td class="company-name">${invoicesData[i].clientName}</td>
                        <td class="client-nui">${invoicesData[i].clientNUI}</td>
                        <td class="address">${invoicesData[i].clientAddress}</td>
                       
                    </tr>
                </table>
            </div>`
        }
     }


     // function openInvoice(invoiceId) {
//     alert(invoiceId) ;
//             }


            // openInvoice(invoicesData);
invoiceRender();
