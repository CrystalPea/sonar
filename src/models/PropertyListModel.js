function PropertyList() {
  this._properties = []
};

PropertyList.prototype.addProperty = function(property) {
  this._properties.push(property);
};

PropertyList.prototype.createProperty = function(hash) {
  property = new Property(hash);
  this.addProperty(property)
}

PropertyList.prototype.returnPropertyList = function() {
  return this._properties
};

PropertyList.prototype.findProperty = function(number) {
  return (this._properties.filter(function(property){ return property.returnId() === number }))[0];
};
