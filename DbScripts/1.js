 print("#####  starting execution : mongodb scripts ");
#---------------site menu---------------#
use SpreadViewDb
db.Pages.update({name: "siteMenu",group:"menu"},
		{viewId:0,name: "siteMenu",group:"menu", viewData : {}},
		{upsert: true}
	       );

#---------------end---------------#

#---------------temporary items---------------#
use SpreadViewDb
db.Pages.update({name: "dynamicForm",group:"temp"},
		{viewId:0,name: "dynamicForm",group:"temp", viewData : {"formGroupInfo":{"type":"cust","renderingInfo":{"products":{"order":5,"controlType":"custom","dataType":"products","visibility":"this.form.controls.firstName.value == \"products\"","disabled":"!this.form.controls.emailAddress.value"},"braveryRating":{"order":3},"firstName":{"order":1},"emailAddress":{"order":2},"product":{"order":4},"save":{"order":7}}},"braveryRating":{"key":"braveryRating","label":"Bravery Rating","validators":["required"],"order":1,"controlType":"dropdown","options":[{"key":"Solid","value":"Solid"},{"key":"Great","value":"Great"},{"key":"good","value":"Good"},{"key":"unproven","value":"Unproven"}]},"firstName":{"value":"Bombasto","key":"firstName","label":"First Name","validators":["required"],"order":1,"controlType":"textbox","type":""},"emailAddress":{"key":"emailAddress","label":"Email","validators":["required","email"],"order":1,"controlType":"textbox","type":""},"product":{"formGroupInfo":{"type":"product","renderingInfo":{"importedDate":{"order":3,"visibility":"this.form.controls.imported.value == true","disabled":"this.form.controls.name.value  == ''"},"name":{"order":1},"description":{"order":4},"imported":{"order":2}}},"name":{"value":"","key":"name","label":"Product Name","validators":["required"],"order":1,"controlType":"textbox","type":""},"description":{"value":"","key":"description","label":"Product Description","validators":["required"],"order":1,"controlType":"textbox","type":""},"imagePath":"/assets/images/cover_img0.jpg","testArray":["343","999","9i898"],"imported":{"value":false,"key":"imported","label":"Is Imported","order":1,"controlType":"checkbox"},"importedDate":{"value":null,"key":"importedDate","label":"Imported Date","validators":["required"],"order":1,"controlType":"datepicker"}},"products":[{"formGroupInfo":{"type":"product","renderingInfo":{"name":{"order":1},"description":{"order":2}}},"name":{"value":"","key":"name","label":"Product Name","validators":["required"],"order":1,"controlType":"textbox","type":""},"description":{"value":"","key":"description","label":"Product Description","validators":["required"],"order":1,"controlType":"textbox","type":""},"imagePath":"/assets/images/cover_img1.jpg","testArray":["343","999","9i898"]},{"formGroupInfo":{"type":"product","renderingInfo":{"name":{"order":1},"description":{"order":2}}},"name":{"value":"","key":"name","label":"Product Name","validators":["required"],"order":1,"controlType":"textbox","type":""},"description":{"value":"","key":"description","label":"Product Description","validators":["required"],"order":1,"controlType":"textbox","type":""},"imagePath":"/assets/images/cover_img2.jpg","testArray":["343","999","9i898"]}],"save":{"value":"Save Data","key":"save","label":"n/a","order":1,"controlType":"button","type":"submit"}}},
		{upsert: true}
	       );

#---------------end---------------#