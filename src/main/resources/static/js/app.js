function getName(autor) {
	return autor;
}

function run() {
	var nameAutor = $('#autor').val();
	generarTable(nameAutor,apimock.getBlueprintsByAuthor(nameAutor,getName));
}



function generarTable(name,funcion) {
	
	$("#cuerpo").html("");
	var total=0
	$("#totalPoints").text(total)
	funcion.map(function(f) {
		$('#cuerpo')
			.append(
			  `<tr>
				<td>`+f.name+`</td>
				<td>`+Object.keys(f.points).length+`</td>
				<td>`+f+`</td>
			  </tr>`
			);
			total+=Object.keys(f.points).length
			$("#totalPoints").text(total)
	});
}