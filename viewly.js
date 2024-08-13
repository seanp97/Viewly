
class Viewly {

    constructor(el, per, cb = false) {
        this.Intersect(el, per, cb);
    }

    Intersect(elem, percentage, callback = false) {
        this.elem = elem;
        this.percentage = percentage;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if(callback) {
                        callback();
                    }
                }
            });
          }, {
            threshold: this.percentage / 100
          });
          
        observer.observe(this.elem);
    }

}
