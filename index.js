module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {

        // Given an array of hashes, return an array of hashes where the
        // specified key/value match is found

        // filter_by_key_value([{"id": "chas"}, {"id": "frank"}], "id", "chas");
        // > [{"id": "chas"}]

        filter_by_key_value: function(arr, key, value) {
            return arr.filter(function (a) {
                return a[key] == value;
            });
        },

        // Given an array of hashes, a unique id, and an attribute, return the
        // attribute for the hash where the id matches

        // select_attr_via_id([
        //    {"id": "chas", "email":"chas@aptible.com"}, 
        //    {"id": "frank", "email":"frank@aptible.com"}], 
        // "chas", "email");
        // > "chas@aptible.com"

        select_attr_via_id: function(arr, id, attr) {
            target = arr.filter(function (a) {
                return a['id'] == id;
            });
            return target[0][attr];
        }
    }
};


