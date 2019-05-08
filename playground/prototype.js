function Me () {
  this.name = 'xiawei'
}

Me.prototype.name = 'xiawei666'

me = new Me()

console.log(me.name);
