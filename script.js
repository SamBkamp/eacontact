$("#emailForm").submit(function(e) {
    e.preventDefault();


    var d = {
	email: $("#exampleInputEmail1").val(),
	name: $("#exampleInputPassword1").val(),
	school: $("#schoolInput").val()
    }
    
    console.log(d);
    $.post("https://inventory.exotic-aqua.com/inventory", d, function(data){
	
    });
});

