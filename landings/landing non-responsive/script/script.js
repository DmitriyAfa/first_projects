// slider
const btnLeft = document.querySelector('.section-about-slider_btnleft');
const btnRight = document.querySelector('.section-about-slider_btnright');
let item = document.querySelectorAll('.section-about-slider_window-item');

let count = 0;

btnRight.onclick = () => {
    count = count + 1;
    for (let i = 0; i < item.length; i++) {
        if (count == 1) { item[i].style.left = "-297px"; };
        if (count == 2) { item[i].style.left = "-594px"; };
        if (count == 3) { item[i].style.left = "-891px"; };
        if (count == 4) { item[i].style.left = "-1188px"; };
        if (count >= 4) { count = 4; };
    };
};

btnLeft.onclick = () => {
    count = count - 1;
    for (let i = 0; i < item.length; i++) {
        if (count == 0) { item[i].style.left = "0px"; };
        if (count == 1) { item[i].style.left = "-297px"; };
        if (count == 2) { item[i].style.left = "-594px"; };
        if (count == 3) { item[i].style.left = "-891px"; };
        if (count <= 0) { count = 0; };
    };
};

// section-posts READ MORE
const readMore = document.querySelectorAll('#read');
const red1 = document.querySelectorAll('#red1');
const red2 = document.querySelectorAll('#red2');
const red3 = document.querySelectorAll('#red3');

readMore[0].onclick = () => {
    readMore[0].style.color = 'red';
    red1[0].style.color = 'red';
    red2[0].style.color = 'red';
    red3[0].style.color = 'red';
};

readMore[1].onclick = () => {
    readMore[1].style.color = 'red';
    red1[1].style.color = 'red';
    red2[1].style.color = 'red';
    red3[1].style.color = 'red';
};