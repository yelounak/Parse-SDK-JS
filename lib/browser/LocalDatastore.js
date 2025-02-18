"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");

var _Promise2 = require("@babel/runtime-corejs3/core-js-stable/promise");

var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");

var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _Array$from2 = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));

var _keys3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof _Symbol ? _Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return _Object$defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = _Object$create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);

    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = _Object$getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    var _context19;

    _forEachInstanceProperty(_context19 = ["next", "throw", "return"]).call(_context19, function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = _Promise2);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return _reverseInstanceProperty(keys).call(keys), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      var _context20;

      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context20 = this.tryEntries).call(_context20, resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
      }
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray2(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (_e2) {
      didErr = true;
      err = _e2;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  var _context18;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context18 = Object.prototype.toString.call(o)).call(_context18, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from2(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Provides a local datastore which can be used to store and retrieve <code>Parse.Object</code>. <br />
 * To enable this functionality, call <code>Parse.enableLocalDatastore()</code>.
 *
 * Pin object to add to local datastore
 *
 * <pre>await object.pin();</pre>
 * <pre>await object.pinWithName('pinName');</pre>
 *
 * Query pinned objects
 *
 * <pre>query.fromLocalDatastore();</pre>
 * <pre>query.fromPin();</pre>
 * <pre>query.fromPinWithName();</pre>
 *
 * <pre>const localObjects = await query.find();</pre>
 *
 * @class Parse.LocalDatastore
 * @static
 */


var LocalDatastore = {
  isEnabled: false,
  isSyncing: false,
  fromPinWithName: function (name
  /*: string*/
  )
  /*: Promise<Array<Object>>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.fromPinWithName(name);
  },
  pinWithName: function (name
  /*: string*/
  , value
  /*: any*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.pinWithName(name, value);
  },
  unPinWithName: function (name
  /*: string*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.unPinWithName(name);
  },
  _getAllContents: function ()
  /*: Promise<Object>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getAllContents();
  },
  // Use for testing
  _getRawStorage: function ()
  /*: Promise<Object>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getRawStorage();
  },
  _clear: function ()
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.clear();
  },
  // Pin the object and children recursively
  // Saves the object and children key to Pin Name
  _handlePinAllWithName: function (name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  )
  /*: Promise<void>*/
  {
    var _this = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _context;

      var pinName, toPinPromises, objectKeys, _iterator, _step, parent, children, parentKey, json, objectKey, fromPinPromise, _yield$Promise$all, _yield$Promise$all2, pinned, toPin;

      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pinName = _this.getPinName(name);
              toPinPromises = [];
              objectKeys = [];
              _iterator = _createForOfIteratorHelper(objects);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  parent = _step.value;
                  children = _this._getChildren(parent);
                  parentKey = _this.getKeyForObject(parent);
                  json = parent._toFullJSON(undefined, true);

                  if (parent._localId) {
                    json._localId = parent._localId;
                  }

                  children[parentKey] = json;

                  for (objectKey in children) {
                    objectKeys.push(objectKey);
                    toPinPromises.push(_this.pinWithName(objectKey, [children[objectKey]]));
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              fromPinPromise = _this.fromPinWithName(pinName);
              _context2.next = 8;
              return _promise.default.all([fromPinPromise, toPinPromises]);

            case 8:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 1);
              pinned = _yield$Promise$all2[0];
              toPin = (0, _toConsumableArray2.default)(new _set.default((0, _concat.default)(_context = []).call(_context, (0, _toConsumableArray2.default)(pinned || []), objectKeys)));
              return _context2.abrupt("return", _this.pinWithName(pinName, toPin));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }))();
  },
  // Removes object and children keys from pin name
  // Keeps the object and children pinned
  _handleUnPinAllWithName: function _handleUnPinAllWithName(name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  ) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var localDatastore, pinName, promises, objectKeys, _iterator2, _step2, _objectKeys, _context3, parent, children, parentKey, pinned, _iterator3, _step3, objectKey, hasReference, key, pinnedObjects;

      return _regeneratorRuntime().wrap(function _callee2$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this2._getAllContents();

            case 2:
              localDatastore = _context4.sent;
              pinName = _this2.getPinName(name);
              promises = [];
              objectKeys = [];
              _iterator2 = _createForOfIteratorHelper(objects);

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  parent = _step2.value;
                  children = _this2._getChildren(parent);
                  parentKey = _this2.getKeyForObject(parent);

                  (_objectKeys = objectKeys).push.apply(_objectKeys, (0, _concat.default)(_context3 = [parentKey]).call(_context3, (0, _toConsumableArray2.default)((0, _keys3.default)(children))));
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              objectKeys = (0, _toConsumableArray2.default)(new _set.default(objectKeys));
              pinned = localDatastore[pinName] || [];
              pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
                return !(0, _includes.default)(objectKeys).call(objectKeys, item);
              });

              if (pinned.length == 0) {
                promises.push(_this2.unPinWithName(pinName));
                delete localDatastore[pinName];
              } else {
                promises.push(_this2.pinWithName(pinName, pinned));
                localDatastore[pinName] = pinned;
              }

              _iterator3 = _createForOfIteratorHelper(objectKeys);
              _context4.prev = 13;

              _iterator3.s();

            case 15:
              if ((_step3 = _iterator3.n()).done) {
                _context4.next = 31;
                break;
              }

              objectKey = _step3.value;
              hasReference = false;
              _context4.t0 = (0, _keys2.default)(_regenerator.default).call(_regenerator.default, localDatastore);

            case 19:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 28;
                break;
              }

              key = _context4.t1.value;

              if (!(key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX))) {
                _context4.next = 26;
                break;
              }

              pinnedObjects = localDatastore[key] || [];

              if (!(0, _includes.default)(pinnedObjects).call(pinnedObjects, objectKey)) {
                _context4.next = 26;
                break;
              }

              hasReference = true;
              return _context4.abrupt("break", 28);

            case 26:
              _context4.next = 19;
              break;

            case 28:
              if (!hasReference) {
                promises.push(_this2.unPinWithName(objectKey));
              }

            case 29:
              _context4.next = 15;
              break;

            case 31:
              _context4.next = 36;
              break;

            case 33:
              _context4.prev = 33;
              _context4.t2 = _context4["catch"](13);

              _iterator3.e(_context4.t2);

            case 36:
              _context4.prev = 36;

              _iterator3.f();

              return _context4.finish(36);

            case 39:
              return _context4.abrupt("return", _promise.default.all(promises));

            case 40:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee2, null, [[13, 33, 36, 39]]);
    }))();
  },
  // Retrieve all pointer fields from object recursively
  _getChildren: function _getChildren(object
  /*: ParseObject*/
  ) {
    var encountered = {};

    var json = object._toFullJSON(undefined, true);

    for (var key in json) {
      if (json[key] && json[key].__type && json[key].__type === 'Object') {
        this._traverse(json[key], encountered);
      }
    }

    return encountered;
  },
  _traverse: function _traverse(object
  /*: any*/
  , encountered
  /*: any*/
  ) {
    if (!object.objectId) {
      return;
    } else {
      var objectKey = this.getKeyForObject(object);

      if (encountered[objectKey]) {
        return;
      }

      encountered[objectKey] = object;
    }

    for (var key in object) {
      var json = object[key];

      if (!object[key]) {
        json = object;
      }

      if (json.__type && json.__type === 'Object') {
        this._traverse(json, encountered);
      }
    }
  },
  // Transform keys in pin name to objects
  _serializeObjectsFromPinName: function _serializeObjectsFromPinName(name
  /*: string*/
  ) {
    var _this3 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _context5, _concatInstanceProper, _context6;

      var localDatastore, allObjects, key, pinName, pinned, promises, objects;
      return _regeneratorRuntime().wrap(function _callee3$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this3._getAllContents();

            case 2:
              localDatastore = _context7.sent;
              allObjects = [];

              for (key in localDatastore) {
                if ((0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.OBJECT_PREFIX)) {
                  allObjects.push(localDatastore[key][0]);
                }
              }

              if (name) {
                _context7.next = 7;
                break;
              }

              return _context7.abrupt("return", allObjects);

            case 7:
              pinName = _this3.getPinName(name);
              pinned = localDatastore[pinName];

              if ((0, _isArray.default)(pinned)) {
                _context7.next = 11;
                break;
              }

              return _context7.abrupt("return", []);

            case 11:
              promises = (0, _map.default)(pinned).call(pinned, function (objectKey) {
                return _this3.fromPinWithName(objectKey);
              });
              _context7.next = 14;
              return _promise.default.all(promises);

            case 14:
              objects = _context7.sent;
              objects = (_concatInstanceProper = (0, _concat.default)(_context5 = [])).call.apply(_concatInstanceProper, (0, _concat.default)(_context6 = [_context5]).call(_context6, (0, _toConsumableArray2.default)(objects)));
              return _context7.abrupt("return", (0, _filter.default)(objects).call(objects, function (object) {
                return object != null;
              }));

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // Replaces object pointers with pinned pointers
  // The object pointers may contain old data
  // Uses Breadth First Search Algorithm
  _serializeObject: function _serializeObject(objectKey
  /*: string*/
  , localDatastore
  /*: any*/
  ) {
    var _this4 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var LDS, root, queue, meta, uniqueId, nodeId, subTreeRoot, field, value, key, pointer;
      return _regeneratorRuntime().wrap(function _callee4$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              LDS = localDatastore;

              if (LDS) {
                _context8.next = 5;
                break;
              }

              _context8.next = 4;
              return _this4._getAllContents();

            case 4:
              LDS = _context8.sent;

            case 5:
              if (!(!LDS[objectKey] || LDS[objectKey].length === 0)) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt("return", null);

            case 7:
              root = LDS[objectKey][0];
              queue = [];
              meta = {};
              uniqueId = 0;
              meta[uniqueId] = root;
              queue.push(uniqueId);

              while (queue.length !== 0) {
                nodeId = queue.shift();
                subTreeRoot = meta[nodeId];

                for (field in subTreeRoot) {
                  value = subTreeRoot[field];

                  if (value.__type && value.__type === 'Object') {
                    key = _this4.getKeyForObject(value);

                    if (LDS[key] && LDS[key].length > 0) {
                      pointer = LDS[key][0];
                      uniqueId++;
                      meta[uniqueId] = pointer;
                      subTreeRoot[field] = pointer;
                      queue.push(uniqueId);
                    }
                  }
                }
              }

              return _context8.abrupt("return", root);

            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee4);
    }))();
  },
  // Called when an object is save / fetched
  // Update object pin value
  _updateObjectIfPinned: function _updateObjectIfPinned(object
  /*: ParseObject*/
  )
  /*: Promise<void>*/
  {
    var _this5 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var objectKey, pinned;
      return _regeneratorRuntime().wrap(function _callee5$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (_this5.isEnabled) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return");

            case 2:
              objectKey = _this5.getKeyForObject(object);
              _context9.next = 5;
              return _this5.fromPinWithName(objectKey);

            case 5:
              pinned = _context9.sent;

              if (!(!pinned || pinned.length === 0)) {
                _context9.next = 8;
                break;
              }

              return _context9.abrupt("return");

            case 8:
              return _context9.abrupt("return", _this5.pinWithName(objectKey, [object._toFullJSON()]));

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee5);
    }))();
  },
  // Called when object is destroyed
  // Unpin object and remove all references from pin names
  // TODO: Destroy children?
  _destroyObjectIfPinned: function _destroyObjectIfPinned(object
  /*: ParseObject*/
  ) {
    var _this6 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var localDatastore, objectKey, pin, promises, key, pinned;
      return _regeneratorRuntime().wrap(function _callee6$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (_this6.isEnabled) {
                _context10.next = 2;
                break;
              }

              return _context10.abrupt("return");

            case 2:
              _context10.next = 4;
              return _this6._getAllContents();

            case 4:
              localDatastore = _context10.sent;
              objectKey = _this6.getKeyForObject(object);
              pin = localDatastore[objectKey];

              if (pin) {
                _context10.next = 9;
                break;
              }

              return _context10.abrupt("return");

            case 9:
              promises = [_this6.unPinWithName(objectKey)];
              delete localDatastore[objectKey];

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if ((0, _includes.default)(pinned).call(pinned, objectKey)) {
                    pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
                      return item !== objectKey;
                    });

                    if (pinned.length == 0) {
                      promises.push(_this6.unPinWithName(key));
                      delete localDatastore[key];
                    } else {
                      promises.push(_this6.pinWithName(key, pinned));
                      localDatastore[key] = pinned;
                    }
                  }
                }
              }

              return _context10.abrupt("return", _promise.default.all(promises));

            case 13:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee6);
    }))();
  },
  // Update pin and references of the unsaved object
  _updateLocalIdForObject: function _updateLocalIdForObject(localId
  /*: string*/
  , object
  /*: ParseObject*/
  ) {
    var _this7 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _context11, _context12;

      var localKey, objectKey, unsaved, promises, localDatastore, key, pinned;
      return _regeneratorRuntime().wrap(function _callee7$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (_this7.isEnabled) {
                _context13.next = 2;
                break;
              }

              return _context13.abrupt("return");

            case 2:
              localKey = (0, _concat.default)(_context11 = (0, _concat.default)(_context12 = "".concat(_LocalDatastoreUtils.OBJECT_PREFIX)).call(_context12, object.className, "_")).call(_context11, localId);
              objectKey = _this7.getKeyForObject(object);
              _context13.next = 6;
              return _this7.fromPinWithName(localKey);

            case 6:
              unsaved = _context13.sent;

              if (!(!unsaved || unsaved.length === 0)) {
                _context13.next = 9;
                break;
              }

              return _context13.abrupt("return");

            case 9:
              promises = [_this7.unPinWithName(localKey), _this7.pinWithName(objectKey, unsaved)];
              _context13.next = 12;
              return _this7._getAllContents();

            case 12:
              localDatastore = _context13.sent;

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if ((0, _includes.default)(pinned).call(pinned, localKey)) {
                    pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
                      return item !== localKey;
                    });
                    pinned.push(objectKey);
                    promises.push(_this7.pinWithName(key, pinned));
                    localDatastore[key] = pinned;
                  }
                }
              }

              return _context13.abrupt("return", _promise.default.all(promises));

            case 15:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee7);
    }))();
  },

  /**
   * Updates Local Datastore from Server
   *
   * <pre>
   * await Parse.LocalDatastore.updateFromServer();
   * </pre>
   *
   * @function updateFromServer
   * @name Parse.LocalDatastore.updateFromServer
   * @static
   */
  updateFromServer: function updateFromServer() {
    var _this8 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _context14;

      var localDatastore, keys, key, pointersHash, _i, _keys, _key, _key$split, _key$split2, className, objectId, queryPromises, responses, objects, pinPromises;

      return _regeneratorRuntime().wrap(function _callee8$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!(!_this8.checkIfEnabled() || _this8.isSyncing)) {
                _context15.next = 2;
                break;
              }

              return _context15.abrupt("return");

            case 2:
              _context15.next = 4;
              return _this8._getAllContents();

            case 4:
              localDatastore = _context15.sent;
              keys = [];

              for (key in localDatastore) {
                if ((0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.OBJECT_PREFIX)) {
                  keys.push(key);
                }
              }

              if (!(keys.length === 0)) {
                _context15.next = 9;
                break;
              }

              return _context15.abrupt("return");

            case 9:
              _this8.isSyncing = true;
              pointersHash = {};
              _i = 0, _keys = keys;

            case 12:
              if (!(_i < _keys.length)) {
                _context15.next = 23;
                break;
              }

              _key = _keys[_i]; // Ignore the OBJECT_PREFIX

              _key$split = _key.split('_'), _key$split2 = (0, _slicedToArray2.default)(_key$split, 4), className = _key$split2[2], objectId = _key$split2[3]; // User key is split into [ 'Parse', 'LDS', '', 'User', 'objectId' ]

              if (_key.split('_').length === 5 && _key.split('_')[3] === 'User') {
                className = '_User';
                objectId = _key.split('_')[4];
              }

              if (!(0, _startsWith.default)(objectId).call(objectId, 'local')) {
                _context15.next = 18;
                break;
              }

              return _context15.abrupt("continue", 20);

            case 18:
              if (!(className in pointersHash)) {
                pointersHash[className] = new _set.default();
              }

              pointersHash[className].add(objectId);

            case 20:
              _i++;
              _context15.next = 12;
              break;

            case 23:
              queryPromises = (0, _map.default)(_context14 = (0, _keys3.default)(pointersHash)).call(_context14, function (className) {
                var objectIds = (0, _from.default)(pointersHash[className]);
                var query = new _ParseQuery.default(className);
                query.limit(objectIds.length);

                if (objectIds.length === 1) {
                  query.equalTo('objectId', objectIds[0]);
                } else {
                  query.containedIn('objectId', objectIds);
                }

                return (0, _find.default)(query).call(query);
              });
              _context15.prev = 24;
              _context15.next = 27;
              return _promise.default.all(queryPromises);

            case 27:
              responses = _context15.sent;
              objects = (0, _concat.default)([]).apply([], responses);
              pinPromises = (0, _map.default)(objects).call(objects, function (object) {
                var objectKey = _this8.getKeyForObject(object);

                return _this8.pinWithName(objectKey, object._toFullJSON());
              });
              _context15.next = 32;
              return _promise.default.all(pinPromises);

            case 32:
              _this8.isSyncing = false;
              _context15.next = 39;
              break;

            case 35:
              _context15.prev = 35;
              _context15.t0 = _context15["catch"](24);
              console.error('Error syncing LocalDatastore: ', _context15.t0);
              _this8.isSyncing = false;

            case 39:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee8, null, [[24, 35]]);
    }))();
  },
  getKeyForObject: function getKeyForObject(object
  /*: any*/
  ) {
    var _context16, _context17;

    var objectId = object.objectId || object._getId();

    return (0, _concat.default)(_context16 = (0, _concat.default)(_context17 = "".concat(_LocalDatastoreUtils.OBJECT_PREFIX)).call(_context17, object.className, "_")).call(_context16, objectId);
  },
  getPinName: function getPinName(pinName
  /*: ?string*/
  ) {
    if (!pinName || pinName === _LocalDatastoreUtils.DEFAULT_PIN) {
      return _LocalDatastoreUtils.DEFAULT_PIN;
    }

    return _LocalDatastoreUtils.PIN_PREFIX + pinName;
  },
  checkIfEnabled: function checkIfEnabled() {
    if (!this.isEnabled) {
      console.error('Parse.enableLocalDatastore() must be called first');
    }

    return this.isEnabled;
  }
};
module.exports = LocalDatastore;

_CoreManager.default.setLocalDatastoreController(require('./LocalDatastoreController'));

_CoreManager.default.setLocalDatastore(LocalDatastore);