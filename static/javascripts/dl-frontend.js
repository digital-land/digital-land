(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('DLFrontend', ['exports'], factory) :
	(factory((global.DLFrontend = {})));
}(this, (function (exports) { 'use strict';

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend', factory) :
	(factory());
}(undefined, (function () {
(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {
  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
  var detect = 'bind' in Function.prototype;

  if (detect) return

  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
  Object.defineProperty(Function.prototype, 'bind', {
      value: function bind(that) { // .length is 1
          // add necessary es5-shim utilities
          var $Array = Array;
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          var ArrayPrototype = $Array.prototype;
          var Empty = function Empty() {};
          var to_string = ObjectPrototype.toString;
          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
          var array_slice = ArrayPrototype.slice;
          var array_concat = ArrayPrototype.concat;
          var array_push = ArrayPrototype.push;
          var max = Math.max;
          // /add necessary es5-shim utilities

          // 1. Let Target be the this value.
          var target = this;
          // 2. If IsCallable(Target) is false, throw a TypeError exception.
          if (!isCallable(target)) {
              throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          }
          // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used
          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.
          var bound;
          var binder = function () {

              if (this instanceof bound) {
                  // 15.3.4.5.2 [[Construct]]
                  // When the [[Construct]] internal method of a function object,
                  // F that was created using the bind function is called with a
                  // list of arguments ExtraArgs, the following steps are taken:
                  // 1. Let target be the value of F's [[TargetFunction]]
                  //   internal property.
                  // 2. If target has no [[Construct]] internal method, a
                  //   TypeError exception is thrown.
                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Construct]] internal
                  //   method of target providing args as the arguments.

                  var result = target.apply(
                      this,
                      array_concat.call(args, array_slice.call(arguments))
                  );
                  if ($Object(result) === result) {
                      return result;
                  }
                  return this;

              } else {
                  // 15.3.4.5.1 [[Call]]
                  // When the [[Call]] internal method of a function object, F,
                  // which was created using the bind function is called with a
                  // this value and a list of arguments ExtraArgs, the following
                  // steps are taken:
                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 2. Let boundThis be the value of F's [[BoundThis]] internal
                  //   property.
                  // 3. Let target be the value of F's [[TargetFunction]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Call]] internal method
                  //   of target providing boundThis as the this value and
                  //   providing args as the arguments.

                  // equiv: target.call(this, ...boundArgs, ...args)
                  return target.apply(
                      that,
                      array_concat.call(args, array_slice.call(arguments))
                  );

              }

          };

          // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.

          var boundLength = max(0, target.length - args.length);

          // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
              array_push.call(boundArgs, '$' + i);
          }

          // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.
          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

          if (target.prototype) {
              Empty.prototype = target.prototype;
              bound.prototype = new Empty();
              // Clean up dangling references.
              Empty.prototype = null;
          }

          // TODO
          // 18. Set the [[Extensible]] internal property of F to true.

          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.

          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.

          // 22. Return F.
          return bound;
      }
  });
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

})));

// Back to top module as seen in govuk-design-system
// https://github.com/alphagov/govuk-design-system/blob/master/src/javascripts/components/back-to-top.js
function BackToTop ($module) {
  this.$module = $module;
}

BackToTop.prototype.init = function (params) {
  this.setupOptions(params);
  // Check if we can use Intersection Observers
  if (!('IntersectionObserver' in window)) {
    // If there's no support fallback to regular behaviour
    // Since JavaScript is enabled we can remove the default hidden state
    return this.$module.classList.remove('back-to-top--hidden')
  }

  var $footer = document.querySelector(this.footer_selector);
  var $subNav = document.querySelector(this.head_selector);

  // Check if there is anything to observe
  if (!$footer || !$subNav) {
    return
  }

  var $subNavStyles = document.defaultView.getComputedStyle($subNav);
  if ($subNavStyles.getPropertyValue('margin-bottom').indexOf('px')) {
    if (parseInt($subNavStyles.getPropertyValue('margin-bottom').replace('px', '')) < 100) {
      $subNav.style.marginBottom = '100px';
    }
  }

  var footerIsIntersecting = false;
  var subNavIsIntersecting = false;
  var subNavIntersectionRatio = 0;

  var observer = new window.IntersectionObserver(function (entries) {
    // Find the elements we care about from the entries
    var footerEntry = entries.find(function (entry) {
      return entry.target === $footer
    });
    var subNavEntry = entries.find(function (entry) {
      return entry.target === $subNav
    });

    // If there is an entry this means the element has changed so lets check if it's intersecting.
    if (footerEntry) {
      footerIsIntersecting = footerEntry.isIntersecting;
    }
    if (subNavEntry) {
      subNavIsIntersecting = subNavEntry.isIntersecting;
      subNavIntersectionRatio = subNavEntry.intersectionRatio;
    }

    // If the subnav or the footer not visible then fix the back to top link to follow the user
    if (subNavIsIntersecting || footerIsIntersecting) {
      this.$module.classList.remove('back-to-top--fixed');
      if (this.classes) {
        this.$module.classList.remove(this.classes);
      }
    } else {
      this.$module.classList.add('back-to-top--fixed');
      if (this.classes) {
        this.$module.classList.add(this.classes);
      }
    }

    // If the subnav is visible but you can see it all at once, then a back to top link is likely not as useful.
    // We hide the link but make it focusable for screen readers users who might still find it useful.
    if (subNavIsIntersecting && subNavIntersectionRatio === 1) {
      this.$module.classList.add('back-to-top--hidden');
    } else {
      this.$module.classList.remove('back-to-top--hidden');
    }
  }.bind(this));

  observer.observe($footer);
  observer.observe($subNav);
};

BackToTop.prototype.passedBottom = function ($el) {
  var $elPos = $el.getClientRects();
  var viewportBottom = window.scrollY + window.innerHeight;
  return $elPos < viewportBottom
};

BackToTop.prototype.setupOptions = function (params) {
  params = params || {};
  this.footer_selector = params.footer_selector || '.app-footer';
  this.head_selector = params.head_selector || '.app-subnav';
  this.classes = params.classes || '';
};

// ====================================
// Filter checkboxes module
// ====================================

// to do (see https://www.gov.uk/search/all?keywords=publications&content_purpose_supergroup%5B%5D=services&organisations%5B%5D=academy-for-social-justice&order=relevance)
// - aria-describedby, hidden span that counts how many options are showing and how many of them are selected
// - aria-controls, indicate that it controls the list of checkboxes
// - hide textbox when no js

function FilterCheckboxes ($module) {
  this.$module = $module;
  this.$textbox = $module.querySelector('.filter-group__auto-filter__input');
  this.checkboxArr = [...$module.querySelectorAll('.govuk-checkboxes__item')];
}

FilterCheckboxes.prototype.init = function () {
  var $module = this.$module;
  var $checkboxes = this.checkboxArr;

  // if no checkboxes then return
  if (!$checkboxes) {
    return
  }

  // returns true is the item has been hidden with display:none
  this.isDisplayNone = function (el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'))
  };

  // returns true if the item's checkbox is checked
  this.isItemChecked = function (el) {
    var chbx = el.querySelector('input');
    return chbx.checked
  };

  this.ariaDescription = $module.querySelector('.filter-group__auto-filter__desc');
  // To do: check it exists
  // set initial aria message
  var boundUpdateAriaDescribedBy = this.updateAriaDescribedBy.bind(this);
  boundUpdateAriaDescribedBy();

  // Bind event changes to the textarea
  var boundInputEvents = this.bindInputEvents.bind(this);
  boundInputEvents();
};

FilterCheckboxes.prototype.getCheckboxInput = function (el) {
  return el.querySelector('input')
};

FilterCheckboxes.prototype.bindInputEvents = function () {
  var $textbox = this.$textbox;
  var checkboxArr = this.checkboxArr.map(this.getCheckboxInput);

  $textbox.addEventListener('input', this.filterCheckboxes.bind(this));

  var boundUpdateAriaDescribedBy = this.updateAriaDescribedBy.bind(this);
  checkboxArr.forEach(chbxEl => chbxEl.addEventListener('change', boundUpdateAriaDescribedBy));
};

FilterCheckboxes.prototype.filterCheckboxes = function () {
  var $textbox = this.$textbox;
  var boundFilterCheckboxesArr = this.filterCheckboxesArr.bind(this);
  // filter the array of checkboxes
  var reducedArr = boundFilterCheckboxesArr($textbox.value);

  var boundUpdateAriaDescribedBy = this.updateAriaDescribedBy.bind(this);

  // show only those checkboxes remaining
  var boundDisplayMatchingCheckboxes = this.displayMatchingCheckboxes.bind(this);
  boundDisplayMatchingCheckboxes(reducedArr, boundUpdateAriaDescribedBy);
};

FilterCheckboxes.prototype.filterCheckboxesArr = function (query) {
  var checkboxArr = this.checkboxArr;
  return checkboxArr.filter(function (el) {
    const checkbox = el.querySelector('label');
    return checkbox.textContent.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
};

function setCheckboxDisplay (ckbx, displayValue) {
  ckbx.style.display = displayValue;
}

FilterCheckboxes.prototype.displayMatchingCheckboxes = function (ckbxArr, cb) {
  // hide all
  this.checkboxArr.forEach((ckbx) => setCheckboxDisplay(ckbx, 'none'));
  // re show those in filtered array
  ckbxArr.forEach((ckbx) => setCheckboxDisplay(ckbx, 'block'));

  if (cb) {
    cb();
  }
};

FilterCheckboxes.prototype.updateAriaDescribedBy = function () {
  var checkboxArr = this.checkboxArr;
  var displayedCheckboxes = checkboxArr.filter(chbx => !this.isDisplayNone(chbx));
  var checkedAndDisplayed = displayedCheckboxes.filter(chbx => this.isItemChecked(chbx));

  var boundGenerateAriaMessage = this.generateAriaMessage.bind(this);
  boundGenerateAriaMessage(displayedCheckboxes.length, checkedAndDisplayed.length);
};

FilterCheckboxes.prototype.generateAriaMessage = function (optionCount, selectedCount) {
  var ariaEl = this.ariaDescription;
  var optionStr = ariaEl.dataset.single;
  if (optionCount > 1) {
    optionStr = ariaEl.dataset.multiple;
  }

  ariaEl.textContent = optionCount + ' ' + optionStr + ', ' + selectedCount + ' ' + ariaEl.dataset.selected;
};

// ================================
// Selected counts for filters
// ================================

function SelectedCounter ($module) {
  this.$module = $module;
  this.$fieldset = $module.querySelector('fieldset');
  this.$inputs = this.$fieldset.querySelectorAll('input');
}

SelectedCounter.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  // if no inputs then return
  if (!$inputs) {
    return
  }

  //
  var boundFetchCountElement = this.fetchCountElement.bind(this);
  this.countMessage = boundFetchCountElement();

  // if current count is 0 hide the message
  this.message_is_hidden = false;
  if (this.currentCount == 0) {
    this.hideCountMessage();
  }

  // Bind event changes to the textarea
  var boundChangeEvents = this.bindChangeEvents.bind(this);
  boundChangeEvents();
};

SelectedCounter.prototype.fetchCountElement = function () {
  var $module = this.$module;
  var countMessage = $module.querySelector('.filter-group__selected-text');

  // if the count message doesn;t exist, create one
  if (!countMessage) {
    countMessage = this.createCountElement();
  }

  this.countElement = countMessage.querySelector('.filter-group__selected-text__count');
  this.currentCount = parseInt(this.countElement.textContent);

  return countMessage
};

SelectedCounter.prototype.createCountElement = function () {
  var $module = this.$module;
  var $summary = $module.querySelector('.filter-group__summary');
  var firstIcon = $summary.querySelector('svg');

  var countMessage = document.createElement('span');
  countMessage.classList.add('filter-group__selected-text');
  countMessage.textContent = ' selected';
  firstIcon.insertAdjacentElement('beforebegin', countMessage);

  countMessage.insertAdjacentHTML('afterbegin', '<span class="filter-group__selected-text__count">0</span>');

  return countMessage
};

SelectedCounter.prototype.bindChangeEvents = function () {
  var $inputs = this.$inputs;
  // console.log(this)
  $inputs.forEach(input => {
    input.addEventListener('change', this.updateCount.bind(this));
  });
};

SelectedCounter.prototype.updateCount = function () {
  var $fieldset = this.$fieldset;
  var count = $fieldset.querySelectorAll('input:checked').length;

  // if 0 hide
  if (count == 0) {
    this.countElement.textContent = 0;
    this.hideCountMessage();
  } else if (count != this.currentCount) {
    // if changed update
    this.countElement.textContent = count;
    this.showCountMessage();
  }
  // if same, do nothing ----

  this.currentCount = count;
};

SelectedCounter.prototype.hideCountMessage = function () {
  this.countMessage.classList.add('govuk-visually-hidden');
  this.message_is_hidden = true;
};

SelectedCounter.prototype.showCountMessage = function () {
  this.countMessage.classList.remove('govuk-visually-hidden');
  this.message_is_hidden = false;
};

function ScrollableTables ($module) {
  this.$module = $module;
}

ScrollableTables.prototype.init = function () {
  this.data_table = this.$module.querySelector('table');

  // might be worth adding the shadows separately
  this.left_shadow = this.$module.querySelector('.data-table-left-shadow');
  this.right_shadow = this.$module.querySelector('.data-table-right-shadow');

  this.table_viewer = this.$module.querySelector('.wide-table');
  this.table_viewer.addEventListener('scroll', this.toggleShadows.bind(this));

  // trigger toggleShadow for set up
  this.toggleShadows();
};

ScrollableTables.prototype.toggleShadows = function () {
  function scrolledRight (containedEl, viewerEl) {
    return (
      containedEl.offsetWidth - (viewerEl.scrollLeft + viewerEl.offsetWidth)
    )
  }

  this.left_shadow.classList.toggle(
    'visible',
    scrolledRight(this.data_table, this.table_viewer) <
      this.data_table.offsetWidth - this.table_viewer.offsetWidth
  );

  this.right_shadow.classList.toggle(
    'visible',
    this.table_viewer.scrollLeft <
      this.data_table.offsetWidth - this.table_viewer.offsetWidth
  );

  setTimeout(
    function () {
      this.left_shadow.classList.add('with-transition');
      this.right_shadow.classList.add('with-transition');
    }.bind(this),
    2000
  );
};

function LinkableTable ($module) {
  this.$module = $module;
}

LinkableTable.prototype.init = function (params) {
  this.setupOptions(params);

  this.data_table = this.$module.querySelector('table');
  this.data_table_head = this.data_table.querySelector('thead tr');
  this.data_table_body = this.data_table.querySelector('tbody');
  this.rows = this.data_table.querySelectorAll('tbody tr');

  this.addLinkColumn();
  // do I need to delay this?
  this.initialSelected();
};

LinkableTable.prototype.setupOptions = function (params) {
  params = params || {};
  this.idPrefix = params.idPrefix || 'table-x-';
};

LinkableTable.prototype.addLinkColumn = function () {
  const firstCell = this.data_table_head.querySelector('th');
  this.data_table_head.insertBefore(
    this.createCell({ type: 'head' }),
    firstCell
  );
  var rows = this.getTableRowsArray();
  rows.forEach((row, idx) => {
    console.log(idx);
    idx = idx + 1;
    var href = '#' + this.idPrefix + idx.toString();
    if (row.id) {
      href = '#' + row.id;
    }
    this.addCellToRow(
      row,
      this.createCell({ linkIdx: idx.toString(), linkHref: href })
    );
  });
};

LinkableTable.prototype.createCell = function (params) {
  params = params || {};
  var boundLinkToRowHandler = this.linkToRowHandler.bind(this);
  var cell =
    params.type === 'head'
      ? document.createElement('th')
      : document.createElement('td');
  cell.classList.add('data-table__row-link');

  if (params.linkIdx) {
    var _link = document.createElement('a');
    _link.setAttribute('href', params.linkHref);

    var a11yText = document.createElement('span');
    a11yText.classList.add('govuk-visually-hidden');
    a11yText.textContent = 'highlight row ';
    _link.append(a11yText);

    var _linkContent = document.createTextNode('#' + params.linkIdx);
    _link.append(_linkContent);
    _link.addEventListener('click', boundLinkToRowHandler);

    cell.append(_link);
  }
  return cell
};

LinkableTable.prototype.linkToRowHandler = function (e) {
  // e.preventDefault();
  this.deselectRows();
  this.selectRow(e.currentTarget.closest('tr'));
  console.log(e.currentTarget);
};

LinkableTable.prototype.addCellToRow = function (row, cell) {
  const firstCell = row.querySelector('td');
  row.insertBefore(cell, firstCell);
};

LinkableTable.prototype.getTableRowsArray = function () {
  var rows = [];
  var trs = this.data_table_body.querySelectorAll('tr');
  console.log(trs);
  for (var i = 0; i < trs.length; i++) {
    rows.push(trs[i]);
  }
  return rows
};

LinkableTable.prototype.deselectRows = function () {
  this.rows.forEach(row => {
    row.classList.remove('data-table__row-selected');
  });
};

LinkableTable.prototype.selectRow = function (row) {
  row.classList.add('data-table__row-selected');
};

LinkableTable.prototype.highlightHashed = function (hash) {
  var hashlessHash = hash.replace('#', '');

  if (hash.includes(this.idPrefix)) {
    const link = document.querySelector(`[href='${hash}']`);
    const row = link.closest('tr');
    this.selectRow(row);
    row.scrollIntoView({ block: 'center' });
  } else if (document.getElementById(hashlessHash)) {
    // make sure element with id from hash is inside the table
    var el = document.getElementById(hashlessHash);
    if (this.data_table_body.contains(el)) {
      this.selectRow(el);
    }
  }
};

LinkableTable.prototype.hashChangeHandler = function () {
  this.deselectRows();
  this.highlightHashed(window.location.hash);
};

LinkableTable.prototype.initialSelected = function () {
  if (window.location.hash) {
    this.highlightHashed(window.location.hash);
  }

  // add event listener for URL hash changes
  const boundHashChangeHandler = this.hashChangeHandler.bind(this);
  window.addEventListener('hashchange', boundHashChangeHandler);
};

// Back to top module as seen in govuk-design-system
// https://github.com/alphagov/collections/blob/e1f3c74facd889426d24ac730ed0057aa64e2801/app/assets/javascripts/organisation-list-filter.js
function FilterList ($form) {
  this.$form = $form;
  this.filterTimeout = null;
  this.$noMatches = document.querySelector('.js-no-filter-list-matches');
}

FilterList.prototype.init = function (params) {
  this.setupOptions(params);
  const $form = this.$form;
  // Form should only appear if the JS is working
  $form.classList.add('filter-organisations-list__form--active');

  // We don't want the form to submit/refresh the page on enter key
  $form.addEventListener('submit', function () { return false });

  const $input = $form.querySelector('input');
  const boundFilterViaTimeout = this.filterViaTimeout.bind(this);
  $input.addEventListener('keyup', boundFilterViaTimeout);

  // make sure no matches message is initially hidden
  this.$noMatches.classList.add('js-hidden');
};

FilterList.prototype.filterViaTimeout = function (e) {
  clearTimeout(this.filterTimeout);

  const boundFilterList = this.filterList.bind(this);
  this.filterTimeout = setTimeout(function () {
    boundFilterList(e);
  }, 200);
};

FilterList.prototype.filterList = function (e) {
  function convertNodeListToArray (nl) {
    return Array.prototype.slice.call(nl)
  }
  const itemsToFilter = convertNodeListToArray(document.querySelectorAll('[data-filter="item"]'));
  const listsToFilter = convertNodeListToArray(document.querySelectorAll('[data-filter="list"]'));
  const searchTerm = e.target.value;

  const boundMatchSearchTerm = this.matchSearchTerm.bind(this);
  itemsToFilter
    .filter(function ($item) {
      return boundMatchSearchTerm($item, searchTerm)
    })
    .forEach(function (item) {
      item.classList.add('js-hidden');
    });

  this.updateListCounts(listsToFilter);
};

FilterList.prototype.matchSearchTerm = function (item, term) {
  // const itemLabels = item.dataset.filterItemLabels
  const itemLabels = item.querySelector('a').textContent;
  item.classList.remove('js-hidden');
  var searchTermRegexp = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  if (searchTermRegexp.exec(itemLabels) !== null) {
    return false
  }
  return true
};

FilterList.prototype.updateListCounts = function (lists) {
  var totalMatches = 0;
  const list_section_selector = this.list_section_selector;
  const count_wrapper_selector = this.count_wrapper_selector;

  lists.forEach(function (list) {
    var matchingCount = list.querySelectorAll('[data-filter="item"]:not(.js-hidden)').length;
    var listSection = list.closest(list_section_selector);
    var countWrapper = listSection.querySelector(count_wrapper_selector);
    var listCount = countWrapper.querySelector('.js-list-count');
    var accessibleListCount = countWrapper.querySelector('.js-accessible-list-count');

    // show/hide sections with matching items
    if (matchingCount > 0) {
      listSection.classList.remove('js-hidden');
      listCount.textContent = matchingCount;
      accessibleListCount.textContent = matchingCount;
    } else {
      listSection.classList.add('js-hidden');
    }

    totalMatches += matchingCount;
  });

  // if no results show message
  if (this.$noMatches) {
    if (totalMatches == 0) {
      this.$noMatches.classList.remove('js-hidden');
    } else {
      this.$noMatches.classList.add('js-hidden');
    }
  }
};

FilterList.prototype.setupOptions = function (params) {
  params = params || {};
  this.list_section_selector = params.list_section_selector || '.list-count';
  this.count_wrapper_selector = params.count_wrapper_selector || '.list-count__wrapper';
};

// Similar approach to huffduffer
// if input has readonly content make it easy to copy
function InputCopy ($module) {
  this.$module = $module;
}

InputCopy.prototype.init = function (params) {
  this.$module.addEventListener('click', function (ev) {
    var target = ev.target;
    if (target.hasAttribute('readonly')) {
      target.focus();
      target.select();
    }
  });
};

function convertNodeListToArray (nl) {
  return Array.prototype.slice.call(nl)
}

// Back to top module as seen in govuk-design-system
// https://github.com/alphagov/collections/blob/e1f3c74facd889426d24ac730ed0057aa64e2801/app/assets/javascripts/organisation-list-filter.js
function FilterTimelineByDate ($module) {
  this.$module = $module;
  this.filterTimeout = null;
  this.$statusArea = $module.querySelector('.filter-timeline__status-area');
  this.filterObj = {
    year: '',
    month: '',
    day: ''
  };
}

FilterTimelineByDate.prototype.init = function (params) {
  const that = this;
  this.setupOptions(params);
  // get timeline to filter
  this.getTimeline();

  // get the input fields
  this.$inputs = this.getInputs();
  const boundFilterViaTimeout = this.filterViaTimeout.bind(this);
  this.$inputs.forEach(function (input) {
    input.addEventListener('keyup', boundFilterViaTimeout);
  });

  const $resetBtn = this.$statusArea.querySelector('.filter-timeline__reset');
  $resetBtn.addEventListener('click', function (e) {
    that.reset();
  });

  // make sure message area hidden by default
  this.$statusArea.classList.add('js-hidden');
};

FilterTimelineByDate.prototype.getTimeline = function () {
  var timelineSelector = this.$module.dataset.timelineSelector || 'js-timeline-to-filter';
  this.timeline = document.querySelector(`.${timelineSelector}`);
  this.timelineItems = convertNodeListToArray(this.timeline.querySelectorAll('.dl-timeline__entry'));
};

FilterTimelineByDate.prototype.getInputs = function () {
  var inputs = this.$module.querySelectorAll('input');
  return convertNodeListToArray(inputs)
};

FilterTimelineByDate.prototype.filterViaTimeout = function (e) {
  clearTimeout(this.filterTimeout);

  const boundFilterTimeline = this.filterTimeline.bind(this);
  this.filterTimeout = setTimeout(function () {
    boundFilterTimeline(e);
  }, 250);
};

FilterTimelineByDate.prototype.areFiltersSet = function () {
  const dateComponents = ['year', 'month', 'day'];
  const fObj = this.filterObj;

  for (let i = 0; i < 3; i++) {
    if (fObj[dateComponents[i]]) {
      return true
    }
  }
  return false
};

FilterTimelineByDate.prototype.filterTimeline = function (e) {
  const currentInput = e.target;
  this.filterObj[currentInput.dataset.filterTimelineType] = currentInput.value;

  if (this.areFiltersSet()) {
    // hide them all
    this.timelineItems.forEach(function (item) {
      item.classList.add('js-hidden');
    });

    // unhide the items that match
    const matchedItems = this.matchTimelineItems();
    matchedItems.forEach(function (item) {
      item.classList.remove('js-hidden');
    });

    // show status area
    this.$statusArea.classList.remove('js-hidden');
    // update count
    this.setCountMessage(matchedItems.length);

    if (matchedItems.length === 0) {
      this.timeline.classList.add('dl-timeline--empty');
    } else {
      this.timeline.classList.remove('dl-timeline--empty');
    }
  } else {
    this.reset();
  }
};

FilterTimelineByDate.prototype.matchTimelineItems = function () {
  const fObj = this.filterObj;
  let items = this.timelineItems;
  const dateComponents = ['year', 'month', 'day'];
  const that = this;

  dateComponents.forEach(function (_type) {
    if (fObj[_type]) {
      items = items.filter(function (item) {
        return that.checkDatePart(item, _type, fObj[_type])
      });
    }
  });
  return items
};

FilterTimelineByDate.prototype.checkDatePart = function ($el, datePart, val) {
  function capitalise (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  if ($el.dataset[`timeline${capitalise(datePart)}`] === val) {
    return true
  }
  return false
};

FilterTimelineByDate.prototype.setCountMessage = function (count) {
  const $count = this.$statusArea.querySelector('.filter-timeline__count');
  var countMessage = count + ' item';
  if (count !== 1) {
    countMessage = countMessage + 's';
  }
  $count.textContent = countMessage;
};

FilterTimelineByDate.prototype.reset = function () {
  // remove input values
  this.$inputs.forEach(function ($input) {
    $input.value = '';
  });
  // reset stored filter values
  this.defaulFilters();
  // show all items
  this.timelineItems.forEach(function (item) {
    item.classList.remove('js-hidden');
  });
  // back to initial view
  this.$statusArea.classList.add('js-hidden');
};

FilterTimelineByDate.prototype.defaulFilters = function () {
  // all filter options to empty
  this.filterObj = {
    year: '',
    month: '',
    day: ''
  };
};

FilterTimelineByDate.prototype.setupOptions = function (params) {
  params = params || {};
};

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend', factory) :
	(factory());
}(undefined, (function () {
(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js
    var detect = (
      'DOMTokenList' in this && (function (x) {
        return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
      })(document.createElement('x'))
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js
    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

      if (
          !nativeImpl ||
          (
            !!document.createElementNS &&
            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
            !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
          )
        ) {
        global.DOMTokenList = (function() { // eslint-disable-line no-unused-vars
          var dpSupport = true;
          var defineGetter = function (object, name, fn, configurable) {
            if (Object.defineProperty)
              Object.defineProperty(object, name, {
                configurable: false === dpSupport ? true : !!configurable,
                get: fn
              });

            else object.__defineGetter__(name, fn);
          };

          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
          try {
            defineGetter({}, "support");
          }
          catch (e) {
            dpSupport = false;
          }


          var _DOMTokenList = function (el, prop) {
            var that = this;
            var tokens = [];
            var tokenMap = {};
            var length = 0;
            var maxLength = 0;
            var addIndexGetter = function (i) {
              defineGetter(that, i, function () {
                preop();
                return tokens[i];
              }, false);

            };
            var reindex = function () {

              /** Define getter functions for array-like access to the tokenList's contents. */
              if (length >= maxLength)
                for (; maxLength < length; ++maxLength) {
                  addIndexGetter(maxLength);
                }
            };

            /** Helper function called at the start of each class method. Internal use only. */
            var preop = function () {
              var error;
              var i;
              var args = arguments;
              var rSpace = /\s+/;

              /** Validate the token/s passed to an instance method, if any. */
              if (args.length)
                for (i = 0; i < args.length; ++i)
                  if (rSpace.test(args[i])) {
                    error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
                    error.code = 5;
                    error.name = "InvalidCharacterError";
                    throw error;
                  }


              /** Split the new value apart by whitespace*/
              if (typeof el[prop] === "object") {
                tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
              } else {
                tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
              }

              /** Avoid treating blank strings as single-item token lists */
              if ("" === tokens[0]) tokens = [];

              /** Repopulate the internal token lists */
              tokenMap = {};
              for (i = 0; i < tokens.length; ++i)
                tokenMap[tokens[i]] = true;
              length = tokens.length;
              reindex();
            };

            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
            preop();

            /** Return the number of tokens in the underlying string. Read-only. */
            defineGetter(that, "length", function () {
              preop();
              return length;
            });

            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
            that.toLocaleString =
              that.toString = function () {
                preop();
                return tokens.join(" ");
              };

            that.item = function (idx) {
              preop();
              return tokens[idx];
            };

            that.contains = function (token) {
              preop();
              return !!tokenMap[token];
            };

            that.add = function () {
              preop.apply(that, args = arguments);

              for (var args, token, i = 0, l = args.length; i < l; ++i) {
                token = args[i];
                if (!tokenMap[token]) {
                  tokens.push(token);
                  tokenMap[token] = true;
                }
              }

              /** Update the targeted attribute of the attached element if the token list's changed. */
              if (length !== tokens.length) {
                length = tokens.length >>> 0;
                if (typeof el[prop] === "object") {
                  el[prop].baseVal = tokens.join(" ");
                } else {
                  el[prop] = tokens.join(" ");
                }
                reindex();
              }
            };

            that.remove = function () {
              preop.apply(that, args = arguments);

              /** Build a hash of token names to compare against when recollecting our token list. */
              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
                ignore[args[i]] = true;
                delete tokenMap[args[i]];
              }

              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
              for (i = 0; i < tokens.length; ++i)
                if (!ignore[tokens[i]]) t.push(tokens[i]);

              tokens = t;
              length = t.length >>> 0;

              /** Update the targeted attribute of the attached element. */
              if (typeof el[prop] === "object") {
                el[prop].baseVal = tokens.join(" ");
              } else {
                el[prop] = tokens.join(" ");
              }
              reindex();
            };

            that.toggle = function (token, force) {
              preop.apply(that, [token]);

              /** Token state's being forced. */
              if (undefined !== force) {
                if (force) {
                  that.add(token);
                  return true;
                } else {
                  that.remove(token);
                  return false;
                }
              }

              /** Token already exists in tokenList. Remove it, and return FALSE. */
              if (tokenMap[token]) {
                that.remove(token);
                return false;
              }

              /** Otherwise, add the token and return TRUE. */
              that.add(token);
              return true;
            };

            return that;
          };

          return _DOMTokenList;
        }());
      }

      // Add second argument to native DOMTokenList.toggle() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;
        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
          var force = arguments[1];
          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }
          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      }());

      // Add multiple arguments to native DOMTokenList.add() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.add;
        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

      // Add multiple arguments to native DOMTokenList.remove() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.remove;
        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
var detect = ("Document" in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (this.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		this.Document = this.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		this.Document.prototype = document;
	}
}


})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
var detect = ('Element' in this && 'HTMLElement' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
(function () {

	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !cache.hasOwnProperty(propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js
    var detect = (
      'document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function () {
        var e = document.createElement('span');
        e.classList.add('a', 'b');
        return e.classList.contains('b');
      }())
    );

    if (detect) return

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList&flags=always
    (function (global) {
      var dpSupport = true;
      var defineGetter = function (object, name, fn, configurable) {
        if (Object.defineProperty)
          Object.defineProperty(object, name, {
            configurable: false === dpSupport ? true : !!configurable,
            get: fn
          });

        else object.__defineGetter__(name, fn);
      };
      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
      try {
        defineGetter({}, "support");
      }
      catch (e) {
        dpSupport = false;
      }
      /** Polyfills a property with a DOMTokenList */
      var addProp = function (o, name, attr) {

        defineGetter(o.prototype, name, function () {
          var tokenList;

          var THIS = this,

          /** Prevent this from firing twice for some reason. What the hell, IE. */
          gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
          if(THIS[gibberishProperty]) return tokenList;
          THIS[gibberishProperty] = true;

          /**
           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
           *
           * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
           * element instead, this would conflict with element types which use indexed properties (such as forms and
           * select lists).
           */
          if (false === dpSupport) {

            var visage;
            var mirror = addProp.mirror || document.createElement("div");
            var reflections = mirror.childNodes;
            var l = reflections.length;

            for (var i = 0; i < l; ++i)
              if (reflections[i]._R === THIS) {
                visage = reflections[i];
                break;
              }

            /** Couldn't find an element's reflection inside the mirror. Materialise one. */
            visage || (visage = mirror.appendChild(document.createElement("div")));

            tokenList = DOMTokenList.call(visage, THIS, attr);
          } else tokenList = new DOMTokenList(THIS, attr);

          defineGetter(THIS, name, function () {
            return tokenList;
          });
          delete THIS[gibberishProperty];

          return tokenList;
        }, true);
      };

      addProp(global.Element, "classList", "className");
      addProp(global.HTMLElement, "classList", "className");
      addProp(global.HTMLLinkElement, "relList", "rel");
      addProp(global.HTMLAnchorElement, "relList", "rel");
      addProp(global.HTMLAreaElement, "relList", "rel");
    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

})));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend', factory) :
	(factory());
}(undefined, (function () {
(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
var detect = ('Window' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
		}
	}(this));
}

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
var detect = ("Document" in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (this.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		this.Document = this.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		this.Document.prototype = document;
	}
}


})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
var detect = ('Element' in this && 'HTMLElement' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
(function () {

	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !cache.hasOwnProperty(propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js
var detect = (
  (function(global) {

  	if (!('Event' in global)) return false;
  	if (typeof global.Event === 'function') return true;

  	try {

  		// In IE 9-11, the Event object exists but cannot be instantiated
  		new Event('click');
  		return true;
  	} catch(e) {
  		return false;
  	}
  }(this))
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	function indexOf(array, element) {
		var
		index = -1,
		length = array.length;

		while (++index < length) {
			if (index in array && array[index] === element) {
				return index;
			}
		}

		return -1;
	}

	var existingProto = (window.Event && window.Event.prototype) || null;
	window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	};
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = indexOf(element._events[type].list, listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

})));

var tabsItemClass = 'app-tabs__item';
var tabsItemCurrentClass = tabsItemClass + '--current';
var tabsItemJsClass = 'js-tabs__item';
var headingItemClass = 'app-tabs__heading';
var headingItemCurrentClass = headingItemClass + '--current';
var headingItemJsClass = 'js-tabs__heading';
var tabContainerHiddenClass = 'app-tabs__container--hidden';
var tabContainerJsClass = '.js-tabs__container';
var tabContainerNoTabsJsClass = 'js-tabs__container--no-tabs';
var allTabTogglers = '.' + tabsItemJsClass + ' a, ' + '.' + headingItemJsClass + ' a';
var tabTogglersMarkedOpenClass = '.js-tabs__item--open a';

function AppTabs ($module) {
  this.$module = $module;
  this.$allTabContainers = this.$module.querySelectorAll(tabContainerJsClass);
  console.log(this.$allTabContainers);
  this.$allTabTogglers = this.$module.querySelectorAll(allTabTogglers);
  console.log(this.$allTabTogglers);
  this.$allTabTogglersMarkedOpen = this.$module.querySelectorAll(tabTogglersMarkedOpenClass);
}

AppTabs.prototype.init = function () {
  if (!this.$module) {
    return
  }
  // reset all tabs
  this.resetTabs();
  // add close to each tab
  this.$module.addEventListener('click', this.handleClick.bind(this));

  this.$allTabTogglersMarkedOpen.forEach(function ($tabToggler) {
    $tabToggler.click();
  });
};

// expand and collapse functionality
AppTabs.prototype.activateAndToggle = function (event) {
  event.preventDefault();
  var $currentToggler = event.target;
  var $currentTogglerSiblings = this.$module.querySelectorAll('[href="' + $currentToggler.hash + '"]');
  var $tabContainer;

  try {
    $tabContainer = this.$module.querySelector($currentToggler.hash);
  } catch (exception) {
    throw new Error('Invalid example ID given: ' + exception)
  }
  var isTabAlreadyOpen = $currentToggler.getAttribute('aria-expanded') === 'true';

  console.log($currentToggler.hash);
  console.log($tabContainer, isTabAlreadyOpen);
  if (!$tabContainer) {
    return
  }

  if (isTabAlreadyOpen) {
    $tabContainer.classList.add(tabContainerHiddenClass);
    $tabContainer.setAttribute('aria-hidden', 'true');
    $currentTogglerSiblings.forEach(function ($tabToggler) {
      $tabToggler.setAttribute('aria-expanded', 'false');
      // desktop and mobile
      $tabToggler.parentNode.classList.remove(tabsItemCurrentClass, headingItemCurrentClass);
    });
  } else {
    // Reset tabs
    this.resetTabs();
    // make current active
    $tabContainer.classList.remove(tabContainerHiddenClass);
    $tabContainer.setAttribute('aria-hidden', 'false');

    $currentTogglerSiblings.forEach(function ($tabToggler) {
      $tabToggler.setAttribute('aria-expanded', 'true');
      if ($tabToggler.parentNode.classList.contains(tabsItemClass)) {
        $tabToggler.parentNode.classList.add(tabsItemCurrentClass);
      } else if ($tabToggler.parentNode.classList.contains(headingItemClass)) {
        $tabToggler.parentNode.classList.add(headingItemCurrentClass);
      }
    });
  }
};
// reset aria attributes to default and close the tab content container
AppTabs.prototype.resetTabs = function () {
  this.$allTabContainers.forEach(function ($tabContainer) {
    console.log('reset tabs');
    // unless the tab content has not tabs and it's been set as open
    if (!$tabContainer.classList.contains(tabContainerNoTabsJsClass)) {
      $tabContainer.classList.add(tabContainerHiddenClass);
      $tabContainer.setAttribute('aria-hidden', 'true');
    }
  });

  this.$allTabTogglers.forEach(function ($tabToggler) {
    $tabToggler.setAttribute('aria-expanded', 'false');
    // desktop and mobile
    $tabToggler.parentNode.classList.remove(tabsItemCurrentClass, headingItemCurrentClass);
  });
};

AppTabs.prototype.handleClick = function (event) {
  console.log(event.target.parentNode);
  // toggle and active selected tab and heading (on mobile)
  if (event.target.parentNode.classList.contains(tabsItemJsClass) ||
    event.target.parentNode.classList.contains(headingItemJsClass)) {
    this.activateAndToggle(event);
  }
};

function polyfill (options) {
  // polyfill for browsers without NodeList forEach method
  if (window.NodeList && !window.NodeList.prototype.forEach) {
    window.NodeList.prototype.forEach = window.Array.prototype.forEach;
  }
}

exports.polyfill = polyfill;
exports.BackToTop = BackToTop;
exports.FilterCheckboxes = FilterCheckboxes;
exports.SelectedCounter = SelectedCounter;
exports.ScrollableTables = ScrollableTables;
exports.LinkableTable = LinkableTable;
exports.FilterList = FilterList;
exports.InputCopy = InputCopy;
exports.FilterTimelineByDate = FilterTimelineByDate;
exports.AppTabs = AppTabs;

})));
