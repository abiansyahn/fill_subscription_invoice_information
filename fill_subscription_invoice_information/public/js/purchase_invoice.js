frappe.ui.form.on("Purchase Invoice", {
    refresh: function(frm) {
        if (frm.doc.docstatus === 1 && frm.doc.subscription) {
            frm.set_df_property("bill_no", "allow_on_submit", frm.doc.bill_no ? 0 : 1);
            frm.set_df_property("bill_date", "allow_on_submit", frm.doc.bill_date ? 0 : 1);
        }
    }
});