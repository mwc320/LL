

var casper = require("casper").create();
var length;
// var BALLS = {13VH08570200};
var licNo = '605412'
var fs = require('fs');
var url = "http://a810-bisweb.nyc.gov/bisweb/LicenseTypeServlet?vlfirst=N";
	casper.start(url, function() {
		this.echo('Inputting License Number...');
		this.sendKeys('input[name="licno"]', licNo);
		this.echo('License Number, Check.');
		this.evaluate(function() {
		    $('select[name="licensetype"]').val('G').change();
		});
		this.echo('Selected Contractor!'); 
	    this.click('input[name="go3"]');
	    this.echo('Getting Results...');
	    this.wait(200);
	    this.echo('Results are loaded.');
		this.click('body center table:nth-child(2) tbody:nth-child(0) tr:nth-child(1) td:nth-child(0) a');
	    this.wait(200);
	    this.echo('Do me.');
		
			// casper.then(function paso2() {
			// 		var jsonStr = this.evaluate(function(){
			// 		    var data = {};
			// 		    data.businessName = document.querySelector('#full_name').textContent;
			// 		    data.ownerName = document.querySelector('#owner_name').textContent;
			// 		    data.dba = document.querySelector('#doing_business_as').textContent;
			// 		    data.address1 = document.querySelector('#addr_line_1').textContent;
			// 		    data.city = document.querySelector('#addr_city').textContent;
			// 		    data.state = document.querySelector('#addr_state').textContent;	
			// 		    data.zip = document.querySelector('#addr_zipcode').textContent;
			// 			data.profession = document.querySelector('#profession_id').textContent;
			// 		    data.licenseType = document.querySelector('#license_type').textContent;
			// 		    data.licenseNo = document.querySelector('#license_no').textContent;
			// 		    data.licenseStatus = document.querySelector('#sec_lic_status').textContent;
			// 		    data.dateIssued = document.querySelector('#issue').textContent;
			// 		    data.statusChangeReason = document.querySelector('#changeReason').textContent;
			// 		    data.dateExpires = document.querySelector('#expiration_date').textContent;
			// 		    return JSON.stringify(data);
			// 		});

			// 	this.echo("All done, Daddy.");
			// 	fs.write('data.json', jsonStr, 'w');
			// });
		this.echo('Checking out.');
  });

casper.run();