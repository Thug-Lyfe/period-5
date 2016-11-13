"use strict";

/**
 * Created by butwhole on 24/10/2016.
 */
require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    "babel": {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "dist/app.js": "src/app.js"
            }
        }
    }
});

grunt.registerTask("default", ["babel"]);
//# sourceMappingURL=Gruntfile.js.map