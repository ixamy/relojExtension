function time(){
	fechaHora = new Date();
	hora = (fechaHora.getHours()<10?'0':'')+fechaHora.getHours();
	minuto = (fechaHora.getMinutes()<10?'0':'')+fechaHora.getMinutes();
	segundo = (fechaHora.getSeconds()<10?'0':'')+fechaHora.getSeconds();
	var fechaHora = hora+":"+minuto+":"+segundo;
	
	document.title = fechaHora;
	document.getElementById("hora").innerText = fechaHora;
}
setInterval(time, 10);

