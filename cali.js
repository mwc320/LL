import bs4 as bs

var cURL = this.getCurrentUrl()
var casper = require("casper").create();
var length;
// var BALLS = {13VH08570200};
var licNo = '772547'
var fs = require('fs');
var url = "https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/checklicense.aspx";
	casper.start(url, function() {
		this.echo('Inputting License Number...');
	    this.sendKeys('input#ctl00_LeftColumnMiddle_LicNo', licNo );
	    this.echo('Clicking Submit...');
	    this.click('input[name="ctl00$LeftColumnMiddle$Contractor_License_Number_Search"]');
	    this.echo('Getting Results...');
	    this.wait(200);
	    this.echo('Results are loaded.');
	    this.wait(200);
	    this.echo('Do me, California!');
	    	with open(cURL) as fp:
    			soup = BeautifulSoup(fp)
				soup = BeautifulSoup("<td>data</br>")
		
			casper.then(function paso2(soup) {
					var jsonStr = this.evaluate(function(){
					    var data = {};
					    data.businessInfo = document.querySelector('#ctl00_LeftColumnMiddle_BusInfo').textContent;
					    data.status = document.querySelector('#ctl00_LeftColumnMiddle_Status').textContent;
					    return JSON.stringify(data);
					});

				fs.write('cali.json', jsonStr, 'w');
			});
		this.echo('Fat Doinks');
  });

casper.run();