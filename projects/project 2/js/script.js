console.log('in js');

var mediaMap = { 'a':'media/c.mp3', 'b':'media/b.mp3', 'c':'media/a.wav','d':'media/d.wav', 'e':'media/e.wav',
 'enter':'media/enter.mp3','f':'media/f.wav', 'g':'media/g.wav', 'h': 'media/h.mp3','i':'media/i.wav', 'j':'media/j.wav',
 'k':'media/k.wav','l':'media/w.wav', 'm': 'media/m.mp3', 'n': 'media/n.wav','o':'media/o.wav', 'p':'media/p.wav',
 'q':'media/q.wav','r':'media/r.wav','s':'media/s.wav','t':'media/t.wav', 'u': 'media/u.wav','v':'media/v.wav',
 'w':'media/l.wav','x':'media/x.mp3','y':'media/y.wav','z':'media/z.wav'};

var keyMap   = {  13:'enter', 97:'a',98:'b',99:'c',100:'d',101:'e',102:'f', 103:'g', 
104:'h',105:'i',106:'j',107:'k', 108:'l', 109:'m',110:'n',111:'o', 112:'p', 113:'q',
114:'r',115:'s', 116:'t', 117:'u', 118:'v',119:'w', 120:'x',121:'y',122:'z',};


$(document).keypress(function(key){
	var keyNum = key.keyCode;
	console.log(keyNum + '  ' + keyMap[keyNum]);
	playSound(keyNum);
});

function playSound (key){
	//alert('in playsound '+key);
	var letter = keyMap[key];
	var link = mediaMap[letter]
	var audio = new Audio(link);
	audio.play()
}



$(document).on('keypress',function(a){
	if(a.which==97){
		$('#box').addClass('active');
	}
 	if(a.which==98){
		$('.B').addClass('active');
 	}
	if(a.which==120){
		$('.X').addClass('active');
 	}
 	if(a.which==99){
		$('.C').addClass('active');
 	}
 	if(a.which==100){
		$('.D').addClass('active');
 	}
 	if(a.which==101){
		$('.E').addClass('active');
 	}
 	if(a.which==102){
		$('.F').addClass('active');
 	}
 	if(a.which==103){
		$('.G').addClass('active');
 	}
 	if(a.which==104){
		$('.H').addClass('active');
 	}
 	if(a.which==105){
		$('.I').addClass('active');
 	}
 	if(a.which==106){
		$('.J').addClass('active');
 	}
 	if(a.which==107){
		$('.K').addClass('active');
 	}
 	if(a.which==108){
		$('.L').addClass('active');
 	}
 	if(a.which==109){
		$('.M').addClass('active');
 	}
 	if(a.which==110){
		$('.N').addClass('active');
 	}
 	if(a.which==111){
		$('.O').addClass('active');
 	}
 	if(a.which==112){
		$('.P').addClass('active');
 	}
 	if(a.which==113){
		$('.Q').addClass('active');
 	}
 	if(a.which==114){
		$('.R').addClass('active');
 	}
 	if(a.which==115){
		$('.S').addClass('active');
 	}
 	if(a.which==116){
		$('.T').addClass('active');
 	}
 	 if(a.which==117){
		$('.U').addClass('active');
 	}
 	if(a.which==118){
		$('.V').addClass('active');
 	}
 	if(a.which==119){
		$('.W').addClass('active');
 	}
 	if(a.which==120){
		$('.X').addClass('active');
 	}
 	if(a.which==121){
		$('.Y').addClass('active');
 	}

 	if(a.which==122){
		$('.Z').addClass('active');
 	}	









});