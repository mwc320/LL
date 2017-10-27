var casper = require('casper').create();
this.echo('Oi, we here')

function licenseNumber() {
	return '13VH08570200'
}

var url = 'https://newjersey.mylicense.com/verification_4_6/Search.aspx?facility=Y';
casper.start(url, function() {
    this.sendKeys('input[name="t_web_lookup__license_no"]', licenseNum())
    this.echo('Smash that MF submit button')
    this.click("input[name='sch_button']")
    this.wait(200);
    this.echo('I cant wait anymore')
    this.scrollTo('id.ctl00_ContentPlaceHolder1_dtgList')
		}).wait(1000).then(function() {
			    this.capture('screenshot.png');
});

casper.run();

