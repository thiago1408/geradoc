 $(document).ready(function(){
 		
	 var oTable = $('#tabela').dataTable( {
         "bJQueryUI": true,
         "bStateSave": false,
         "bPaginate": true,
         "sPaginationType": "full_numbers",
         "bSort": false,
         "bFilter": true,
         "bLengthChange": false,
         "bInfo": true,
         "aoColumns": [
       				{"sWidth":"30px", "sClass": "text-center"},
       				{"sClass": "text-center"},					
       				{"sWidth":"400px", "sClass": "text-left"} 								 	
       			],
     });
	
	$("#tabela tr").mouseover(function(){
		$(this).addClass("tableRow_mouseover");
	});
	
	$("#tabela tr").mouseout(function(){
		$(this).removeClass("tableRow_mouseover");
	});  
  	 
 	
	$('#busca').click(function() { 
        $.blockUI({ message: $('#buscaForm') }); 
 
        //setTimeout($.unblockUI, 2000); 
    }); 

    $("#search").focus(function() {
        if($("#search").val() == 'pesquisa textual'){
            $("#search").attr('value','');
            $("#search").removeClass('search_text');
        }
    }).blur(function() {
        if($("#search").val() == ''){
            $("#search").attr('value','pesquisa textual');
            $("#search").addClass('search_text');
        }
    });

			
 });	