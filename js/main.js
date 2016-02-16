(function () {
    //wrap our existing svg and store elements to be animated
    var self = this;
    var svg;
    var rect1;
    var rect2;
    var bigc;
    console.log("Main");
    Snap.load('landscape.svg', function (response) {
        self.svg = new Snap('.dibujo');
        var hillValley = response;
        self.svg.append(hillValley);
        self.bigC = self.svg.circle(1280, 459, 210).attr({stroke: 'silver', 'strokeWidth': 40, fill: 'silver'});
//        self.rect1 = self.svg.select('#layer1');
//        self.rect2 = self.svg.select('#rect2991');
        var layer1 = self.svg.select('#svg2');
        var elements = self.svg.selectAll('g').animate({opacity: 0.02}, 6000);
        console.log(elements);
        var layer2 = self.svg.selectAll('#layer2');
//        for (var i = 0; i < elements.length; i++) {
//            elements[i].animate({opacity: 0.02}, 6000);
//        }
//        for (var i = 0; i < layer2.length; i++) {
//            layer2[i].animate({opacity: 1}, 3000);            
//        }
        self.svg.select('#layer2').animate({opacity: 1}, 9000);
        self.svg.select('#layer2').animate({opacity: 0.5}, 9000);
        self.svg.select('#layer15').animate({opacity: 0.5}, 9000);
        self.svg.select('#layer12').animate({opacity: 0.5}, 9000);
//          for (var i = 0; i < elements.length; i++) {
//            elements[i].animate({opacity: 1}, 1000);
//        }


//        self.rect1.animate({x: 350}, 6000);
        self.bigC.animate({r: 130}, 6000, mina.bounce);
//        layer1.animate({opacity: 0}, 6000);
//        layer1.animate({x:100, y:600}, 6000);
//        self.rect2.animate({y: 600}, 6000, function () {
//            self.rect1.animate({x: 0}, 6000);
//            self.bigC.animate({r: 90}, 6000, mina.bounce);
//            self.rect2.animate({y: 700}, 6000);
//        });

        self.bigC.animate({r: 300}, 18000, mina.bounce);
        self.svg.select('#layer15').select('rect').animate({
            fill: 'red'
        }, 10000);
//             self.svg.select('#layer2').selectAll('path').animate({
//            fill: 'red'
//        }, 10000);
    });
})();
