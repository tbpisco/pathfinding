System.register([], function (exports_1, context_1) {
    "use strict";
    var MapModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MapModel = class MapModel {
                constructor(col, row, isRandom) {
                    this.map = (isRandom) ? this.createRandomMap(col, row) : this.createEmptyMap(col, row);
                    this.row = row;
                    this.col = col;
                }
                get() {
                    return this.map;
                }
                getCol() {
                    return this.col;
                }
                getRow() {
                    return this.row;
                }
                createEmptyMap(col, row) {
                    let array = [];
                    for (let index = 0; index < row; index++) {
                        array.push(new Array(col + 1).join("0").split("").map((element) => 0));
                    }
                    return array;
                }
                createRandomMap(col, row) {
                    let array = [];
                    for (let index = 0; index < row; index++) {
                        array.push(new Array(col + 1).join("0").split("").map((element) => {
                            let num = Math.floor(Math.random() * 20);
                            if (num < 16) {
                                return 0;
                            }
                            else if (num == 17) {
                                return 15;
                            }
                            else if (num == 18) {
                                return 14;
                            }
                            else if (num == 19) {
                                return 1;
                            }
                            else {
                                return 2;
                            }
                        }));
                    }
                    let r = Math.floor(Math.random() * row);
                    let c = Math.floor(Math.random() * col);
                    array[r][c] = 3;
                    let r0 = Math.floor(Math.random() * row);
                    let c0 = Math.floor(Math.random() * col);
                    while (r0 == r && c0 == c) {
                        r0 = Math.floor(Math.random() * row);
                        c0 = Math.floor(Math.random() * col);
                    }
                    array[r0][c0] = 4;
                    return array;
                }
            };
            exports_1("MapModel", MapModel);
        }
    };
});
