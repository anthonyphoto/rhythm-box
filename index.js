const DELAY = 250;

const _throttle = (func, delay) => {
    let run = true;

    return (...args) => {
        if (!run) return;
        func(...args);
        run = false;
        setTimeout(() => {
            run = true;
        }, delay);
    }
}

const handleClickStyle = elem => {
    elem.classList.add('btn_clicked');
    setTimeout(() => {
        elem.classList.remove('btn_clicked');

    }, 800)
}

const handleEventListener = () => {
    document.getElementById('js-demo-start').addEventListener('click', () => {
        document.getElementById('js-audio-main').pause();
        document.getElementById('js-music-start').style.display = 'flex';
        document.getElementById('js-music-stop').style.display = 'none';
        const target = document.getElementById('js-audio-demo');
        target.currentTime = 0;
        target.play();
        document.getElementById('js-button-wr').style.display = 'none';
        document.getElementById('js-demo-playing').style.display = 'block';

        document.getElementById('js-demo-start').style.display = 'none';
        document.getElementById('js-demo-stop').style.display = 'block';
    });

    document.getElementById('js-audio-demo').addEventListener('ended', () => {
        document.getElementById('js-demo-playing').style.display = 'none';
        document.getElementById('js-button-wr').style.display = 'grid';
        document.getElementById('js-demo-start').style.display = 'block';
        document.getElementById('js-demo-stop').style.display = 'none';
    });

    document.getElementById('js-demo-stop').addEventListener('click', () => {
        document.getElementById('js-audio-demo').pause();
        document.getElementById('js-demo-playing').style.display = 'none';
        document.getElementById('js-button-wr').style.display = 'grid';
        document.getElementById('js-demo-start').style.display = 'block';
        document.getElementById('js-demo-stop').style.display = 'none';
    });

    document.getElementById('js-music-start').addEventListener('click', () => {
        const target = document.getElementById('js-audio-main');
        target.currentTime = 0;
        target.play();
        document.getElementById('js-music-start').style.display = 'none';
        document.getElementById('js-music-stop').style.display = 'flex';
    });

    document.getElementById('js-audio-main').addEventListener('ended', () => {
        document.getElementById('js-music-start').style.display = 'flex';
        document.getElementById('js-music-stop').style.display = 'none';
    });

    document.getElementById('js-music-stop').addEventListener('click', () => {
        document.getElementById('js-audio-main').pause();
        document.getElementById('js-music-start').style.display = 'flex';
        document.getElementById('js-music-stop').style.display = 'none';
    });

    document.getElementById('js-ajussi').addEventListener('click', () => {
        const target = document.getElementById('js-audio-ajussi');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-ajussi'));
    });

    document.getElementById('js-bbyong').addEventListener('click', () => {
        const target = document.getElementById('js-audio-bbyong');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-bbyong'));
    });

    document.getElementById('js-drum').addEventListener('click', () => {
        const target = document.getElementById('js-audio-drum');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-drum'));
    });

    document.getElementById('js-temb').addEventListener('click', () => {
        const target = document.getElementById('js-audio-temb');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-temb'));
    });

    document.getElementById('js-crash').addEventListener('click', () => {
        const target = document.getElementById('js-audio-crash');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-crash'));
    });

    document.getElementById('js-cheer').addEventListener('click', () => {
        const target = document.getElementById('js-audio-cheer');
        target.currentTime = 0;
        target.play();
        handleClickStyle(document.getElementById('js-cheer'));
    });

}

const main = () => {
    document.getElementById('js-music-stop').style.display = 'none';
    document.getElementById('js-demo-stop').style.display = 'none';
    document.getElementById('js-demo-playing').style.display = 'none';
    const param = window.location.search.split(/=/);
    const id = param.length === 2 ? param[1] : 'default';
    if (id === 'mj') {
        document.getElementById('js-bg').classList.add('bg_override');
    }
    handleEventListener();
}


main();