function random(n) {
    return Math.round(Math.random()*n);
}

function digit(dividend, divider) {
	return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

var CPF = function() {
	this.evaluate = function() {
		var n = 9,
			n1 = random(n),
			n2 = random(n),
			n3 = random(n),
			n4 = random(n),
			n5 = random(n),
			n6 = random(n),
			n7 = random(n),
			n8 = random(n),
			n9 = random(n);
		d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
		d1 = 11 - digit(d1, 11);
		if (d1 >= 10) d1 = 0;
		var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
		d2 = 11 - digit(d2, 11);
		if (d2 >= 10) d2 = 0;
		return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
	}	 
}

CPF.identifier = "com.matheusmoraes.cpf";
CPF.title = "CPF Randomizer";
registerDynamicValueClass(CPF);










