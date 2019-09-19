import MediaPlayer from '../MediaPlayer';

class AutoPause{
    private threshold: number;
    player: MediaPlayer
    
    constructor(){
        this.threshold = 0.25;
        this._handleIntersection = this._handleIntersection.bind(this); //Le bindeamos this ya que sino tira "player.play is undefined"
        this._handleVisibility = this._handleVisibility.bind(this);
    }

    run(player){
        this.player = player;
        
        this._initIntersectionObserver();
        this._initVisibilityChange();
    }

    private _initVisibilityChange(){
        document.addEventListener('visibilitychange', this._handleVisibility);
    }

    private _initIntersectionObserver(){
        const observer = new IntersectionObserver(this._handleIntersection, {
            threshold: this.threshold, //El humbral de trigger del handler en este caso 25%
        });
        observer.observe(this.player.media);
    }

    private _handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        this._playPause(isVisible);
    }

    private _handleVisibility(){
        const isVisible = document.visibilityState === 'visible';
        this._playPause(isVisible);
    }

    private _playPause(isVisible){
        isVisible ? this.player.play() : this.player.pause();
    }
};

export default AutoPause;