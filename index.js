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

const addDemoStartListener = () => {
    const handleDemoClick = e => {
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
        addDemoStopListener();
        document.getElementById('js-demo-start').removeEventListener('click', handleDemoClick);
    }

    document.getElementById('js-demo-start').addEventListener('click', handleDemoClick);
}

const addDemoStopListener = () => {
    const handleDemoStop = e => {
        document.getElementById('js-audio-demo').pause();
        document.getElementById('js-demo-playing').style.display = 'none';
        document.getElementById('js-button-wr').style.display = 'grid';
        document.getElementById('js-demo-start').style.display = 'block';
        document.getElementById('js-demo-stop').style.display = 'none';
        addDemoStartListener();
        addMusicStartListener();
        document.getElementById('js-audio-demo').removeEventListener('ended', handleDemoStop);
        document.getElementById('js-demo-stop').removeEventListener('click', handleDemoStop);
    
    }
    document.getElementById('js-audio-demo').addEventListener('ended', handleDemoStop);
    document.getElementById('js-demo-stop').addEventListener('click', handleDemoStop);
}

const addMusicStartListener = () => {
    const handleMusicStart = e => {
        e.stopPropagation();
        const target = document.getElementById('js-audio-main');
        target.currentTime = 0;
        target.play();
        document.getElementById('js-music-start').style.display = 'none';
        document.getElementById('js-music-stop').style.display = 'flex';
        addMusicStopListener();
        document.getElementById('js-music-start').removeEventListener('click', handleMusicStart);
    }
    document.getElementById('js-music-start').addEventListener('click', handleMusicStart);
}

const addMusicStopListener = () => {
    const handleMusicStop = e => {
        e.stopPropagation();
        document.getElementById('js-audio-main').pause();
        document.getElementById('js-music-start').style.display = 'flex';
        document.getElementById('js-music-stop').style.display = 'none';
        addMusicStartListener();
        document.getElementById('js-audio-main').removeEventListener('ended', handleMusicStop);
        document.getElementById('js-music-stop').removeEventListener('click', handleMusicStop);    
    }

    document.getElementById('js-audio-main').addEventListener('ended', handleMusicStop);
    document.getElementById('js-music-stop').addEventListener('click', handleMusicStop);
}

const addClickEventListener = () => {
    const buttonWr = document.getElementById('js-button-wr');
    const lookup = {
        'js-ajussi': document.getElementById('js-audio-ajussi'),
        'js-bbyong': document.getElementById('js-audio-bbyong'),
        'js-drum': document.getElementById('js-audio-drum'),
        'js-temb': document.getElementById('js-audio-temb'),
        'js-cheer': document.getElementById('js-audio-cheer'),
        'js-crash': document.getElementById('js-audio-crash'),
    }

    buttonWr.addEventListener('click', e => {
        const id = e.target.id;    
        switch(id) {
            case 'js-ajussi' : 
            case 'js-bbyong' : 
            case 'js-drum' : 
            case 'js-temb' : 
            case 'js-cheer' : 
            case 'js-crash' : 
                const target = lookup[id];
                target.currentTime = 0;
                target.play();
                handleClickStyle(e.target);
                break;
        }
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

    addDemoStartListener();
    addMusicStartListener();
    addClickEventListener();
}

main();