describe("PropertyController", function() {
  var propertyController;
  var propertyList;
  var property_1;
  var property_2;

  beforeEach(function() {
    property_1 = jasmine.createSpyObj('property_1', ['returnLocation', 'returnId']);
    property_1.returnLocation.and.callFake(function() {
      return "London";
    });
    property_1.returnId.and.callFake(function() {
      return 12;
    });
    property_2 = jasmine.createSpyObj('property_2', ['returnLocation', 'returnId']);
    property_2.returnLocation.and.callFake(function() {
      return "Brighton";
    });
    property_2.returnId.and.callFake(function() {
      return 14;
    });
    propertyList = jasmine.createSpyObj('propertyList', ['returnPropertyList', 'findProperty']);
    propertyList.returnPropertyList.and.callFake(function() {
      return [property_1, property_2];
    });
    propertyList.findProperty.and.callFake(function() {
      return property_1
    });
    propertyController = new PropertyController(propertyList);
});

  describe("propertyController creation", function() {
    it("should be created with a PropertyList instance", function() {
      expect(propertyController._propertyList).toEqual(propertyList);
    });
  });

  describe("updating the page", function() {
    it("should update page HTML", function() {
      propertyController.addPropertyListView();
      var app = document.createElement("div");
      app.id = "app";
      document.body.appendChild(app);
      propertyController.updateHTML("app");
      var pattern = "<ul><li><a href=\"#12\">London</a></li><li><a href=\"#14\">Brighton</a></li></ul>"
      expect(app.innerHTML).toEqual(pattern);
    });

    it("shows single property page on url change", function() {
      window.addEventListener("hashchange", function() {
        expect(app.innerHTML).toEqual(pattern);
      });
      propertyController.addPropertyListView();
      propertyController.updateHTML("app");
      propertyController.showSinglePropertyOnUrlChange("app");
      var pattern = "<div>London</div>"
      if(!(window.location.href.includes("#12"))){
        window.location.href += "#12"
      }
    });
  });
});
