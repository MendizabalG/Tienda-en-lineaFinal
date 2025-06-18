import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';



const productos = [
 {
   id: '1',
   nombre: 'Camiseta Messi adidas',
   precio: 29.99,
   imagen: 'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/3019813-0303V1.jpg',
   reseñas:[5, 5, 4, 4, 5],
 },
 {
   id: '2',
   nombre: 'Playera de Mexico',
   precio: 59.99,
   imagen: 'https://www.sopitas.com/wp-content/uploads/2025/03/nuevo-jersey-mexico-copa-oro-2025-negro-uniforme-playera-2.jpg',
   reseñas:[3, 1, 1, 2],
 },
 {
   id: '3',
   nombre: 'Tenis Puma',
   precio: 49.99,
   imagen: 'https://s3-us-west-1.amazonaws.com/calzzapato/zoom/09HPY9-2.jpg',
   reseñas:[4, 4, 4, 5],
 },
 {
   id: '4',
   nombre: 'Tenis Nike',
   precio: 59.99,
   imagen: 'https://tafmx.vtexassets.com/arquivos/ids/246795-800-1067?v=638792960021570000&width=800&height=1067&aspect=true',
   reseñas:[4, 4, 4, 5],
 },
{
    id: '5',
    nombre: 'Camiseta del Barcelona 2025',
    precio: 5,
    imagen: 'https://down-mx.img.susercontent.com/file/cn-11134207-7r98o-lxw2ck1ra0wzc5',
    reseñas:[5, 5, 4, 4, 5],
  },
   {
    id: '6',
    nombre: 'Bufanda Barcelona',
    precio: 10.99,
    imagen: 'https://store.fcbarcelona.com/cdn/shop/products/unnamed_9708010b-a0ce-4772-9457-251d56baec85.jpg?v=1681717422&width=1445',
    reseñas:[4, 4, 4, 5],
  },
  {
    id: '7',
    nombre: 'Sudadera Broklyn',
    precio: 20.39,
    imagen: 'https://img.ltwebstatic.com/images3_pi/2023/10/12/c2/1697081294d2950fd08c7d1a9a7adf74e3b084604f_thumbnail_405x.webp',
    reseñas:[4, 4, 4, 5],
  },
  {
    id: '8',
    nombre: 'Pans para GYM',
    precio: 12.00,
    imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-1QoiVNBctH77Rl74OuCWyuJooEyz8IjEfzWjWUeKve74eTqUT6vXzI3kXrxp0XBuwntz4J-UEXnqFYmAr2ne4gKarCqw8ci6yM5AHX0Z6ug_Li7txXsGKGPsalagMbj5CAlbeL0k-g&usqp=CAc',
  reseñas:[4, 4, 4, 5],
  },
  {
    id: '9',
    nombre: 'Boxer',
    precio: 18.50,
    imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQr1J_tQUtNhji05YLXCuBff4dK8cBTXc_jQzSpnx5EjJnBuTyUIWql_VoJN1TEFxJDTK2dap5LYQFulk9k48wNTiUeZH2t-8BxLEkOvwNYN8nXj4W6k9936f4hSB7MyBsAlwM1dqM&usqp=CAc',
  reseñas:[4, 4, 4, 5],
  },
    {
  id: '10',
  nombre: 'Calcetas de pollo',
  precio: 10.02,
  imagen: 'https://i.etsystatic.com/53447357/r/il/7ffc82/6586359283/il_fullxfull.6586359283_s7qi.jpg',
  reseñas:[4, 4, 4, 5],
  },
    {
  id: '11',
  nombre: 'Caguama modelo negra',
  precio: 9,
  imagen: 'https://img1.wsimg.com/isteam/ip/dd0d5aeb-71e5-440c-96ed-61fbf973ca32/ols/3051298.jpg/:/rs=w:1200,h:1200',
  reseñas:[4, 4, 4, 5],
  },
    {
  id: '12',
  nombre: 'Tanga de elefante',
  precio: 69,
  imagen: 'https://m.media-amazon.com/images/I/31eaEQpLLRL._AC_SY350_.jpg',
  reseñas:[4, 4, 4, 0],
  },
    {
  id: '13',
  nombre: 'Tacos Nike talla 6',
  precio: 259.00,
  imagen: 'https://cdn1.coppel.com/images/catalog/pr/8736862-1.jpg?iresize=width:400,height:320',
  reseñas:[5, 5, 4, 4, 5],
  },
    {
  id: '14',
  nombre: 'Camisa del Rayo MCqueen',
  precio: 23,
  imagen: 'https://gazen.com.mx/cdn/shop/files/Rayonegraback.png?v=1709582776&width=1445',
  reseñas:[5, 5, 4, 4, 5],
  },
    {
  id: '15',
  nombre: 'Crocs del Rayo MCqueen',
  precio: 32,
  imagen: 'https://i5.walmartimages.com/asr/8e891844-1612-4bde-94bf-3c7919614fa6.ad184fe7877fb4db36bbe3823cbcc789.jpeg',
  reseñas:[5, 5, 4, 4, 5],
  },
  {
    id:'16',
    nombre: 'Adidas Campus Gris', 
    precio:250,
    imagen: 'https://www.innvictus.com/medias/IN-HQ8707-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjAwMDV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGlPUzlvTm1Vdk1USTFNVFExT0RRNU5USTROakl1YW5CbnxiMTcyZTM3M2U5ODgyMzE4M2RiZGQ4ODk1MGFjMWFkZGFkYzI5NzdkOTY2YjBiNWVlOWI4Y2I0MzhkYmIxMWY3',
    reseñas: [5,4,5],
  }
];




export default function App() {
 const [carrito, setCarrito] = useState([]);
 const [busqueda, setBusqueda] = useState('');
 const [menuAbierto, setMenuAbierto] = useState(false);
 const [pantalla, setPantalla] = useState('productos');
 const [detalle, setDetalle] = useState(false);


 const agregarAlCarrito = (producto) => {
   setCarrito([...carrito, producto]);
   
 };


 const eliminarDelCarrito = (index) => {
   const nuevoCarrito = [...carrito];
   nuevoCarrito.splice(index, 1);
   setCarrito(nuevoCarrito);
 };


 const total = carrito.reduce((sum, item) => sum + item.precio, 0);
 const productosFiltrados = productos.filter((p) =>
   p.nombre.toLowerCase().includes(busqueda.toLowerCase())
 );


 const irACarrito = () => {
   setPantalla('carrito');
   setMenuAbierto(false);
 };


 const irAProductos = () => {
   setPantalla('productos');
   setMenuAbierto(false);
 };


 const irAPago = () => {
   setPantalla('pago');
 };
 const irADetalle = () => {
   setPantalla ('Detalle');
 }


 const volverAInicio = () => {
   setPantalla('productos');
};
const calcularPromedioEstrellas = (reseñas) => {
  if (!reseñas || reseñas.length === 0) return 0;
  const suma = reseñas.reduce((a, b) => a + b, 0);
  return Math.round(suma / reseñas.length);
};
 const confirmarPago = (metodo) => {
    Alert.alert('Pago confirmado', `Has pagado $${total.toFixed(2)} con ${metodo}. ¡Gracias por tu compra!`);
  };



 return (
   <View style={styles.container}>
     {menuAbierto && (
       <View style={styles.menuLateral}>
         <TouchableOpacity onPress={irAProductos}>
           <Text style={styles.menuItem}>🏠 Inicio</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={irACarrito}>
           <Text style={styles.menuItem}>🛒 Carrito</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => setMenuAbierto(false)}>
           <Text style={styles.menuCerrar}>✖️ Cerrar menú</Text>
         </TouchableOpacity>
       </View>
     )}


     <View style={styles.header}>
       <TouchableOpacity onPress={() => setMenuAbierto(!menuAbierto)} style={styles.menuIcono}>
         <Text style={styles.menuIcon}>☰</Text>
       </TouchableOpacity>
       <Text style={styles.titulo}>Tiendas MZ</Text>
     </View>


     {pantalla === 'productos' && (
       <View style={{ flex: 1 }}>
         <TextInput
           style={styles.buscador}
           placeholder="Buscar productos..."
           value={busqueda}
           onChangeText={setBusqueda}
         />


         <Text style={styles.subtitulo}>⭐ Productos Destacados</Text>
         <ScrollView horizontal style={{ marginVertical: 5 }}>
           {productos.slice(12, 16).map((producto) => (
             <View key={producto.id} style={styles.destacado}>
               <Image source={{ uri: producto.imagen }} style={styles.imagen} />
               <Text style={styles.producto}>{producto.nombre}</Text>
               
             </View>
           ))}
         </ScrollView>

         <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={irADetalle}>
            >
             <View style={styles.producto}>
               <Image source={{ uri: item.imagen }} style={styles.imagen} />
               <View style={{ flex: 1, marginLeft: 10 }}>
                 <Text style={styles.nombre}>{item.nombre}</Text>
                 <Text style={styles.precio}>${item.precio.toFixed(2)}</Text>
                 <View style={styles.estrellas}>
                {Array.from({ length: 5 }).map((_, i) => (
          <Text key={i}>
            {i < calcularPromedioEstrellas(item.reseñas) ? '⭐' : '☆'}
          </Text>
                  ))}
              </View>
                 <TouchableOpacity
                   style={styles.boton}
                   onPress={() => agregarAlCarrito(item)}
                 >
                   <Text style={styles.botonTexto}>Agregar al carrito</Text>
                 </TouchableOpacity>
                 
               </View>
             </View>
            </TouchableOpacity>
          )}
        />
         <TouchableOpacity style={styles.botonFlotante} onPress={irACarrito}>
           <Text style={styles.botonFlotanteTexto}>🛒 Ver Carrito ({carrito.length})</Text>
         </TouchableOpacity>
       </View>
     )}
     
      

     {pantalla === 'carrito' && (
       <View style={{ flex: 1 }}>
         <Text style={styles.titulo}>🛒 Mi carrito.</Text>
         <Text style={styles.subtitulo}></Text>


         <ScrollView style={{ marginBottom: 80 }}>
           {carrito.map((item, index) => (
             <View key={index} style={styles.producto}>
               <Image source={{ uri: item.imagen }} style={styles.imagen} />
               <View style={{ flex: 1, marginLeft: 10 }}>
                 <Text style={styles.nombre}>{item.nombre}</Text>
                 <Text style={styles.precio}>${item.precio.toFixed(2)}</Text>
                 <TouchableOpacity
                   style={styles.boton}
                   onPress={() => eliminarDelCarrito(index)}
                 >
                   <Text style={styles.botonTexto}>Eliminar</Text>
                 </TouchableOpacity>
               </View>
             </View>
           ))}
         </ScrollView>


         <TouchableOpacity style={styles.botonFlotante} onPress={irAPago}>
           <Text style={styles.botonFlotanteTexto}>💳 Comprar (${total.toFixed(2)})</Text>
         </TouchableOpacity>
       </View>
     )}


{pantalla === 'Detalle' && (
  <View style={{ flex: 1 }}>
  <ScrollView style={[styles.container, { backgroundColor: '#8c8c8c' }]}>
      <Text style={styles.subtitulo}>{productos.nombre}</Text>
      <Image source={{ uri: productos.imagen }} style={styles.imagen} />
      
     
      <Text style={{ marginBottom: 10 }}>Descripción: Este es un excelente producto de calidad premium que no te puedes perder.</Text>
      <Text style={styles.subtitulo}>⭐ Reseñas</Text>
      <View style={styles.estrellas}>
       
      </View>
     
    
       <TouchableOpacity
                   style={styles.boton}
                   onPress={() => agregarAlCarrito(item)}
                 >
                   <Text style={styles.botonTexto}>Agregar al carrito</Text>
                 </TouchableOpacity>
    </ScrollView>
    </View>
)}


     {pantalla === 'pago' && (
       
       <View style={styles.pantallaPago}>
        <Text style={styles.pagotex}>💳 Opciones de pago</Text>
      <TouchableOpacity onPress={() => confirmarPago('Tarjeta de crédito')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Tarjeta de crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('PayPal')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Transferencia bancaria')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Transferencia bancaria</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Oxxo Pay')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Oxxo Pay</Text>
      </TouchableOpacity>
  
    
         <TouchableOpacity style={styles.botonPagoVolver} onPress={volverAInicio}>
           <Text style={styles.botonFlotanteTexto}>Volver a la tienda</Text>
         </TouchableOpacity>
       </View>
     )}


   </View>
  
 );
}




  



const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#515151' },
 header: {
   flexDirection: 'row',
   top: 0,
   left: 0,
   right: 0,
   alignItems: 'center',
   padding: 12,
   backgroundColor: '#3c3c3c',
   paddingTop: 40, 
   justifyContent: 'center',
   paddingHorizontal: 10,
   elevation: 5,
   zIndex: 1000,
 },
 menuIcono: {
   position: 'absolute', 
   left: 20,
   top: 35, 
 },
 menuIcon: { fontSize: 24, color: 'white' },
 titulo: { fontSize: 20, color: 'white', fontWeight: 'bold' },
 buscador: {
   backgroundColor: '#616161',
   margin: 10,
   padding: 8,
   borderRadius: 8,
   color:'white',
 },
 subtitulo: { fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: 'white', },
 pagotex: { fontWeight:'500', fontSize: 28,color:'white', fontFamily:'Times New Roman'},
 destacado: {
   backgroundColor: '#8c8c8c',
   padding: 12,
   height: 210,
   width: 180,
   marginHorizontal: 5,
   borderRadius: 20,
   alignItems: 'center',
 },
 producto: {
   flexDirection: 'row',
   backgroundColor: '#b5b5b5',
   margin: 8,
   padding: 10,
   borderRadius: 10,
   alignItems: 'center',
 },
 imagen: { width: 60, height: 60, borderRadius: 8 },
 nombre: { fontSize: 16, fontWeight: 'bold', color: '#393d42' },
 precio: { fontSize: 14, color: 'green' },
 botonFlotante: {
   position: 'absolute',
   bottom: 20,
   right: 20,
   backgroundColor: '#718ca0',
   padding: 14,
   borderRadius: 30,
   elevation: 6,
 },
 botonFlotanteTexto: {
   color: 'white',
   fontWeight: 'bold',
 },
   menuLateral: {
    position: 'absolute',
    top: 80,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#333',
    padding: 10,
    zIndex: 999,
    elevation: 5,
  },
  menuItem: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  menuCerrar: {
    fontSize: 16,
    color: 'red',
  },
 pantallaPago: {
   flex: 1,
   padding: 20,
 },
 
 botonPagoVolver: {
   backgroundColor: '#718ca0',
   padding: 14,
   borderRadius: 30,
   alignSelf: 'center',
   marginTop: 30,
 },
 boton: {
   backgroundColor: '#718ca0',
   padding: 10,
   borderRadius: 6,
   marginTop: 10,
 },
 botonTexto: {
   color: 'white',
   textAlign: 'center',
   backgroundColor:'##718ca0'
 },
 botonAgregar: {
    backgroundColor: '#536877',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
    estrellas: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  

});
