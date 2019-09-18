class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this); //Le bindeamos this ya que sino tira "player.play is undefined"
    }

    run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold, //El humbral de trigger del handler en este caso 25%
        });

        observer.observe(player.media);
    }

    handleIntersection(entries){
        const [entry] = entries;
        console.log(entry);
        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
};

export default AutoPause;