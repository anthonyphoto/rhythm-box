


const handleEventListener = () => {
    document.getElementById('js-music-start').addEventListener('click', () => {
        const target = document.getElementById('js-audio-main');
        target.load();
        target.play();
        document.getElementById('js-music-start').style.display = 'none';
        document.getElementById('js-music-stop').style.display = 'flex';
    });

    document.getElementById('js-music-stop').addEventListener('click', () => {
        document.getElementById('js-audio-main').pause();
        document.getElementById('js-music-start').style.display = 'flex';
        document.getElementById('js-music-stop').style.display = 'none';
    });

    document.getElementById('js-ajussi').addEventListener('click', () => {
        const target = document.getElementById('js-audio-ajussi');
        target.load();
        target.play();
    });

    document.getElementById('js-bbyong').addEventListener('click', () => {
        const target = document.getElementById('js-audio-bbyong');
        target.load();
        target.play();
    });

    document.getElementById('js-drum').addEventListener('click', () => {
        const target = document.getElementById('js-audio-drum');
        target.load();
        target.play();
    });

    document.getElementById('js-temb').addEventListener('click', () => {
        const target = document.getElementById('js-audio-temb');
        target.load();
        target.play();
    });

    document.getElementById('js-crash').addEventListener('click', () => {
        const target = document.getElementById('js-audio-crash');
        target.load();
        target.play();
    });

    document.getElementById('js-cheer').addEventListener('click', () => {
        const target = document.getElementById('js-audio-cheer');
        target.load();
        target.play();
    });


}

const main = () => {
    handleEventListener();
    document.getElementById('js-music-stop').style.display = 'none';

}


main();