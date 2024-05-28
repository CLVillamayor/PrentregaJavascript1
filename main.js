//Inicializacion de las variables a utilizar
let nombreUsuario = '';
let producto = '0';
let productoMenu = '';
let cantidadMenu ='0';
let precio = '0';
let cantidadTotalMenuSelec = '0';
let precioTotalMenSelec = '0';
let productoPostre ='';
let cantidadHelado = '0';
let cantidadTotalHeladoSel = '0';
let precioTotalHelSelec = '0';
let CantidadTotaldeProductos = '0';
let precioTotal = '0';
let precioMenu ='0';
let precioHelado = '0';
let deseaSeguirComprando = false;
let descuentoPromo = '0';
let descuento = 0.25; 
let precioPromo = '0';
let precioTotalcp = '0';
let cantidadTotMenuSolo = '0';
let precioTotalPromoyHelado = '0';


//Ejecución del programa

nombreUsuario = prompt('Para una atencion personalizada, por favor ingrese su nombre');

do{
    producto = prompt('Hola '  +   nombreUsuario,'qué deseas compar? A, :MENU, B, :CONO DE HELADO');
    switch(producto){
        case'A':
        productoMenu = prompt('El menu es Pizza, Milanesa, Hamburguesa, Empanada de Carne');
        cantidadMenu = parseInt(prompt('Ingrese la cantidad de menues a comprar'));
        switch(productoMenu){
            case'Pizza':
            precio= 10000;
            break;
            case'Milanesa':
            precio = 5000;
            break;
            case'Hamburguesa':
            precio = 7000;
            break;
            case 'Empanada de Carne':
            precio = 1000;
            break;
            default:
                alert('Producto no disponible');
                cantidadMenu = 0
                break;
        }
        cantidadTotalMenuSelec = cantidadMenu;
        precioTotalMenSelec = precio*cantidadMenu ;
        if (cantidadMenu>=6) {
            
            alert('Tu compra tiene un descuento');
            descuentoPromo= precioTotalMenSelec * descuento;
            precioPromo=precioTotalMenSelec - descuentoPromo;
            alert('El total de tu compra es : $'+ precioPromo);
        } else {
            alert(nombreUsuario + ' has comprado ' + cantidadTotalMenuSelec+ ' de menu y el total a pagar es : $ ' +precioTotalMenSelec);
        } 
        break


        case'B':
        productoPostre =prompt('Los sabores de helado son Chocolate, Vainilla, Dulce de Leche, Frutilla') ;
        cantidadHelado = parseInt(prompt('Ingrese la cantidad de conos de helados a comprar'));
        switch(productoPostre){
            case'Chocolate':
            precio = 1000;
            break;
            case'Vainilla':
            precio = 1000;
            break;
            case'Dulce de Leche':
            precio = 1000;
            break;
            case'Frutilla':
            precio = 1000;
            break;
            default:
                alert('Producto no disponible');
                cantidad = 0
                break;
        
        }
        cantidadTotalHeladoSel = cantidadHelado;
        precioTotalHelSelec = precio*cantidadHelado ;
        alert(nombreUsuario + ' has comprado ' + cantidadTotalHeladoSel+ ' de cono/s de helado y el total a pagar es : $' +precioTotalHelSelec);
        
        break
    }
    CantidadTotaldeProductos = cantidadTotalMenuSelec + cantidadTotalHeladoSel ;
    precioTotal = precioTotalMenSelec + precioTotalHelSelec ;
    precioTotalcp = precioPromo ;
    precioTotalPromoyHelado = precioPromo + precioTotalHelSelec ;
    cantidadTotMenuSolo = cantidadMenu ;
    deseaSeguirComprando = confirm('Desea seguir comprando?');


}while(deseaSeguirComprando)
    if (cantidadMenu>=6&& cantidadTotalHeladoSel==0) {
        alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + cantidadTotMenuSolo + ' productos y el total a pagar es : $' + precioTotalcp);
    } else if (cantidadMenu>=6&&  cantidadTotalHeladoSel>=1){
        alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + CantidadTotaldeProductos + ' productos y el total a pagar es : $' + precioTotalPromoyHelado); 
    } else if (cantidadMenu !=0){
        alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + cantidadTotMenuSolo + ' productos y el total a pagar es : $' + precioTotalMenSelec); 
    } else if (cantidadHelado !=0){
        alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + cantidadTotalHeladoSel + ' productos y el total a pagar es : $' + precioTotalHelSelec); 
    } else {
        alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + CantidadTotaldeProductos + ' productos y el total a pagar es : $' + precioTotal); 
    }

