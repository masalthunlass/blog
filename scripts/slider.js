

function slider(drawings){

    let index = 0;
    document.addEventListener("DOMContentLoaded", () => {

        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        const slide =  document.getElementById('slide');
        const legend =  document.getElementById('legend');
        previous.hidden = true;

        const togglePreviousVisibility = () => {
            previous.hidden = index === 0;
        }

        const toggleNextVisibility = () => {
            next.hidden = index === (drawings.length -1);
        }

        const changeSlide = (drawing) => {
            slide.src = drawing.image;
            legend.textContent = drawing.legend;
        }

        next.addEventListener('click', () => {
            const drawing = drawings[++index];
            togglePreviousVisibility();
            toggleNextVisibility();
            changeSlide(drawing);
        });

        previous.addEventListener('click', () => {
            const drawing = drawings[--index];
            togglePreviousVisibility();
            toggleNextVisibility();
            changeSlide(drawing);
        });
    });

};


