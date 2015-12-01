define(function(require) {
  var uid = null;
  var uKey = null; 

  return {
    getUid: function() {
      return uid;
    },
    setUid: function(newId) {
      uid = newId.uid;
    console.log("uid", newId);
    },
    getKey: function() {
      return uKey;
    },
    setKey: function(newKey) {
      uKey = newKey;
    }
  };
});