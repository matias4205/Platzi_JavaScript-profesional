class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this); //Le bindeamos this ya que sino tira "player.play is undefined"
    }

    run(player){
        this.player = player;
        
        this._initIntersectionObserver();
        this._initVisibilityChange();
    }

    _initVisibilityChange(){
        document.addEventListener('visibilitychange', () => {
            const isVisible = document.visibilityState === 'visible';

            isVisible ? this.player.play() : this.player.pause();
        });
    }

    _initIntersectionObserver(){
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold, //El humbral de trigger del handler en este caso 25%
        });

        observer.observe(this.player.media);
    }

    handleIntersection(entries){
        const [entry] = entries;

        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
};

export default AutoPause;