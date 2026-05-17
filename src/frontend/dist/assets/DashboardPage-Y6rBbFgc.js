import { c as createLucideIcon, o, r as reactExports, d as useMyAttendanceStats, e as useMyAttendance, f as useAssignments, g as useActiveQrSession, h as useSubmitAttendance, j as jsxRuntimeExports, i as CalendarCheck, B as BookOpen, Q as QrCode, A as AttendanceStatus } from "./index-D1hpymyA.js";
import { S as Skeleton } from "./skeleton-lcrzTPQh.js";
import { u as ue } from "./index-DB64I-y1.js";
import { T as TrendingUp } from "./trending-up-GkZBnvqW.js";
import { C as Clock } from "./clock-DrHFobXm.js";
import { S as Shape, f as filterProps, a as adaptEventsOfChild, A as Animate, i as interpolateNumber, L as Layer, b as isEqual, c as LabelList, m as mathSign, d as isFunction, G as Global, e as findPositionOfBar, g as getBaseValueOfBar, h as findAllByType, C as Cell, t as truncateByDomain, j as getValueByDataKey, k as getCateCoordinateOfBar, l as getTooltipItem, p as polarToCartesian, n as generateCategoricalChart, P as PolarAngleAxis, o as PolarRadiusAxis, q as formatAxisMap, R as ResponsiveContainer } from "./generateCategoricalChart-D5MuuQNO.js";
import { c as clsx } from "./clsx-DgYk2OaC.js";
import "./index-AB_M6uJB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function parseCornerRadius(cornerRadius) {
  if (typeof cornerRadius === "string") {
    return parseInt(cornerRadius, 10);
  }
  return cornerRadius;
}
function typeGuardSectorProps(option, props) {
  var cxValue = "".concat(props.cx || option.cx);
  var cx = Number(cxValue);
  var cyValue = "".concat(props.cy || option.cy);
  var cy = Number(cyValue);
  return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, props), option), {}, {
    cx,
    cy
  });
}
function RadialBarSector(props) {
  return /* @__PURE__ */ o.createElement(Shape, _extends$1({
    shapeType: "sector",
    propTransformer: typeGuardSectorProps
  }, props));
}
var _excluded = ["shape", "activeShape", "activeIndex", "cornerRadius"], _excluded2 = ["value", "background"];
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var RadialBar = /* @__PURE__ */ function(_PureComponent) {
  function RadialBar2() {
    var _this;
    _classCallCheck(this, RadialBar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, RadialBar2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(RadialBar2, _PureComponent);
  return _createClass(RadialBar2, [{
    key: "getDeltaAngle",
    value: function getDeltaAngle() {
      var _this$props = this.props, startAngle = _this$props.startAngle, endAngle = _this$props.endAngle;
      var sign = mathSign(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
      return sign * deltaAngle;
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props, shape = _this$props2.shape, activeShape = _this$props2.activeShape, activeIndex = _this$props2.activeIndex, cornerRadius = _this$props2.cornerRadius, others = _objectWithoutProperties(_this$props2, _excluded);
      var baseProps = filterProps(others, false);
      return sectors.map(function(entry, i) {
        var isActive = i === activeIndex;
        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseProps), {}, {
          cornerRadius: parseCornerRadius(cornerRadius)
        }, entry), adaptEventsOfChild(_this2.props, entry, i)), {}, {
          className: "recharts-radial-bar-sector ".concat(entry.className),
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal,
          isActive,
          option: isActive ? activeShape : shape
        });
        return /* @__PURE__ */ o.createElement(RadialBarSector, _extends({}, props, {
          key: "sector-".concat(i)
        }));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props, data = _this$props3.data, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var prevData = this.state.prevData;
      return /* @__PURE__ */ o.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radialBar-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref) {
        var t = _ref.t;
        var stepData = data.map(function(entry, index) {
          var prev = prevData && prevData[index];
          if (prev) {
            var interpolatorStartAngle = interpolateNumber(prev.startAngle, entry.startAngle);
            var interpolatorEndAngle = interpolateNumber(prev.endAngle, entry.endAngle);
            return _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: interpolatorStartAngle(t),
              endAngle: interpolatorEndAngle(t)
            });
          }
          var endAngle = entry.endAngle, startAngle = entry.startAngle;
          var interpolator = interpolateNumber(startAngle, endAngle);
          return _objectSpread(_objectSpread({}, entry), {}, {
            endAngle: interpolator(t)
          });
        });
        return /* @__PURE__ */ o.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props, data = _this$props4.data, isAnimationActive = _this$props4.isAnimationActive;
      var prevData = this.state.prevData;
      if (isAnimationActive && data && data.length && (!prevData || !isEqual(prevData, data))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(sectors) {
      var _this4 = this;
      var cornerRadius = this.props.cornerRadius;
      var backgroundProps = filterProps(this.props.background, false);
      return sectors.map(function(entry, i) {
        entry.value;
        var background = entry.background, rest = _objectWithoutProperties(entry, _excluded2);
        if (!background) {
          return null;
        }
        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
          cornerRadius: parseCornerRadius(cornerRadius)
        }, rest), {}, {
          fill: "#eee"
        }, background), backgroundProps), adaptEventsOfChild(_this4.props, entry, i)), {}, {
          index: i,
          className: clsx("recharts-radial-bar-background-sector", backgroundProps === null || backgroundProps === void 0 ? void 0 : backgroundProps.className),
          option: background,
          isActive: false
        });
        return /* @__PURE__ */ o.createElement(RadialBarSector, _extends({}, props, {
          key: "sector-".concat(i)
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, hide = _this$props5.hide, data = _this$props5.data, className = _this$props5.className, background = _this$props5.background, isAnimationActive = _this$props5.isAnimationActive;
      if (hide || !data || !data.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-area", className);
      return /* @__PURE__ */ o.createElement(Layer, {
        className: layerClass
      }, background && /* @__PURE__ */ o.createElement(Layer, {
        className: "recharts-radial-bar-background"
      }, this.renderBackground(data)), /* @__PURE__ */ o.createElement(Layer, {
        className: "recharts-radial-bar-sectors"
      }, this.renderSectors()), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(_objectSpread({}, this.props), data));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curData: nextProps.data,
          prevData: prevState.curData
        };
      }
      if (nextProps.data !== prevState.curData) {
        return {
          curData: nextProps.data
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(RadialBar, "displayName", "RadialBar");
_defineProperty(RadialBar, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  minPointSize: 0,
  hide: false,
  legendType: "rect",
  data: [],
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  forceCornerRadius: false,
  cornerIsExternal: false
});
_defineProperty(RadialBar, "getComposedData", function(_ref2) {
  var item = _ref2.item, props = _ref2.props, radiusAxis = _ref2.radiusAxis, radiusAxisTicks = _ref2.radiusAxisTicks, angleAxis = _ref2.angleAxis, angleAxisTicks = _ref2.angleAxisTicks, displayedData = _ref2.displayedData, dataKey = _ref2.dataKey, stackedData = _ref2.stackedData, barPosition = _ref2.barPosition, bandSize = _ref2.bandSize, dataStartIndex = _ref2.dataStartIndex;
  var pos = findPositionOfBar(barPosition, item);
  if (!pos) {
    return null;
  }
  var cx = angleAxis.cx, cy = angleAxis.cy;
  var layout = props.layout;
  var _item$props = item.props, children = _item$props.children, minPointSize = _item$props.minPointSize;
  var numericAxis = layout === "radial" ? angleAxis : radiusAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var cells = findAllByType(children, Cell);
  var sectors = displayedData.map(function(entry, index) {
    var value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;
    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    if (layout === "radial") {
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = innerRadius + pos.size;
      var deltaAngle = endAngle - startAngle;
      if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
        var delta = mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));
        endAngle += delta;
      }
      backgroundSector = {
        background: {
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle: props.startAngle,
          endAngle: props.endAngle
        }
      };
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = radiusAxis.scale(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      endAngle = startAngle + pos.size;
      var deltaRadius = outerRadius - innerRadius;
      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        var _delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
        outerRadius += _delta;
      }
    }
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, entry), backgroundSector), {}, {
      payload: entry,
      value: stackedData ? value : value[1],
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [getTooltipItem(item, entry)],
      tooltipPosition: polarToCartesian(cx, cy, (innerRadius + outerRadius) / 2, (startAngle + endAngle) / 2)
    });
  });
  return {
    data: sectors,
    layout
  };
});
var RadialBarChart = generateCategoricalChart({
  chartName: "RadialBarChart",
  GraphicalChild: RadialBar,
  legendContent: "children",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "radial",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function AttendanceRing({
  percentage,
  loading
}) {
  const color = percentage >= 75 ? "oklch(0.65 0.15 200)" : percentage >= 60 ? "oklch(0.65 0.2 60)" : "oklch(0.55 0.22 25)";
  const data = [{ value: percentage, fill: color }];
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-36 w-36 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 w-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        RadialBarChart,
        {
          cx: "50%",
          cy: "50%",
          innerRadius: "70%",
          outerRadius: "100%",
          data,
          startAngle: 90,
          endAngle: -270,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { type: "number", domain: [0, 100], tick: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RadialBar,
              {
                dataKey: "value",
                cornerRadius: 8,
                background: { fill: "oklch(var(--muted) / 0.5)" }
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold font-display", style: { color }, children: [
          percentage,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "attendance" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: percentage >= 75 ? "✅ Good standing" : percentage >= 60 ? "⚠️ Needs improvement" : "🚨 Below minimum" })
  ] });
}
function RecentActivityFeed({
  records,
  loading
}) {
  const recent = records.slice(0, 5);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" })
    ] }, n)) });
  }
  if (recent.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "dashboard.activity_empty_state",
        className: "py-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-10 w-10 text-muted-foreground/30 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No recent activity yet." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: recent.map((rec, i) => {
    const isPresent = rec.status === AttendanceStatus.present;
    const date = new Date(Number(rec.timestamp) / 1e6);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        "data-ocid": `dashboard.activity.item.${i + 1}`,
        className: "flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-muted/40 transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `flex-shrink-0 rounded-full p-1.5 ${isPresent ? "bg-[oklch(0.65_0.15_200/0.15)]" : "bg-destructive/10"}`,
              children: isPresent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheckBig,
                {
                  className: "h-4 w-4",
                  style: { color: "oklch(0.65 0.15 200)" }
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-destructive" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium font-mono truncate", children: rec.sessionId }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              date.toLocaleDateString(),
              " ·",
              " ",
              date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${isPresent ? "bg-[oklch(0.65_0.15_200/0.15)] text-[oklch(0.45_0.15_200)] dark:text-[oklch(0.7_0.15_200)]" : "bg-destructive/10 text-destructive"}`,
              children: isPresent ? "Present" : "Absent"
            }
          )
        ]
      },
      `${rec.sessionId}-${i}`
    );
  }) });
}
function StudentDashboard() {
  const { data: stats, isLoading: statsLoading } = useMyAttendanceStats();
  const { data: attendance = [], isLoading: attendanceLoading } = useMyAttendance();
  const { data: assignments = [] } = useAssignments();
  const { data: qrSession } = useActiveQrSession();
  const submitAttendance = useSubmitAttendance();
  const [submitting, setSubmitting] = reactExports.useState(false);
  const percentage = stats ? Math.round(stats.percentage) : 0;
  async function handleMarkAttendance() {
    if (!qrSession) return;
    setSubmitting(true);
    try {
      const success = await submitAttendance.mutateAsync({
        sessionId: qrSession.sessionId,
        token: qrSession.token
      });
      if (success) ue.success("Attendance marked successfully!");
      else ue.error("Already marked or session expired.");
    } catch {
      ue.error("Failed to mark attendance.");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-gradient-student", children: "My Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Your attendance overview and quick actions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      {
        label: "Total Periods",
        value: statsLoading ? null : String((stats == null ? void 0 : stats.totalPeriods) ?? 0),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-5 w-5" }),
        gradient: "gradient-student",
        ocid: "dashboard.total_periods_card"
      },
      {
        label: "Attended",
        value: statsLoading ? null : String((stats == null ? void 0 : stats.attendedPeriods) ?? 0),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
        gradient: "gradient-primary",
        ocid: "dashboard.attended_card"
      },
      {
        label: "Assignments",
        value: String(assignments.length),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
        gradient: "gradient-teacher",
        ocid: "dashboard.assignments_card"
      }
    ].map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": card.ocid,
        className: "glass-card p-5 flex items-center gap-4 animate-slide-up",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-11 w-11 rounded-xl ${card.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: card.icon })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            card.value === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-12 mb-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-display", children: card.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: card.label })
          ] })
        ]
      },
      card.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "dashboard.attendance_pct",
          className: "glass-card p-6 flex flex-col items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold self-start text-sm uppercase tracking-wide text-muted-foreground", children: "Attendance Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceRing, { percentage, loading: statsLoading }),
            !statsLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full grid grid-cols-2 gap-3 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 px-3 py-2 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold font-display", children: String((stats == null ? void 0 : stats.attendedPeriods) ?? 0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Attended" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 px-3 py-2 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold font-display", children: String((stats == null ? void 0 : stats.totalPeriods) ?? 0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "dashboard.qr_section",
          className: "glass-card p-6 flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Active QR Session" })
            ] }),
            qrSession ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 text-center w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Course" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: qrSession.courseName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 font-mono truncate", children: qrSession.sessionId }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                  "Expires:",
                  " ",
                  new Date(
                    Number(qrSession.expiresAt) / 1e6
                  ).toLocaleTimeString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "dashboard.mark_attendance_button",
                  onClick: handleMarkAttendance,
                  disabled: submitting,
                  className: "w-full py-3 rounded-xl gradient-student text-white font-semibold transition-smooth hover:opacity-90 disabled:opacity-60 glow-student",
                  children: submitting ? "Marking…" : "✓ Mark My Attendance"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "dashboard.no_qr_empty_state",
                className: "flex-1 flex flex-col items-center justify-center text-center gap-3 py-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-muted/60 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-8 w-8 text-muted-foreground/40" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "No Active Session" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Ask your teacher to start a QR session to mark attendance." })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Recent Attendance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5", children: [
          "Last ",
          Math.min(attendance.length, 5),
          " records"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RecentActivityFeed, { records: attendance, loading: attendanceLoading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Recent Assignments" })
      ] }),
      assignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "dashboard.assignments_empty_state",
          className: "py-8 text-center text-sm text-muted-foreground",
          children: "No assignments yet."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: assignments.slice(0, 3).map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `dashboard.assignment.item.${i + 1}`,
          className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/60 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg gradient-teacher flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Due:",
                " ",
                new Date(
                  Number(a.dueDate) / 1e6
                ).toLocaleDateString()
              ] })
            ] })
          ]
        },
        String(a.id)
      )) })
    ] })
  ] });
}
export {
  StudentDashboard as default
};
