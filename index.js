module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {

        // Given an array of hashes, return an array of hashes where the
        // specified key/value match is found
        filter_by_key_value: function(arr, key, value) {
            return arr.filter(function (a) {
                return a[key] == value;
            });
        }
    }
};


