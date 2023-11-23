var Calc = (function(e) {
	var a = {};
	function t(r) {
		if (a[r]) return a[r].exports;
		var c = (a[r] = { i: r, l: !1, exports: {} });
		return e[r].call(c.exports, c, c.exports, t), (c.l = !0), c.exports;
	}
	return (
		(t.m = e),
		(t.c = a),
		(t.d = function(e, a, r) {
			t.o(e, a) ||
				Object.defineProperty(e, a, { enumerable: !0, get: r });
		}),
		(t.r = function(e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(t.t = function(e, a) {
			if ((1 & a && (e = t(e)), 8 & a)) return e;
			if (4 & a && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(t.r(r),
				Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}),
				2 & a && "string" != typeof e)
			)
				for (var c in e)
					t.d(
						r,
						c,
						function(a) {
							return e[a];
						}.bind(null, c)
					);
			return r;
		}),
		(t.n = function(e) {
			var a =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return t.d(a, "a", a), a;
		}),
		(t.o = function(e, a) {
			return Object.prototype.hasOwnProperty.call(e, a);
		}),
		(t.p = "/assets/js/"),
		t((t.s = 0))
	);
})([
	function(e, a, t) {
		"use strict";
		t.r(a);
		var r,
			c,
			i,
			l,
			n = ((r = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g),
			(c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g),
			(i = /[^-+\dA-Z]/g),
			(l = function(e, a) {
				for (e = String(e), a = a || 2; e.length < a; ) e = "0" + e;
				return e;
			}),
			function(e, a, t) {
				var o = n;
				if (
					(1 != arguments.length ||
						"[object String]" !=
							Object.prototype.toString.call(e) ||
						/\d/.test(e) ||
						((a = e), (e = void 0)),
					(e = e ? new Date(e) : new Date()),
					isNaN(e))
				)
					throw SyntaxError("invalid date");
				"UTC:" ==
					(a = String(o.masks[a] || a || o.masks.default)).slice(
						0,
						4
					) && ((a = a.slice(4)), (t = !0));
				var d = t ? "getUTC" : "get",
					s = e[d + "Date"](),
					u = e[d + "Day"](),
					p = e[d + "Month"](),
					f = e[d + "FullYear"](),
					v = e[d + "Hours"](),
					m = e[d + "Minutes"](),
					y = e[d + "Seconds"](),
					g = e[d + "Milliseconds"](),
					h = t ? 0 : e.getTimezoneOffset(),
					T = {
						d: s,
						dd: l(s),
						ddd: o.i18n.dayNames[u],
						dddd: o.i18n.dayNames[u + 7],
						m: p + 1,
						mm: l(p + 1),
						mmm: o.i18n.monthNames[p],
						mmmm: o.i18n.monthNames[p + 12],
						yy: String(f).slice(2),
						yyyy: f,
						h: v % 12 || 12,
						hh: l(v % 12 || 12),
						H: v,
						HH: l(v),
						M: m,
						MM: l(m),
						s: y,
						ss: l(y),
						l: l(g, 3),
						L: l(g > 99 ? Math.round(g / 10) : g),
						t: 12 > v ? "a" : "p",
						tt: 12 > v ? "am" : "pm",
						T: 12 > v ? "A" : "P",
						TT: 12 > v ? "AM" : "PM",
						Z: t
							? "UTC"
							: (String(e).match(c) || [""]).pop().replace(i, ""),
						o:
							(h > 0 ? "-" : "+") +
							l(
								100 * Math.floor(Math.abs(h) / 60) +
									(Math.abs(h) % 60),
								4
							),
						S: ["th", "st", "nd", "rd"][
							s % 10 > 3
								? 0
								: (((s % 100) - (s % 10) != 10) * s) % 10
						]
					};
				return a.replace(r, function(e) {
					return e in T ? T[e] : e.slice(1, e.length - 1);
				});
			});
		(n.masks = {
			default: "ddd mmm dd yyyy HH:MM:ss",
			shortDate: "m/d/yy",
			mediumDate: "mmm d, yyyy",
			longDate: "mmmm d, yyyy",
			fullDate: "dddd, mmmm d, yyyy",
			shortTime: "h:MM TT",
			mediumTime: "h:MM:ss TT",
			longTime: "h:MM:ss TT Z",
			isoDate: "yyyy-mm-dd",
			isoTime: "HH:MM:ss",
			isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
			isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
		}),
			(n.i18n = {
				dayNames: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday"
				],
				monthNames: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				]
			}),
			(Date.prototype.format = function(e, a) {
				return n(this, e, a);
			});
		var o = function(e) {
				if (e && "FORM" === e.nodeName) {
					var a,
						t,
						r = [];
					for (a = e.elements.length - 1; a >= 0; a -= 1)
						if ("" !== e.elements[a].name)
							switch (e.elements[a].nodeName) {
								case "INPUT":
									switch (e.elements[a].type) {
										case "text":
										case "email":
										case "hidden":
										case "password":
										case "button":
										case "reset":
										case "submit":
											r.push(
												e.elements[a].name +
													"=" +
													encodeURIComponent(
														e.elements[a].value
													)
											);
											break;
										case "checkbox":
										case "radio":
											e.elements[a].checked &&
												r.push(
													e.elements[a].name +
														"=" +
														encodeURIComponent(
															e.elements[a].value
														)
												);
									}
									break;
								case "file":
									break;
								case "TEXTAREA":
									r.push(
										e.elements[a].name +
											"=" +
											encodeURIComponent(
												e.elements[a].value
											)
									);
									break;
								case "SELECT":
									switch (e.elements[a].type) {
										case "select-one":
											r.push(
												e.elements[a].name +
													"=" +
													encodeURIComponent(
														e.elements[a].value
													)
											);
											break;
										case "select-multiple":
											for (
												t =
													e.elements[a].options
														.length - 1;
												t >= 0;
												t -= 1
											)
												e.elements[a].options[t]
													.selected &&
													r.push(
														e.elements[a].name +
															"=" +
															encodeURIComponent(
																e.elements[a]
																	.options[t]
																	.value
															)
													);
									}
									break;
								case "BUTTON":
									switch (e.elements[a].type) {
										case "reset":
										case "submit":
										case "button":
											r.push(
												e.elements[a].name +
													"=" +
													encodeURIComponent(
														e.elements[a].value
													)
											);
									}
							}
					return r.join("&");
				}
			},
			d = { CALCULATION: "calculation", ORDER_INTENT: "order_intent" },
			s = { CALCULATION: "calculator_action" };
		function u() {
			return void 0 !== window.exponea;
		}
		function p(e, a) {
			u() && window.exponea.track(e, a);
		}
		function f(e) {
			!(function(e) {
				window.fbq || (window.fbq = []), window.fbq.push(e);
			})(["trackCustom", e]);
		}
		var v,
			m,
			y,
			g,
			h,
			T,
			L = 9e4,
			b = ((g = function(e, a) {
				p(e, a), (y = !0);
			}),
			(h = 2e3),
			function() {
				var e = this,
					a = arguments;
				clearTimeout(T),
					(T = setTimeout(function() {
						g.apply(e, a);
					}, h));
			});
		function I(e) {
			var a;
			return (
				e.academicLevels[0].forEach(function(t) {
					t.id === e.selectedAcademicLevelId && (a = t.title);
				}),
				a
			);
		}
		function C(e) {
			var a;
			return (
				e.paperTypes.forEach(function(t) {
					t.id === e.selectedPapertypeId && (a = t.option);
				}),
				a
			);
		}
		function S(e) {
			var a;
			return (
				e.availableTariffs.forEach(function(t) {
					t.id === e.selectedTariffId && (a = t);
				}),
				a
			);
		}
		function _(e) {
			var a,
				t = S(e);
			return t && (a = Date.now() + 60 * t.hrs * 60 * 1e3), a;
		}
		function M(e) {
			var a,
				t = S(e);
			return t && (a = t.name), a;
		}
		function w(e) {
			var a = (function(e) {
				var a;
				return (
					e.availableTariffs.forEach(function(t) {
						t.id === e.selectedTariffId &&
							(a = parseFloat(t.pricePerPage) || 0);
					}),
					a
				);
			})(e);
			return {
				academic_level: I(e),
				paper_type: C(e),
				discipline: void 0,
				topic: "Writer’s choice",
				deadline: _(e),
				pages_quantity: e.pagesQty,
				pages_price: a,
				pages_total_price: e.totalPrice,
				chart_quantity: 0,
				chart_price: 0.5 * a,
				chart_total_price: 0,
				slides_quantity: 0,
				slides_price: 0.5 * a,
				slides_total_price: 0,
				total_price: e.totalPrice,
				deadline_datetime: M(e)
			};
		}
		var A = function(e, a) {
				if (u()) {
					var t, r;
					if ("setState" === e) {
						if (!m) return void (m = !0);
						(t = d.CALCULATION),
							(r = {
								academic_level: I((c = a.newState)),
								paper_type: C(c),
								deadline: _(c),
								pages_quantity: c.pagesQty,
								total_price: c.totalPrice,
								url: window.location.pathname
							}),
							y || b(t, r),
							clearTimeout(v),
							(function(e, a) {
								v = setTimeout(p, L, e, a);
							})(t, r);
					}
					"submit" === e &&
						(clearTimeout(v),
						p((t = d.ORDER_INTENT), (r = w(a.state))));
				}
				var c;
			},
			D = !1,
			P = !1;
		var q = function(e) {
				if ("setState" === e) {
					if (!D) return void (D = !0);
					P || (f(s.CALCULATION), (P = !0));
				}
			},
			E = [];
		var U = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		];
		function H(e, a) {
			for (var t, r = 0; r < e.length; r++) {
				var c = e[r];
				if (
					(!t || Math.abs(c.hrs - a) < Math.abs(t.hrs - a)) &&
					(t = c).hrs === a
				)
					return t;
			}
			return t;
		}
		function k(e) {
			var a = new Date(),
				t = 24 - (a.getHours() + 1);
			if ((a.setHours(parseInt(a.getHours()) + e), e <= t))
				return (
					"today at <br>" +
					(a.getHours() % 12) +
					" " +
					(a.getHours() > 12 ? "PM" : "AM")
				);
			if (e <= t + 24)
				return (
					"tomorrow at " +
					(a.getHours() % 12) +
					" " +
					(a.getHours() > 12 ? "PM" : "AM")
				);
			var r = U[a.getMonth()];
			return a.getDate() + " " + r + "<i></i>";
		}
		function N(e, a) {
			var t = new XMLHttpRequest();
			t.open("GET", "/api/get_calculator/?" + e.join("&")),
				t.send(),
				(t.onreadystatechange = function() {
					if (4 === this.readyState) {
						if (200 !== this.status)
							return a(new Error(this.statusText));
						var e = JSON.parse(this.responseText);
						return e.error ? a(new Error(e.error)) : a(void 0, e);
					}
				});
		}
		function Q(e, a, t) {
			window.dataLayer = window.dataLayer || [];
			var r = [],
				c = !1,
				i = {},
				l = Object.freeze({
					isLoading: !0,
					siteId: "",
					calculatorType: "",
					format: "",
					callback: function() {},
					callbackEmail: function() {},
					environment: "",
					siteUrl: "",
					showTipDiscount: !1,
					pagesQty: 0,
					paperTypes: [],
					academicLevels: [],
					deadlines: [],
					selectedCurrency: void 0,
					currency: [],
					decimal: !1,
					decimalForUSD: !1,
					tariffsIds: [],
					tariffsById: {},
					selectedAcademicLevelId: void 0,
					dissertationPaperTypes: [],
					availableTariffs: [],
					disabledAcademicLevelsById: []
				});
			function n(e) {
				var a = parseFloat(e)
					.toFixed(2)
					.toString()
					.split(".");
				return l.decimal && 1 !== l.currency[l.selectedCurrency].rate
					? a[0] + '<sup class="decimal">' + a[1] + "</sup>"
					: l.decimal && 1 === l.currency[l.selectedCurrency].rate
					? l.decimalForUSD
						? a[0] + '<sup class="decimal">' + a[1] + "</sup>"
						: a[0]
					: Math.round(e);
			}
			function d(e) {
				for (var a = 0, t = 1; a < y.length; a++)
					l.tariffsById[y[a]].academicLevel === e &&
						l.tariffsById[y[a]].isDefault &&
						l.availableTariffs.length < 2 &&
						(t =
							0 === l.tariffsById[y[a]].minPages
								? 1
								: l.tariffsById[y[a]].minPages);
				return t;
			}
			var s = function() {
				var e,
					a,
					r,
					c,
					n = o(i.calculatorForm);
				if ("CustomEmailCalculator" == l.calculatorType)
					i.emailInput &&
					((c = i.emailInput.value),
					!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						c
					))
						? i.emailInput.focus()
						: ((n +=
								"&siteId=" +
								l.siteId +
								"&calculatorType=" +
								l.calculatorType +
								"&format=" +
								l.format),
						  (e = n),
						  (a = function(e, a) {
								return e
									? console.error("Error: " + e.message)
									: a
									? void (a && l.callbackEmail.call(this))
									: console.error(
											"Error: Some parameter is incorrect"
									  );
						  }),
						  (r = new XMLHttpRequest()).open(
								"GET",
								"/assets/submit/?" + e
						  ),
						  r.send(),
						  (r.onreadystatechange = function() {
								if (4 === this.readyState) {
									if (200 !== this.status)
										return a(new Error(this.statusText));
									var e = JSON.parse(this.responseText);
									return e.error
										? a(new Error(e.error))
										: a(void 0, e);
								}
						  }));
				else {
					var d = "production" === l.environment ? l.siteUrl : "";
					l.selectedCurrency &&
						(n += "&currencyName=" + l.selectedCurrency),
						(window.location = d + "/order?" + n);
				}
				t.middleware && t.middleware("submit", { state: l });
			};
			if (
				(e.querySelector("[data-calculator-form]") &&
					((i.calculatorForm = e.querySelector(
						"[data-calculator-form]"
					)),
					i.calculatorForm.addEventListener("submit", function(e) {
						e.preventDefault(), s();
					})),
				e.querySelector("[data-total-price]") &&
					(i.totalPrice = e.querySelector("[data-total-price]")),
				e.querySelector("[data-academic-level-select]") &&
					((i.papertypeSelect = e.querySelector(
						"[data-academic-level-select]"
					)),
					i.papertypeSelect.addEventListener("change", function(e) {
						p({ selectedPapertypeId: +e.target.value || void 0 });
					})),
				e.querySelector("[data-plus-button]") &&
					((i.plusButton = e.querySelector("[data-plus-button]")),
					i.plusButton.addEventListener("click", function(e) {
						var a = l.pagesQty + 1;
						void 0 !== a && a > 999 && (a = 999),
							p({ pagesQty: a });
					})),
				e.querySelector("[data-minus-button]") &&
					((i.minusButton = e.querySelector("[data-minus-button]")),
					i.minusButton.addEventListener("click", function(e) {
						var a = Math.max(0, l.pagesQty - 1);
						void 0 !== a && a < 1 && (a = 1), p({ pagesQty: a });
					})),
				e.querySelector("[data-pages-input]") &&
					((i.pagesInput = e.querySelector("[data-pages-input]")),
					i.pagesInput.addEventListener("input", function(e) {
						e.target.value = e.target.value.replace(/\D+/g, "");
						var a = Math.max(0, +e.target.value);
						isNaN(a) && ((a = void 0), (e.target.value = "")),
							void 0 !== a && a < 1
								? (a = 1)
								: void 0 !== a && a > 999 && (a = 999),
							a < d(l.selectedAcademicLevelId)
								? (e.target.value = d(
										l.selectedAcademicLevelId
								  ))
								: (e.target.value = void 0 === a ? "" : a),
							p({ pagesQty: a });
					}),
					i.pagesInput.addEventListener("change", function(e) {
						var a = Math.max(0, +e.target.value);
						isNaN(a) && (a = 2), p({ pagesQty: a });
					})),
				e.querySelector("[data-words-qty]") &&
					(i.wordsQty = e.querySelector("[data-words-qty]")),
				e.querySelector("[data-academic-level-control]") &&
					((i.academicLevelControl = e.querySelector(
						"[data-academic-level-control]"
					)),
					i.academicLevelControl.addEventListener("change", function(
						e
					) {
						l.disabledAcademicLevelsById[+e.target.value] ||
							p({ selectedAcademicLevelId: +e.target.value });
					})),
				e.querySelector("[data-academic-level-control-upgrade]") &&
					((i.academicLevelControlUpgrade = e.querySelector(
						"[data-academic-level-control-upgrade]"
					)),
					i.academicLevelControlUpgrade.addEventListener(
						"change",
						function(e) {
							l.disabledAcademicLevelsById[+e.target.value] ||
								p({ selectedAcademicLevelId: +e.target.value });
						}
					)),
				e.querySelector("[data-academic-level-select-mobile]") &&
					((i.academicLevelSelectMobile = e.querySelector(
						"[data-academic-level-select-mobile]"
					)),
					i.academicLevelSelectMobile.addEventListener(
						"change",
						function(e) {
							p({ selectedAcademicLevelId: +e.target.value });
						}
					)),
				e.querySelector("[data-tariff-control]") &&
					((i.tariffControl = e.querySelector(
						"[data-tariff-control]"
					)),
					i.tariffControl.addEventListener("change", function(e) {
						e.stopPropagation(),
							p({ selectedTariffId: +e.target.value });
					})),
				e.querySelector("[data-tariff-control-mobile]") &&
					((i.tariffControlMobile = e.querySelector(
						"[data-tariff-control-mobile]"
					)),
					i.tariffControlMobile.addEventListener("change", function(
						e
					) {
						e.stopPropagation(),
							p({ selectedTariffId: +e.target.value });
					}),
					i.tariffControlMobile.addEventListener("click", function(
						e
					) {
						(i.tariffControlMobile.className +=
							" uvocalc--academic_level_content__out"),
							setTimeout(function() {
								i.tariffControlMobile.className = i.tariffControlMobile.className
									.replace(
										/(?:^|\s)uvocalc--academic_level_content__active(?!\S)/g,
										""
									)
									.replace(
										/(?:^|\s)uvocalc--academic_level_content__out(?!\S)/g,
										""
									);
							}, 300);
					})),
				e.querySelector("[data-tariff-control-upgrade]") &&
					((i.tariffControlUpgrade = e.querySelector(
						"[data-tariff-control-upgrade]"
					)),
					i.tariffControlUpgrade.addEventListener("change", function(
						e
					) {
						e.stopPropagation(),
							p({ selectedTariffId: +e.target.value });
					}),
					e.querySelector("[data-tariff-control-mobile]") &&
						i.tariffControlUpgrade.addEventListener(
							"click",
							function(e) {
								i.tariffControlMobile.classList.contains(
									"uvocalc--academic_level_content__active"
								)
									? setTimeout(function() {
											i.tariffControlMobile.className +=
												"";
									  }, 300)
									: (i.tariffControlMobile.className +=
											" uvocalc--academic_level_content__active");
							}
						)),
				e.querySelector("[data-deadline-hidden]") &&
					(i.deadlineHidden = e.querySelector(
						"[data-deadline-hidden]"
					)),
				e.querySelector("[data-deadline-static]") &&
					((i.deadlineStatic = e.querySelector(
						"[data-deadline-static]"
					)),
					i.deadlineStatic.addEventListener("change", function(e) {
						e.stopPropagation(),
							p({ selectedTariffId: +e.target.value });
					})),
				e.querySelector("[data-input-email]") &&
					(i.emailInput = e.querySelector("[data-input-email]")),
				e.querySelector("[data-words-qty]") &&
					(i.wordsQty = e.querySelector("[data-words-qty]")),
				e.querySelector("[data-notice]") &&
					(i.notice = e.querySelector("[data-notice]")),
				e.querySelector("[data-submit-button]") &&
					((i.submitButton = e.querySelector("[data-submit-button]")),
					"A" === i.submitButton.tagName &&
						i.submitButton.addEventListener("click", s)),
				e.querySelector("[data-tip-discount]") &&
					(i.tipDiscount = e.querySelector("[data-tip-discount]")),
				e.querySelector("[data-ext-time]") &&
					(i.extTime = e.querySelector("[data-ext-time]")),
				e.querySelector("[data-currency]"))
			)
				if (Object.keys(a.currency.currencyInfo).length > 1)
					(i.currency = e.querySelector("[data-currency]")),
						i.currency.addEventListener("change", function(e) {
							e.stopPropagation(),
								p({ selectedCurrency: e.target.value }),
								window.dataLayer.push({
									event: "calculator-currency-select",
									CalculatorCurrencySelect: e.target.value
								});
						});
				else {
					var u = e.querySelector("[data-currency-wrap]");
					u.parentNode.removeChild(u);
				}
			function p(e) {
				for (var a in l)
					l.hasOwnProperty(a) &&
						(e.hasOwnProperty(a) || (e[a] = l[a]));
				!(function(e, a) {
					if (a.selectedPapertypeId !== e.selectedPapertypeId)
						for (
							a.disabledAcademicLevelsById = (function(e) {
								var a = {};
								if (
									-1 !==
									e.dissertationPaperTypes.indexOf(
										e.selectedPapertypeId
									)
								)
									for (
										var t = 0;
										t < e.academicLevels[0].length;
										t++
									)
										e.academicLevels[0][t].id < 3 &&
											(a[e.academicLevels[0][t].id] =
												"Please note that any orders related to thesis and dissertation papers, as well as their parts/chapters, are only available for the University (College 3-4) academic level and higher.");
								return a;
							})(a);
							a.disabledAcademicLevelsById[
								a.selectedAcademicLevelId
							];

						)
							a.selectedAcademicLevelId =
								a.academicLevels[0][
									a.selectedAcademicLevelId
								].id;
					if (
						a.selectedAcademicLevelId !==
							e.selectedAcademicLevelId ||
						a.pagesQty !== e.pagesQty
					) {
						for (var t = [], r = 0; r < a.tariffsIds.length; r++)
							(n = a.tariffsById[a.tariffsIds[r]])
								.academicLevel === a.selectedAcademicLevelId &&
								(!n.minPages || a.pagesQty >= n.minPages) &&
								t.push(n);
						t.sort(function(e, a) {
							return a.hrs - e.hrs;
						}),
							(a.availableTariffs = t);
						var c = e.tariffsById[e.selectedTariffId];
						if (c) {
							var i = H(t, c.hrs);
							a.selectedTariffId = i && i.id;
						} else {
							var l = 8;
							for (r = 0; r < t.length; r++)
								t[r].isDefault && (l = t[r].hrs);
							(i = H(t, l)), (a.selectedTariffId = i && i.id);
						}
					}
					a.showTipDiscount = a.pagesQty >= 30;
					var n,
						o = 0;
					if (void 0 !== (n = a.tariffsById[a.selectedTariffId])) {
						var d =
							+n.pricePerPage *
							a.currency[a.selectedCurrency].rate;
						n && a.decimal
							? (o = d * a.pagesQty)
							: n &&
							  !a.decimal &&
							  (o = Math.round(d) * a.pagesQty),
							(a.totalPrice = o);
					} else a.pagesQty = e.pagesQty;
				})(l, e),
					t.middleware &&
						t.middleware("setState", { state: l, newState: e });
				var r = {};
				for (var a in e)
					e.hasOwnProperty(a) && l[a] !== e[a] && (r[a] = !0);
				(l = Object.freeze(e)),
					((r.selectedPapertypeId && i.papertypeSelect) ||
						(r.paperTypes && i.papertypeSelect)) &&
						f.renderPapertypes(l),
					r.pagesQty && i.pagesInput && f.renderPagesValue(l),
					((r.selectedAcademicLevelId && i.academicLevelControl) ||
						(r.academicLevels && i.academicLevelControl) ||
						(r.disabledAcademicLevelsById &&
							i.academicLevelControl)) &&
						f.renderAcademicLevels(l),
					((r.selectedAcademicLevelId &&
						i.academicLevelControlUpgrade) ||
						(r.academicLevels && i.academicLevelControlUpgrade) ||
						(r.disabledAcademicLevelsById &&
							i.academicLevelControlUpgrade)) &&
						f.renderAcademicLevelsUpgrade(l),
					((r.selectedAcademicLevelId &&
						i.academicLevelSelectMobile &&
						i.pagesInput) ||
						(r.academicLevels &&
							i.academicLevelSelectMobile &&
							i.pagesInput) ||
						(r.disabledAcademicLevelsById &&
							i.academicLevelSelectMobile &&
							i.pagesInput) ||
						(r.pagesQty &&
							i.academicLevelSelectMobile &&
							i.pagesInput)) &&
						(f.renderAcademicLevelsMobile(l),
						f.renderPagesValue(l)),
					((r.selectedAcademicLevelId &&
						i.academicLevelControl &&
						i.tariffControl) ||
						(r.availableTariffs &&
							i.academicLevelControl &&
							i.tariffControl) ||
						(r.selectedTariffId &&
							i.academicLevelControl &&
							i.tariffControl) ||
						(r.selectedCurrency &&
							i.academicLevelControl &&
							i.tariffControl &&
							i.currency)) &&
						f.renderTariffs(l),
					((r.selectedAcademicLevelId &&
						i.academicLevelControlUpgrade &&
						i.tariffControlMobile) ||
						(r.availableTariffs &&
							i.academicLevelControlUpgrade &&
							i.tariffControlMobile) ||
						(r.selectedTariffId &&
							i.academicLevelControlUpgrade &&
							i.tariffControlMobile) ||
						(r.selectedCurrency &&
							i.academicLevelControlUpgrade &&
							i.tariffControlMobile &&
							i.currency)) &&
						f.renderTariffsMobile(l),
					((r.selectedTariffId &&
						i.tariffControlUpgrade &&
						!r.selectedAcademicLevelId) ||
						(r.availableTariffs &&
							!r.selectedAcademicLevelId &&
							i.tariffControlUpgrade)) &&
						((c = !1), f.renderTariffsUpgrade(l)),
					((r.selectedAcademicLevelId &&
						i.academicLevelControlUpgrade &&
						i.tariffControlUpgrade) ||
						(r.selectedCurrency &&
							i.tariffControlUpgrade &&
							i.currency)) &&
						((c = !0), f.renderTariffsUpgrade(l)),
					((r.selectedAcademicLevelId && i.deadlineStatic) ||
						(r.availableTariffs && i.deadlineStatic) ||
						(r.selectedTariffId && i.deadlineStatic)) &&
						f.renderStaticDeadline(l),
					((r.selectedAcademicLevelId && i.deadlineHidden) ||
						(r.availableTariffs && i.deadlineHidden)) &&
						f.renderHiddenDeadline(l),
					r.showTipDiscount &&
						i.tipDiscount &&
						f.renderTipDiscount(l),
					r.selectedCurrency && i.currency && f.renderCurrency(l),
					r.isLoading && f.renderLoadingState(),
					r.totalPrice && i.extTime && f.renderFinalDeadline(l),
					((r.totalPrice && i.totalPrice) ||
						(r.selectedCurrency && i.currency && i.totalPrice)) &&
						f.renderTotalPrice(l);
			}
			for (
				var f = {
						renderLoadingState: function() {
							(i.calculatorForm.style.display = l.isLoading
								? "none"
								: "block"),
								l.callback(this, l, i);
						},
						renderTotalPrice: function(e) {
							var a = e.currency[e.selectedCurrency].symbol;
							i.totalPrice.innerHTML =
								"<span>" + a + "</span>" + n(e.totalPrice);
						},
						renderPapertypes: function(e) {
							for (
								var a = "", t = 0;
								t < e.paperTypes.length;
								t++
							) {
								var r = e.paperTypes[t],
									c = r.id === e.selectedPapertypeId;
								a +=
									'<option value="' +
									r.id +
									'" ' +
									(c ? "selected" : "") +
									">" +
									r.option +
									"</option>";
							}
							i.papertypeSelect.innerHTML = a;
						},
						renderPagesValue: function(e) {
							(i.minusButton.disabled =
								e.pagesQty < d(e.selectedAcademicLevelId) + 1 ||
								e.disabledAcademicLevelsById[
									e.selectedAcademicLevelId
								]),
								(i.plusButton.disabled = e.pagesQty > 998),
								void 0 !== e.pagesQty
									? e.pagesQty < d(e.selectedAcademicLevelId)
										? ((i.pagesInput.value = d(
												e.selectedAcademicLevelId
										  )),
										  p({
												pagesQty: d(
													e.selectedAcademicLevelId
												)
										  }))
										: (i.pagesInput.value = e.pagesQty)
									: (i.pagesInput.value = ""),
								i.wordsQty &&
									(i.wordsQty.innerHTML = e.pagesQty
										? 275 * e.pagesQty + " words"
										: "");
						},
						renderCurrency: function(e) {
							var a = "";
							for (var t in e.currency) {
								a +=
									'<option value="' +
									t +
									'" ' +
									(t === e.selectedCurrency
										? "selected"
										: "") +
									">" +
									e.currency[t].symbol +
									" " +
									t +
									"</option>";
							}
							i.currency.innerHTML = a;
						},
						renderAcademicLevels: function(e) {
							for (
								var a = "", t = 0;
								t < e.academicLevels[0].length;
								t++
							) {
								var r = e.academicLevels[0][t],
									c = r.id === e.selectedAcademicLevelId,
									l =
										"level ui-state-active ui-button" +
										(c ? " current" : ""),
									n = e.disabledAcademicLevelsById[r.id];
								a =
									a +
									'<label class="' +
									l +
									" " +
									(n ? "disabled" : "") +
									'" style="' +
									(n
										? "opacity: 0.7; cursor: not-allowed;"
										: "") +
									'" title="' +
									(n || "") +
									'"><span class="ui-button-text">' +
									r.title +
									'</span><input name="academicLevelId" type="radio" value="' +
									r.id +
									'" ' +
									(c ? "checked" : "") +
									" " +
									(n ? 'disabled="disabled"' : "") +
									"></label>";
							}
							i.academicLevelControl.innerHTML = a;
						},
						renderAcademicLevelsMobile: function(e) {
							for (
								var a = "", t = 0;
								t < e.academicLevels[0].length;
								t++
							) {
								var r = e.academicLevels[0][t],
									c = r.id === e.selectedAcademicLevelId,
									l = e.disabledAcademicLevelsById[r.id];
								a =
									a +
									'<option value="' +
									r.id +
									'" ' +
									(l ? "disabled" : "") +
									" " +
									(c ? "selected" : "") +
									">" +
									r.title +
									"</option>";
							}
							i.academicLevelSelectMobile.innerHTML = a;
						},
						renderTariffs: function(e) {
							for (
								var a = "", t = !1, r = 0;
								r < e.availableTariffs.length;
								r++
							) {
								var c = e.availableTariffs[r],
									l = c.id === e.selectedTariffId,
									o = e.currency[e.selectedCurrency].symbol,
									d =
										c.pricePerPage *
										e.currency[e.selectedCurrency].rate,
									s =
										c.hrs > 24
											? c.hrs / 24 + "d"
											: c.hrs + "h",
									u =
										c.hrs > 24
											? c.hrs / 24 + " days"
											: c.hrs + " hours",
									f = "dynamicPart-in " + (l ? "active" : ""),
									v =
										'<div class="calc-price">' +
										o +
										n(d) +
										" <span>page</span></div>",
									m =
										'<div class="calc-input ' +
										(l ? "checked" : "") +
										'">' +
										('<input name="deadlineId" type="radio" value="' +
											c.id +
											'" ' +
											(l ? "checked" : "") +
											">") +
										"</div>",
									y =
										'<div class="calc-time" title="' +
										u +
										'">' +
										s +
										" <span>deadline</span></div>",
									g =
										'<div class="calc-date">' +
										k(c.hrs) +
										"</div>";
								c.hrs <= 4 && e.pagesQty > 2
									? ((a = a),
									  c.id === e.selectedTariffId &&
											(t = r - 1))
									: (a =
											a +
											'<label class="' +
											f +
											'"><div class="dynamic-calc">' +
											v +
											m +
											y +
											g +
											"</div></label>");
							}
							(i.tariffControl.innerHTML = a),
								t &&
									p({
										selectedTariffId:
											e.availableTariffs[t].id
									});
						},
						renderAcademicLevelsUpgrade: function(e) {
							for (
								var a = "", t = 0;
								t < e.academicLevels[0].length;
								t++
							) {
								var r = e.academicLevels[0][t],
									c = r.id === e.selectedAcademicLevelId,
									l = c ? " current" : "",
									n = e.disabledAcademicLevelsById[r.id],
									o = n
										? "opacity: 0.7; cursor: not-allowed;"
										: "",
									d = r.title,
									s = / *\([^)]*\) */g;
								s.test(d) &&
									(d =
										d.replace(s, "") +
										"<span>" +
										d.match(s) +
										"</span>"),
									(a =
										a +
										'<label class="' +
										l +
										" " +
										(n ? "disabled" : "") +
										'" style="' +
										o +
										'" title="' +
										(n || "") +
										'">' +
										d +
										'<input name="academicLevelId" type="radio" value="' +
										r.id +
										'" ' +
										(c ? "checked" : "") +
										"></label>");
							}
							i.academicLevelControlUpgrade.innerHTML = a;
						},
						renderTariffsUpgrade: function(e) {
							var a = "",
								t = c ? "animate" : "",
								l = !1;
							e.pagesQty >= 30 && e.availableTariffs.length > 7
								? (i.tariffControlUpgrade.className += i.tariffControlUpgrade.classList.contains(
										"uvocalc--academic_level_content__min"
								  )
										? ""
										: " uvocalc--academic_level_content__min")
								: (i.tariffControlUpgrade.className = i.tariffControlUpgrade.className.replace(
										/(?:^|\s)uvocalc--academic_level_content__min(?!\S)/g,
										""
								  ));
							for (
								var o = 0;
								o < e.availableTariffs.length;
								o++
							) {
								var d = e.availableTariffs[o],
									s = d.id === e.selectedTariffId,
									u = e.currency[e.selectedCurrency].symbol,
									f =
										d.pricePerPage *
										e.currency[e.selectedCurrency].rate,
									v =
										d.hrs > 24
											? d.hrs / 24 + "d"
											: d.hrs + "h",
									m =
										d.hrs > 24
											? d.hrs / 24 + " days"
											: d.hrs + " hours",
									y = s ? "active" : "",
									g = "";
								void 0 !== r[o] &&
									null !== r[o] &&
									(g = r[o].innerHTML);
								var h =
										'<div class="uvocalc--academic_level_content__price"><div class="uvocalc--animate_level ' +
										t +
										'"><div class="uvocalc--animate_level__old">' +
										g +
										'</div><div class="uvocalc--animate_level__new"><strong>' +
										u +
										"</strong>" +
										n(f) +
										"</div></div><span>page</span></div>",
									T =
										'<div class="uvocalc--academic_level_content__input ' +
										(s ? "checked" : "") +
										'">' +
										('<input name="deadlineId" type="radio" value="' +
											d.id +
											'" ' +
											(s ? "checked" : "") +
											">") +
										"</div>",
									L =
										'<div class="uvocalc--academic_level_content__time" title="' +
										m +
										'">' +
										v +
										" <span>deadline</span></div>",
									b =
										'<div class="uvocalc--academic_level_content__date">' +
										k(d.hrs) +
										"</div>";
								d.hrs <= 4 && e.pagesQty > 2
									? ((a = a),
									  d.id === e.selectedTariffId &&
											(l = o - 1))
									: (a =
											a +
											'<label class="' +
											y +
											'">' +
											h +
											T +
											L +
											b +
											"</label>");
							}
							(i.tariffControlUpgrade.innerHTML = a),
								(r = i.tariffControlUpgrade.getElementsByClassName(
									"uvocalc--animate_level__new"
								)),
								c && (c = !1),
								l &&
									p({
										selectedTariffId:
											e.availableTariffs[l].id
									});
						},
						renderTariffsMobile: function(e) {
							for (
								var a =
										'<div class="uvocalc--academic_level_content__container">',
									t = 0;
								t < e.availableTariffs.length;
								t++
							) {
								var r = e.availableTariffs[t],
									c = r.id === e.selectedTariffId,
									l = e.currency[e.selectedCurrency].symbol,
									o =
										r.pricePerPage *
										e.currency[e.selectedCurrency].rate,
									d =
										r.hrs > 24
											? r.hrs / 24 + "d"
											: r.hrs + "h",
									s =
										r.hrs > 24
											? r.hrs / 24 + " days"
											: r.hrs + " hours",
									u = c ? "active" : "",
									p =
										'<div class="uvocalc--academic_level_content__price">' +
										l +
										n(o) +
										" <span>page</span></div>",
									f =
										'<div class="uvocalc--academic_level_content__input ' +
										(c ? "checked" : "") +
										'">' +
										('<input name="deadlineIdMobile" type="radio" value="' +
											r.id +
											'" ' +
											(c ? "checked" : "") +
											">") +
										"</div>",
									v =
										'<div class="uvocalc--academic_level_content__time" title="' +
										s +
										'">' +
										d +
										" <span>deadline</span></div>",
									m =
										'<div class="uvocalc--academic_level_content__date">' +
										k(r.hrs) +
										"</div>";
								a =
									r.hrs <= 4 && e.pagesQty > 2
										? a
										: a +
										  '<label class="' +
										  u +
										  '">' +
										  p +
										  f +
										  v +
										  m +
										  "</label>";
							}
							i.tariffControlMobile.innerHTML = a + "</div>";
						},
						renderHiddenDeadline: function(e) {
							for (
								var a = i.deadlineHidden,
									t = parseInt(e.pagesQty),
									r = e.availableTariffs,
									c = Math.max.apply(
										Math,
										r.map(function(e) {
											return e.minPages;
										})
									),
									l = 0;
								l < e.availableTariffs.length;
								l++
							) {
								var n = e.availableTariffs[l];
								n.academicLevel === e.selectedAcademicLevelId &&
									n.minPages <= t &&
									n.minPages >= c &&
									(a.value = n.id);
							}
						},
						renderStaticDeadline: function(e) {
							for (
								var a = "", t = 0;
								t < e.availableTariffs.length;
								t++
							) {
								var r = e.availableTariffs[t],
									c = r.id === e.selectedTariffId;
								a =
									a +
									'<option value="' +
									r.id +
									'" ' +
									(c ? "selected" : "") +
									">" +
									r.name +
									"</option>";
							}
							i.deadlineStatic.innerHTML = a;
						},
						renderTipDiscount: function(e) {
							i.tipDiscount.style.display = e.showTipDiscount
								? "block"
								: "none";
						},
						renderFinalDeadline: function(e) {
							var a = (function(e) {
								var a = Math.floor(e),
									t = e - a;
								t = 60 * t.toFixed(1);
								var r = 0;
								if (a > 24) {
									var c = Math.floor(a / 24);
									r = a % 24;
								} else r = a;
								var i = new Date();
								return (
									i.setHours(i.getHours() + r),
									i.setMinutes(i.getMinutes() + t),
									a > 24 && i.setDate(i.getDate() + c),
									i.format("mmmm d, yyyy") +
										"<span> at </span>" +
										i.format("HH:MM TT")
								);
							})(e.tariffsById[e.selectedTariffId].hrs);
							i.extTime.innerHTML = a;
						}
					},
					v = !1,
					m = 0;
				m < a.academicLevels[0].length;
				m++
			)
				parseInt(a.academicLevels.academicLevelDefault) ===
					a.academicLevels[0][m].id && (v = !0);
			var y = [],
				g = {};
			for (m in a.deadlines) {
				var h = a.deadlines[m];
				y.push(h.id), (g[h.id] = h);
			}
			var T = [];
			for (m in a.dissertationPaperTypes) {
				var L = a.dissertationPaperTypes[m];
				T.push(L.id);
			}
			var b = {};
			for (m in a.currency.currencyInfo)
				b[m] = a.currency.currencyInfo[m];
			m = 0;
			for (
				var I, C = a.paperTypes[0], S = [], _ = [], M = [];
				m < C.length;
				m++
			)
				C[m].id === +a.paperTypes.paperTypeDefault &&
					(S.push(C[m]), (I = m)),
					((64 === C[m].id && 64 != +a.paperTypes.paperTypeDefault) ||
						(70 === C[m].id &&
							70 != +a.paperTypes.paperTypeDefault)) &&
						(_.push(C[m]), M.push(m));
			C.splice(I, 1);
			for (m = 0; m < M.length; m++) C.splice(M[m], 1);
			(S = S.concat(
				C.sort(function(e, a) {
					var t = e.option.toLowerCase(),
						r = a.option.toLowerCase();
					return a.id, t < r ? -1 : t > r ? 1 : 0;
				}),
				_
			)),
				p({
					isLoading: !1,
					siteId: t.ID,
					calculatorType: t.calculatorType,
					format: t.format,
					callback: t.callback,
					callbackEmail: t.callbackEmail,
					environment: t.environment || a.environment,
					siteUrl: a.siteUrl,
					selectedCurrency: a.currency.defaultCurrency,
					currency: b,
					decimal:
						!!t.options.currency &&
						t.options.currency.decimalCurrency,
					decimalForUSD:
						!!t.options.currency &&
						t.options.currency.decimalUSDcurrency,
					tariffsIds: y,
					tariffsById: g,
					academicLevels: a.academicLevels,
					selectedAcademicLevelId: v
						? parseInt(a.academicLevels.academicLevelDefault)
						: parseInt(a.academicLevels[0][0].id),
					paperTypes: S,
					selectedPapertypeId: parseInt(
						a.paperTypes.paperTypeDefault
					),
					dissertationPaperTypes: T,
					pagesQty: parseInt(a.pages.defaultPages)
				});
		}
		setTimeout(function() {
			var e = document.createEvent("HTMLEvents");
			e.initEvent("loaded", !1, !1), window.dispatchEvent(e);
		}, 100);
		a.default = function() {
			arguments[0] &&
				"object" == typeof arguments[0] &&
				(this.options = (function(e, a) {
					var t;
					for (t in a) a.hasOwnProperty(t) && (e[t] = a[t]);
					return e;
				})(
					{
						ID: "1",
						calculatorType: "DefaultCalculator",
						format: "json",
						withControl: !1,
						parent: null,
						options: {
							exclude: { academicLevels: [], deadlines: [] },
							deafault: {
								deadlinesDefault: null,
								academicLevelDefault: null,
								paperTypesDefault: null,
								pagesDefault: null
							},
							currency: {
								availableCurrency: [],
								defaultCurrency: null,
								decimalCurrency: !1,
								decimalUSDcurrency: !1
							}
						},
						callback: function() {},
						callbackEmail: function() {},
						json: null,
						middleware: null
					},
					arguments[0]
				)),
				this.options.withTracking &&
					(E.push(A), delete this.options.withTracking),
				this.options.withPixel &&
					(E.push(q), delete this.options.withPixel),
				E.length &&
					(this.options.middleware = function(e, a, t) {
						e.forEach(function(e) {
							e(a, t);
						});
					}.bind(null, E)),
				function() {
					var e = this,
						a = [
							"siteId=" + this.options.ID,
							"calculatorType=" + this.options.calculatorType,
							"format=" + this.options.format
						],
						t = this.options.options.exclude,
						r = this.options.options.deafault,
						c = this.options.options.currency;
					if (
						(!this.options.hasOwnProperty("environment") ||
							("production" !== this.options.environment &&
								"test" !== this.options.environment) ||
							a.push("environment=" + this.options.environment),
						t)
					) {
						if (t.academicLevels && t.academicLevels.length > 0)
							for (var i = 0; i < t.academicLevels.length; i++)
								a.push(
									"options[exclude][academicLevels][]=" +
										t.academicLevels[i]
								);
						if (t.deadlines && t.deadlines.length > 0)
							for (var i = 0; i < t.deadlines.length; i++)
								a.push(
									"options[exclude][deadlines][]=" +
										t.deadlines[i]
								);
					}
					if (r) {
						if (r.deadlinesDefault && r.deadlinesDefault.length > 0)
							for (var i = 0; i < r.deadlinesDefault.length; i++)
								a.push(
									"options[deafault][deadlinesDefault][]=" +
										r.deadlinesDefault[i]
								);
						r.academicLevelDefault &&
							a.push(
								"options[deafault][academicLevelDefault]=" +
									r.academicLevelDefault
							),
							r.paperTypesDefault &&
								a.push(
									"options[deafault][paperTypesDefault]=" +
										r.paperTypesDefault
								),
							r.pagesDefault &&
								a.push(
									"options[deafault][pagesDefault]=" +
										r.pagesDefault
								);
					}
					if (c) {
						if (
							c.availableCurrency &&
							c.availableCurrency.length > 0
						)
							for (var i = 0; i < c.availableCurrency.length; i++)
								a.push(
									"options[currency][availableCurrencies][]=" +
										c.availableCurrency[i]
								);
						c.defaultCurrency &&
							a.push(
								"options[currency][defaultCurrency]=" +
									c.defaultCurrency
							);
					}
					"json" !== e.options.format || e.options.withControl
						? "json" === e.options.format && e.options.withControl
							? N(a, function(a, t) {
									(e.options.json = t),
										e.options.callback.call(e);
							  })
							: N(a, function(a, t) {
									var r, c;
									return a
										? console.error("Error: " + a.message)
										: t
										? ("CustomEmailCalculator" ===
										  e.options.calculatorType
												? ((r = document.querySelector(
														"[data-calc-email]"
												  )),
												  (c = document.querySelector(
														"[data-calc-email]"
												  )))
												: "ShortCalculator" ===
												  e.options.calculatorType
												? ((r = document.querySelector(
														"[data-calc-short]"
												  )),
												  (c = document.querySelector(
														"[data-calc-short]"
												  )))
												: e.options.parent
												? ((r = document.querySelector(
														e.options.parent
												  )),
												  (c = document.querySelector(
														e.options.parent
												  )))
												: ((r = document.querySelector(
														"[data-calc-mini]"
												  )),
												  (c = document.querySelector(
														"[data-calc-mini]"
												  ))),
										  void (
												r &&
												((r.innerHTML = t.html),
												Q(c, t.js, e.options))
										  ))
										: console.error(
												"Error: Some parameter is incorrect"
										  );
							  })
						: N(a, function(a, t) {
								var r;
								return a
									? console.error("Error: " + a.message)
									: t
									? void (
											(r =
												"CustomEmailCalculator" ===
												e.options.calculatorType
													? document.querySelector(
															"[data-calc-email]"
													  )
													: "ShortCalculator" ===
													  e.options.calculatorType
													? document.querySelector(
															"[data-calc-short]"
													  )
													: e.options.parent
													? document.querySelector(
															e.options.parent
													  )
													: document.querySelector(
															"[data-calc-mini]"
													  )) && Q(r, t, e.options)
									  )
									: console.error(
											"Error: Some parameter is incorrect"
									  );
						  });
				}.call(this);
		};
	}
]).default;
