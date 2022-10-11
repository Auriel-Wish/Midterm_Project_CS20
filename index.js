all_headers = ["Caption Text 1", "Caption Text 2", "Caption Text 3"];
num_simple_pics = 4;
all_simple_descriptions = ["It's simple", "It's simple", "It's simple", "It's simple"];

function create_elements() {
    slideshow_section = document.getElementById("all_slides");
    simple_section1 = document.getElementById("simple_tr1");
    simple_section2 = document.getElementById("simple_tr2");

    total_add = "";
    for (i = 0; i < all_headers.length; i++) {
        total_add += '<div class="slide fade"><div class="text"><div>' + all_headers[i] + '</div></div><img src="images/intro_pic_' + (i + 1) + '.jpg"></div>';
    }
    slideshow_section.innerHTML = total_add;

    total_add = '<td><img src="images/intro_pic_1.jpg"></td>';
    for (i = 2; i < num_simple_pics + 1; i++) {
        total_add += '<td><i class="fa-solid fa-arrow-right-long"></i></td><td><img src="images/intro_pic_' + i + '.jpg"></td>';
    }
    simple_section1.innerHTML = total_add;

    total_add = "";
    for (i = 0; i < all_simple_descriptions.length; i++) {
        total_add += '<td><p>' + all_simple_descriptions[i] + '</p></td><td></td>';
    }
    simple_section2.innerHTML = total_add;
}

create_elements();

function plus_slides(direction) {
    slide_index += direction;
    show_slides(slide_index);
}

function show_slides(new_index) {
    if (new_index > slides.length) {
        slide_index = 1;
    }
    
    if (new_index < 1) {
        slide_index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slide_index-1].style.display = "block";  
}

slides = document.getElementsByClassName("slide");
slide_index = 1;
show_slides(slide_index);