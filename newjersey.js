

var casper = require("casper").create();
var length;
// var BALLS = {13VH08570200};
var licNo = process.env.LICENSENUMBER
var fs = require('fs');
var url = "https://newjersey.mylicense.com/verification_4_6/Search.aspx?facility=Y";
	casper.start(url, function() {
		this.echo('Inputting License Number...');
	    this.sendKeys('input#t_web_lookup__license_no', licNo );
	    this.echo('Clicking Submit...');
	    this.click('input[name="sch_button"]');
	    this.echo('Getting Results...');
	    this.wait(200);
	    this.echo('Results are loaded.');
	    
	    	casper.then(function() {
			    this.mouse.click("#datagrid_results__ctl3_name"); // clicks <a id="my-link">hey</a>
			});

	    this.wait(200);
	    this.echo('Do me.');
		
			casper.then(function paso2() {
					var jsonStr = this.evaluate(function(){
					    var data = {};
					    data.businessName = document.querySelector('#full_name').textContent;
					    data.ownerName = document.querySelector('#owner_name').textContent;
					    data.dba = document.querySelector('#doing_business_as').textContent;
					    data.address1 = document.querySelector('#addr_line_1').textContent;
					    data.city = document.querySelector('#addr_city').textContent;
					    data.state = document.querySelector('#addr_state').textContent;	
					    data.zip = document.querySelector('#addr_zipcode').textContent;
						data.profession = document.querySelector('#profession_id').textContent;
					    data.licenseType = document.querySelector('#license_type').textContent;
					    data.licenseNo = document.querySelector('#license_no').textContent;
					    data.licenseStatus = document.querySelector('#sec_lic_status').textContent;
					    data.dateIssued = document.querySelector('#issue').textContent;
					    data.statusChangeReason = document.querySelector('#changeReason').textContent;
					    data.dateExpires = document.querySelector('#expiration_date').textContent;
					    return JSON.stringify(data);
					});

				this.echo("All done, Daddy.");
				fs.write('data.json', jsonStr, 'w');
			});
		this.echo('Checking out.');
  });

casper.run();