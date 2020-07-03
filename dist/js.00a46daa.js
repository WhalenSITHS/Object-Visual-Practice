// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  displayContainer: document.querySelector(".container"),
  resetButton: document.querySelector(".reset-btn"),
  fullMenuButton: document.querySelector(".full-btn"),
  inStockButton: document.querySelector(".stock-btn"),
  vegetarianButton: document.querySelector(".veg-btn")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/Menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = exports.inStockItems = exports.vegetarianOptions = void 0;
var menu = [{
  name: "Pizza Slice",
  vegetarian: true,
  price: 2.0,
  img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  inStock: true
}, {
  name: "Salad",
  vegetarian: true,
  price: 5.0,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  inStock: true
}, {
  name: "Soup",
  vegetarian: true,
  price: 3.0,
  img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  inStock: true
}, {
  name: "Grilled Cheese",
  vegetarian: true,
  price: 4,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  inStock: false
}, {
  name: "Roast Chicken",
  vegetarian: false,
  price: 8.0,
  img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  inStock: true
}, {
  name: "Steak",
  vegetarian: false,
  price: 10.0,
  img: "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  inStock: false
}, {
  name: "Cheeseburger",
  vegetarian: false,
  price: 6,
  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
  inStock: true
}, {
  name: "Ice Cream",
  vegetarian: false,
  price: 3.0,
  img: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  inStock: true
}];
exports.menu = menu;
var vegetarianOptions = menu.filter(function (item) {
  return item.vegetarian === true;
});
exports.vegetarianOptions = vegetarianOptions;
var inStockItems = menu.filter(function (item) {
  return item.inStock === true;
});
exports.inStockItems = inStockItems;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Dom = require("./Dom");

var _Menu = require("./Menu");

var init = function init() {
  var displayItems = _Menu.menu.forEach(function (item) {
    return _Dom.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", "<ul class=\"item-list\">\n      <li class=\"item-name item-value\">".concat(item.name, "</li>\n      <li class=\"item-price item-value\"> $").concat(item.price, "</li>\n      <li class=\"item-vegetarian item-value\">Vegetarian: ").concat(item.vegetarian, "</li>\n      <li class=\"item-image\">\n        <img\n          class=\"item-image\"\n          src=\"").concat(item.img, "\"\n          alt=\"\"\n        />\n      </li>\n      <li class=\"item-in-stock item-value\">In Stock: ").concat(item.inStock, "</li>\n    </ul>"));
  });

  _Dom.DOMSelectors.fullMenuButton.addEventListener("click", function (e) {
    _Dom.DOMSelectors.displayContainer.innerHTML = "";

    _Menu.menu.forEach(function (item) {
      _Dom.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", "<ul class=\"item-list\">\n      <li class=\"item-name item-value\">".concat(item.name, "</li>\n      <li class=\"item-price item-value\"> $").concat(item.price, "</li>\n      <li class=\"item-vegetarian item-value\">Vegetarian: ").concat(item.vegetarian, "</li>\n      <li class=\"item-image\">\n        <img\n          class=\"item-image\"\n          src=\"").concat(item.img, "\"\n          alt=\"\"\n        />\n      </li>\n      <li class=\"item-in-stock item-value\">In Stock: ").concat(item.inStock, "</li>\n    </ul>"));
    });
  });

  _Dom.DOMSelectors.resetButton.addEventListener("click", function (e) {
    _Dom.DOMSelectors.displayContainer.innerHTML = "";
    console.log("clear content works");
  });

  _Dom.DOMSelectors.vegetarianButton.addEventListener("click", function (e) {
    _Dom.DOMSelectors.displayContainer.innerHTML = "";

    _Menu.vegetarianOptions.forEach(function (item) {
      _Dom.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", "<ul class=\"item-list\">\n      <li class=\"item-name item-value\">".concat(item.name, "</li>\n      <li class=\"item-price item-value\"> $").concat(item.price, "</li>\n      <li class=\"item-vegetarian item-value\">Vegetarian: ").concat(item.vegetarian, "</li>\n      <li class=\"item-image\">\n        <img\n          class=\"item-image\"\n          src=\"").concat(item.img, "\"\n          alt=\"\"\n        />\n      </li>\n      <li class=\"item-in-stock item-value\">In Stock: ").concat(item.inStock, "</li>\n    </ul>"));
    });
  });

  _Dom.DOMSelectors.inStockButton.addEventListener("click", function (e) {
    _Dom.DOMSelectors.displayContainer.innerHTML = "";

    _Menu.inStockItems.forEach(function (item) {
      _Dom.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", "<ul class=\"item-list\">\n      <li class=\"item-name item-value\">".concat(item.name, "</li>\n      <li class=\"item-price item-value\"> $").concat(item.price, "</li>\n      <li class=\"item-vegetarian item-value\">Vegetarian: ").concat(item.vegetarian, "</li>\n      <li class=\"item-image\">\n        <img\n          class=\"item-image\"\n          src=\"").concat(item.img, "\"\n          alt=\"\"\n        />\n      </li>\n      <li class=\"item-in-stock item-value\">In Stock: ").concat(item.inStock, "</li>\n    </ul>"));
    });
  });
};

init();
},{"./Dom":"js/Dom.js","./Menu":"js/Menu.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34649" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map