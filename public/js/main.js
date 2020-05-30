//animation list: flip, slice, box3D, pixel, fade, glide, card
$(document).ready(function () {

    // Navbar open 
    $('.nav-open').click((e) => {
        $('.nav-open').hide();
        $('.nav-close').show();
        
        $('#navbar').animate({
            'height': '100vh'
        });
        $('.nav-links').show();
    });

    // Navbar close 
    $('.nav-close').click((e) => {
        $('.nav-open').show();
        $('.nav-close').hide();
        
        $('#navbar').animate({
            'height': '60px'
        });
        $('.nav-links').hide();
    });

    // Main showcase 
    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        row: 12,
        col: 30,
        animation: [
            // 'flip',
            // 'slice',
            // 'box3D',
            // 'pixel',
            'fade',
            // 'glide',
            // 'card'
        ],
        file: [
            {
                src: {
                    // main: "/public/img/showcase/euro03.jpg",
                    cover: "/public/img/showcase/euro01.jpg"
                },
                title: 'Euro fin product',
                desc: "A worldwide network of aligned first class laboratories, counting with the latest technology and lead by renowned experts with a broad experience in their field, enable Eurofins to service the full product range of the Cosmetic and Personal Care Industries. From raw materials to finished products, assessment during product development to product validation, testing and control plans, we cover your quality assurance and control needs during key stages of product development",
                descLength: screen.width > 600? 220: 50,
                button: {
                    text: 'View more',
                    url: false,
                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    // main: "/public/image/main.png",
                    cover: "/public/img/showcase/mp.jpg"
                },
                title: 'MP Biomedical',
                desc: "MP Biomedicals is a worldwide corporation manufacturing and distributing products for the life science, fine chemicals, diagnostics and dosimetry markets. We are dedicated in providing research and industrial communities innovative, quality tools to aid them in their quest for scientific excellence.",
                descLength: screen.width > 600? 220: 50,
                button: {
                    text: 'View more',
                    url: false,
                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    // main: "/public/img/showcase/show-3.png",
                    cover: "/public/img/showcase/qia01.jpg"
                },
                title: 'Qiagen product ',
                desc: "QIAGEN is a provider of sample and assay technologies for molecular diagnostics, applied testing, academic and pharmaceutical research. Consolidated under the Dutch holding QIAGEN N.V., the company operates more than 35 offices in over 25 countries.[7] QIAGEN's shares are listed at the NYSE (using ticker QGEN) and at the Frankfurt Stock Exchange in the Prime Standard (using ticker QIA). Thierry Bernard is the company's Chief Executive Officer. The main operative headquarters are located in Hilden, Germany",
                descLength: screen.width > 600? 220: 50,
                button: {
                    text: 'View more',
                    url: false,
                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    // main:"/public/img/showcase/show-4.jpg",
                    cover: "/public/img/showcase/qia02.jpg"
                },
                title: 'Tarson product',
                desc: "These graduated tubes have frosted labeling surfaces and can withstand centrifugation Up to 20000 x G. The tubes can be easily and single handedly open and closed. They are ultra smooth polished interior surfaces that won't adhere most proteins and have high clarity for optimum sample visibility.",
                descLength: screen.width > 600? 220: 50,
                button: {
                    text: 'View more',
                    url: false,
                    class: 'btn btn-medium btn-primary'
                }
            }
        ]
    });

    $(".slideshow-container > div:gt(0)").hide();

    setInterval(function() { 
    $('.slideshow-container > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow-container');
    },  3000);
});

// Initialize animation plugin 
AOS.init({
    duration: 1000
});

