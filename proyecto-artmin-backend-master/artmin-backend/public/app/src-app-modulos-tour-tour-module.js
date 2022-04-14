(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modulos-tour-tour-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js ***!
  \*******************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/bidi.js");










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */



function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
    var computedStyle = getComputedStyle(element);
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    var propertyIndex = transitionedProperties.indexOf(property);
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets a mutable version of an element's bounding `ClientRect`. */
function getMutableClientRect(element) {
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    var top = rect.top, right = rect.right, bottom = rect.bottom, left = rect.left, width = rect.width, height = rect.height;
    var xThreshold = width * threshold;
    var yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Keeps track of the scroll position and dimensions of the parents of an element. */
var ParentPositionTracker = /** @class */ (function () {
    function ParentPositionTracker(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /** Cached positions of the scrollable parent elements. */
        this.positions = new Map();
    }
    /** Clears the cached positions. */
    ParentPositionTracker.prototype.clear = function () {
        this.positions.clear();
    };
    /** Caches the positions. Should be called at the beginning of a drag sequence. */
    ParentPositionTracker.prototype.cache = function (elements) {
        var _this = this;
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach(function (element) {
            _this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        });
    };
    /** Handles scrolling while a drag is taking place. */
    ParentPositionTracker.prototype.handleScroll = function (event) {
        var target = event.target;
        var cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        var scrolledParentNode = target === this._document ? target.documentElement : target;
        var scrollPosition = cachedPosition.scrollPosition;
        var newTop;
        var newLeft;
        if (target === this._document) {
            var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = target.scrollTop;
            newLeft = target.scrollLeft;
        }
        var topDifference = scrollPosition.top - newTop;
        var leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach(function (position, node) {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        });
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    };
    return ParentPositionTracker;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options that can be used to bind a passive event listener. */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: true });
/** Options that can be used to bind an active event listener. */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
var DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /** CSS `transform` that is applied to the element while it's being dragged. */
        this._activeTransform = { x: 0, y: 0 };
        /** Emits when the item is being moved. */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Subscription to pointer movement events. */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the event that is dispatched when the user lifts their pointer. */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the viewport being scrolled. */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the viewport being resized. */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Cached reference to the boundary element. */
        this._boundaryElement = null;
        /** Whether the native dragging interactions have been enabled on the root element. */
        this._nativeInteractionsEnabled = true;
        /** Elements that can be used to drag the draggable item. */
        this._handles = [];
        /** Registered handles that are currently disabled. */
        this._disabledHandles = new Set();
        /** Layout direction of the item. */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /** Emits as the drag sequence is being prepared. */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user starts dragging the item. */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                var targetHandle = _this._handles.find(function (handle) {
                    var target = event.target;
                    return !!target && (target === handle || handle.contains(target));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
        this._pointerMove = function (event) {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            var pointerPosition = _this._getPointerPositionOnPage(event);
            if (!_this._hasStartedDragging) {
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + _this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run(function () { return _this._startDragSequence(event); });
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(pointerPosition);
            _this._hasMoved = true;
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
        this._pointerUp = function (event) {
            _this._endDragSequence(event);
        };
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: function (value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    DragRef.prototype.getPlaceholderElement = function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    DragRef.prototype.getRootElement = function () {
        return this._rootElement;
    };
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */
    DragRef.prototype.getVisibleElement = function () {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    };
    /** Registers the handles that can be used to drag the element. */
    DragRef.prototype.withHandles = function (handles) {
        this._handles = handles.map(function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle); });
        this._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        this._toggleNativeDragInteractions();
        return this;
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    DragRef.prototype.withPreviewTemplate = function (template) {
        this._previewTemplate = template;
        return this;
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    DragRef.prototype.withPlaceholderTemplate = function (template) {
        this._placeholderTemplate = template;
        return this;
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    DragRef.prototype.withRootElement = function (rootElement) {
        var _this = this;
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);
        if (element !== this._rootElement) {
            if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
            }
            this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this._pointerDown, passiveEventListenerOptions);
            });
            this._initialTransform = undefined;
            this._rootElement = element;
        }
        return this;
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    DragRef.prototype.withBoundaryElement = function (boundaryElement) {
        var _this = this;
        this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;
        this._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(function () { return _this._containInsideBoundaryOnResize(); });
        }
        return this;
    };
    /** Removes the dragging functionality from the DOM element. */
    DragRef.prototype.dispose = function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = null;
    };
    /** Checks whether the element is currently being dragged. */
    DragRef.prototype.isDragging = function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    DragRef.prototype.reset = function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    DragRef.prototype.disableHandle = function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    DragRef.prototype.enableHandle = function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    DragRef.prototype.withDirection = function (direction) {
        this._direction = direction;
        return this;
    };
    /** Sets the container that the item is part of. */
    DragRef.prototype._withDropContainer = function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    DragRef.prototype.getFreeDragPosition = function () {
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    DragRef.prototype.setFreeDragPosition = function (value) {
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform.x = value.x;
        this._passiveTransform.y = value.y;
        if (!this._dropContainer) {
            this._applyRootElementTransform(value.x, value.y);
        }
        return this;
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    DragRef.prototype._sortFromLastPointerPosition = function () {
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
        }
    };
    /** Unsubscribes from the global subscriptions. */
    DragRef.prototype._removeSubscriptions = function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    DragRef.prototype._destroyPreview = function () {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = null;
    };
    /** Destroys the placeholder element and its ViewRef. */
    DragRef.prototype._destroyPlaceholder = function () {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = null;
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    DragRef.prototype._endDragSequence = function (event) {
        var _this = this;
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            });
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run(function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            });
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    DragRef.prototype._startDragSequence = function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        var dropContainer = this._dropContainer;
        if (dropContainer) {
            var element = this._rootElement;
            var parent_1 = element.parentNode;
            var preview = this._preview = this._createPreviewElement();
            var placeholder = this._placeholder = this._createPlaceholderElement();
            var anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent_1.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent_1.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this._initialContainer = this._initialIndex = undefined;
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    DragRef.prototype._initializeDragSequence = function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        var isDragging = this.isDragging();
        var isTouchSequence = isTouchEvent(event);
        var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
        var rootElement = this._rootElement;
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
            _this._updateOnScroll(scrollEvent);
        });
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        var previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    DragRef.prototype._cleanupDragArtifacts = function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            var container = _this._dropContainer;
            var currentIndex = container.getItemIndex(_this);
            var pointerPosition = _this._getPointerPositionOnPage(event);
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialIndex,
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance, _this._initialIndex);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    DragRef.prototype._updateActiveDropContainer = function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: _this._dropContainer });
                _this._dropContainer.exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = newContainer;
                _this._dropContainer.enter(_this, x, y, newContainer === _this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? _this._initialIndex : undefined);
                _this.entered.next({
                    item: _this,
                    container: newContainer,
                    currentIndex: newContainer.getItemIndex(_this)
                });
            });
        }
        this._dropContainer._startScrollingIfNecessary(x, y);
        this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    DragRef.prototype._createPreviewElement = function () {
        var previewConfig = this._previewTemplate;
        var previewClass = this.previewClass;
        var previewTemplate = previewConfig ? previewConfig.template : null;
        var preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            var element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: "" + (this._config.zIndex || 1000)
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) { return preview.classList.add(className); });
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                var handler = (function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                });
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                var timeout = setTimeout(handler, duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    DragRef.prototype._createPlaceholderElement = function () {
        var placeholderConfig = this._placeholderTemplate;
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    DragRef.prototype._getPointerPositionInElement = function (referenceElement, event) {
        var elementRect = this._rootElement.getBoundingClientRect();
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        var scrollPosition = this._getViewportScrollPosition();
        var x = point.pageX - referenceRect.left - scrollPosition.left;
        var y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    DragRef.prototype._getPointerPositionOnPage = function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        var scrollPosition = this._getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    DragRef.prototype._getConstrainedPointerPosition = function (point) {
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            var boundaryRect = this._boundaryRect;
            var previewRect = this._previewRect;
            var minY = boundaryRect.top + pickupY;
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            var minX = boundaryRect.left + pickupX;
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    DragRef.prototype._updatePointerDirectionDelta = function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        var delta = this._pointerDirectionDelta;
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        var changeX = Math.abs(x - positionSinceLastChange.x);
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    DragRef.prototype._toggleNativeDragInteractions = function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    DragRef.prototype._removeRootElementListeners = function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    DragRef.prototype._applyRootElementTransform = function (x, y) {
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    DragRef.prototype._getDragDistance = function (currentPosition) {
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    DragRef.prototype._cleanupCachedDimensions = function () {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    DragRef.prototype._containInsideBoundaryOnResize = function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        var elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        var leftOverflow = boundaryRect.left - elementRect.left;
        var rightOverflow = elementRect.right - boundaryRect.right;
        var topOverflow = boundaryRect.top - elementRect.top;
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    /** Gets the drag start delay, based on the event type. */
    DragRef.prototype._getDragStartDelay = function (event) {
        var value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    };
    /** Updates the internal state of the draggable element when scrolling has occurred. */
    DragRef.prototype._updateOnScroll = function (event) {
        var scrollDifference = this._parentPositions.handleScroll(event);
        // ClientRect dimensions are based on the page's scroll position so
        // we have to update the cached boundary ClientRect if the user has scrolled.
        if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }
    };
    /** Gets the scroll position of the viewport. */
    DragRef.prototype._getViewportScrollPosition = function () {
        var cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/** Creates a deep clone of an element. */
function deepCloneNode(node) {
    var clone = node.cloneNode(true);
    var descendantsWithId = clone.querySelectorAll('[id]');
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/** Clamps a value between a minimum and a maximum. */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the element into which the drag preview should be inserted. */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
    var rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return rootNodes[0];
    }
    var wrapper = _document.createElement('div');
    rootNodes.forEach(function (node) { return wrapper.appendChild(node); });
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
    target.style.width = sourceRect.width + "px";
    target.style.height = sourceRect.height + "px";
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
    var from = clamp$1(fromIndex, array.length - 1);
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    var target = array[from];
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    var from = clamp$1(currentIndex, currentArray.length - 1);
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/** Clamps a number between zero and a maximum. */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
var DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /** Whether starting a dragging sequence from this container is disabled. */
        this.disabled = false;
        /** Whether sorting items within the list is disabled. */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /** Emits right before dragging has started. */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user drops an item inside the container. */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Whether an item in the list is being dragged. */
        this._isDragging = false;
        /** Cache of the dimensions of all the items inside the container. */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: null, delta: 0 };
        /** Drop lists that are connected to the current one. */
        this._siblings = [];
        /** Direction in which the list is oriented. */
        this._orientation = 'vertical';
        /** Connected siblings that currently have a dragged item. */
        this._activeSiblings = new Set();
        /** Layout direction of the drop list. */
        this._direction = 'ltr';
        /** Subscription to the window being scrolled. */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Vertical direction in which the list is currently scrolling. */
        this._verticalScrollDirection = 0 /* NONE */;
        /** Horizontal direction in which the list is currently scrolling. */
        this._horizontalScrollDirection = 0 /* NONE */;
        /** Used to signal to the current auto-scroll sequence when to stop. */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
        this._cachedShadowRoot = null;
        /** Starts the interval that'll auto-scroll the element. */
        this._startScrollInterval = function () {
            _this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._stopScrollTimers))
                .subscribe(function () {
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
        };
        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /** Removes the drop list functionality from the DOM element. */
    DropListRef.prototype.dispose = function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = null;
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    DropListRef.prototype.isDragging = function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    DropListRef.prototype.start = function () {
        var _this = this;
        var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
        styles.scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     */
    DropListRef.prototype.enter = function (item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        var newIndex;
        if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
            if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
        }
        else {
            newIndex = index;
        }
        var activeDraggables = this._activeDraggables;
        var currentIndex = activeDraggables.indexOf(item);
        var placeholder = item.getPlaceholderElement();
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            var element = newPositionReference.getRootElement();
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
                element.insertBefore(placeholder, activeDraggables[0].getRootElement());
                activeDraggables.unshift(item);
            }
            else {
                element.appendChild(placeholder);
                activeDraggables.push(item);
            }
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed and also parent rects.
        this._cacheItemPositions();
        this._cacheParentPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    DropListRef.prototype.exit = function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @param previousIndex Index of the item when dragging started.
     *
     * @breaking-change 11.0.0 `previousIndex` parameter to become required.
     */
    DropListRef.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item: item,
            currentIndex: currentIndex,
            previousIndex: previousIndex,
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    DropListRef.prototype.withItems = function (items) {
        var _this = this;
        var previousItems = this._draggables;
        this._draggables = items;
        items.forEach(function (item) { return item._withDropContainer(_this); });
        if (this.isDragging()) {
            var draggedItems = previousItems.filter(function (item) { return item.isDragging(); });
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every(function (item) { return items.indexOf(item) === -1; })) {
                this._reset();
            }
            else {
                this._cacheItems();
            }
        }
        return this;
    };
    /** Sets the layout direction of the drop list. */
    DropListRef.prototype.withDirection = function (direction) {
        this._direction = direction;
        return this;
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    DropListRef.prototype.connectedTo = function (connectedTo) {
        this._siblings = connectedTo.slice();
        return this;
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    DropListRef.prototype.withOrientation = function (orientation) {
        this._orientation = orientation;
        return this;
    };
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @param elements Elements that can be scrolled.
     */
    DropListRef.prototype.withScrollableParents = function (elements) {
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        this._scrollableElements =
            elements.indexOf(element) === -1 ? Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])([element], elements) : elements.slice();
        return this;
    };
    /** Gets the scrollable parents that are registered with this drop container. */
    DropListRef.prototype.getScrollableParents = function () {
        return this._scrollableElements;
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    DropListRef.prototype.getItemIndex = function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    DropListRef.prototype.isReceiving = function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    DropListRef.prototype._sortItem = function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        var siblings = this._itemPositions;
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        var isHorizontal = this._orientation === 'horizontal';
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        var siblingAtNewPosition = siblings[newIndex];
        var currentPosition = siblings[currentIndex].clientRect;
        var newPosition = siblingAtNewPosition.clientRect;
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            var isDraggedItem = sibling.drag === item;
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    DropListRef.prototype._startScrollingIfNecessary = function (pointerX, pointerY) {
        var _this = this;
        if (this.autoScrollDisabled) {
            return;
        }
        var scrollNode;
        var verticalScrollDirection = 0 /* NONE */;
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach(function (position, element) {
            var _a;
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === _this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__read"])(getElementScrollDirections(element, position.clientRect, pointerX, pointerY), 2), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = element;
                }
            }
        });
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            var _a = this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
            }
            else {
                this._stopScrolling();
            }
        }
    };
    /** Stops any currently-running auto-scroll sequences. */
    DropListRef.prototype._stopScrolling = function () {
        this._stopScrollTimers.next();
    };
    /** Caches the positions of the configured scrollable parents. */
    DropListRef.prototype._cacheParentPositions = function () {
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = this._parentPositions.positions.get(element).clientRect;
    };
    /** Refreshes the position cache of the items and sibling containers. */
    DropListRef.prototype._cacheItemPositions = function () {
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            var elementToMeasure = drag.getVisibleElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    DropListRef.prototype._reset = function () {
        var _this = this;
        this._isDragging = false;
        var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) {
            var rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    DropListRef.prototype._getSiblingOffsetPx = function (currentIndex, siblings, delta) {
        var isHorizontal = this._orientation === 'horizontal';
        var currentPosition = siblings[currentIndex].clientRect;
        var immediateSibling = siblings[currentIndex + delta * -1];
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            var start = isHorizontal ? 'left' : 'top';
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    DropListRef.prototype._getItemOffsetPx = function (currentPosition, newPosition, delta) {
        var isHorizontal = this._orientation === 'horizontal';
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Checks if pointer is entering in the first position
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     */
    DropListRef.prototype._shouldEnterAsFirstChild = function (pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        var itemPositions = this._itemPositions;
        var isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        var reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            var firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = function (item, pointerX, pointerY, delta) {
        var _this = this;
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        });
    };
    /** Caches the current items in the list and their positions. */
    DropListRef.prototype._cacheItems = function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    DropListRef.prototype._isOverContainer = function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    DropListRef.prototype._getSiblingContainerFromPosition = function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    DropListRef.prototype._canReceive = function (item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    DropListRef.prototype._startReceiving = function (sibling) {
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    DropListRef.prototype._stopReceiving = function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    DropListRef.prototype._listenToScrollEvents = function () {
        var _this = this;
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
            if (_this.isDragging()) {
                var scrollDifference_1 = _this._parentPositions.handleScroll(event);
                if (scrollDifference_1) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    _this._itemPositions.forEach(function (_a) {
                        var clientRect = _a.clientRect;
                        adjustClientRect(clientRect, scrollDifference_1.top, scrollDifference_1.left);
                    });
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    _this._itemPositions.forEach(function (_a) {
                        var drag = _a.drag;
                        if (_this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    });
                }
            }
            else if (_this.isReceiving()) {
                _this._cacheParentPositions();
            }
        });
    };
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */
    DropListRef.prototype._getShadowRoot = function () {
        if (!this._cachedShadowRoot) {
            var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    };
    return DropListRef;
}());
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @param array Array in which to look for matches.
 * @param predicate Function used to determine whether an item is a match.
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    var verticalScrollDirection = 0 /* NONE */;
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        var scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        var scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event options that can be used to bind an active, capturing event. */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /** Registered drop container instances. */
        this._dropInstances = new Set();
        /** Registered drag item instances. */
        this._dragInstances = new Set();
        /** Drag item instances that are currently being dragged. */
        this._activeDragInstances = new Set();
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the viewport has been scrolled while the user is dragging an item. */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    DragDropRegistry.prototype.registerDropContainer = function (drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    DragDropRegistry.prototype.registerDragItem = function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    DragDropRegistry.prototype.removeDropContainer = function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    DragDropRegistry.prototype.removeDragItem = function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    DragDropRegistry.prototype.startDragging = function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            var isTouchEvent = event.type.startsWith('touch');
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next(e); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next(e); },
                options: true
            })
                .set('scroll', {
                handler: function (e) { return _this.scroll.next(e); },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    DragDropRegistry.prototype.stopDragging = function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    DragDropRegistry.prototype.isDragging = function (drag) {
        return this._activeDragInstances.has(drag);
    };
    DragDropRegistry.prototype.ngOnDestroy = function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    DragDropRegistry.prototype._clearGlobalListeners = function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) { return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
    return DragDropRegistry;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default configuration to be used when creating a `DragRef`. */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    DragDrop.prototype.createDrag = function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    DragDrop.prototype.createDropList = function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
DragDrop.ɵfac = function DragDrop_Factory(t) { return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] }, { type: DragDropRegistry }]; }, null); })();
    return DragDrop;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Handle that can be used to drag and CdkDrag instance. */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /** Emits when the state of the handle has changed. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    CdkDragHandle.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) { return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8)); };
CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragHandle, selectors: [["", "cdkDragHandle", ""]], hostAttrs: [1, "cdk-drag-handle"], inputs: { disabled: ["cdkDragHandleDisabled", "disabled"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_PARENT]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
        }] }); })();
    return CdkDragHandle;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) { return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPlaceholder, selectors: [["ng-template", "cdkDragPlaceholder", ""]], inputs: { data: "data" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return CdkDragPlaceholder;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    Object.defineProperty(CdkDragPreview.prototype, "matchSize", {
        /** Whether the preview should preserve the same size as the item that is being dragged. */
        get: function () { return this._matchSize; },
        set: function (value) { this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        matchSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { matchSize: "matchSize", data: "data" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPreview]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return CdkDragPreview;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
/**
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 * @docs-private
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
/** Element that can be moved inside a CdkDropList container. */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(
    /** Element that the draggable is attached to. */
    element, 
    /** Droppable container that the draggable is a part of. */
    dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user starts dragging the item. */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    CdkDrag.prototype.getPlaceholderElement = function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    CdkDrag.prototype.getRootElement = function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    CdkDrag.prototype.reset = function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    CdkDrag.prototype.getFreeDragPosition = function () {
        return this._dragRef.getFreeDragPosition();
    };
    CdkDrag.prototype.ngAfterViewInit = function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (handles) {
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])(handles.map(function (item) {
                    return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(item));
                })));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        });
    };
    CdkDrag.prototype.ngOnChanges = function (changes) {
        var rootSelectorChange = changes['rootElementSelector'];
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    CdkDrag.prototype.ngOnDestroy = function () {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    CdkDrag.prototype._updateRootElement = function () {
        var element = this.element.nativeElement;
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    CdkDrag.prototype._getBoundaryElement = function () {
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    CdkDrag.prototype._syncInputs = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                var dir = _this._dir;
                var dragStartDelay = _this.dragStartDelay;
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    matchSize: _this._previewTemplate.matchSize,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref.previewClass = _this.previewClass;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /** Handles the events from the underlying `DragRef`. */
    CdkDrag.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        });
    };
    /** Assigns the default input values based on a provided config object. */
    CdkDrag.prototype._assignDefaults = function (config) {
        var lockAxis = config.lockAxis, dragStartDelay = config.dragStartDelay, constrainPosition = config.constrainPosition, previewClass = config.previewClass, boundaryElement = config.boundaryElement, draggingDisabled = config.draggingDisabled, rootElementSelector = config.rootElementSelector;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    };
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPlaceholder,] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragConstrainPosition',] }],
        previewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragPreviewClass',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragMoved',] }]
    };
CdkDrag.ɵfac = function CdkDrag_Factory(t) { return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDrag, selectors: [["", "cdkDrag", ""]], contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    } }, hostAttrs: [1, "cdk-drag"], hostVars: 4, hostBindings: function CdkDrag_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    } }, inputs: { disabled: ["cdkDragDisabled", "disabled"], dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], lockAxis: ["cdkDragLockAxis", "lockAxis"], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], data: ["cdkDragData", "data"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, exportAs: ["cdkDrag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DROP_LIST]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
        }], released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
        }], moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
        }], dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
        }], constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
        }], previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
        }], boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
        }], rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
        }], _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkDragHandle, { descendants: true }]
        }], _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPreview]
        }], _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPlaceholder]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
        }], freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
        }] }); })();
    return CdkDrag;
}());
/** Gets the closest ancestor of an element that matches a selector. */
function getClosestMatchingAncestor(element, selector) {
    var currentElement = element.parentElement;
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            currentElement.msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /** Drop lists registered inside the group. */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    CdkDropListGroup.prototype.ngOnDestroy = function () {
        this._items.clear();
    };
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) { return new (t || CdkDropListGroup)(); };
CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropListGroup, selectors: [["", "cdkDropListGroup", ""]], inputs: { disabled: ["cdkDropListGroupDisabled", "disabled"] }, exportAs: ["cdkDropListGroup"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup'
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
        }] }); })();
    return CdkDropListGroup;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique ids for drop zones. */
var _uniqueIdCounter = 0;
var ɵ0 = undefined;
/** Container that wraps a set of draggable items. */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _dir, _group, 
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    _scrollDispatcher, config) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /** Emits when the list has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter++;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /** Emits when the user drops an item inside the container. */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: function (value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Registers an items with the drop list. */
    CdkDropList.prototype.addItem = function (item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Removes an item from the drop list. */
    CdkDropList.prototype.removeItem = function (item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    };
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    CdkDropList.prototype.getSortedItems = function () {
        return Array.from(this._unsortedItems).sort(function (a, b) {
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
    };
    CdkDropList.prototype.ngOnDestroy = function () {
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.start = function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.enter = function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.exit = function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    CdkDropList.prototype.getItemIndex = function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    CdkDropList.prototype._setupInputSyncSubscription = function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    CdkDropList._dropLists.find(function (list) { return list.id === drop; }) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!_this._scrollableParentsResolved && _this._scrollDispatcher) {
                var scrollableParents = _this._scrollDispatcher
                    .getAncestorScrollContainers(_this.element)
                    .map(function (scrollable) { return scrollable.getElementRef().nativeElement; });
                _this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                _this._scrollableParentsResolved = true;
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    CdkDropList.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._syncItemsWithRef();
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /** Assigns the default input values based on a provided config object. */
    CdkDropList.prototype._assignDefaults = function (config) {
        var lockAxis = config.lockAxis, draggingDisabled = config.draggingDisabled, sortingDisabled = config.sortingDisabled, listAutoScrollDisabled = config.listAutoScrollDisabled, listOrientation = config.listOrientation;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    };
    /** Syncs up the registered drag items with underlying drop list ref. */
    CdkDropList.prototype._syncItemsWithRef = function () {
        this._dropListRef.withItems(this.getSortedItems().map(function (item) { return item._dragRef; }));
    };
    /** Keeps track of the drop lists that are currently on the page. */
    CdkDropList._dropLists = [];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] }
    ]; };
    CdkDropList.propDecorators = {
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListSorted',] }]
    };
CdkDropList.ɵfac = function CdkDropList_Factory(t) { return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8)); };
CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropList, selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]], hostAttrs: [1, "cdk-drop-list"], hostVars: 7, hostBindings: function CdkDropList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    } }, inputs: { connectedTo: ["cdkDropListConnectedTo", "connectedTo"], id: "id", enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"], disabled: ["cdkDropListDisabled", "disabled"], sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"], autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"], orientation: ["cdkDropListOrientation", "orientation"], lockAxis: ["cdkDropListLockAxis", "lockAxis"], data: ["cdkDropListData", "data"] }, outputs: { dropped: "cdkDropListDropped", entered: "cdkDropListEntered", exited: "cdkDropListExited", sorted: "cdkDropListSorted" }, exportAs: ["cdkDropList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Prevent child drop lists from picking up the same group as their parent.
            { provide: CdkDropListGroup, useValue: ɵ0 },
            { provide: CDK_DROP_LIST, useExisting: CdkDropList },
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CdkDropListGroup, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: CdkDropListGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }]; }, { connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
        }], sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
        }], autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
        }] }); })();
    return CdkDropList;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DragDropModule });
DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, providers: [
        DragDrop,
    ], imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, { declarations: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            }]
    }], function () { return []; }, null); })();
    return DragDropModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=drag-drop.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p-autoComplete\n      [(ngModel)]=\"recintoSeleccionado\"\n      [suggestions]=\"arregloRecintos\"\n      (completeMethod)=\"filtrarRecintos($event)\"\n      [size]=\"25\"\n      [minLength]=\"1\"\n      [placeholder]='\"Seleccione el tipo\"'\n      [emptyMessage]=\"'No hay registros'\"\n      (onSelect)=\"enviarRecintoSeleccionado($event)\"\n      [dropdown]=\"true\"\n      (onClear)=\"limpiarBusqueda()\"\n      (onUnselect)=\"deseleccionarRecinto()\"\n      [disabled]=\"deshabilitar\"\n      field=\"nombre\">\n      <ng-template let-recinto pTemplate=\"item\">\n        {{recinto.nombre}}\n      </ng-template>\n    </p-autoComplete>\n  </div>\n  <div class=\"col-sm-12\">\n    <small\n      id=\"busquedaRolHelp\"\n      class=\"form-text text-muted ayuda-span\">\n      {{'Filtre por tipo'}}\n    </small>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div\n    class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 justify-content-end d-flex\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"row\">\n              <div class=\"\">\n                <button\n                  class=\"btn btn-success\"\n                  (click)=\"abrirModalCrearEditarTourLugar()\"\n                  style=\"float:right\">\n                  <i style=\"padding-right: 0%;\" class=\"fas fa-plus-circle\">\n                  </i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p-table\n        #dt\n        [rows]=\"5\"\n        [paginator]=\"true\"\n        [columns]=\"columnasTourLugaresSeleccionadas\"\n        [value]=\"tourLugaresSeleccionadas\"\n        styleClass=\"ui-table-customers\"\n        [rowHover]=\"true\"\n        [responsive]=\"true\"\n        [sortField]=\"'fecha'\"\n      >\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th\n              [style.width]=\"col.width\"\n              class=\"text-center\"\n              *ngFor=\"let col of columns\" pReorderableColumn>\n              {{col.header}}\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\" let-columns>\n          <tr>\n            <td [attr.colspan]=\"columns.length\">\n              No existen registros\n            </td>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n          <tr [pReorderableRow]=\"index\">\n            <td class=\"text-center\" *ngFor=\"let col of columns\">\n              <div *ngIf=\"col.field==='numero'\">\n                {{\n                index + 1\n                }}\n              </div>\n              <div *ngIf=\"col.field==='fecha'\">\n                {{\n                rowData.fecha\n                }}\n              </div>\n              <div *ngIf=\"col.field==='ciudad'\">\n                {{\n                rowData.lugar?.nombre\n                }}\n              </div>\n              <div *ngIf=\"col.field==='pais'\">\n                {{\n                rowData.lugar?.lugarPadre?.nombre\n                }}\n              </div>\n              <div *ngIf=\"col.field==='lugar'\">\n                {{\n                rowData.locacion\n                }}\n              </div>\n              <div *ngIf=\"col.field==='recaudacion'\">\n                {{\n                rowData.recaudacion | currency\n                }}\n              </div>\n              <div *ngIf=\"col.field==='disponibilidad'\">\n                {{\n                rowData.ticketsVendidos + ' / ' + rowData.ticketsDisponibles + ' ' + (rowData.porcentaje + '%')\n                }}\n              </div>\n              <div *ngIf=\"col.field==='acciones'\">\n                <div\n                  class=\"\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <button\n                      (click)=\"quitarTourLugar(rowData, index)\"\n                      class=\"btn btn-danger\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-trash-alt\">\n                      </i>\n                    </button>\n                    <button\n                      (click)=\"abrirModalCrearEditarTourLugar(rowData, index)\"\n                      class=\"btn btn-primary\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioSetlist\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"ui-fluid\">\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"nombre\" class=\"p-col-fixed\">Nombre *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"nombre\"\n              pInputText\n              type=\"text\"\n              formControlName=\"nombre\"\n              placeholder=\"Ingrese el nombre\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.nombre\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaInicio\" class=\"p-col-fixed\">Fecha Inicio*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaInicio\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de inicio\"\n              formControlName='fechaInicio'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaInicio\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaFin\" class=\"p-col-fixed\">Fecha Fin*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaFin\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de inicio\"\n              formControlName='fechaFin'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaFin\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"tieneActos\" class=\"p-col-fixed\">Tiene Actos *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-dropdown\n              id = \"tieneActos\"\n              [options]=\"tieneActos\"\n              [placeholder]=\"'Indique si el setlist tiene actos' \"\n              [showClear]=\"true\"\n              formControlName=\"tieneActos\"\n            ></p-dropdown>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.tieneActos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioTour\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"ui-fluid\">\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"locacion\" class=\"p-col-fixed\">Locación *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"locacion\"\n              pInputText\n              type=\"text\"\n              formControlName=\"locacion\"\n              placeholder=\"Ingrese el locacion\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.locacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"lugar\" class=\"p-col-fixed\">Ciudad *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-lugar\n              id=\"lugar\"\n              [tiposAFiltrar]=\"['ciudad']\"\n              [idsLugarAsignado]=\"[this.tourLugar?.lugar?.id]\"\n              [deshabilitar]=\"formularioTour.disabled\"\n              (emitirLugarSeleccionado)=\"escucharLugarSeleccionado($event)\"\n            ></app-autocomplete-lugar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.lugar\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"lugar\" class=\"p-col-fixed\">Recinto *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-recinto\n              id=\"recinto\"\n              [idRecinto]=\"this.tourLugar?.recinto?.id\"\n              [deshabilitar]=\"formularioTour.disabled\"\n              (emitirRecintoSeleccionado)=\"escucharRecintoSeleccionado($event)\"\n            ></app-autocomplete-recinto>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.recinto\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fecha\" class=\"p-col-fixed\">Fecha*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fecha\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha\"\n              formControlName='fecha'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fecha\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"hora\" class=\"p-col-fixed\">Hora *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"hora\"\n              pInputText\n              type=\"text\"\n              formControlName='hora'\n              placeholder=\"Ingrese la hora de la fecha del tour\"\n              [textMask]=\"{mask: mask}\"\n            >\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.hora\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"ticketsDisponibles\" class=\"p-col-fixed\">Tickets disponibles*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"ticketsDisponibles\"\n              formControlName='ticketsDisponibles'\n              placeholder=\"Ingrese la cantidad de tickets Disponibles de la fecha\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.ticketsDisponibles\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"ticketsVendidos\" class=\"p-col-fixed\">Tickets vendidos*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"ticketsVendidos\"\n              formControlName='ticketsVendidos'\n              placeholder=\"Ingrese la cantidad de tickets Disponibles de la fecha\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.ticketsVendidos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"recaudacion\" class=\"p-col-fixed\">Recaudación</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"recaudacion\"\n              [min]=\"0\"\n              mode=\"currency\" currency=\"USD\" locale=\"en-US\"\n              formControlName='recaudacion'\n              placeholder=\"Ingrese la recaudacion de la fecha\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.recaudacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"observacion\" class=\"p-col-fixed\">Observación </label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"observacion\"\n              [rows]=\"5\"\n              [cols]=\"75\"\n              pInputTextarea\n              formControlName=\"observacion\"\n              placeholder=\"Ingrese la observacion de la fecha\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.observacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"seCancelo\" class=\"p-col-fixed\">Se cancelo </label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputSwitch\n              id=\"seCancelo\"\n              formControlName=\"seCancelo\"\n              ></p-inputSwitch>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.seCancelo\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"razonCancelacion\" class=\"p-col-fixed\">Razon de cancelación </label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"razonCancelacion\"\n              [rows]=\"5\"\n              [cols]=\"75\"\n              pInputTextarea\n              formControlName=\"razonCancelacion\"\n              placeholder=\"Ingrese la razon de Cancelacion de la fecha\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.razonCancelacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioTour\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <app-input-imagen\n        [ocultarInput]=\"this.formularioTour.disabled\"\n        [pathImagen]=\"cargarImagenTour()\"\n        [width]=\"width\"\n        [height]=\"'700'\"\n        (emitirImagen)=\"escucharEventoImagen($event)\"\n      ></app-input-imagen>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"ui-fluid\">\n\n        <div class=\"p-field p-grid\">\n          <label for=\"artistas\" class=\"p-col-fixed\">Artistas *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-artista\n              id=\"artistas\"\n              [deshabilitar]=\"this.formularioTour.disabled\"\n              [arregloidsArtista]=\"idsArtista\"\n              [multiple]=\"true\"\n              (emitirArtistaSeleccionado)=\"buscarTouresPorArtista($event)\"\n            ></app-autocomplete-artista>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.artistas\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"nombre\" class=\"p-col-fixed\">Nombre *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"nombre\"\n              pInputText\n              type=\"text\"\n              formControlName=\"nombre\"\n              placeholder=\"Ingrese el nombre del tour\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.nombre\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"tipo\" class=\"p-col-fixed\">Tipo *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-dropdown\n              id = \"tipo\"\n              [options]=\"tipos\"\n              [placeholder]=\"'Busque por tipo' \"\n              optionLabel=\"key\"\n              [showClear]=\"true\"\n              formControlName=\"tipo\"\n            ></p-dropdown>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.tipo\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaInicio\" class=\"p-col-fixed\">Fecha de Inicio*</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaInicio\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de inicio del tour\"\n              formControlName='fechaInicio'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaInicio\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"lugarInicio\" class=\"p-col-fixed\">Lugar de Inicio *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"lugarInicio\"\n              pInputText\n              type=\"text\"\n              formControlName=\"lugarInicio\"\n              placeholder=\"Ingrese el lugar de inicio del tour\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.lugarInicio\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaFin\" class=\"p-col-fixed\">Fecha de Fin</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaFin\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de fin del tour\"\n              formControlName='fechaFin'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaFin\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"lugarFin\" class=\"p-col-fixed\">Lugar de Fin</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"lugarFin\"\n              pInputText\n              type=\"text\"\n              formControlName=\"lugarFin\"\n              placeholder=\"Ingrese el lugar de fin del tour\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.lugarFin\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"descripcion\" class=\"p-col-fixed\">Descripción </label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"descripcion\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"descripcion\"\n              placeholder=\"Ingrese la descripción del tour\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.descripcion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"observaciones\" class=\"p-col-fixed\">Observaciones </label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"observaciones\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"observaciones\"\n              placeholder=\"Ingrese las observaciones del tour\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.observaciones\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"sinopsis\" class=\"p-col-fixed\">Sinopsis</label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"sinopsis\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"sinopsis\"\n              placeholder=\"Ingrese la sinopsis del tour\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.sinopsis\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"cantidadShows\" class=\"p-col-fixed\">Cantidad de shows </label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"cantidadShows\"\n              [showButtons]=\"true\"\n              [min]=\"0\"\n              [step]=\"1\"\n              [useGrouping]=\"false\"\n              formControlName='cantidadShows'\n              placeholder=\"Ingrese la cantidad de shows del tour\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.cantidadShows\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"cantidadTickets\" class=\"p-col-fixed\">Cantidad de tickets</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"cantidadTickets\"\n              [showButtons]=\"true\"\n              [min]=\"0\"\n              [step]=\"1\"\n              [useGrouping]=\"false\"\n              formControlName='cantidadTickets'\n              placeholder=\"Ingrese la cantidad de tickets del tour\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.cantidadTickets\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"recaudacion\" class=\"p-col-fixed\">Recaudación</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"recaudacion\"\n              [showButtons]=\"true\"\n              [min]=\"0\"\n              formControlName='recaudacion'\n              placeholder=\"Ingrese la recaudacion del tour\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.recaudacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropListGroup>\n  <div class=\"example-container\" *ngFor=\"let actoTour of actosSetlistTour\">\n    <br>\n    <p><b>{{actoTour.nombre}}</b></p>\n    <div\n      cdkDropList\n      [cdkDropListData]=\"actoTour.cancionesSetlistTour\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let cancionSetlist of actoTour.cancionesSetlistTour\" cdkDrag>{{cancionSetlist.cancion.nombre}}</div>\n    </div>\n  </div>\n</div>\n<!--<p-table-->\n<!--  #dt-->\n<!--  [value]=\"cancionesSetlist\"-->\n<!--  sortField=\"actoTour.id\"-->\n<!--  sortMode=\"single\"-->\n<!--  [scrollable]=\"true\"-->\n<!--  scrollHeight=\"400px\"-->\n<!--  [columns]=\"columnas\"-->\n<!--  (onSort)=\"onSort()\"-->\n<!--  styleClass=\"ui-table-customers\"-->\n<!--  [rowHover]=\"true\"-->\n<!--  (onRowReorder)=\"reorder($event, dt)\"-->\n<!--&gt;-->\n<!--  <ng-template pTemplate=\"header\" let-columns>-->\n<!--    <tr>-->\n<!--      <th-->\n<!--        [style.width]=\"col.width\"-->\n<!--        class=\"text-center\"-->\n<!--        *ngFor=\"let col of columns\" pReorderableColumn>-->\n<!--        {{col.header}}-->\n<!--      </th>-->\n<!--    </tr>-->\n<!--  </ng-template>-->\n<!--  <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"  let-columns=\"columns\" >-->\n<!--    <tr [pReorderableRow]=\"rowIndex\">-->\n<!--      <td>{{rowData.posicion}}</td>-->\n<!--      <td *ngIf=\"rowGroupMetadata[rowData.actoTour.id].index === rowIndex\"-->\n<!--          [attr.rowspan]=\"rowGroupMetadata[rowData.actoTour.id].size\">-->\n<!--        {{rowData.actoTour.nombre}}-->\n<!--      </td>-->\n<!--      <td>{{rowData.cancion.nombre}}</td>-->\n<!--    </tr>-->\n\n<!--  </ng-template>-->\n<!--</p-table>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tabla-canciones-setlist works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div\n    class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 justify-content-end d-flex\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"row\">\n              <div class=\"\">\n                <button\n                  class=\"btn btn-success\"\n                  (click)=\"abrirModalCrearEditarSetlist()\"\n                  style=\"float:right\">\n                  <i style=\"padding-right: 0%;\" class=\"fas fa-plus-circle\">\n                  </i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p-table\n        #dt\n        [rows]=\"10\"\n        [paginator]=\"true\"\n        [columns]=\"columnasSetlits\"\n        [value]=\"setlists\"\n        styleClass=\"ui-table-customers\"\n        [rowHover]=\"true\"\n        [responsive]=\"true\"\n        [sortField]=\"'fechaInicio'\"\n        dataKey=\"id\"\n      >\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th style=\"width: 3%\"></th>\n            <th\n              [style.width]=\"col.width\"\n              class=\"text-center\"\n              *ngFor=\"let col of columns\" pReorderableColumn>\n              {{col.header}}\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\" let-columns>\n          <tr>\n            <td [attr.colspan]=\"columns.length\">\n              No existen registros\n            </td>\n          </tr>\n        </ng-template>\n\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\" let-expanded=\"expanded\">\n          <tr [pReorderableRow]=\"index\">\n            <td>\n              <a href=\"#\" [pRowToggler]=\"rowData\">\n                <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\n              </a>\n            </td>\n            <td class=\"text-center\" *ngFor=\"let col of columns\">\n              <div *ngIf=\"col.field==='numero'\">\n                {{\n                index + 1\n                }}\n              </div>\n              <div *ngIf=\"col.field==='nombre'\">\n                {{\n                rowData.nombre\n                }}\n              </div>\n              <div *ngIf=\"col.field==='fechaInicio'\">\n                {{\n                rowData.fechaInicio\n                }}\n              </div>\n              <div *ngIf=\"col.field==='fechaFin'\">\n                {{\n                rowData.fechaFin\n                }}\n              </div>\n              <div *ngIf=\"col.field==='acciones'\">\n                <div\n                  class=\"\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <button\n                      (click)=\"abrirModalCrearEditarSetlist(rowData, index)\"\n                      class=\"btn btn-primary\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\n\n          <tr>\n            <td [attr.colspan]=\"columns.length + 1\">\n              <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\n                <div class=\"\"\n                *ngIf=\"rowData.tieneActos\">\n                  <app-tabla-actos-setlist\n                  [tour]=\"tour\"\n                  [setlistTour]=\"rowData\"\n                  ></app-tabla-actos-setlist>\n                </div>\n                <div class=\"\"\n                     *ngIf=\"!rowData.tieneActos\">\n                  <app-tabla-canciones-setlist></app-tabla-canciones-setlist>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n  mat-dialog-title\n  class=\"text-center\"\n>\n  <span class=\"bold\">\n    {{\n    (data.setlist ? 'EDITAR' : 'REGISTRAR')  + ' SETLIST'\n    }}</span>\n</h3>\n<hr>\n<div mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios.'}}</p>\n    </div>\n    <div class=\"col-sm-12\">\n      <app-formulario-setlist\n        [setlist]=\"data.setlist\"\n        (setlistValidoEnviar)=\"validarFormulario($event)\"\n      ></app-formulario-setlist>\n    </div>\n  </div>\n</div>\n\n<mat-dialog-actions class=\"justify-content-end\">\n  <div class=\"row\">\n    <div class=\"d-flex flex-row-reverse\">\n      <div class=\"p-4\">\n        <app-boton-guardar\n          [deshabilitarBoton]=\"!formularioValido\"\n          (emitirEvento)=\"crearEditar()\">\n        </app-boton-guardar>\n      </div>\n      <div class=\"p-4\">\n        <app-boton-cancelar\n          (emitirEvento)=\"cerrarModal()\"\n        ></app-boton-cancelar>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n  mat-dialog-title\n  class=\"text-center\"\n>\n  <span class=\"bold\">\n    {{\n    data.tourLugar ? 'EDITAR FECHA DE TOUR' : 'REGISTRAR FECHA DE TOUR'\n    }}</span>\n</h3>\n<hr>\n<div mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios.'}}</p>\n    </div>\n    <div class=\"col-sm-12\">\n      <app-formulario-tour-lugar\n        [tourLugar]=\"data.tourLugar\"\n        (tourLugarValidoEnviar)=\"validarFormularioLugar($event)\"></app-formulario-tour-lugar>\n    </div>\n  </div>\n</div>\n\n<mat-dialog-actions class=\"justify-content-end\">\n  <div class=\"row\">\n    <div class=\"d-flex flex-row-reverse\">\n      <div class=\"p-3\">\n        <app-boton-guardar\n          [deshabilitarBoton]=\"!formularioValido\"\n          (emitirEvento)=\"crearEditarTourLugar()\">\n        </app-boton-guardar>\n      </div>\n      <div class=\"p-3\">\n        <app-boton-cancelar\n          (emitirEvento)=\"cerrarModal()\"\n        ></app-boton-cancelar>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row center\">\n      <div class=\"col-sm-12\">\n        <h3 class=\"text-center\">\n          {{\n          tour ? 'EDITAR TOUR' : 'CREAR TOUR'\n          }}\n        </h3>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n      <mat-horizontal-stepper\n        [linear]=\"true\"\n        #stepper>\n        <mat-step\n          [completed]=\"tour\">\n          <ng-template matStepLabel>Información del tour</ng-template>\n          <div\n            class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 justify-content-end d-flex\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"row\">\n                      <div class=\"\" *ngIf=\"!(componenteFormularioTour?.formularioTour?.disabled)\">\n                        <div\n                          class=\"d-flex flex-row-reverse\">\n                          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                            <button\n                              *ngIf=\"tour\"\n                              (click)=\"cancelarCreacionEdicion()\"\n                              class=\"btn btn-secondary\">\n                              <i style=\"padding-right: 0%\" class=\"fas fa-times\">\n\n                              </i>\n                            </button>\n                            <button\n                              [disabled]=\"!formularioValido\"\n                              (click)=\"crearEditarArtista(stepper)\"\n                              class=\"btn btn-primary\">\n                              <i style=\"padding-right: 0%\" class=\"fas fa-upload\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"\" *ngIf=\"componenteFormularioTour?.formularioTour?.disabled\">\n                        <button\n                          (click)=\"habilitarFormularioEditarTour()\"\n                          class=\"btn btn-primary\">\n                          <i style=\"padding-right: 1%\" class=\"fas fa-pencil-alt\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            *ngIf=\"!(componenteFormularioTour?.formularioTour?.disabled)\"\n            class=\"col-md-12\">\n            <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios (*). '}}</p>\n          </div>\n          <div class=\"col-sm-12\">\n            <app-formulario-tour\n              *ngIf=\"tour\"\n              [idArtista]=\"idArtista\"\n              [idsArtista]=\"idsArtista\"\n              [width]=\"70\"\n              [tour]=\"tour\"\n              (tourValidoEnviar)=\"validarFormulario($event)\"\n            >\n            </app-formulario-tour>\n            <app-formulario-tour\n              *ngIf=\"!tour\"\n              [idArtista]=\"idArtista\"\n              [idsArtista]=\"idsArtista\"\n              [width]=\"70\"\n              (tourValidoEnviar)=\"validarFormulario($event)\"\n            >\n            </app-formulario-tour>\n          </div>\n        </mat-step>\n        <mat-step\n          [completed]=\"tour\"\n        >\n          <ng-template matStepLabel>Fechas y Ciudades</ng-template>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <app-tabla-tour-lugar\n              [tour]=\"tour\"\n              [tourLugaresSeleccionadas]=\"tour?.lugaresTour\"\n              ></app-tabla-tour-lugar>\n            </div>\n          </div>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Setlists</ng-template>\n          <app-tabla-setlits-tour\n            *ngIf=\"tour\"\n            [tour]=\"tour\"\n          ></app-tabla-setlits-tour>\n        </mat-step>\n        <ng-template matStepperIcon=\"edit\">\n          <mat-icon>insert_emoticon</mat-icon>\n        </ng-template>\n        <ng-template matStepperIcon=\"number\">\n          <mat-icon>library_music</mat-icon>\n        </ng-template>\n        <ng-template matStepperIcon=\"done\">\n          <mat-icon>insert_emoticon</mat-icon>\n        </ng-template>\n\n      </mat-horizontal-stepper>\n    </div>\n    <div class=\"col-sm-1\"></div>\n  </div>\n  <br>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"text-center\">\n        <img\n          style=\"width:40px\"\n          [src]=\"rutaImagen\">\n        {{ (artista ? ('TOURS DE ' + artista.nombre) : 'GESTIÓN DE TOURS' )| uppercase}}\n      </h1>\n    </div>\n  </div>\n\n</div>\n<hr>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <app-input-buscar-boton\n      [busqueda]=\"busqueda\"\n      [placeholder]=\"'Ingrese el nombre del album. Ejemplo: Chromatica ó 2013'\"\n      [ayuda]=\"'Busque un album por su nombre o año de lanzamiento'\"\n      (emitirBusqueda)=\"escucharBusqueda($event)\">\n\n    </app-input-buscar-boton>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <app-boton-nuevo\n      (click)=\"irRutaCrearTour()\"\n    ></app-boton-nuevo>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\" style=\"padding-left: 1%; padding-right: 1%\">\n  <div [ngClass]=\"!idArtistaParams ? 'col-sm-3' : ''\" >\n    <app-autocomplete-artista\n      *ngIf=\"!idArtistaParams\"\n      [idArtista]=\"idArtista\"\n      [multiple]=\"false\"\n      (emitirArtistaSeleccionado)=\"buscarToursPorArtista($event)\"\n    ></app-autocomplete-artista>\n  </div>\n  <div [ngClass]=\"!idArtistaParams ? 'col-sm-3' : ''\" >\n      <div class=\"col-sm-12\">\n        <p-dropdown\n          [options]=\"opcionesTipoTour\"\n          [(ngModel)]=\"tipoTourSeleccionado\"\n          [placeholder]=\"'Busque por tipo' \"\n          optionLabel=\"key\"\n          (onChange)=\"buscarTourPorTipo($event.value.value)\"\n          [showClear]=\"true\"\n        ></p-dropdown>\n      </div>\n    <div class=\"col-sm-12\">\n      <small\n        id=\"busquedaRolHelp\"\n        class=\"form-text text-muted ayuda-span\">\n        Filtre el tipo de tour\n      </small>\n    </div>\n  </div>\n</div>\n\n\n\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div *ngIf=\"tours.length > 0\"\n         class=\"p-grid\">\n      <div class=\"p-col-12 p-md-6 p-lg-3\" *ngFor=\"let tour of tours\">\n        <app-menu-item-cuadrado\n          [height]=\"'700px'\"\n          [texto]=\"tour.nombre\"\n          [descripcion]=\"''\"\n          [imagen]=\"obtenerUrlPrincipal(tour)\"\n          [url]=\"obtenerRuta(tour.id)\"\n        ></app-menu-item-cuadrado>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2F1dG9jb21wbGV0ZS1yZWNpbnRvL2F1dG9jb21wbGV0ZS1yZWNpbnRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.ts ***!
  \************************************************************************************/
/*! exports provided: AutocompleteRecintoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteRecintoComponent", function() { return AutocompleteRecintoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _servicios_rest_recinto_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/rest/recinto-rest.service */ "./src/app/servicios/rest/recinto-rest.service.ts");





var AutocompleteRecintoComponent = /** @class */ (function () {
    function AutocompleteRecintoComponent(_recintoService, _toasterService) {
        this._recintoService = _recintoService;
        this._toasterService = _toasterService;
        this.emitirRecintoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AutocompleteRecintoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idRecinto) {
            var consulta = {
                where: {
                    id: this.idRecinto
                }
            };
            this._recintoService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (respuestaRecinto) {
                _this.recintoSeleccionado = respuestaRecinto[0][0];
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_3__["ToastErrorCargandoDatos"]);
            });
        }
    };
    AutocompleteRecintoComponent.prototype.filtrarRecintos = function (evento) {
        var _this = this;
        var busqueda = evento.query.trim();
        var consulta = {
            camposOr: [
                {
                    nombreCampo: 'nombre',
                    like: true,
                    valor: busqueda
                }
            ],
        };
        this._recintoService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaRecinto) {
            _this.arregloRecintos = respuestaRecinto[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_3__["ToastErrorCargandoDatos"]);
        });
    };
    AutocompleteRecintoComponent.prototype.enviarRecintoSeleccionado = function (recintoSeleccionado) {
        this.emitirRecintoSeleccionado.emit(recintoSeleccionado);
    };
    AutocompleteRecintoComponent.prototype.limpiarBusqueda = function () {
        this.emitirRecintoSeleccionado.emit(undefined);
    };
    AutocompleteRecintoComponent.prototype.deseleccionarRecinto = function () {
        this.emitirRecintoSeleccionado.emit(this.recintoSeleccionado);
    };
    AutocompleteRecintoComponent.ctorParameters = function () { return [
        { type: _servicios_rest_recinto_rest_service__WEBPACK_IMPORTED_MODULE_4__["RecintoRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], AutocompleteRecintoComponent.prototype, "idRecinto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteRecintoComponent.prototype, "deshabilitar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteRecintoComponent.prototype, "emitirRecintoSeleccionado", void 0);
    AutocompleteRecintoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-recinto',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./autocomplete-recinto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./autocomplete-recinto.component.css */ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_recinto_rest_service__WEBPACK_IMPORTED_MODULE_4__["RecintoRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], AutocompleteRecintoComponent);
    return AutocompleteRecintoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-recinto/autocomplete-recinto.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AutocompleteRecintoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteRecintoModule", function() { return AutocompleteRecintoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _autocomplete_recinto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-recinto.component */ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");






var AutocompleteRecintoModule = /** @class */ (function () {
    function AutocompleteRecintoModule() {
    }
    AutocompleteRecintoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autocomplete_recinto_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteRecintoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"]
            ],
            exports: [_autocomplete_recinto_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteRecintoComponent"]]
        })
    ], AutocompleteRecintoModule);
    return AutocompleteRecintoModule;
}());



/***/ }),

/***/ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RhYmxhLXRvdXItbHVnYXIvdGFibGEtdG91ci1sdWdhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.ts ***!
  \****************************************************************************/
/*! exports provided: TablaTourLugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaTourLugarComponent", function() { return TablaTourLugarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../servicios/rest/tour-lugar-rest.service */ "./src/app/servicios/rest/tour-lugar-rest.service.ts");








var TablaTourLugarComponent = /** @class */ (function () {
    function TablaTourLugarComponent(dialog, _tourLugarRestService, _toasterService, _cargandoService) {
        this.dialog = dialog;
        this._tourLugarRestService = _tourLugarRestService;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this.tourLugaresSeleccionadas = [];
        this.columnasTourLugaresSeleccionadas = [
            {
                field: 'numero',
                header: '#',
                width: '5%'
            },
            {
                field: 'fecha',
                header: 'Fecha',
                width: '10%'
            },
            {
                field: 'ciudad',
                header: 'Ciudad',
                width: '15%'
            },
            {
                field: 'pais',
                header: 'País',
                width: '15%'
            },
            {
                field: 'lugar',
                header: 'Lugar',
                width: '15%'
            },
            {
                field: 'disponibilidad',
                header: 'Disponiblidad',
                width: '15%'
            },
            {
                field: 'recaudacion',
                header: 'Recaudación',
                width: '10%'
            },
            {
                field: 'acciones',
                header: 'Acciones',
                width: '15%'
            },
        ];
    }
    TablaTourLugarComponent.prototype.ngOnInit = function () {
    };
    TablaTourLugarComponent.prototype.quitarTourLugar = function (rowData, index) {
        var _this = this;
        this._cargandoService.deshabiltarCargando();
        this._tourLugarRestService
            .deleteOne(rowData.id)
            .subscribe(function () {
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["toastExitoEliminar"]);
            _this._cargandoService.deshabiltarCargando();
            _this.tourLugaresSeleccionadas.splice(index, 1);
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
        this._cargandoService.deshabiltarCargando();
    };
    TablaTourLugarComponent.prototype.abrirModalCrearEditarTourLugar = function (tourLugar, index) {
        var _this = this;
        var dialogRef = this.dialog
            .open(_modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["ModalTourLugarComponent"], {
            width: '800px',
            data: {
                tourLugar: tourLugar,
                idTour: this.tour.id,
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (tourLugarCreadoEditado) {
            if (tourLugarCreadoEditado) {
                if (tourLugar) {
                    _this.tourLugaresSeleccionadas[index] = tourLugarCreadoEditado;
                }
                else {
                    _this.tourLugaresSeleccionadas.push(tourLugarCreadoEditado);
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    TablaTourLugarComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_7__["TourLugarRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_6__["CargandoService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TablaTourLugarComponent.prototype, "tour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TablaTourLugarComponent.prototype, "tourLugaresSeleccionadas", void 0);
    TablaTourLugarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-tour-lugar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-tour-lugar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-tour-lugar.component.css */ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_7__["TourLugarRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_6__["CargandoService"]])
    ], TablaTourLugarComponent);
    return TablaTourLugarComponent;
}());



/***/ }),

/***/ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.module.ts ***!
  \*************************************************************************/
/*! exports provided: TablaTourLugarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaTourLugarModule", function() { return TablaTourLugarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _tabla_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabla-tour-lugar.component */ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.component.ts");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-picklist.js");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.module */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.module.ts");
/* harmony import */ var _modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts");











var TablaTourLugarModule = /** @class */ (function () {
    function TablaTourLugarModule() {
    }
    TablaTourLugarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tabla_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["TablaTourLugarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_4__["PickListModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_5__["SegundosAMinutosHorasPipeModule"],
                _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_6__["CrearEditarCancionModule"],
                primeng__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_module__WEBPACK_IMPORTED_MODULE_9__["ModalTourLugarModule"],
            ],
            exports: [
                _tabla_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["TablaTourLugarComponent"],
            ],
            entryComponents: [
                _modulos_tour_modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_10__["ModalTourLugarComponent"],
            ]
        })
    ], TablaTourLugarModule);
    return TablaTourLugarModule;
}());



/***/ }),

/***/ "./src/app/constantes/tipos-tour.ts":
/*!******************************************!*\
  !*** ./src/app/constantes/tipos-tour.ts ***!
  \******************************************/
/*! exports provided: TIPOS_TOUR, TIPOS_TOUR_ENUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPOS_TOUR", function() { return TIPOS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPOS_TOUR_ENUM", function() { return TIPOS_TOUR_ENUM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TIPOS_TOUR = [
    {
        key: 'Gira',
        value: 'gira'
    },
    {
        key: 'Residencia',
        value: 'residencia'
    },
];
var TIPOS_TOUR_ENUM;
(function (TIPOS_TOUR_ENUM) {
    TIPOS_TOUR_ENUM["gira"] = "Gira";
    TIPOS_TOUR_ENUM["residencia"] = "Residencia";
})(TIPOS_TOUR_ENUM || (TIPOS_TOUR_ENUM = {}));


/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/setlist.ts":
/*!***************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/setlist.ts ***!
  \***************************************************************/
/*! exports provided: VALIDACION_NOMBRE_SETLIST, MENSAJES_VALIDACION_NOMBRE_SETLIST, VALIDACION_FECHA_INICIO_SETLIST, MENSAJES_VALIDACION_FECHA_INICIO_SETLIST, VALIDACION_FECHA_FIN_SETLIST, MENSAJES_VALIDACION_FECHA_FIN_SETLIST, VALIDACION_TIENE_ACTOS_SETLIST, MENSAJES_VALIDACION_TIENE_ACTOS_SETLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_NOMBRE_SETLIST", function() { return VALIDACION_NOMBRE_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_NOMBRE_SETLIST", function() { return MENSAJES_VALIDACION_NOMBRE_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_INICIO_SETLIST", function() { return VALIDACION_FECHA_INICIO_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_INICIO_SETLIST", function() { return MENSAJES_VALIDACION_FECHA_INICIO_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_FIN_SETLIST", function() { return VALIDACION_FECHA_FIN_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_FIN_SETLIST", function() { return MENSAJES_VALIDACION_FECHA_FIN_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TIENE_ACTOS_SETLIST", function() { return VALIDACION_TIENE_ACTOS_SETLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TIENE_ACTOS_SETLIST", function() { return MENSAJES_VALIDACION_TIENE_ACTOS_SETLIST; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_NOMBRE_SETLIST = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255),
];
var MENSAJES_VALIDACION_NOMBRE_SETLIST = {
    required: 'El campo nombre es obligatorio',
    minlength: 'El campo nombre debe tener mínimo 1 caracter',
    maxlength: 'El campo nombre no debe tener más de 255 caracteres'
};
var VALIDACION_FECHA_INICIO_SETLIST = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_INICIO_SETLIST = {
    required: 'El campo fecha inicio es obligatorio',
};
var VALIDACION_FECHA_FIN_SETLIST = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_FIN_SETLIST = {
    required: 'El campo fecha fin es obligatorio',
};
var VALIDACION_TIENE_ACTOS_SETLIST = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TIENE_ACTOS_SETLIST = {
    required: 'El campo tiene actos es obligatorio',
};


/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/tour-lugar.ts":
/*!******************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/tour-lugar.ts ***!
  \******************************************************************/
/*! exports provided: VALIDACION_LOCACION_TOUR_LUGAR, MENSAJES_VALIDACION_LOCACION_TOUR_LUGAR, VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR, MENSAJES_VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR, VALIDACION_SE_CANCELO_TOUR_LUGAR, MENSAJES_VALIDACION_SE_CANCELO_TOUR_LUGAR, VALIDACION_RAZON_CANCELACION_TOUR_LUGAR, MENSAJES_VALIDACION_RAZON_CANCELACION_TOUR_LUGAR, VALIDACION_RECAUDACION_TOUR_LUGAR, MENSAJES_VALIDACION_RECAUDACION_TOUR_LUGAR, VALIDACION_FECHA_TOUR_LUGAR, MENSAJES_VALIDACION_FECHA_TOUR_LUGAR, VALIDACION_HORA_TOUR_LUGAR, MENSAJES_VALIDACION_HORA_TOUR_LUGAR, VALIDACION_OBSERVACION_TOUR_LUGAR, MENSAJES_VALIDACION_OBSERVACION_TOUR_LUGAR, VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR, MENSAJES_VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR, VALIDACION_RECINTO_TOUR_LUGAR, MENSAJES_VALIDACION_RECINTO_TOUR_LUGAR, VALIDACION_LUGAR_TOUR_LUGAR, MENSAJES_VALIDACION_LUGAR_TOUR_LUGAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_LOCACION_TOUR_LUGAR", function() { return VALIDACION_LOCACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_LOCACION_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_LOCACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR", function() { return VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_SE_CANCELO_TOUR_LUGAR", function() { return VALIDACION_SE_CANCELO_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_SE_CANCELO_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_SE_CANCELO_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_RAZON_CANCELACION_TOUR_LUGAR", function() { return VALIDACION_RAZON_CANCELACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_RAZON_CANCELACION_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_RAZON_CANCELACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_RECAUDACION_TOUR_LUGAR", function() { return VALIDACION_RECAUDACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_RECAUDACION_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_RECAUDACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_TOUR_LUGAR", function() { return VALIDACION_FECHA_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_FECHA_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_HORA_TOUR_LUGAR", function() { return VALIDACION_HORA_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_HORA_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_HORA_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_OBSERVACION_TOUR_LUGAR", function() { return VALIDACION_OBSERVACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_OBSERVACION_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_OBSERVACION_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR", function() { return VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_RECINTO_TOUR_LUGAR", function() { return VALIDACION_RECINTO_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_RECINTO_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_RECINTO_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_LUGAR_TOUR_LUGAR", function() { return VALIDACION_LUGAR_TOUR_LUGAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_LUGAR_TOUR_LUGAR", function() { return MENSAJES_VALIDACION_LUGAR_TOUR_LUGAR; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_LOCACION_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
];
var MENSAJES_VALIDACION_LOCACION_TOUR_LUGAR = {
    required: 'El campo locacion es obligatorio',
    minlength: 'El campo locacion debe tener mínimo 1 caracter',
    maxlength: 'El campo locacion no debe tener más de 50 caracteres'
};
var VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR = {
    required: 'El campo tickets disponibles es obligatorio',
};
var VALIDACION_SE_CANCELO_TOUR_LUGAR = [
// Validators.required,
];
var MENSAJES_VALIDACION_SE_CANCELO_TOUR_LUGAR = {
    required: 'El campo se cancelo es obligatorio',
};
var VALIDACION_RAZON_CANCELACION_TOUR_LUGAR = [
// Validators.required,
];
var MENSAJES_VALIDACION_RAZON_CANCELACION_TOUR_LUGAR = {
    required: 'El campo razón cancelación es obligatorio',
};
var VALIDACION_RECAUDACION_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_RECAUDACION_TOUR_LUGAR = {
    required: 'El campo recaudación es obligatorio',
};
var VALIDACION_FECHA_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_TOUR_LUGAR = {
    required: 'El campo fecha es obligatorio',
};
var VALIDACION_HORA_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_HORA_TOUR_LUGAR = {
    required: 'El campo hora es obligatorio',
};
var VALIDACION_OBSERVACION_TOUR_LUGAR = [
// Validators.required,
];
var MENSAJES_VALIDACION_OBSERVACION_TOUR_LUGAR = {
    required: 'El campo observación es obligatorio',
};
var VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR = {
    required: 'El campo tickets vendidos es obligatorio',
};
var VALIDACION_RECINTO_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_RECINTO_TOUR_LUGAR = {
    required: 'El campo recinto es obligatorio',
};
var VALIDACION_LUGAR_TOUR_LUGAR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_LUGAR_TOUR_LUGAR = {
    required: 'El campo lugar es obligatorio',
};


/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/tour.ts":
/*!************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/tour.ts ***!
  \************************************************************/
/*! exports provided: VALIDACION_NOMBRE_TOUR, MENSAJES_VALIDACION_NOMBRE_TOUR, VALIDACION_DESCRIPCION_TOUR, MENSAJES_VALIDACION_DESCRIPCION_TOUR, VALIDACION_SINOPSIS_TOUR, MENSAJES_VALIDACION_SINOPSIS_TOUR, VALIDACION_OBSERVACIONES_TOUR, MENSAJES_VALIDACION_OBSERVACIONES_TOUR, VALIDACION_FECHA_INICIO_TOUR, MENSAJES_VALIDACION_FECHA_INICIO_TOUR, VALIDACION_FECHA_FIN_TOUR, MENSAJES_VALIDACION_FECHA_FIN_TOUR, VALIDACION_LUGAR_INICIO_TOUR, MENSAJES_VALIDACION_LUGAR_INICIO_TOUR, VALIDACION_LUGAR_FIN_TOUR, MENSAJES_VALIDACION_LUGAR_FIN_TOUR, VALIDACION_CANTIDAD_SHOWS_TOUR, MENSAJES_VALIDACION_CANTIDAD_SHOWS_TOUR, VALIDACION_CANTIDAD_TICKETS_TOUR, MENSAJES_VALIDACION_CANTIDAD_TICKETS_TOUR, VALIDACION_RECAAUDACION_TOUR, MENSAJES_VALIDACION_RECAUDACION_TOUR, VALIDACION_ARTISTAS_TOUR, MENSAJES_VALIDACION_ARTISTAS_TOUR, VALIDACION_IMAGEN_TOUR, MENSAJES_VALIDACION_IMAGEN_TOUR, VALIDACION_TIPO_TOUR, MENSAJES_VALIDACION_TIPO_TOUR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_NOMBRE_TOUR", function() { return VALIDACION_NOMBRE_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_NOMBRE_TOUR", function() { return MENSAJES_VALIDACION_NOMBRE_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DESCRIPCION_TOUR", function() { return VALIDACION_DESCRIPCION_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DESCRIPCION_TOUR", function() { return MENSAJES_VALIDACION_DESCRIPCION_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_SINOPSIS_TOUR", function() { return VALIDACION_SINOPSIS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_SINOPSIS_TOUR", function() { return MENSAJES_VALIDACION_SINOPSIS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_OBSERVACIONES_TOUR", function() { return VALIDACION_OBSERVACIONES_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_OBSERVACIONES_TOUR", function() { return MENSAJES_VALIDACION_OBSERVACIONES_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_INICIO_TOUR", function() { return VALIDACION_FECHA_INICIO_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_INICIO_TOUR", function() { return MENSAJES_VALIDACION_FECHA_INICIO_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_FIN_TOUR", function() { return VALIDACION_FECHA_FIN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_FIN_TOUR", function() { return MENSAJES_VALIDACION_FECHA_FIN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_LUGAR_INICIO_TOUR", function() { return VALIDACION_LUGAR_INICIO_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_LUGAR_INICIO_TOUR", function() { return MENSAJES_VALIDACION_LUGAR_INICIO_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_LUGAR_FIN_TOUR", function() { return VALIDACION_LUGAR_FIN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_LUGAR_FIN_TOUR", function() { return MENSAJES_VALIDACION_LUGAR_FIN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_CANTIDAD_SHOWS_TOUR", function() { return VALIDACION_CANTIDAD_SHOWS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_CANTIDAD_SHOWS_TOUR", function() { return MENSAJES_VALIDACION_CANTIDAD_SHOWS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_CANTIDAD_TICKETS_TOUR", function() { return VALIDACION_CANTIDAD_TICKETS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_CANTIDAD_TICKETS_TOUR", function() { return MENSAJES_VALIDACION_CANTIDAD_TICKETS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_RECAAUDACION_TOUR", function() { return VALIDACION_RECAAUDACION_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_RECAUDACION_TOUR", function() { return MENSAJES_VALIDACION_RECAUDACION_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ARTISTAS_TOUR", function() { return VALIDACION_ARTISTAS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ARTISTAS_TOUR", function() { return MENSAJES_VALIDACION_ARTISTAS_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_IMAGEN_TOUR", function() { return VALIDACION_IMAGEN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_IMAGEN_TOUR", function() { return MENSAJES_VALIDACION_IMAGEN_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TIPO_TOUR", function() { return VALIDACION_TIPO_TOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TIPO_TOUR", function() { return MENSAJES_VALIDACION_TIPO_TOUR; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_NOMBRE_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
];
var MENSAJES_VALIDACION_NOMBRE_TOUR = {
    required: 'El campo nombre es obligatorio',
    minlength: 'El campo nombre debe tener mínimo 1 caracter',
    maxlength: 'El campo nombre no debe tener más de 50 caracteres'
};
var VALIDACION_DESCRIPCION_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_DESCRIPCION_TOUR = {
    required: 'El campo sinopsis es obligatorio',
};
var VALIDACION_SINOPSIS_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_SINOPSIS_TOUR = {
    required: 'El campo sinopsis es obligatorio',
};
var VALIDACION_OBSERVACIONES_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_OBSERVACIONES_TOUR = {
    required: 'El campo observaciones es obligatorio',
};
var VALIDACION_FECHA_INICIO_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_INICIO_TOUR = {
    required: 'El campo fecha de inicio es obligatorio',
};
var VALIDACION_FECHA_FIN_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_FECHA_FIN_TOUR = {
// required: 'El campo fecha de fin es obligatorio',
};
var VALIDACION_LUGAR_INICIO_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_LUGAR_INICIO_TOUR = {
    required: 'El campo lugar de inicio es obligatorio',
};
var VALIDACION_LUGAR_FIN_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_LUGAR_FIN_TOUR = {
// required: 'El campo lugar de fin es obligatorio',
};
var VALIDACION_CANTIDAD_SHOWS_TOUR = [
// Validators.required,
];
var MENSAJES_VALIDACION_CANTIDAD_SHOWS_TOUR = {};
var VALIDACION_CANTIDAD_TICKETS_TOUR = [];
var MENSAJES_VALIDACION_CANTIDAD_TICKETS_TOUR = {};
var VALIDACION_RECAAUDACION_TOUR = [];
var MENSAJES_VALIDACION_RECAUDACION_TOUR = {};
var VALIDACION_ARTISTAS_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_ARTISTAS_TOUR = {
    required: 'El campo artistas es obligatorio',
};
var VALIDACION_IMAGEN_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_IMAGEN_TOUR = {
    required: 'La imagen  es obligatorio',
};
var VALIDACION_TIPO_TOUR = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TIPO_TOUR = {
    required: 'El campo tipo es obligatorio',
};


/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9jb21wb25lbnRlcy9mb3JtdWxhcmlvLXNldGxpc3QvZm9ybXVsYXJpby1zZXRsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormularioSetlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioSetlistComponent", function() { return FormularioSetlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/setlist */ "./src/app/constantes/validaciones-formulario/setlist.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");








var FormularioSetlistComponent = /** @class */ (function () {
    function FormularioSetlistComponent(_formBuilder, _toasterService) {
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.mensajesError = {
            nombre: [],
            fechaInicio: [],
            fechaFin: [],
            tieneActos: [],
        };
        this.subscribers = [];
        this.tieneActos = [
            {
                label: 'SI',
                value: true,
            },
            {
                label: 'NO',
                value: false,
            },
        ];
        this.setlistValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormularioSetlistComponent.prototype.ngOnInit = function () {
        this.iniciarFormulario();
    };
    FormularioSetlistComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioSetlistComponent.prototype.crearFormulario = function () {
        this.formularioSetlist = this._formBuilder.group({
            nombre: [this.setlist ? this.setlist.nombre : '', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["VALIDACION_NOMBRE_SETLIST"]],
            fechaInicio: [this.setlist ? this.setlist.fechaInicio : '', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["VALIDACION_FECHA_INICIO_SETLIST"]],
            fechaFin: [this.setlist ? this.setlist.fechaFin : '', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["VALIDACION_FECHA_FIN_SETLIST"]],
            tieneActos: [this.setlist ? this.setlist.tieneActos : '', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["VALIDACION_TIENE_ACTOS_SETLIST"]],
        });
    };
    FormularioSetlistComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('nombre', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["MENSAJES_VALIDACION_NOMBRE_SETLIST"]);
        this.verificarCampoFormControl('fechaInicio', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["MENSAJES_VALIDACION_FECHA_INICIO_SETLIST"]);
        this.verificarCampoFormControl('fechaFin', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["MENSAJES_VALIDACION_FECHA_FIN_SETLIST"]);
        this.verificarCampoFormControl('tieneActos', _constantes_validaciones_formulario_setlist__WEBPACK_IMPORTED_MODULE_5__["MENSAJES_VALIDACION_TIENE_ACTOS_SETLIST"]);
    };
    FormularioSetlistComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioSetlist.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_7__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioSetlistComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioSetlist;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var formularioValido = formularioFormGroup.valid;
            if (formularioValido) {
                _this.setlistValidoEnviar.emit(formulario);
            }
            else {
                _this.setlistValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioSetlistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioSetlistComponent.prototype, "setlist", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioSetlistComponent.prototype, "setlistValidoEnviar", void 0);
    FormularioSetlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-setlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-setlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-setlist.component.css */ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], FormularioSetlistComponent);
    return FormularioSetlistComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.module.ts ***!
  \******************************************************************************************/
/*! exports provided: FormularioSetlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioSetlistModule", function() { return FormularioSetlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_setlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-setlist.component */ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");







var FormularioSetlistModule = /** @class */ (function () {
    function FormularioSetlistModule() {
    }
    FormularioSetlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_formulario_setlist_component__WEBPACK_IMPORTED_MODULE_3__["FormularioSetlistComponent"]],
            exports: [
                _formulario_setlist_component__WEBPACK_IMPORTED_MODULE_3__["FormularioSetlistComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_6__["AlertaValidacionCampoFormularioModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
            ]
        })
    ], FormularioSetlistModule);
    return FormularioSetlistModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9jb21wb25lbnRlcy9mb3JtdWxhcmlvLXRvdXItbHVnYXIvZm9ybXVsYXJpby10b3VyLWx1Z2FyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FormularioTourLugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioTourLugarComponent", function() { return FormularioTourLugarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/tour-lugar */ "./src/app/constantes/validaciones-formulario/tour-lugar.ts");









var FormularioTourLugarComponent = /** @class */ (function () {
    function FormularioTourLugarComponent(_formBuilder, _toasterService, _artistaService) {
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this._artistaService = _artistaService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.mensajesError = {
            locacion: [],
            ticketsDisponibles: [],
            seCancelo: [],
            razonCancelacion: [],
            recaudacion: [],
            fecha: [],
            hora: [],
            observacion: [],
            ticketsVendidos: [],
            recinto: [],
            lugar: [],
        };
        this.subscribers = [];
        this.mask = [/[0-2]/, /[0-3]/, ':', /[0-5]/, /\d/, ':', /[0-5]/, /\d/];
        this.tourLugarValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormularioTourLugarComponent.prototype.ngOnInit = function () {
        this.iniciarFormulario();
    };
    FormularioTourLugarComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioTourLugarComponent.prototype.crearFormulario = function () {
        this.formularioTour = this._formBuilder.group({
            locacion: [this.tourLugar ? this.tourLugar.locacion : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_LOCACION_TOUR_LUGAR"]],
            ticketsDisponibles: [this.tourLugar ? this.tourLugar.ticketsDisponibles : 0, _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR"]],
            ticketsVendidos: [this.tourLugar ? this.tourLugar.ticketsVendidos : 0, _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR"]],
            seCancelo: [this.tourLugar ? this.tourLugar.seCancelo : 0, _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_SE_CANCELO_TOUR_LUGAR"]],
            razonCancelacion: [this.tourLugar ? this.tourLugar.razonCancelacion : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_RAZON_CANCELACION_TOUR_LUGAR"]],
            recaudacion: [this.tourLugar ? this.tourLugar.recaudacion : 0, _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_RECAUDACION_TOUR_LUGAR"]],
            fecha: [this.tourLugar ? this.tourLugar.fecha : null, _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_FECHA_TOUR_LUGAR"]],
            hora: [this.tourLugar ? this.tourLugar.hora : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_HORA_TOUR_LUGAR"]],
            observacion: [this.tourLugar ? this.tourLugar.observacion : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_OBSERVACION_TOUR_LUGAR"]],
            recinto: [this.tourLugar ? this.tourLugar.recinto : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_RECINTO_TOUR_LUGAR"]],
            lugar: [this.tourLugar ? this.tourLugar.lugar : '', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["VALIDACION_LUGAR_TOUR_LUGAR"]],
        });
    };
    FormularioTourLugarComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('locacion', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_LOCACION_TOUR_LUGAR"]);
        this.verificarCampoFormControl('ticketsDisponibles', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_TICKETS_DISPONIBLES_TOUR_LUGAR"]);
        this.verificarCampoFormControl('ticketsVendidos', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_TICKETS_VENDIDOS_TOUR_LUGAR"]);
        this.verificarCampoFormControl('seCancelo', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_SE_CANCELO_TOUR_LUGAR"]);
        this.verificarCampoFormControl('razonCancelacion', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_RAZON_CANCELACION_TOUR_LUGAR"]);
        this.verificarCampoFormControl('recaudacion', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_RECAUDACION_TOUR_LUGAR"]);
        this.verificarCampoFormControl('fecha', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_FECHA_TOUR_LUGAR"]);
        this.verificarCampoFormControl('hora', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_HORA_TOUR_LUGAR"]);
        this.verificarCampoFormControl('observacion', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_OBSERVACION_TOUR_LUGAR"]);
        this.verificarCampoFormControl('recinto', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_RECINTO_TOUR_LUGAR"]);
        this.verificarCampoFormControl('lugar', _constantes_validaciones_formulario_tour_lugar__WEBPACK_IMPORTED_MODULE_8__["MENSAJES_VALIDACION_LUGAR_TOUR_LUGAR"]);
    };
    FormularioTourLugarComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioTour.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_7__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioTourLugarComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioTour;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var artistaValido = formularioFormGroup.valid;
            if (artistaValido) {
                _this.tourLugarValidoEnviar.emit(formulario);
            }
            else {
                _this.tourLugarValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioTourLugarComponent.prototype.escucharLugarSeleccionado = function (lugarSeleccinado) {
        this.formularioTour.patchValue({
            lugar: lugarSeleccinado,
        });
    };
    FormularioTourLugarComponent.prototype.escucharRecintoSeleccionado = function (recintoSeleccionado) {
        this.formularioTour.patchValue({
            recinto: recintoSeleccionado,
        });
    };
    FormularioTourLugarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioTourLugarComponent.prototype, "tourLugar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioTourLugarComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioTourLugarComponent.prototype, "tourLugarValidoEnviar", void 0);
    FormularioTourLugarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-tour-lugar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-tour-lugar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-tour-lugar.component.css */ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"]])
    ], FormularioTourLugarComponent);
    return FormularioTourLugarComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.module.ts ***!
  \************************************************************************************************/
/*! exports provided: FormularioTourLugarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioTourLugarModule", function() { return FormularioTourLugarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-tour-lugar.component */ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pipes/safe-pipe/safe-pipe.module */ "./src/app/pipes/safe-pipe/safe-pipe.module.ts");
/* harmony import */ var _componentes_maskinput_module_maskinput_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../componentes/maskinput-module/maskinput-module.module */ "./src/app/componentes/maskinput-module/maskinput-module.module.ts");
/* harmony import */ var _componentes_autocomplete_lugar_autocomplete_lugar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/autocomplete-lugar/autocomplete-lugar.module */ "./src/app/componentes/autocomplete-lugar/autocomplete-lugar.module.ts");
/* harmony import */ var _componentes_autocomplete_recinto_autocomplete_recinto_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../componentes/autocomplete-recinto/autocomplete-recinto.module */ "./src/app/componentes/autocomplete-recinto/autocomplete-recinto.module.ts");











var FormularioTourLugarModule = /** @class */ (function () {
    function FormularioTourLugarModule() {
    }
    FormularioTourLugarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_formulario_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["FormularioTourLugarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_5__["AlertaValidacionCampoFormularioModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextareaModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["InputMaskModule"],
                _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_7__["SafePipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _componentes_maskinput_module_maskinput_module_module__WEBPACK_IMPORTED_MODULE_8__["MaskinputModuleModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
                _componentes_autocomplete_lugar_autocomplete_lugar_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLugarModule"],
                _componentes_autocomplete_recinto_autocomplete_recinto_module__WEBPACK_IMPORTED_MODULE_10__["AutocompleteRecintoModule"],
            ],
            exports: [
                _formulario_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["FormularioTourLugarComponent"],
            ]
        })
    ], FormularioTourLugarModule);
    return FormularioTourLugarModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9jb21wb25lbnRlcy9mb3JtdWxhcmlvLXRvdXIvZm9ybXVsYXJpby10b3VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormularioTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioTourComponent", function() { return FormularioTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.component */ "./src/app/componentes/input-imagen/input-imagen.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/tour */ "./src/app/constantes/validaciones-formulario/tour.ts");
/* harmony import */ var _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constantes/tipos-tour */ "./src/app/constantes/tipos-tour.ts");













var FormularioTourComponent = /** @class */ (function () {
    function FormularioTourComponent(_formBuilder, _toasterService, _artistaService) {
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this._artistaService = _artistaService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.mensajesError = {
            nombre: [],
            descripcion: [],
            sinopsis: [],
            observaciones: [],
            calificacion: [],
            fechaInicio: [],
            fechaFin: [],
            lugarInicio: [],
            lugarFin: [],
            cantidadShows: [],
            cantidadTickets: [],
            recaudacion: [],
            imagen: [],
            artistas: [],
            tipo: []
        };
        this.subscribers = [];
        this.tipos = _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_12__["TIPOS_TOUR"];
        this.tourValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormularioTourComponent.prototype.ngOnInit = function () {
        this.iniciarFormulario();
    };
    FormularioTourComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        if (this.tour) {
            this.deshabilitarFormulario();
        }
        else {
            if (this.idsArtista && this.idsArtista.length) {
                this.cargarMultiselectArtista();
            }
        }
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioTourComponent.prototype.crearFormulario = function () {
        this.formularioTour = this._formBuilder.group({
            nombre: [this.tour ? this.tour.nombre : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_NOMBRE_TOUR"]],
            descripcion: [this.tour ? this.tour.descripcion : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_DESCRIPCION_TOUR"]],
            sinopsis: [this.tour ? this.tour.sinopsis : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_SINOPSIS_TOUR"]],
            observaciones: [this.tour ? this.tour.observaciones : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_OBSERVACIONES_TOUR"]],
            fechaInicio: [this.tour ? this.tour.fechaInicio : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_FECHA_INICIO_TOUR"]],
            fechaFin: [this.tour ? this.tour.fechaFin : null, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_FECHA_FIN_TOUR"]],
            lugarInicio: [this.tour ? this.tour.lugarInicio : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_LUGAR_INICIO_TOUR"]],
            lugarFin: [this.tour ? this.tour.lugarFin : null, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_LUGAR_FIN_TOUR"]],
            cantidadShows: [this.tour ? this.tour.cantidadShows : 0, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_CANTIDAD_SHOWS_TOUR"]],
            cantidadTickets: [this.tour ? this.tour.cantidadTickets : 0, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_CANTIDAD_TICKETS_TOUR"]],
            recaudacion: [this.tour ? this.tour.recaudacion : 0, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_RECAAUDACION_TOUR"]],
            artistas: [this.tour ? this.cargarArtistasTour() : [], _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_ARTISTAS_TOUR"]],
            imagen: [this.tour ? this.cargarImagenTour() : '', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_IMAGEN_TOUR"]],
            tipo: [this.tour ? this.retornarTipo(this.tour.tipo) : null, _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_TIPO_TOUR"]]
        });
    };
    FormularioTourComponent.prototype.retornarTipo = function (tipo) {
        return {
            value: tipo,
            key: _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_12__["TIPOS_TOUR_ENUM"][tipo]
        };
    };
    FormularioTourComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('nombre', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_NOMBRE_TOUR"]);
        this.verificarCampoFormControl('descripcion', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_DESCRIPCION_TOUR"]);
        this.verificarCampoFormControl('sinopsis', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_SINOPSIS_TOUR"]);
        this.verificarCampoFormControl('observaciones', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_OBSERVACIONES_TOUR"]);
        this.verificarCampoFormControl('fechaInicio', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_FECHA_INICIO_TOUR"]);
        this.verificarCampoFormControl('fechaFin', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_FECHA_FIN_TOUR"]);
        this.verificarCampoFormControl('lugarInicio', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_LUGAR_INICIO_TOUR"]);
        this.verificarCampoFormControl('lugarFin', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_LUGAR_FIN_TOUR"]);
        this.verificarCampoFormControl('cantidadShows', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_CANTIDAD_SHOWS_TOUR"]);
        this.verificarCampoFormControl('cantidadTickets', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_CANTIDAD_TICKETS_TOUR"]);
        this.verificarCampoFormControl('recaudacion', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_RECAUDACION_TOUR"]);
        this.verificarCampoFormControl('artistas', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_ARTISTAS_TOUR"]);
        this.verificarCampoFormControl('imagen', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_IMAGEN_TOUR"]);
        this.verificarCampoFormControl('tipo', _constantes_validaciones_formulario_tour__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_TIPO_TOUR"]);
    };
    FormularioTourComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioTour.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_8__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioTourComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioTour;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var artistaValido = formularioFormGroup.valid;
            if (artistaValido) {
                _this.tourValidoEnviar.emit(formulario);
            }
            else {
                _this.tourValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioTourComponent.prototype.escucharEventoImagen = function (event) {
        this.imagenSeleccionada = event;
        this.formularioTour.patchValue({
            imagen: this.imagenSeleccionada,
        });
    };
    FormularioTourComponent.prototype.cargarImagenTour = function () {
        if (this.tour) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_10__["obtenerUrlImagenPrincipal"])(this.tour, 'imagenesTour');
        }
    };
    FormularioTourComponent.prototype.deshabilitarFormulario = function () {
        this.formularioTour.disable();
    };
    FormularioTourComponent.prototype.buscarTouresPorArtista = function (respuestaArtista) {
        this.formularioTour.patchValue({
            artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista)
        });
    };
    FormularioTourComponent.prototype.cargarMultiselectArtista = function () {
        var _this = this;
        var consulta = {
            camposIn: [
                {
                    nombreCampo: 'id',
                    valor: this.idsArtista
                }
            ],
            relations: [
                'imagenesArtista'
            ]
        };
        this._artistaService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaArtista) {
            _this.formularioTour.patchValue({
                artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista[0])
            });
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__["ToastErrorCargandoDatos"]);
        });
    };
    FormularioTourComponent.prototype.cargarArtistasTour = function () {
        return this.tour.artistasTour.map(function (artistaTour) { return artistaTour.artista; });
    };
    FormularioTourComponent.prototype.volverFormularioInicial = function () {
        this.formularioTour.patchValue({
            nombre: this.tour.nombre,
            descripcion: this.tour.descripcion,
            sinopsis: this.tour.sinopsis,
            observaciones: this.tour.observaciones,
            fechaFin: this.tour.fechaFin,
            fechaInicio: this.tour.fechaInicio,
            lugarInicio: this.tour.lugarInicio,
            lugarFin: this.tour.lugarFin,
            cantidadTickets: this.tour.cantidadTickets,
            cantidadShows: this.tour.cantidadShows,
            recaudacion: this.tour.recaudacion,
            tipo: this.tour.tipo,
            artistas: this.cargarArtistasTour(),
            imagen: this.cargarImagenTour(),
        });
        this.componenteInputImagen.pathImagen = this.cargarImagenTour();
        this.deshabilitarFormulario();
    };
    FormularioTourComponent.prototype.escucharTipoTourSeleccionado = function (tipoTourSeleccionado) {
        this.formularioTour.patchValue({
            tipo: tipoTourSeleccionado,
        });
    };
    FormularioTourComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_6__["ArtistaRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioTourComponent.prototype, "tour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioTourComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioTourComponent.prototype, "idArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormularioTourComponent.prototype, "idsArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioTourComponent.prototype, "tourValidoEnviar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__["InputImagenComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__["InputImagenComponent"])
    ], FormularioTourComponent.prototype, "componenteInputImagen", void 0);
    FormularioTourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-tour',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-tour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-tour.component.css */ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_6__["ArtistaRestService"]])
    ], FormularioTourComponent);
    return FormularioTourComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.module.ts ***!
  \************************************************************************************/
/*! exports provided: FormularioTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioTourModule", function() { return FormularioTourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.module */ "./src/app/componentes/input-imagen/input-imagen.module.ts");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _formulario_tour_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulario-tour.component */ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.ts");









var FormularioTourModule = /** @class */ (function () {
    function FormularioTourModule() {
    }
    FormularioTourModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _formulario_tour_component__WEBPACK_IMPORTED_MODULE_8__["FormularioTourComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["InputNumberModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["MultiSelectModule"],
                _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_5__["InputImagenModule"],
                _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_6__["AlertaValidacionCampoFormularioModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_7__["AutocompleteArtistaModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
            ],
            exports: [
                _formulario_tour_component__WEBPACK_IMPORTED_MODULE_8__["FormularioTourComponent"]
            ]
        })
    ], FormularioTourModule);
    return FormularioTourModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: 300px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy90b3VyL2NvbXBvbmVudGVzL3RhYmxhLWFjdG9zLXNldGxpc3QvdGFibGEtYWN0b3Mtc2V0bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7b0NBRWtDO0FBQ3BDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy90b3VyL2NvbXBvbmVudGVzL3RhYmxhLWFjdG9zLXNldGxpc3QvdGFibGEtYWN0b3Mtc2V0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TablaActosSetlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaActosSetlistComponent", function() { return TablaActosSetlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_cancio_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/cancio-setlist-rest.service */ "./src/app/servicios/rest/cancio-setlist-rest.service.ts");
/* harmony import */ var _servicios_rest_acto_tour_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../servicios/rest/acto-tour-rest.service */ "./src/app/servicios/rest/acto-tour-rest.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");









var TablaActosSetlistComponent = /** @class */ (function () {
    function TablaActosSetlistComponent(dialog, _cancioSetlistRestService, _actoTourRestService, _toasterService, _cargandoService) {
        this.dialog = dialog;
        this._cancioSetlistRestService = _cancioSetlistRestService;
        this._actoTourRestService = _actoTourRestService;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this.cancionesSetlist = [];
        this.actosSetlistTour = [];
        this.columnas = [
            {
                field: 'posicion',
                header: '#',
                width: '10%'
            },
            {
                field: 'actoTour',
                header: 'Acto',
                width: '40%'
            },
            {
                field: 'cancion',
                header: 'Canción',
                width: '40%'
            },
        ];
    }
    TablaActosSetlistComponent.prototype.ngOnInit = function () {
        this.cargarActosSetlist();
    };
    TablaActosSetlistComponent.prototype.cargarCancionesSetlist = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        var consulta = {
            where: {
                setlistTour: this.setlistTour.id,
            },
            relations: [
                'actoTour', 'cancion'
            ]
        };
        this._cancioSetlistRestService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuesta) {
            _this.cancionesSetlist = respuesta[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_2__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    TablaActosSetlistComponent.prototype.cargarActosSetlist = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        var consulta = {
            where: {
                setlist: this.setlistTour.id,
            },
            relations: [
                'cancionesSetlistTour', 'cancionesSetlistTour.cancion'
            ]
        };
        this._actoTourRestService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuesta) {
            _this.actosSetlistTour = respuesta[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_2__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    TablaActosSetlistComponent.prototype.onSort = function () {
        this.actualizarTabla();
    };
    TablaActosSetlistComponent.prototype.actualizarTabla = function () {
        this.rowGroupMetadata = {};
        if (this.cancionesSetlist) {
            for (var i = 0; i < this.cancionesSetlist.length; i++) {
                var rowData = this.cancionesSetlist[i];
                var actoTour = rowData.actoTour.id;
                if (i === 0) {
                    this.rowGroupMetadata[actoTour] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.cancionesSetlist[i - 1];
                    var previousRowGroup = previousRowData.actoTour.id;
                    if (actoTour === previousRowGroup) {
                        this.rowGroupMetadata[actoTour].size++;
                    }
                    else {
                        this.rowGroupMetadata[actoTour] = { index: i, size: 1 };
                    }
                }
            }
        }
        console.log(this.rowGroupMetadata);
    };
    TablaActosSetlistComponent.prototype.reorder = function (evento, dt) {
        console.log(dt, 'dt');
        console.log(this.cancionesSetlist, 'cancionesSetlist');
        var dragIndex = evento.dragIndex;
        var dropIndex = evento.dropIndex;
        console.log(dragIndex, 'dragIndex');
        console.log(dropIndex, 'dropIndex');
        console.log(this.cancionesSetlist[dragIndex], 'dragIndex');
        console.log(this.cancionesSetlist[dropIndex], 'dropIndex');
        this.onSort();
    };
    TablaActosSetlistComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        console.log(this.actosSetlistTour);
        // const items = (event.container as any)._group._items;
        // for (const item of items) { console.log(item); }
        // (event.container as any)._group._items.map(item => {
        //   console.log(item);
        // });
    };
    TablaActosSetlistComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _servicios_rest_cancio_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["CancioSetlistRestService"] },
        { type: _servicios_rest_acto_tour_rest_service__WEBPACK_IMPORTED_MODULE_7__["ActoTourRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TablaActosSetlistComponent.prototype, "tour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TablaActosSetlistComponent.prototype, "setlistTour", void 0);
    TablaActosSetlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-actos-setlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-actos-setlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-actos-setlist.component.css */ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _servicios_rest_cancio_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["CancioSetlistRestService"],
            _servicios_rest_acto_tour_rest_service__WEBPACK_IMPORTED_MODULE_7__["ActoTourRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"]])
    ], TablaActosSetlistComponent);
    return TablaActosSetlistComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TablaActosSetlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaActosSetlistModule", function() { return TablaActosSetlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _tabla_actos_setlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabla-actos-setlist.component */ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");






var TablaActosSetlistModule = /** @class */ (function () {
    function TablaActosSetlistModule() {
    }
    TablaActosSetlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tabla_actos_setlist_component__WEBPACK_IMPORTED_MODULE_3__["TablaActosSetlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]
            ],
            exports: [_tabla_actos_setlist_component__WEBPACK_IMPORTED_MODULE_3__["TablaActosSetlistComponent"]]
        })
    ], TablaActosSetlistModule);
    return TablaActosSetlistModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9jb21wb25lbnRlcy90YWJsYS1jYW5jaW9uZXMtc2V0bGlzdC90YWJsYS1jYW5jaW9uZXMtc2V0bGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TablaCancionesSetlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaCancionesSetlistComponent", function() { return TablaCancionesSetlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TablaCancionesSetlistComponent = /** @class */ (function () {
    function TablaCancionesSetlistComponent() {
    }
    TablaCancionesSetlistComponent.prototype.ngOnInit = function () {
    };
    TablaCancionesSetlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-canciones-setlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-canciones-setlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-canciones-setlist.component.css */ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TablaCancionesSetlistComponent);
    return TablaCancionesSetlistComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: TablaCancionesSetlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaCancionesSetlistModule", function() { return TablaCancionesSetlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _tabla_canciones_setlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabla-canciones-setlist.component */ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.component.ts");




var TablaCancionesSetlistModule = /** @class */ (function () {
    function TablaCancionesSetlistModule() {
    }
    TablaCancionesSetlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tabla_canciones_setlist_component__WEBPACK_IMPORTED_MODULE_3__["TablaCancionesSetlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _tabla_canciones_setlist_component__WEBPACK_IMPORTED_MODULE_3__["TablaCancionesSetlistComponent"],
            ]
        })
    ], TablaCancionesSetlistModule);
    return TablaCancionesSetlistModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9jb21wb25lbnRlcy90YWJsYS1zZXRsaXRzLXRvdXIvdGFibGEtc2V0bGl0cy10b3VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TablaSetlitsTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaSetlitsTourComponent", function() { return TablaSetlitsTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _modales_modal_crear_editar_setlist_modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component */ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/setlist-rest.service */ "./src/app/servicios/rest/setlist-rest.service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");








var TablaSetlitsTourComponent = /** @class */ (function () {
    function TablaSetlitsTourComponent(dialog, _setlistRestService, _toasterService, _cargandoService) {
        this.dialog = dialog;
        this._setlistRestService = _setlistRestService;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this.setlists = [];
        this.columnasSetlits = [
            {
                field: 'numero',
                header: '#',
                width: '5%'
            },
            {
                field: 'nombre',
                header: 'Nombre',
                width: '30%'
            },
            {
                field: 'fechaInicio',
                header: 'Fecha de Inicio',
                width: '15%'
            },
            {
                field: 'fechaFin',
                header: 'Fecha de Fin',
                width: '15%'
            },
            {
                field: 'acciones',
                header: 'Acciones',
                width: '15%'
            },
        ];
    }
    TablaSetlitsTourComponent.prototype.ngOnInit = function () {
        this.cargarSetlist();
    };
    TablaSetlitsTourComponent.prototype.abrirModalCrearEditarSetlist = function (setlist, index) {
        var _this = this;
        var _a;
        var dialogRef = this.dialog
            .open(_modales_modal_crear_editar_setlist_modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_3__["ModalCrearEditarSetlistComponent"], {
            width: '800px',
            data: {
                setlist: setlist,
                idTour: (_a = this.tour) === null || _a === void 0 ? void 0 : _a.id,
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (registro) {
            if (registro) {
                if (setlist) {
                    _this.setlists[index] = registro;
                }
                else {
                    _this.setlists.push(registro);
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    TablaSetlitsTourComponent.prototype.cargarSetlist = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        var consulta = {
            where: {
                tour: this.tour.id,
            },
            relations: []
        };
        this._setlistRestService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuesta) {
            _this.setlists = respuesta[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_7__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    TablaSetlitsTourComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["SetlistRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TablaSetlitsTourComponent.prototype, "tour", void 0);
    TablaSetlitsTourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-setlits-tour',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-setlits-tour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-setlits-tour.component.css */ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["SetlistRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"]])
    ], TablaSetlitsTourComponent);
    return TablaSetlitsTourComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.module.ts ***!
  \******************************************************************************************/
/*! exports provided: TablaSetlitsTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaSetlitsTourModule", function() { return TablaSetlitsTourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _tabla_setlits_tour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabla-setlits-tour.component */ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.component.ts");
/* harmony import */ var _modales_modal_crear_editar_setlist_modal_crear_editar_setlist_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modales/modal-crear-editar-setlist/modal-crear-editar-setlist.module */ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.module.ts");
/* harmony import */ var _modales_modal_crear_editar_setlist_modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component */ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _tabla_actos_setlist_tabla_actos_setlist_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabla-actos-setlist/tabla-actos-setlist.module */ "./src/app/modulos/tour/componentes/tabla-actos-setlist/tabla-actos-setlist.module.ts");
/* harmony import */ var _tabla_canciones_setlist_tabla_canciones_setlist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabla-canciones-setlist/tabla-canciones-setlist.module */ "./src/app/modulos/tour/componentes/tabla-canciones-setlist/tabla-canciones-setlist.module.ts");









var TablaSetlitsTourModule = /** @class */ (function () {
    function TablaSetlitsTourModule() {
    }
    TablaSetlitsTourModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tabla_setlits_tour_component__WEBPACK_IMPORTED_MODULE_3__["TablaSetlitsTourComponent"]],
            exports: [
                _tabla_setlits_tour_component__WEBPACK_IMPORTED_MODULE_3__["TablaSetlitsTourComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modales_modal_crear_editar_setlist_modal_crear_editar_setlist_module__WEBPACK_IMPORTED_MODULE_4__["ModalCrearEditarSetlistModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _tabla_actos_setlist_tabla_actos_setlist_module__WEBPACK_IMPORTED_MODULE_7__["TablaActosSetlistModule"],
                _tabla_canciones_setlist_tabla_canciones_setlist_module__WEBPACK_IMPORTED_MODULE_8__["TablaCancionesSetlistModule"],
            ],
            entryComponents: [
                _modales_modal_crear_editar_setlist_modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_5__["ModalCrearEditarSetlistComponent"]
            ]
        })
    ], TablaSetlitsTourModule);
    return TablaSetlitsTourModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9tb2RhbGVzL21vZGFsLWNyZWFyLWVkaXRhci1zZXRsaXN0L21vZGFsLWNyZWFyLWVkaXRhci1zZXRsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ModalCrearEditarSetlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCrearEditarSetlistComponent", function() { return ModalCrearEditarSetlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/setlist-rest.service */ "./src/app/servicios/rest/setlist-rest.service.ts");







var ModalCrearEditarSetlistComponent = /** @class */ (function () {
    function ModalCrearEditarSetlistComponent(data, dialogo, _toasterService, _cargandoService, _setlistRestService) {
        this.data = data;
        this.dialogo = dialogo;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._setlistRestService = _setlistRestService;
    }
    ModalCrearEditarSetlistComponent.prototype.ngOnInit = function () {
    };
    ModalCrearEditarSetlistComponent.prototype.validarFormulario = function (setlist) {
        if (setlist) {
            this.formularioValido = true;
            this.setlistCrearEditar = setlist;
        }
        else {
            this.formularioValido = false;
        }
    };
    ModalCrearEditarSetlistComponent.prototype.crearEditar = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        if (!this.data.setlist) {
            this.setlistCrearEditar.tour = this.data.idTour;
            this._setlistRestService
                .create(this.setlistCrearEditar)
                .subscribe(function (registroCreado) {
                _this.dialogo.close(registroCreado);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            this._setlistRestService
                .updateOne(this.data.setlist.id, this.setlistCrearEditar)
                .subscribe(function (registroEditado) {
                _this.dialogo.close(registroEditado);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    ModalCrearEditarSetlistComponent.prototype.cerrarModal = function () {
        this.dialogo.close();
    };
    ModalCrearEditarSetlistComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["SetlistRestService"] }
    ]; };
    ModalCrearEditarSetlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-crear-editar-setlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-crear-editar-setlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-crear-editar-setlist.component.css */ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_setlist_rest_service__WEBPACK_IMPORTED_MODULE_6__["SetlistRestService"]])
    ], ModalCrearEditarSetlistComponent);
    return ModalCrearEditarSetlistComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ModalCrearEditarSetlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCrearEditarSetlistModule", function() { return ModalCrearEditarSetlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-crear-editar-setlist.component */ "./src/app/modulos/tour/modales/modal-crear-editar-setlist/modal-crear-editar-setlist.component.ts");
/* harmony import */ var _componentes_formulario_setlist_formulario_setlist_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentes/formulario-setlist/formulario-setlist.module */ "./src/app/modulos/tour/componentes/formulario-setlist/formulario-setlist.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/boton-guardar/boton-guardar.module */ "./src/app/componentes/boton-guardar/boton-guardar.module.ts");
/* harmony import */ var _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/boton-cancelar/boton-cancelar.module */ "./src/app/componentes/boton-cancelar/boton-cancelar.module.ts");








var ModalCrearEditarSetlistModule = /** @class */ (function () {
    function ModalCrearEditarSetlistModule() {
    }
    ModalCrearEditarSetlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_crear_editar_setlist_component__WEBPACK_IMPORTED_MODULE_3__["ModalCrearEditarSetlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _componentes_formulario_setlist_formulario_setlist_module__WEBPACK_IMPORTED_MODULE_4__["FormularioSetlistModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__["BotonGuardarModule"],
                _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__["BotonCancelarModule"],
            ]
        })
    ], ModalCrearEditarSetlistModule);
    return ModalCrearEditarSetlistModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9tb2RhbGVzL21vZGFsLXRvdXItbHVnYXIvbW9kYWwtdG91ci1sdWdhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalTourLugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTourLugarComponent", function() { return ModalTourLugarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/tour-lugar-rest.service */ "./src/app/servicios/rest/tour-lugar-rest.service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");








var ModalTourLugarComponent = /** @class */ (function () {
    function ModalTourLugarComponent(data, dialogo, _toasterService, _cargandoService, _toourLugarRestService) {
        this.data = data;
        this.dialogo = dialogo;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._toourLugarRestService = _toourLugarRestService;
    }
    ModalTourLugarComponent.prototype.ngOnInit = function () {
    };
    ModalTourLugarComponent.prototype.validarFormularioLugar = function (tourLugar) {
        if (tourLugar) {
            this.formularioValido = true;
            this.tourLugarCrearEditar = tourLugar;
        }
        else {
            this.formularioValido = false;
        }
    };
    ModalTourLugarComponent.prototype.crearEditarTourLugar = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.tourLugarCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_7__["obtenerAnio"])(this.tourLugarCrearEditar.fecha);
        this.tourLugarCrearEditar.seCancelo = this.tourLugarCrearEditar.seCancelo ? 1 : 0;
        this.tourLugarCrearEditar.porcentaje = ((this.tourLugarCrearEditar.ticketsVendidos * 100) / this.tourLugarCrearEditar.ticketsDisponibles);
        if (!this.data.tourLugar) {
            this.tourLugarCrearEditar.tour = this.data.idTour;
            this._toourLugarRestService
                .create(this.tourLugarCrearEditar)
                .subscribe(function (respuestaTourLugarCreado) {
                respuestaTourLugarCreado.lugar = _this.tourLugarCrearEditar.lugar;
                respuestaTourLugarCreado.recinto = _this.tourLugarCrearEditar.recinto;
                _this.dialogo.close(respuestaTourLugarCreado);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            this._toourLugarRestService
                .updateOne(this.data.tourLugar.id, this.tourLugarCrearEditar)
                .subscribe(function (respuestaTourLugarEditado) {
                respuestaTourLugarEditado.lugar = _this.tourLugarCrearEditar.lugar;
                respuestaTourLugarEditado.recinto = _this.tourLugarCrearEditar.recinto;
                _this.dialogo.close(respuestaTourLugarEditado);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    ModalTourLugarComponent.prototype.cerrarModal = function () {
        this.dialogo.close();
    };
    ModalTourLugarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_5__["TourLugarRestService"] }
    ]; };
    ModalTourLugarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-tour-lugar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-tour-lugar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-tour-lugar.component.css */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_tour_lugar_rest_service__WEBPACK_IMPORTED_MODULE_5__["TourLugarRestService"]])
    ], ModalTourLugarComponent);
    return ModalTourLugarComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalTourLugarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTourLugarModule", function() { return ModalTourLugarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-tour-lugar.component */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../componentes/boton-guardar/boton-guardar.module */ "./src/app/componentes/boton-guardar/boton-guardar.module.ts");
/* harmony import */ var _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/boton-cancelar/boton-cancelar.module */ "./src/app/componentes/boton-cancelar/boton-cancelar.module.ts");
/* harmony import */ var _componentes_formulario_tour_lugar_formulario_tour_lugar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/formulario-tour-lugar/formulario-tour-lugar.module */ "./src/app/modulos/tour/componentes/formulario-tour-lugar/formulario-tour-lugar.module.ts");








var ModalTourLugarModule = /** @class */ (function () {
    function ModalTourLugarModule() {
    }
    ModalTourLugarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_3__["ModalTourLugarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _componentes_formulario_tour_lugar_formulario_tour_lugar_module__WEBPACK_IMPORTED_MODULE_7__["FormularioTourLugarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_5__["BotonGuardarModule"],
                _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_6__["BotonCancelarModule"],
            ]
        })
    ], ModalTourLugarModule);
    return ModalTourLugarModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9ydXRhcy9ydXRhLWNyZWFyLWVkaXRhci10b3VyL3J1dGEtY3JlYXItZWRpdGFyLXRvdXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RutaCrearEditarTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaCrearEditarTourComponent", function() { return RutaCrearEditarTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/rest/tour-rest.service */ "./src/app/servicios/rest/tour-rest.service.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../definicion-rutas/rutas-tour */ "./src/app/modulos/tour/rutas/definicion-rutas/rutas-tour.ts");
/* harmony import */ var _componentes_formulario_tour_formulario_tour_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../componentes/formulario-tour/formulario-tour.component */ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.component.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");















var RutaCrearEditarTourComponent = /** @class */ (function () {
    function RutaCrearEditarTourComponent(_tourRestService, _artistaRestService, _cargandoService, dialog, _router, _activatedRoute, _toasterService) {
        this._tourRestService = _tourRestService;
        this._artistaRestService = _artistaRestService;
        this._cargandoService = _cargandoService;
        this.dialog = dialog;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.idsArtista = [];
        this.ruta = [];
    }
    RutaCrearEditarTourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (params) {
            _this.idTour = +params.idTour;
            _this.idArtista = +params.idArtista;
            _this.setearArregloRutasMigaPan();
            _this.ruta = _this.setearRuta();
            if (_this.idTour) {
                var consulta = {
                    where: {
                        id: _this.idTour
                    },
                    relations: [
                        'imagenesTour',
                        'artistasTour',
                        'artistasTour.artista',
                        'lugaresTour',
                        'lugaresTour.recinto',
                        'lugaresTour.lugar',
                        'lugaresTour.lugar.lugarPadre',
                    ]
                };
                _this._cargandoService.habilitarCargando();
                return _this._tourRestService.findAll(JSON.stringify(consulta));
            }
            else {
                _this.idsArtista.push(_this.idArtista);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])([], 0);
            }
        }))
            .subscribe(function (respuestaTour) {
            if (respuestaTour && respuestaTour[0] && respuestaTour[0][0]) {
                _this.tour = respuestaTour[0][0];
                _this.idsArtista = _this.tour.artistasTour
                    .map(function (artistaTour) { return artistaTour.artista.id; });
            }
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaCrearEditarTourComponent.prototype.validarFormulario = function (tour) {
        if (tour) {
            this.formularioValido = true;
            this.tourCrearEditar = tour;
        }
        else {
            this.formularioValido = false;
        }
    };
    RutaCrearEditarTourComponent.prototype.cancelarCreacionEdicion = function () {
        this.componenteFormularioTour.volverFormularioInicial();
    };
    RutaCrearEditarTourComponent.prototype.crearEditarArtista = function (stepper) {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.tourCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_14__["obtenerAnio"])(this.tourCrearEditar.fechaInicio);
        this.tourCrearEditar.artistasTour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tourCrearEditar.artistas).map(function (artista) { return artista.id; });
        this.tourCrearEditar.tipo = this.tourCrearEditar.tipo.value;
        if (this.tour) {
            this._tourRestService
                .crearEditarTour(this.tourCrearEditar, this.tourCrearEditar.imagen)
                .subscribe(function (respuestaTourEditado) {
                _this.tour = respuestaTourEditado;
                _this.idsArtista = _this.tour.artistasTour.map(function (artistaTour) { return artistaTour.artista.id; });
                _this.componenteFormularioTour.tour = respuestaTourEditado;
                _this.componenteFormularioTour.volverFormularioInicial();
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["toastExitoEditar"]);
                _this._cargandoService.deshabiltarCargando();
                _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"]
                    .rutaEditarTour(true, false, [_this.idArtista, _this.tour.id]);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            this._tourRestService
                .crearEditarTour(this.tourCrearEditar, this.tourCrearEditar.imagen)
                .subscribe(function (respuestaTourCreado) {
                _this.tour = respuestaTourCreado;
                _this.idsArtista = _this.tour.artistasTour.map(function (artistaTour) { return artistaTour.artista.id; });
                _this.componenteFormularioTour.tour = respuestaTourCreado;
                _this.componenteFormularioTour.volverFormularioInicial();
                _this.cambiarSiguienteStep(stepper);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    RutaCrearEditarTourComponent.prototype.habilitarFormularioEditarTour = function () {
        this.componenteFormularioTour.formularioTour.enable();
    };
    RutaCrearEditarTourComponent.prototype.cambiarSiguienteStep = function (steper) {
        setTimeout(function () {
            steper.next();
        }, 800);
    };
    RutaCrearEditarTourComponent.prototype.setearArregloRutasMigaPan = function () {
        if (this.idArtista) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtista]),
                _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaGestionTour(false, true, [this.idArtista]),
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaGestionTour(false, true),
            ];
        }
        if (this.idTour) {
            this.arregloRutas.push(_definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaEditarTour(false, true));
        }
        else {
            this.arregloRutas.push(_definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaCrearTour(false, true));
        }
    };
    RutaCrearEditarTourComponent.prototype.setearRuta = function () {
        if (this.idTour) {
            return _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaEditarTour(false, true, [this.idTour, this.idArtista]).ruta;
        }
        else {
            return _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_12__["RUTAS_TOUR"].rutaCrearTour(false, true, [this.idArtista]).ruta;
        }
    };
    RutaCrearEditarTourComponent.prototype.cambiarValorMostrarInputEnlace = function () {
        this.mostrarInputEnlace = !this.mostrarInputEnlace;
    };
    RutaCrearEditarTourComponent.prototype.cancelarEdicion = function () {
    };
    RutaCrearEditarTourComponent.ctorParameters = function () { return [
        { type: _servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_2__["TourRestService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__["ArtistaRestService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_formulario_tour_formulario_tour_component__WEBPACK_IMPORTED_MODULE_13__["FormularioTourComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_formulario_tour_formulario_tour_component__WEBPACK_IMPORTED_MODULE_13__["FormularioTourComponent"])
    ], RutaCrearEditarTourComponent.prototype, "componenteFormularioTour", void 0);
    RutaCrearEditarTourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-crear-editar-tour',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-crear-editar-tour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-crear-editar-tour.component.css */ "./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_2__["TourRestService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__["ArtistaRestService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], RutaCrearEditarTourComponent);
    return RutaCrearEditarTourComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdG91ci9ydXRhcy9ydXRhLWdlc3Rpb24tdG91ci9ydXRhLWdlc3Rpb24tdG91ci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RutaGestionTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaGestionTourComponent", function() { return RutaGestionTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../servicios/rest/tour-rest.service */ "./src/app/servicios/rest/tour-rest.service.ts");
/* harmony import */ var _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../definicion-rutas/rutas-tour */ "./src/app/modulos/tour/rutas/definicion-rutas/rutas-tour.ts");
/* harmony import */ var _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constantes/tipos-tour */ "./src/app/constantes/tipos-tour.ts");















var RutaGestionTourComponent = /** @class */ (function () {
    function RutaGestionTourComponent(_tourRestService, _artistaRestService, _cargandoService, dialog, _router, _activatedRoute, _generoRestService, _toasterService) {
        this._tourRestService = _tourRestService;
        this._artistaRestService = _artistaRestService;
        this._cargandoService = _cargandoService;
        this.dialog = dialog;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._generoRestService = _generoRestService;
        this._toasterService = _toasterService;
        this.tours = [];
        this.busqueda = '';
        this.queryParams = {};
        this.rutaImagen = 'assets/imagenes/tour.svg';
        this.opcionesTipoTour = _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_14__["TIPOS_TOUR"];
    }
    RutaGestionTourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (params) {
            _this.idArtistaParams = params.idArtista ? +params.idArtista : undefined;
            _this.setearArregloRutasMigasPan();
            _this.seteoRutas();
            return _this._activatedRoute.queryParams;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (queryParams) {
            if (_this.idArtistaParams) {
                _this.idArtista = _this.idArtistaParams;
                _this._artistaRestService.findOne(_this.idArtista)
                    .subscribe(function (artista) {
                    _this.artista = artista;
                }, function (error) {
                    console.error(error);
                    _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__["ToastErrorCargandoDatos"]);
                });
            }
            if (queryParams.consulta) {
                _this.queryParams.consulta = JSON.parse(queryParams.consulta);
                if (_this.queryParams.consulta.busqueda) {
                    _this.busqueda = _this.queryParams.consulta.busqueda;
                }
                if (_this.queryParams.consulta.tipo) {
                    _this.tipo = _this.queryParams.consulta.tipo;
                    _this.tipoTourSeleccionado = {
                        value: _this.queryParams.consulta.tipo,
                        key: _constantes_tipos_tour__WEBPACK_IMPORTED_MODULE_14__["TIPOS_TOUR_ENUM"][_this.queryParams.consulta.tipo]
                    };
                }
                if (_this.queryParams.consulta.idArtista) {
                    _this.idArtistaQuery = _this.queryParams.consulta.idArtista;
                    _this.idArtista = _this.idArtistaQuery;
                }
                else {
                    _this.queryParams.consulta.idArtista = _this.idArtista;
                }
            }
            else {
                _this.queryParams.consulta = {
                    busqueda: '',
                    esImagenPrincipal: 1,
                    idArtista: _this.idArtista,
                };
            }
            _this._cargandoService.habilitarCargando();
            return _this._tourRestService.obtenerTourPorArtistasTipo(JSON.stringify(_this.queryParams.consulta));
        }))
            .subscribe(function (respuestaTours) {
            _this.tours = respuestaTours[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaGestionTourComponent.prototype.obtenerUrlPrincipal = function (tour) {
        return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_10__["obtenerUrlImagenPrincipal"])(tour, 'imagenesTour');
    };
    RutaGestionTourComponent.prototype.escucharBusqueda = function (busqueda) {
        this.busqueda = busqueda;
        this.buscarTours();
    };
    RutaGestionTourComponent.prototype.buscarToursPorArtista = function (artistaSeleccionado) {
        this.idArtista = artistaSeleccionado ? artistaSeleccionado.id : undefined;
        this.buscarTours();
    };
    RutaGestionTourComponent.prototype.irRutaCrearTour = function () {
        this._router
            .navigate(_definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__["RUTAS_TOUR"]
            .rutaCrearTour(true, false, [this.idArtistaParams]));
    };
    RutaGestionTourComponent.prototype.obtenerRuta = function (idTour) {
        return _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__["RUTAS_TOUR"]
            .rutaEditarTour(true, false, [this.idArtistaParams, idTour]);
    };
    RutaGestionTourComponent.prototype.buscarTourPorTipo = function (tipoTourSeleccionado) {
        this.tipo = tipoTourSeleccionado ? tipoTourSeleccionado : undefined;
        this.buscarTours();
    };
    RutaGestionTourComponent.prototype.buscarTours = function () {
        var consulta = {
            busqueda: this.busqueda,
            esImagenPrincipal: 1,
            idArtista: this.idArtista,
            tipo: this.tipo,
        };
        this.queryParams.consulta = JSON.stringify(consulta);
        this._router
            .navigate(this.ruta, {
            queryParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.queryParams)
        });
    };
    RutaGestionTourComponent.prototype.setearArregloRutasMigasPan = function () {
        if (this.idArtistaParams) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_11__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtistaParams]),
                _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__["RUTAS_TOUR"].rutaGestionTour(false, true, [this.idArtistaParams])
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__["RUTAS_TOUR"].rutaGestionTour(false, true)
            ];
        }
    };
    RutaGestionTourComponent.prototype.seteoRutas = function () {
        this.ruta = _definicion_rutas_rutas_tour__WEBPACK_IMPORTED_MODULE_13__["RUTAS_TOUR"]
            .rutaGestionTour(false, true, [this.idArtistaParams]).ruta;
    };
    RutaGestionTourComponent.ctorParameters = function () { return [
        { type: _servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_12__["TourRestService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__["ArtistaRestService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
    ]; };
    RutaGestionTourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-gestion-tour',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-gestion-tour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-gestion-tour.component.css */ "./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_tour_rest_service__WEBPACK_IMPORTED_MODULE_12__["TourRestService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__["ArtistaRestService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], RutaGestionTourComponent);
    return RutaGestionTourComponent;
}());



/***/ }),

/***/ "./src/app/modulos/tour/tour-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modulos/tour/tour-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TourRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourRoutingModule", function() { return TourRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rutas_ruta_gestion_tour_ruta_gestion_tour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta-gestion-tour/ruta-gestion-tour.component */ "./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.ts");
/* harmony import */ var _rutas_ruta_crear_editar_tour_ruta_crear_editar_tour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component */ "./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.ts");





var routes = [
    {
        path: 'gestion-tour',
        children: [
            {
                path: '',
                component: _rutas_ruta_gestion_tour_ruta_gestion_tour_component__WEBPACK_IMPORTED_MODULE_3__["RutaGestionTourComponent"]
            },
            {
                path: 'crear-tour',
                component: _rutas_ruta_crear_editar_tour_ruta_crear_editar_tour_component__WEBPACK_IMPORTED_MODULE_4__["RutaCrearEditarTourComponent"]
            },
            {
                path: 'editar-tour/:idTour',
                component: _rutas_ruta_crear_editar_tour_ruta_crear_editar_tour_component__WEBPACK_IMPORTED_MODULE_4__["RutaCrearEditarTourComponent"]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'gestion-tour',
        pathMatch: 'full',
    }
];
var TourRoutingModule = /** @class */ (function () {
    function TourRoutingModule() {
    }
    TourRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TourRoutingModule);
    return TourRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/tour/tour.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modulos/tour/tour.module.ts ***!
  \*********************************************/
/*! exports provided: TourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourModule", function() { return TourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _tour_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-routing.module */ "./src/app/modulos/tour/tour-routing.module.ts");
/* harmony import */ var _rutas_ruta_gestion_tour_ruta_gestion_tour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-gestion-tour/ruta-gestion-tour.component */ "./src/app/modulos/tour/rutas/ruta-gestion-tour/ruta-gestion-tour.component.ts");
/* harmony import */ var _componentes_menu_item_cuadrado_menu_item_cuadrado_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/menu-item-cuadrado/menu-item-cuadrado.module */ "./src/app/componentes/menu-item-cuadrado/menu-item-cuadrado.module.ts");
/* harmony import */ var _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../componentes/input-buscar-boton/input-buscar-boton.module */ "./src/app/componentes/input-buscar-boton/input-buscar-boton.module.ts");
/* harmony import */ var _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/boton-nuevo/boton-nuevo.module */ "./src/app/componentes/boton-nuevo/boton-nuevo.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../componentes/migas-pan/migas-pan.module */ "./src/app/componentes/migas-pan/migas-pan.module.ts");
/* harmony import */ var _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/safe-pipe/safe-pipe.module */ "./src/app/pipes/safe-pipe/safe-pipe.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-dropdown.js");
/* harmony import */ var _rutas_ruta_crear_editar_tour_ruta_crear_editar_tour_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component */ "./src/app/modulos/tour/rutas/ruta-crear-editar-tour/ruta-crear-editar-tour.component.ts");
/* harmony import */ var _componentes_formulario_tour_formulario_tour_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/formulario-tour/formulario-tour.module */ "./src/app/modulos/tour/componentes/formulario-tour/formulario-tour.module.ts");
/* harmony import */ var _componentes_tabla_tour_lugar_tabla_tour_lugar_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../componentes/tabla-tour-lugar/tabla-tour-lugar.module */ "./src/app/componentes/tabla-tour-lugar/tabla-tour-lugar.module.ts");
/* harmony import */ var _modales_modal_tour_lugar_modal_tour_lugar_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modales/modal-tour-lugar/modal-tour-lugar.module */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.module.ts");
/* harmony import */ var _modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modales/modal-tour-lugar/modal-tour-lugar.component */ "./src/app/modulos/tour/modales/modal-tour-lugar/modal-tour-lugar.component.ts");
/* harmony import */ var _componentes_tabla_setlits_tour_tabla_setlits_tour_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/tabla-setlits-tour/tabla-setlits-tour.module */ "./src/app/modulos/tour/componentes/tabla-setlits-tour/tabla-setlits-tour.module.ts");























var TourModule = /** @class */ (function () {
    function TourModule() {
    }
    TourModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rutas_ruta_gestion_tour_ruta_gestion_tour_component__WEBPACK_IMPORTED_MODULE_4__["RutaGestionTourComponent"], _rutas_ruta_crear_editar_tour_ruta_crear_editar_tour_component__WEBPACK_IMPORTED_MODULE_17__["RutaCrearEditarTourComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tour_routing_module__WEBPACK_IMPORTED_MODULE_3__["TourRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _componentes_menu_item_cuadrado_menu_item_cuadrado_module__WEBPACK_IMPORTED_MODULE_5__["MenuItemCuadradoModule"],
                _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__["InputBuscarBotonModule"],
                _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__["BotonNuevoModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteArtistaModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_11__["SegundosAMinutosHorasPipeModule"],
                _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_12__["MigasPanModule"],
                _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["SafePipeModule"],
                primeng__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
                _componentes_formulario_tour_formulario_tour_module__WEBPACK_IMPORTED_MODULE_18__["FormularioTourModule"],
                _componentes_tabla_tour_lugar_tabla_tour_lugar_module__WEBPACK_IMPORTED_MODULE_19__["TablaTourLugarModule"],
                _modales_modal_tour_lugar_modal_tour_lugar_module__WEBPACK_IMPORTED_MODULE_20__["ModalTourLugarModule"],
                _componentes_tabla_setlits_tour_tabla_setlits_tour_module__WEBPACK_IMPORTED_MODULE_22__["TablaSetlitsTourModule"],
            ],
            entryComponents: [
                _modales_modal_tour_lugar_modal_tour_lugar_component__WEBPACK_IMPORTED_MODULE_21__["ModalTourLugarComponent"],
            ]
        })
    ], TourModule);
    return TourModule;
}());



/***/ }),

/***/ "./src/app/servicios/rest/acto-tour-rest.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/servicios/rest/acto-tour-rest.service.ts ***!
  \**********************************************************/
/*! exports provided: ActoTourRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoTourRestService", function() { return ActoTourRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var ActoTourRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ActoTourRestService, _super);
    function ActoTourRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'acto-tour';
        return _this;
    }
    ActoTourRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ActoTourRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ActoTourRestService);
    return ActoTourRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/cancio-setlist-rest.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/servicios/rest/cancio-setlist-rest.service.ts ***!
  \***************************************************************/
/*! exports provided: CancioSetlistRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancioSetlistRestService", function() { return CancioSetlistRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var CancioSetlistRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CancioSetlistRestService, _super);
    function CancioSetlistRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'cancion-setlist';
        return _this;
    }
    CancioSetlistRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CancioSetlistRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CancioSetlistRestService);
    return CancioSetlistRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/recinto-rest.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/rest/recinto-rest.service.ts ***!
  \********************************************************/
/*! exports provided: RecintoRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecintoRestService", function() { return RecintoRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var RecintoRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RecintoRestService, _super);
    function RecintoRestService(
    // tslint:disable-next-line:variable-name
    _http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'recinto';
        return _this;
    }
    RecintoRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RecintoRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RecintoRestService);
    return RecintoRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/setlist-rest.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/rest/setlist-rest.service.ts ***!
  \********************************************************/
/*! exports provided: SetlistRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetlistRestService", function() { return SetlistRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var SetlistRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SetlistRestService, _super);
    function SetlistRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'setlist';
        return _this;
    }
    SetlistRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SetlistRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SetlistRestService);
    return SetlistRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/tour-lugar-rest.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/servicios/rest/tour-lugar-rest.service.ts ***!
  \***********************************************************/
/*! exports provided: TourLugarRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourLugarRestService", function() { return TourLugarRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TourLugarRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TourLugarRestService, _super);
    function TourLugarRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'tour-lugar';
        return _this;
    }
    TourLugarRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TourLugarRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TourLugarRestService);
    return TourLugarRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/tour-rest.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicios/rest/tour-rest.service.ts ***!
  \*****************************************************/
/*! exports provided: TourRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourRestService", function() { return TourRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TourRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TourRestService, _super);
    function TourRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'tour';
        return _this;
    }
    TourRestService.prototype.crearEditarTour = function (tour, imagen) {
        var formData = new FormData();
        if (imagen && imagen.type) {
            formData.append("imagen", imagen);
        }
        console.log(tour);
        formData.append('tour', JSON.stringify(tour));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = { headers: headers };
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/crear-tour-imagen", formData, options);
    };
    TourRestService.prototype.obtenerTourPorArtistasTipo = function (datosConsultaTours) {
        return this._http.get(this.url +
            (":" + this.port + "/" + this.segmento + "/tours-por-artista-tipo?datosConsulta=" + datosConsultaTours));
    };
    TourRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TourRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TourRestService);
    return TourRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=src-app-modulos-tour-tour-module.js.map