class Options {
    constructor(height = 0, width = 0, bg = 'white', fontSize = '12', textAlign = 'center'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
        Init (height, width, bg, fontSize, textAlign){
        let newElem = document.createElement('div');
        newElem.textContent = 'Veniam do cupidatat labore in dolore nostrud incididunt magna magna velit nulla ea reprehenderit.'
        /*newElem.style.height = height + 'px';
        newElem.style.width = width + 'px';
        newElem.style.background = bg;
        newElem.style.fontSize = fontSize + 'px';
        newElem.style.textAlign = textAlign;*/
        newElem.style.cssText = `background: ${bg}; font-size: ${fontSize}px; height: ${height}px; width: ${width}px; text-aline: ${textAlign}px;`;
        //document.querySelector('.container').insertBefore(newElem, document.querySelector('.slider'));
        document.querySelector('.slider').parentElement.insertBefore(newElem, document.querySelector('.slider'));
    }
}

const A = new Options();
    A.Init(500, 300, 'green', 20, 'left');
