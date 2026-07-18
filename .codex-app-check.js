var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i2 = 0; i2 < children.length; i2++)
            nameSoFar = children[i2], type = childKey + getElementKey(nameSoFar, i2), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i2 = getIteratorFn(children), "function" === typeof i2)
          for (i2 === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i2.call(children), i2 = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i2++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i2 = 0;
          try {
            for (; i2 < queue.length; i2++) {
              var callback = queue[i2];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i2] = callback;
                    queue.splice(0, i2);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i2 + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n2 = 0;
          mapChildren(children, function() {
            n2++;
          });
          return n2;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i2 = 0; i2 < propName; i2++)
            JSCompiler_inline_result[i2] = arguments[i2 + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i2 = 2; i2 < arguments.length; i2++)
          validateChildKeys(arguments[i2]);
        i2 = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i2[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i2.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i2.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i2[propName] && (i2[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i2,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i2,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.7";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function() {
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React17 = require_react(), Internals = {
        d: {
          f: noop,
          r: function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React17.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports.createPortal = function(children, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container, null, key);
      };
      exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn)
            return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : null != options && "string" !== typeof options.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
      };
      exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : "style" !== options.as && "script" !== options.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              ), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
              });
          } else null == options && Internals.d.M(href);
      };
      exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        ), Internals.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
      };
      exports.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.2.7";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  }
});

// node_modules/tiny-emitter/index.js
var require_tiny_emitter = __commonJS({
  "node_modules/tiny-emitter/index.js"(exports, module) {
    function E() {
    }
    E.prototype = {
      on: function(name, callback, ctx) {
        var e2 = this.e || (this.e = {});
        (e2[name] || (e2[name] = [])).push({
          fn: callback,
          ctx
        });
        return this;
      },
      once: function(name, callback, ctx) {
        var self2 = this;
        function listener() {
          self2.off(name, listener);
          callback.apply(ctx, arguments);
        }
        ;
        listener._ = callback;
        return this.on(name, listener, ctx);
      },
      emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i2 = 0;
        var len = evtArr.length;
        for (i2; i2 < len; i2++) {
          evtArr[i2].fn.apply(evtArr[i2].ctx, data);
        }
        return this;
      },
      off: function(name, callback) {
        var e2 = this.e || (this.e = {});
        var evts = e2[name];
        var liveEvents = [];
        if (evts && callback) {
          for (var i2 = 0, len = evts.length; i2 < len; i2++) {
            if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
              liveEvents.push(evts[i2]);
          }
        }
        liveEvents.length ? e2[name] = liveEvents : delete e2[name];
        return this;
      }
    };
    module.exports = E;
    module.exports.TinyEmitter = E;
  }
});

// node_modules/virtual-scroll/lib/virtualscroll.js
var require_virtualscroll = __commonJS({
  "node_modules/virtual-scroll/lib/virtualscroll.js"(exports, module) {
    !(function(e2, t2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define(t2) : (e2 || self).virtualScroll = t2();
    })(exports, function() {
      var e2 = 0;
      function t2(t3) {
        return "__private_" + e2++ + "_" + t3;
      }
      function i2(e3, t3) {
        if (!Object.prototype.hasOwnProperty.call(e3, t3)) throw new TypeError("attempted to use private field on non-instance");
        return e3;
      }
      function n2() {
      }
      n2.prototype = { on: function(e3, t3, i3) {
        var n3 = this.e || (this.e = {});
        return (n3[e3] || (n3[e3] = [])).push({ fn: t3, ctx: i3 }), this;
      }, once: function(e3, t3, i3) {
        var n3 = this;
        function o3() {
          n3.off(e3, o3), t3.apply(i3, arguments);
        }
        return o3._ = t3, this.on(e3, o3, i3);
      }, emit: function(e3) {
        for (var t3 = [].slice.call(arguments, 1), i3 = ((this.e || (this.e = {}))[e3] || []).slice(), n3 = 0, o3 = i3.length; n3 < o3; n3++) i3[n3].fn.apply(i3[n3].ctx, t3);
        return this;
      }, off: function(e3, t3) {
        var i3 = this.e || (this.e = {}), n3 = i3[e3], o3 = [];
        if (n3 && t3) for (var s3 = 0, h2 = n3.length; s3 < h2; s3++) n3[s3].fn !== t3 && n3[s3].fn._ !== t3 && o3.push(n3[s3]);
        return o3.length ? i3[e3] = o3 : delete i3[e3], this;
      } };
      var o2 = n2;
      o2.TinyEmitter = n2;
      var s2, h = "virtualscroll", r2 = t2("options"), a = t2("el"), l = t2("emitter"), u = t2("event"), c = t2("touchStart"), d = t2("bodyTouchAction");
      return (function() {
        function e3(e4) {
          var t4 = this;
          Object.defineProperty(this, r2, { writable: true, value: void 0 }), Object.defineProperty(this, a, { writable: true, value: void 0 }), Object.defineProperty(this, l, { writable: true, value: void 0 }), Object.defineProperty(this, u, { writable: true, value: void 0 }), Object.defineProperty(this, c, { writable: true, value: void 0 }), Object.defineProperty(this, d, { writable: true, value: void 0 }), this._onWheel = function(e5) {
            var n3 = i2(t4, r2)[r2], o3 = i2(t4, u)[u];
            o3.deltaX = e5.wheelDeltaX || -1 * e5.deltaX, o3.deltaY = e5.wheelDeltaY || -1 * e5.deltaY, s2.isFirefox && 1 === e5.deltaMode && (o3.deltaX *= n3.firefoxMultiplier, o3.deltaY *= n3.firefoxMultiplier), o3.deltaX *= n3.mouseMultiplier, o3.deltaY *= n3.mouseMultiplier, t4._notify(e5);
          }, this._onMouseWheel = function(e5) {
            var n3 = i2(t4, u)[u];
            n3.deltaX = e5.wheelDeltaX ? e5.wheelDeltaX : 0, n3.deltaY = e5.wheelDeltaY ? e5.wheelDeltaY : e5.wheelDelta, t4._notify(e5);
          }, this._onTouchStart = function(e5) {
            var n3 = e5.targetTouches ? e5.targetTouches[0] : e5;
            i2(t4, c)[c].x = n3.pageX, i2(t4, c)[c].y = n3.pageY;
          }, this._onTouchMove = function(e5) {
            var n3 = i2(t4, r2)[r2];
            n3.preventTouch && !e5.target.classList.contains(n3.unpreventTouchClass) && e5.preventDefault();
            var o3 = i2(t4, u)[u], s3 = e5.targetTouches ? e5.targetTouches[0] : e5;
            o3.deltaX = (s3.pageX - i2(t4, c)[c].x) * n3.touchMultiplier, o3.deltaY = (s3.pageY - i2(t4, c)[c].y) * n3.touchMultiplier, i2(t4, c)[c].x = s3.pageX, i2(t4, c)[c].y = s3.pageY, t4._notify(e5);
          }, this._onKeyDown = function(e5) {
            var n3 = i2(t4, u)[u];
            n3.deltaX = n3.deltaY = 0;
            var o3 = window.innerHeight - 40;
            switch (e5.keyCode) {
              case 37:
              case 38:
                n3.deltaY = i2(t4, r2)[r2].keyStep;
                break;
              case 39:
              case 40:
                n3.deltaY = -i2(t4, r2)[r2].keyStep;
                break;
              case 32:
                n3.deltaY = o3 * (e5.shiftKey ? 1 : -1);
                break;
              default:
                return;
            }
            t4._notify(e5);
          }, i2(this, a)[a] = window, e4 && e4.el && (i2(this, a)[a] = e4.el, delete e4.el), s2 || (s2 = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }), i2(this, r2)[r2] = Object.assign({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: false, unpreventTouchClass: "vs-touchmove-allowed", useKeyboard: true, useTouch: true }, e4), i2(this, l)[l] = new o2(), i2(this, u)[u] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, i2(this, c)[c] = { x: null, y: null }, i2(this, d)[d] = null, void 0 !== i2(this, r2)[r2].passive && (this.listenerOptions = { passive: i2(this, r2)[r2].passive });
        }
        var t3 = e3.prototype;
        return t3._notify = function(e4) {
          var t4 = i2(this, u)[u];
          t4.x += t4.deltaX, t4.y += t4.deltaY, i2(this, l)[l].emit(h, { x: t4.x, y: t4.y, deltaX: t4.deltaX, deltaY: t4.deltaY, originalEvent: e4 });
        }, t3._bind = function() {
          s2.hasWheelEvent && i2(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), s2.hasMouseWheelEvent && i2(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s2.hasTouch && i2(this, r2)[r2].useTouch && (i2(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i2(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s2.hasPointer && s2.hasTouchWin && (i2(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i2(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
        }, t3._unbind = function() {
          s2.hasWheelEvent && i2(this, a)[a].removeEventListener("wheel", this._onWheel), s2.hasMouseWheelEvent && i2(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), s2.hasTouch && (i2(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i2(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), s2.hasPointer && s2.hasTouchWin && (document.body.style.msTouchAction = i2(this, d)[d], i2(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
        }, t3.on = function(e4, t4) {
          i2(this, l)[l].on(h, e4, t4);
          var n3 = i2(this, l)[l].e;
          n3 && n3[h] && 1 === n3[h].length && this._bind();
        }, t3.off = function(e4, t4) {
          i2(this, l)[l].off(h, e4, t4);
          var n3 = i2(this, l)[l].e;
          (!n3[h] || n3[h].length <= 0) && this._unbind();
        }, t3.destroy = function() {
          i2(this, l)[l].off(), this._unbind();
        }, e3;
      })();
    });
  }
});

// src/App.jsx
var import_react17 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// src/components/Header/Header.jsx
var import_react = __toESM(require_react(), 1);
function Header({ onNavigate }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    let frameId = 0;
    const updateHeader = () => {
      setScrolled(window.scrollY > 40);
      frameId = 0;
    };
    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateHeader);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    document.body.classList.toggle("menuLocked", open);
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      document.body.classList.remove("menuLocked");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  const closeMenu = () => setOpen(false);
  const goTo = (event, page, sectionId) => {
    event.preventDefault();
    onNavigate(page, sectionId);
    closeMenu();
  };
  return /* @__PURE__ */ import_react.default.createElement("header", { className: `siteHeader ${scrolled ? "isScrolled" : ""} ${open ? "menuOpen" : ""}` }, /* @__PURE__ */ import_react.default.createElement(
    "a",
    {
      href: "/",
      className: "brand",
      "aria-label": "JB WEDDINGS home",
      onClick: (event) => goTo(event, "home")
    },
    /* @__PURE__ */ import_react.default.createElement("img", { src: "/assets/jb-logo-white.png", alt: "JB WEDDINGS logo" })
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: `menuButton ${open ? "isOpen" : ""}`,
      type: "button",
      "aria-label": open ? "Close navigation menu" : "Open navigation menu",
      "aria-expanded": open,
      "aria-controls": "main-navigation",
      onClick: () => setOpen((value) => !value)
    },
    /* @__PURE__ */ import_react.default.createElement("span", null),
    /* @__PURE__ */ import_react.default.createElement("span", null)
  ), /* @__PURE__ */ import_react.default.createElement(
    "nav",
    {
      id: "main-navigation",
      className: open ? "isOpen" : "",
      "aria-label": "Main navigation",
      "data-lenis-prevent": ""
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "mobileNavMeta", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Navigation"), /* @__PURE__ */ import_react.default.createElement("span", null, "JB WEDDINGS")),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/#home", onClick: (event) => goTo(event, "home", "home") }, "Home"),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/about", onClick: (event) => goTo(event, "about") }, "About"),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/#portfolio", onClick: (event) => goTo(event, "home", "portfolio") }, "Portfolio"),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/#films", onClick: (event) => goTo(event, "home", "films") }, "Wedding Films"),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/#reviews", onClick: (event) => goTo(event, "home", "reviews") }, "Reviews"),
    /* @__PURE__ */ import_react.default.createElement("a", { href: "/#contact", className: "quoteLink", onClick: (event) => goTo(event, "home", "contact") }, "Ask a Quote"),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "mobileNavFooter", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Stories made timeless"), /* @__PURE__ */ import_react.default.createElement("span", null, "Colombo, Sri Lanka"))
  ));
}
var Header_default = Header;

// src/components/Hero/Hero.jsx
var import_react2 = __toESM(require_react(), 1);

// src/data/siteData.js
var site = {
  name: "JB WEDDINGS",
  fullName: "JB WEDDINGS",
  email: "jbphotography@email.com",
  phone: "+94 7X XXX XXXX",
  whatsapp: "947XXXXXXXX",
  whatsappMessage: "Hello JB WEDDINGS, I would like to know more about your wedding photography and videography services.",
  location: "Sri Lanka",
  facebook: "https://www.facebook.com/Jagath-Bandara-Photography-102906635559836/",
  weddingFilms: "https://www.facebook.com/profile.php?id=100095189754439&mibextid=ZbWKwL",
  instagram: "https://www.instagram.com/jagathbandaraphotography?igsh=c3pvamt0ZHRiejdx",
  tiktok: "https://www.tiktok.com/@jagathbandaraphotography",
  youtube: "https://youtube.com/@jagathbandaraphotography?si=_4VmLi3lr1Zx--W5"
};
var asset = (fileName) => `/assets/${encodeURIComponent(fileName)}`;
var heroImages = [
  asset("img (2).jpeg"),
  asset("img (182).jpeg"),
  asset("img1.jpeg")
];
var experienceMainImages = [
  {
    src: asset("img (80).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS"
  },
  {
    src: asset("img (5).jpeg"),
    alt: "Bride and groom wedding portrait"
  },
  {
    src: asset("img (183).jpeg"),
    alt: "Elegant wedding photography moment"
  },
  {
    src: asset("img (42).jpeg"),
    alt: "Elegant bride and groom portrait in natural light"
  },
  {
    src: asset("img (181).jpeg"),
    alt: "Bride and groom silhouetted beside a bright window"
  }
];
var experienceFloatingImages = [
  {
    src: asset("img (19).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS"
  },
  {
    src: asset("img (55).jpeg"),
    alt: "Bride and groom photography session"
  },
  {
    src: asset("img (112).jpeg"),
    alt: "Wedding couple creative portrait"
  },
  {
    src: asset("img (159).jpeg"),
    alt: "Couple dancing during an evening portrait session"
  },
  {
    src: asset("img (94).jpeg"),
    alt: "Intimate wedding portrait by JB WEDDINGS"
  }
];
var experienceImages = [
  {
    src: asset("img (7).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS"
  },
  {
    src: asset("img (3).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS"
  },
  {
    src: asset("img (115).jpeg"),
    alt: "Bride and groom photography session"
  },
  {
    src: asset("img (112).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS"
  },
  {
    src: asset("img (3).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS"
  }
];
var portfolio = [
  {
    title: "Window Light",
    tag: "Wedding Portrait",
    image: asset("img (170).jpeg"),
    hoverImage: asset("img (19).jpeg"),
    alt: "Bride and groom silhouetted beside a bright window",
    layout: "portrait"
  },
  {
    title: "Just Us",
    tag: "Pre-wedding Portrait",
    image: asset("img (20).jpeg"),
    hoverImage: asset("img (21).jpeg"),
    alt: "Couple dancing together during an evening portrait session",
    layout: "portrait"
  },
  {
    title: "Garden Promises",
    tag: "Pre-wedding",
    image: asset("img (28).jpeg"),
    hoverImage: asset("img (29).jpeg"),
    alt: "Couple enjoying a romantic garden picnic"
  },
  {
    title: "Something Blue",
    tag: "Wedding Day",
    image: asset("img (165).jpeg"),
    hoverImage: asset("img (107).jpeg"),
    alt: "Traditional wedding couple in an elegant blue room"
  },
  {
    title: "Softly, In Light",
    tag: "Bridal Portrait",
    image: asset("img (104).jpeg"),
    hoverImage: asset("img (105).jpeg"),
    alt: "Bride in traditional dress standing in soft garden light",
    layout: "wide"
  },
  {
    title: "By The Ocean",
    tag: "Love Story",
    image: asset("img (116).jpeg"),
    hoverImage: asset("img (68).jpeg"),
    alt: "Couple laughing together on a quiet beach",
    layout: "wide"
  },
  {
    title: "After Dark",
    tag: "Couple Session",
    image: asset("img (154).jpeg"),
    hoverImage: asset("img (155).jpeg"),
    alt: "Couple dancing together during an evening portrait session"
  },
  {
    title: "Golden Vows",
    tag: "Wedding Portrait",
    image: asset("img (110).jpeg"),
    hoverImage: asset("img (111).jpeg"),
    alt: "Wedding couple photographed in warm golden light"
  },
  {
    title: "Close To You",
    tag: "Wedding Story",
    image: asset("img (146).jpeg"),
    hoverImage: asset("img (97).jpeg"),
    alt: "Bride and groom sharing an intimate wedding-day moment"
  },
  {
    title: "The First Chapter",
    tag: "Pre-wedding",
    image: asset("img (138).jpeg"),
    hoverImage: asset("img (139).jpeg"),
    alt: "Couple posing together during an elegant pre-wedding session",
    layout: "wide"
  },
  {
    title: "Endless Romance",
    tag: "Editorial Portrait",
    image: asset("img (71).jpeg"),
    hoverImage: asset("img (72).jpeg"),
    alt: "Romantic editorial portrait captured by JB WEDDINGS",
    layout: "wide"
  }
];
var about = {
  title: "Your wedding is more than a day. It is a story worth remembering well.",
  lead: "JB WEDDINGS is a Sri Lankan wedding photography and filmmaking studio devoted to honest emotion, refined imagery, and stories that remain meaningful for generations.",
  text: "From the first conversation to the final gallery, we guide every couple with patience and care. We notice the meaningful details, the people you love, and the quiet in-between moments that make your celebration entirely your own.",
  secondText: "Our style brings documentary honesty together with elegant portraiture. The result is a collection that feels natural today and timeless when you return to it years from now.",
  image: asset("img (1).jpeg"),
  imageAlt: "Wedding couple photographed by JB WEDDINGS",
  studioImage: asset("img (42).jpeg"),
  studioImageAlt: "Romantic couple portrait photographed by JB WEDDINGS",
  founderTitle: "The man behind the lens",
  founderName: "Jagath Bandara",
  founderRole: "Founder & Lead Photographer",
  founderImage: asset("owner.jpg"),
  founderImageAlt: "Jagath Bandara, founder and lead photographer of JB WEDDINGS",
  founderIntro: "leads JB WEDDINGS with a passion for honest emotion, elegant imagery, and timeless wedding stories.",
  founderText: [
    "With a calm presence and a careful eye for detail, Jagath approaches every celebration as a story with its own people, traditions, and rhythm. He gives couples gentle direction when it is helpful, then allows the real moments to unfold naturally.",
    "From intimate ceremonies to grand Sri Lankan weddings, his focus remains the same: to preserve the laughter, emotion, and quiet connections that make each day personal. Every finished collection is created to feel beautiful now and deeply meaningful for years to come.",
    "Under his direction, JB WEDDINGS brings photography and cinematic filmmaking together as one thoughtful experience, from the first conversation through to the final delivery."
  ],
  storytellingTitle: ["Timeless stories", "through the lens"],
  storytellingVideo: asset("video.mp4"),
  storytellingVideoPoster: asset("img (172).jpeg"),
  storytellingText: [
    "At JB WEDDINGS, we believe every photograph carries the heartbeat of a story. What began as a passion for capturing fleeting moments has grown into a craft devoted to preserving emotion, movement, and meaning in every frame.",
    "From quiet glances to joyful celebrations, we create imagery that feels honest, beautiful, and unmistakably yours. Creativity, authenticity, and care guide every story we photograph and film.",
    "Every image we deliver is more than a memory. It is part of your legacy, told through light, emotion, and timeless artistry."
  ],
  quote: "The best wedding photographs do more than show how everything looked. They bring back how it felt."
};
var services = [
  {
    title: "Wedding Photography",
    text: "Elegant wedding photography with timeless portraits, candid emotions, family moments, and refined editing.",
    image: asset("img (1).jpeg"),
    alt: "Bride and groom photographed in window light",
    includes: ["Wedding-day coverage", "Professionally edited photographs", "Private online gallery"]
  },
  {
    title: "Wedding Videography",
    text: "Cinematic wedding films created with emotion, movement, music, and storytelling.",
    image: asset("img (170).jpeg"),
    alt: "Elegant bridal portrait captured by JB WEDDINGS",
    includes: ["Cinematic highlight film", "Ceremony and speeches", "4K digital delivery"]
  },
  {
    title: "Pre-shoot Photography",
    text: "Creative couple sessions planned with beautiful locations, natural light, outfits, and mood.",
    image: asset("img (100).jpeg"),
    alt: "Couple enjoying a relaxed outdoor pre-shoot",
    includes: ["Creative planning", "Location and outfit guidance", "Edited portrait gallery"]
  },
  {
    title: "Engagement Shoots",
    text: "Graceful engagement portraits for announcements, invitations, memories, and social media.",
    image: asset("img (42).jpeg"),
    alt: "Romantic engagement portrait photographed through reflections",
    includes: ["Guided couple session", "Natural and editorial portraits", "Online gallery"]
  },
  {
    title: "Homecoming Coverage",
    text: "Complete homecoming coverage with ceremony moments, couple portraits, family photos, and celebrations.",
    image: asset("img (150).jpeg"),
    alt: "Bride and groom during their wedding celebration",
    includes: ["Ceremony and reception coverage", "Couple and family portraits", "Edited image collection"]
  },
  {
    title: "Event Photography",
    text: "Professional coverage for birthdays, private events, corporate functions, and special celebrations.",
    image: asset("img (154).jpeg"),
    alt: "Couple photographed during an evening celebration",
    includes: ["Flexible event coverage", "Key moments and group portraits", "Professional image delivery"]
  }
];
var films = [
  {
    title: "Manuli & Dulshan | Wedding Highlight Video ",
    label: "Cinematic Wedding",
    youtubeUrl: "https://youtu.be/-7Tfe5jDiIw?si=_yT2Y0PzVrfcMzAa"
  },
  {
    title: "Manuli & Dulshan  | Wedding Highlight Video ",
    label: "Wedding Highlights",
    youtubeUrl: "https://youtu.be/xvfFOdGKlQM?si=_YBwUfx5XY6GEJXW"
  },
  {
    title: "Love Story Video",
    label: "Love Story",
    youtubeUrl: "https://youtu.be/D_G-9hgCxNA?si=N95BSWtKK4_jyLul"
  },
  {
    title: "Cinematic Wedding Preview",
    label: "Cinematic Preview",
    youtubeUrl: "https://youtu.be/mwVzvIxv-pw?si=nY_zzKJLVyYJgVcl"
  },
  {
    title: "Wedding Trailer",
    label: "Wedding Trailer",
    youtubeUrl: "https://youtu.be/_0taQStHSQI?si=FMGy401gKMRDoo1Q"
  },
  {
    title: "Full Wedding Story",
    label: "Full Wedding Story",
    youtubeUrl: "https://youtu.be/3zEiytT21rk?si=ysdB1QMz8XBd20v3"
  }
];
var reviews = [
  {
    date: "February 25, 2024",
    title: "Just Kiss",
    name: "Isuru & Hiruni",
    image: asset("img (7).jpeg"),
    text: "JB WEDDINGS definitely has an eye for special shots and the final work was amazing. He is patient, creative, and very supportive throughout the day. We would recommend him for any special occasion."
  },
  {
    date: "March 04, 2025",
    title: "Whispers In The Dusk",
    name: "Janith & Bhagya",
    image: asset("img (112).jpeg"),
    text: "They treated us with care and support throughout the day. We felt comfortable working with them and received a beautiful collection of memories."
  },
  {
    date: "April 18, 2025",
    title: "Aesthetic Gallery",
    name: "Dhammika & Kaveesha",
    image: asset("img (17).jpeg"),
    text: "Absolutely, highly recommended. Words can hardly describe how incredible the final gallery was. Every photo felt artistic, emotional, and beautifully edited."
  },
  {
    date: "May 12, 2025",
    title: "Love Story",
    name: "Nethmi & Avishka",
    image: asset("img (70).jpeg"),
    text: "The whole experience felt relaxed and natural. They captured real smiles, little details, and emotional moments without making anything feel forced."
  },
  {
    date: "June 02, 2025",
    title: "Golden Hour",
    name: "Sachini & Pasindu",
    image: asset("img (67).jpeg"),
    text: "Professional, kind, and very supportive from planning to delivery. Our families loved the photographs and we will treasure them for years."
  },
  {
    date: "June 24, 2025",
    title: "Forever Begins",
    name: "Tharushi & Kavindu",
    image: asset("img (90).jpeg"),
    text: "From the first conversation to the final album, everything was handled with so much patience. The images were elegant, warm, and timeless."
  },
  {
    date: "July 12, 2025",
    title: "Timeless Frames",
    name: "Dinithi & Ravindu",
    image: asset("img (108).jpeg"),
    text: "They saw the quiet moments we did not even notice. The final collection told the full story of our wedding day in such a beautiful way."
  }
];
var socialLinks = [
  {
    name: "Facebook",
    url: site.facebook
  },
  {
    name: "Instagram",
    url: site.instagram
  },
  {
    name: "TikTok",
    url: site.tiktok
  },
  {
    name: "YouTube",
    url: site.youtube
  }
];
var contactIntro = {
  title: "Hey, It's Jagath!",
  subtitle: "Stay Connected & Check Out My Work!",
  text: "Stay updated with our latest wedding stories, films, reels, and photography work. Let\u2019s create magic together.",
  hashtag: "#JBWeddings"
};
var faqs = [
  { question: "How far in advance should we book?", answer: "Popular wedding dates can fill quickly, so we recommend contacting us 6 to 12 months in advance. For pre-shoots and smaller events, 4 to 8 weeks is often enough." },
  { question: "Do you travel outside Colombo?", answer: "Yes. We photograph weddings and celebrations throughout Sri Lanka, and destination coverage can also be arranged. Travel details will be included clearly in your quotation." },
  { question: "Can we book both photography and wedding films?", answer: "Yes. Combined photography and cinematic-film coverage gives your team one coordinated timeline and a consistent storytelling style throughout the day." },
  { question: "Will our photographs be professionally edited?", answer: "Every delivered photograph is carefully selected and professionally colour-corrected in our signature timeless style. Detailed retouching is applied where appropriate." },
  { question: "How do we confirm our date?", answer: "Your date is confirmed after we agree on the coverage, complete the booking details, and receive the reservation payment. We will then guide you through planning and timelines." }
];

// src/components/Hero/Hero.jsx
function Hero() {
  const heroRef = (0, import_react2.useRef)(null);
  const [active, setActive] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    if (!heroImages.length) return;
    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
    const images = heroRef.current?.querySelectorAll(".heroMedia img") || [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const touchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    const smoothing = touchDevice ? 72 : 90;
    let frameId = 0;
    let lastTime = 0;
    let targetProgress = 0;
    let renderedProgress = 0;
    let initialized = false;
    const readProgress = () => {
      const hero = heroRef.current;
      if (!hero) return 0;
      const stageHeight = window.innerHeight;
      const scrollDistance = Math.max(hero.offsetHeight - stageHeight, 1);
      return Math.min(
        Math.max(-hero.getBoundingClientRect().top / scrollDistance, 0),
        1
      );
    };
    const paintSlides = (progress) => {
      const slideProgress = progress * (heroImages.length - 1);
      images.forEach((image, index) => {
        image.style.setProperty("--slide-y", `${(index - slideProgress) * 100}%`);
      });
      const nextActive = Math.min(
        heroImages.length - 1,
        Math.round(slideProgress)
      );
      setActive((current) => current === nextActive ? current : nextActive);
    };
    const animateSlides = (time) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 34) : 16;
      lastTime = time;
      const difference = targetProgress - renderedProgress;
      const blend = reduceMotion ? 1 : 1 - Math.exp(-elapsed / smoothing);
      renderedProgress += difference * blend;
      if (Math.abs(difference) < 1e-4) {
        renderedProgress = targetProgress;
      }
      paintSlides(renderedProgress);
      if (renderedProgress !== targetProgress) {
        frameId = window.requestAnimationFrame(animateSlides);
      } else {
        frameId = 0;
        lastTime = 0;
      }
    };
    const requestUpdate = (reset = false) => {
      targetProgress = readProgress();
      if (!initialized || reset || reduceMotion) {
        initialized = true;
        renderedProgress = targetProgress;
        paintSlides(renderedProgress);
      }
      if (!frameId && renderedProgress !== targetProgress) {
        frameId = window.requestAnimationFrame(animateSlides);
      }
    };
    const handleScroll = () => requestUpdate();
    const handleResize = () => requestUpdate(true);
    requestUpdate(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);
  const scrollToSlide = (index) => {
    const hero = heroRef.current;
    if (!hero) return;
    const heroTop = hero.getBoundingClientRect().top + window.scrollY;
    const slideDistance = (hero.offsetHeight - window.innerHeight) / Math.max(heroImages.length - 1, 1);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: heroTop + slideDistance * index,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "section",
    {
      className: "hero",
      id: "home",
      ref: heroRef,
      style: { "--hero-slides": heroImages.length }
    },
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroStage" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroMedia", "aria-hidden": "true" }, heroImages.map((image, index) => /* @__PURE__ */ import_react2.default.createElement(
      "img",
      {
        src: image,
        alt: "",
        key: image,
        style: { "--slide-y": `${index * 100}%` },
        loading: index === 0 ? "eager" : "lazy",
        decoding: "async"
      }
    ))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroOverlay" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroBlur" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroDots", "aria-label": "Choose hero photograph" }, heroImages.map((image, index) => /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        className: index === active ? "isActive" : "",
        "aria-label": `Show photograph ${index + 1}`,
        "aria-pressed": index === active,
        onClick: () => scrollToSlide(index),
        key: `dot-${image}`
      }
    ))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroContent" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "heroEyebrow" }, "Wedding Photography"), /* @__PURE__ */ import_react2.default.createElement("h1", { className: "heroTitle" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "Wedding photographs"), /* @__PURE__ */ import_react2.default.createElement("span", null, "that feel like you.")), /* @__PURE__ */ import_react2.default.createElement("p", { className: "heroDescription" }, "Honest moments, beautiful details, and memories you can return to for a lifetime."), /* @__PURE__ */ import_react2.default.createElement("div", { className: "heroActions" }, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#portfolio", className: "heroBtn heroBtnDark" }, "View Gallery ", /* @__PURE__ */ import_react2.default.createElement("span", null, "\u203A")), /* @__PURE__ */ import_react2.default.createElement("a", { href: "#contact", className: "heroBtn heroBtnOutline" }, "Check Availability ", /* @__PURE__ */ import_react2.default.createElement("span", null, "\u203A")))))
  );
}
var Hero_default = Hero;

// src/components/ExperienceSlider/ExperienceSlider.jsx
var import_react3 = __toESM(require_react(), 1);
function ExperienceSlider({ onNavigate }) {
  const goToAbout = (event, sectionId) => {
    event.preventDefault();
    onNavigate("about", sectionId);
  };
  return /* @__PURE__ */ import_react3.default.createElement("section", { className: "experience", "data-animate": true }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceLeft" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceMainSlider" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceMainTrack" }, experienceMainImages.map((image, index) => /* @__PURE__ */ import_react3.default.createElement(
    "img",
    {
      src: image.src,
      alt: image.alt,
      key: `main-${image.src}-${index}`
    }
  )))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceFloatingImage" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceSliderTrack" }, experienceFloatingImages.map((image, index) => /* @__PURE__ */ import_react3.default.createElement(
    "img",
    {
      src: image.src,
      alt: image.alt,
      key: `floating-${image.src}-${index}`
    }
  ))))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceContent" }, /* @__PURE__ */ import_react3.default.createElement("p", { className: "eyebrow" }, "The JB Experience"), /* @__PURE__ */ import_react3.default.createElement("h2", null, "Experience the art of photography"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Our photography process is designed to be seamless and enjoyable. From the moment you book your session to the final delivery, we prioritize your needs and preferences."), /* @__PURE__ */ import_react3.default.createElement("p", null, "Let us turn your vision into reality with our expert guidance, emotional storytelling, and artistic touch."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "experienceActions" }, /* @__PURE__ */ import_react3.default.createElement(
    "a",
    {
      href: "/about#behind-the-lens",
      className: "experienceBtn experienceBtnDark",
      onClick: (event) => goToAbout(event, "behind-the-lens")
    },
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "btnText" }, "Read more"),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "btnArrow" }, "\u203A")
  ), /* @__PURE__ */ import_react3.default.createElement(
    "a",
    {
      href: "/#services",
      className: "experienceBtn experienceBtnLight",
      onClick: (event) => {
        event.preventDefault();
        onNavigate("home", "services");
      }
    },
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "btnText" }, "Our Services"),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "btnArrow" }, "\u203A")
  ))));
}
var ExperienceSlider_default = ExperienceSlider;

// src/components/AboutServices/AboutServices.jsx
var import_react4 = __toESM(require_react(), 1);
function AboutServices() {
  const [activeService, setActiveService] = (0, import_react4.useState)(0);
  return /* @__PURE__ */ import_react4.default.createElement("section", { className: "aboutServicesNew section", id: "services", "data-animate": true }, /* @__PURE__ */ import_react4.default.createElement("header", { className: "aboutServicesNewHeader" }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("p", { className: "eyebrow" }, "The JB WEDDINGS experience"), /* @__PURE__ */ import_react4.default.createElement("h2", null, "Choose your coverage.")), /* @__PURE__ */ import_react4.default.createElement("p", null, "Photography and films shaped around your celebration.")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "aboutServiceAccordion" }, services.map((service, index) => {
    const isActive = activeService === index;
    return /* @__PURE__ */ import_react4.default.createElement(
      "article",
      {
        className: `aboutServiceAccordionCard ${isActive ? "is-active" : ""}`,
        onMouseEnter: () => setActiveService(index),
        key: service.title
      },
      /* @__PURE__ */ import_react4.default.createElement("img", { src: service.image, alt: service.alt }),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "aboutServiceAccordionShade" }),
      /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          className: "aboutServiceTrigger",
          type: "button",
          "aria-expanded": isActive,
          onClick: () => setActiveService(index),
          onFocus: () => setActiveService(index)
        },
        /* @__PURE__ */ import_react4.default.createElement("strong", null, service.title)
      ),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "aboutServiceExpanded", "aria-hidden": !isActive }, /* @__PURE__ */ import_react4.default.createElement("h3", null, service.title), /* @__PURE__ */ import_react4.default.createElement("p", null, service.text), /* @__PURE__ */ import_react4.default.createElement("a", { href: "#contact" }, "Check availability"))
    );
  })));
}
var AboutServices_default = AboutServices;

// src/components/BrandRail/BrandRail.jsx
var import_react5 = __toESM(require_react(), 1);

// src/components/Portfolio/Portfolio.jsx
var import_react6 = __toESM(require_react(), 1);
function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = (0, import_react6.useState)(null);
  const [touchPreviewIndex, setTouchPreviewIndex] = (0, import_react6.useState)(null);
  (0, import_react6.useEffect)(() => {
    portfolio.forEach((item) => {
      const image = new Image();
      image.src = item.hoverImage;
    });
  }, []);
  const handleMouseEnter = (index) => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setHoveredIndex(index);
    }
  };
  const handleTouchPreview = (index) => {
    setHoveredIndex(null);
    setTouchPreviewIndex((current) => current === index ? null : index);
  };
  return /* @__PURE__ */ import_react6.default.createElement("section", { className: "portfolio section", id: "portfolio", "data-animate": true }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "sectionHeader" }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("p", { className: "eyebrow" }, "Featured Projects"), /* @__PURE__ */ import_react6.default.createElement("h2", null, "Stories worth remembering")), /* @__PURE__ */ import_react6.default.createElement("a", { href: "#portfolioGrid" }, "View Portfolio")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "portfolioGrid", id: "portfolioGrid" }, portfolio.map((item, index) => {
    const isPreviewing = hoveredIndex === index || touchPreviewIndex === index;
    return /* @__PURE__ */ import_react6.default.createElement(
      "article",
      {
        className: `project${item.layout ? ` project--${item.layout}` : ""}`,
        key: item.title,
        onMouseEnter: () => handleMouseEnter(index),
        onMouseLeave: () => setHoveredIndex(null),
        onTouchEnd: () => handleTouchPreview(index),
        "data-previewing": touchPreviewIndex === index,
        style: { "--project-delay": `${index * 80}ms` }
      },
      /* @__PURE__ */ import_react6.default.createElement(
        "span",
        {
          className: `projectImageTrack${isPreviewing ? " is-previewing" : ""}`
        },
        /* @__PURE__ */ import_react6.default.createElement(
          "img",
          {
            src: item.image,
            alt: item.alt,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ import_react6.default.createElement(
          "img",
          {
            src: item.hoverImage,
            alt: "",
            loading: "lazy"
          }
        )
      ),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "projectShade" }),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "projectContent" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "projectMeta" }, item.tag), /* @__PURE__ */ import_react6.default.createElement("span", { className: "projectTitle" }, item.title))
    );
  })));
}
var Portfolio_default = Portfolio;

// src/components/WeddingChapters/WeddingChapters.jsx
var import_react7 = __toESM(require_react(), 1);
var chapters = [
  {
    title: "Preparations",
    text: "The anticipation, thoughtful details, and quiet moments before the celebration begins.",
    image: "/assets/img%20(72).jpeg",
    alt: "Bride being prepared before her wedding ceremony"
  },
  {
    title: "Ceremony",
    text: "Every meaningful ritual, joyful glance, and promise documented with care and respect.",
    image: "/assets/img%20(4).jpeg",
    alt: "Wedding couple sharing a meaningful ceremony moment"
  },
  {
    title: "Portraits",
    text: "Relaxed direction and honest connection shaped into elegant, timeless wedding portraits.",
    image: "/assets/img%20(115).jpeg",
    alt: "Elegant bride and groom wedding portrait"
  },
  {
    title: "Celebration",
    text: "Laughter, movement, and the people you love\u2014preserved exactly as the evening felt.",
    image: "/assets/img%20(140).jpeg",
    alt: "Newlyweds celebrating together at their wedding reception"
  }
];
function WeddingChapters() {
  const [revealedChapters, setRevealedChapters] = (0, import_react7.useState)([]);
  const revealChapter = (index) => {
    setRevealedChapters(
      (current) => current.includes(index) ? current : [...current, index]
    );
  };
  return /* @__PURE__ */ import_react7.default.createElement(
    "section",
    {
      className: "weddingChapters section",
      "aria-labelledby": "chapters-title",
      "data-animate": true
    },
    /* @__PURE__ */ import_react7.default.createElement("header", { className: "weddingChaptersHeader" }, /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("p", { className: "eyebrow" }, "Your story, completely remembered"), /* @__PURE__ */ import_react7.default.createElement("h2", { id: "chapters-title" }, "A wedding in four chapters.")), /* @__PURE__ */ import_react7.default.createElement("p", null, "From the first quiet preparations to the final celebration, every chapter is photographed as one honest, beautiful story.")),
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "chapterAccordion" }, chapters.map((chapter, index) => /* @__PURE__ */ import_react7.default.createElement(
      "article",
      {
        className: `chapterCard${revealedChapters.includes(index) ? " is-revealed" : ""}`,
        onPointerEnter: () => revealChapter(index),
        onTouchStart: () => revealChapter(index),
        onFocusCapture: () => revealChapter(index),
        key: chapter.title
      },
      /* @__PURE__ */ import_react7.default.createElement("img", { src: chapter.image, alt: chapter.alt }),
      /* @__PURE__ */ import_react7.default.createElement("div", { className: "chapterSolid", "aria-hidden": "true" }),
      /* @__PURE__ */ import_react7.default.createElement("div", { className: "chapterShade", "aria-hidden": "true" }),
      /* @__PURE__ */ import_react7.default.createElement("div", { className: "chapterTitle" }, /* @__PURE__ */ import_react7.default.createElement("strong", null, chapter.title)),
      /* @__PURE__ */ import_react7.default.createElement("div", { className: "chapterExpanded" }, /* @__PURE__ */ import_react7.default.createElement("p", null, chapter.text), /* @__PURE__ */ import_react7.default.createElement("a", { href: "#portfolio" }, "View photographs ", /* @__PURE__ */ import_react7.default.createElement("span", { "aria-hidden": "true" }, "\u2192")))
    )))
  );
}
var WeddingChapters_default = WeddingChapters;

// src/components/Films/Films.jsx
var import_react8 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var getYouTubeId = (url) => {
  if (!url) return "";
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/
  ];
  const match = patterns.map((pattern) => url.match(pattern)).find(Boolean);
  return match?.[1] || "";
};
function Films() {
  const preparedFilms = (0, import_react8.useMemo)(
    () => films.map((film) => {
      const youtubeId = getYouTubeId(film.youtubeUrl);
      return {
        ...film,
        youtubeId,
        thumbnail: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : ""
      };
    }),
    []
  );
  const [activeFilm, setActiveFilm] = (0, import_react8.useState)(null);
  const closeButtonRef = (0, import_react8.useRef)(null);
  const activeEmbed = activeFilm?.youtubeId ? `https://www.youtube-nocookie.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}` : "";
  (0, import_react8.useEffect)(() => {
    if (!activeFilm) return void 0;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const closeOnEscape = (event) => event.key === "Escape" && setActiveFilm(null);
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [activeFilm]);
  return /* @__PURE__ */ import_react8.default.createElement("section", { className: "films section", id: "films", "data-animate": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmsInner" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmsHeader" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmsTitleBlock" }, /* @__PURE__ */ import_react8.default.createElement("p", { className: "eyebrow" }, "Wedding Films"), /* @__PURE__ */ import_react8.default.createElement("h2", null, "Cinematic previews")), /* @__PURE__ */ import_react8.default.createElement("p", { className: "filmsIntro" }, "Watch real wedding stories shaped through movement, sound, and honest emotion."), /* @__PURE__ */ import_react8.default.createElement("a", { href: "#contact", className: "filmsHeaderBtn" }, "Request video coverage")), /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmGallery" }, preparedFilms.map((film, index) => /* @__PURE__ */ import_react8.default.createElement(
    "article",
    {
      className: "filmCard",
      style: { "--film-index": index },
      key: `${film.title}-${index}`
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        className: "filmCardMedia",
        type: "button",
        "aria-label": `Play ${film.title}`,
        onClick: () => setActiveFilm(film)
      },
      film.thumbnail ? /* @__PURE__ */ import_react8.default.createElement("img", { src: film.thumbnail, alt: `${film.title} preview` }) : /* @__PURE__ */ import_react8.default.createElement("span", { className: "filmThumbEmpty" }, "Add YouTube Link"),
      /* @__PURE__ */ import_react8.default.createElement("span", { className: "filmCardShade" }),
      /* @__PURE__ */ import_react8.default.createElement("span", { className: "filmCardPlay" }, /* @__PURE__ */ import_react8.default.createElement("b", { "aria-hidden": "true" }, "\u25B6"), /* @__PURE__ */ import_react8.default.createElement("span", null, "Play film"))
    ),
    /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmCardInfo" }, /* @__PURE__ */ import_react8.default.createElement("p", null, film.label), /* @__PURE__ */ import_react8.default.createElement("h3", null, film.title))
  )))), activeFilm && (0, import_react_dom.createPortal)(
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: "filmModal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `${activeFilm.title} video`,
        "data-lenis-prevent": "",
        onClick: () => setActiveFilm(null)
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmModalBox", onClick: (event) => event.stopPropagation() }, /* @__PURE__ */ import_react8.default.createElement("button", { ref: closeButtonRef, type: "button", className: "filmModalClose", onClick: () => setActiveFilm(null), "aria-label": "Close video" }, "\xD7"), /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmModalVideo" }, /* @__PURE__ */ import_react8.default.createElement(
        "iframe",
        {
          src: activeEmbed,
          title: `${activeFilm.title} YouTube video`,
          referrerPolicy: "strict-origin-when-cross-origin",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: true
        }
      )), /* @__PURE__ */ import_react8.default.createElement("div", { className: "filmModalInfo" }, /* @__PURE__ */ import_react8.default.createElement("p", null, activeFilm.label), /* @__PURE__ */ import_react8.default.createElement("h3", null, activeFilm.title), /* @__PURE__ */ import_react8.default.createElement("a", { className: "filmWatchLink", href: activeFilm.youtubeUrl, target: "_blank", rel: "noreferrer" }, "Watch on YouTube")))
    ),
    document.body
  ));
}
var Films_default = Films;

// src/components/Booking/Booking.jsx
var import_react9 = __toESM(require_react(), 1);

// src/components/Footer/Footer.jsx
var import_react10 = __toESM(require_react(), 1);
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);
  return /* @__PURE__ */ import_react10.default.createElement("footer", { className: "footer", id: "contact", "data-animate": true }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerTop" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerBrandBlock" }, /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#home", className: "footerLogo", "aria-label": "JB WEDDINGS home" }, /* @__PURE__ */ import_react10.default.createElement("img", { src: "/assets/jb-logo-white.png", alt: "JB WEDDINGS logo" })), /* @__PURE__ */ import_react10.default.createElement("p", { className: "footerLabel" }, "JB WEDDINGS"), /* @__PURE__ */ import_react10.default.createElement("p", { className: "footerText" }, contactIntro.text), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerCtaGroup" }, /* @__PURE__ */ import_react10.default.createElement(
    "a",
    {
      href: `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`,
      target: "_blank",
      rel: "noreferrer",
      className: "footerPrimaryBtn"
    },
    "Ask a Quote ",
    /* @__PURE__ */ import_react10.default.createElement("span", null, "\u2197")
  ), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#portfolio", className: "footerSecondaryBtn" }, "View Portfolio"))), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerColumns" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerColumn" }, /* @__PURE__ */ import_react10.default.createElement("h3", null, "Explore"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#home" }, "Home"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/about" }, "About"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#portfolio" }, "Portfolio"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#films" }, "Wedding Films"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#reviews" }, "Reviews")), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerColumn" }, /* @__PURE__ */ import_react10.default.createElement("h3", null, "Follow Us"), socialLinks.map((social) => /* @__PURE__ */ import_react10.default.createElement("a", { href: social.url, target: "_blank", rel: "noreferrer", key: social.name }, social.name))), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerColumn" }, /* @__PURE__ */ import_react10.default.createElement("h3", null, "Services"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#services" }, "Wedding Photography"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#services" }, "Wedding Videography"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#services" }, "Pre-shoot Photography"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#services" }, "Engagement Shoots"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/#services" }, "Event Coverage")))), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerBottom" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerLegal" }, /* @__PURE__ */ import_react10.default.createElement("p", null, "\xA9 ", currentYear, " ", site.name, ". All rights reserved."), /* @__PURE__ */ import_react10.default.createElement("div", { className: "footerLegalLinks" }, /* @__PURE__ */ import_react10.default.createElement("a", { href: "/privacy-policy" }, "Privacy Policy"), /* @__PURE__ */ import_react10.default.createElement("a", { href: "/terms" }, "Terms"))), /* @__PURE__ */ import_react10.default.createElement("p", null, "Designed & Developed by", " ", /* @__PURE__ */ import_react10.default.createElement(
    "a",
    {
      href: "https://www.auricodesolutions.com",
      target: "_blank",
      rel: "noreferrer"
    },
    "Auricode Solutions"
  ))));
}
var Footer_default = Footer;

// src/components/WhatsAppButton/WhatsAppButton.jsx
var import_react11 = __toESM(require_react(), 1);
var inquiryOptions = [
  { label: "Wedding Photography", subject: "wedding photography" },
  { label: "Wedding Films", subject: "wedding videography" },
  { label: "Pre-Wedding", subject: "a pre-wedding shoot" },
  { label: "Albums", subject: "wedding albums" }
];
function WhatsAppButton() {
  const widgetRef = (0, import_react11.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react11.useState)(false);
  const [selectedOption, setSelectedOption] = (0, import_react11.useState)("");
  const [draftMessage, setDraftMessage] = (0, import_react11.useState)(site.whatsappMessage);
  const message = encodeURIComponent(draftMessage.trim() || site.whatsappMessage);
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${message}`;
  const currentTime = new Intl.DateTimeFormat(void 0, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(/* @__PURE__ */ new Date());
  const selectInquiry = ({ label, subject }) => {
    setSelectedOption(label);
    setDraftMessage(
      `Hello JB WEDDINGS \u{1F44B}
I'm interested in ${subject}.
Could I get more information about your packages and availability?`
    );
  };
  (0, import_react11.useEffect)(() => {
    if (!isOpen) return void 0;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnOutsideClick = (event) => {
      if (!widgetRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappWidget", ref: widgetRef }, isOpen && /* @__PURE__ */ import_react11.default.createElement(
    "div",
    {
      className: "whatsappPanel",
      role: "dialog",
      "aria-label": "WhatsApp inquiry",
      "data-lenis-prevent": ""
    },
    /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappPanel__header" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappPanel__identity" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "whatsappPanel__avatar", "aria-hidden": "true" }, "JB"), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("strong", null, site.name), /* @__PURE__ */ import_react11.default.createElement("span", { className: "whatsappPanel__status" }, /* @__PURE__ */ import_react11.default.createElement("i", null), " Online \xB7 Usually replies in minutes"))), /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        className: "whatsappPanel__close",
        type: "button",
        onClick: () => setIsOpen(false),
        "aria-label": "Close WhatsApp message"
      },
      "\xD7"
    )),
    /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappPanel__body" }, /* @__PURE__ */ import_react11.default.createElement("p", { className: "whatsappPanel__eyebrow" }, "Wedding inquiry"), /* @__PURE__ */ import_react11.default.createElement("h2", null, "How can we help with your special day?"), /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappPanel__options", "aria-label": "Choose an inquiry type" }, inquiryOptions.map((option) => /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        type: "button",
        className: selectedOption === option.label ? "isSelected" : "",
        onClick: () => selectInquiry(option),
        "aria-pressed": selectedOption === option.label,
        key: option.label
      },
      option.label
    ))), /* @__PURE__ */ import_react11.default.createElement("label", { className: "whatsappPanel__message" }, /* @__PURE__ */ import_react11.default.createElement("span", null, "Your message"), /* @__PURE__ */ import_react11.default.createElement(
      "textarea",
      {
        value: draftMessage,
        onChange: (event) => setDraftMessage(event.target.value),
        rows: "4",
        "aria-label": "WhatsApp message"
      }
    ), /* @__PURE__ */ import_react11.default.createElement("small", null, currentTime))),
    /* @__PURE__ */ import_react11.default.createElement("div", { className: "whatsappPanel__footer" }, /* @__PURE__ */ import_react11.default.createElement(
      "a",
      {
        className: "whatsappPanel__action",
        href: whatsappUrl,
        target: "_blank",
        rel: "noreferrer"
      },
      /* @__PURE__ */ import_react11.default.createElement("span", { "aria-hidden": "true" }, "\u27A4"),
      " Continue on WhatsApp"
    ), /* @__PURE__ */ import_react11.default.createElement("p", { className: "whatsappPanel__note" }, "Your message will be ready to send in WhatsApp."))
  ), /* @__PURE__ */ import_react11.default.createElement(
    "button",
    {
      className: `whatsappButton ${isOpen ? "isOpen" : ""}`,
      type: "button",
      onClick: () => setIsOpen((open) => !open),
      "aria-label": isOpen ? "Close WhatsApp message" : "Contact JB WEDDINGS on WhatsApp",
      "aria-expanded": isOpen
    },
    /* @__PURE__ */ import_react11.default.createElement(
      "svg",
      {
        className: "whatsappButton__icon",
        viewBox: "0 0 32 32",
        "aria-hidden": "true",
        focusable: "false"
      },
      /* @__PURE__ */ import_react11.default.createElement("path", { d: "M16.04 3.2c-7.02 0-12.72 5.7-12.72 12.72 0 2.24.59 4.43 1.71 6.36L3.2 28.8l6.68-1.75a12.68 12.68 0 0 0 6.16 1.57h.01c7.01 0 12.72-5.7 12.72-12.72S23.06 3.2 16.04 3.2Zm0 23.26h-.01c-1.95 0-3.87-.52-5.55-1.5l-.4-.24-3.96 1.04 1.06-3.86-.26-.4a10.5 10.5 0 0 1-1.61-5.58c0-5.92 4.81-10.73 10.74-10.73 2.86 0 5.56 1.12 7.58 3.14a10.66 10.66 0 0 1 3.15 7.58c0 5.92-4.82 10.55-10.74 10.55Zm5.89-8.03c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-.99-2.4-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.11-1.13 2.7s1.16 3.13 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" })
    )
  ));
}
var WhatsAppButton_default = WhatsAppButton;

// src/components/JbReviews/JbReviews.jsx
var import_react12 = __toESM(require_react(), 1);
var REVIEW_INTERVAL = 8e3;
function JbReviews() {
  const [activeIndex, setActiveIndex] = (0, import_react12.useState)(0);
  const totalReviews = reviews.length;
  const activeReview = reviews[activeIndex];
  const goPrev = () => {
    setActiveIndex((prev) => prev === 0 ? totalReviews - 1 : prev - 1);
  };
  const goNext = () => {
    setActiveIndex((prev) => prev === totalReviews - 1 ? 0 : prev + 1);
  };
  (0, import_react12.useEffect)(() => {
    if (totalReviews <= 1) return void 0;
    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => prev === totalReviews - 1 ? 0 : prev + 1);
    }, REVIEW_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [activeIndex, totalReviews]);
  if (!activeReview) return null;
  return /* @__PURE__ */ import_react12.default.createElement(
    "section",
    {
      className: "jbReviews",
      id: "reviews",
      "data-animate": true,
      style: { "--review-duration": `${REVIEW_INTERVAL}ms` }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", { className: "jbReviewsInner" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "jbReviewImageBox", key: `image-${activeIndex}` }, /* @__PURE__ */ import_react12.default.createElement(
      "img",
      {
        src: activeReview.image,
        alt: `${activeReview.name} review`
      }
    )), /* @__PURE__ */ import_react12.default.createElement("div", { className: "jbReviewRight" }, /* @__PURE__ */ import_react12.default.createElement("article", { className: "jbReviewCard", key: `text-${activeIndex}` }, /* @__PURE__ */ import_react12.default.createElement("p", { className: "jbReviewDate" }, activeReview.date), /* @__PURE__ */ import_react12.default.createElement("h2", null, activeReview.title), /* @__PURE__ */ import_react12.default.createElement("p", { className: "jbReviewText" }, activeReview.text), /* @__PURE__ */ import_react12.default.createElement("p", { className: "jbReviewName" }, activeReview.name)), /* @__PURE__ */ import_react12.default.createElement("div", { className: "jbReviewControls" }, /* @__PURE__ */ import_react12.default.createElement("button", { type: "button", onClick: goPrev, "aria-label": "Previous review" }, /* @__PURE__ */ import_react12.default.createElement("span", { className: "controlLine" }), /* @__PURE__ */ import_react12.default.createElement("span", { className: "controlArrow" }, "\u2039")), /* @__PURE__ */ import_react12.default.createElement("button", { type: "button", onClick: goNext, "aria-label": "Next review" }, /* @__PURE__ */ import_react12.default.createElement("span", { className: "controlLine" }), /* @__PURE__ */ import_react12.default.createElement("span", { className: "controlArrow" }, "\u203A"))), /* @__PURE__ */ import_react12.default.createElement("div", { className: "jbReviewProgress", key: activeIndex })))
  );
}
var JbReviews_default = JbReviews;

// src/components/FAQ/FAQ.jsx
var import_react13 = __toESM(require_react(), 1);
function FAQ() {
  const [openIndex, setOpenIndex] = (0, import_react13.useState)(0);
  return /* @__PURE__ */ import_react13.default.createElement("section", { className: "faq section", id: "faq", "data-animate": true }, /* @__PURE__ */ import_react13.default.createElement("header", { className: "faqHeader" }, /* @__PURE__ */ import_react13.default.createElement("p", { className: "eyebrow" }, "Planning your story"), /* @__PURE__ */ import_react13.default.createElement("h2", null, "Everything you need to know before your day."), /* @__PURE__ */ import_react13.default.createElement("p", null, "Quick answers to help you plan your photography and film coverage with confidence.")), /* @__PURE__ */ import_react13.default.createElement("div", { className: "faqList" }, faqs.map((item, index) => {
    const isOpen = openIndex === index;
    const answerId = `faq-answer-${index}`;
    return /* @__PURE__ */ import_react13.default.createElement("article", { className: `faqItem ${isOpen ? "isOpen" : ""}`, key: item.question }, /* @__PURE__ */ import_react13.default.createElement("h3", null, /* @__PURE__ */ import_react13.default.createElement("button", { type: "button", "aria-expanded": isOpen, "aria-controls": answerId, onClick: () => setOpenIndex(isOpen ? null : index) }, /* @__PURE__ */ import_react13.default.createElement("span", null, item.question), /* @__PURE__ */ import_react13.default.createElement("i", { "aria-hidden": "true" }))), /* @__PURE__ */ import_react13.default.createElement("div", { className: "faqAnswer", id: answerId, "aria-hidden": !isOpen }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("p", null, item.answer))));
  })));
}
var FAQ_default = FAQ;

// src/components/VideoCTA/VideoCTA.jsx
var import_react14 = __toESM(require_react(), 1);
function VideoCTA() {
  return /* @__PURE__ */ import_react14.default.createElement("section", { className: "videoCta", "aria-label": "Book JB WEDDINGS", "data-animate": true }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "videoCtaMedia", "aria-hidden": "true" }, /* @__PURE__ */ import_react14.default.createElement("video", { autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", poster: "/assets/img%20(172).jpeg" }, /* @__PURE__ */ import_react14.default.createElement("source", { src: "/assets/video.mp4", type: "video/mp4" }))), /* @__PURE__ */ import_react14.default.createElement("div", { className: "videoCtaOverlay" }), /* @__PURE__ */ import_react14.default.createElement("div", { className: "videoCtaPanel" }, /* @__PURE__ */ import_react14.default.createElement("p", { className: "eyebrow" }, "Your story deserves to live forever"), /* @__PURE__ */ import_react14.default.createElement("h2", null, /* @__PURE__ */ import_react14.default.createElement("span", null, "Don\u2019t let your precious"), /* @__PURE__ */ import_react14.default.createElement("span", null, "memories fade away.")), /* @__PURE__ */ import_react14.default.createElement("p", null, "Let us preserve every glance, laugh, and quiet moment in photographs and films that feel timeless."), /* @__PURE__ */ import_react14.default.createElement("a", { href: "#contact", className: "button light" }, "Book Your Date ", /* @__PURE__ */ import_react14.default.createElement("b", { "aria-hidden": "true" }, "\u2192"))));
}
var VideoCTA_default = VideoCTA;

// src/components/About/About.jsx
var import_react15 = __toESM(require_react(), 1);
function About() {
  return /* @__PURE__ */ import_react15.default.createElement("article", { className: "aboutPage" }, /* @__PURE__ */ import_react15.default.createElement(
    "section",
    {
      className: "aboutFounder section",
      id: "behind-the-lens",
      "aria-labelledby": "about-title",
      "data-animate": true
    },
    /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutFounderBackdrop", "aria-hidden": "true" }, /* @__PURE__ */ import_react15.default.createElement("img", { src: about.founderImage, alt: "" })),
    /* @__PURE__ */ import_react15.default.createElement("header", { className: "aboutFounderHeading" }, /* @__PURE__ */ import_react15.default.createElement("p", { className: "eyebrow" }, "Meet the founder"), /* @__PURE__ */ import_react15.default.createElement("h1", { id: "about-title" }, about.founderTitle), /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutFounderLine", "aria-hidden": "true" }, /* @__PURE__ */ import_react15.default.createElement("span", null), /* @__PURE__ */ import_react15.default.createElement("span", null))),
    /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutFounderGrid" }, /* @__PURE__ */ import_react15.default.createElement("figure", { className: "aboutFounderPortrait" }, /* @__PURE__ */ import_react15.default.createElement("img", { src: about.founderImage, alt: about.founderImageAlt })), /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutFounderCopy" }, /* @__PURE__ */ import_react15.default.createElement("p", { className: "aboutFounderLead" }, /* @__PURE__ */ import_react15.default.createElement("strong", null, about.founderName), " ", about.founderIntro), about.founderText.map((paragraph) => /* @__PURE__ */ import_react15.default.createElement("p", { key: paragraph }, paragraph)), /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutFounderSignature" }, /* @__PURE__ */ import_react15.default.createElement("span", null, about.founderName), /* @__PURE__ */ import_react15.default.createElement("small", null, about.founderRole))))
  ), /* @__PURE__ */ import_react15.default.createElement(
    "section",
    {
      className: "aboutWhy section",
      "aria-labelledby": "about-why-title",
      "data-animate": true
    },
    /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutWhyIntro" }, /* @__PURE__ */ import_react15.default.createElement("p", { className: "eyebrow" }, "Why choose JB WEDDINGS"), /* @__PURE__ */ import_react15.default.createElement("h2", { id: "about-why-title" }, "Your day, handled with care."), /* @__PURE__ */ import_react15.default.createElement("p", null, "A calm, personal experience and photographs that bring every feeling back.")),
    /* @__PURE__ */ import_react15.default.createElement("figure", { className: "aboutWhyVisual" }, /* @__PURE__ */ import_react15.default.createElement("img", { src: about.image, alt: about.imageAlt })),
    /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutWhyReasons" }, /* @__PURE__ */ import_react15.default.createElement("article", null, /* @__PURE__ */ import_react15.default.createElement("h3", null, "Calm guidance"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Natural direction when you need it, space to be yourselves when you do not.")), /* @__PURE__ */ import_react15.default.createElement("article", null, /* @__PURE__ */ import_react15.default.createElement("h3", null, "Real emotion"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Honest moments and meaningful details photographed without forcing the story.")), /* @__PURE__ */ import_react15.default.createElement("article", null, /* @__PURE__ */ import_react15.default.createElement("h3", null, "One creative team"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Photography and cinematic films shaped with one consistent visual approach.")), /* @__PURE__ */ import_react15.default.createElement("article", null, /* @__PURE__ */ import_react15.default.createElement("h3", null, "Made to last"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Refined, timeless imagery created to remain meaningful for generations.")))
  ), /* @__PURE__ */ import_react15.default.createElement("section", { className: "aboutStorytelling section", "data-animate": true }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutStorytellingVisual" }, /* @__PURE__ */ import_react15.default.createElement(
    "video",
    {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      poster: about.storytellingVideoPoster,
      "aria-label": "Behind the scenes reel from JB WEDDINGS"
    },
    /* @__PURE__ */ import_react15.default.createElement("source", { src: about.storytellingVideo, type: "video/mp4" })
  )), /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutStorytellingCopy" }, /* @__PURE__ */ import_react15.default.createElement("p", { className: "eyebrow" }, "The vision behind every frame"), /* @__PURE__ */ import_react15.default.createElement("h2", null, about.storytellingTitle.map((line) => /* @__PURE__ */ import_react15.default.createElement("span", { key: line }, line))), /* @__PURE__ */ import_react15.default.createElement("div", { className: "aboutStorytellingText" }, about.storytellingText.map((paragraph) => /* @__PURE__ */ import_react15.default.createElement("p", { key: paragraph }, paragraph))))));
}
var About_default = About;

// src/hooks/useSmoothScroll.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@studio-freight/lenis/dist/lenis.modern.mjs
var import_tiny_emitter = __toESM(require_tiny_emitter(), 1);
var import_virtual_scroll = __toESM(require_virtualscroll(), 1);
function e() {
  return e = Object.assign ? Object.assign.bind() : function(t2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var e2 = arguments[i2];
      for (var s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
    }
    return t2;
  }, e.apply(this, arguments);
}
function s(t2, i2) {
  let e2 = t2 % i2;
  return (i2 > 0 && e2 < 0 || i2 < 0 && e2 > 0) && (e2 += i2), e2;
}
var o = ["duration", "easing"];
var r = class {
  to(t2, i2 = {}) {
    let { duration: s2 = 1, easing: r2 = ((t3) => t3) } = i2, n2 = (function(t3, i3) {
      if (null == t3) return {};
      var e2, s3, o2 = {}, r3 = Object.keys(t3);
      for (s3 = 0; s3 < r3.length; s3++) i3.indexOf(e2 = r3[s3]) >= 0 || (o2[e2] = t3[e2]);
      return o2;
    })(i2, o);
    this.target = t2, this.fromKeys = e({}, n2), this.toKeys = e({}, n2), this.keys = Object.keys(e({}, n2)), this.keys.forEach((i3) => {
      this.fromKeys[i3] = t2[i3];
    }), this.duration = s2, this.easing = r2, this.currentTime = 0, this.isRunning = true;
  }
  stop() {
    this.isRunning = false;
  }
  raf(t2) {
    if (!this.isRunning) return;
    this.currentTime = Math.min(this.currentTime + t2, this.duration);
    const i2 = this.progress >= 1 ? 1 : this.easing(this.progress);
    this.keys.forEach((t3) => {
      const e2 = this.fromKeys[t3];
      this.target[t3] = e2 + (this.toKeys[t3] - e2) * i2;
    }), 1 === i2 && this.stop();
  }
  get progress() {
    return this.currentTime / this.duration;
  }
};
var n = class extends import_tiny_emitter.TinyEmitter {
  constructor({ duration: t2 = 1.2, easing: e2 = ((t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3))), smooth: s2 = true, mouseMultiplier: o2 = 1, smoothTouch: n2 = false, touchMultiplier: h = 2, direction: l = "vertical", gestureDirection: c = "vertical", infinite: a = false, wrapper: p = window, content: d = document.body } = {}) {
    var u, w, g;
    super(), this.onWindowResize = () => {
      this.wrapperWidth = window.innerWidth, this.wrapperHeight = window.innerHeight;
    }, this.onWrapperResize = ([t3]) => {
      if (t3) {
        const i2 = t3.contentRect;
        this.wrapperWidth = i2.width, this.wrapperHeight = i2.height;
      }
    }, this.onContentResize = ([t3]) => {
      if (t3) {
        const i2 = t3.contentRect;
        this.contentWidth = i2.width, this.contentHeight = i2.height;
      }
    }, this.onVirtualScroll = ({ deltaY: t3, deltaX: i2, originalEvent: e3 }) => {
      const s3 = !!e3.composedPath().find((t4) => t4.hasAttribute && t4.hasAttribute("data-lenis-prevent"));
      if (e3.ctrlKey || s3) return;
      if (this.smooth = e3.changedTouches ? this.smoothTouch : this.options.smooth, this.stopped) return void e3.preventDefault();
      if (!this.smooth) return;
      if (4 === e3.buttons) return;
      this.smooth && e3.preventDefault();
      let o3 = 0;
      o3 = "both" === this.gestureDirection ? i2 + t3 : "horizontal" === this.gestureDirection ? i2 : t3, this.targetScroll -= o3, this.scrollTo(this.targetScroll);
    }, this.onScroll = (t3) => {
      this.isScrolling && this.smooth || (this.targetScroll = this.scroll = this.lastScroll = this.wrapperNode[this.scrollProperty], this.notify());
    }, window.lenisVersion = "0.2.26", this.options = { duration: t2, easing: e2, smooth: s2, mouseMultiplier: o2, smoothTouch: n2, touchMultiplier: h, direction: l, gestureDirection: c, infinite: a, wrapper: p, content: d }, this.duration = t2, this.easing = e2, this.smooth = s2, this.mouseMultiplier = o2, this.smoothTouch = n2, this.touchMultiplier = h, this.direction = l, this.gestureDirection = c, this.infinite = a, this.wrapperNode = p, this.contentNode = d, this.wrapperNode.addEventListener("scroll", this.onScroll), this.wrapperNode === window ? (this.wrapperNode.addEventListener("resize", this.onWindowResize), this.onWindowResize()) : (this.wrapperHeight = this.wrapperNode.offsetHeight, this.wrapperWidth = this.wrapperNode.offsetWidth, this.wrapperObserver = new ResizeObserver(this.onWrapperResize), this.wrapperObserver.observe(this.wrapperNode)), this.contentHeight = this.contentNode.offsetHeight, this.contentWidth = this.contentNode.offsetWidth, this.contentObserver = new ResizeObserver(this.onContentResize), this.contentObserver.observe(this.contentNode), this.targetScroll = this.scroll = this.lastScroll = this.wrapperNode[this.scrollProperty], this.animate = new r();
    const m = (null == (u = navigator) || null == (w = u.userAgentData) ? void 0 : w.platform) || (null == (g = navigator) ? void 0 : g.platform) || "unknown";
    this.virtualScroll = new import_virtual_scroll.default({ el: this.wrapperNode, firefoxMultiplier: 50, mouseMultiplier: this.mouseMultiplier * (m.includes("Win") || m.includes("Linux") ? 0.84 : 0.4), touchMultiplier: this.touchMultiplier, passive: false, useKeyboard: false, useTouch: true }), this.virtualScroll.on(this.onVirtualScroll);
  }
  get scrollProperty() {
    let t2;
    return t2 = this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop", t2;
  }
  start() {
    let t2 = this.wrapperNode;
    this.wrapperNode === window && (t2 = document.documentElement), t2.classList.remove("lenis-stopped"), this.stopped = false;
  }
  stop() {
    let t2 = this.wrapperNode;
    this.wrapperNode === window && (t2 = document.documentElement), t2.classList.add("lenis-stopped"), this.stopped = true, this.animate.stop();
  }
  destroy() {
    var t2;
    this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t2 = this.wrapperObserver) || t2.disconnect(), this.contentObserver.disconnect();
  }
  get limit() {
    return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
  }
  raf(t2) {
    const i2 = t2 - (this.now || 0);
    this.now = t2, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(1e-3 * i2), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
  }
  get velocity() {
    return this.scroll - this.lastScroll;
  }
  setScroll(t2) {
    let i2 = this.infinite ? s(t2, this.limit) : t2;
    "horizontal" === this.direction ? this.wrapperNode.scrollTo(i2, 0) : this.wrapperNode.scrollTo(0, i2);
  }
  notify() {
    let t2 = this.infinite ? s(this.scroll, this.limit) : this.scroll;
    this.emit("scroll", { scroll: t2, limit: this.limit, velocity: this.velocity, direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1, progress: t2 / this.limit });
  }
  scrollTo(t2, { offset: i2 = 0, immediate: e2 = false, duration: s2 = this.duration, easing: o2 = this.easing } = {}) {
    if (null == t2 || this.stopped) return;
    let r2;
    if ("number" == typeof t2) r2 = t2;
    else if ("top" === t2 || "#top" === t2) r2 = 0;
    else if ("bottom" === t2) r2 = this.limit;
    else {
      let i3;
      if ("string" == typeof t2) i3 = document.querySelector(t2);
      else {
        if (null == t2 || !t2.nodeType) return;
        i3 = t2;
      }
      if (!i3) return;
      let e3 = 0;
      if (this.wrapperNode !== window) {
        const t3 = this.wrapperNode.getBoundingClientRect();
        e3 = "horizontal" === this.direction ? t3.left : t3.top;
      }
      const s3 = i3.getBoundingClientRect();
      r2 = ("horizontal" === this.direction ? s3.left : s3.top) + this.scroll - e3;
    }
    r2 += i2, this.targetScroll = this.infinite ? r2 : Math.max(0, Math.min(r2, this.limit)), !this.smooth || e2 ? (this.animate.stop(), this.scroll = this.lastScroll = this.targetScroll, this.setScroll(this.targetScroll)) : this.animate.to(this, { duration: s2, easing: o2, scroll: this.targetScroll });
  }
};

// src/hooks/useSmoothScroll.js
var referenceEase = (progress) => Math.min(1, 1.001 - Math.pow(2, -10 * progress));
function useSmoothScroll() {
  const lenisRef = (0, import_react16.useRef)(null);
  const scrollTo = (0, import_react16.useCallback)((target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target);
      return;
    }
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  (0, import_react16.useEffect)(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const touchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    );
    if (reducedMotion.matches || touchDevice.matches) return void 0;
    const root = document.documentElement;
    const lenis = new n({
      duration: 1.2,
      easing: referenceEase,
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      direction: "vertical",
      gestureDirection: "vertical"
    });
    let frameId = 0;
    lenisRef.current = lenis;
    root.classList.add("lenis", "lenis-smooth");
    const animate = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(animate);
    };
    const syncMenuLock = () => {
      if (document.body.classList.contains("menuLocked")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };
    const menuObserver = new MutationObserver(syncMenuLock);
    menuObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    syncMenuLock();
    frameId = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frameId);
      menuObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      root.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
    };
  }, []);
  return scrollTo;
}

// src/App.jsx
function App() {
  const smoothScrollTo = useSmoothScroll();
  const [loading, setLoading] = (0, import_react17.useState)(true);
  const [page, setPage] = (0, import_react17.useState)(
    () => window.location.pathname === "/about" ? "about" : "home"
  );
  const changePage = (targetPage) => {
    const motionDisabled = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (document.startViewTransition && !motionDisabled) {
      const transition = document.startViewTransition(() => {
        (0, import_react_dom2.flushSync)(() => setPage(targetPage));
      });
      return transition.finished.catch(() => void 0);
    }
    setPage(targetPage);
    return Promise.resolve();
  };
  const navigate = (targetPage, sectionId) => {
    const path = targetPage === "about" ? "/about" : "/";
    window.history.pushState({}, "", sectionId ? `${path}#${sectionId}` : path);
    const scrollToDestination = () => {
      window.setTimeout(() => {
        if (sectionId) {
          smoothScrollTo(document.getElementById(sectionId));
        } else {
          smoothScrollTo(0);
        }
      }, 60);
    };
    if (targetPage === page) {
      scrollToDestination();
      return;
    }
    changePage(targetPage).finally(scrollToDestination);
  };
  (0, import_react17.useEffect)(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);
  (0, import_react17.useEffect)(() => {
    const onPopState = () => {
      const targetPage = window.location.pathname === "/about" ? "about" : "home";
      changePage(targetPage);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  (0, import_react17.useEffect)(() => {
    const animatedItems = document.querySelectorAll("[data-animate]");
    const contentSelector = [
      "h2",
      "h3",
      "p",
      ".eyebrow",
      ".contactCards",
      "form",
      ".jbReviewControls"
    ].join(", ");
    const contentItems = document.querySelectorAll(
      `main section:not(.hero):not(.brandRail):not(.weddingChapters):not(.aboutServicesNew) :is(${contentSelector})`
    );
    const mediaItems = document.querySelectorAll(
      [
        "main section:not(.hero)",
        ":not(.brandRail)",
        ":not(.experience)",
        ":not(.weddingChapters)",
        ":not(.aboutServicesNew)",
        " img"
      ].join("")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02 }
    );
    animatedItems.forEach((item) => observer.observe(item));
    contentItems.forEach((item, index) => {
      item.classList.add("revealContent");
      item.style.setProperty("--reveal-delay", `${index % 5 * 70}ms`);
      observer.observe(item);
    });
    mediaItems.forEach((item, index) => {
      item.classList.add("revealMedia");
      item.style.setProperty("--reveal-delay", `${index % 4 * 80}ms`);
      observer.observe(item);
    });
    return () => {
      observer.disconnect();
      [...contentItems, ...mediaItems].forEach((item) => {
        item.classList.remove("revealContent", "revealMedia", "is-visible");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, [loading, page]);
  (0, import_react17.useEffect)(() => {
    const moveItems = document.querySelectorAll("[data-parallax]");
    const motionDisabled = window.matchMedia(
      "(prefers-reduced-motion: reduce), (hover: none)"
    ).matches;
    if (!moveItems.length || motionDisabled) return void 0;
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        const x = (pointerX / window.innerWidth - 0.5) * 2;
        const y = (pointerY / window.innerHeight - 0.5) * 2;
        moveItems.forEach((item) => {
          const speed = Number(item.dataset.parallax || 10);
          item.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });
        frameId = 0;
      });
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, loading && /* @__PURE__ */ import_react17.default.createElement("div", { className: "pageLoader", "aria-label": "Website loading" }, /* @__PURE__ */ import_react17.default.createElement("img", { src: "/assets/jb-logo-white.png", alt: "JB WEDDINGS" }), /* @__PURE__ */ import_react17.default.createElement("span", null, "JB WEDDINGS")), /* @__PURE__ */ import_react17.default.createElement(Header_default, { onNavigate: navigate }), /* @__PURE__ */ import_react17.default.createElement("main", { className: "pageView", key: page }, page === "about" ? /* @__PURE__ */ import_react17.default.createElement(About_default, null) : /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(Hero_default, null), /* @__PURE__ */ import_react17.default.createElement(ExperienceSlider_default, { onNavigate: navigate }), /* @__PURE__ */ import_react17.default.createElement(WeddingChapters_default, null), /* @__PURE__ */ import_react17.default.createElement(Portfolio_default, null), /* @__PURE__ */ import_react17.default.createElement(AboutServices_default, null), /* @__PURE__ */ import_react17.default.createElement(Films_default, null), /* @__PURE__ */ import_react17.default.createElement(JbReviews_default, null), /* @__PURE__ */ import_react17.default.createElement(VideoCTA_default, null), /* @__PURE__ */ import_react17.default.createElement(FAQ_default, null))), /* @__PURE__ */ import_react17.default.createElement(Footer_default, null), /* @__PURE__ */ import_react17.default.createElement(WhatsAppButton_default, null));
}
var App_default = App;
export {
  App_default as default
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
