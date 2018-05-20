var contador=0;
$(function(){
  ////// Telefono 
    ////Solo numeros
  $('#CP').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');  
  });
  $(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///Espacios en blanco INICIO Y FINAL
  $("button").click(function(){    
    var value = $("input").val();     
    var value_without_space = $.trim(value);         
    //alert('El texto que ha ingresado contiene espacios y serán eliminados');    
    this.val(value_without_space);  
  });
  $("input").keyup(function(){
    //var mayusc = $(this).val();      
    this.value=this.value.toUpperCase();
  });
  $("input").keyup(function(e){    
    if(e.keyCode==32){
      contador++;
      var texto = $(this).val();      
      if(contador>1){                
        //alert(texto.substring(0,texto.length - 1));
        this.value=texto.substring(0,texto.length - 1)        
    }      
    }else{contador=0;
    }    
  });

});
