$(document).ready(function(){
    // slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        Responsive: true,
        pager:false
    });
    
    // posts

    var posts = [
        {
            title: 'Salud y vida',
            date: 'Publicado el dia ' +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY") ,
            content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
        {
            title: 'Beneficios',
            date: 'Publicado el dia ' +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY") ,
            content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
        {
            title: 'Tips Nutricional',
            date: 'Publicado el dia ' +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY") ,
            content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
        {
            title: 'Meditación',
            date: 'Publicado el dia ' +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY") ,
            content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
        {
            title: 'Vivencias',
            date: 'Publicado el dia ' +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY") ,
            content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    ] //coleccion de obj-json

    posts.forEach((item,index)=>{

        var post=`
        <article class="post">
        <h2>${item.title}</h2>
        <span class="fecha">${item.date}</span>
        <p> ${item.content}</p>
        <a href="#" class="botonmas">leer más</a>
        </article>
        
        `;

        $("#posts").append(post)
        console.log(post)
    })

    console.log(posts)

    // <article class="post">
    // <h2>Vida y más</h2>
    // <span class="fecha">Fecha de publicacion</span>
    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate alias quasi repudiandae accusantium cupiditate impedit quae quam nemo culpa dolores saepe animi eligendi, error ea perferendis? Repellat, ipsa incidunt!
    // Non temporibus commodi nisi porro cum, vitae quae aspernatur dolorem ad tempora dolore saepe, magni excepturi sapiente molestiae tenetur? Voluptas, ducimus. Voluptatem, soluta culpa! Laboriosam, sed eum? Dignissimos, eius magni!
    // Neque quasi provident esse molestiae, itaque labore, minima at rerum tempore voluptatem quod aliquid similique facere libero? Eum nesciunt quasi atque ad iusto! Repudiandae reiciendis nobis quos, quidem quia tenetur!
    // Delectus voluptatem quaerat obcaecati assumenda, eius dignissimos ipsa, eaque nemo velit, totam aut? Veniam alias incidunt in, nesciunt et, repudiandae obcaecati ea consequatur delectus placeat harum? Labore nihil ratione quae?</p>
    // <a href="#" class="botonmas">leer más</a>
    // </article>

    var thema = $("#tema")
    $(topink).click(function(){
        thema.attr("href","css/pink.css")
    });

    $(topurple).click(function(){
        thema.attr("href","css/purple.css")
    });

    $(toblue).click(function(){
        thema.attr("href","css/blue.css")
    });



//scroll subir

$('.subir').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },500);
    return false;
})

//falselogin

$("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);

});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });

}
})