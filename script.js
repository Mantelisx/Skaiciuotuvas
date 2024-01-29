
	function number(value){
		document.skaiciuotuvas.result.value += value;
	}
		
	function istrinti(){
		document.skaiciuotuvas.result.value="";
	}
		
	function lygu(){
			
			   
			try {
				document.skaiciuotuvas.result.value=eval(document.skaiciuotuvas.result.value);
			}
			catch(err) {
				document.skaiciuotuvas.result.value = "Klaida";
			} 
				
			/*
			  if(isNaN(document.skaiciuotuvas.result.value)) document.skaiciuotuvas.result.value = "Dalyba iš nulio negalima";
			*/
			  
			  if(document.skaiciuotuvas.result.value==="Infinity"){
				document.skaiciuotuvas.result.value = "Dalyba iš nulio negalima";
			  }
			  
			  
			  if(document.skaiciuotuvas.result.value==="NaN"){
				document.skaiciuotuvas.result.value = "Rezultatas neapibrėžtas";
			  }

			  if(document.skaiciuotuvas.result.value==="undefined"){
				document.skaiciuotuvas.result.value="";
			  }
			  
	}
	
	function sin(){
	document.skaiciuotuvas.result.value=Math.sin(document.skaiciuotuvas.result.value);
	}

	function cos(){
	document.skaiciuotuvas.result.value=Math.cos(document.skaiciuotuvas.result.value);
	}

	function tan(){
	document.skaiciuotuvas.result.value=Math.tan(document.skaiciuotuvas.result.value);
	}

    function arcsin(){
    document.skaiciuotuvas.result.value=Math.asin(document.skaiciuotuvas.result.value);
    }
    
    function arccos(){
    document.skaiciuotuvas.result.value=Math.acos(document.skaiciuotuvas.result.value);
    }
    
    function arctan(){
    document.skaiciuotuvas.result.value=Math.atan(document.skaiciuotuvas.result.value);
    }

	function trintipoviena(){
	var a = document.skaiciuotuvas.result.value;
	document.skaiciuotuvas.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.skaiciuotuvas.result.value = Math.pow(document.skaiciuotuvas.result.value, 2);
	}
	
	function cubed(){
	document.skaiciuotuvas.result.value = Math.pow(document.skaiciuotuvas.result.value, 3);
	}

	function sqrt2(){
	document.skaiciuotuvas.result.value = Math.pow(document.skaiciuotuvas.result.value, 1/2);
	}

	function sqrt3(){
	document.skaiciuotuvas.result.value = Math.pow(document.skaiciuotuvas.result.value, 1/3);
	}

	function factorial(){
		
		var rval=1;
    	for (var i = 2; i <= document.skaiciuotuvas.result.value; i++)
        	rval = rval * i;
		document.skaiciuotuvas.result.value = rval;

		/*
		
    	if (num === 0)
      		{ return 1; }
    	else
      		{ return num * rFact( num - 1 ); }

		*/ 
	}
