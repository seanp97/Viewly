
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
                console.log('Element is in the viewport');

                if(callback) {
                    callback();
                }

              } else {
                console.log('Element is not in the viewport');
              }
            });
          }, {
            threshold: this.percentage / 100
          });
          
        observer.observe(this.elem);
    }

}
