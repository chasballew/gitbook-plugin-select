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

        // select_attr_via_id(
        //     [
        //         {"id": "chas", "email":"chas@aptible.com"}, 
        //         {"id": "frank", "email":"frank@aptible.com"}
        //     ], 
        //     "chas", 
        //     "email"
        // );
        // > "chas@aptible.com"

        select_attr_via_id: function(arr, id, attr) {
            target = arr.filter(function (a) {
                return a['id'] == id;
            });
            return target[0][attr];
        },

        // Takes two arrays: 
        // The first array contains hashes, each of which contain an "id" key:
        // [{"id": "chas"}, {"id":"frank"}]
        //
        // The second array consists of the id values you want to select
        // records by.
        // 
        // Return an array containing only the hashes in the first array
        // where a match was found.

        // select_users = function(list, selections) {
        //     return list.filter( function (a) {
        //         for (var i = 0; i < selections.length; i++) {
        //             if ( a['id'] == selections[i] ) return true;
        //         }
        //     });
        // }

        // list = [{"id": "chas"}, {"id":"frank"}];
        // selections = ['chas'];
        // select_users(list, selections);

        select_users: function(list, selections) {
            return list.filter( function (a) {
                for (var i = 0; i < selections.length; i++) {
                    if ( a['id'] == selections[i] ) return true;
                }
            });
        }
    }
};


