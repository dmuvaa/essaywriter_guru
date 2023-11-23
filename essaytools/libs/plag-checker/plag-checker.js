function renderTemplate(selector, options) {
  var template = $(selector).html();
  Mustache.parse(template);
  var rendered_template = Mustache.render(template, options);
  return rendered_template;
}

var plagiarismChecker = function() {
  let title = $("[name='text-title']"),
    content = $("[name='text-to-check']"),
    buttonWrapper = $(".plag-checker__btn-wrap"),
    resultWrapper = $(".plag-checker__result"),
    matchesWrapper = $(".js_checker__text-matches"),
    rowMatches = $(".matches_row"),
    submitBtn = $(".submitBtn"),
    alert = $(".alert.alert--danger"),
    text,
    percent,
    matches,
    highlight;

  onHighlight = function(index) {
    highlight = matches[index].highlight;
    content.html(highlightText(text, highlight));

    var scroll = content.offset().top;
    $("html, body").animate({
      scrollTop: scroll
    });
  };

  highlightText = function(text, highlights) {
    var key,
      item,
      words = text.split(" ");
    return (
      highlights.forEach(function(highlight) {
        (key = highlight[0]),
          (item = highlight[1]),
          (words[key] = "<em>" + words[key]),
          (words[item] = words[item] + "</em>");
      }),
      words.join(" ")
    );
  };

  onFormSuccess = function(response) {
    percent = response.percent;
    text = response.text;
    matches = response.matches;
    highlight = response.highlight;

    matches.forEach(function(item, key) {
      addRowWithMatches(item, key);
    });

    content.html(highlightText(text, highlight));

    $(".plag-checker__show").on("click", function(e) {
      e.preventDefault();
      var index = $(this).data("index");
      onHighlight(index);
    });

    $(".plag-checker__summary-percent").html(percent + "%");

    matchesWrapper.show(), resultWrapper.show(), buttonWrapper.hide();
  };

  addRowWithMatches = function(item, key) {
    item.index = key;
    var template = renderTemplate(".js_checker__row_tmpl", item);
    rowMatches.append(template);
  };

  submitForm = function() {
    var data = new FormData();
    data.append("product_paper_type", $("[name='content-type']:checked").val());

    data.append("title", title.val());
    data.append("text", content.text());

    submitBtn.data("text", submitBtn.html());
    submitBtn.prop("disabled", true);
    submitBtn.html("Checking...");

    $.post({
      url: "https://freebyweb.com/ajax/plag-checker.php",
      data: data,
      headers: {},
      cache: false,
      processData: false,
      contentType: false,
      enctype: "multipart/form-data",
      beforeSend: function() {
        alert.hide();
      },
      success: function(resp) {
        submitBtn.prop("disabled", false);
        submitBtn.html(submitBtn.data("text"));

        if (resp.error) {
          alert.html(resp.error).show();
          return;
        }

        onFormSuccess(resp);
      },
      fail: function() {
        submitBtn.prop("disabled", false);
        submitBtn.html(submitBtn.data("text"));
        alert.html("There is something that went wrong!").show();
      }
    });
  };

  $(document).on("submit", "#plagiarismChecker", function(e) {
    e.preventDefault();
    submitForm();
  });
};

$(function() {
  autosize($(".js_autosize"));
  plagiarismChecker();
});
