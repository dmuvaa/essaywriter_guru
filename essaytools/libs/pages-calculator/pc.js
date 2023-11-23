document.addEventListener("DOMContentLoaded", function() {
	var $fontfamily = $("#fontfamily");
	var $fontsize = $("#fontsize");
	var $spacing = $("#spacing");

	$.fn.simpleButtonset = function() {
		var $container = this;
		this.find("input")
			.removeClass("ui-state-active")
			.on("change", function() {
				var id = $(this).attr("id");
				$container
					.find("label[for=" + id + "]")
					.addClass("ui-state-active")
					.siblings("label")
					.removeClass("ui-state-active");
			});

		this.find("label").removeClass("ui-state-active");
		this.find("input:checked").each(function() {
			var id = $(this).attr("id");
			$container
				.find("label[for=" + id + "]")
				.addClass("ui-state-active");
		});
		return this;
	};

	$.fn
		.add($fontfamily)
		.add($fontsize)
		.add($spacing)
		.simpleButtonset()
		.on("click", calc_data);

	matrix = {
		"9": {
			Arial: {
				one_spacing: 1167,
				one_point_five_spacing: 787,
				two_spacing: 634
			},
			Calibri: {
				one_spacing: 1134,
				one_point_five_spacing: 782,
				two_spacing: 629
			},
			"Comic Sans": {
				one_spacing: 867,
				one_point_five_spacing: 627,
				two_spacing: 460
			},
			Courier: {
				one_spacing: 861,
				one_point_five_spacing: 600,
				two_spacing: 434
			},
			Verdana: {
				one_spacing: 917,
				one_point_five_spacing: 671,
				two_spacing: 490
			},
			"Times New Roman": {
				one_spacing: 1098,
				one_point_five_spacing: 876,
				two_spacing: 621
			}
		},
		"10": {
			Arial: {
				one_spacing: 836,
				one_point_five_spacing: 593,
				two_spacing: 494
			},
			Calibri: {
				one_spacing: 840,
				one_point_five_spacing: 620,
				two_spacing: 523
			},
			"Comic Sans": {
				one_spacing: 624,
				one_point_five_spacing: 480,
				two_spacing: 353
			},
			Courier: {
				one_spacing: 631,
				one_point_five_spacing: 479,
				two_spacing: 343
			},
			Verdana: {
				one_spacing: 719,
				one_point_five_spacing: 520,
				two_spacing: 384
			},
			"Times New Roman": {
				one_spacing: 931,
				one_point_five_spacing: 654,
				two_spacing: 492
			}
		},
		"11": {
			Arial: {
				one_spacing: 697,
				one_point_five_spacing: 489,
				two_spacing: 383
			},
			Calibri: {
				one_spacing: 704,
				one_point_five_spacing: 501,
				two_spacing: 390
			},
			"Comic Sans": {
				one_spacing: 538,
				one_point_five_spacing: 371,
				two_spacing: 276
			},
			Courier: {
				one_spacing: 562,
				one_point_five_spacing: 378,
				two_spacing: 284
			},
			Verdana: {
				one_spacing: 623,
				one_point_five_spacing: 414,
				two_spacing: 305
			},
			"Times New Roman": {
				one_spacing: 845,
				one_point_five_spacing: 583,
				two_spacing: 415
			}
		},
		"12": {
			Arial: {
				one_spacing: 624,
				one_point_five_spacing: 444,
				two_spacing: 322
			},
			Calibri: {
				one_spacing: 631,
				one_point_five_spacing: 460,
				two_spacing: 307
			},
			"Comic Sans": {
				one_spacing: 442,
				one_point_five_spacing: 316,
				two_spacing: 232
			},
			Courier: {
				one_spacing: 448,
				one_point_five_spacing: 310,
				two_spacing: 237
			},
			Verdana: {
				one_spacing: 505,
				one_point_five_spacing: 341,
				two_spacing: 254
			},
			"Times New Roman": {
				one_spacing: 673,
				one_point_five_spacing: 430,
				two_spacing: 340
			}
		},
		"13": {
			Arial: {
				one_spacing: 552,
				one_point_five_spacing: 363,
				two_spacing: 289
			},
			Calibri: {
				one_spacing: 576,
				one_point_five_spacing: 385,
				two_spacing: 295
			},
			"Comic Sans": {
				one_spacing: 435,
				one_point_five_spacing: 283,
				two_spacing: 218
			},
			Courier: {
				one_spacing: 422,
				one_point_five_spacing: 271,
				two_spacing: 208
			},
			Verdana: {
				one_spacing: 444,
				one_point_five_spacing: 288,
				two_spacing: 212
			},
			"Times New Roman": {
				one_spacing: 619,
				one_point_five_spacing: 412,
				two_spacing: 293
			}
		},
		"14": {
			Arial: {
				one_spacing: 486,
				one_point_five_spacing: 319,
				two_spacing: 236
			},
			Calibri: {
				one_spacing: 488,
				one_point_five_spacing: 325,
				two_spacing: 242
			},
			"Comic Sans": {
				one_spacing: 354,
				one_point_five_spacing: 232,
				two_spacing: 173
			},
			Courier: {
				one_spacing: 358,
				one_point_five_spacing: 238,
				two_spacing: 191
			},
			Verdana: {
				one_spacing: 390,
				one_point_five_spacing: 262,
				two_spacing: 206
			},
			"Times New Roman": {
				one_spacing: 550,
				one_point_five_spacing: 349,
				two_spacing: 275
			}
		}
	};

	var textActive = null;

	var $textArea = $("#textdets");
	var $textAreaPanel = $("#textdets-active-panel");
	var $wordsNumberInput = $("#wordsreq");
	var $textGenerateButton = $("#text-generate-button");
	var $textClearButton = $("#text-clear-button");

	var $sheetsSp = $("#sheets_sp");
	var $pgsSp = $("#pgs_sp");
	var $characters = $("#characters");
	var $drPages = $("#dr_pages");

	var $wordsCalculationTip = $(".words-calculation-tip");

	var AVARAGE_WORD_LENGTH = 5.1;

	function drawPages(pages) {
		pages = Math.min(pages, 1000000);

		var PAGES_IN_LINE = 55;
		var PAGE_WIDTH = 10;
		var PAGE_HEIGHT = 28;

		var sheets = Math.ceil(pages);
		var evenLines = Math.floor(sheets / PAGES_IN_LINE);
		var lastLineSheets = sheets % PAGES_IN_LINE;
		var lastSheetFillPercent = Math.round((1 - (sheets - pages)) * 100);

		var evenSheetsContainerHtml =
			evenLines > 0
				? '<div class="even-sheets-container" style="width: ' +
				  PAGES_IN_LINE * PAGE_WIDTH +
				  "px; height: " +
				  evenLines * PAGE_HEIGHT +
				  'px;"></div>'
				: "";
		var lastSheetHiderHtml =
			'<i class="lines-hide"><i class="bar" style="height: ' +
			(100 - lastSheetFillPercent) +
			'%"></i></i>';
		var lastSheetsLineContainerHtml =
			lastLineSheets > 0
				? '<div class="last-sheets-line-container" style="width: ' +
				  lastLineSheets * PAGE_WIDTH +
				  "px; height: " +
				  PAGE_HEIGHT +
				  'px;">' +
				  lastSheetHiderHtml +
				  "</div>"
				: "";

		$drPages.html(evenSheetsContainerHtml + lastSheetsLineContainerHtml);
	}

	function calc_data() {
		var text = $textArea.val();
		var font = $("input[name=fontfamily]:checked").val();
		var size = $("input[name=fontsize]:checked").val();
		var spacing = $("input[name=spacing]:checked").val();
		var wordsCount = textActive
			? text.split(/\s/g).filter(function(str) {
					return str.match(/.*\w.*/);
			  }).length
			: parseInt($wordsNumberInput.val()) || 0;

		var charactersWithoutPuctuation = text.replace(/[^a-zA-Z0-9-]/g, "")
			.length;

		var wordsCountByCharacters = Math.ceil(
			charactersWithoutPuctuation / AVARAGE_WORD_LENGTH
		);

		if (textActive) {
			$wordsNumberInput.val(wordsCount);
		}

		$wordsCalculationTip.html(
			"<strong>" +
				wordsCountByCharacters +
				" words</strong>, if calculated based on average length of a word in English."
		);

		var pagesCount = wordsCount / matrix[size][font][spacing];
		var sheets = Math.ceil(pagesCount);

		$sheetsSp.text(sheets);
		$pgsSp.text(Math.ceil(pagesCount * 10) / 10);
		$characters.html(
			text.length +
				' characters <div class="without-punctuation">(' +
				charactersWithoutPuctuation +
				" without punctuation or spaces)</div>"
		);

		drawPages(pagesCount);
	}

	function setTextActive(val) {
		if (textActive === val) {
			return;
		}

		textActive = val;

		setTextAriaStyle();

		if (textActive) {
			calc_data();
			$textArea.select();
		} else {
			$textArea.val("");
			calc_data();
			if (!/free-essay-tools/.test(window.location.pathname)) {
				$wordsNumberInput.select();
			}
		}

		$wordsCalculationTip[textActive ? "slideDown" : "slideUp"]();

		$textAreaPanel[textActive ? "slideDown" : "slideUp"]();

		$textGenerateButton.prop("disabled", textActive);
		$textClearButton.prop("disabled", textActive === false);

		$wordsNumberInput
			.toggleClass("active-field", textActive === false)
			.toggleClass("disabled-field", textActive);

		$textArea
			.toggleClass("active-field high", textActive)
			.toggleClass("disabled-field", textActive === false);
	}

	$wordsNumberInput.on("input", function() {
		if ($wordsNumberInput.val().match(/\d+/) === null) {
			$wordsNumberInput.val(parseInt($wordsNumberInput.val()) || 0);
		}
	});

	$textArea.on("focus", setTextActive.bind(null, true));
	$wordsNumberInput.on("focus", setTextActive.bind(null, false));

	$.fn
		.add($textArea)
		.add($wordsNumberInput)
		.on("input change", calc_data);

	$textGenerateButton.on("click", function(e) {
		e.preventDefault();
		setTextActive(true);
	});

	$textClearButton.on("click", function(e) {
		e.preventDefault();
		setTextActive(false);
	});

	function setTextAriaStyle() {
		if (textActive) {
			var spacingValue = (function() {
				switch ($("input[name=spacing]:checked").val()) {
					case "one_spacing":
						return 1;
					case "one_point_five_spacing":
						return 1.5;
					case "two_spacing":
						return 2;
					default:
						return 1;
				}
			})();
			var fontFamilyValue =
				(function() {
					switch ($("input[name=fontfamily]:checked").val()) {
						case "Arial":
							return "Arial, sans-serif";
						case "Calibri":
							return "Calibri, sans-serif";
						case "Comic Sans":
							return "'Comic Sans', 'Comic Sans MS', cursive";
						case "Courier":
							return "Courier, monospace";
						case "Verdana":
							return "Verdana, sans-serif";
						case "Times New Roman":
							return "'Times New Roman', Times, serif";
						default:
							return "Roboto, Arial, sans-serif";
					}
				})() + " !important";
			var fontSizeValue = $("input[name=fontsize]:checked").val() + "pt";
			$textArea.attr(
				"style",
				"font-family: " +
					fontFamilyValue +
					";" +
					"font-size: " +
					fontSizeValue +
					";" +
					"line-height: " +
					spacingValue +
					";"
			);
		} else {
			$textArea.attr("style", null);
		}
	}

	$.fn
		.add($fontfamily)
		.add($spacing)
		.add($fontsize)
		.on("click", setTextAriaStyle);

	setTextActive(false);
});
