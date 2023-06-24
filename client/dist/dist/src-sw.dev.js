"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var e = {
    414: function _(e, t, s) {
      "use strict";

      s.d(t, {
        v: function v() {
          return a;
        }
      }), s(524), s(125), s(119), s(120), s(895);

      var a =
      /*#__PURE__*/
      function () {
        function a() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, a);

          this._statuses = e.statuses, this._headers = e.headers;
        }

        _createClass(a, [{
          key: "isResponseCacheable",
          value: function isResponseCacheable(e) {
            var _this = this;

            var t = !0;
            return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some(function (t) {
              return e.headers.get(t) === _this._headers[t];
            })), t;
          }
        }]);

        return a;
      }();
    },
    709: function _(e, t, s) {
      "use strict";

      s.d(t, {
        x: function x() {
          return n;
        }
      });
      var a = s(414);
      s(895);

      var n = function n(e) {
        var _this2 = this;

        _classCallCheck(this, n);

        this.cacheWillUpdate = function _callee(_ref) {
          var e;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e = _ref.response;
                  return _context.abrupt("return", _this2._cacheableResponse.isResponseCacheable(e) ? e : null);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          });
        }, this._cacheableResponse = new a.v(e);
      };
    },
    895: function (_2) {
      function _() {
        return _2.apply(this, arguments);
      }

      _.toString = function () {
        return _2.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:cacheable-response:6.5.4"] && _();
      } catch (e) {}
    }),
    125: function _(e, t, s) {
      "use strict";

      s.d(t, {
        V: function V() {
          return a;
        }
      }), s(913);

      var a =
      /*#__PURE__*/
      function (_Error) {
        _inherits(a, _Error);

        function a(e, t) {
          var _this3;

          _classCallCheck(this, a);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, function (e) {
            var s = e;

            for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              t[_key - 1] = arguments[_key];
            }

            return t.length > 0 && (s += " :: ".concat(JSON.stringify(t))), s;
          }(e, t))), _this3.name = e, _this3.details = t;
          return _this3;
        }

        return a;
      }(_wrapNativeSuper(Error));
    },
    524: function _(e, t, s) {
      "use strict";

      s(125), s(913);
    },
    536: function _(e, t, s) {
      "use strict";

      s.d(t, {
        x: function x() {
          return r;
        }
      }), s(913);

      var a = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" != typeof registration ? registration.scope : ""
      },
          n = function n(e) {
        return [a.prefix, e, a.suffix].filter(function (e) {
          return e && e.length > 0;
        }).join("-");
      },
          r = {
        updateDetails: function updateDetails(e) {
          (function (e) {
            for (var _i = 0, _Object$keys = Object.keys(a); _i < _Object$keys.length; _i++) {
              var _t = _Object$keys[_i];
              e(_t);
            }
          })(function (t) {
            "string" == typeof e[t] && (a[t] = e[t]);
          });
        },
        getGoogleAnalyticsName: function getGoogleAnalyticsName(e) {
          return e || n(a.googleAnalytics);
        },
        getPrecacheName: function getPrecacheName(e) {
          return e || n(a.precache);
        },
        getPrefix: function getPrefix() {
          return a.prefix;
        },
        getRuntimeName: function getRuntimeName(e) {
          return e || n(a.runtime);
        },
        getSuffix: function getSuffix() {
          return a.suffix;
        }
      };
    },
    327: function _(e, t, s) {
      "use strict";

      function a(e) {
        e.then(function () {});
      }

      s.d(t, {
        f: function f() {
          return a;
        }
      }), s(913);
    },
    119: function _(e, t, s) {
      "use strict";

      s.d(t, {
        C: function C() {
          return a;
        }
      }), s(913);

      var a = function a(e) {
        return new URL(String(e), location.href).href.replace(new RegExp("^".concat(location.origin)), "");
      };
    },
    120: function _(e, t, s) {
      "use strict";

      s.d(t, {
        k: function k() {
          return a;
        }
      }), s(913);
      var a = null;
    },
    902: function _(e, t, s) {
      "use strict";

      function a(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }

      s.d(t, {
        V: function V() {
          return a;
        }
      }), s(913);
    },
    913: function (_3) {
      function _() {
        return _3.apply(this, arguments);
      }

      _.toString = function () {
        return _3.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:core:6.5.4"] && _();
      } catch (e) {}
    }),
    565: function _(e, t, s) {
      "use strict";

      s.d(t, {
        f: function f() {
          return a;
        }
      }), s(913);
      var a = new Set();
    },
    721: function _(e, t, s) {
      "use strict";

      s.d(t, {
        p: function p() {
          return C;
        }
      }), s(524);
      var a = s(327);
      s(120), s(125);

      var n = function n(e, t) {
        return t.some(function (t) {
          return e instanceof t;
        });
      };

      var r, i;
      var c = new WeakMap(),
          o = new WeakMap(),
          h = new WeakMap(),
          l = new WeakMap(),
          u = new WeakMap();
      var d = {
        get: function get(e, t, s) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return o.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || h.get(e);
            if ("store" === t) return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0]);
          }

          return p(e[t]);
        },
        set: function set(e, t, s) {
          return e[t] = s, !0;
        },
        has: function has(e, t) {
          return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e;
        }
      };

      function f(e) {
        return "function" == typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function () {
          for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          return t.apply(g(this), e), p(c.get(this));
        } : function () {
          for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
          }

          return p(t.apply(g(this), e));
        } : function (e) {
          var _t2;

          for (var _len4 = arguments.length, s = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            s[_key4 - 1] = arguments[_key4];
          }

          var a = (_t2 = t).call.apply(_t2, [g(this), e].concat(s));

          return h.set(a, e.sort ? e.sort() : [e]), p(a);
        } : (e instanceof IDBTransaction && function (e) {
          if (o.has(e)) return;
          var t = new Promise(function (t, s) {
            var a = function a() {
              e.removeEventListener("complete", n), e.removeEventListener("error", r), e.removeEventListener("abort", r);
            },
                n = function n() {
              t(), a();
            },
                r = function r() {
              s(e.error || new DOMException("AbortError", "AbortError")), a();
            };

            e.addEventListener("complete", n), e.addEventListener("error", r), e.addEventListener("abort", r);
          });
          o.set(e, t);
        }(e), n(e, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, d) : e);
        var t;
      }

      function p(e) {
        if (e instanceof IDBRequest) return function (e) {
          var t = new Promise(function (t, s) {
            var a = function a() {
              e.removeEventListener("success", n), e.removeEventListener("error", r);
            },
                n = function n() {
              t(p(e.result)), a();
            },
                r = function r() {
              s(e.error), a();
            };

            e.addEventListener("success", n), e.addEventListener("error", r);
          });
          return t.then(function (t) {
            t instanceof IDBCursor && c.set(t, e);
          })["catch"](function () {}), u.set(t, e), t;
        }(e);
        if (l.has(e)) return l.get(e);
        var t = f(e);
        return t !== e && (l.set(e, t), u.set(t, e)), t;
      }

      var g = function g(e) {
        return u.get(e);
      },
          m = ["get", "getKey", "getAll", "getAllKeys", "count"],
          w = ["put", "add", "delete", "clear"],
          y = new Map();

      function _(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (y.get(t)) return y.get(t);
        var s = t.replace(/FromIndex$/, ""),
            a = t !== s,
            n = w.includes(s);
        if (!(s in (a ? IDBIndex : IDBObjectStore).prototype) || !n && !m.includes(s)) return;

        var r = function r(e) {
          var _i2;

          var r,
              i,
              _len5,
              t,
              _key5,
              _args2 = arguments;

          return regeneratorRuntime.async(function r$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  r = this.transaction(e, n ? "readwrite" : "readonly");
                  i = r.store;

                  for (_len5 = _args2.length, t = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                    t[_key5 - 1] = _args2[_key5];
                  }

                  a && (i = i.index(t.shift()));
                  _context2.next = 6;
                  return regeneratorRuntime.awrap(Promise.all([(_i2 = i)[s].apply(_i2, t), n && r.done]));

                case 6:
                  return _context2.abrupt("return", _context2.sent[0]);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        };

        return y.set(t, r), r;
      }

      var v;
      v = d, d = _objectSpread({}, v, {
        get: function get(e, t, s) {
          return _(e, t) || v.get(e, t, s);
        },
        has: function has(e, t) {
          return !!_(e, t) || v.has(e, t);
        }
      }), s(550);

      var b = "cache-entries",
          R = function R(e) {
        var t = new URL(e, location.href);
        return t.hash = "", t.href;
      };

      var x =
      /*#__PURE__*/
      function () {
        function x(e) {
          _classCallCheck(this, x);

          this._db = null, this._cacheName = e;
        }

        _createClass(x, [{
          key: "_upgradeDb",
          value: function _upgradeDb(e) {
            var t = e.createObjectStore(b, {
              keyPath: "id"
            });
            t.createIndex("cacheName", "cacheName", {
              unique: !1
            }), t.createIndex("timestamp", "timestamp", {
              unique: !1
            });
          }
        }, {
          key: "_upgradeDbAndDeleteOldDbs",
          value: function _upgradeDbAndDeleteOldDbs(e) {
            this._upgradeDb(e), this._cacheName && function (e) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  t = _ref2.blocked;

              var s = indexedDB.deleteDatabase(e);
              t && s.addEventListener("blocked", function (e) {
                return t(e.oldVersion, e);
              }), p(s).then(function () {});
            }(this._cacheName);
          }
        }, {
          key: "setTimestamp",
          value: function setTimestamp(e, t) {
            var s, a;
            return regeneratorRuntime.async(function setTimestamp$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    s = {
                      url: e = R(e),
                      timestamp: t,
                      cacheName: this._cacheName,
                      id: this._getId(e)
                    };
                    _context3.next = 3;
                    return regeneratorRuntime.awrap(this.getDb());

                  case 3:
                    _context3.t0 = b;
                    _context3.t1 = {
                      durability: "relaxed"
                    };
                    a = _context3.sent.transaction(_context3.t0, "readwrite", _context3.t1);
                    _context3.next = 8;
                    return regeneratorRuntime.awrap(a.store.put(s));

                  case 8:
                    _context3.next = 10;
                    return regeneratorRuntime.awrap(a.done);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "getTimestamp",
          value: function getTimestamp(e) {
            var t, s;
            return regeneratorRuntime.async(function getTimestamp$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return regeneratorRuntime.awrap(this.getDb());

                  case 2:
                    t = _context4.sent;
                    _context4.next = 5;
                    return regeneratorRuntime.awrap(t.get(b, this._getId(e)));

                  case 5:
                    s = _context4.sent;
                    return _context4.abrupt("return", null == s ? void 0 : s.timestamp);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "expireEntries",
          value: function expireEntries(e, t) {
            var s, a, n, r, _s, i, _i3, _n, _e;

            return regeneratorRuntime.async(function expireEntries$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return regeneratorRuntime.awrap(this.getDb());

                  case 2:
                    s = _context5.sent;
                    _context5.next = 5;
                    return regeneratorRuntime.awrap(s.transaction(b).store.index("timestamp").openCursor(null, "prev"));

                  case 5:
                    a = _context5.sent;
                    n = [];
                    r = 0;

                  case 8:
                    if (!a) {
                      _context5.next = 16;
                      break;
                    }

                    _s = a.value;
                    _s.cacheName === this._cacheName && (e && _s.timestamp < e || t && r >= t ? n.push(a.value) : r++);
                    _context5.next = 13;
                    return regeneratorRuntime.awrap(a["continue"]());

                  case 13:
                    a = _context5.sent;

                  case 14:
                    _context5.next = 8;
                    break;

                  case 16:
                    i = [];
                    _i3 = 0, _n = n;

                  case 18:
                    if (!(_i3 < _n.length)) {
                      _context5.next = 26;
                      break;
                    }

                    _e = _n[_i3];
                    _context5.next = 22;
                    return regeneratorRuntime.awrap(s["delete"](b, _e.id));

                  case 22:
                    i.push(_e.url);

                  case 23:
                    _i3++;
                    _context5.next = 18;
                    break;

                  case 26:
                    return _context5.abrupt("return", i);

                  case 27:
                  case "end":
                    return _context5.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "_getId",
          value: function _getId(e) {
            return this._cacheName + "|" + R(e);
          }
        }, {
          key: "getDb",
          value: function getDb() {
            return regeneratorRuntime.async(function getDb$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.t0 = this._db;

                    if (_context6.t0) {
                      _context6.next = 5;
                      break;
                    }

                    _context6.next = 4;
                    return regeneratorRuntime.awrap(function (e, t) {
                      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                          s = _ref3.blocked,
                          a = _ref3.upgrade,
                          n = _ref3.blocking,
                          r = _ref3.terminated;

                      var i = indexedDB.open(e, t),
                          c = p(i);
                      return a && i.addEventListener("upgradeneeded", function (e) {
                        a(p(i.result), e.oldVersion, e.newVersion, p(i.transaction), e);
                      }), s && i.addEventListener("blocked", function (e) {
                        return s(e.oldVersion, e.newVersion, e);
                      }), c.then(function (e) {
                        r && e.addEventListener("close", function () {
                          return r();
                        }), n && e.addEventListener("versionchange", function (e) {
                          return n(e.oldVersion, e.newVersion, e);
                        });
                      })["catch"](function () {}), c;
                    }("workbox-expiration", 1, {
                      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                    }));

                  case 4:
                    this._db = _context6.sent;

                  case 5:
                    return _context6.abrupt("return", this._db);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, null, this);
          }
        }]);

        return x;
      }();

      var C =
      /*#__PURE__*/
      function () {
        function C(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, C);

          this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new x(e);
        }

        _createClass(C, [{
          key: "expireEntries",
          value: function expireEntries() {
            var e, t, s, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _e2;

            return regeneratorRuntime.async(function expireEntries$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!this._isRunning) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return", void (this._rerunRequested = !0));

                  case 2:
                    this._isRunning = !0;
                    e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0;
                    _context7.next = 6;
                    return regeneratorRuntime.awrap(this._timestampModel.expireEntries(e, this._maxEntries));

                  case 6:
                    t = _context7.sent;
                    _context7.next = 9;
                    return regeneratorRuntime.awrap(self.caches.open(this._cacheName));

                  case 9:
                    s = _context7.sent;
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context7.prev = 13;
                    _iterator = t[Symbol.iterator]();

                  case 15:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context7.next = 22;
                      break;
                    }

                    _e2 = _step.value;
                    _context7.next = 19;
                    return regeneratorRuntime.awrap(s["delete"](_e2, this._matchOptions));

                  case 19:
                    _iteratorNormalCompletion = true;
                    _context7.next = 15;
                    break;

                  case 22:
                    _context7.next = 28;
                    break;

                  case 24:
                    _context7.prev = 24;
                    _context7.t0 = _context7["catch"](13);
                    _didIteratorError = true;
                    _iteratorError = _context7.t0;

                  case 28:
                    _context7.prev = 28;
                    _context7.prev = 29;

                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                      _iterator["return"]();
                    }

                  case 31:
                    _context7.prev = 31;

                    if (!_didIteratorError) {
                      _context7.next = 34;
                      break;
                    }

                    throw _iteratorError;

                  case 34:
                    return _context7.finish(31);

                  case 35:
                    return _context7.finish(28);

                  case 36:
                    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, (0, a.f)(this.expireEntries()));

                  case 37:
                  case "end":
                    return _context7.stop();
                }
              }
            }, null, this, [[13, 24, 28, 36], [29,, 31, 35]]);
          }
        }, {
          key: "updateTimestamp",
          value: function updateTimestamp(e) {
            return regeneratorRuntime.async(function updateTimestamp$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return regeneratorRuntime.awrap(this._timestampModel.setTimestamp(e, Date.now()));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "isURLExpired",
          value: function isURLExpired(e) {
            var _t3, _s2;

            return regeneratorRuntime.async(function isURLExpired$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!this._maxAgeSeconds) {
                      _context9.next = 6;
                      break;
                    }

                    _context9.next = 3;
                    return regeneratorRuntime.awrap(this._timestampModel.getTimestamp(e));

                  case 3:
                    _t3 = _context9.sent;
                    _s2 = Date.now() - 1e3 * this._maxAgeSeconds;
                    return _context9.abrupt("return", void 0 === _t3 || _t3 < _s2);

                  case 6:
                    return _context9.abrupt("return", !1);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "delete",
          value: function _delete() {
            return regeneratorRuntime.async(function _delete$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this._rerunRequested = !1;
                    _context10.next = 3;
                    return regeneratorRuntime.awrap(this._timestampModel.expireEntries(1 / 0));

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, null, this);
          }
        }]);

        return C;
      }();
    },
    202: function _(e, t, s) {
      "use strict";

      s.d(t, {
        Q: function Q() {
          return o;
        }
      }), s(524);
      var a = s(536),
          n = s(327),
          r = (s(119), s(120), s(565));
      s(913);
      var i = s(125),
          c = s(721);
      s(550);

      var o =
      /*#__PURE__*/
      function () {
        function o() {
          var _this4 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, o);

          var t;
          this.cachedResponseWillBeUsed = function _callee2(_ref4) {
            var e, t, s, a, r, i, c;
            return regeneratorRuntime.async(function _callee2$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    e = _ref4.event, t = _ref4.request, s = _ref4.cacheName, a = _ref4.cachedResponse;

                    if (a) {
                      _context11.next = 3;
                      break;
                    }

                    return _context11.abrupt("return", null);

                  case 3:
                    r = _this4._isResponseDateFresh(a), i = _this4._getCacheExpiration(s);
                    (0, n.f)(i.expireEntries());
                    c = i.updateTimestamp(t.url);
                    if (e) try {
                      e.waitUntil(c);
                    } catch (e) {}
                    return _context11.abrupt("return", r ? a : null);

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          }, this.cacheDidUpdate = function _callee3(_ref5) {
            var e, t, s;
            return regeneratorRuntime.async(function _callee3$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    e = _ref5.cacheName, t = _ref5.request;
                    s = _this4._getCacheExpiration(e);
                    _context12.next = 4;
                    return regeneratorRuntime.awrap(s.updateTimestamp(t.url));

                  case 4:
                    _context12.next = 6;
                    return regeneratorRuntime.awrap(s.expireEntries());

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            });
          }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map(), e.purgeOnQuotaError && (t = function t() {
            return _this4.deleteCacheAndMetadata();
          }, r.f.add(t));
        }

        _createClass(o, [{
          key: "_getCacheExpiration",
          value: function _getCacheExpiration(e) {
            if (e === a.x.getRuntimeName()) throw new i.V("expire-custom-caches-only");

            var t = this._cacheExpirations.get(e);

            return t || (t = new c.p(e, this._config), this._cacheExpirations.set(e, t)), t;
          }
        }, {
          key: "_isResponseDateFresh",
          value: function _isResponseDateFresh(e) {
            if (!this._maxAgeSeconds) return !0;

            var t = this._getDateHeaderTimestamp(e);

            return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds;
          }
        }, {
          key: "_getDateHeaderTimestamp",
          value: function _getDateHeaderTimestamp(e) {
            if (!e.headers.has("date")) return null;
            var t = e.headers.get("date"),
                s = new Date(t).getTime();
            return isNaN(s) ? null : s;
          }
        }, {
          key: "deleteCacheAndMetadata",
          value: function deleteCacheAndMetadata() {
            var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, _e3, _t4;

            return regeneratorRuntime.async(function deleteCacheAndMetadata$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context13.prev = 3;
                    _iterator2 = this._cacheExpirations[Symbol.iterator]();

                  case 5:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context13.next = 14;
                      break;
                    }

                    _step2$value = _slicedToArray(_step2.value, 2), _e3 = _step2$value[0], _t4 = _step2$value[1];
                    _context13.next = 9;
                    return regeneratorRuntime.awrap(self.caches["delete"](_e3));

                  case 9:
                    _context13.next = 11;
                    return regeneratorRuntime.awrap(_t4["delete"]());

                  case 11:
                    _iteratorNormalCompletion2 = true;
                    _context13.next = 5;
                    break;

                  case 14:
                    _context13.next = 20;
                    break;

                  case 16:
                    _context13.prev = 16;
                    _context13.t0 = _context13["catch"](3);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context13.t0;

                  case 20:
                    _context13.prev = 20;
                    _context13.prev = 21;

                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }

                  case 23:
                    _context13.prev = 23;

                    if (!_didIteratorError2) {
                      _context13.next = 26;
                      break;
                    }

                    throw _iteratorError2;

                  case 26:
                    return _context13.finish(23);

                  case 27:
                    return _context13.finish(20);

                  case 28:
                    this._cacheExpirations = new Map();

                  case 29:
                  case "end":
                    return _context13.stop();
                }
              }
            }, null, this, [[3, 16, 20, 28], [21,, 23, 27]]);
          }
        }]);

        return o;
      }();
    },
    550: function (_4) {
      function _() {
        return _4.apply(this, arguments);
      }

      _.toString = function () {
        return _4.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:expiration:6.5.4"] && _();
      } catch (e) {}
    }),
    977: function (_5) {
      function _() {
        return _5.apply(this, arguments);
      }

      _.toString = function () {
        return _5.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:precaching:6.5.4"] && _();
      } catch (e) {}
    }),
    796: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        precacheAndRoute: function precacheAndRoute() {
          return c;
        }
      });
      var a = s(917),
          n = s(86),
          r = (s(120), s(119), s(188));
      s(977);

      var i =
      /*#__PURE__*/
      function (_r$A) {
        _inherits(i, _r$A);

        function i(e, t) {
          _classCallCheck(this, i);

          return _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, function (_ref6) {
            var s = _ref6.request;
            var a = e.getURLsToCacheKeys();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(e) {
                var _ref7,
                    _ref7$ignoreURLParame,
                    t,
                    _ref7$directoryIndex,
                    s,
                    _ref7$cleanURLs,
                    a,
                    n,
                    r,
                    i,
                    _e4,
                    _e5,
                    _e6,
                    _iteratorNormalCompletion4,
                    _didIteratorError4,
                    _iteratorError4,
                    _iterator4,
                    _step4,
                    _t6,
                    _args14 = arguments;

                return regeneratorRuntime.wrap(function _callee4$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _ref7 = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {}, _ref7$ignoreURLParame = _ref7.ignoreURLParametersMatching, t = _ref7$ignoreURLParame === void 0 ? [/^utm_/, /^fbclid$/] : _ref7$ignoreURLParame, _ref7$directoryIndex = _ref7.directoryIndex, s = _ref7$directoryIndex === void 0 ? "index.html" : _ref7$directoryIndex, _ref7$cleanURLs = _ref7.cleanURLs, a = _ref7$cleanURLs === void 0 ? !0 : _ref7$cleanURLs, n = _ref7.urlManipulation;
                        r = new URL(e, location.href);
                        r.hash = "";
                        _context14.next = 5;
                        return r.href;

                      case 5:
                        i = function (e) {
                          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

                          var _loop = function _loop() {
                            var s = _arr2[_i4];
                            t.some(function (e) {
                              return e.test(s);
                            }) && e.searchParams["delete"](s);
                          };

                          for (var _i4 = 0, _arr2 = _toConsumableArray(e.searchParams.keys()); _i4 < _arr2.length; _i4++) {
                            _loop();
                          }

                          return e;
                        }(r, t);

                        _context14.next = 8;
                        return i.href;

                      case 8:
                        if (!(s && i.pathname.endsWith("/"))) {
                          _context14.next = 13;
                          break;
                        }

                        _e4 = new URL(i.href);
                        _e4.pathname += s;
                        _context14.next = 13;
                        return _e4.href;

                      case 13:
                        if (!a) {
                          _context14.next = 18;
                          break;
                        }

                        _e5 = new URL(i.href);
                        _e5.pathname += ".html";
                        _context14.next = 18;
                        return _e5.href;

                      case 18:
                        if (!n) {
                          _context14.next = 46;
                          break;
                        }

                        _e6 = n({
                          url: r
                        });
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context14.prev = 23;
                        _iterator4 = _e6[Symbol.iterator]();

                      case 25:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                          _context14.next = 32;
                          break;
                        }

                        _t6 = _step4.value;
                        _context14.next = 29;
                        return _t6.href;

                      case 29:
                        _iteratorNormalCompletion4 = true;
                        _context14.next = 25;
                        break;

                      case 32:
                        _context14.next = 38;
                        break;

                      case 34:
                        _context14.prev = 34;
                        _context14.t0 = _context14["catch"](23);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context14.t0;

                      case 38:
                        _context14.prev = 38;
                        _context14.prev = 39;

                        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                          _iterator4["return"]();
                        }

                      case 41:
                        _context14.prev = 41;

                        if (!_didIteratorError4) {
                          _context14.next = 44;
                          break;
                        }

                        throw _iteratorError4;

                      case 44:
                        return _context14.finish(41);

                      case 45:
                        return _context14.finish(38);

                      case 46:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee4, null, [[23, 34, 38, 46], [39,, 41, 45]]);
              })(s.url, t)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n2 = _step3.value;

                var _t5 = a.get(_n2);

                if (_t5) return {
                  cacheKey: _t5,
                  integrity: e.getIntegrityForCacheKey(_t5)
                };
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }, e.strategy));
        }

        return i;
      }(r.A);

      function c(e, t) {
        !function (e) {
          (0, n.b)().precache(e);
        }(e), function (e) {
          var t = (0, n.b)(),
              s = new i(t, e);
          (0, a.X)(s);
        }(t);
      }
    },
    86: function _(e, t, s) {
      "use strict";

      s.d(t, {
        b: function b() {
          return p;
        }
      }), s(524);
      var a = s(536),
          n = (s(120), s(125));

      function r(e, t) {
        var s = t();
        return e.waitUntil(s), s;
      }

      function i(e) {
        if (!e) throw new n.V("add-to-cache-list-unexpected-type", {
          entry: e
        });

        if ("string" == typeof e) {
          var _t7 = new URL(e, location.href);

          return {
            cacheKey: _t7.href,
            url: _t7.href
          };
        }

        var t = e.revision,
            s = e.url;
        if (!s) throw new n.V("add-to-cache-list-unexpected-type", {
          entry: e
        });

        if (!t) {
          var _e7 = new URL(s, location.href);

          return {
            cacheKey: _e7.href,
            url: _e7.href
          };
        }

        var a = new URL(s, location.href),
            r = new URL(s, location.href);
        return a.searchParams.set("__WB_REVISION__", t), {
          cacheKey: a.href,
          url: r.href
        };
      }

      s(913), s(977);

      var c = function c() {
        var _this5 = this;

        _classCallCheck(this, c);

        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = function _callee5(_ref8) {
          var e, t;
          return regeneratorRuntime.async(function _callee5$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  e = _ref8.request, t = _ref8.state;
                  t && (t.originalRequest = e);

                case 2:
                case "end":
                  return _context15.stop();
              }
            }
          });
        }, this.cachedResponseWillBeUsed = function _callee6(_ref9) {
          var e, t, s, _e8;

          return regeneratorRuntime.async(function _callee6$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  e = _ref9.event, t = _ref9.state, s = _ref9.cachedResponse;

                  if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                    _e8 = t.originalRequest.url;
                    s ? _this5.notUpdatedURLs.push(_e8) : _this5.updatedURLs.push(_e8);
                  }

                  return _context16.abrupt("return", s);

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          });
        };
      };

      var o = function o(_ref10) {
        var _this6 = this;

        var e = _ref10.precacheController;

        _classCallCheck(this, o);

        this.cacheKeyWillBeUsed = function _callee7(_ref11) {
          var e, t, s;
          return regeneratorRuntime.async(function _callee7$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  e = _ref11.request, t = _ref11.params;
                  s = (null == t ? void 0 : t.cacheKey) || _this6._precacheController.getCacheKeyForURL(e.url);
                  return _context17.abrupt("return", s ? new Request(s, {
                    headers: e.headers
                  }) : e);

                case 3:
                case "end":
                  return _context17.stop();
              }
            }
          });
        }, this._precacheController = e;
      };

      var h;
      s(119);
      var l = s(951);

      var u =
      /*#__PURE__*/
      function (_l$_) {
        _inherits(u, _l$_);

        function u() {
          var _this7;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, u);

          e.cacheName = a.x.getPrecacheName(e.cacheName), _this7 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e)), _this7._fallbackToNetwork = !1 !== e.fallbackToNetwork, _this7.plugins.push(u.copyRedirectedCacheableResponsesPlugin);
          return _this7;
        }

        _createClass(u, [{
          key: "_handle",
          value: function _handle(e, t) {
            return regeneratorRuntime.async(function _handle$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return regeneratorRuntime.awrap(t.cacheMatch(e));

                  case 2:
                    _context18.t0 = _context18.sent;

                    if (_context18.t0) {
                      _context18.next = 14;
                      break;
                    }

                    if (!(t.event && "install" === t.event.type)) {
                      _context18.next = 10;
                      break;
                    }

                    _context18.next = 7;
                    return regeneratorRuntime.awrap(this._handleInstall(e, t));

                  case 7:
                    _context18.t1 = _context18.sent;
                    _context18.next = 13;
                    break;

                  case 10:
                    _context18.next = 12;
                    return regeneratorRuntime.awrap(this._handleFetch(e, t));

                  case 12:
                    _context18.t1 = _context18.sent;

                  case 13:
                    _context18.t0 = _context18.t1;

                  case 14:
                    return _context18.abrupt("return", _context18.t0);

                  case 15:
                  case "end":
                    return _context18.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "_handleFetch",
          value: function _handleFetch(e, t) {
            var s, a, _n3, _r, _i5;

            return regeneratorRuntime.async(function _handleFetch$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    a = t.params || {};

                    if (this._fallbackToNetwork) {
                      _context19.next = 3;
                      break;
                    }

                    throw new n.V("missing-precache-entry", {
                      cacheName: this.cacheName,
                      url: e.url
                    });

                  case 3:
                    _n3 = a.integrity, _r = e.integrity, _i5 = !_r || _r === _n3;
                    _context19.next = 6;
                    return regeneratorRuntime.awrap(t.fetch(new Request(e, {
                      integrity: "no-cors" !== e.mode ? _r || _n3 : void 0
                    })));

                  case 6:
                    s = _context19.sent;
                    _context19.t0 = _n3 && _i5 && "no-cors" !== e.mode;

                    if (!_context19.t0) {
                      _context19.next = 12;
                      break;
                    }

                    this._useDefaultCacheabilityPluginIfNeeded();

                    _context19.next = 12;
                    return regeneratorRuntime.awrap(t.cachePut(e, s.clone()));

                  case 12:
                    return _context19.abrupt("return", s);

                  case 13:
                  case "end":
                    return _context19.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "_handleInstall",
          value: function _handleInstall(e, t) {
            var s;
            return regeneratorRuntime.async(function _handleInstall$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this._useDefaultCacheabilityPluginIfNeeded();

                    _context20.next = 3;
                    return regeneratorRuntime.awrap(t.fetch(e));

                  case 3:
                    s = _context20.sent;
                    _context20.next = 6;
                    return regeneratorRuntime.awrap(t.cachePut(e, s.clone()));

                  case 6:
                    if (_context20.sent) {
                      _context20.next = 8;
                      break;
                    }

                    throw new n.V("bad-precaching-response", {
                      url: e.url,
                      status: s.status
                    });

                  case 8:
                    return _context20.abrupt("return", s);

                  case 9:
                  case "end":
                    return _context20.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "_useDefaultCacheabilityPluginIfNeeded",
          value: function _useDefaultCacheabilityPluginIfNeeded() {
            var e = null,
                t = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = this.plugins.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _step5$value = _slicedToArray(_step5.value, 2),
                    _s3 = _step5$value[0],
                    _a = _step5$value[1];

                _a !== u.copyRedirectedCacheableResponsesPlugin && (_a === u.defaultPrecacheCacheabilityPlugin && (e = _s3), _a.cacheWillUpdate && t++);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            0 === t ? this.plugins.push(u.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1);
          }
        }]);

        return u;
      }(l._);

      u.defaultPrecacheCacheabilityPlugin = {
        cacheWillUpdate: function cacheWillUpdate(_ref12) {
          var e;
          return regeneratorRuntime.async(function cacheWillUpdate$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  e = _ref12.response;
                  return _context21.abrupt("return", !e || e.status >= 400 ? null : e);

                case 2:
                case "end":
                  return _context21.stop();
              }
            }
          });
        }
      }, u.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: function cacheWillUpdate(_ref13) {
          var e;
          return regeneratorRuntime.async(function cacheWillUpdate$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  e = _ref13.response;

                  if (!e.redirected) {
                    _context23.next = 7;
                    break;
                  }

                  _context23.next = 4;
                  return regeneratorRuntime.awrap(function _callee8(e, t) {
                    var s, a, r, i, c;
                    return regeneratorRuntime.async(function _callee8$(_context22) {
                      while (1) {
                        switch (_context22.prev = _context22.next) {
                          case 0:
                            s = null;

                            if (!(e.url && (s = new URL(e.url).origin), s !== self.location.origin)) {
                              _context22.next = 3;
                              break;
                            }

                            throw new n.V("cross-origin-copy-response", {
                              origin: s
                            });

                          case 3:
                            a = e.clone();
                            r = {
                              headers: new Headers(a.headers),
                              status: a.status,
                              statusText: a.statusText
                            };
                            i = t ? t(r) : r;

                            if (!function () {
                              if (void 0 === h) {
                                var _e9 = new Response("");

                                if ("body" in _e9) try {
                                  new Response(_e9.body), h = !0;
                                } catch (e) {
                                  h = !1;
                                }
                                h = !1;
                              }

                              return h;
                            }()) {
                              _context22.next = 10;
                              break;
                            }

                            _context22.t0 = a.body;
                            _context22.next = 13;
                            break;

                          case 10:
                            _context22.next = 12;
                            return regeneratorRuntime.awrap(a.blob());

                          case 12:
                            _context22.t0 = _context22.sent;

                          case 13:
                            c = _context22.t0;
                            return _context22.abrupt("return", new Response(c, i));

                          case 15:
                          case "end":
                            return _context22.stop();
                        }
                      }
                    });
                  }(e));

                case 4:
                  _context23.t0 = _context23.sent;
                  _context23.next = 8;
                  break;

                case 7:
                  _context23.t0 = e;

                case 8:
                  return _context23.abrupt("return", _context23.t0);

                case 9:
                case "end":
                  return _context23.stop();
              }
            }
          });
        }
      };

      var d =
      /*#__PURE__*/
      function () {
        function d() {
          var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref14.cacheName,
              _ref14$plugins = _ref14.plugins,
              t = _ref14$plugins === void 0 ? [] : _ref14$plugins,
              _ref14$fallbackToNetw = _ref14.fallbackToNetwork,
              s = _ref14$fallbackToNetw === void 0 ? !0 : _ref14$fallbackToNetw;

          _classCallCheck(this, d);

          this._urlsToCacheKeys = new Map(), this._urlsToCacheModes = new Map(), this._cacheKeysToIntegrities = new Map(), this._strategy = new u({
            cacheName: a.x.getPrecacheName(e),
            plugins: [].concat(_toConsumableArray(t), [new o({
              precacheController: this
            })]),
            fallbackToNetwork: s
          }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
        }

        _createClass(d, [{
          key: "precache",
          value: function precache(e) {
            this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
          }
        }, {
          key: "addToCacheList",
          value: function addToCacheList(e) {
            var t = [];
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = e[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var _s4 = _step6.value;
                "string" == typeof _s4 ? t.push(_s4) : _s4 && void 0 === _s4.revision && t.push(_s4.url);

                var _i6 = i(_s4),
                    _e10 = _i6.cacheKey,
                    _a2 = _i6.url,
                    _r2 = "string" != typeof _s4 && _s4.revision ? "reload" : "default";

                if (this._urlsToCacheKeys.has(_a2) && this._urlsToCacheKeys.get(_a2) !== _e10) throw new n.V("add-to-cache-list-conflicting-entries", {
                  firstEntry: this._urlsToCacheKeys.get(_a2),
                  secondEntry: _e10
                });

                if ("string" != typeof _s4 && _s4.integrity) {
                  if (this._cacheKeysToIntegrities.has(_e10) && this._cacheKeysToIntegrities.get(_e10) !== _s4.integrity) throw new n.V("add-to-cache-list-conflicting-integrities", {
                    url: _a2
                  });

                  this._cacheKeysToIntegrities.set(_e10, _s4.integrity);
                }

                if (this._urlsToCacheKeys.set(_a2, _e10), this._urlsToCacheModes.set(_a2, _r2), t.length > 0) {
                  var _e11 = "Workbox is precaching URLs without revision info: ".concat(t.join(", "), "\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache");

                  console.warn(_e11);
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }
        }, {
          key: "install",
          value: function install(e) {
            var _this8 = this;

            return r(e, function _callee9() {
              var t, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _step7$value, _t8, _s5, _a3, _n4, _r3, s, a;

              return regeneratorRuntime.async(function _callee9$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      t = new c();

                      _this8.strategy.plugins.push(t);

                      _iteratorNormalCompletion7 = true;
                      _didIteratorError7 = false;
                      _iteratorError7 = undefined;
                      _context24.prev = 5;
                      _iterator7 = _this8._urlsToCacheKeys[Symbol.iterator]();

                    case 7:
                      if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                        _context24.next = 15;
                        break;
                      }

                      _step7$value = _slicedToArray(_step7.value, 2), _t8 = _step7$value[0], _s5 = _step7$value[1];
                      _a3 = _this8._cacheKeysToIntegrities.get(_s5), _n4 = _this8._urlsToCacheModes.get(_t8), _r3 = new Request(_t8, {
                        integrity: _a3,
                        cache: _n4,
                        credentials: "same-origin"
                      });
                      _context24.next = 12;
                      return regeneratorRuntime.awrap(Promise.all(_this8.strategy.handleAll({
                        params: {
                          cacheKey: _s5
                        },
                        request: _r3,
                        event: e
                      })));

                    case 12:
                      _iteratorNormalCompletion7 = true;
                      _context24.next = 7;
                      break;

                    case 15:
                      _context24.next = 21;
                      break;

                    case 17:
                      _context24.prev = 17;
                      _context24.t0 = _context24["catch"](5);
                      _didIteratorError7 = true;
                      _iteratorError7 = _context24.t0;

                    case 21:
                      _context24.prev = 21;
                      _context24.prev = 22;

                      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                        _iterator7["return"]();
                      }

                    case 24:
                      _context24.prev = 24;

                      if (!_didIteratorError7) {
                        _context24.next = 27;
                        break;
                      }

                      throw _iteratorError7;

                    case 27:
                      return _context24.finish(24);

                    case 28:
                      return _context24.finish(21);

                    case 29:
                      s = t.updatedURLs, a = t.notUpdatedURLs;
                      return _context24.abrupt("return", {
                        updatedURLs: s,
                        notUpdatedURLs: a
                      });

                    case 31:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, null, null, [[5, 17, 21, 29], [22,, 24, 28]]);
            });
          }
        }, {
          key: "activate",
          value: function activate(e) {
            var _this9 = this;

            return r(e, function _callee10() {
              var e, t, s, a, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _n5;

              return regeneratorRuntime.async(function _callee10$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return regeneratorRuntime.awrap(self.caches.open(_this9.strategy.cacheName));

                    case 2:
                      e = _context25.sent;
                      _context25.next = 5;
                      return regeneratorRuntime.awrap(e.keys());

                    case 5:
                      t = _context25.sent;
                      s = new Set(_this9._urlsToCacheKeys.values());
                      a = [];
                      _iteratorNormalCompletion8 = true;
                      _didIteratorError8 = false;
                      _iteratorError8 = undefined;
                      _context25.prev = 11;
                      _iterator8 = t[Symbol.iterator]();

                    case 13:
                      if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                        _context25.next = 23;
                        break;
                      }

                      _n5 = _step8.value;
                      _context25.t0 = s.has(_n5.url);

                      if (_context25.t0) {
                        _context25.next = 20;
                        break;
                      }

                      _context25.next = 19;
                      return regeneratorRuntime.awrap(e["delete"](_n5));

                    case 19:
                      a.push(_n5.url);

                    case 20:
                      _iteratorNormalCompletion8 = true;
                      _context25.next = 13;
                      break;

                    case 23:
                      _context25.next = 29;
                      break;

                    case 25:
                      _context25.prev = 25;
                      _context25.t1 = _context25["catch"](11);
                      _didIteratorError8 = true;
                      _iteratorError8 = _context25.t1;

                    case 29:
                      _context25.prev = 29;
                      _context25.prev = 30;

                      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                        _iterator8["return"]();
                      }

                    case 32:
                      _context25.prev = 32;

                      if (!_didIteratorError8) {
                        _context25.next = 35;
                        break;
                      }

                      throw _iteratorError8;

                    case 35:
                      return _context25.finish(32);

                    case 36:
                      return _context25.finish(29);

                    case 37:
                      return _context25.abrupt("return", {
                        deletedURLs: a
                      });

                    case 38:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, null, null, [[11, 25, 29, 37], [30,, 32, 36]]);
            });
          }
        }, {
          key: "getURLsToCacheKeys",
          value: function getURLsToCacheKeys() {
            return this._urlsToCacheKeys;
          }
        }, {
          key: "getCachedURLs",
          value: function getCachedURLs() {
            return _toConsumableArray(this._urlsToCacheKeys.keys());
          }
        }, {
          key: "getCacheKeyForURL",
          value: function getCacheKeyForURL(e) {
            var t = new URL(e, location.href);
            return this._urlsToCacheKeys.get(t.href);
          }
        }, {
          key: "getIntegrityForCacheKey",
          value: function getIntegrityForCacheKey(e) {
            return this._cacheKeysToIntegrities.get(e);
          }
        }, {
          key: "matchPrecache",
          value: function matchPrecache(e) {
            var t, s;
            return regeneratorRuntime.async(function matchPrecache$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);

                    if (!s) {
                      _context26.next = 6;
                      break;
                    }

                    _context26.next = 4;
                    return regeneratorRuntime.awrap(self.caches.open(this.strategy.cacheName));

                  case 4:
                    _context26.t0 = s;
                    return _context26.abrupt("return", _context26.sent.match(_context26.t0));

                  case 6:
                  case "end":
                    return _context26.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "createHandlerBoundToURL",
          value: function createHandlerBoundToURL(e) {
            var _this10 = this;

            var t = this.getCacheKeyForURL(e);
            if (!t) throw new n.V("non-precached-url", {
              url: e
            });
            return function (s) {
              return s.request = new Request(e), s.params = Object.assign({
                cacheKey: t
              }, s.params), _this10.strategy.handle(s);
            };
          }
        }, {
          key: "strategy",
          get: function get() {
            return this._strategy;
          }
        }]);

        return d;
      }();

      var f;

      var p = function p() {
        return f || (f = new d()), f;
      };
    },
    144: function (_6) {
      function _() {
        return _6.apply(this, arguments);
      }

      _.toString = function () {
        return _6.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:recipes:6.5.4"] && _();
      } catch (e) {}
    }),
    989: function _(e, t, s) {
      "use strict";

      s.d(t, {
        t: function t() {
          return n;
        }
      }), s(524), s(120);
      var a = s(188);
      s(80);

      var n =
      /*#__PURE__*/
      function (_a$A) {
        _inherits(n, _a$A);

        function n(e, t, s) {
          _classCallCheck(this, n);

          return _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, function (_ref15) {
            var t = _ref15.url;
            var s = e.exec(t.href);
            if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1);
          }, t, s));
        }

        return n;
      }(a.A);
    },
    188: function _(e, t, s) {
      "use strict";

      s.d(t, {
        A: function A() {
          return r;
        }
      }), s(524);
      var a = s(505),
          n = s(179);
      s(80);

      var r =
      /*#__PURE__*/
      function () {
        function r(e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : a.g;

          _classCallCheck(this, r);

          this.handler = (0, n.M)(t), this.match = e, this.method = s;
        }

        _createClass(r, [{
          key: "setCatchHandler",
          value: function setCatchHandler(e) {
            this.catchHandler = (0, n.M)(e);
          }
        }]);

        return r;
      }();
    },
    491: function _(e, t, s) {
      "use strict";

      s.d(t, {
        F: function F() {
          return i;
        }
      }), s(524), s(119);
      var a = s(505),
          n = (s(120), s(179)),
          r = s(125);
      s(80);

      var i =
      /*#__PURE__*/
      function () {
        function i() {
          _classCallCheck(this, i);

          this._routes = new Map(), this._defaultHandlerMap = new Map();
        }

        _createClass(i, [{
          key: "addFetchListener",
          value: function addFetchListener() {
            var _this11 = this;

            self.addEventListener("fetch", function (e) {
              var t = e.request,
                  s = _this11.handleRequest({
                request: t,
                event: e
              });

              s && e.respondWith(s);
            });
          }
        }, {
          key: "addCacheListener",
          value: function addCacheListener() {
            var _this12 = this;

            self.addEventListener("message", function (e) {
              if (e.data && "CACHE_URLS" === e.data.type) {
                var _t9 = e.data.payload,
                    _s6 = Promise.all(_t9.urlsToCache.map(function (t) {
                  "string" == typeof t && (t = [t]);

                  var s = _construct(Request, _toConsumableArray(t));

                  return _this12.handleRequest({
                    request: s,
                    event: e
                  });
                }));

                e.waitUntil(_s6), e.ports && e.ports[0] && _s6.then(function () {
                  return e.ports[0].postMessage(!0);
                });
              }
            });
          }
        }, {
          key: "handleRequest",
          value: function handleRequest(_ref16) {
            var _this13 = this;

            var e = _ref16.request,
                t = _ref16.event;
            var s = new URL(e.url, location.href);
            if (!s.protocol.startsWith("http")) return;

            var a = s.origin === location.origin,
                _this$findMatchingRou = this.findMatchingRoute({
              event: t,
              request: e,
              sameOrigin: a,
              url: s
            }),
                n = _this$findMatchingRou.params,
                r = _this$findMatchingRou.route;

            var i = r && r.handler;
            var c = e.method;
            if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)), !i) return;
            var o;

            try {
              o = i.handle({
                url: s,
                request: e,
                event: t,
                params: n
              });
            } catch (e) {
              o = Promise.reject(e);
            }

            var h = r && r.catchHandler;
            return o instanceof Promise && (this._catchHandler || h) && (o = o["catch"](function _callee11(a) {
              return regeneratorRuntime.async(function _callee11$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      if (!h) {
                        _context27.next = 10;
                        break;
                      }

                      _context27.prev = 1;
                      _context27.next = 4;
                      return regeneratorRuntime.awrap(h.handle({
                        url: s,
                        request: e,
                        event: t,
                        params: n
                      }));

                    case 4:
                      return _context27.abrupt("return", _context27.sent);

                    case 7:
                      _context27.prev = 7;
                      _context27.t0 = _context27["catch"](1);
                      _context27.t0 instanceof Error && (a = _context27.t0);

                    case 10:
                      if (!_this13._catchHandler) {
                        _context27.next = 12;
                        break;
                      }

                      return _context27.abrupt("return", _this13._catchHandler.handle({
                        url: s,
                        request: e,
                        event: t
                      }));

                    case 12:
                      throw a;

                    case 13:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, null, null, [[1, 7]]);
            })), o;
          }
        }, {
          key: "findMatchingRoute",
          value: function findMatchingRoute(_ref17) {
            var e = _ref17.url,
                t = _ref17.sameOrigin,
                s = _ref17.request,
                a = _ref17.event;
            var n = this._routes.get(s.method) || [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = n[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var _r4 = _step9.value;

                var _n6 = void 0;

                var _i7 = _r4.match({
                  url: e,
                  sameOrigin: t,
                  request: s,
                  event: a
                });

                if (_i7) return _n6 = _i7, (Array.isArray(_n6) && 0 === _n6.length || _i7.constructor === Object && 0 === Object.keys(_i7).length || "boolean" == typeof _i7) && (_n6 = void 0), {
                  route: _r4,
                  params: _n6
                };
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                  _iterator9["return"]();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }

            return {};
          }
        }, {
          key: "setDefaultHandler",
          value: function setDefaultHandler(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a.g;

            this._defaultHandlerMap.set(t, (0, n.M)(e));
          }
        }, {
          key: "setCatchHandler",
          value: function setCatchHandler(e) {
            this._catchHandler = (0, n.M)(e);
          }
        }, {
          key: "registerRoute",
          value: function registerRoute(e) {
            this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
          }
        }, {
          key: "unregisterRoute",
          value: function unregisterRoute(e) {
            if (!this._routes.has(e.method)) throw new r.V("unregister-route-but-not-found-with-method", {
              method: e.method
            });

            var t = this._routes.get(e.method).indexOf(e);

            if (!(t > -1)) throw new r.V("unregister-route-route-not-registered");

            this._routes.get(e.method).splice(t, 1);
          }
        }, {
          key: "routes",
          get: function get() {
            return this._routes;
          }
        }]);

        return i;
      }();
    },
    80: function (_7) {
      function _() {
        return _7.apply(this, arguments);
      }

      _.toString = function () {
        return _7.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:routing:6.5.4"] && _();
      } catch (e) {}
    }),
    917: function _(e, t, s) {
      "use strict";

      s.d(t, {
        X: function X() {
          return c;
        }
      }), s(120);
      var a = s(125),
          n = s(188),
          r = s(989),
          i = s(486);

      function c(e, t, s) {
        var c;

        if ("string" == typeof e) {
          var _a4 = new URL(e, location.href),
              _r5 = function _r5(_ref18) {
            var e = _ref18.url;
            return e.href === _a4.href;
          };

          c = new n.A(_r5, t, s);
        } else if (e instanceof RegExp) c = new r.t(e, t, s);else if ("function" == typeof e) c = new n.A(e, t, s);else {
          if (!(e instanceof n.A)) throw new a.V("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
          c = e;
        }

        return (0, i.u)().registerRoute(c), c;
      }

      s(80);
    },
    226: function _(e, t, s) {
      "use strict";

      s.d(t, {
        H: function H() {
          return n;
        }
      });
      var a = s(486);

      function n(e) {
        (0, a.u)().setCatchHandler(e);
      }

      s(80);
    },
    505: function _(e, t, s) {
      "use strict";

      s.d(t, {
        g: function g() {
          return a;
        }
      }), s(80);
      var a = "GET";
    },
    486: function _(e, t, s) {
      "use strict";

      s.d(t, {
        u: function u() {
          return r;
        }
      });
      var a = s(491);
      var n;
      s(80);

      var r = function r() {
        return n || (n = new a.F(), n.addFetchListener(), n.addCacheListener()), n;
      };
    },
    179: function _(e, t, s) {
      "use strict";

      s.d(t, {
        M: function M() {
          return a;
        }
      }), s(524), s(80);

      var a = function a(e) {
        return e && "object" == _typeof(e) ? e : {
          handle: e
        };
      };
    },
    868: function _(e, t, s) {
      "use strict";

      s.d(t, {
        b: function b() {
          return r;
        }
      }), s(524), s(120);
      var a = s(125),
          n = s(951);
      s(94), s(873);

      var r =
      /*#__PURE__*/
      function (_n$_) {
        _inherits(r, _n$_);

        function r() {
          _classCallCheck(this, r);

          return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
        }

        _createClass(r, [{
          key: "_handle",
          value: function _handle(e, t) {
            var s, n;
            return regeneratorRuntime.async(function _handle$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return regeneratorRuntime.awrap(t.cacheMatch(e));

                  case 2:
                    n = _context28.sent;

                    if (!n) {
                      _context28.next = 7;
                      break;
                    }

                    ;
                    _context28.next = 16;
                    break;

                  case 7:
                    _context28.prev = 7;
                    _context28.next = 10;
                    return regeneratorRuntime.awrap(t.fetchAndCachePut(e));

                  case 10:
                    n = _context28.sent;
                    _context28.next = 16;
                    break;

                  case 13:
                    _context28.prev = 13;
                    _context28.t0 = _context28["catch"](7);
                    _context28.t0 instanceof Error && (s = _context28.t0);

                  case 16:
                    if (n) {
                      _context28.next = 18;
                      break;
                    }

                    throw new a.V("no-response", {
                      url: e.url,
                      error: s
                    });

                  case 18:
                    return _context28.abrupt("return", n);

                  case 19:
                  case "end":
                    return _context28.stop();
                }
              }
            }, null, null, [[7, 13]]);
          }
        }]);

        return r;
      }(n._);
    },
    495: function _(e, t, s) {
      "use strict";

      s.d(t, {
        n: function n() {
          return i;
        }
      }), s(524), s(120);
      var a = s(125),
          n = s(118),
          r = s(951);
      s(94), s(873);

      var i =
      /*#__PURE__*/
      function (_r$_) {
        _inherits(i, _r$_);

        function i() {
          var _this14;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, i);

          _this14 = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this14.plugins.some(function (e) {
            return "cacheWillUpdate" in e;
          }) || _this14.plugins.unshift(n.S), _this14._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
          return _this14;
        }

        _createClass(i, [{
          key: "_handle",
          value: function _handle(e, t) {
            var s, n, r, _this$_getTimeoutProm, _a5, _i8, i, c;

            return regeneratorRuntime.async(function _handle$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    s = [], n = [];

                    if (this._networkTimeoutSeconds) {
                      _this$_getTimeoutProm = this._getTimeoutPromise({
                        request: e,
                        logs: s,
                        handler: t
                      }), _a5 = _this$_getTimeoutProm.id, _i8 = _this$_getTimeoutProm.promise;
                      r = _a5, n.push(_i8);
                    }

                    i = this._getNetworkPromise({
                      timeoutId: r,
                      request: e,
                      logs: s,
                      handler: t
                    });
                    n.push(i);
                    _context30.next = 6;
                    return regeneratorRuntime.awrap(t.waitUntil(function _callee12() {
                      return regeneratorRuntime.async(function _callee12$(_context29) {
                        while (1) {
                          switch (_context29.prev = _context29.next) {
                            case 0:
                              _context29.next = 2;
                              return regeneratorRuntime.awrap(t.waitUntil(Promise.race(n)));

                            case 2:
                              _context29.t0 = _context29.sent;

                              if (_context29.t0) {
                                _context29.next = 7;
                                break;
                              }

                              _context29.next = 6;
                              return regeneratorRuntime.awrap(i);

                            case 6:
                              _context29.t0 = _context29.sent;

                            case 7:
                              return _context29.abrupt("return", _context29.t0);

                            case 8:
                            case "end":
                              return _context29.stop();
                          }
                        }
                      });
                    }()));

                  case 6:
                    c = _context30.sent;

                    if (c) {
                      _context30.next = 9;
                      break;
                    }

                    throw new a.V("no-response", {
                      url: e.url
                    });

                  case 9:
                    return _context30.abrupt("return", c);

                  case 10:
                  case "end":
                    return _context30.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "_getTimeoutPromise",
          value: function _getTimeoutPromise(_ref19) {
            var _this15 = this;

            var e = _ref19.request,
                t = _ref19.logs,
                s = _ref19.handler;
            var a;
            return {
              promise: new Promise(function (t) {
                a = setTimeout(function _callee13() {
                  return regeneratorRuntime.async(function _callee13$(_context31) {
                    while (1) {
                      switch (_context31.prev = _context31.next) {
                        case 0:
                          _context31.t0 = t;
                          _context31.next = 3;
                          return regeneratorRuntime.awrap(s.cacheMatch(e));

                        case 3:
                          _context31.t1 = _context31.sent;
                          (0, _context31.t0)(_context31.t1);

                        case 5:
                        case "end":
                          return _context31.stop();
                      }
                    }
                  });
                }, 1e3 * _this15._networkTimeoutSeconds);
              }),
              id: a
            };
          }
        }, {
          key: "_getNetworkPromise",
          value: function _getNetworkPromise(_ref20) {
            var e, t, s, a, n, r;
            return regeneratorRuntime.async(function _getNetworkPromise$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    e = _ref20.timeoutId, t = _ref20.request, s = _ref20.logs, a = _ref20.handler;
                    _context32.prev = 1;
                    _context32.next = 4;
                    return regeneratorRuntime.awrap(a.fetchAndCachePut(t));

                  case 4:
                    r = _context32.sent;
                    _context32.next = 10;
                    break;

                  case 7:
                    _context32.prev = 7;
                    _context32.t0 = _context32["catch"](1);
                    _context32.t0 instanceof Error && (n = _context32.t0);

                  case 10:
                    e && clearTimeout(e);
                    _context32.t1 = !n && r;

                    if (_context32.t1) {
                      _context32.next = 16;
                      break;
                    }

                    _context32.next = 15;
                    return regeneratorRuntime.awrap(a.cacheMatch(t));

                  case 15:
                    r = _context32.sent;

                  case 16:
                    return _context32.abrupt("return", r);

                  case 17:
                  case "end":
                    return _context32.stop();
                }
              }
            }, null, null, [[1, 7]]);
          }
        }]);

        return i;
      }(r._);
    },
    757: function _(e, t, s) {
      "use strict";

      s.d(t, {
        j: function j() {
          return i;
        }
      }), s(524), s(120);
      var a = s(125),
          n = s(118),
          r = s(951);
      s(94), s(873);

      var i =
      /*#__PURE__*/
      function (_r$_2) {
        _inherits(i, _r$_2);

        function i() {
          var _this16;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, i);

          _this16 = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this16.plugins.some(function (e) {
            return "cacheWillUpdate" in e;
          }) || _this16.plugins.unshift(n.S);
          return _this16;
        }

        _createClass(i, [{
          key: "_handle",
          value: function _handle(e, t) {
            var s, n, r;
            return regeneratorRuntime.async(function _handle$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    s = t.fetchAndCachePut(e)["catch"](function () {});
                    t.waitUntil(s);
                    _context33.next = 4;
                    return regeneratorRuntime.awrap(t.cacheMatch(e));

                  case 4:
                    r = _context33.sent;

                    if (!r) {
                      _context33.next = 9;
                      break;
                    }

                    ;
                    _context33.next = 18;
                    break;

                  case 9:
                    _context33.prev = 9;
                    _context33.next = 12;
                    return regeneratorRuntime.awrap(s);

                  case 12:
                    r = _context33.sent;
                    _context33.next = 18;
                    break;

                  case 15:
                    _context33.prev = 15;
                    _context33.t0 = _context33["catch"](9);
                    _context33.t0 instanceof Error && (n = _context33.t0);

                  case 18:
                    if (r) {
                      _context33.next = 20;
                      break;
                    }

                    throw new a.V("no-response", {
                      url: e.url,
                      error: n
                    });

                  case 20:
                    return _context33.abrupt("return", r);

                  case 21:
                  case "end":
                    return _context33.stop();
                }
              }
            }, null, null, [[9, 15]]);
          }
        }]);

        return i;
      }(r._);
    },
    951: function _(e, t, s) {
      "use strict";

      s.d(t, {
        _: function _() {
          return i;
        }
      });
      var a = s(536),
          n = s(125),
          r = (s(120), s(119), s(358));
      s(873);

      var i =
      /*#__PURE__*/
      function () {
        function i() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, i);

          this.cacheName = a.x.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
        }

        _createClass(i, [{
          key: "handle",
          value: function handle(e) {
            var _this$handleAll = this.handleAll(e),
                _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
                t = _this$handleAll2[0];

            return t;
          }
        }, {
          key: "handleAll",
          value: function handleAll(e) {
            e instanceof FetchEvent && (e = {
              event: e,
              request: e.request
            });

            var t = e.event,
                s = "string" == typeof e.request ? new Request(e.request) : e.request,
                a = "params" in e ? e.params : void 0,
                n = new r.G(this, {
              event: t,
              request: s,
              params: a
            }),
                i = this._getResponse(n, s, t);

            return [i, this._awaitComplete(i, n, s, t)];
          }
        }, {
          key: "_getResponse",
          value: function _getResponse(e, t, s) {
            var a, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _r6, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _n7;

            return regeneratorRuntime.async(function _getResponse$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return regeneratorRuntime.awrap(e.runCallbacks("handlerWillStart", {
                      event: s,
                      request: t
                    }));

                  case 2:
                    _context34.prev = 2;
                    _context34.next = 5;
                    return regeneratorRuntime.awrap(this._handle(t, e));

                  case 5:
                    a = _context34.sent;

                    if (!(!a || "error" === a.type)) {
                      _context34.next = 8;
                      break;
                    }

                    throw new n.V("no-response", {
                      url: t.url
                    });

                  case 8:
                    _context34.next = 44;
                    break;

                  case 10:
                    _context34.prev = 10;
                    _context34.t0 = _context34["catch"](2);

                    if (!(_context34.t0 instanceof Error)) {
                      _context34.next = 42;
                      break;
                    }

                    _iteratorNormalCompletion10 = true;
                    _didIteratorError10 = false;
                    _iteratorError10 = undefined;
                    _context34.prev = 16;
                    _iterator10 = e.iterateCallbacks("handlerDidError")[Symbol.iterator]();

                  case 18:
                    if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                      _context34.next = 28;
                      break;
                    }

                    _r6 = _step10.value;
                    _context34.next = 22;
                    return regeneratorRuntime.awrap(_r6({
                      error: _context34.t0,
                      event: s,
                      request: t
                    }));

                  case 22:
                    a = _context34.sent;

                    if (!a) {
                      _context34.next = 25;
                      break;
                    }

                    return _context34.abrupt("break", 28);

                  case 25:
                    _iteratorNormalCompletion10 = true;
                    _context34.next = 18;
                    break;

                  case 28:
                    _context34.next = 34;
                    break;

                  case 30:
                    _context34.prev = 30;
                    _context34.t1 = _context34["catch"](16);
                    _didIteratorError10 = true;
                    _iteratorError10 = _context34.t1;

                  case 34:
                    _context34.prev = 34;
                    _context34.prev = 35;

                    if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                      _iterator10["return"]();
                    }

                  case 37:
                    _context34.prev = 37;

                    if (!_didIteratorError10) {
                      _context34.next = 40;
                      break;
                    }

                    throw _iteratorError10;

                  case 40:
                    return _context34.finish(37);

                  case 41:
                    return _context34.finish(34);

                  case 42:
                    if (a) {
                      _context34.next = 44;
                      break;
                    }

                    throw _context34.t0;

                  case 44:
                    _iteratorNormalCompletion11 = true;
                    _didIteratorError11 = false;
                    _iteratorError11 = undefined;
                    _context34.prev = 47;
                    _iterator11 = e.iterateCallbacks("handlerWillRespond")[Symbol.iterator]();

                  case 49:
                    if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
                      _context34.next = 57;
                      break;
                    }

                    _n7 = _step11.value;
                    _context34.next = 53;
                    return regeneratorRuntime.awrap(_n7({
                      event: s,
                      request: t,
                      response: a
                    }));

                  case 53:
                    a = _context34.sent;

                  case 54:
                    _iteratorNormalCompletion11 = true;
                    _context34.next = 49;
                    break;

                  case 57:
                    _context34.next = 63;
                    break;

                  case 59:
                    _context34.prev = 59;
                    _context34.t2 = _context34["catch"](47);
                    _didIteratorError11 = true;
                    _iteratorError11 = _context34.t2;

                  case 63:
                    _context34.prev = 63;
                    _context34.prev = 64;

                    if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                      _iterator11["return"]();
                    }

                  case 66:
                    _context34.prev = 66;

                    if (!_didIteratorError11) {
                      _context34.next = 69;
                      break;
                    }

                    throw _iteratorError11;

                  case 69:
                    return _context34.finish(66);

                  case 70:
                    return _context34.finish(63);

                  case 71:
                    return _context34.abrupt("return", a);

                  case 72:
                  case "end":
                    return _context34.stop();
                }
              }
            }, null, this, [[2, 10], [16, 30, 34, 42], [35,, 37, 41], [47, 59, 63, 71], [64,, 66, 70]]);
          }
        }, {
          key: "_awaitComplete",
          value: function _awaitComplete(e, t, s, a) {
            var n, r;
            return regeneratorRuntime.async(function _awaitComplete$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.prev = 0;
                    _context35.next = 3;
                    return regeneratorRuntime.awrap(e);

                  case 3:
                    n = _context35.sent;
                    _context35.next = 8;
                    break;

                  case 6:
                    _context35.prev = 6;
                    _context35.t0 = _context35["catch"](0);

                  case 8:
                    _context35.prev = 8;
                    _context35.next = 11;
                    return regeneratorRuntime.awrap(t.runCallbacks("handlerDidRespond", {
                      event: a,
                      request: s,
                      response: n
                    }));

                  case 11:
                    _context35.next = 13;
                    return regeneratorRuntime.awrap(t.doneWaiting());

                  case 13:
                    _context35.next = 18;
                    break;

                  case 15:
                    _context35.prev = 15;
                    _context35.t1 = _context35["catch"](8);
                    _context35.t1 instanceof Error && (r = _context35.t1);

                  case 18:
                    _context35.next = 20;
                    return regeneratorRuntime.awrap(t.runCallbacks("handlerDidComplete", {
                      event: a,
                      request: s,
                      response: n,
                      error: r
                    }));

                  case 20:
                    t.destroy();

                    if (!r) {
                      _context35.next = 23;
                      break;
                    }

                    throw r;

                  case 23:
                  case "end":
                    return _context35.stop();
                }
              }
            }, null, null, [[0, 6], [8, 15]]);
          }
        }]);

        return i;
      }();
    },
    358: function _(e, t, s) {
      "use strict";

      function a(e, t) {
        var s = new URL(e);
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = t[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var _e12 = _step12.value;
            s.searchParams["delete"](_e12);
          }
        } catch (err) {
          _didIteratorError12 = true;
          _iteratorError12 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
              _iterator12["return"]();
            }
          } finally {
            if (_didIteratorError12) {
              throw _iteratorError12;
            }
          }
        }

        return s.href;
      }

      s.d(t, {
        G: function G() {
          return l;
        }
      }), s(524), s(913);

      var n = function n() {
        var _this17 = this;

        _classCallCheck(this, n);

        this.promise = new Promise(function (e, t) {
          _this17.resolve = e, _this17.reject = t;
        });
      };

      s(120);
      var r = s(565),
          i = s(119),
          c = s(902),
          o = s(125);

      function h(e) {
        return "string" == typeof e ? new Request(e) : e;
      }

      s(873);

      var l =
      /*#__PURE__*/
      function () {
        function l(e, t) {
          _classCallCheck(this, l);

          this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new n(), this._extendLifetimePromises = [], this._plugins = _toConsumableArray(e.plugins), this._pluginStateMap = new Map();
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this._plugins[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _e13 = _step13.value;

              this._pluginStateMap.set(_e13, {});
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          this.event.waitUntil(this._handlerDeferred.promise);
        }

        _createClass(l, [{
          key: "fetch",
          value: function (_fetch) {
            function fetch(_x) {
              return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
              return _fetch.toString();
            };

            return fetch;
          }(function _callee14(e) {
            var t, s, _e14, a, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _e15, n, _e16, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _s7;

            return regeneratorRuntime.async(function _callee14$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    t = this.event;
                    s = h(e);

                    if (!("navigate" === s.mode && t instanceof FetchEvent && t.preloadResponse)) {
                      _context36.next = 8;
                      break;
                    }

                    _context36.next = 5;
                    return regeneratorRuntime.awrap(t.preloadResponse);

                  case 5:
                    _e14 = _context36.sent;

                    if (!_e14) {
                      _context36.next = 8;
                      break;
                    }

                    return _context36.abrupt("return", _e14);

                  case 8:
                    a = this.hasCallback("fetchDidFail") ? s.clone() : null;
                    _context36.prev = 9;
                    _iteratorNormalCompletion14 = true;
                    _didIteratorError14 = false;
                    _iteratorError14 = undefined;
                    _context36.prev = 13;
                    _iterator14 = this.iterateCallbacks("requestWillFetch")[Symbol.iterator]();

                  case 15:
                    if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                      _context36.next = 23;
                      break;
                    }

                    _e15 = _step14.value;
                    _context36.next = 19;
                    return regeneratorRuntime.awrap(_e15({
                      request: s.clone(),
                      event: t
                    }));

                  case 19:
                    s = _context36.sent;

                  case 20:
                    _iteratorNormalCompletion14 = true;
                    _context36.next = 15;
                    break;

                  case 23:
                    _context36.next = 29;
                    break;

                  case 25:
                    _context36.prev = 25;
                    _context36.t0 = _context36["catch"](13);
                    _didIteratorError14 = true;
                    _iteratorError14 = _context36.t0;

                  case 29:
                    _context36.prev = 29;
                    _context36.prev = 30;

                    if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                      _iterator14["return"]();
                    }

                  case 32:
                    _context36.prev = 32;

                    if (!_didIteratorError14) {
                      _context36.next = 35;
                      break;
                    }

                    throw _iteratorError14;

                  case 35:
                    return _context36.finish(32);

                  case 36:
                    return _context36.finish(29);

                  case 37:
                    _context36.next = 43;
                    break;

                  case 39:
                    _context36.prev = 39;
                    _context36.t1 = _context36["catch"](9);

                    if (!(_context36.t1 instanceof Error)) {
                      _context36.next = 43;
                      break;
                    }

                    throw new o.V("plugin-error-request-will-fetch", {
                      thrownErrorMessage: _context36.t1.message
                    });

                  case 43:
                    n = s.clone();
                    _context36.prev = 44;
                    _context36.next = 47;
                    return regeneratorRuntime.awrap(fetch(s, "navigate" === s.mode ? void 0 : this._strategy.fetchOptions));

                  case 47:
                    _e16 = _context36.sent;
                    _iteratorNormalCompletion15 = true;
                    _didIteratorError15 = false;
                    _iteratorError15 = undefined;
                    _context36.prev = 51;
                    _iterator15 = this.iterateCallbacks("fetchDidSucceed")[Symbol.iterator]();

                  case 53:
                    if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
                      _context36.next = 61;
                      break;
                    }

                    _s7 = _step15.value;
                    _context36.next = 57;
                    return regeneratorRuntime.awrap(_s7({
                      event: t,
                      request: n,
                      response: _e16
                    }));

                  case 57:
                    _e16 = _context36.sent;

                  case 58:
                    _iteratorNormalCompletion15 = true;
                    _context36.next = 53;
                    break;

                  case 61:
                    _context36.next = 67;
                    break;

                  case 63:
                    _context36.prev = 63;
                    _context36.t2 = _context36["catch"](51);
                    _didIteratorError15 = true;
                    _iteratorError15 = _context36.t2;

                  case 67:
                    _context36.prev = 67;
                    _context36.prev = 68;

                    if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                      _iterator15["return"]();
                    }

                  case 70:
                    _context36.prev = 70;

                    if (!_didIteratorError15) {
                      _context36.next = 73;
                      break;
                    }

                    throw _iteratorError15;

                  case 73:
                    return _context36.finish(70);

                  case 74:
                    return _context36.finish(67);

                  case 75:
                    return _context36.abrupt("return", _e16);

                  case 78:
                    _context36.prev = 78;
                    _context36.t3 = _context36["catch"](44);
                    _context36.t4 = a;

                    if (!_context36.t4) {
                      _context36.next = 84;
                      break;
                    }

                    _context36.next = 84;
                    return regeneratorRuntime.awrap(this.runCallbacks("fetchDidFail", {
                      error: _context36.t3,
                      event: t,
                      originalRequest: a.clone(),
                      request: n.clone()
                    }));

                  case 84:
                    throw _context36.t3;

                  case 85:
                  case "end":
                    return _context36.stop();
                }
              }
            }, null, this, [[9, 39], [13, 25, 29, 37], [30,, 32, 36], [44, 78], [51, 63, 67, 75], [68,, 70, 74]]);
          })
        }, {
          key: "fetchAndCachePut",
          value: function fetchAndCachePut(e) {
            var t, s;
            return regeneratorRuntime.async(function fetchAndCachePut$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return regeneratorRuntime.awrap(this.fetch(e));

                  case 2:
                    t = _context37.sent;
                    s = t.clone();
                    return _context37.abrupt("return", (this.waitUntil(this.cachePut(e, s)), t));

                  case 5:
                  case "end":
                    return _context37.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "cacheMatch",
          value: function cacheMatch(e) {
            var t, s, _this$_strategy, a, n, r, i, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _e17;

            return regeneratorRuntime.async(function cacheMatch$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    t = h(e);
                    _this$_strategy = this._strategy;
                    a = _this$_strategy.cacheName;
                    n = _this$_strategy.matchOptions;
                    _context38.next = 6;
                    return regeneratorRuntime.awrap(this.getCacheKey(t, "read"));

                  case 6:
                    r = _context38.sent;
                    i = Object.assign(Object.assign({}, n), {
                      cacheName: a
                    });
                    _context38.next = 10;
                    return regeneratorRuntime.awrap(caches.match(r, i));

                  case 10:
                    s = _context38.sent;
                    _iteratorNormalCompletion16 = true;
                    _didIteratorError16 = false;
                    _iteratorError16 = undefined;
                    _context38.prev = 14;
                    _iterator16 = this.iterateCallbacks("cachedResponseWillBeUsed")[Symbol.iterator]();

                  case 16:
                    if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
                      _context38.next = 27;
                      break;
                    }

                    _e17 = _step16.value;
                    _context38.next = 20;
                    return regeneratorRuntime.awrap(_e17({
                      cacheName: a,
                      matchOptions: n,
                      cachedResponse: s,
                      request: r,
                      event: this.event
                    }));

                  case 20:
                    _context38.t0 = _context38.sent;

                    if (_context38.t0) {
                      _context38.next = 23;
                      break;
                    }

                    _context38.t0 = void 0;

                  case 23:
                    s = _context38.t0;

                  case 24:
                    _iteratorNormalCompletion16 = true;
                    _context38.next = 16;
                    break;

                  case 27:
                    _context38.next = 33;
                    break;

                  case 29:
                    _context38.prev = 29;
                    _context38.t1 = _context38["catch"](14);
                    _didIteratorError16 = true;
                    _iteratorError16 = _context38.t1;

                  case 33:
                    _context38.prev = 33;
                    _context38.prev = 34;

                    if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                      _iterator16["return"]();
                    }

                  case 36:
                    _context38.prev = 36;

                    if (!_didIteratorError16) {
                      _context38.next = 39;
                      break;
                    }

                    throw _iteratorError16;

                  case 39:
                    return _context38.finish(36);

                  case 40:
                    return _context38.finish(33);

                  case 41:
                    return _context38.abrupt("return", s);

                  case 42:
                  case "end":
                    return _context38.stop();
                }
              }
            }, null, this, [[14, 29, 33, 41], [34,, 36, 40]]);
          }
        }, {
          key: "cachePut",
          value: function cachePut(e, t) {
            var s, n, l, _this$_strategy2, u, d, f, p, g, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _e19;

            return regeneratorRuntime.async(function cachePut$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    s = h(e);
                    _context41.next = 3;
                    return regeneratorRuntime.awrap((0, c.V)(0));

                  case 3:
                    _context41.next = 5;
                    return regeneratorRuntime.awrap(this.getCacheKey(s, "write"));

                  case 5:
                    n = _context41.sent;

                    if (t) {
                      _context41.next = 8;
                      break;
                    }

                    throw new o.V("cache-put-with-no-response", {
                      url: (0, i.C)(n.url)
                    });

                  case 8:
                    _context41.next = 10;
                    return regeneratorRuntime.awrap(this._ensureResponseSafeToCache(t));

                  case 10:
                    l = _context41.sent;

                    if (l) {
                      _context41.next = 13;
                      break;
                    }

                    return _context41.abrupt("return", !1);

                  case 13:
                    _this$_strategy2 = this._strategy;
                    u = _this$_strategy2.cacheName;
                    d = _this$_strategy2.matchOptions;
                    _context41.next = 18;
                    return regeneratorRuntime.awrap(self.caches.open(u));

                  case 18:
                    f = _context41.sent;
                    p = this.hasCallback("cacheDidUpdate");

                    if (!p) {
                      _context41.next = 26;
                      break;
                    }

                    _context41.next = 23;
                    return regeneratorRuntime.awrap(function _callee15(e, t, s, n) {
                      var r, i, c, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _t10;

                      return regeneratorRuntime.async(function _callee15$(_context39) {
                        while (1) {
                          switch (_context39.prev = _context39.next) {
                            case 0:
                              r = a(t.url, s);

                              if (!(t.url === r)) {
                                _context39.next = 3;
                                break;
                              }

                              return _context39.abrupt("return", e.match(t, n));

                            case 3:
                              i = Object.assign(Object.assign({}, n), {
                                ignoreSearch: !0
                              });
                              _context39.next = 6;
                              return regeneratorRuntime.awrap(e.keys(t, i));

                            case 6:
                              c = _context39.sent;
                              _iteratorNormalCompletion17 = true;
                              _didIteratorError17 = false;
                              _iteratorError17 = undefined;
                              _context39.prev = 10;
                              _iterator17 = c[Symbol.iterator]();

                            case 12:
                              if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
                                _context39.next = 19;
                                break;
                              }

                              _t10 = _step17.value;

                              if (!(r === a(_t10.url, s))) {
                                _context39.next = 16;
                                break;
                              }

                              return _context39.abrupt("return", e.match(_t10, n));

                            case 16:
                              _iteratorNormalCompletion17 = true;
                              _context39.next = 12;
                              break;

                            case 19:
                              _context39.next = 25;
                              break;

                            case 21:
                              _context39.prev = 21;
                              _context39.t0 = _context39["catch"](10);
                              _didIteratorError17 = true;
                              _iteratorError17 = _context39.t0;

                            case 25:
                              _context39.prev = 25;
                              _context39.prev = 26;

                              if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                                _iterator17["return"]();
                              }

                            case 28:
                              _context39.prev = 28;

                              if (!_didIteratorError17) {
                                _context39.next = 31;
                                break;
                              }

                              throw _iteratorError17;

                            case 31:
                              return _context39.finish(28);

                            case 32:
                              return _context39.finish(25);

                            case 33:
                            case "end":
                              return _context39.stop();
                          }
                        }
                      }, null, null, [[10, 21, 25, 33], [26,, 28, 32]]);
                    }(f, n.clone(), ["__WB_REVISION__"], d));

                  case 23:
                    _context41.t0 = _context41.sent;
                    _context41.next = 27;
                    break;

                  case 26:
                    _context41.t0 = null;

                  case 27:
                    g = _context41.t0;
                    _context41.prev = 28;
                    _context41.next = 31;
                    return regeneratorRuntime.awrap(f.put(n, p ? l.clone() : l));

                  case 31:
                    _context41.next = 41;
                    break;

                  case 33:
                    _context41.prev = 33;
                    _context41.t1 = _context41["catch"](28);

                    if (!(_context41.t1 instanceof Error)) {
                      _context41.next = 41;
                      break;
                    }

                    _context41.t2 = "QuotaExceededError" === _context41.t1.name;

                    if (!_context41.t2) {
                      _context41.next = 40;
                      break;
                    }

                    _context41.next = 40;
                    return regeneratorRuntime.awrap(function _callee16() {
                      var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _e18;

                      return regeneratorRuntime.async(function _callee16$(_context40) {
                        while (1) {
                          switch (_context40.prev = _context40.next) {
                            case 0:
                              _iteratorNormalCompletion18 = true;
                              _didIteratorError18 = false;
                              _iteratorError18 = undefined;
                              _context40.prev = 3;
                              _iterator18 = r.f[Symbol.iterator]();

                            case 5:
                              if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
                                _context40.next = 12;
                                break;
                              }

                              _e18 = _step18.value;
                              _context40.next = 9;
                              return regeneratorRuntime.awrap(_e18());

                            case 9:
                              _iteratorNormalCompletion18 = true;
                              _context40.next = 5;
                              break;

                            case 12:
                              _context40.next = 18;
                              break;

                            case 14:
                              _context40.prev = 14;
                              _context40.t0 = _context40["catch"](3);
                              _didIteratorError18 = true;
                              _iteratorError18 = _context40.t0;

                            case 18:
                              _context40.prev = 18;
                              _context40.prev = 19;

                              if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                                _iterator18["return"]();
                              }

                            case 21:
                              _context40.prev = 21;

                              if (!_didIteratorError18) {
                                _context40.next = 24;
                                break;
                              }

                              throw _iteratorError18;

                            case 24:
                              return _context40.finish(21);

                            case 25:
                              return _context40.finish(18);

                            case 26:
                            case "end":
                              return _context40.stop();
                          }
                        }
                      }, null, null, [[3, 14, 18, 26], [19,, 21, 25]]);
                    }());

                  case 40:
                    throw _context41.t1;

                  case 41:
                    _iteratorNormalCompletion19 = true;
                    _didIteratorError19 = false;
                    _iteratorError19 = undefined;
                    _context41.prev = 44;
                    _iterator19 = this.iterateCallbacks("cacheDidUpdate")[Symbol.iterator]();

                  case 46:
                    if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                      _context41.next = 53;
                      break;
                    }

                    _e19 = _step19.value;
                    _context41.next = 50;
                    return regeneratorRuntime.awrap(_e19({
                      cacheName: u,
                      oldResponse: g,
                      newResponse: l.clone(),
                      request: n,
                      event: this.event
                    }));

                  case 50:
                    _iteratorNormalCompletion19 = true;
                    _context41.next = 46;
                    break;

                  case 53:
                    _context41.next = 59;
                    break;

                  case 55:
                    _context41.prev = 55;
                    _context41.t3 = _context41["catch"](44);
                    _didIteratorError19 = true;
                    _iteratorError19 = _context41.t3;

                  case 59:
                    _context41.prev = 59;
                    _context41.prev = 60;

                    if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                      _iterator19["return"]();
                    }

                  case 62:
                    _context41.prev = 62;

                    if (!_didIteratorError19) {
                      _context41.next = 65;
                      break;
                    }

                    throw _iteratorError19;

                  case 65:
                    return _context41.finish(62);

                  case 66:
                    return _context41.finish(59);

                  case 67:
                    return _context41.abrupt("return", !0);

                  case 68:
                  case "end":
                    return _context41.stop();
                }
              }
            }, null, this, [[28, 33], [44, 55, 59, 67], [60,, 62, 66]]);
          }
        }, {
          key: "getCacheKey",
          value: function getCacheKey(e, t) {
            var s, _a6, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _e20;

            return regeneratorRuntime.async(function getCacheKey$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    s = "".concat(e.url, " | ").concat(t);

                    if (this._cacheKeys[s]) {
                      _context42.next = 33;
                      break;
                    }

                    _a6 = e;
                    _iteratorNormalCompletion20 = true;
                    _didIteratorError20 = false;
                    _iteratorError20 = undefined;
                    _context42.prev = 6;
                    _iterator20 = this.iterateCallbacks("cacheKeyWillBeUsed")[Symbol.iterator]();

                  case 8:
                    if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
                      _context42.next = 18;
                      break;
                    }

                    _e20 = _step20.value;
                    _context42.t0 = h;
                    _context42.next = 13;
                    return regeneratorRuntime.awrap(_e20({
                      mode: t,
                      request: _a6,
                      event: this.event,
                      params: this.params
                    }));

                  case 13:
                    _context42.t1 = _context42.sent;
                    _a6 = (0, _context42.t0)(_context42.t1);

                  case 15:
                    _iteratorNormalCompletion20 = true;
                    _context42.next = 8;
                    break;

                  case 18:
                    _context42.next = 24;
                    break;

                  case 20:
                    _context42.prev = 20;
                    _context42.t2 = _context42["catch"](6);
                    _didIteratorError20 = true;
                    _iteratorError20 = _context42.t2;

                  case 24:
                    _context42.prev = 24;
                    _context42.prev = 25;

                    if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                      _iterator20["return"]();
                    }

                  case 27:
                    _context42.prev = 27;

                    if (!_didIteratorError20) {
                      _context42.next = 30;
                      break;
                    }

                    throw _iteratorError20;

                  case 30:
                    return _context42.finish(27);

                  case 31:
                    return _context42.finish(24);

                  case 32:
                    this._cacheKeys[s] = _a6;

                  case 33:
                    return _context42.abrupt("return", this._cacheKeys[s]);

                  case 34:
                  case "end":
                    return _context42.stop();
                }
              }
            }, null, this, [[6, 20, 24, 32], [25,, 27, 31]]);
          }
        }, {
          key: "hasCallback",
          value: function hasCallback(e) {
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
              for (var _iterator21 = this._strategy.plugins[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                var _t11 = _step21.value;
                if (e in _t11) return !0;
              }
            } catch (err) {
              _didIteratorError21 = true;
              _iteratorError21 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                  _iterator21["return"]();
                }
              } finally {
                if (_didIteratorError21) {
                  throw _iteratorError21;
                }
              }
            }

            return !1;
          }
        }, {
          key: "runCallbacks",
          value: function runCallbacks(e, t) {
            var _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, _s8;

            return regeneratorRuntime.async(function runCallbacks$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    _iteratorNormalCompletion22 = true;
                    _didIteratorError22 = false;
                    _iteratorError22 = undefined;
                    _context43.prev = 3;
                    _iterator22 = this.iterateCallbacks(e)[Symbol.iterator]();

                  case 5:
                    if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
                      _context43.next = 12;
                      break;
                    }

                    _s8 = _step22.value;
                    _context43.next = 9;
                    return regeneratorRuntime.awrap(_s8(t));

                  case 9:
                    _iteratorNormalCompletion22 = true;
                    _context43.next = 5;
                    break;

                  case 12:
                    _context43.next = 18;
                    break;

                  case 14:
                    _context43.prev = 14;
                    _context43.t0 = _context43["catch"](3);
                    _didIteratorError22 = true;
                    _iteratorError22 = _context43.t0;

                  case 18:
                    _context43.prev = 18;
                    _context43.prev = 19;

                    if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                      _iterator22["return"]();
                    }

                  case 21:
                    _context43.prev = 21;

                    if (!_didIteratorError22) {
                      _context43.next = 24;
                      break;
                    }

                    throw _iteratorError22;

                  case 24:
                    return _context43.finish(21);

                  case 25:
                    return _context43.finish(18);

                  case 26:
                  case "end":
                    return _context43.stop();
                }
              }
            }, null, this, [[3, 14, 18, 26], [19,, 21, 25]]);
          }
        }, {
          key: "iterateCallbacks",
          value:
          /*#__PURE__*/
          regeneratorRuntime.mark(function iterateCallbacks(e) {
            var _this18 = this;

            var _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _loop2, _iterator23, _step23;

            return regeneratorRuntime.wrap(function iterateCallbacks$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _iteratorNormalCompletion23 = true;
                    _didIteratorError23 = false;
                    _iteratorError23 = undefined;
                    _context45.prev = 3;
                    _loop2 =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop2() {
                      var t, _s9, _a7;

                      return regeneratorRuntime.wrap(function _loop2$(_context44) {
                        while (1) {
                          switch (_context44.prev = _context44.next) {
                            case 0:
                              t = _step23.value;

                              if (!("function" == typeof t[e])) {
                                _context44.next = 5;
                                break;
                              }

                              _s9 = _this18._pluginStateMap.get(t), _a7 = function _a7(a) {
                                var n = Object.assign(Object.assign({}, a), {
                                  state: _s9
                                });
                                return t[e](n);
                              };
                              _context44.next = 5;
                              return _a7;

                            case 5:
                            case "end":
                              return _context44.stop();
                          }
                        }
                      }, _loop2);
                    });
                    _iterator23 = this._strategy.plugins[Symbol.iterator]();

                  case 6:
                    if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
                      _context45.next = 11;
                      break;
                    }

                    return _context45.delegateYield(_loop2(), "t0", 8);

                  case 8:
                    _iteratorNormalCompletion23 = true;
                    _context45.next = 6;
                    break;

                  case 11:
                    _context45.next = 17;
                    break;

                  case 13:
                    _context45.prev = 13;
                    _context45.t1 = _context45["catch"](3);
                    _didIteratorError23 = true;
                    _iteratorError23 = _context45.t1;

                  case 17:
                    _context45.prev = 17;
                    _context45.prev = 18;

                    if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                      _iterator23["return"]();
                    }

                  case 20:
                    _context45.prev = 20;

                    if (!_didIteratorError23) {
                      _context45.next = 23;
                      break;
                    }

                    throw _iteratorError23;

                  case 23:
                    return _context45.finish(20);

                  case 24:
                    return _context45.finish(17);

                  case 25:
                  case "end":
                    return _context45.stop();
                }
              }
            }, iterateCallbacks, this, [[3, 13, 17, 25], [18,, 20, 24]]);
          })
        }, {
          key: "waitUntil",
          value: function waitUntil(e) {
            return this._extendLifetimePromises.push(e), e;
          }
        }, {
          key: "doneWaiting",
          value: function doneWaiting() {
            var e;
            return regeneratorRuntime.async(function doneWaiting$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    if (!(e = this._extendLifetimePromises.shift())) {
                      _context46.next = 5;
                      break;
                    }

                    _context46.next = 3;
                    return regeneratorRuntime.awrap(e);

                  case 3:
                    _context46.next = 0;
                    break;

                  case 5:
                  case "end":
                    return _context46.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._handlerDeferred.resolve(null);
          }
        }, {
          key: "_ensureResponseSafeToCache",
          value: function _ensureResponseSafeToCache(e) {
            var t, s, _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, _e21;

            return regeneratorRuntime.async(function _ensureResponseSafeToCache$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    t = e, s = !1;
                    _iteratorNormalCompletion24 = true;
                    _didIteratorError24 = false;
                    _iteratorError24 = undefined;
                    _context47.prev = 4;
                    _iterator24 = this.iterateCallbacks("cacheWillUpdate")[Symbol.iterator]();

                  case 6:
                    if (_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done) {
                      _context47.next = 20;
                      break;
                    }

                    _e21 = _step24.value;
                    _context47.next = 10;
                    return regeneratorRuntime.awrap(_e21({
                      request: this.request,
                      response: t,
                      event: this.event
                    }));

                  case 10:
                    _context47.t0 = _context47.sent;

                    if (_context47.t0) {
                      _context47.next = 13;
                      break;
                    }

                    _context47.t0 = void 0;

                  case 13:
                    t = _context47.t0;
                    s = !0;

                    if (t) {
                      _context47.next = 17;
                      break;
                    }

                    return _context47.abrupt("break", 20);

                  case 17:
                    _iteratorNormalCompletion24 = true;
                    _context47.next = 6;
                    break;

                  case 20:
                    _context47.next = 26;
                    break;

                  case 22:
                    _context47.prev = 22;
                    _context47.t1 = _context47["catch"](4);
                    _didIteratorError24 = true;
                    _iteratorError24 = _context47.t1;

                  case 26:
                    _context47.prev = 26;
                    _context47.prev = 27;

                    if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                      _iterator24["return"]();
                    }

                  case 29:
                    _context47.prev = 29;

                    if (!_didIteratorError24) {
                      _context47.next = 32;
                      break;
                    }

                    throw _iteratorError24;

                  case 32:
                    return _context47.finish(29);

                  case 33:
                    return _context47.finish(26);

                  case 34:
                    return _context47.abrupt("return", (s || t && 200 !== t.status && (t = void 0), t));

                  case 35:
                  case "end":
                    return _context47.stop();
                }
              }
            }, null, this, [[4, 22, 26, 34], [27,, 29, 33]]);
          }
        }]);

        return l;
      }();
    },
    873: function (_8) {
      function _() {
        return _8.apply(this, arguments);
      }

      _.toString = function () {
        return _8.toString();
      };

      return _;
    }(function () {
      "use strict";

      try {
        self["workbox:strategies:6.5.4"] && _();
      } catch (e) {}
    }),
    118: function _(e, t, s) {
      "use strict";

      s.d(t, {
        S: function S() {
          return a;
        }
      }), s(873);
      var a = {
        cacheWillUpdate: function cacheWillUpdate(_ref21) {
          var e;
          return regeneratorRuntime.async(function cacheWillUpdate$(_context48) {
            while (1) {
              switch (_context48.prev = _context48.next) {
                case 0:
                  e = _ref21.response;
                  return _context48.abrupt("return", 200 === e.status || 0 === e.status ? e : null);

                case 2:
                case "end":
                  return _context48.stop();
              }
            }
          });
        }
      };
    },
    94: function _(e, t, s) {
      "use strict";

      s(120), s(119), s(873);
    },
    819: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        CacheableResponse: function CacheableResponse() {
          return a.v;
        },
        CacheableResponsePlugin: function CacheableResponsePlugin() {
          return n.x;
        }
      });
      var a = s(414),
          n = s(709);
      s(895);
    },
    65: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        CacheExpiration: function CacheExpiration() {
          return a.p;
        },
        ExpirationPlugin: function ExpirationPlugin() {
          return n.Q;
        }
      });
      var a = s(721),
          n = s(202);
      s(550);
    },
    679: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        googleFontsCache: function googleFontsCache() {
          return o;
        },
        imageCache: function imageCache() {
          return l;
        },
        offlineFallback: function offlineFallback() {
          return w;
        },
        pageCache: function pageCache() {
          return f;
        },
        staticResourceCache: function staticResourceCache() {
          return u;
        },
        warmStrategyCache: function warmStrategyCache() {
          return h;
        }
      });
      var a = s(917),
          n = s(757),
          r = s(868),
          i = s(709),
          c = s(202);

      function o() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = "".concat(e.cachePrefix || "google-fonts", "-stylesheets"),
            s = "".concat(e.cachePrefix || "google-fonts", "-webfonts"),
            o = e.maxAgeSeconds || 31536e3,
            h = e.maxEntries || 30;
        (0, a.X)(function (_ref22) {
          var e = _ref22.url;
          return "https://fonts.googleapis.com" === e.origin;
        }, new n.j({
          cacheName: t
        })), (0, a.X)(function (_ref23) {
          var e = _ref23.url;
          return "https://fonts.gstatic.com" === e.origin;
        }, new r.b({
          cacheName: s,
          plugins: [new i.x({
            statuses: [0, 200]
          }), new c.Q({
            maxAgeSeconds: o,
            maxEntries: h
          })]
        }));
      }

      function h(e) {
        self.addEventListener("install", function (t) {
          var s = e.urls.map(function (s) {
            return e.strategy.handleAll({
              event: t,
              request: new Request(s)
            })[1];
          });
          t.waitUntil(Promise.all(s));
        });
      }

      function l() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var t = e.cacheName || "images",
            s = e.matchCallback || function (_ref24) {
          var e = _ref24.request;
          return "image" === e.destination;
        },
            n = e.maxAgeSeconds || 2592e3,
            o = e.maxEntries || 60,
            l = e.plugins || [];

        l.push(new i.x({
          statuses: [0, 200]
        })), l.push(new c.Q({
          maxEntries: o,
          maxAgeSeconds: n
        }));
        var u = new r.b({
          cacheName: t,
          plugins: l
        });
        (0, a.X)(s, u), e.warmCache && h({
          urls: e.warmCache,
          strategy: u
        });
      }

      function u() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var t = e.cacheName || "static-resources",
            s = e.matchCallback || function (_ref25) {
          var e = _ref25.request;
          return "style" === e.destination || "script" === e.destination || "worker" === e.destination;
        },
            r = e.plugins || [];

        r.push(new i.x({
          statuses: [0, 200]
        }));
        var c = new n.j({
          cacheName: t,
          plugins: r
        });
        (0, a.X)(s, c), e.warmCache && h({
          urls: e.warmCache,
          strategy: c
        });
      }

      s(144);
      var d = s(495);

      function f() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var t = e.cacheName || "pages",
            s = e.matchCallback || function (_ref26) {
          var e = _ref26.request;
          return "navigate" === e.mode;
        },
            n = e.networkTimeoutSeconds || 3,
            r = e.plugins || [];

        r.push(new i.x({
          statuses: [0, 200]
        }));
        var c = new d.n({
          networkTimeoutSeconds: n,
          cacheName: t,
          plugins: r
        });
        (0, a.X)(s, c), e.warmCache && h({
          urls: e.warmCache,
          strategy: c
        });
      }

      var p = s(226),
          g = s(86);

      function m(e) {
        return (0, g.b)().matchPrecache(e);
      }

      function w() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = e.pageFallback || "offline.html",
            s = e.imageFallback || !1,
            a = e.fontFallback || !1;
        self.addEventListener("install", function (e) {
          var n = [t];
          s && n.push(s), a && n.push(a), e.waitUntil(self.caches.open("workbox-offline-fallbacks").then(function (e) {
            return e.addAll(n);
          }));
        }), (0, p.H)(function _callee17(e) {
          var n, r;
          return regeneratorRuntime.async(function _callee17$(_context49) {
            while (1) {
              switch (_context49.prev = _context49.next) {
                case 0:
                  n = e.request.destination;
                  _context49.next = 3;
                  return regeneratorRuntime.awrap(self.caches.open("workbox-offline-fallbacks"));

                case 3:
                  r = _context49.sent;

                  if (!("document" === n)) {
                    _context49.next = 18;
                    break;
                  }

                  _context49.next = 7;
                  return regeneratorRuntime.awrap(m(t));

                case 7:
                  _context49.t2 = _context49.sent;

                  if (_context49.t2) {
                    _context49.next = 12;
                    break;
                  }

                  _context49.next = 11;
                  return regeneratorRuntime.awrap(r.match(t));

                case 11:
                  _context49.t2 = _context49.sent;

                case 12:
                  _context49.t1 = _context49.t2;

                  if (_context49.t1) {
                    _context49.next = 15;
                    break;
                  }

                  _context49.t1 = Response.error();

                case 15:
                  _context49.t0 = _context49.t1;
                  _context49.next = 47;
                  break;

                case 18:
                  if (!("image" === n && !1 !== s)) {
                    _context49.next = 32;
                    break;
                  }

                  _context49.next = 21;
                  return regeneratorRuntime.awrap(m(s));

                case 21:
                  _context49.t5 = _context49.sent;

                  if (_context49.t5) {
                    _context49.next = 26;
                    break;
                  }

                  _context49.next = 25;
                  return regeneratorRuntime.awrap(r.match(s));

                case 25:
                  _context49.t5 = _context49.sent;

                case 26:
                  _context49.t4 = _context49.t5;

                  if (_context49.t4) {
                    _context49.next = 29;
                    break;
                  }

                  _context49.t4 = Response.error();

                case 29:
                  _context49.t3 = _context49.t4;
                  _context49.next = 46;
                  break;

                case 32:
                  _context49.t7 = "font" === n && !1 !== a;

                  if (!_context49.t7) {
                    _context49.next = 42;
                    break;
                  }

                  _context49.next = 36;
                  return regeneratorRuntime.awrap(m(a));

                case 36:
                  _context49.t8 = _context49.sent;

                  if (_context49.t8) {
                    _context49.next = 41;
                    break;
                  }

                  _context49.next = 40;
                  return regeneratorRuntime.awrap(r.match(a));

                case 40:
                  _context49.t8 = _context49.sent;

                case 41:
                  _context49.t7 = _context49.t8;

                case 42:
                  _context49.t6 = _context49.t7;

                  if (_context49.t6) {
                    _context49.next = 45;
                    break;
                  }

                  _context49.t6 = Response.error();

                case 45:
                  _context49.t3 = _context49.t6;

                case 46:
                  _context49.t0 = _context49.t3;

                case 47:
                  return _context49.abrupt("return", _context49.t0);

                case 48:
                case "end":
                  return _context49.stop();
              }
            }
          });
        });
      }

      s(977);
    },
    615: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        NavigationRoute: function NavigationRoute() {
          return n;
        },
        RegExpRoute: function RegExpRoute() {
          return r.t;
        },
        Route: function Route() {
          return a.A;
        },
        Router: function Router() {
          return c.F;
        },
        registerRoute: function registerRoute() {
          return i.X;
        },
        setCatchHandler: function setCatchHandler() {
          return o.H;
        },
        setDefaultHandler: function setDefaultHandler() {
          return l;
        }
      }), s(524), s(120);
      var a = s(188);
      s(80);

      var n =
      /*#__PURE__*/
      function (_a$A2) {
        _inherits(n, _a$A2);

        function n(e) {
          var _this19;

          var _ref27 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref27$allowlist = _ref27.allowlist,
              t = _ref27$allowlist === void 0 ? [/./] : _ref27$allowlist,
              _ref27$denylist = _ref27.denylist,
              s = _ref27$denylist === void 0 ? [] : _ref27$denylist;

          _classCallCheck(this, n);

          _this19 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, function (e) {
            return _this19._match(e);
          }, e)), _this19._allowlist = t, _this19._denylist = s;
          return _this19;
        }

        _createClass(n, [{
          key: "_match",
          value: function _match(_ref28) {
            var e = _ref28.url,
                t = _ref28.request;
            if (t && "navigate" !== t.mode) return !1;
            var s = e.pathname + e.search;
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
              for (var _iterator25 = this._denylist[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                var _e22 = _step25.value;
                if (_e22.test(s)) return !1;
              }
            } catch (err) {
              _didIteratorError25 = true;
              _iteratorError25 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                  _iterator25["return"]();
                }
              } finally {
                if (_didIteratorError25) {
                  throw _iteratorError25;
                }
              }
            }

            return !!this._allowlist.some(function (e) {
              return e.test(s);
            });
          }
        }]);

        return n;
      }(a.A);

      var r = s(989),
          i = s(917),
          c = s(491),
          o = s(226),
          h = s(486);

      function l(e) {
        (0, h.u)().setDefaultHandler(e);
      }
    },
    162: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        CacheFirst: function CacheFirst() {
          return a.b;
        },
        CacheOnly: function CacheOnly() {
          return i;
        },
        NetworkFirst: function NetworkFirst() {
          return c.n;
        },
        NetworkOnly: function NetworkOnly() {
          return h;
        },
        StaleWhileRevalidate: function StaleWhileRevalidate() {
          return l.j;
        },
        Strategy: function Strategy() {
          return r._;
        },
        StrategyHandler: function StrategyHandler() {
          return u.G;
        }
      });
      var a = s(868),
          n = (s(524), s(120), s(125)),
          r = s(951);
      s(94), s(873);

      var i =
      /*#__PURE__*/
      function (_r$_3) {
        _inherits(i, _r$_3);

        function i() {
          _classCallCheck(this, i);

          return _possibleConstructorReturn(this, _getPrototypeOf(i).apply(this, arguments));
        }

        _createClass(i, [{
          key: "_handle",
          value: function _handle(e, t) {
            var s;
            return regeneratorRuntime.async(function _handle$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    _context50.next = 2;
                    return regeneratorRuntime.awrap(t.cacheMatch(e));

                  case 2:
                    s = _context50.sent;

                    if (s) {
                      _context50.next = 5;
                      break;
                    }

                    throw new n.V("no-response", {
                      url: e.url
                    });

                  case 5:
                    return _context50.abrupt("return", s);

                  case 6:
                  case "end":
                    return _context50.stop();
                }
              }
            });
          }
        }]);

        return i;
      }(r._);

      var c = s(495),
          o = s(902);

      var h =
      /*#__PURE__*/
      function (_r$_4) {
        _inherits(h, _r$_4);

        function h() {
          var _this20;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, h);

          _this20 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e)), _this20._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
          return _this20;
        }

        _createClass(h, [{
          key: "_handle",
          value: function _handle(e, t) {
            var s, a, _s10, _e23;

            return regeneratorRuntime.async(function _handle$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    _context51.prev = 0;
                    _s10 = [t.fetch(e)];

                    if (this._networkTimeoutSeconds) {
                      _e23 = (0, o.V)(1e3 * this._networkTimeoutSeconds);

                      _s10.push(_e23);
                    }

                    _context51.next = 5;
                    return regeneratorRuntime.awrap(Promise.race(_s10));

                  case 5:
                    a = _context51.sent;

                    if (a) {
                      _context51.next = 8;
                      break;
                    }

                    throw new Error("Timed out the network response after ".concat(this._networkTimeoutSeconds, " seconds."));

                  case 8:
                    _context51.next = 13;
                    break;

                  case 10:
                    _context51.prev = 10;
                    _context51.t0 = _context51["catch"](0);
                    _context51.t0 instanceof Error && (s = _context51.t0);

                  case 13:
                    if (a) {
                      _context51.next = 15;
                      break;
                    }

                    throw new n.V("no-response", {
                      url: e.url,
                      error: s
                    });

                  case 15:
                    return _context51.abrupt("return", a);

                  case 16:
                  case "end":
                    return _context51.stop();
                }
              }
            }, null, this, [[0, 10]]);
          }
        }]);

        return h;
      }(r._);

      var l = s(757),
          u = s(358);
    }
  },
      t = {};

  function s(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var r = t[a] = {
      exports: {}
    };
    return e[a](r, r.exports, s), r.exports;
  }

  s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, {
      a: t
    }), t;
  }, s.d = function (e, t) {
    for (var a in t) {
      s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, {
        enumerable: !0,
        get: t[a]
      });
    }
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, function () {
    var e = s(679),
        t = (e.offlineFallback, e.warmStrategyCache),
        a = s(162),
        n = a.CacheFirst,
        r = a.StaleWhileRevalidate,
        i = s(615).registerRoute,
        c = s(819).CacheableResponsePlugin,
        o = s(65).ExpirationPlugin;
    (0, s(796).precacheAndRoute)([{
      'revision': 'f643ffcb40357a8a000f94e1e5f034bc',
      'url': 'index.html'
    }, {
      'revision': '1dfa84824b530b3687f70520b9636b1b',
      'url': 'install.bundle.js'
    }, {
      'revision': '4e0e34f265fae8f33b01b27ae29d9d6f',
      'url': 'install.bundle.js.LICENSE.txt'
    }, {
      'revision': 'b5833a1b7b37ad9dfd9b948263d773b2',
      'url': 'main.bundle.js'
    }, {
      'revision': '4e0e34f265fae8f33b01b27ae29d9d6f',
      'url': 'main.bundle.js.LICENSE.txt'
    }]);
    var h = new n({
      cacheName: "page-cache",
      plugins: [new c({
        statuses: [0, 200]
      }), new o({
        maxAgeSeconds: 2592e3
      })]
    });
    t({
      urls: ["/index.html", "/"],
      strategy: h
    }), i(function (e) {
      return "navigate" === e.request.mode;
    }, h), i(function (e) {
      var t = e.request;
      return ["style", "script", "worker"].includes(t.destination);
    }, new r({
      cacheName: "asset-cache",
      plugins: [new c({
        statuses: [0, 200]
      })]
    })), i(function (e) {
      return "image" === e.request.destination;
    }, new n({
      cacheName: "my-image-cache",
      plugins: [new c({
        statuses: [0, 200]
      }), new o({
        maxEntries: 60,
        maxAgeSeconds: 2592e3
      })]
    }));
  }();
})();