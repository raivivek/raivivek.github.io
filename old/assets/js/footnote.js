// Footnote.js taken from gwern.net with minor modifications.

$(document).ready(function() {
    Footnotes.setup();
});

var Footnotes = {
    footnotetimeout: false,

    setup: function() {
        var footnotelinks = $('.footnote-reference')

        footnotelinks.unbind('mouseover', Footnotes.footnoteover);
        footnotelinks.unbind('mouseout', Footnotes.footnoteoout);

        footnotelinks.bind('mouseover', Footnotes.footnoteover);
        footnotelinks.bind('mouseout', Footnotes.footnoteoout);
    },

    footnoteover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').remove();

        var position = $(this).offset();

        var div = $(document.createElement('div'));
        div.attr('id','footnotediv');
        div.bind('mouseover',Footnotes.divover);
        div.bind('mouseout',Footnotes.footnoteoout);

        var href = this.href,
            re = /#id\d+$/;
            id = href.match(re)[0];

        var footnoteContent = $('tbody tr td:nth-child(2)', id).html() || 'See post';
        div.html('<div>'+ footnoteContent +'</div>');

        $(document.body).append(div);

        var left = position.left;
        var maxWidth = $(window).width()/2;
        if(left + 450  > $(window).width() + $(window).scrollLeft())
            left = $(window).width() - 450 + $(window).scrollLeft();
        var top = position.top+20;
        if(top + div.height() > $(window).height() + $(window).scrollTop())
            top = position.top - div.height() - 15;

        div.attr('style',
                 'font-size: 12px; padding: 0 5px 0 5px; max-width:' + maxWidth + 'px'
                );

        div.css({
            left:left,
            top:top,
            opacity:1.0,
            background: "bisque",
            position: "absolute",
        });
    },

    footnoteoout: function() {
        Footnotes.footnotetimeout = setTimeout(function() {
            $('#footnotediv').animate({
                opacity: 0
            }, 600, function() {
                $('#footnotediv').remove();
            });
        },100);
    },

    divover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').css({
                opacity: 0.9
        });
    }
}
