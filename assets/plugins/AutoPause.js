class AutoPause{
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

    _initVisibilityChange(){
        document.addEventListener('visibilitychange', this.handleVisibility);
    }

    _initIntersectionObserver(){
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold, //El humbral de trigger del handler en este caso 25%
        });
        observer.observe(this.player.media);
    }

    _handleIntersection(entries){
        const [entry] = entries;
        const isVisible = entry.intersectionRatio >= this.threshold;
        this._playPause(isVisible);
    }

    _handleVisibility(){
        const isVisible = document.visibilityState === 'visible';
        this._playPause(isVisible);
    }

    _playPause(isVisible){
        isVisible ? this.player.play() : this.player.pause();
    }
};

export default AutoPause;