function Property(hash) {
this._location = hash.location;
this._price = hash.price;
this._bedrooms = hash.bedrooms;
this._id = hash.id;
}

Property.prototype.returnLocation = function() {
  return this._location
};
