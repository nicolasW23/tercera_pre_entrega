// //JSON
let bandas=[
    {
        id: 1,
        nombre: "Soda Stereo",
        genero: "rock",
        disco:"grandes exitos",
        cantidad:14,
        precio: 2000,
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-UC3ZkOAk4mo%2FUA8xZiUfZBI%2FAAAAAAAACOU%2FMpOdz2FDV1w%2Fs1600%2Fsf.jpg&f=1&nofb=1&ipt=bdebd1ad2b530da01b4b438fc7a4b58cfef8d4391c3575a6f0467af244deea20&ipo=images",
    },
    {
        id: 2,
        nombre: "Duran Duran",
        genero: "rock",
        disco:"Ordinary World",
        cantidad:24,
        precio: 1600,
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.iheart.com%2Fihr-ingestion-pipeline-production-wmg%2Fnew_release%2F20161216081943987%2F0077779887651%2Fresources%2F077779887651.jpg&f=1&nofb=1&ipt=338646625b0a5845321ab3db7e99fb5683f65f49e3d339c21ad272c781de63eb&ipo=images",
    },
    {
        id: 3,
        nombre: "Daft Punk",
        genero: "disco",
        disco:"Random Access Memory",
        cantidad:4,
        precio: 3000,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61Uxg-SWExL._SL1500_.jpg&f=1&nofb=1&ipt=464afab7dc2ae0efae3dc4a7fdbc9e9847251af8c81231daf8279f3142cf0771&ipo=images",
    },
    {
        id: 4,
        nombre: "GunsN Roses",
        genero: "rock",
        disco:"Use Your Illusion",
        cantidad:12,
        precio: 3500,
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdood.ca%2Fwp-content%2Fuploads%2F2009%2F04%2Fguns_n_roses-use_your_illusion_i-frontal.jpg&f=1&nofb=1&ipt=63c4b0e47ac187edd968f4732275191fc494559621d8c04f6197db531b2a8818&ipo=images",
    },
    {
        id: 5,
        nombre: "Pink Floyd",
        genero: "rock pshicodelico",
        disco:"Recompilacion",
        cantidad:11,
        precio: 5000,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.catawiki.nl%2Fassets%2F2015%2F10%2F27%2Fa%2F3%2F8%2Fa3819602-7ca7-11e5-8227-846f93ddc639.jpg&f=1&nofb=1&ipt=442d24fb7f133595a11a2b1bfc026b91291496e3fb3a9fe72bf4100989b4e66a&ipo=images",
    },
    {
        id: 6,
        nombre: "Queen",
        genero: "rock",
        disco:"Clasicos",
        cantidad:2,
        precio: 5100,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F04%2F1c%2Fba%2F041cbafebe59a7fe30c0f540f77ff8cb.jpg&f=1&nofb=1&ipt=c07bd480c04dfd81bd13c031c89615177560d8d4560d9e7e66c3103f4ee15555&ipo=images",
    },
    {
        id: 7,
        nombre: "Tears For Fears",
        genero: "pop",
        disco:"disco 1984",
        cantidad:1,
        precio: 3000,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdraw.acharts.net%2Fcover%2F16551-55f3ed9f47275-l.jpg&f=1&nofb=1&ipt=8b72f6e7e569082e0dcc0bb326c709aefc3f9040e5a70f22aa73d6f97e9d0ca7&ipo=images",
    },
    {
        id: 8,
        nombre: "Virus",
        genero: "rock",
        disco:"virus",
        cantidad:9,
        precio: 2500,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc1%2Fa5%2F57%2Fc1a557cee7b1202bf4ca10089a3d54b1.jpg&f=1&nofb=1&ipt=14c060acc3786ff62dfcf18e58ab553bd702e07000c141aad5ac36823abc4a00&ipo=images",
    },
    {
        id: 9,
        nombre: "Despeche Mode",
        genero: "pop",
        disco:"Violation",
        cantidad:9,
        precio: 2500,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmcdn.priceminister.com%2Fphoto%2FDepeche-Mode-Violator-CD-Album-836488355_L.jpg&f=1&nofb=1&ipt=2dab9d3559fe488af7615d1854e3728b9d23a8ff81b81291702249a6a4bb16a2&ipo=images",
    },
    {
        id: 10,
        nombre: "Elo",
        genero: "pop",
        disco:"disco 1982",
        cantidad:15,
        precio: 3400,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81JKgxnKvYL._SL1500_.jpg&f=1&nofb=1&ipt=87ed14ce4ecbc30e2c8a043cd0a440ccb4a4b3586b819371dbfc720f4217cf4a&ipo=images",
    },
    {
        id: 11,
        nombre: "The Doors",
        genero: "rock pshicodelico",
        disco:"The Doors",
        cantidad:0,
        precio: 3300,
        img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.rtve.es%2Fv%2F937112%3Fw%3D1600%26preview%3D1291128940012.jpg&f=1&nofb=1&ipt=50f0074eb4e6b84d6ab584ed1bd397fd9e9f9185174ce214b938fcc40bd0d3b5&ipo=images",
    },
    {
        id: 12,
        nombre: "Michael Jackson",
        genero: "pop",
        disco:"Thiller",
        cantidad:2,
        precio: 5000,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0902%2F5612%2Fproducts%2Fmichael_jackson_dangerous_vinyl_front_cover_1024x1024.jpg%3Fv%3D1599876647&f=1&nofb=1&ipt=a2b1e0f56307fe0a33516e7d7ecb8e9c7b8c50edda0a539e4502c872250a5b8b&ipo=images",
    },
    {
        id: 13,
        nombre: "simple Minds",
        genero: "pop",
        disco:"simple Minds",
        cantidad:4,
        precio: 2300,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritteninmusic.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fcover-simple-minds-once-upon-a-time-deluxe-edition.jpg&f=1&nofb=1&ipt=9ed0b79b54566a37fa61b4098afdf2de54b33fe00dfe9231979e42d84e032454&ipo=images",
    },
    {
        id: 14,
        nombre: "The Strokes",
        genero: "rock",
        disco:"disco 2020",
        cantidad:7,
        precio: 3000,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcultura.id%2Fwp-content%2Fuploads%2F2020%2F06%2FThe-Strokes-The-New-Abnormal.jpeg&f=1&nofb=1&ipt=73f8dc2d6eeae08e2ad7fbee9308731ff998eddeda7d956139d1829d6265c64d&ipo=images",
    },
    {
        id: 15,
        nombre: "Billy Idol",
        genero: "pop",
        disco:"disco 1982",
        cantidad:6,
        precio: 2000,
        img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-qzMT12QyDFQ%2FUgUHrhhgKqI%2FAAAAAAAAABc%2F-a59UWyf0HU%2Fs1600%2FFront.jpg&f=1&nofb=1&ipt=0b91a6f4b615b8e07ad8255e71cf51a99b31147f8ac50e24aa117957a77b0943&ipo=images",
    },
    {
        id: 16,
        nombre: "Rolling Stone",
        genero: "rock",
        disco:"disco clasico",
        cantidad:6,
        precio: 2300,
        img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.music-bazaar.com%2Falbum-images%2Fvol1%2F114%2F114796%2F636748-big%2FSay-Ahhh-cover.jpg&f=1&nofb=1&ipt=5dee45d52eb5dda9f98505ec195cd73f94a672d0b5b6b1b89890bfc4e0ab109e&ipo=images",
    },
    ]
    let cart= JSON.parse(localStorage.getItem('cart')) || []
    
    let contenedorProductos = document.getElementById("contenedorProductos")
    renderizarTarjetas(bandas)
    
    function renderizarTarjetas(arrayDeBandas){
        contenedorProductos.innerHTML = ""
        arrayDeBandas.forEach(bandas => {
            let tarjeta= document.createElement("div")
            tarjeta.className="tarjetas"
            tarjeta.innerHTML =`
                <div class=imagen style="background-image: url(${bandas.img})"></div>
                <h2>${bandas.nombre}</h2>
                <p>${bandas.disco}</p>
                <p>$${bandas.precio}</p>
            `
            contenedorProductos.appendChild(tarjeta)
        })
    }
    
    let inputs= document.getElementsByClassName("input")
    //console.log(inputs)
    for(const input of inputs){
        input.addEventListener("click", filtrarPorCategoria)
    }
    
    function filtrarPorCategoria(e){
        let filtros= []
        for(const input of inputs){
            if(input.checked){
                filtros.push(input.id)
            }
        }
        //console.log(filtros)
        let arrayFiltrado= bandas.filter(banda => filtros.includes(banda.genero))
        renderizarTarjetas(arrayFiltrado.length > 0 ? arrayFiltrado : bandas) 
    }
    
    //Registrarse
    let login= document.getElementById("login")
    let botonRegistrarse=document.getElementById("btRegistrarse")
    
    botonRegistrarse.addEventListener("click", () => {
        swal.fire({
            html: `
                <h2>Registrarse</h2>
                <input id="usuario" placeholder="usuario">
                <input id="contrasenia" placeholder="Contraseña">
                <button id="registrarse">Registrarse</button>`,
            showConfirmButton:false,
        })
        let usuario= document.getElementById("usuario")
        let contrasenia= document.getElementById("contrasenia")
        let registrarse= document.getElementById("registrarse")
    
        registrarse.addEventListener("click", () => {
        // console.log(usuario.value)
        // console.log(contrasenia.value)
        let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value}
        localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
        })
    })
    
    //Iniciar Sesion
    let botoIniciarSesion=document.getElementById("btIniciarSesion")
    
    botoIniciarSesion.addEventListener("click", () => {
        swal.fire({
            html:`<h2>INICIAR SESION</h2>
                <input id="usuarioIS" placeholder="usuario">
                <input id="contraseniaIS" placeholder="Contraseña">
                <button id="iniciarSesion">INICIAR SESION</button>`,
                showConfirmButton:false,
        })
        
        let usuarioIS= document.getElementById("usuarioIS")
        let contraseniaIs= document.getElementById("contraseniaIS")
        let iniciarSesion= document.getElementById("iniciarSesion")
    
    iniciarSesion.addEventListener("click", () => {
        let infoUsuario= JSON.parse(localStorage.getItem("infoUsuario"));
            if(infoUsuario.usuario == usuarioIS.value){
                swal.fire({
                    title: 'Bienvenido',
                    icon: 'Success',
                    confirmButtonText: 'ok'
                })
                login.classList.add("ocultar");
                pantallaCompleta.classList.remove("ocultar");
            }
            else{
                swal.fire({
                    title: 'Erorr!',
                    text: 'Datos incorrectos, vuelva a intentarlo',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        })
    })
    
