angular.module("MyFirstApp",[])
	.controller("FirstController",["$scope",'http'.function(m,$http){
		m.nombre = "Hector";
		m.nuevoComentario = {comentario: "ola"};
		m.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "codigofacilito"
			},
			{
				comentario: "malisimo el tutorial",
				username: "otro_usuario"
			}			
		];
		m.agregarComentario = function(){
			m.comentarios.push(m.nuevoComentario);
			m.nuevoComentario={};
		}
	}]);

