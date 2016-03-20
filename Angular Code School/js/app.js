(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.00,
      description: 'Some gems have hidden qualities beyond their luster, \
       beyond their shine...',
      canPurchase: true,
      reviews:[
        {
          stars: 5,
          body: "I love this product!",
          author: "John@thomas.com"
        },
        {
          stars: 3,
          body: "It's ok, nothing too great",
          author: "bailey@raja.com"
        }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: 'Origin of the Pentagonal Gem is unknown',
      canPurchase: true,
      reviews: [
        {
          stars: 4,
          body: "It was soso",
          author: "Bobbie@brooks.com"
        }
      ]
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(setTab){
      return this.tab === setTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  })
})();
