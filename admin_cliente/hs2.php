<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">



<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- CSS propio-->
    <link href="./css/hs.css" rel="stylesheet">
    <style type="text/css">
        #sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 250px;
            padding: 0;
            margin: 0;
            overflow: auto
        }

        #page-container {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            border: 0
        }

        @media screen {
            #sidebar.opened+#page-container {
                left: 250px
            }

            #page-container {
                bottom: 0;
                right: 0;
                overflow: auto
            }

            .loading-indicator {
                display: none
            }

            .loading-indicator.active {
                display: block;
                position: absolute;
                width: 64px;
                height: 64px;
                top: 50%;
                left: 50%;
                margin-top: -32px;
                margin-left: -32px
            }

            .loading-indicator img {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0
            }
        }

        @media print {
            @page {
                margin: 0
            }

            html {
                margin: 0
            }

            body {
                margin: 0;
                -webkit-print-color-adjust: exact
            }

            #sidebar {
                display: none
            }

            #page-container {
                width: auto;
                height: auto;
                overflow: visible;
                background-color: transparent
            }

            .d {
                display: none
            }
        }

        .pf {
            position: relative;
            background-color: white;
            overflow: hidden;
            margin: 0;
            border: 0
        }

        .pc {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: block;
            transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            -webkit-transform-origin: 0 0
        }

        .pc.opened {
            display: block
        }

        .bf {
            position: absolute;
            border: 0;
            margin: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none
        }

        .bi {
            position: absolute;
            border: 0;
            margin: 0;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none
        }

        @media print {
            .pf {
                margin: 0;
                box-shadow: none;
                page-break-after: always;
                page-break-inside: avoid
            }

            @-moz-document url-prefix() {
                .pf {
                    overflow: visible;
                    border: 1px solid #fff
                }

                .pc {
                    overflow: visible
                }
            }
        }

        .c {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
            display: block
        }

        .t {
            position: absolute;
            white-space: pre;
            font-size: 1px;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%;
            unicode-bidi: bidi-override;
            -moz-font-feature-settings: "liga" 0
        }

        .t:after {
            content: ''
        }

        .t:before {
            content: '';
            display: inline-block
        }

        .t span {
            position: relative;
            unicode-bidi: bidi-override
        }

        ._ {
            display: inline-block;
            color: transparent;
            z-index: -1
        }

        ::selection {
            background: rgba(127, 255, 255, 0.4)
        }

        ::-moz-selection {
            background: rgba(127, 255, 255, 0.4)
        }

        .pi {
            display: none
        }

        .d {
            position: absolute;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%
        }

        .it {
            border: 0;
            background-color: rgba(255, 255, 255, 0.0)
        }

        .ir:hover {
            cursor: pointer
        }
    </style>
    <style type="text/css">
        @keyframes fadein {
            from {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @-webkit-keyframes fadein {
            from {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @media screen {
            #sidebar {
                background-color: #2f3236;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")
            }

            #outline {
                font-family: Georgia, Times, "Times New Roman", serif;
                font-size: 13px;
                margin: 2em 1em
            }

            #outline ul {
                padding: 0
            }

            #outline li {
                list-style-type: none;
                margin: 1em 0
            }

            #outline li>ul {
                margin-left: 1em
            }

            #outline a,
            #outline a:visited,
            #outline a:hover,
            #outline a:active {
                line-height: 1.2;
                color: #e8e8e8;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
                display: block;
                overflow: hidden;
                outline: 0
            }

            #outline a:hover {
                color: #0cf
            }

            #page-container {
                background-color: #9e9e9e;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
                -webkit-transition: left 500ms;
                transition: left 500ms
            }

            .pf {
                margin: 13px auto;
                box-shadow: 1px 1px 3px 1px #333;
                border-collapse: separate
            }

            .pc.opened {
                -webkit-animation: fadein 100ms;
                animation: fadein 100ms
            }

            .loading-indicator.active {
                -webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
                animation: swing 1.5s ease-in-out .01s infinite alternate none
            }

            .checked {
                background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)
            }
        }
    </style>

    <script>
        (function () {
            function b(a, b, e, f) { var c = (a.className || "").split(/\s+/g); "" === c[0] && c.shift(); var d = c.indexOf(b); 0 > d && e && c.push(b); 0 <= d && f && c.splice(d, 1); a.className = c.join(" "); return 0 <= d } if (!("classList" in document.createElement("div"))) {
                var e = { add: function (a) { b(this.element, a, !0, !1) }, contains: function (a) { return b(this.element, a, !1, !1) }, remove: function (a) { b(this.element, a, !1, !0) }, toggle: function (a) { b(this.element, a, !0, !0) } }; Object.defineProperty(HTMLElement.prototype, "classList", {
                    get: function () {
                        if (this._classList) return this._classList;
                        var a = Object.create(e, { element: { value: this, writable: !1, enumerable: !0 } }); Object.defineProperty(this, "_classList", { value: a, writable: !1, enumerable: !1 }); return a
                    }, enumerable: !0
                })
            }
        })();
    </script>
    <script>
        var pdf2htmlEX = window.pdf2htmlEX = window.pdf2htmlEX || {}, CSS_CLASS_NAMES = { page_frame: "pf", page_content_box: "pc", page_data: "pi", background_image: "bi", link: "l", input_radio: "ir", __dummy__: "no comma" }, DEFAULT_CONFIG = { container_id: "page-container", sidebar_id: "sidebar", outline_id: "outline", loading_indicator_cls: "loading-indicator", preload_pages: 3, render_timeout: 100, scale_step: 0.9, key_handler: !0, hashchange_handler: !0, view_history_handler: !0, __dummy__: "no comma" }, EPS = 1E-6;
        function invert(a) { var b = a[0] * a[3] - a[1] * a[2]; return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b] } function transform(a, b) { return [a[0] * b[0] + a[2] * b[1] + a[4], a[1] * b[0] + a[3] * b[1] + a[5]] } function get_page_number(a) { return parseInt(a.getAttribute("data-page-no"), 16) } function disable_dragstart(a) { for (var b = 0, c = a.length; b < c; ++b)a[b].addEventListener("dragstart", function () { return !1 }, !1) }
        function clone_and_extend_objs(a) { for (var b = {}, c = 0, e = arguments.length; c < e; ++c) { var h = arguments[c], d; for (d in h) h.hasOwnProperty(d) && (b[d] = h[d]) } return b }
        function Page(a) { if (a) { this.shown = this.loaded = !1; this.page = a; this.num = get_page_number(a); this.original_height = a.clientHeight; this.original_width = a.clientWidth; var b = a.getElementsByClassName(CSS_CLASS_NAMES.page_content_box)[0]; b && (this.content_box = b, this.original_scale = this.cur_scale = this.original_height / b.clientHeight, this.page_data = JSON.parse(a.getElementsByClassName(CSS_CLASS_NAMES.page_data)[0].getAttribute("data-data")), this.ctm = this.page_data.ctm, this.ictm = invert(this.ctm), this.loaded = !0) } }
        Page.prototype = {
            hide: function () { this.loaded && this.shown && (this.content_box.classList.remove("opened"), this.shown = !1) }, show: function () { this.loaded && !this.shown && (this.content_box.classList.add("opened"), this.shown = !0) }, rescale: function (a) {
                this.cur_scale = 0 === a ? this.original_scale : a; this.loaded && (a = this.content_box.style, a.msTransform = a.webkitTransform = a.transform = "scale(" + this.cur_scale.toFixed(3) + ")"); a = this.page.style; a.height = this.original_height * this.cur_scale + "px"; a.width = this.original_width * this.cur_scale +
                    "px"
            }, view_position: function () { var a = this.page, b = a.parentNode; return [b.scrollLeft - a.offsetLeft - a.clientLeft, b.scrollTop - a.offsetTop - a.clientTop] }, height: function () { return this.page.clientHeight }, width: function () { return this.page.clientWidth }
        }; function Viewer(a) { this.config = clone_and_extend_objs(DEFAULT_CONFIG, 0 < arguments.length ? a : {}); this.pages_loading = []; this.init_before_loading_content(); var b = this; document.addEventListener("DOMContentLoaded", function () { b.init_after_loading_content() }, !1) }
        Viewer.prototype = {
            scale: 1, cur_page_idx: 0, first_page_idx: 0, init_before_loading_content: function () { this.pre_hide_pages() }, initialize_radio_button: function () { for (var a = document.getElementsByClassName(CSS_CLASS_NAMES.input_radio), b = 0; b < a.length; b++)a[b].addEventListener("click", function () { this.classList.toggle("checked") }) }, init_after_loading_content: function () {
                this.sidebar = document.getElementById(this.config.sidebar_id); this.outline = document.getElementById(this.config.outline_id); this.container = document.getElementById(this.config.container_id);
                this.loading_indicator = document.getElementsByClassName(this.config.loading_indicator_cls)[0]; for (var a = !0, b = this.outline.childNodes, c = 0, e = b.length; c < e; ++c)if ("ul" === b[c].nodeName.toLowerCase()) { a = !1; break } a || this.sidebar.classList.add("opened"); this.find_pages(); if (0 != this.pages.length) {
                    disable_dragstart(document.getElementsByClassName(CSS_CLASS_NAMES.background_image)); this.config.key_handler && this.register_key_handler(); var h = this; this.config.hashchange_handler && window.addEventListener("hashchange",
                        function (a) { h.navigate_to_dest(document.location.hash.substring(1)) }, !1); this.config.view_history_handler && window.addEventListener("popstate", function (a) { a.state && h.navigate_to_dest(a.state) }, !1); this.container.addEventListener("scroll", function () { h.update_page_idx(); h.schedule_render(!0) }, !1);[this.container, this.outline].forEach(function (a) { a.addEventListener("click", h.link_handler.bind(h), !1) }); this.initialize_radio_button(); this.render()
                }
            }, find_pages: function () {
                for (var a = [], b = {}, c = this.container.childNodes,
                    e = 0, h = c.length; e < h; ++e) { var d = c[e]; d.nodeType === Node.ELEMENT_NODE && d.classList.contains(CSS_CLASS_NAMES.page_frame) && (d = new Page(d), a.push(d), b[d.num] = a.length - 1) } this.pages = a; this.page_map = b
            }, load_page: function (a, b, c) {
                var e = this.pages; if (!(a >= e.length || (e = e[a], e.loaded || this.pages_loading[a]))) {
                    var e = e.page, h = e.getAttribute("data-page-url"); if (h) {
                        this.pages_loading[a] = !0; var d = e.getElementsByClassName(this.config.loading_indicator_cls)[0]; "undefined" === typeof d && (d = this.loading_indicator.cloneNode(!0),
                            d.classList.add("active"), e.appendChild(d)); var f = this, g = new XMLHttpRequest; g.open("GET", h, !0); g.onload = function () {
                                if (200 === g.status || 0 === g.status) {
                                    var b = document.createElement("div"); b.innerHTML = g.responseText; for (var d = null, b = b.childNodes, e = 0, h = b.length; e < h; ++e) { var p = b[e]; if (p.nodeType === Node.ELEMENT_NODE && p.classList.contains(CSS_CLASS_NAMES.page_frame)) { d = p; break } } b = f.pages[a]; f.container.replaceChild(d, b.page); b = new Page(d); f.pages[a] = b; b.hide(); b.rescale(f.scale); disable_dragstart(d.getElementsByClassName(CSS_CLASS_NAMES.background_image));
                                    f.schedule_render(!1); c && c(b)
                                } delete f.pages_loading[a]
                            }; g.send(null)
                    } void 0 === b && (b = this.config.preload_pages); 0 < --b && (f = this, setTimeout(function () { f.load_page(a + 1, b) }, 0))
                }
            }, pre_hide_pages: function () { var a = "@media screen{." + CSS_CLASS_NAMES.page_content_box + "{display:none;}}", b = document.createElement("style"); b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a)); document.head.appendChild(b) }, render: function () {
                for (var a = this.container, b = a.scrollTop, c = a.clientHeight, a = b - c, b =
                    b + c + c, c = this.pages, e = 0, h = c.length; e < h; ++e) { var d = c[e], f = d.page, g = f.offsetTop + f.clientTop, f = g + f.clientHeight; g <= b && f >= a ? d.loaded ? d.show() : this.load_page(e) : d.hide() }
            }, update_page_idx: function () {
                var a = this.pages, b = a.length; if (!(2 > b)) {
                    for (var c = this.container, e = c.scrollTop, c = e + c.clientHeight, h = -1, d = b, f = d - h; 1 < f;) { var g = h + Math.floor(f / 2), f = a[g].page; f.offsetTop + f.clientTop + f.clientHeight >= e ? d = g : h = g; f = d - h } this.first_page_idx = d; for (var g = h = this.cur_page_idx, k = 0; d < b; ++d) {
                        var f = a[d].page, l = f.offsetTop + f.clientTop,
                        f = f.clientHeight; if (l > c) break; f = (Math.min(c, l + f) - Math.max(e, l)) / f; if (d === h && Math.abs(f - 1) <= EPS) { g = h; break } f > k && (k = f, g = d)
                    } this.cur_page_idx = g
                }
            }, schedule_render: function (a) { if (void 0 !== this.render_timer) { if (!a) return; clearTimeout(this.render_timer) } var b = this; this.render_timer = setTimeout(function () { delete b.render_timer; b.render() }, this.config.render_timeout) }, register_key_handler: function () {
                var a = this; window.addEventListener("DOMMouseScroll", function (b) {
                    if (b.ctrlKey) {
                        b.preventDefault(); var c = a.container,
                            e = c.getBoundingClientRect(), c = [b.clientX - e.left - c.clientLeft, b.clientY - e.top - c.clientTop]; a.rescale(Math.pow(a.config.scale_step, b.detail), !0, c)
                    }
                }, !1); window.addEventListener("keydown", function (b) {
                    var c = !1, e = b.ctrlKey || b.metaKey, h = b.altKey; switch (b.keyCode) {
                        case 61: case 107: case 187: e && (a.rescale(1 / a.config.scale_step, !0), c = !0); break; case 173: case 109: case 189: e && (a.rescale(a.config.scale_step, !0), c = !0); break; case 48: e && (a.rescale(0, !1), c = !0); break; case 33: h ? a.scroll_to(a.cur_page_idx - 1) : a.container.scrollTop -=
                            a.container.clientHeight; c = !0; break; case 34: h ? a.scroll_to(a.cur_page_idx + 1) : a.container.scrollTop += a.container.clientHeight; c = !0; break; case 35: a.container.scrollTop = a.container.scrollHeight; c = !0; break; case 36: a.container.scrollTop = 0, c = !0
                    }c && b.preventDefault()
                }, !1)
            }, rescale: function (a, b, c) {
                var e = this.scale; this.scale = a = 0 === a ? 1 : b ? e * a : a; c || (c = [0, 0]); b = this.container; c[0] += b.scrollLeft; c[1] += b.scrollTop; for (var h = this.pages, d = h.length, f = this.first_page_idx; f < d; ++f) {
                    var g = h[f].page; if (g.offsetTop + g.clientTop >=
                        c[1]) break
                } g = f - 1; 0 > g && (g = 0); var g = h[g].page, k = g.clientWidth, f = g.clientHeight, l = g.offsetLeft + g.clientLeft, m = c[0] - l; 0 > m ? m = 0 : m > k && (m = k); k = g.offsetTop + g.clientTop; c = c[1] - k; 0 > c ? c = 0 : c > f && (c = f); for (f = 0; f < d; ++f)h[f].rescale(a); b.scrollLeft += m / e * a + g.offsetLeft + g.clientLeft - m - l; b.scrollTop += c / e * a + g.offsetTop + g.clientTop - c - k; this.schedule_render(!0)
            }, fit_width: function () { var a = this.cur_page_idx; this.rescale(this.container.clientWidth / this.pages[a].width(), !0); this.scroll_to(a) }, fit_height: function () {
                var a = this.cur_page_idx;
                this.rescale(this.container.clientHeight / this.pages[a].height(), !0); this.scroll_to(a)
            }, get_containing_page: function (a) { for (; a;) { if (a.nodeType === Node.ELEMENT_NODE && a.classList.contains(CSS_CLASS_NAMES.page_frame)) { a = get_page_number(a); var b = this.page_map; return a in b ? this.pages[b[a]] : null } a = a.parentNode } return null }, link_handler: function (a) {
                var b = a.target, c = b.getAttribute("data-dest-detail"); if (c) {
                    if (this.config.view_history_handler) try {
                        var e = this.get_current_view_hash(); window.history.replaceState(e,
                            "", "#" + e); window.history.pushState(c, "", "#" + c)
                    } catch (h) { } this.navigate_to_dest(c, this.get_containing_page(b)); a.preventDefault()
                }
            }, navigate_to_dest: function (a, b) {
                try { var c = JSON.parse(a) } catch (e) { return } if (c instanceof Array) {
                    var h = c[0], d = this.page_map; if (h in d) {
                        for (var f = d[h], h = this.pages[f], d = 2, g = c.length; d < g; ++d) { var k = c[d]; if (null !== k && "number" !== typeof k) return } for (; 6 > c.length;)c.push(null); var g = b || this.pages[this.cur_page_idx], d = g.view_position(), d = transform(g.ictm, [d[0], g.height() - d[1]]),
                            g = this.scale, l = [0, 0], m = !0, k = !1, n = this.scale; switch (c[1]) { case "XYZ": l = [null === c[2] ? d[0] : c[2] * n, null === c[3] ? d[1] : c[3] * n]; g = c[4]; if (null === g || 0 === g) g = this.scale; k = !0; break; case "Fit": case "FitB": l = [0, 0]; k = !0; break; case "FitH": case "FitBH": l = [0, null === c[2] ? d[1] : c[2] * n]; k = !0; break; case "FitV": case "FitBV": l = [null === c[2] ? d[0] : c[2] * n, 0]; k = !0; break; case "FitR": l = [c[2] * n, c[5] * n], m = !1, k = !0 }if (k) {
                                this.rescale(g, !1); var p = this, c = function (a) { l = transform(a.ctm, l); m && (l[1] = a.height() - l[1]); p.scroll_to(f, l) }; h.loaded ?
                                    c(h) : (this.load_page(f, void 0, c), this.scroll_to(f))
                            }
                    }
                }
            }, scroll_to: function (a, b) { var c = this.pages; if (!(0 > a || a >= c.length)) { c = c[a].view_position(); void 0 === b && (b = [0, 0]); var e = this.container; e.scrollLeft += b[0] - c[0]; e.scrollTop += b[1] - c[1] } }, get_current_view_hash: function () { var a = [], b = this.pages[this.cur_page_idx]; a.push(b.num); a.push("XYZ"); var c = b.view_position(), c = transform(b.ictm, [c[0], b.height() - c[1]]); a.push(c[0] / this.scale); a.push(c[1] / this.scale); a.push(this.scale); return JSON.stringify(a) }
        };
        pdf2htmlEX.Viewer = Viewer;}) ();
    </script>
    <title></title>
</head>

<body>
    <div id="page-container">
        <div id="pf1" class="pf w0 h0" data-page-no="1">
            <div class="pc pc1 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg1.png" />
                <div class="t m0 x0 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 y2 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 h4 y3 ff3 fs2 fc0 sc0 ls0 ws0">Congo red</div>
                <div class="t m0 x0 h5 y4 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x0 h6 y5 ff2 fs4 fc0 sc0 ls0 ws0">Versión:<span class="ff1">3.0 es</span></div>
                <div class="t m0 x0 h7 y6 ff2 fs5 fc0 sc0 ls0 ws0">Reemplaza la versión de: 2020-07-13 </div>
                <div class="t m0 x0 h7 y7 ff2 fs5 fc0 sc0 ls0 ws0">Versión: (2)</div>
                <div class="t m0 x1 h8 y4 ff2 fs2 fc0 sc0 ls0 ws0">fecha de compilación: 2015-07-15</div>
                <div class="t m0 x2 h6 y8 ff2 fs4 fc0 sc0 ls0 ws0">Revisión: <span class="ff4">2023-04-18</span></div>
                <div class="t m0 x3 h9 y9 ff1 fs6 fc1 sc0 ls0 ws0">SECCIÓN 1: Identificación de la sustancia/mezcla y de
                    la empresa/empresa</div>
                <div class="t m0 x0 h2 ya ff1 fs0 fc0 sc0 ls0 ws0">1.1 Identificador del producto</div>
                <div class="t m0 x4 h6 yb ff2 fs4 fc0 sc0 ls0 ws0">Identificación de la sustancia</div>
                <div class="t m0 x4 ha yc ff2 fs0 fc0 sc0 ls0 ws0">Número de artículo</div>
                <div class="t m0 x4 h6 yd ff2 fs4 fc0 sc0 ls0 ws0">Número de registro (REACH)</div>
                <div class="t m0 x4 hb ye ff2 fs7 fc0 sc0 ls0 ws0">Número de índice en el Anexo VI del CLP</div>
                <div class="t m0 x4 h6 yf ff2 fs4 fc0 sc0 ls0 ws0">Número CE</div>
                <div class="t m0 x4 h6 y10 ff2 fs4 fc0 sc0 ls0 ws0">número CAS</div>
                <div class="t m0 x4 h7 y11 ff2 fs5 fc0 sc0 ls0 ws0">Nombres alternativos)</div>
                <div class="t m0 x5 h4 yb ff3 fs2 fc0 sc0 ls0 ws0">Congo red</div>
                <div class="t m0 x5 hc yc ff2 fs8 fc0 sc0 ls0 ws0">0322</div>
                <div class="t m0 x5 h6 yd ff2 fs4 fc0 sc0 ls0 ws0">No es necesario enumerar los usos identificados
                </div>
                <div class="t m0 x5 h6 y12 ff2 fs4 fc0 sc0 ls0 ws0">porque la sustancia no está sujeta a registro según
                </div>
                <div class="t m0 x5 h6 y13 ff2 fs4 fc0 sc0 ls0 ws0">REACH (&lt; 1 t/a).</div>
                <div class="t m0 x5 h6 ye ff2 fs4 fc0 sc0 ls0 ws0">611-027-00-8</div>
                <div class="t m0 x5 h6 yf ff2 fs4 fc0 sc0 ls0 ws0">209-358-4</div>
                <div class="t m0 x5 h6 y10 ff2 fs4 fc0 sc0 ls0 ws0">573-58-0</div>
                <div class="t m0 x5 h6 y11 ff2 fs4 fc0 sc0 ls0 ws0">
                    3,3&apos;[[1,1-bifenil]-4,4&apos;-diil(bis(azo))bis(4-</div>
                <div class="t m0 x5 h6 y14 ff2 fs4 fc0 sc0 ls0 ws0">aminonaftalin-1-sulfonato) de disodio, Direct Red
                </div>
                <div class="t m0 x5 h6 y15 ff2 fs4 fc0 sc0 ls0 ws0">28</div>
                <div class="t m0 x0 hd y16 ff1 fs4 fc0 sc0 ls0 ws0">1.2 Usos pertinentes identificados de la sustancia o
                    mezcla y usos desaconsejados</div>
                <div class="t m0 x4 h5 y17 ff2 fs3 fc0 sc0 ls0 ws0">Usos relevantes identificados:</div>
                <div class="t m0 x4 h6 y18 ff2 fs4 fc0 sc0 ls0 ws0">Usos desaconsejados:</div>
                <div class="t m0 x5 he y19 ff5 fs4 fc0 sc0 ls0 ws0">USO EN LABORATORIO PARA PRUEBAS DE </div>
                <div class="t m0 x5 he y1a ff5 fs4 fc0 sc0 ls0 ws0">CALIDAD DE LOS PRODUCTOS Y DISPOSITIVOS </div>
                <div class="t m0 x5 he y1b ff5 fs4 fc0 sc0 ls0 ws0">FABRICADOS</div>
                <div class="t m0 x5 h6 y1c ff2 fs4 fc0 sc0 ls0 ws0">No utilizar para productos que entren en contacto
                </div>
                <div class="t m0 x5 h6 y1d ff2 fs4 fc0 sc0 ls0 ws1">con alimentos. No utilizar para fines privados
                </div>
                <div class="t m0 x5 h6 y1e ff2 fs4 fc0 sc0 ls0 ws0">(hogar).</div>
                <div class="t m0 x0 hf y1f ff1 fs2 fc0 sc0 ls0 ws0">1.3 Datos del proveedor de la ficha de datos de
                    seguridad</div>
                <div class="t m0 x5 h5 y20 ff2 fs3 fc0 sc0 ls0 ws0">:Departamento de Salud, Seguridad y Medio Ambiente
                </div>
                <div class="t m0 x4 h10 y21 ff6 fs4 fc0 sc0 ls0 ws0">Alfa Aesar Thermo Fisher Scientific Chemicals, Inc.
                </div>
                <div class="t m0 x4 h10 y22 ff6 fs4 fc0 sc0 ls0 ws0">2 Radcliff Rd, Tewksbury, MA 01876</div>
                <div class="t m0 x4 h10 y23 ff6 fs4 fc0 sc0 ls0 ws0">Estados Unidos de América</div>
                <div class="t m0 x4 h5 y24 ff1 fs3 fc0 sc0 ls0 ws0">Teléfono:<span class="ff6"> 1-800-343-0660</span>
                    Telefax:<span class="ff2">+</span></div>
                <div class="t m0 x4 h5 y25 ff2 fs3 fc0 sc0 ls0 ws0">49 (0) 721 - 56 06 149<span class="ff1"> correo
                    </span></div>
                <div class="t m0 x4 h5 y26 ff1 fs3 fc0 sc0 ls0 ws0">electrónico:<span
                        class="ff2">sicherheit@carlroth.de</span> </div>
                <div class="t m0 x4 h5 y27 ff1 fs3 fc0 sc0 ls0 ws0">Sitio web:<span class="ff2">www.carlroth.de</span>
                </div>
                <div class="t m0 x4 h5 y28 ff2 fs3 fc0 sc0 ls0 ws0">Persona competente responsable de la ficha de datos
                    de </div>
                <div class="t m0 x4 h5 y29 ff2 fs3 fc0 sc0 ls0 ws0">seguridad:</div>
                <div class="t m0 x4 h11 y2a ff1 fs9 fc0 sc0 ls0 ws0">correo electrónico (persona competente):</div>
                <div class="t m0 x0 hf y2b ff1 fs2 fc0 sc0 ls0 ws0">1.4 Número de teléfono de emergencia</div>
                <div class="t m0 x5 hd y2c ff1 fs4 fc0 sc0 ls0 ws0">sicherheit@carlroth.de</div>
                <div class="t m0 x6 h12 y2d ff1 fs9 fc2 sc0 ls0 ws0">Nombre<span class="_ _0"> </span><span
                        class="fs5">Calle<span class="_ _1"> </span>Postal</span></div>
                <div class="t m0 x7 h13 y2e ff1 fsa fc2 sc0 ls0 ws0">código/ciudad</div>
                <div class="t m0 x8 h12 y2d ff1 fs5 fc2 sc0 ls0 ws0">Teléfono<span class="_ _2"> </span><span
                        class="fs0">Sitio web</span></div>
                <div class="t m0 x9 h14 y2f ff2 fs9 fc0 sc0 ls0 ws0">Información nacional sobre venenos</div>
                <div class="t m0 x6 hb y30 ff2 fs7 fc0 sc0 ls0 ws0">Servicio</div>
                <div class="t m0 xa h15 y31 ff2 fsb fc0 sc0 ls0 ws0">Hospital de la ciudad</div>
                <div class="t m0 xb ha y2f ff2 fs9 fc0 sc0 ls0 ws0">Calle Dudley<span class="_ _3"> </span><span
                        class="fs0">B187QH</span></div>
                <div class="t m0 xc ha y30 ff2 fs0 fc0 sc0 ls0 ws0">Birmingham</div>
                <div class="t m0 xd ha y2f ff2 fs0 fc0 sc0 ls0 ws0">844 892 0111</div>
                <div class="t m0 x0 h6 y32 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 y33 ff2 fs3 fc0 sc0 ls0 ws0">Página 1 / 16</div><a class="l"
                    href="https://www.onlinedoctranslator.com/es/?utm_source=onlinedoctranslator&amp;utm_medium=pdf&amp;utm_campaign=attribution">
                    <div class="d m1"
                        style="border-style:none;position:absolute;left:0.000000px;bottom:1672.000000px;width:191.156000px;height:6.000000px;background-color:rgba(255,255,255,0.000001);">
                    </div>
                </a>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf2" class="pf w0 h0" data-page-no="2">
            <div class="pc pc2 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg2.png" />
                <div class="t m0 x0 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 y2 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf y3 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 y4 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x3 h16 y34 ff1 fsc fc1 sc0 ls0 ws0">SECCIÓN 2: Identificación de peligros</div>
                <div class="t m0 x0 hd y35 ff1 fs4 fc0 sc0 ls0 ws0">2.1 Clasificación de la sustancia o mezcla</div>
                <div class="t m0 x4 hd y36 ff1 fs4 fc0 sc0 ls0 ws0">Clasificación según el Reglamento (CE) nº 1272/2008
                    (CLP)</div>
                <div class="t m0 xf h12 y37 ff1 fs5 fc2 sc0 ls0 ws0">Sección<span class="_ _4"> </span><span
                        class="fs7">Nivel de riesgo<span class="_ _5"> </span><span class="fs1">Gato-</span></span>
                </div>
                <div class="t m0 x10 h2 y38 ff1 fs0 fc2 sc0 ls0 ws0">egoría</div>
                <div class="t m0 x11 h17 y37 ff1 fs3 fc2 sc0 ls0 ws0">Clase de peligro y</div>
                <div class="t m0 x12 h17 y38 ff1 fs3 fc2 sc0 ls0 ws0">categoría</div>
                <div class="t m0 x13 h12 y37 ff1 fs5 fc2 sc0 ls0 ws0">Peligro</div>
                <div class="t m0 x14 h2 y38 ff1 fs0 fc2 sc0 ls0 ws0">declaración</div>
                <div class="t m0 x15 h5 y39 ff2 fs3 fc0 sc0 ls0 ws0">3.6<span class="_ _6"> </span><span
                        class="fs1">Carcinogenicidad<span class="_ _7"> </span></span>1B<span class="_ _8"> </span><span
                        class="fs0">carc. 1B<span class="_ _9"> </span></span>H350</div>
                <div class="t m0 x15 h5 y3a ff2 fs3 fc0 sc0 ls0 ws0">3.7</div>
                <div class="t m0 x16 h18 y3b ff7 fs7 fc0 sc0 ls0 ws0">Toxicidad para la reproducción</div>
                <div class="t m0 x17 h5 y3a ff2 fs3 fc0 sc0 ls0 ws0">2<span class="_ _a"> </span><span class="fs0">Repr.
                        2<span class="_ _b"> </span>H361d</span></div>
                <div class="t m0 x4 h19 y3c ff2 fsd fc0 sc0 ls0 ws0">Para el texto completo de las abreviaturas:
                    consulte la SECCIÓN 16</div>
                <div class="t m0 x0 h2 y3d ff1 fs0 fc0 sc0 ls0 ws0">2.2 Elementos de la etiqueta</div>
                <div class="t m0 x18 hd y3e ff8 fs4 fc0 sc0 ls0 ws0"> <span class="ff1 fs5">Palabra clave<span
                            class="ff8 ws2"> </span><span class="fs4">Peligro</span></span></div>
                <div class="t m0 x18 h12 y3f ff1 fs5 fc0 sc0 ls0 ws0">Pictogramas</div>
                <div class="t m0 x4 h6 y40 ff2 fs4 fc0 sc0 ls0 ws0">GHS08</div>
                <div class="t m0 x4 h2 y41 ff1 fs0 fc0 sc0 ls0 ws0">Declaraciones de peligro</div>
                <div class="t m0 x4 hc y42 ff2 fs8 fc0 sc0 ls0 ws0">H350</div>
                <div class="t m0 x4 h6 y43 ff2 fs4 fc0 sc0 ls0 ws0">H361d</div>
                <div class="t m0 x19 h1a y44 ff7 fs3 fc0 sc0 ls0 ws0">Puede provocar cáncer</div>
                <div class="t m0 x19 h10 y45 ff7 fs4 fc0 sc0 ls0 ws0">Susceptible de perjudicar la fertilidad o </div>
                <div class="t m0 x19 h10 y46 ff7 fs4 fc0 sc0 ls0 ws0">dañar al feto.</div>
                <div class="t m0 x4 hd y47 ff1 fs4 fc0 sc0 ls0 ws0">Consejos de prudencia</div>
                <div class="t m0 x4 h6 y48 ff1 fs4 fc0 sc0 ls0 ws0">Consejos de prudencia - prevención<span class="ff2">
                        P202</span></div>
                <div class="t m0 x1a h5 y49 ff2 fs3 fc0 sc0 ls0 ws0">No manipule hasta que haya leído y comprendido
                    todas las precauciones de seguridad.</div>
                <div class="t m0 x4 h6 y4a ff1 fs4 fc0 sc0 ls0 ws0">Consejos de prudencia - respuesta<span class="ff2">
                    </span></div>
                <div class="t m0 x4 h6 y4b ff2 fs4 fc0 sc0 ls0 ws0">P308+P313<span class="_ _c"> </span><span
                        class="fs1">EN CASO DE exposición o preocupación: obtener asesoramiento/atención médica</span>
                </div>
                <div class="t m0 x4 h5 y4c ff2 fs3 fc0 sc0 ls0 ws0">Solo para usuarios profesionales</div>
                <div class="t m0 x4 ha y4d ff1 fs0 fc0 sc0 ls0 ws0">Etiquetado de envases cuyo contenido no supere los
                    125 ml<span class="ff2"> Palabra </span></div>
                <div class="t m0 x4 ha y4e ff2 fs0 fc0 sc0 ls0 ws0">clave:<span class="ff1">Peligro</span></div>
                <div class="t m0 x4 h8 y4f ff2 fs2 fc0 sc0 ls0 ws0">símbolo(s)</div>
                <div class="t m0 x4 h5 y50 ff2 fs3 fc0 sc0 ls0 ws0">H350</div>
                <div class="t m0 x4 ha y51 ff2 fs0 fc0 sc0 ls0 ws0">H361d</div>
                <div class="t m0 x1b h3 y50 ff2 fs1 fc0 sc0 ls0 ws0">Puede causar cáncer.</div>
                <div class="t m0 x1b ha y51 ff2 fs0 fc0 sc0 ls0 ws0">Sospechoso de dañar al feto.</div>
                <div class="t m0 x4 h5 y52 ff2 fs3 fc0 sc0 ls0 ws0">P202</div>
                <div class="t m0 x4 ha y53 ff2 fs0 fc0 sc0 ls0 ws0">P308+P313</div>
                <div class="t m0 x1b h14 y52 ff2 fs9 fc0 sc0 ls0 ws0">No manipule hasta que haya leído y entendido todas
                    las precauciones de seguridad. EN CASO DE </div>
                <div class="t m0 x1b h14 y53 ff2 fs9 fc0 sc0 ls0 ws0">exposición o preocupación: Consiga
                    consejo/atención médica.</div>
                <div class="t m0 x0 h6 y32 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 y33 ff2 fs3 fc0 sc0 ls0 ws0">Página 2 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf3" class="pf w0 h0" data-page-no="3">
            <div class="pc pc3 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg3.png" />
                <div class="t m0 x0 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 y2 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf y3 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 y4 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x0 hd y54 ff1 fs4 fc0 sc0 ls0 ws0">2.3 Otros peligros</div>
                <div class="t m0 x4 h12 y55 ff1 fs5 fc0 sc0 ls0 ws0">Resultados de la evaluación PBT y mPmB</div>
                <div class="t m0 x4 h6 y56 ff2 fs4 fc0 sc0 ls0 ws0">Según los resultados de su evaluación, esta
                    sustancia no es un PBT ni un mPmB.</div>
                <div class="t m0 x3 h1b y57 ff1 fse fc1 sc0 ls0 ws0">SECCIÓN 3: Composición/información sobre los
                    ingredientes</div>
                <div class="t m0 x0 hd y58 ff1 fs4 fc0 sc0 ls0 ws0">3.1 Sustancias</div>
                <div class="t m0 x4 h5 y59 ff2 fs3 fc0 sc0 ls0 ws0">Nombre de la sustancia</div>
                <div class="t m0 x4 h6 y5a ff2 fs4 fc0 sc0 ls0 ws0">Fórmula molecular</div>
                <div class="t m0 x4 h6 y5b ff2 fs4 fc0 sc0 ls0 ws0">Masa molar</div>
                <div class="t m0 x4 h6 y5c ff2 fs4 fc0 sc0 ls0 ws0">No CAS</div>
                <div class="t m0 x4 h6 y5d ff2 fs4 fc0 sc0 ls0 ws0">N.º CE</div>
                <div class="t m0 x4 h19 y5e ff2 fsd fc0 sc0 ls0 ws0">Número de índice</div>
                <div class="t m0 x5 h4 y59 ff9 fs2 fc0 sc0 ls0 ws0">Congo Red</div>
                <div class="t m0 x5 h3 y5f ff2 fs1 fc0 sc0 ls0 ws0">C₃₂H$$norte₆N / A$O₆S$<span class="ff9"> </span>
                </div>
                <div class="t m0 x5 hb y60 ff2 fs7 fc0 sc0 ls0 ws0">696,7<span class="fsa">gramo</span>/<span
                        class="fsa">mol</span></div>
                <div class="t m0 x5 h6 y61 ff2 fs4 fc0 sc0 ls0 ws0">573-58-0</div>
                <div class="t m0 x5 h6 y62 ff2 fs4 fc0 sc0 ls0 ws0">209-358-4</div>
                <div class="t m0 x5 h6 y63 ff2 fs4 fc0 sc0 ls0 ws0">611-027-00-8</div>
                <div class="t m0 x1c h2 y64 ff1 fs0 fc0 sc0 ls0 ws0">Sustancia extremadamente preocupante (SVHC)</div>
                <div class="t m0 x1d h12 y65 ff1 fs7 fc2 sc0 ls0 ws0">Nombre de la sustancia<span class="_ _d">
                    </span><span class="fs5">No CAS<span class="_ _e"> </span>N.º CE</span></div>
                <div class="t m0 x1e h1c y66 ffa fs7 fc2 sc0 ls0 ws0">Composicion</div>
                <div class="t m0 x1f h1d y65 ff1 fsd fc2 sc0 ls0 ws0">Observaciones</div>
                <div class="t m0 x20 h1e y67 ffb fs0 fc0 sc0 ls0 ws0">ROJO CONGO</div>
                <div class="t m0 x21 ha y68 ff2 fs0 fc0 sc0 ls0 ws0">573-58-0<span class="_ _f"> </span>209-358-4</div>
                <div class="t m0 x22 h1c y69 ffb fs7 fc0 sc0 ls0 ws0">90-100%</div>
                <div class="t m0 x1f ha y68 ff2 fs0 fc0 sc0 ls0 ws0">carc. A57a</div>
                <div class="t m0 x23 h1f y6a ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 ha y6b ff2 fs0 fc0 sc0 ls0 ws0">candidato</div>
                <div class="t m0 x4 h20 y6c ff2 fsa fc0 sc0 ls0 ws0">lista</div>
                <div class="t m0 x4 ha y6d ff2 fs0 fc0 sc0 ls0 ws0">carc. A57a</div>
                <div class="t m0 x24 h3 y6b ff2 fs1 fc0 sc0 ls0 ws0">Sustancias que cumplen los criterios a que se
                    refiere el artículo 57 y para su eventual inclusión en el anexo XIV</div>
                <div class="t m0 x24 ha y6d ff2 fs0 fc0 sc0 ls0 ws0">Cancerígeno (artículo 57a)</div>
                <div class="t m0 x3 hd y6e ff1 fs4 fc1 sc0 ls0 ws0">Sección 4: Medidas de Primeros Auxilios</div>
                <div class="t m0 x0 hd y6f ff1 fs4 fc0 sc0 ls0 ws0">4.1 Descripción de los primeros auxilios</div>
                <div class="t m0 x4 h17 y70 ff1 fs3 fc0 sc0 ls0 ws0">Notas generales</div>
                <div class="t m0 x4 h6 y71 ff2 fs4 fc0 sc0 ls0 ws0">Quítese la ropa contaminada.</div>
                <div class="t m0 x4 h17 y72 ff1 fs3 fc0 sc0 ls0 ws0">Después de la inhalación</div>
                <div class="t m0 x4 h5 y73 ff2 fs0 fc0 sc0 ls0 ws0">Proporcionar aire fresco. En todos los casos de
                    duda, o cuando los síntomas pers<span class="_ _10"> </span><span class="fs3">ist, busque consejo
                        médico.</span></div>
                <div class="t m0 x4 h1f y74 ff1 fs1 fc0 sc0 ls0 ws0">Después del contacto con la piel</div>
                <div class="t m0 x4 h7 y75 ff2 fs5 fc0 sc0 ls0 ws0">Enjuague la piel con agua/ducha.</div>
                <div class="t m0 x4 h2 y76 ff1 fs0 fc0 sc0 ls0 ws0">Después del contacto visual</div>
                <div class="t m0 x4 ha y77 ff2 fs0 fc0 sc0 ls0 ws0">Enjuague cuidadosamente con agua durante varios
                    minutos. En todos los casos </div>
                <div class="t m0 x4 ha y78 ff2 fs0 fc0 sc0 ls0 ws0">de consejo médico.</div>
                <div class="t m0 x25 h5 y77 ff2 fs3 fc0 sc0 ls0 ws0">duda, o cuando los síntomas persisten, busque</div>
                <div class="t m0 x4 h17 y79 ff1 fs3 fc0 sc0 ls0 ws0">Después de la ingestión</div>
                <div class="t m0 x4 h8 y7a ff2 fs2 fc0 sc0 ls0 ws0">En caso de accidente o malestar, busque atención
                    médica </div>
                <div class="t m0 x4 h8 y7b ff2 fs2 fc0 sc0 ls0 ws0">inmediatamente (si es posible).</div>
                <div class="t m0 x26 h14 y7a ff2 fs9 fc0 sc0 ls0 ws0">inmediatamente (mostrar instrucciones de uso o
                    seguridad</div>
                <div class="t m0 x0 h6 y7c ff1 fs4 fc0 sc0 ls0 ws0">4.2 Principales síntomas y efectos, agudos y
                    del<span class="ff2"> Fatiga, diversos </span></div>
                <div class="t m0 x4 h6 y7d ff2 fs4 fc0 sc0 ls0 ws0">grados de lesión pulmonar</div>
                <div class="t m0 x27 h21 y7c ff1 fs8 fc0 sc0 ls0 ws0">ayed</div>
                <div class="t m0 x0 h6 y32 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 y33 ff2 fs3 fc0 sc0 ls0 ws0">Página 3 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf4" class="pf w0 h0" data-page-no="4">
            <div class="pc pc4 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg4.png" />
                <div class="t m0 x0 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 y2 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf y3 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 y4 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x0 hb y54 ff1 fs7 fc0 sc0 ls0 ws0">4.3 Indicación de toda atención médica y de los
                    tratamientos especiales que deban dispensarse inmediatamente<span class="ff2"> </span></div>
                <div class="t m0 x0 hb y7e ff2 fs7 fc0 sc0 ls0 ws0">ninguno</div>
                <div class="t m0 x3 hf y7f ff1 fs2 fc1 sc0 ls0 ws0">SECCIÓN 5: Medidas de lucha contra incendios</div>
                <div class="t m0 x0 hd y80 ff1 fs4 fc0 sc0 ls0 ws0">5.1 Medios de extinción</div>
                <div class="t m0 x4 hf y81 ff1 fs2 fc0 sc0 ls0 ws0">Medios de extinción adecuados</div>
                <div class="t m0 x4 hb y82 ff2 fs7 fc0 sc0 ls0 ws0">coordinar las medidas de extinción de incendios con
                    los alrededores del incendio</div>
                <div class="t m0 x4 h6 y83 ff2 fs4 fc0 sc0 ls0 ws0">agua, espuma, espuma resistente al alcohol, polvo
                    extintor seco, polvo ABC</div>
                <div class="t m0 x4 h5 y84 ff1 fs3 fc0 sc0 ls0 ws0">Medios de extinción inadecuados<span class="ff2">
                        chorro </span></div>
                <div class="t m0 x4 h5 y85 ff2 fs3 fc0 sc0 ls0 ws0">de agua</div>
                <div class="t m0 x0 h6 y86 ff1 fs4 fc0 sc0 ls0 ws0">5.2 Peligros específicos derivados de la sustancia o
                    la mezcla<span class="ff2"> </span></div>
                <div class="t m0 x0 h6 y87 ff2 fs4 fc0 sc0 ls0 ws0">Combustible.</div>
                <div class="t m0 x4 h12 y88 ff1 fs5 fc0 sc0 ls0 ws0">Productos de combustión peligrosos</div>
                <div class="t m0 x4 h5 y89 ff2 fs3 fc0 sc0 ls0 ws0">En caso de incendio pueden formarse: Óxidos de
                    nitrógeno (NOx), Monóxido de carbono (CO), Dióxido de carbono (CO₂), </div>
                <div class="t m0 x4 h5 y8a ff2 fs3 fc0 sc0 ls0 ws0">Óxidos de azufre (SOx)</div>
                <div class="t m0 x0 h12 y8b ff1 fs5 fc0 sc0 ls0 ws0">5.3 Consejos para los bomberos</div>
                <div class="t m0 x4 h7 y8c ff2 fs5 fc0 sc0 ls0 ws0">En caso de incendio y/o explosión no respirar los
                    humos. Combata el fuego con las precauciones normales desde una </div>
                <div class="t m0 x4 h7 y8d ff2 fs5 fc0 sc0 ls0 ws0">distancia razonable. Llevar un aparato de
                    respiración autónomo.</div>
                <div class="t m0 x3 h22 y8e ff1 fsf fc1 sc0 ls0 ws0">Sección 6: Medidas de Liberación accidental</div>
                <div class="t m0 x0 hd y8f ff1 fs4 fc0 sc0 ls0 ws0">6.1 Precauciones personales, equipo de protección y
                    emergencia<span class="_ _11"> </span><span class="fs1">procedimientos de ncy</span></div>
                <div class="t m0 x4 h23 y90 ff1 fs7 fc0 sc0 ls0 ws0">Para personal que no sea de emergencia</div>
                <div class="t m0 x4 h5 y91 ff2 fs3 fc0 sc0 ls0 ws0">Utilice el equipo de protección personal según sea
                    necesario. Evite conta </div>
                <div class="t m0 x4 h5 y92 ff2 fs3 fc0 sc0 ls0 ws0">respirar polvo.</div>
                <div class="t m0 x28 h6 y91 ff2 fs4 fc0 sc0 ls0 ws0">ct con piel, ojos y ropa. No</div>
                <div class="t m0 x0 hd y93 ff1 fs4 fc0 sc0 ls0 ws0">6.2 Precauciones ambientales</div>
                <div class="t m0 x4 hb y94 ff2 fs7 fc0 sc0 ls0 ws0">Mantener alejado de desagües, aguas superficiales y
                    subterráneas.</div>
                <div class="t m0 x0 hd y95 ff1 fs4 fc0 sc0 ls0 ws0">6.3 Métodos y material de contención y de limpieza
                </div>
                <div class="t m0 x4 hb y96 ff1 fs7 fc0 sc0 ls0 ws0">Consejos sobre cómo contener un derrame<span
                        class="ff2"> </span></div>
                <div class="t m0 x4 hb y97 ff2 fs7 fc0 sc0 ls0 ws0">Recubrimiento de drenajes. Recoger mecánicamente.
                </div>
                <div class="t m0 x4 h5 y98 ff1 fs3 fc0 sc0 ls0 ws0">Consejos sobre cómo limpiar un derrame<span
                        class="ff2"> </span></div>
                <div class="t m0 x4 h5 y99 ff2 fs3 fc0 sc0 ls0 ws0">Recoger mecánicamente. Control de polvo.</div>
                <div class="t m0 x4 h5 y9a ff1 fs3 fc0 sc0 ls0 ws0">Otra información relacionada con derrames y
                    liberaciones<span class="ff2"> Colocar en </span></div>
                <div class="t m0 x4 h6 y9b ff2 fs3 fc0 sc0 ls0 ws0">recipientes apropiados para su eliminación. Ventilar
                    afecto<span class="_ _12"> </span><span class="fs4">área d.</span></div>
                <div class="t m0 x0 hd y9c ff1 fs4 fc0 sc0 ls0 ws0">6.4 Referencia a otras secciones</div>
                <div class="t m0 x4 h8 y9d ff2 fs2 fc0 sc0 ls0 ws0">Productos de combustión peligrosa: ver sección 5.
                    Materiales de </div>
                <div class="t m0 x4 h8 y9e ff2 fs2 fc0 sc0 ls0 ws0">uso personal: ver sección 10. Consideraciones de
                    eliminación: se</div>
                <div class="t m0 x29 h8 y9d ff2 fs2 fc0 sc0 ls0 ws0">equipo de protección: ver apartado 8. Renta </div>
                <div class="t m0 x2a h8 y9e ff2 fs2 fc0 sc0 ls0 ws0">apartado 13.</div>
                <div class="t m0 x0 h6 y32 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 y33 ff2 fs3 fc0 sc0 ls0 ws0">Página 4 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf5" class="pf w0 h0" data-page-no="5">
            <div class="pc pc5 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg5.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x3 h16 ya3 ff1 fsc fc3 sc0 ls0 ws0">Sección 7: Manejo y Almacenamiento</div>
                <div class="t m0 x0 ha ya4 ff1 fs0 fc0 sc0 ls0 ws0">7.1 Precauciones para una manipulación segura<span
                        class="ff2"> Evitar la </span></div>
                <div class="t m0 x4 ha ya5 ff2 fs0 fc0 sc0 ls0 ws0">exposición. Evite la formación de polvo.</div>
                <div class="t m0 x4 ha ya6 ff1 fs0 fc0 sc0 ls0 ws0">Medidas para prevenir incendios así como la
                    generación de aerosoles y polvo<span class="ff2"> </span></div>
                <div class="t m0 x4 ha ya7 ff2 fs0 fc0 sc0 ls0 ws0">Eliminación de depósitos de polvo.</div>
                <div class="t m0 x4 h17 ya8 ff1 fs3 fc0 sc0 ls0 ws0">Asesoramiento en higiene ocupacional general</div>
                <div class="t m0 x4 h5 ya9 ff2 fs3 fc0 sc0 ls0 ws0">Lávese las manos antes de los descansos y después
                    del trabajo. Mantener alejado de alimentos, bebidas y piensos.</div>
                <div class="t m0 x0 ha yaa ff1 fs0 fc0 sc0 ls0 ws0">7.2 Condiciones de almacenamiento seguro, incluidas
                    posibles incompatibilidades<span class="ff2"> </span></div>
                <div class="t m0 x4 ha yab ff2 fs0 fc0 sc0 ls0 ws0">Almacene en un lugar seco.</div>
                <div class="t m0 x4 ha yac ff1 fs0 fc0 sc0 ls0 ws0">Sustancias o mezclas incompatibles<span class="ff2">
                        Observe las </span></div>
                <div class="t m0 x4 ha yad ff2 fs0 fc0 sc0 ls0 ws0">sugerencias para el almacenamiento combinado.</div>
                <div class="t m0 x4 h8 yae ff1 fs2 fc0 sc0 ls0 ws0">Proteger contra la exposición externa, como<span
                        class="ff2"> </span></div>
                <div class="t m0 x4 h8 yaf ff2 fs2 fc0 sc0 ls0 ws0">Radiación UV/luz solar</div>
                <div class="t m0 x4 hf yb0 ff1 fs2 fc0 sc0 ls0 ws0">Consideración de otros consejos:</div>
                <div class="t m0 x4 h6 yb1 ff1 fs4 fc0 sc0 ls0 ws0">Requisitos de ventilación<span class="ff2"> Utilizar
                    </span></div>
                <div class="t m0 x4 h6 yb2 ff2 fs4 fc0 sc0 ls0 ws0">ventilación local y general.</div>
                <div class="t m0 x4 h5 yb3 ff1 fs3 fc0 sc0 ls0 ws0">Diseños específicos para trasteros o naves<span
                        class="ff2"> Temperatura </span></div>
                <div class="t m0 x4 h5 yb4 ff2 fs3 fc0 sc0 ls0 ws0">de almacenamiento recomendada: 15 – 25 °C</div>
                <div class="t m0 x0 h5 yb5 ff1 fs3 fc0 sc0 ls0 ws0">7.3 Usos finales específicos<span class="ff2"> No
                        hay </span></div>
                <div class="t m0 x4 h5 yb6 ff2 fs3 fc0 sc0 ls0 ws0">información disponible.</div>
                <div class="t m0 x3 h16 yb7 ff1 fsc fc3 sc0 ls0 ws0">SECCIÓN 8: Controles de exposición/protección
                    personal</div>
                <div class="t m0 x0 hd yb8 ff1 fs4 fc0 sc0 ls0 ws0">8.1 Parámetros de control</div>
                <div class="t m0 x4 h17 yb9 ff1 fs3 fc0 sc0 ls0 ws0">Valores límite nacionales</div>
                <div class="t m0 x4 h23 yba ff1 fs7 fc0 sc0 ls0 ws0">Valores límite de exposición ocupacional (Límites
                    de exposición en el lugar de trabajo)</div>
                <div class="t m0 x2b hf ybb ff1 fs2 fc4 sc0 ls0 ws0">país</div>
                <div class="t m0 x2c h24 ybc ff1 fs10 fc4 sc0 ls0 ws0">intentar</div>
                <div class="t m0 x2d h12 ybb ff1 fs1 fc4 sc0 ls0 ws0">Nombre del agente<span class="_ _13"> </span><span
                        class="fs5">No CAS<span class="_ _14"> </span><span class="fs7">identifica-</span></span></div>
                <div class="t m0 x2e hf ybc ff1 fs2 fc4 sc0 ls0 ws0">ejem</div>
                <div class="t m0 x2f hf ybb ff1 fs2 fc4 sc0 ls0 ws0">TWA</div>
                <div class="t m0 x30 hf ybc ff1 fs2 fc4 sc0 ls0 ws0">[mg/</div>
                <div class="t m0 x31 hf ybd ff1 fs2 fc4 sc0 ls0 ws0">m³]</div>
                <div class="t m0 x32 hf ybb ff1 fs2 fc4 sc0 ls0 ws0">STEL</div>
                <div class="t m0 x32 hf ybc ff1 fs2 fc4 sc0 ls0 ws0">[mg/</div>
                <div class="t m0 x33 hf ybd ff1 fs2 fc4 sc0 ls0 ws0">m³]</div>
                <div class="t m0 x34 h24 ybb ff1 fs10 fc4 sc0 ls0 ws0">Fortificar techo-</div>
                <div class="t m0 x35 h12 ybc ff1 fs5 fc4 sc0 ls0 ws0">ing-C</div>
                <div class="t m0 x36 hf ybd ff1 fs2 fc4 sc0 ls0 ws0">[mg/</div>
                <div class="t m0 x37 hf ybe ff1 fs2 fc4 sc0 ls0 ws0">m³]</div>
                <div class="t m0 x38 h23 ybb ff1 fs7 fc4 sc0 ls0 ws0">No un-</div>
                <div class="t m0 x39 hf ybc ff1 fs2 fc4 sc0 ls0 ws0">ción</div>
                <div class="t m0 x3a h12 ybb ff1 fs5 fc4 sc0 ls0 ws0">Fuente</div>
                <div class="t m0 x9 h5 ybf ff2 fs3 fc0 sc0 ls0 ws0">ES<span class="_ _15"> </span><span
                        class="fs9">polvo<span class="_ _16"> </span></span>BIEN<span class="_ _17"> </span>10<span
                        class="_ _18"> </span>i<span class="_ _19"> </span><span class="fs0">EH40/2005</span></div>
                <div class="t m0 x9 h5 yc0 ff2 fs3 fc0 sc0 ls0 ws0">ES<span class="_ _15"> </span><span
                        class="fs9">polvo<span class="_ _16"> </span></span>BIEN<span class="_ _13"> </span>4<span
                        class="_ _1a"> </span>r<span class="_ _1b"> </span><span class="fs0">EH40/2005</span></div>
                <div class="t m0 x23 h2 yc1 ff1 fs0 fc0 sc0 ls0 ws0">Notación</div>
                <div class="t m0 x4 ha yc2 ff2 fs0 fc0 sc0 ls0 ws0">Techo-C</div>
                <div class="t m0 x4 h5 yc3 ff2 fs3 fc0 sc0 ls0 ws0">i</div>
                <div class="t m0 x4 h5 yc4 ff2 fs3 fc0 sc0 ls0 ws0">r</div>
                <div class="t m0 x4 h5 yc5 ff2 fs3 fc0 sc0 ls0 ws0">STEL</div>
                <div class="t m0 x24 h3 yc2 ff2 fs1 fc0 sc0 ls0 ws0">El valor techo es un valor límite por encima del
                    cual no debe producirse la </div>
                <div class="t m0 x24 h3 yc3 ff2 fs1 fc0 sc0 ls0 ws0">exposición Fracción inhalable</div>
                <div class="t m0 x24 ha yc4 ff2 fs0 fc0 sc0 ls0 ws0">Fracción respirable</div>
                <div class="t m0 x24 h14 yc5 ff2 fs9 fc0 sc0 ls0 ws0">Límite de exposición a corto plazo: un valor
                    límite por encima del cual la exposición no debe ocurrir y que está relacionado con un período de 15
                </div>
                <div class="t m0 x24 h14 yc6 ff2 fs9 fc0 sc0 ls0 ws0">minutos (a menos que se especifique lo contrario)
                </div>
                <div class="t m0 x24 h14 yc7 ff2 fs9 fc0 sc0 ls0 ws0">Promedio ponderado en el tiempo (límite de
                    exposición a largo plazo): medido o calculado en relación con un período de referencia de 8 horas
                </div>
                <div class="t m0 x24 h14 yc8 ff2 fs9 fc0 sc0 ls0 ws0">promedio ponderado en el tiempo (a menos que se
                    especifique lo contrario)</div>
                <div class="t m0 x4 h5 yc7 ff2 fs3 fc0 sc0 ls0 ws0">TWA</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 5 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf6" class="pf w0 h0" data-page-no="6">
            <div class="pc pc6 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg6.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x0 h12 ycb ff1 fs5 fc0 sc0 ls0 ws0">8.2 Controles de exposición</div>
                <div class="t m0 x4 hf ycc ff1 fs2 fc0 sc0 ls0 ws0">Medidas de protección individual (equipos de
                    protección individual)</div>
                <div class="t m0 x4 h11 ycd ff1 fs9 fc0 sc0 ls0 ws0">Protección para los ojos/la cara</div>
                <div class="t m0 x4 ha yce ff2 fs0 fc0 sc0 ls0 ws0">Utilice gafas de seguridad con protección
                    lateral.<span class="ff1"> </span></div>
                <div class="t m0 x4 h2 ycf ff1 fs0 fc0 sc0 ls0 ws0">Protección de la piel</div>
                <div class="t m0 x4 h17 yd0 ff1 fs3 fc0 sc0 ls0 ws0">• protección de mano</div>
                <div class="t m0 x4 h7 yd1 ff2 fs5 fc0 sc0 ls0 ws0">Use guantes adecuados. Son adecuados los guantes de
                    protección química, que se prueban según EN 374. Para fines </div>
                <div class="t m0 x4 h7 yd2 ff2 fs5 fc0 sc0 ls0 ws0">especiales, se recomienda comprobar la resistencia a
                    los productos químicos de los guantes de protección </div>
                <div class="t m0 x4 h7 yd3 ff2 fs5 fc0 sc0 ls0 ws0">mencionados anteriormente junto con el proveedor de
                    estos guantes. Los tiempos son valores aproximados de </div>
                <div class="t m0 x4 h7 yd4 ff2 fs5 fc0 sc0 ls0 ws0">mediciones a 22°C y contacto permanente. El aumento
                    de la temperatura debido a sustancias calentadas, calor </div>
                <div class="t m0 x4 h7 yd5 ff2 fs5 fc0 sc0 ls0 ws0">corporal, etc. y una reducción del grosor efectivo
                    de la capa por estiramiento pueden conducir a una reducción </div>
                <div class="t m0 x4 h7 yd6 ff2 fs5 fc0 sc0 ls0 ws0">considerable del tiempo de penetración. En caso de
                    duda, póngase en contacto con el fabricante. En un aprox. 1,5 </div>
                <div class="t m0 x4 h7 yd7 ff2 fs5 fc0 sc0 ls0 ws0">veces mayor/menor espesor de capa, el tiempo de
                    penetración respectivo se duplica/reduce a la mitad. Los datos se </div>
                <div class="t m0 x4 h7 yd8 ff2 fs5 fc0 sc0 ls0 ws0">aplican sólo a la sustancia pura. Cuando se
                    transfieren a mezclas de sustancias, solo pueden considerarse como una </div>
                <div class="t m0 x4 h7 yd9 ff2 fs5 fc0 sc0 ls0 ws0">guía.</div>
                <div class="t m0 x4 h7 yda ff1 fs5 fc0 sc0 ls0 ws0">• tipo de material<span class="ff2"> NBR </span>
                </div>
                <div class="t m0 x4 h7 ydb ff2 fs5 fc0 sc0 ls0 ws0">(caucho de nitrilo)</div>
                <div class="t m0 x4 h12 ydc ff1 fs5 fc0 sc0 ls0 ws0">• espesor del material</div>
                <div class="t m0 x4 h6 ydd ff2 fs4 fc0 sc0 ls0 ws0">&gt; 0,11mm</div>
                <div class="t m0 x4 h12 yde ff1 fs5 fc0 sc0 ls0 ws0">• tiempos de penetración del material del guante
                </div>
                <div class="t m0 x4 h8 ydf ff2 fs2 fc0 sc0 ls0 ws0">&gt; 480 minutos (permeación: nivel 6)</div>
                <div class="t m0 x4 hf ye0 ff1 fs2 fc0 sc0 ls0 ws0">• otras medidas de protección</div>
                <div class="t m0 x4 ha ye1 ff2 fs0 fc0 sc0 ls0 ws0">Tomar periodos de recuperación para la regeneración
                    de la piel. Se recomienda la protección preventiva de la piel (cremas/ungüentos </div>
                <div class="t m0 x4 ha ye2 ff2 fs0 fc0 sc0 ls0 ws0">de barrera).</div>
                <div class="t m0 x4 hd ye3 ff1 fs4 fc0 sc0 ls0 ws0">Protección respiratoria</div>
                <div class="t m0 x4 ha ye4 ff2 fs0 fc0 sc0 ls0 ws0">Protección respiratoria necesaria en: Formación de
                    polvo. Dispositivo de filtrado de partículas (EN 143). P2 (filtra al menos el 94 % </div>
                <div class="t m0 x4 ha ye5 ff2 fs0 fc0 sc0 ls0 ws0">de las partículas suspendidas en el aire, código de
                    color: blanco).</div>
                <div class="t m0 x4 hf ye6 ff1 fs2 fc0 sc0 ls0 ws0">Controles de exposición ambiental</div>
                <div class="t m0 x4 hb ye7 ff2 fs7 fc0 sc0 ls0 ws0">Mantener alejado de desagües, aguas superficiales y
                    subterráneas.</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 6 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf7" class="pf w0 h0" data-page-no="7">
            <div class="pc pc7 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg7.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x3 h9 ya3 ff1 fs6 fc3 sc0 ls0 ws0">SECCIÓN 9: Propiedades físicas y químicas</div>
                <div class="t m0 x0 hd ya4 ff1 fs4 fc0 sc0 ls0 ws0">9.1 Información sobre propiedades físicas y químicas
                    básicas</div>
                <div class="t m0 x4 h6 ye8 ff2 fs4 fc0 sc0 ls0 ws0">Estado fisico</div>
                <div class="t m0 x4 ha ye9 ff2 fs0 fc0 sc0 ls0 ws0">Forma</div>
                <div class="t m0 x4 h6 yea ff2 fs4 fc0 sc0 ls0 ws0">Color</div>
                <div class="t m0 x4 hc yeb ff2 fs8 fc0 sc0 ls0 ws0">Olor</div>
                <div class="t m0 x4 hb yec ff2 fs7 fc0 sc0 ls0 ws0">Punto de fusión/punto de congelación</div>
                <div class="t m0 x5 ha ye8 ff2 fs0 fc0 sc0 ls0 ws0">sólido</div>
                <div class="t m0 x5 h6 ye9 ff2 fs4 fc0 sc0 ls0 ws0">polvo</div>
                <div class="t m0 x5 h5 yea ff2 fs3 fc0 sc0 ls0 ws0">rojo marrón</div>
                <div class="t m0 x5 h6 yeb ff2 fs4 fc0 sc0 ls0 ws0">característica</div>
                <div class="t m0 x5 h6 yec ff2 fs4 fc0 sc0 ls0 ws0">360 °C</div>
                <div class="t m0 x5 h8 yed ff2 fs2 fc0 sc0 ls0 ws0">no determinado<span class="_ _1c"></span><span
                        class="fs7">Punto de ebullición o punto de ebullición inicial e intervalo de </span></div>
                <div class="t m0 x4 hb yee ff2 fs7 fc0 sc0 ls0 ws0">ebullición</div>
                <div class="t m0 x4 h7 yef ff2 fs5 fc0 sc0 ls0 ws0">inflamabilidad<span class="_ _1d"> </span><span
                        class="fs3">este material es combustible, pero no se enciende </span></div>
                <div class="t m0 x5 h5 yf0 ff2 fs3 fc0 sc0 ls0 ws0">fácilmente</div>
                <div class="t m0 x4 hb yf1 ff2 fs7 fc0 sc0 ls0 ws0">Límite de explosión inferior y superior Punto </div>
                <div class="t m0 x4 hb yf2 ff2 fs7 fc0 sc0 ls0 ws0">de inflamación</div>
                <div class="t m0 x4 h7 yf3 ff2 fs5 fc0 sc0 ls0 ws0">Temperatura de autoignición </div>
                <div class="t m0 x4 h7 yf4 ff2 fs5 fc0 sc0 ls0 ws0">Temperatura de descomposición </div>
                <div class="t m0 x4 h7 yf5 ff2 fs5 fc0 sc0 ls0 ws0">pH (valor)</div>
                <div class="t m0 x4 h5 yf6 ff2 fs3 fc0 sc0 ls0 ws0">Viscosidad cinemática</div>
                <div class="t m0 x5 h8 yf1 ff2 fs2 fc0 sc0 ls0 ws0">no determinado</div>
                <div class="t m0 x5 h6 yf2 ff2 fs4 fc0 sc0 ls0 ws0">no aplica</div>
                <div class="t m0 x5 h8 yf3 ff2 fs2 fc0 sc0 ls0 ws0">no determinado</div>
                <div class="t m0 x5 h6 yf7 ff2 fs4 fc0 sc0 ls0 ws0">Irrelevante</div>
                <div class="t m0 x5 h7 yf5 ff2 fs5 fc0 sc0 ls0 ws0">6,7 (en solución acuosa: 10<span
                        class="fs7">gramo</span>/<span class="fs7">yo</span>, 20°C)</div>
                <div class="t m0 x5 h6 yf6 ff2 fs4 fc0 sc0 ls0 ws0">Irrelevante</div>
                <div class="t m0 x4 h7 yf8 ff2 fs5 fc0 sc0 ls0 ws0">Solubilidad(es)</div>
                <div class="t m0 x4 ha yf9 ff2 fs0 fc0 sc0 ls0 ws0">Solubilidad del agua<span class="_ _1e">
                    </span>25<span class="fs9">gramo</span>/<span class="fs9">yo</span>a 20°C</div>
                <div class="t m0 x4 h5 yfa ff2 fs3 fc0 sc0 ls0 ws0">Coeficiente de partición</div>
                <div class="t m0 x4 h6 yfb ff2 fs3 fc0 sc0 ls0 ws0">Coeficiente de reparto n-octanol/agua (valor
                    logarítmico):<span class="_ _1b"> </span><span class="fs4">2,63 (valor calculado)</span></div>
                <div class="t m0 x4 h6 yfc ff2 fs4 fc0 sc0 ls0 ws0">Presión de vapor<span class="_ _1f"> </span><span
                        class="fs2">no determinado</span></div>
                <div class="t m0 x4 h6 yfd ff2 fs4 fc0 sc0 ls0 ws0">Densidad y/o densidad relativa</div>
                <div class="t m0 x4 ha yfe ff2 fs0 fc0 sc0 ls0 ws0">Densidad</div>
                <div class="t m0 x4 h5 yff ff2 fs3 fc0 sc0 ls0 ws0">Densidad relativa del vapor</div>
                <div class="t m0 x4 h3 y100 ff2 fs1 fc0 sc0 ls0 ws0">Densidad a Granel</div>
                <div class="t m0 x5 h8 yfe ff2 fs2 fc0 sc0 ls0 ws0">no determinado</div>
                <div class="t m0 x5 ha yff ff2 fs0 fc0 sc0 ls0 ws0">la información sobre esta propiedad no está
                    disponible</div>
                <div class="t m0 x5 h6 y100 ff2 fs4 fc0 sc0 ls0 ws0">600 – 700<span class="fs0">kg</span>/<span
                        class="fs0">m³</span></div>
                <div class="t m0 x4 h5 y101 ff2 fs7 fc0 sc0 ls0 ws0">Características de las partículas<span
                        class="_ _20"> </span><span class="fs3">Datos no disponibles.</span></div>
                <div class="t m0 x4 ha y102 ff2 fs0 fc0 sc0 ls0 ws0">Otros parámetros de seguridad</div>
                <div class="t m0 x4 ha y103 ff2 fs0 fc0 sc0 ls0 ws0">Propiedades comburentes</div>
                <div class="t m0 x0 hd y104 ff1 fs4 fc0 sc0 ls0 ws0">9.2 Otra información</div>
                <div class="t m0 x5 h14 y103 ff2 fs9 fc0 sc0 ls0 ws0">ninguno</div>
                <div class="t m0 x4 h8 y105 ff2 fs2 fc0 sc0 ls0 ws0">Información con respecto a las clases de peligro
                </div>
                <div class="t m0 x4 h8 y106 ff2 fs2 fc0 sc0 ls0 ws0">físico:</div>
                <div class="t m0 x5 h8 y105 ff2 fs2 fc0 sc0 ls0 ws0">clases de peligro según a GHS </div>
                <div class="t m0 x5 h8 y106 ff2 fs2 fc0 sc0 ls0 ws0">(riesgos físicos): no relevante</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 7 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf8" class="pf w0 h0" data-page-no="8">
            <div class="pc pc8 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg8.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x4 h6 y107 ff2 fs0 fc0 sc0 ls0 ws0">Otras características de seguridad:<span
                        class="_ _21"> </span><span class="fs4">No hay información adicional.</span></div>
                <div class="t m0 x3 h22 y108 ff1 fsf fc3 sc0 ls0 ws0">SECCIÓN 10: Estabilidad y reactividad</div>
                <div class="t m0 x0 h21 y109 ff1 fs8 fc0 sc0 ls0 ws0">10.1<span class="_ _22"> </span><span
                        class="fs3">Reactividad</span></div>
                <div class="t m0 x4 h5 y10a ff2 fs3 fc0 sc0 ls0 ws0">El producto en la forma entregada no es susceptible
                    de explosión de polvo; sin embargo, el enriquecimiento de polvo fino </div>
                <div class="t m0 x4 h5 y10b ff2 fs3 fc0 sc0 ls0 ws0">conduce al peligro de explosión de polvo.</div>
                <div class="t m0 x0 h21 y10c ff1 fs8 fc0 sc0 ls0 ws0">10.2<span class="_ _22"> </span><span
                        class="fs5">Estabilidad química</span></div>
                <div class="t m0 x4 h5 y10d ff2 fs3 fc0 sc0 ls0 ws0">El material es estable en condiciones ambientales
                    normales y en condiciones previstas de almacenamiento y manipulación de </div>
                <div class="t m0 x4 h5 y10e ff2 fs3 fc0 sc0 ls0 ws0">temperatura y presión.</div>
                <div class="t m0 x0 h21 y10f ff1 fs8 fc0 sc0 ls0 ws0">10.3<span class="_ _22"> </span><span
                        class="fs2">Posibilidad de reacciones peligrosas</span></div>
                <div class="t m0 x4 h6 y110 ff1 fs4 fc0 sc0 ls0 ws0">Reacción violenta con:<span class="ff2">oxidante
                        fuerte</span></div>
                <div class="t m0 x0 h21 y111 ff1 fs8 fc0 sc0 ls0 ws0">10.4<span class="_ _22"> </span><span
                        class="fs3">Condiciones para evitar</span></div>
                <div class="t m0 x4 h3 y112 ff2 fs1 fc0 sc0 ls0 ws0">Radiación ultravioleta/luz solar.</div>
                <div class="t m0 x0 h21 y113 ff1 fs8 fc0 sc0 ls0 ws0">10.5<span class="_ _22"> </span><span
                        class="fs5">materiales incompatibles</span></div>
                <div class="t m0 x4 h6 y114 ff2 fs4 fc0 sc0 ls0 ws0">No hay información adicional.</div>
                <div class="t m0 x0 h21 y115 ff1 fs8 fc0 sc0 ls0 ws0">10.6<span class="_ _22"> </span><span
                        class="fs5">productos de descomposición peligrosos<span class="ff2"> Productos </span></span>
                </div>
                <div class="t m0 x4 h7 y116 ff2 fs5 fc0 sc0 ls0 ws0">de combustión peligrosa: ver sección 5.</div>
                <div class="t m0 x3 h9 y117 ff1 fs6 fc3 sc0 ls0 ws0">SECCIÓN 11: Información toxicológica</div>
                <div class="t m0 x0 h12 y118 ff1 fs5 fc0 sc0 ls0 ws0">11.1 Información sobre las clases de peligro
                    definidas en el Reglamento (CE) nº 1272/2008</div>
                <div class="t m0 x4 hd y119 ff1 fs4 fc0 sc0 ls0 ws0">Clasificación según GHS (1272/2008/EC, CLP)</div>
                <div class="t m0 x4 h17 y11a ff1 fs3 fc0 sc0 ls0 ws0">Toxicidad aguda</div>
                <div class="t m0 x4 h7 y11b ff2 fs5 fc0 sc0 ls0 ws0">No se clasificará como de toxicidad aguda.</div>
                <div class="t m0 x1c h17 y11c ff1 fs3 fc0 sc0 ls0 ws0">Toxicidad aguda</div>
                <div class="t m0 x2b h12 y11d ff1 fs7 fc4 sc0 ls0 ws0">Ruta de exposición<span class="_ _1b">
                    </span>punto final<span class="_ _23"> </span><span class="fs5">Valor<span class="_ _24">
                        </span><span class="fs0">Especies<span class="_ _25"> </span></span>Método<span class="_ _26">
                        </span>Fuente</span></div>
                <div class="t m0 x3b h5 y11e ff2 fs3 fc0 sc0 ls0 ws0">oral<span class="_ _27"> </span>LD50<span
                        class="_ _28"> </span><span class="fsd">15.200<span class="fs11">miligramos</span>/<span
                            class="fs11">kg<span class="_ _d"> </span></span></span>rata<span class="_ _29">
                    </span><span class="fs0">TOXNET</span></div>
                <div class="t m0 x4 h17 y11f ff1 fs3 fc0 sc0 ls0 ws0">Corrosión/irritación de la piel</div>
                <div class="t m0 x4 h8 y120 ff2 fs2 fc0 sc0 ls0 ws0">No se clasificará como corrosivo/irritante para la
                    piel.</div>
                <div class="t m0 x4 h2 y121 ff1 fs0 fc0 sc0 ls0 ws0">Lesiones oculares graves/irritación ocular</div>
                <div class="t m0 x4 h5 y122 ff2 fs3 fc0 sc0 ls0 ws0">No se clasificará como gravemente dañino para los
                    ojos ni irritante para los ojos.</div>
                <div class="t m0 x4 h17 y123 ff1 fs3 fc0 sc0 ls0 ws0">Sensibilización respiratoria o cutánea</div>
                <div class="t m0 x4 h8 y124 ff2 fs2 fc0 sc0 ls0 ws0">No se clasificará como sensibilizante respiratorio
                    o cutáneo.</div>
                <div class="t m0 x4 h11 y125 ff1 fs9 fc0 sc0 ls0 ws0">Mutagenicidad en células germinales</div>
                <div class="t m0 x4 ha y126 ff2 fs0 fc0 sc0 ls0 ws0">No se clasificará como mutagénico en células
                    germinales.</div>
                <div class="t m0 x4 h12 y127 ff1 fs5 fc0 sc0 ls0 ws0">Carcinogenicidad</div>
                <div class="t m0 x4 h5 y128 ff2 fs3 fc0 sc0 ls0 ws0">Puede causar cáncer.</div>
                <div class="t m0 x4 hf y129 ff1 fs2 fc0 sc0 ls0 ws0">Toxicidad reproductiva</div>
                <div class="t m0 x4 h6 y12a ff2 fs4 fc0 sc0 ls0 ws0">Sospechoso de dañar al feto.</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 8 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf9" class="pf w0 h0" data-page-no="9">
            <div class="pc pc9 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg9.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x4 h23 ycb ff1 fs7 fc0 sc0 ls0 ws0">Toxicidad específica en determinados órganos -
                    exposición única</div>
                <div class="t m0 x4 h8 y12b ff2 fs2 fc0 sc0 ls0 ws0">No se clasificará como tóxico específico de órganos
                    diana (exposición única).</div>
                <div class="t m0 x4 h1f y12c ff1 fs1 fc0 sc0 ls0 ws0">Toxicidad específica en determinados órganos -
                    exposiciones repetidas</div>
                <div class="t m0 x4 h8 y12d ff2 fs2 fc0 sc0 ls0 ws0">No se clasificará como tóxico específico de órganos
                    diana (exposición repetida).</div>
                <div class="t m0 x4 h17 y12e ff1 fs3 fc0 sc0 ls0 ws0">peligro de aspiracion</div>
                <div class="t m0 x4 h7 y12f ff2 fs5 fc0 sc0 ls0 ws0">No se clasificará como que presenta un peligro por
                    aspiración.</div>
                <div class="t m0 x4 hd y130 ff1 fs4 fc0 sc0 ls0 ws0">Síntomas relacionados con las características
                    físicas, químicas y toxicológicas</div>
                <div class="t m0 x4 h11 y131 ff1 fs9 fc0 sc0 ls0 ws0">• En caso de ingestión</div>
                <div class="t m0 x4 hb y132 ff2 fs7 fc0 sc0 ls0 ws0">Los datos no están disponibles.</div>
                <div class="t m0 x4 h23 y133 ff1 fs7 fc0 sc0 ls0 ws0">• Si en los ojos</div>
                <div class="t m0 x4 hb y134 ff2 fs7 fc0 sc0 ls0 ws0">Los datos no están disponibles.</div>
                <div class="t m0 x4 h12 y135 ff1 fs5 fc0 sc0 ls0 ws0">• Si se inhala</div>
                <div class="t m0 x4 h6 y136 ff2 fs4 fc0 sc0 ls0 ws0">fatiga, diversos grados de lesión pulmonar</div>
                <div class="t m0 x4 h11 y137 ff1 fs9 fc0 sc0 ls0 ws0">• Si está en la piel</div>
                <div class="t m0 x4 hb y138 ff2 fs7 fc0 sc0 ls0 ws0">Los datos no están disponibles.</div>
                <div class="t m0 x4 hd y139 ff1 fs4 fc0 sc0 ls0 ws0">• Otra información</div>
                <div class="t m0 x4 h14 y13a ff2 fs9 fc0 sc0 ls0 ws0">ninguno</div>
                <div class="t m0 x0 h7 y13b ff1 fs5 fc0 sc0 ls0 ws0">11.2 Propiedades de alteración endocrina<span
                        class="ff2"> No </span></div>
                <div class="t m0 x0 h7 y13c ff2 fs5 fc0 sc0 ls0 ws0">enlistado.</div>
                <div class="t m0 x0 h6 y13d ff1 fs4 fc0 sc0 ls0 ws0">11.3 Información sobre otros peligros<span
                        class="ff2"> No </span></div>
                <div class="t m0 x4 h6 y13e ff2 fs4 fc0 sc0 ls0 ws0">hay información adicional.</div>
                <div class="t m0 x3 h9 y13f ff1 fs6 fc3 sc0 ls0 ws0">SECCIÓN 12: Información ecológica</div>
                <div class="t m0 x0 hd y140 ff1 fs4 fc0 sc0 ls0 ws0">12.1 Toxicidad</div>
                <div class="t m0 x4 h8 y141 ff2 fs2 fc0 sc0 ls0 ws0">No se clasificará como peligroso para el medio
                    ambiente acuático.</div>
                <div class="t m0 x4 hc y142 ff2 fs8 fc5 sc0 ls0 ws0">.</div>
                <div class="t m0 x1c h12 y143 ff1 fs5 fc0 sc0 ls0 ws0">Toxicidad acuática (aguda)</div>
                <div class="t m0 x3c h12 y144 ff1 fs7 fc4 sc0 ls0 ws0">punto final<span class="_ _2a"> </span><span
                        class="fs5">Valor<span class="_ _2b"> </span><span class="fs0">Especies<span class="_ _2c">
                            </span></span>Fuente<span class="_ _2d"> </span><span class="fs0">Exposición</span></span>
                </div>
                <div class="t m0 x3d h13 y145 ff1 fsa fc4 sc0 ls0 ws0">tiempo</div>
                <div class="t m0 x3e h5 y146 ff2 fs3 fc0 sc0 ls0 ws0">LC50<span class="_ _2e"> </span><span
                        class="fs11">560<span class="fs12">miligramos</span>/<span class="fs12">yo<span class="_ _2f">
                            </span><span class="fs0">trucha arcoíris (Onco-</span></span></span></div>
                <div class="t m0 x3f hb y147 ff2 fs7 fc0 sc0 ls0 ws0">Rhynchus mi beso)</div>
                <div class="t m0 x40 h5 y146 ff2 fs3 fc0 sc0 ls0 ws0">ECHA<span class="_ _12"> </span><span
                        class="fs11">96 horas</span></div>
                <div class="t m0 x4 hd y148 ff1 fs4 fc0 sc0 ls0 ws0">Biodegradación</div>
                <div class="t m0 x4 hb y149 ff2 fs7 fc0 sc0 ls0 ws0">Los datos no están disponibles.</div>
                <div class="t m0 x0 hd y14a ff1 fs4 fc0 sc0 ls0 ws0">12.2 Proceso de degradabilidad</div>
                <div class="t m0 x4 h5 y14b ff2 fs3 fc0 sc0 ls0 ws0">Demanda Teórica de Oxígeno con nitrificación:
                    1.738<span class="fs9">miligramos</span>/<span class="fs9">miligramos</span></div>
                <div class="t m0 x4 hb y14c ff2 fs7 fc0 sc0 ls0 ws0">Demanda Teórica de Oxígeno: 1,521<span
                        class="fsa">miligramos</span>/<span class="fsa">miligramos</span></div>
                <div class="t m0 x4 hb y14d ff2 fs7 fc0 sc0 ls0 ws0">Dióxido de Carbono Teórico: 2,021<span
                        class="fsa">miligramos</span>/<span class="fsa">miligramos</span></div>
                <div class="t m0 x0 hd y14e ff1 fs4 fc0 sc0 ls0 ws0">12.3 Potencial de bioacumulación</div>
                <div class="t m0 x4 h7 y14f ff2 fs5 fc0 sc0 ls0 ws0">No se acumula significativamente en los organismos.
                </div>
                <div class="t m0 x1c h6 y150 ff2 fs4 fc0 sc0 ls0 ws0">n-octanol/agua (log KOW)<span class="_ _30">
                    </span>2,63 (Valor calculado)</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 xe h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 9 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pfa" class="pf w0 h0" data-page-no="a">
            <div class="pc pca w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bga.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x0 hb ycb ff1 fs7 fc0 sc0 ls0 ws0">12.4 Movilidad en el suelo<span class="ff2"> Los
                        datos no </span></div>
                <div class="t m0 x4 hb y12b ff2 fs7 fc0 sc0 ls0 ws0">están disponibles.</div>
                <div class="t m0 x0 h5 y12c ff1 fs3 fc0 sc0 ls0 ws0">12.5 Resultados de la evaluación PBT y mPmB<span
                        class="ff2"> Los </span></div>
                <div class="t m0 x4 h5 y12d ff2 fs3 fc0 sc0 ls0 ws0">datos no están disponibles.</div>
                <div class="t m0 x0 h7 y12e ff1 fs5 fc0 sc0 ls0 ws0">12.6 Propiedades de alteración endocrina<span
                        class="ff2"> No </span></div>
                <div class="t m0 x0 h7 y12f ff2 fs5 fc0 sc0 ls0 ws0">enlistado.</div>
                <div class="t m0 x0 h5 y151 ff1 fs3 fc0 sc0 ls0 ws0">12.7 Otros efectos adversos<span class="ff2"> Los
                    </span></div>
                <div class="t m0 x4 h5 y152 ff2 fs3 fc0 sc0 ls0 ws0">datos no están disponibles.</div>
                <div class="t m0 x3 hf y153 ff1 fs2 fc3 sc0 ls0 ws0">SECCIÓN 13: Consideraciones sobre la eliminación
                </div>
                <div class="t m0 x0 h2 y154 ff1 fs0 fc0 sc0 ls0 ws0">13.1 Métodos de tratamiento de residuos</div>
                <div class="t m0 x4 h7 y155 ff2 fs5 fc0 sc0 ls0 ws0">Este material y su recipiente deben desecharse como
                    residuos peligrosos. Deseche el contenido/el recipiente de </div>
                <div class="t m0 x4 h7 y156 ff2 fs5 fc0 sc0 ls0 ws0">acuerdo con las reglamentaciones
                    locales/regionales/nacionales/internacionales.</div>
                <div class="t m0 x4 h23 y157 ff1 fs7 fc0 sc0 ls0 ws0">Información relevante para la eliminación de aguas
                </div>
                <div class="t m0 x4 hb y158 ff1 fs7 fc0 sc0 ls0 ws0">residuales<span class="ff2"> No vacíe en los
                        desagües.</span></div>
                <div class="t m0 x0 h2 y159 ff1 fs0 fc0 sc0 ls0 ws0">13.2 Disposiciones pertinentes relativas a los
                    residuos</div>
                <div class="t m0 x4 h5 y15a ff2 fs3 fc0 sc0 ls0 ws0">La asignación de números de identificación de
                    residuos/descripciones de residuos debe realizarse de acuerdo con la CEE, </div>
                <div class="t m0 x4 h5 y15b ff2 fs3 fc0 sc0 ls0 ws0">específica para la industria y el proceso.
                    Ordenanza del catálogo de residuos (Alemania).</div>
                <div class="t m0 x0 h2 y15c ff1 fs0 fc0 sc0 ls0 ws0">13.3 Observaciones</div>
                <div class="t m0 x4 h5 y15d ff2 fs3 fc0 sc0 ls0 ws0">Los desechos se separarán en las categorías que
                    puedan ser manejadas por separado por las instalaciones de manejo de </div>
                <div class="t m0 x4 h5 y15e ff2 fs3 fc0 sc0 ls0 ws0">desechos locales o nacionales. Tenga en cuenta las
                    disposiciones nacionales o regionales pertinentes.</div>
                <div class="t m0 x3 hd y15f ff1 fs4 fc3 sc0 ls0 ws0">SECCIÓN 14: Información sobre el transporte</div>
                <div class="t m0 x0 h1f y160 ff1 fs1 fc0 sc0 ls0 ws0">14.1 Número ONU o número de identificación</div>
                <div class="t m0 x0 h1d y161 ff1 fsd fc0 sc0 ls0 ws0">14.2 Designación oficial de transporte de las
                    Naciones Unidas</div>
                <div class="t m0 x0 h2 y162 ff1 fs0 fc0 sc0 ls0 ws0">14.3 Clase(s) de peligro para el transporte</div>
                <div class="t m0 x0 h12 y163 ff1 fs5 fc0 sc0 ls0 ws0">14.4 Grupo de embalaje</div>
                <div class="t m0 x0 hd y164 ff1 fs4 fc0 sc0 ls0 ws0">14.5 Riesgos ambientales</div>
                <div class="t m0 x5 h5 y160 ff2 fs3 fc0 sc0 ls0 ws0">No está sujeto a las normas de transporte</div>
                <div class="t m0 x5 h6 y161 ff2 fs4 fc0 sc0 ls0 ws0">no asignado</div>
                <div class="t m0 x5 h14 y162 ff2 fs9 fc0 sc0 ls0 ws0">ninguno</div>
                <div class="t m0 x5 h6 y163 ff2 fs4 fc0 sc0 ls0 ws0">no asignado</div>
                <div class="t m0 x5 h5 y164 ff2 fs3 fc0 sc0 ls0 ws0">no peligroso para el medio ambiente acc. a la
                    normativa </div>
                <div class="t m0 x5 h5 y165 ff2 fs3 fc0 sc0 ls0 ws0">sobre mercancías peligrosas</div>
                <div class="t m0 x0 h12 y166 ff1 fs5 fc0 sc0 ls0 ws0">14.6 Precauciones particulares para los </div>
                <div class="t m0 x4 h7 y167 ff1 fs5 fc0 sc0 ls0 ws0">usuarios<span class="ff2"> No hay información
                        adicional.</span></div>
                <div class="t m0 x0 h7 y168 ff1 fs5 fc0 sc0 ls0 ws0">14.7 Transporte marítimo a granel según los
                    instrumentos de la OMI<span class="ff2"> La </span></div>
                <div class="t m0 x4 h7 y169 ff2 fs5 fc0 sc0 ls0 ws0">carga no está destinada a ser transportada a
                    granel.</div>
                <div class="t m0 x0 h23 y16a ff1 fs7 fc0 sc0 ls0 ws0">14.8 Información para cada una de las
                    Reglamentaciones Modelo de la ONU</div>
                <div class="t m0 x4 h2 y16b ff1 fs0 fc0 sc0 ls0 ws0">Transporte de mercancías peligrosas por carretera,
                    ferrocarril y vías navegables interiores (ADR/RID/ADN) - Información </div>
                <div class="t m0 x4 h2 y16c ff1 fs0 fc0 sc0 ls0 ws0">adicional</div>
                <div class="t m0 x4 h6 y16d ff2 fs4 fc0 sc0 ls0 ws0">No sujeto a ADR, RID y ADN.</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 10 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pfb" class="pf w0 h0" data-page-no="b">
            <div class="pc pcb w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bgb.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x4 h8 ycb ff1 fs2 fc0 sc0 ls0 ws0">Código marítimo internacional de mercancías
                    peligrosas (IMDG) - Información adicional<span class="ff2"> </span></div>
                <div class="t m0 x4 h8 y12b ff2 fs2 fc0 sc0 ls0 ws0">No sujeto a IMDG.</div>
                <div class="t m0 x4 h6 y12c ff1 fs4 fc0 sc0 ls0 ws0">Organización de Aviación Civil Internacional
                    (ICAO-IATA/DGR) - Información adicional<span class="ff2"> </span></div>
                <div class="t m0 x4 h6 y12d ff2 fs4 fc0 sc0 ls0 ws0">No sujeto a ICAO-IATA.</div>
                <div class="t m0 x3 h16 y16e ff1 fsc fc3 sc0 ls0 ws0">SECCIÓN 15: Información reglamentaria</div>
                <div class="t m0 x0 h2 y16f ff1 fs0 fc0 sc0 ls0 ws0">15.1 Reglamentación y legislación en materia de
                    seguridad, salud y medio ambiente específicas para la sustancia o la mezcla</div>
                <div class="t m0 x4 hf y170 ff1 fs2 fc0 sc0 ls0 ws0">Disposiciones pertinentes de la Unión Europea (UE)
                </div>
                <div class="t m0 x4 hd y171 ff1 fs4 fc0 sc0 ls0 ws0">Restricciones según REACH, Anexo XVII</div>
                <div class="t m0 x1c hd y172 ff1 fs4 fc0 sc0 ls0 ws0">Sustancias peligrosas con restricciones (REACH,
                    Anexo XVII)</div>
                <div class="t m0 x42 hf y173 ff1 fs7 fc4 sc0 ls0 ws0">Nombre de la sustancia<span class="_ _27">
                    </span>Nombre según al inventario<span class="_ _31"> </span><span class="fs5">No CAS<span
                            class="_ _32"> </span>Restricción<span class="_ _33"> </span><span
                            class="fs2">No</span></span></div>
                <div class="t m0 x43 h5 y174 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _34"> </span><span
                        class="fs7">carcinogénico<span class="_ _29"> </span></span>R28-30<span class="_ _31">
                    </span><span class="fs3">28</span></div>
                <div class="t m0 x43 ha y175 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _35"> </span><span
                        class="fs9">sustancias en tintas para tatuajes y permanentes</span></div>
                <div class="t m0 x44 ha y176 ff2 fs0 fc0 sc0 ls0 ws0">maquillaje</div>
                <div class="t m0 x45 h5 y175 ff2 fs3 fc0 sc0 ls0 ws0">R75<span class="_ _c"> </span>75</div>
                <div class="t m0 x43 h5 y177 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _36"> </span><span
                        class="fs7">azocolorantes y azocolorantes<span class="_ _37"> </span><span class="fs3">R43<span
                                class="_ _c"> </span>43</span></span></div>
                <div class="t m0 x23 h1f y178 ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 ha y179 ff2 fs0 fc0 sc0 ls0 ws0">R28-30<span class="_ _11"> </span>1. No se
                    comercializará, ni se utilizará,</div>
                <div class="t m0 x42 h3 y17a ff2 fs1 fc0 sc0 ls0 ws0">- como sustancias,</div>
                <div class="t m0 x42 hb y17b ff2 fs7 fc0 sc0 ls0 ws0">- como constituyentes de otras sustancias, o,
                </div>
                <div class="t m0 x42 ha y17c ff2 fs0 fc0 sc0 ls0 ws0">- en mezclas,</div>
                <div class="t m0 x42 ha y17d ff2 fs0 fc0 sc0 ls0 ws0">para el suministro al público en general cuando la
                    concentración individual en la sustancia o mezcla sea igual o superior a:</div>
                <div class="t m0 x42 h3 y17e ff2 fs1 fc0 sc0 ls0 ws0">- el límite de concentración específico pertinente
                    especificado en la parte 3 del anexo VI del Reglamento (CE) n.º 1272/2008, o bien,</div>
                <div class="t m0 x42 h3 y17f ff2 fs1 fc0 sc0 ls0 ws0">- la concentración pertinente especificada en la
                    Directiva 1999/45/CE cuando no se establezca un límite de concentración específico en la parte 3
                </div>
                <div class="t m0 x42 h3 y180 ff2 fs1 fc0 sc0 ls0 ws0">del anexo VI del Reglamento (CE) nº 1272/2008.
                </div>
                <div class="t m0 x42 ha y181 ff2 fs0 fc0 sc0 ls0 ws0">Sin perjuicio de la aplicación de otras
                    disposiciones comunitarias relativas a la clasificación, envasado y etiquetado de </div>
                <div class="t m0 x42 ha y182 ff2 fs0 fc0 sc0 ls0 ws0">sustancias y mezclas, los proveedores se
                    asegurarán, antes de la comercialización, de que el envase de dichas sustancias y </div>
                <div class="t m0 x42 ha y183 ff2 fs0 fc0 sc0 ls0 ws0">mezclas esté marcado de forma visible, legible e
                    indeleble de la siguiente manera:</div>
                <div class="t m0 x42 h3 y184 ff2 fs1 fc0 sc0 ls0 ws0">&apos;Restringido a usuarios profesionales&apos;.
                </div>
                <div class="t m0 x42 ha y185 ff2 fs0 fc0 sc0 ls0 ws0">2. No obstante, el apartado 1 no se aplicará a:
                </div>
                <div class="t m0 x42 h3 y186 ff2 fs1 fc0 sc0 ls0 ws0">a) medicamentos o productos veterinarios tal como
                    se definen en la Directiva 2001/82/CE y la Directiva 2001/83/CE;</div>
                <div class="t m0 x42 h20 y187 ff2 fsa fc0 sc0 ls0 ws0">(b) los productos cosméticos tal como se definen
                    en la Directiva 76/768/CEE;</div>
                <div class="t m0 x42 h15 y188 ff2 fsb fc0 sc0 ls0 ws0">c) los siguientes combustibles y productos
                    derivados del petróleo:</div>
                <div class="t m0 x42 h3 y189 ff2 fs1 fc0 sc0 ls0 ws0">- combustibles para motores cubiertos por la
                    Directiva 98/70/CE,</div>
                <div class="t m0 x42 h19 y18a ff2 fsd fc0 sc0 ls0 ws0">- productos derivados del petróleo destinados a
                    ser utilizados como combustible en instalaciones de combustión móviles o fijas,</div>
                <div class="t m0 x42 h15 y18b ff2 fsb fc0 sc0 ls0 ws0">- combustibles vendidos en sistemas cerrados (por
                    ejemplo, botellas de gas líquido);</div>
                <div class="t m0 x42 h20 y18c ff2 fsa fc0 sc0 ls0 ws0">d) las pinturas para artistas contempladas en la
                    Directiva 1999/45/CE;</div>
                <div class="t m0 x42 h3 y18d ff2 fs1 fc0 sc0 ls0 ws0">e) las sustancias enumeradas en la columna 1 del
                    apéndice 11, para las aplicaciones o usos enumerados en la columna 2 del apéndice 11. </div>
                <div class="t m0 x42 h3 y18e ff2 fs1 fc0 sc0 ls0 ws0">Cuando se especifique una fecha en la columna 2
                    del apéndice 11, la excepción se aplicará hasta dicha fecha;</div>
                <div class="t m0 x42 h14 y18f ff2 fs9 fc0 sc0 ls0 ws0">(f) dispositivos cubiertos por el Reglamento (UE)
                    2017/745.</div>
                <div class="t m0 x42 hb y190 ff2 fs7 fc0 sc0 ls0 ws0">1. Colorantes azoicos que, por escisión reductora
                    de uno o más grupos azo, pueden liberar una o más de las aminas aromáticas </div>
                <div class="t m0 x42 hb y191 ff2 fs7 fc0 sc0 ls0 ws0">enumeradas en el Apéndice 8, en concentraciones
                    detectables, es decir, superiores a 30 mg/kg (0,003 % en peso) en los artículos o en </div>
                <div class="t m0 x42 hb y192 ff2 fs7 fc0 sc0 ls0 ws0">sus partes teñidas, de acuerdo con los métodos de
                    prueba enumerados en el Apéndice 10, no se utilizarán en artículos textiles y de </div>
                <div class="t m0 x42 hb y193 ff2 fs7 fc0 sc0 ls0 ws0">cuero que puedan entrar en contacto directo y
                    prolongado con la piel humana o la cavidad oral, tales como:</div>
                <div class="t m0 x42 h3 y194 ff2 fs1 fc0 sc0 ls0 ws0">- ropa, ropa de cama, toallas, postizos, pelucas,
                    sombreros, pañales y otros artículos sanitarios, sacos de dormir,</div>
                <div class="t m0 x42 h3 y195 ff2 fs1 fc0 sc0 ls0 ws0">- calzado, guantes, correas de reloj de pulsera,
                    bolsos, monederos/carteras, maletines, fundas para sillas, monederos colgados al cuello,</div>
                <div class="t m0 x42 hb y196 ff2 fs7 fc0 sc0 ls0 ws0">- juguetes textiles o de cuero y juguetes que
                    incluyen prendas textiles o de cuero,</div>
                <div class="t m0 x42 h3 y197 ff2 fs1 fc0 sc0 ls0 ws0">- hilados y tejidos destinados a ser utilizados
                    por el consumidor final.</div>
                <div class="t m0 x42 ha y198 ff2 fs0 fc0 sc0 ls0 ws0">2. Además, los artículos textiles y de cuero a que
                    se refiere el apartado 1 no podrán comercializarse a menos que cumplan </div>
                <div class="t m0 x42 ha y199 ff2 fs0 fc0 sc0 ls0 ws0">los requisitos establecidos en dicho apartado.
                </div>
                <div class="t m0 x42 hb y19a ff2 fs7 fc0 sc0 ls0 ws0">3. Los colorantes azoicos que figuran en el
                    apéndice 9, «Lista de colorantes azoicos», no se comercializarán ni utilizarán como </div>
                <div class="t m0 x42 hb y19b ff2 fs7 fc0 sc0 ls0 ws0">sustancias o en mezclas en concentraciones
                    superiores al 0,1 % en peso, cuando la sustancia o la mezcla está destinado a la </div>
                <div class="t m0 x42 hb y19c ff2 fs7 fc0 sc0 ls0 ws0">coloración de artículos textiles y de cuero.</div>
                <div class="t m0 x4 h5 y190 ff2 fs3 fc0 sc0 ls0 ws0">R43</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 11 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pfc" class="pf w0 h0" data-page-no="c">
            <div class="pc pcc w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bgc.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x23 h1f ycb ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 h5 y19d ff2 fs3 fc0 sc0 ls0 ws0">R75<span class="_ _38"> </span><span class="fs0">1.
                        No se comercializarán en mezclas para su uso con fines de tatuaje, y las mezclas que contengan
                        dichas sustancias no se </span></div>
                <div class="t m0 x42 ha y19e ff2 fs0 fc0 sc0 ls0 ws0">utilizarán para tatuajes, después del 4 de enero
                    de 2022 si la sustancia o sustancias en cuestión están presentes en las </div>
                <div class="t m0 x42 ha y19f ff2 fs0 fc0 sc0 ls0 ws0">siguientes circunstancias :</div>
                <div class="t m0 x42 hb y1a0 ff2 fs7 fc0 sc0 ls0 ws0">a) en el caso de una sustancia clasificada en la
                    parte 3 del anexo VI del Reglamento (CE) no 1272/2008 como carcinógeno de </div>
                <div class="t m0 x42 hb y1a1 ff2 fs7 fc0 sc0 ls0 ws0">categoría 1A, 1B o 2, o mutágeno de células
                    germinales de categoría 1A, 1B o 2, la sustancia está presente en la mezcla en una </div>
                <div class="t m0 x42 hb y1a2 ff2 fs7 fc0 sc0 ls0 ws0">concentración igual o superior al 0,00005 % en
                    peso;</div>
                <div class="t m0 x42 hb y1a3 ff2 fs7 fc0 sc0 ls0 ws0">b) en el caso de una sustancia clasificada en la
                    parte 3 del anexo VI del Reglamento (CE) no 1272/2008 como tóxico para la </div>
                <div class="t m0 x42 hb y1a4 ff2 fs7 fc0 sc0 ls0 ws0">reproducción de categoría 1A, 1B o 2, la sustancia
                    está presente en la mezcla en una concentración igual o superior a 0,001 % en </div>
                <div class="t m0 x42 hb y1a5 ff2 fs7 fc0 sc0 ls0 ws0">peso;</div>
                <div class="t m0 x42 hb y1a6 ff2 fs7 fc0 sc0 ls0 ws0">c) en el caso de una sustancia clasificada en la
                    parte 3 del anexo VI del Reglamento (CE) no 1272/2008 como sensibilizante cutáneo </div>
                <div class="t m0 x42 hb y1a7 ff2 fs7 fc0 sc0 ls0 ws0">de categoría 1, 1A o 1B, la sustancia está
                    presente en la mezcla en una concentración igual o superior a 0,001 % en peso;</div>
                <div class="t m0 x42 hb y1a8 ff2 fs7 fc0 sc0 ls0 ws0">d) en el caso de una sustancia clasificada en la
                    parte 3 del anexo VI del Reglamento (CE) no 1272/2008 como corrosivo cutáneo de </div>
                <div class="t m0 x42 hb y1a9 ff2 fs7 fc0 sc0 ls0 ws0">categoría 1, 1A, 1B o 1C o irritante cutáneo de
                    categoría 2, o como lesión ocular grave de categoría 1 o irritante ocular de categoría </div>
                <div class="t m0 x42 hb y1aa ff2 fs7 fc0 sc0 ls0 ws0">2, la sustancia está presente en la mezcla en una
                    concentración igual o superior a:</div>
                <div class="t m0 x42 h3 y1ab ff2 fs1 fc0 sc0 ls0 ws0">i) 0,1 % en peso, si la sustancia se utiliza
                    únicamente como regulador del pH;</div>
                <div class="t m0 x42 h3 y1ac ff2 fs1 fc0 sc0 ls0 ws0">ii) 0,01 % en peso, en todos los demás casos;
                </div>
                <div class="t m0 x42 ha y1ad ff2 fs0 fc0 sc0 ls0 ws0">e) en el caso de una sustancia enumerada en el
                    anexo II del Reglamento (CE) no 1223/2009 (*1), la sustancia está presente </div>
                <div class="t m0 x42 ha y1ae ff2 fs0 fc0 sc0 ls0 ws0">en la mezcla en una concentración igual o superior
                    al 0,00005 % en peso;</div>
                <div class="t m0 x42 hb y1af ff2 fs7 fc0 sc0 ls0 ws0">(f) en el caso de una sustancia para la cual se
                    especifica una condición de uno o más de los siguientes tipos en la columna g (Tipo </div>
                <div class="t m0 x42 hb y1b0 ff2 fs7 fc0 sc0 ls0 ws0">de producto, Partes del cuerpo) de la tabla en el
                    Anexo IV del Reglamento (CE) No 1223/2009, el sustancia está presente en la </div>
                <div class="t m0 x42 hb y1b1 ff2 fs7 fc0 sc0 ls0 ws0">mezcla en una concentración igual o superior al
                    0,00005 % en peso:</div>
                <div class="t m0 x42 h14 y1b2 ff2 fs9 fc0 sc0 ls0 ws0">(i) “Productos que se aclaran”;</div>
                <div class="t m0 x42 ha y1b3 ff2 fs0 fc0 sc0 ls0 ws0">(ii) “No utilizar en productos aplicados sobre
                    mucosas”;</div>
                <div class="t m0 x42 h20 y1b4 ff2 fsa fc0 sc0 ls0 ws0">(iii) “No debe usarse en productos para los
                    ojos”;</div>
                <div class="t m0 x42 hb y1b5 ff2 fs7 fc0 sc0 ls0 ws0">g) en el caso de una sustancia para la que se
                    especifique una condición en la columna h (Concentración máxima en la preparación lista </div>
                <div class="t m0 x42 hb y1b6 ff2 fs7 fc0 sc0 ls0 ws0">para el uso) o en la columna i (Otros) del cuadro
                    del anexo IV del Reglamento (CE) no 1223/2009, la la sustancia está presente en la </div>
                <div class="t m0 x42 hb y1b7 ff2 fs7 fc0 sc0 ls0 ws0">mezcla en una concentración, o de alguna otra
                    forma, que no concuerda con la condición especificada en esa columna; (h) en el caso </div>
                <div class="t m0 x42 hb y1b8 ff2 fs7 fc0 sc0 ls0 ws0">de una sustancia listada en el Apéndice 13 de este
                    Anexo, la sustancia está presente en la mezcla en una concentración igual o mayor </div>
                <div class="t m0 x42 hb y1b9 ff2 fs7 fc0 sc0 ls0 ws0">que el límite de concentración especificado para
                    esa sustancia en ese Apéndice.</div>
                <div class="t m0 x42 hb y1ba ff2 fs7 fc0 sc0 ls0 ws0">2. A los efectos de esta entrada, el uso de una
                    mezcla “para fines de tatuaje” significa la inyección o introducción de la mezcla en la piel, </div>
                <div class="t m0 x42 hb y1bb ff2 fs7 fc0 sc0 ls0 ws0">la membrana mucosa o el globo ocular de una
                    persona, mediante cualquier proceso o procedimiento (incluidos los procedimientos </div>
                <div class="t m0 x42 hb y1bc ff2 fs7 fc0 sc0 ls0 ws0">comúnmente denominados maquillaje permanente). ,
                    tatuaje cosmético, microblading y micropigmentación), con el objetivo de </div>
                <div class="t m0 x42 hb y1bd ff2 fs7 fc0 sc0 ls0 ws0">realizar una marca o diseño en su cuerpo.</div>
                <div class="t m0 x42 hb y1be ff2 fs7 fc0 sc0 ls0 ws0">3. Si una sustancia no incluida en el apéndice 13
                    se incluye en más de una de las letras a) a g) del apartado 1, se aplicará a esa </div>
                <div class="t m0 x42 hb y1bf ff2 fs7 fc0 sc0 ls0 ws0">sustancia el límite de concentración más estricto
                    establecido en los puntos en cuestión. Si una sustancia enumerada en el apéndice </div>
                <div class="t m0 x42 hb y1c0 ff2 fs7 fc0 sc0 ls0 ws0">13 también se incluye en una o más de las letras
                    a) a g) del apartado 1, se aplicará a esa sustancia el límite de concentración </div>
                <div class="t m0 x42 hb y1c1 ff2 fs7 fc0 sc0 ls0 ws0">establecido en la letra h) del apartado 1.</div>
                <div class="t m0 x42 ha y1c2 ff2 fs0 fc0 sc0 ls0 ws0">4. No obstante, el apartado 1 no se aplicará a las
                    siguientes sustancias hasta el 4 de enero de 2023:</div>
                <div class="t m0 x42 ha y1c3 ff2 fs0 fc0 sc0 ls0 ws0">(a) Pigmento Azul 15:3 (CI 74160, EC No 205-685-1,
                    CAS No 147-14-8);</div>
                <div class="t m0 x42 ha y1c4 ff2 fs0 fc0 sc0 ls0 ws0">(b) Pigmento Verde 7 (CI 74260, EC No 215-524-7,
                    CAS No 1328-53-6).</div>
                <div class="t m0 x42 hb y1c5 ff2 fs7 fc0 sc0 ls0 ws0">5. Si la parte 3 del anexo VI del Reglamento (CE)
                    n.º 1272/2008 se modifica después del 4 de enero de 2021 para clasificar o reclasificar </div>
                <div class="t m0 x42 hb y1c6 ff2 fs7 fc0 sc0 ls0 ws0">una sustancia de modo que quede incluida en las
                    letras a), b), c ) o (d) del párrafo 1 de esta entrada, o tal que entonces se encuentre </div>
                <div class="t m0 x42 hb y1c7 ff2 fs7 fc0 sc0 ls0 ws0">dentro de uno de esos puntos diferente de aquel en
                    el que se encontraba anteriormente, y la fecha de aplicación de esa clasificación </div>
                <div class="t m0 x42 hb y1c8 ff2 fs7 fc0 sc0 ls0 ws0">nueva o revisada sea posterior a la fecha
                    mencionada al apartado 1 o, según sea el caso, al apartado 4 de esta entrada, se considerará </div>
                <div class="t m0 x42 hb y1c9 ff2 fs7 fc0 sc0 ls0 ws0">que dicha modificación, a los efectos de aplicar
                    esta entrada a esa sustancia, entrará en vigor en la fecha de aplicación de esa </div>
                <div class="t m0 x42 hb y1ca ff2 fs7 fc0 sc0 ls0 ws0">clasificación nueva o revisada.</div>
                <div class="t m0 x42 hb y1cb ff2 fs7 fc0 sc0 ls0 ws0">6. Si el anexo II o el anexo IV del Reglamento
                    (CE) n.º 1223/2009 se modifican después del 4 de enero de 2021 para incluir en la lista o </div>
                <div class="t m0 x42 hb y1cc ff2 fs7 fc0 sc0 ls0 ws0">cambiar la lista de una sustancia de modo que la
                    sustancia quede incluida en las letras e), f) o ( g) del apartado 1 de esta entrada, o de </div>
                <div class="t m0 x42 hb y1cd ff2 fs7 fc0 sc0 ls0 ws0">manera que se encuentre dentro de uno de esos
                    puntos diferente de aquel en el que se encontraba anteriormente, y la modificación </div>
                <div class="t m0 x42 hb y1ce ff2 fs7 fc0 sc0 ls0 ws0">surte efecto después de la fecha a que se refiere
                    el apartado 1 o, en su caso be, párrafo 4 de esta entrada, se considerará que esa </div>
                <div class="t m0 x42 hb y1cf ff2 fs7 fc0 sc0 ls0 ws0">modificación, a los efectos de aplicar esta
                    entrada a esa sustancia, surtirá efecto a partir de la fecha correspondiente a 18 meses </div>
                <div class="t m0 x42 hb y1d0 ff2 fs7 fc0 sc0 ls0 ws0">después de la entrada en vigor del acto por el que
                    se hizo la modificación.</div>
                <div class="t m0 x42 ha y1d1 ff2 fs0 fc0 sc0 ls0 ws0">7. Los proveedores que comercialicen una mezcla
                    para tatuar se asegurarán de que, después del 4 de enero de 2022, la </div>
                <div class="t m0 x42 ha y1d2 ff2 fs0 fc0 sc0 ls0 ws0">mezcla esté marcada con la siguiente información:
                </div>
                <div class="t m0 x42 hb y1d3 ff2 fs7 fc0 sc0 ls0 ws0">(a) la declaración “Mezcla para uso en tatuajes o
                    maquillaje permanente”;</div>
                <div class="t m0 x42 h14 y1d4 ff2 fs9 fc0 sc0 ls0 ws0">(b) un número de referencia para identificar de
                    manera única el lote;</div>
                <div class="t m0 x42 ha y1d5 ff2 fs0 fc0 sc0 ls0 ws0">c) la lista de ingredientes de acuerdo con la
                    nomenclatura establecida en el glosario de nombres comunes de ingredientes de </div>
                <div class="t m0 x42 ha y1d6 ff2 fs0 fc0 sc0 ls0 ws0">conformidad con el artículo 33 del Reglamento (CE)
                    n.º 1223/2009 o, en ausencia de un nombre común de ingrediente, el </div>
                <div class="t m0 x42 ha y1d7 ff2 fs0 fc0 sc0 ls0 ws0">nombre IUPAC. En ausencia de un nombre de
                    ingrediente común o un nombre IUPAC, el número CAS y EC. Los ingredientes </div>
                <div class="t m0 x42 ha y1d8 ff2 fs0 fc0 sc0 ls0 ws0">se enumerarán en orden descendente por peso o
                    volumen de los ingredientes en el momento de la formulación. </div>
                <div class="t m0 x42 ha y1d9 ff2 fs0 fc0 sc0 ls0 ws0">“Ingrediente” significa cualquier sustancia
                    añadida durante el proceso de formulación y presente en la mezcla para su uso con </div>
                <div class="t m0 x42 ha y1da ff2 fs0 fc0 sc0 ls0 ws0">fines de tatuaje. Las impurezas no se considerarán
                    ingredientes. Si el nombre de una sustancia, utilizada como ingrediente en </div>
                <div class="t m0 x42 ha y1db ff2 fs0 fc0 sc0 ls0 ws0">el sentido de esta entrada, ya debe indicarse en
                    la etiqueta de conformidad con el Reglamento (CE) n.º 1272/2008,</div>
                <div class="t m0 x42 hb y1dc ff2 fs7 fc0 sc0 ls0 ws0">d) la declaración adicional &quot;regulador de
                    pH&quot; para las sustancias incluidas en el apartado 1, letra d), inciso i);</div>
                <div class="t m0 x42 h3 y1dd ff2 fs1 fc0 sc0 ls0 ws0">(e) la declaración &quot;Contiene níquel. Puede
                    causar reacciones alérgicas&quot;. si la mezcla contiene níquel por debajo del límite de
                    concentración </div>
                <div class="t m0 x42 h3 y1de ff2 fs1 fc0 sc0 ls0 ws0">especificado en el Apéndice 13;</div>
                <div class="t m0 x42 hb y1df ff2 fs7 fc0 sc0 ls0 ws0">(f) la declaración &quot;Contiene cromo (VI).
                    Puede causar reacciones alérgicas&quot;. si la mezcla contiene cromo (VI) por debajo del límite de
                </div>
                <div class="t m0 x42 hb y1e0 ff2 fs7 fc0 sc0 ls0 ws0">concentración especificado en el apéndice 13;
                </div>
                <div class="t m0 x42 hb y1e1 ff2 fs7 fc0 sc0 ls0 ws0">g) las instrucciones de seguridad para el uso, en
                    la medida en que el Reglamento (CE) nº 1272/2008 no exija que figuren en la </div>
                <div class="t m0 x42 hb y1e2 ff2 fs7 fc0 sc0 ls0 ws0">etiqueta.</div>
                <div class="t m0 x42 hb y1e3 ff2 fs7 fc0 sc0 ls0 ws0">La información deberá ser claramente visible,
                    fácilmente legible y marcada de forma indeleble.</div>
                <div class="t m0 x42 ha y1e4 ff2 fs0 fc0 sc0 ls0 ws0">La información se redactará en la(s) lengua(s)
                    oficial(es) del Estado(s) miembro(s) donde se comercialice la mezcla, a menos </div>
                <div class="t m0 x42 ha y1e5 ff2 fs0 fc0 sc0 ls0 ws0">que el(los) Estado(s) miembro(s) en cuestión
                    establezca(n) otra cosa.</div>
                <div class="t m0 x42 ha y1e6 ff2 fs0 fc0 sc0 ls0 ws0">Cuando sea necesario debido al tamaño del envase,
                    la información enumerada en el párrafo primero, excepto la letra a), se </div>
                <div class="t m0 x42 ha y1e7 ff2 fs0 fc0 sc0 ls0 ws0">incluirá en su lugar en las instrucciones de uso.
                </div>
                <div class="t m0 x42 hb y1e8 ff2 fs7 fc0 sc0 ls0 ws0">Antes de utilizar una mezcla con fines de tatuaje,
                    la persona que utilice la mezcla deberá proporcionar a la persona que se someta al </div>
                <div class="t m0 x42 hb y1e9 ff2 fs7 fc0 sc0 ls0 ws0">procedimiento la información marcada en el envase
                    o incluida en las instrucciones de uso de conformidad con este párrafo.</div>
                <div class="t m0 x42 ha y1ea ff2 fs0 fc0 sc0 ls0 ws0">8. Las mezclas que no contengan la declaración
                    &quot;Mezcla para uso en tatuajes o maquillaje permanente&quot; no se deben usar </div>
                <div class="t m0 x42 ha y1eb ff2 fs0 fc0 sc0 ls0 ws0">para tatuar.</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 12 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pfd" class="pf w0 h0" data-page-no="d">
            <div class="pc pcd w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bgd.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x23 h1f ycb ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x42 ha y19d ff2 fs0 fc0 sc0 ls0 ws0">9. Esta entrada no se aplica a las sustancias que
                    son gases a una temperatura de 20 °C y una presión de 101,3 kPa, o generan </div>
                <div class="t m0 x42 ha y19e ff2 fs0 fc0 sc0 ls0 ws0">una presión de vapor de más de 300 kPa a una
                    temperatura de 50 °C, con excepción del formaldehído (CAS nº 50-00-0, CE nº </div>
                <div class="t m0 x42 ha y19f ff2 fs0 fc0 sc0 ls0 ws0">200-001-8).</div>
                <div class="t m0 x42 ha y1a0 ff2 fs0 fc0 sc0 ls0 ws0">10. Esta entrada no se aplica a la
                    comercialización de una mezcla para tatuar, o al uso de una mezcla para tatuar, cuando se </div>
                <div class="t m0 x42 ha y1a1 ff2 fs0 fc0 sc0 ls0 ws0">comercialice exclusivamente como dispositivo
                    médico o accesorio de un dispositivo médico. , en el sentido del Reglamento </div>
                <div class="t m0 x42 ha y1a2 ff2 fs0 fc0 sc0 ls0 ws0">(UE) 2017/745, o cuando se utilice exclusivamente
                    como dispositivo médico o accesorio de un dispositivo médico, en el mismo </div>
                <div class="t m0 x42 ha y1a3 ff2 fs0 fc0 sc0 ls0 ws0">sentido. Cuando la puesta en el mercado o el uso
                    no pueda ser exclusivamente como producto sanitario o accesorio de un </div>
                <div class="t m0 x42 ha y1a4 ff2 fs0 fc0 sc0 ls0 ws0">producto sanitario, los requisitos del Reglamento
                    (UE) 2017/745 y del presente Reglamento se aplicarán acumulativamente.</div>
                <div class="t m0 x4 hf y1ec ff1 fs2 fc0 sc0 ls0 ws0">Lista de sustancias sujetas a autorización (REACH,
                    Anexo XIV)/SVHC - lista de candidatos</div>
                <div class="t m0 x1c h2 y1ed ff1 fs0 fc0 sc0 ls0 ws0">Sustancia extremadamente preocupante (SVHC)</div>
                <div class="t m0 x2c h23 y1ee ff1 fs7 fc4 sc0 ls0 ws0">Nombre según inventar-</div>
                <div class="t m0 x46 hf y1ef ff1 fs2 fc4 sc0 ls0 ws0">ory</div>
                <div class="t m0 x47 hf y1ee ff1 fs2 fc4 sc0 ls0 ws0">CAS</div>
                <div class="t m0 x48 hf y1ef ff1 fs2 fc4 sc0 ls0 ws0">No</div>
                <div class="t m0 x49 h23 y1ee ff1 fs7 fc4 sc0 ls0 ws0">Listado en<span class="_ _39"> </span><span
                        class="fsd">Observaciones<span class="_ _3a"> </span>Última aplicación</span></div>
                <div class="t m0 x4a h11 y1ef ff1 fs9 fc4 sc0 ls0 ws0">plegamiento</div>
                <div class="t m0 x11 h23 y1f0 ff1 fs7 fc4 sc0 ls0 ws0">fecha</div>
                <div class="t m0 x4b h11 y1ee ff1 fs9 fc4 sc0 ls0 ws0">Atardecer</div>
                <div class="t m0 x4c h23 y1ef ff1 fs7 fc4 sc0 ls0 ws0">fecha</div>
                <div class="t m0 xe h1d y1ee ff1 fsd fc4 sc0 ls0 ws0">Fecha de entrada</div>
                <div class="t m0 x4d h13 y1ef ff1 fsa fc4 sc0 ls0 ws0">conclusión</div>
                <div class="t m0 x2b ha y1f1 ff2 fs0 fc0 sc0 ls0 ws0">disodio 3,3&apos;-[[1,1&apos;-biphen-</div>
                <div class="t m0 x2c hb y1f2 ff2 fs7 fc0 sc0 ls0 ws0">yl]-4,4&apos;-diilbis(azo)]bis(4-</div>
                <div class="t m0 x4e hb y1f3 ff2 fs7 fc0 sc0 ls0 ws0">aminonaftaleno-1-sulfonato) </div>
                <div class="t m0 x4f hb y1f4 ff2 fs7 fc0 sc0 ls0 ws0">(CI Direct Red 28)</div>
                <div class="t m0 x50 ha y1f1 ff2 fs0 fc0 sc0 ls0 ws0">573-58-</div>
                <div class="t m0 x51 h5 y1f2 ff2 fs3 fc0 sc0 ls0 ws0">0</div>
                <div class="t m0 x52 ha y1f1 ff2 fsa fc0 sc0 ls0 ws0">Lista de candidatos<span class="_ _17">
                    </span><span class="fs0">carc. A57a<span class="_ _3b"> </span>2013-12-16</span></div>
                <div class="t m0 x23 h1f y1f5 ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 h19 y1f6 ff2 fsd fc0 sc0 ls0 ws0">Lista de candidatos</div>
                <div class="t m0 x4 ha y1f7 ff2 fs0 fc0 sc0 ls0 ws0">carc. A57a</div>
                <div class="t m0 x43 h3 y1f6 ff2 fs1 fc0 sc0 ls0 ws0">Sustancias que cumplen los criterios a que se
                    refiere el artículo 57 y para su eventual inclusión en el Anexo XIV </div>
                <div class="t m0 x43 h3 y1f7 ff2 fs1 fc0 sc0 ls0 ws0">Carcinógenos (artículo 57 bis)</div>
                <div class="t m0 x4 hd y1f8 ff1 fs4 fc0 sc0 ls0 ws0">Directiva Seveso</div>
                <div class="t m0 x1c hd y1f9 ff1 fs4 fc0 sc0 ls0 ws0">2012/18/UE (Seveso III)</div>
                <div class="t m0 x53 hf y1fa ff1 fs2 fc4 sc0 ls0 ws0">No<span class="_ _3c"> </span><span
                        class="fs5">Sustancia peligrosa/categorías de peligro<span class="_ _3d"> </span><span
                            class="fs1">Cantidad de calificación (toneladas) para la aplicación</span></span></div>
                <div class="t m0 x54 h12 y1fb ff1 fs5 fc4 sc0 ls0 ws0">plicación de nivel superior e inferior</div>
                <div class="t m0 x55 h12 y1fc ff1 fs5 fc4 sc0 ls0 ws0">requisitos</div>
                <div class="t m0 x56 h12 y1fa ff1 fs5 fc4 sc0 ls0 ws0">notas</div>
                <div class="t m0 x57 ha y1fd ff2 fs0 fc0 sc0 ls0 ws0">no asignado</div>
                <div class="t m0 x4 h11 y1fe ff1 fs9 fc0 sc0 ls0 ws0">Directiva de pintura decorativa</div>
                <div class="t m0 x1c hc y1ff ff2 fs1 fc0 sc0 ls0 ws0">contenido de COV<span class="_ _3e"> </span><span
                        class="fs8">0 %</span></div>
                <div class="t m0 x4 h12 y200 ff1 fs5 fc0 sc0 ls0 ws0">Directiva de emisiones industriales (IED)</div>
                <div class="t m0 x1c hc y201 ff2 fs1 fc0 sc0 ls0 ws0">contenido de COV<span class="_ _3e"> </span><span
                        class="fs8">0 %</span></div>
                <div class="t m0 x4 hd y202 ff1 fs4 fc0 sc0 ls0 ws0">Directiva sobre la restricción del uso de ciertas
                    sustancias peligrosas en equipos eléctricos y </div>
                <div class="t m0 x4 hd y203 ff1 fs4 fc0 sc0 ls0 ws0">electrónicos (RoHS)</div>
                <div class="t m0 x4 hb y204 ff2 fs7 fc0 sc0 ls0 ws0">no enlistado</div>
                <div class="t m0 x4 h17 y205 ff1 fs3 fc0 sc0 ls0 ws0">Reglamento relativo al establecimiento de un
                    Registro Europeo de Emisiones y Transferencias de </div>
                <div class="t m0 x4 h17 y206 ff1 fs3 fc0 sc0 ls0 ws0">Contaminantes (RETC)</div>
                <div class="t m0 x4 hb y207 ff2 fs7 fc0 sc0 ls0 ws0">no enlistado</div>
                <div class="t m0 x4 hd y208 ff1 fs4 fc0 sc0 ls0 ws0">Directiva Marco del Agua (DMA)</div>
                <div class="t m0 x1c h2 y209 ff1 fs0 fc0 sc0 ls0 ws0">Lista de contaminantes (DMA)</div>
                <div class="t m0 x58 h12 y20a ff1 fs7 fc4 sc0 ls0 ws0">Nombre de la sustancia<span class="_ _25">
                    </span>Nombre según al inventario<span class="_ _3f"> </span><span class="fs5">No CAS<span
                            class="_ _40"> </span></span>Listado en<span class="_ _41"> </span><span
                        class="fsd">Observaciones</span></div>
                <div class="t m0 x46 ha y20b ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _9"> </span><span
                        class="fs1">Sustancias y preparados, o los </span></div>
                <div class="t m0 x59 h3 y20c ff2 fs1 fc0 sc0 ls0 ws0">productos de descomposición de los </div>
                <div class="t m0 x5a h3 y20d ff2 fs1 fc0 sc0 ls0 ws0">mismos, de los que se haya demostrado </div>
                <div class="t m0 x5b h3 y20e ff2 fs1 fc0 sc0 ls0 ws0">que poseen propiedades cancerígenas </div>
                <div class="t m0 x5c h3 y20f ff2 fs1 fc0 sc0 ls0 ws0">o mutagénicas o propiedades que</div>
                <div class="t m0 x34 h5 y20b ff2 fs3 fc0 sc0 ls0 ws0">a)</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 13 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pfe" class="pf w0 h0" data-page-no="e">
            <div class="pc pce w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bge.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x1c h2 ya3 ff1 fs0 fc0 sc0 ls0 ws0">Lista de contaminantes (DMA)</div>
                <div class="t m0 x58 h12 y210 ff1 fs7 fc4 sc0 ls0 ws0">Nombre de la sustancia<span class="_ _25">
                    </span>Nombre según al inventario<span class="_ _3f"> </span><span class="fs5">No CAS<span
                            class="_ _40"> </span></span>Listado en<span class="_ _41"> </span><span
                        class="fsd">Observaciones</span></div>
                <div class="t m0 x5d h20 y211 ff2 fsa fc0 sc0 ls0 ws0">puede afectar la esteroidogénesis, la tiroides,
                    la </div>
                <div class="t m0 x59 h20 y212 ff2 fsa fc0 sc0 ls0 ws0">reproducción u otros sistemas endocrinos.</div>
                <div class="t m0 x5e h20 y213 ff2 fsa fc0 sc0 ls0 ws0">funciones relacionadas en o a través del</div>
                <div class="t m0 x5f ha y214 ff2 fs0 fc0 sc0 ls0 ws0">ambiente acuático</div>
                <div class="t m0 x46 h5 y215 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _42"> </span>Metales y
                    sus compuestos<span class="_ _43"> </span><span class="fs3">a)</span></div>
                <div class="t m0 x23 h1f y216 ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 h5 y217 ff2 fs3 fc0 sc0 ls0 ws0">A)<span class="_ _44"> </span><span
                        class="fsa">Lista indicativa de los principales contaminantes</span></div>
                <div class="t m0 x4 h5 y218 ff1 fs3 fc0 sc0 ls0 ws0">Reglamento sobre la comercialización y uso de
                    precursores de explosivos<span class="ff2"> no </span></div>
                <div class="t m0 x4 h5 y219 ff2 fs3 fc0 sc0 ls0 ws0">enlistado</div>
                <div class="t m0 x4 hb y21a ff1 fs7 fc0 sc0 ls0 ws0">Reglamento sobre precursores de drogas<span
                        class="ff2"> no </span></div>
                <div class="t m0 x4 hb y21b ff2 fs7 fc0 sc0 ls0 ws0">enlistado</div>
                <div class="t m0 x4 h7 y21c ff1 fs5 fc0 sc0 ls0 ws0">Reglamento sobre sustancias que agotan la capa de
                    ozono (SAO)<span class="ff2"> no </span></div>
                <div class="t m0 x4 h7 y21d ff2 fs5 fc0 sc0 ls0 ws0">enlistado</div>
                <div class="t m0 x4 h17 y21e ff1 fs3 fc0 sc0 ls0 ws0">Reglamento relativo a la exportación e importación
                    de productos químicos peligrosos (PIC)</div>
                <div class="t m0 x4 hb y21f ff2 fs7 fc0 sc0 ls0 ws0">sustancias químicas sujetas al procedimiento
                    internacional de consentimiento fundamentado previo (PIC) (el &apos;procedimiento PIC&apos;).</div>
                <div class="t m0 x60 h12 y220 ff1 fs7 fc4 sc0 ls0 ws0">Nombre de la sustancia<span class="_ _e">
                    </span>Nombre según al inventario<span class="_ _45"> </span><span class="fs5">No CAS<span
                            class="_ _46"> </span><span class="fs3">Categoría /</span></span></div>
                <div class="t m0 x12 h17 y221 ff1 fs3 fc4 sc0 ls0 ws0">subcategoría</div>
                <div class="t m0 x61 h1d y220 ff1 fsd fc4 sc0 ls0 ws0">Limitación de uso</div>
                <div class="t m0 x4d hf y221 ff1 fs2 fc4 sc0 ls0 ws0">ción</div>
                <div class="t m0 x62 ha y222 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _47"> </span>bencidina,
                    sales<span class="_ _30"> </span><span class="fsb">yo(1)</span></div>
                <div class="t m0 x63 h15 y223 ff2 fsb fc0 sc0 ls0 ws0">yo(2)</div>
                <div class="t m0 x64 h25 y222 ff2 fs12 fc0 sc0 ls0 ws0">señor</div>
                <div class="t m0 x65 h5 y223 ff2 fs3 fc0 sc0 ls0 ws0">b</div>
                <div class="t m0 x62 h5 y224 ff2 fs0 fc0 sc0 ls0 ws0">rojo congo<span class="_ _47"> </span>bencidina,
                    sales<span class="_ _48"> </span><span class="fs3">i<span class="_ _49"> </span><span
                            class="fs12">señor</span></span></div>
                <div class="t m0 x23 h1f y225 ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 h5 y226 ff2 fs3 fc0 sc0 ls0 ws0">b</div>
                <div class="t m0 x4 h5 y227 ff2 fs3 fc0 sc0 ls0 ws0">i</div>
                <div class="t m0 x4 h15 y228 ff2 fsb fc0 sc0 ls0 ws0">yo(1)</div>
                <div class="t m0 x4 h15 y229 ff2 fsb fc0 sc0 ls0 ws0">yo(2)</div>
                <div class="t m0 x4 h25 y22a ff2 fs12 fc0 sc0 ls0 ws0">señor</div>
                <div class="t m0 x24 h14 y226 ff2 fs9 fc0 sc0 ls0 ws0">Limitación de uso: prohibición (para la
                    subcategoría o subcategorías en cuestión) de acuerdo con la legislación de la Unión Categoría: i
                </div>
                <div class="t m0 x24 h14 y227 ff2 fs9 fc0 sc0 ls0 ws0">- producto químico industrial</div>
                <div class="t m0 x24 ha y228 ff2 fs0 fc0 sc0 ls0 ws0">Subcategoría: i(1) - químico industrial para uso
                    profesional </div>
                <div class="t m0 x24 ha y229 ff2 fs0 fc0 sc0 ls0 ws0">Subcategoría: i(2) - químico industrial para uso
                    público</div>
                <div class="t m0 x24 h3 y22a ff2 fs1 fc0 sc0 ls0 ws0">Limitación de uso: restricción severa (para la
                    subcategoría o subcategorías en cuestión) de acuerdo con la legislación de la Unión</div>
                <div class="t m0 x4 ha y22b ff1 fs0 fc0 sc0 ls0 ws0">Reglamento sobre contaminantes orgánicos
                    persistentes (COP)<span class="ff2"> no </span></div>
                <div class="t m0 x4 ha y11e ff2 fs0 fc0 sc0 ls0 ws0">enlistado</div>
                <div class="t m0 x4 hd y22c ff1 fs4 fc0 sc0 ls0 ws0">Otra información</div>
                <div class="t m0 x4 h7 y22d ff2 fs5 fc0 sc0 ls0 ws0">Directiva 94/33/CE sobre la protección de los
                    jóvenes en el trabajo. Observe las restricciones de empleo bajo la </div>
                <div class="t m0 x4 h7 y164 ff2 fs5 fc0 sc0 ls0 ws0">Directiva de Protección de la Maternidad
                    (92/85/EEC) para mujeres embarazadas o lactantes.</div>
                <div class="t m0 x4 h12 y22e ff1 fs5 fc0 sc0 ls0 ws0">Inventarios nacionales</div>
                <div class="t m0 x2b hf y22f ff1 fs2 fc4 sc0 ls0 ws0">País<span class="_ _26"> </span><span
                        class="fs3">Inventario<span class="_ _4a"> </span>Estado</span></div>
                <div class="t m0 x15 h5 y230 ff2 fs12 fc0 sc0 ls0 ws0">Australia<span class="_ _a"> </span><span
                        class="fs3">AICS<span class="_ _4b"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x66 h5 y231 ff2 fs12 fc0 sc0 ls0 ws0">California<span class="_ _a"> </span><span
                        class="fs3">ADSL<span class="_ _1f"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x15 h5 y232 ff2 fs3 fc0 sc0 ls0 ws0">CN<span class="_ _4c"> </span><span
                        class="fs0">IECSC<span class="_ _4d"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x15 h5 y233 ff2 fs3 fc0 sc0 ls0 ws0">UE<span class="_ _4e"> </span>ECSI<span
                        class="_ _1e"> </span><span class="fsa">se enumera la sustancia</span></div>
                <div class="t m0 x66 h5 y234 ff2 fs3 fc0 sc0 ls0 ws0">CR<span class="_ _4e"> </span>KECI<span
                        class="_ _4b"> </span><span class="fsa">se enumera la sustancia</span></div>
                <div class="t m0 x15 ha y235 ff2 fs12 fc0 sc0 ls0 ws0">Nueva Zelanda<span class="_ _4f"> </span><span
                        class="fs0">NZIoC<span class="_ _50"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x15 h5 y236 ff2 fs3 fc0 sc0 ls0 ws0">PH<span class="_ _4c"> </span><span
                        class="fs0">PICCS<span class="_ _4d"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 14 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pff" class="pf w0 h0" data-page-no="f">
            <div class="pc pcf w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bgf.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x2b hf y237 ff1 fs2 fc4 sc0 ls0 ws0">País<span class="_ _26"> </span><span
                        class="fs3">Inventario<span class="_ _4a"> </span>Estado</span></div>
                <div class="t m0 x15 h5 y238 ff2 fs3 fc0 sc0 ls0 ws0">TW<span class="_ _b"> </span>TCSI<span
                        class="_ _1e"> </span><span class="fsa">se enumera la sustancia</span></div>
                <div class="t m0 x66 h5 y239 ff2 fs12 fc0 sc0 ls0 ws0">A NOSOTROS<span class="_ _23"> </span><span
                        class="fs3">TSCA<span class="_ _4d"> </span><span class="fsa">se enumera la
                            sustancia</span></span></div>
                <div class="t m0 x23 h1f y23a ff1 fs1 fc0 sc0 ls0 ws0">Leyenda</div>
                <div class="t m0 x4 h5 y23b ff2 fs3 fc0 sc0 ls0 ws0">AICS</div>
                <div class="t m0 x4 h5 y23c ff2 fs3 fc0 sc0 ls0 ws0">ADSL</div>
                <div class="t m0 x4 h5 y23d ff2 fs3 fc0 sc0 ls0 ws0">ECSI</div>
                <div class="t m0 x4 ha y23e ff2 fs0 fc0 sc0 ls0 ws0">IECSC</div>
                <div class="t m0 x4 h5 y23f ff2 fs3 fc0 sc0 ls0 ws0">KECI</div>
                <div class="t m0 x4 ha y240 ff2 fs0 fc0 sc0 ls0 ws0">NZIoC</div>
                <div class="t m0 x4 ha y241 ff2 fs0 fc0 sc0 ls0 ws0">PICCS</div>
                <div class="t m0 x4 h5 y242 ff2 fs3 fc0 sc0 ls0 ws0">TCSI</div>
                <div class="t m0 x4 h5 y243 ff2 fs3 fc0 sc0 ls0 ws0">TSCA</div>
                <div class="t m0 x24 hb y23b ff2 fs7 fc0 sc0 ls0 ws0">Inventario Australiano de Sustancias Químicas
                </div>
                <div class="t m0 x24 hb y23c ff2 fs7 fc0 sc0 ls0 ws0">Lista de Sustancias Domésticas (DSL)</div>
                <div class="t m0 x24 h3 y23d ff2 fs1 fc0 sc0 ls0 ws0">Inventario de sustancias de la CE (EINECS, ELINCS,
                    NLP)</div>
                <div class="t m0 x24 h14 y23e ff2 fs9 fc0 sc0 ls0 ws0">Inventario de Sustancias Químicas Existentes
                    Producidas o Importadas en China Inventario de </div>
                <div class="t m0 x24 h14 y23f ff2 fs9 fc0 sc0 ls0 ws0">Sustancias Químicas Existentes en Corea</div>
                <div class="t m0 x24 h20 y240 ff2 fsa fc0 sc0 ls0 ws0">Inventario de productos químicos de Nueva Zelanda
                </div>
                <div class="t m0 x24 hb y241 ff2 fs7 fc0 sc0 ls0 ws0">Inventario filipino de productos químicos y
                    sustancias químicas (PICCS) </div>
                <div class="t m0 x24 hb y242 ff2 fs7 fc0 sc0 ls0 ws0">Inventario de sustancias químicas de Taiwán</div>
                <div class="t m0 x24 h14 y243 ff2 fs9 fc0 sc0 ls0 ws0">Ley de Control de Sustancias Tóxicas</div>
                <div class="t m0 x0 h12 y244 ff1 fs5 fc0 sc0 ls0 ws0">15.2 Evaluación de la seguridad química</div>
                <div class="t m0 x4 h5 y245 ff2 fs3 fc0 sc0 ls0 ws0">No se ha llevado a cabo una evaluación de la
                    seguridad química para esta sustancia.</div>
                <div class="t m0 x3 h9 y246 ff1 fs6 fc3 sc0 ls0 ws0">SECCIÓN 16: Otra información</div>
                <div class="t m0 x4 h2 y247 ff1 fs0 fc0 sc0 ls0 ws0">Indicación de cambios (ficha de datos de seguridad
                    revisada)</div>
                <div class="t m0 x4 h8 y248 ff2 fs2 fc0 sc0 ls0 ws0">Adaptación al reglamento: Reglamento (CE) n.º
                    1907/2006 (REACH), modificado por 2020/878/UE</div>
                <div class="t m0 x4 h5 y249 ff2 fs3 fc0 sc0 ls0 ws0">Reestructuración: apartado 9, apartado 14</div>
                <div class="t m0 x4f h12 y24a ff1 fs5 fc4 sc0 ls0 ws0">Sección<span class="_ _26"> </span><span
                        class="fs0">Entrada anterior (texto/valor)<span class="_ _51"> </span></span>Entrada real
                    (texto/valor)<span class="_ _52"> </span><span class="fsa">Seguridad-</span></div>
                <div class="t m0 x67 h1d y24b ff1 fsd fc4 sc0 ls0 ws0">relevante</div>
                <div class="t m0 x68 h24 y24c ff1 fs10 fc4 sc0 ls0 ws0">hormiga</div>
                <div class="t m0 x69 h5 y24d ff2 fs3 fc0 sc0 ls0 ws0">2.1<span class="_ _53"> </span><span
                        class="fs0">Clasificación según Reglamento (CE) No</span></div>
                <div class="t m0 x6a ha y24e ff2 fs0 fc0 sc0 ls0 ws0">1272/2008 (CLP):</div>
                <div class="t m0 x6b ha y24f ff2 fs0 fc0 sc0 ls0 ws0">cambio en el listado (tabla)</div>
                <div class="t m0 x6c h5 y24d ff2 fs3 fc0 sc0 ls0 ws0">Sí</div>
                <div class="t m0 x69 h5 y250 ff2 fs3 fc0 sc0 ls0 ws0">2.3<span class="_ _54"> </span><span
                        class="fs0">Otros peligros:</span></div>
                <div class="t m0 x6d ha y251 ff2 fs0 fc0 sc0 ls0 ws0">No hay información adicional.</div>
                <div class="t m0 x6e h5 y250 ff2 fs0 fc0 sc0 ls0 ws0">Otros peligros<span class="_ _55"> </span><span
                        class="fs3">Sí</span></div>
                <div class="t m0 x69 h5 y252 ff2 fs3 fc0 sc0 ls0 ws0">2.3<span class="_ _56"> </span><span
                        class="fs0">Resultados de la valoración PBT y mPmB: </span></div>
                <div class="t m0 x6f ha y253 ff2 fs0 fc0 sc0 ls0 ws0">Según los resultados de su valoración, este</div>
                <div class="t m0 x70 hb y254 ff2 fs7 fc0 sc0 ls0 ws0">sustancia no es un PBT o un mPmB.</div>
                <div class="t m0 x6c h5 y252 ff2 fs3 fc0 sc0 ls0 ws0">Sí</div>
                <div class="t m0 x4 hd y255 ff1 fs4 fc0 sc0 ls0 ws0">Abreviaciones y acronimos</div>
                <div class="t m0 x71 hf y256 ff1 fs2 fc4 sc0 ls0 ws0">Abr.<span class="_ _57"> </span><span
                        class="fs7">Descripciones de las abreviaturas utilizadas</span></div>
                <div class="t m0 x1d h5 y257 ff2 fs3 fc0 sc0 ls0 ws0">ADN<span class="_ _58"> </span><span
                        class="fs7">Accord européen relatif au transport international des marchandises dangereuses par
                        voies de navigation intérieures </span></div>
                <div class="t m0 x72 hb y258 ff2 fs7 fc0 sc0 ls0 ws0">(Acuerdo Europeo relativo al Transporte
                    Internacional de Mercancías Peligrosas por Transporte Internacional).</div>
                <div class="t m0 x5 h20 y259 ff2 fsa fc0 sc0 ls0 ws0">vías fluviales terrestres)</div>
                <div class="t m0 x60 h5 y25a ff2 fs3 fc0 sc0 ls0 ws0">ADR<span class="_ _59"> </span><span
                        class="fs0">Accord relatif au transport international des marchandises dangereuses par route
                        (Acuerdo relativo a</span></div>
                <div class="t m0 x73 h3 y25b ff2 fs1 fc0 sc0 ls0 ws0">el Transporte Internacional de Mercancías
                    Peligrosas por Carretera)</div>
                <div class="t m0 x58 ha y25c ff2 fs0 fc0 sc0 ls0 ws0">carc.<span class="_ _5a"> </span><span
                        class="fs1">Carcinogenicidad</span></div>
                <div class="t m0 x60 h5 y25d ff2 fs3 fc0 sc0 ls0 ws0">CAS<span class="_ _5b"> </span><span
                        class="fs0">Servicio de Resúmenes Químicos (servicio que mantiene la lista más completa de
                        sustancias químicas)</span></div>
                <div class="t m0 x66 ha y25e ff2 fs0 fc0 sc0 ls0 ws0">Techo-C<span class="_ _5c"> </span>valor techo
                </div>
                <div class="t m0 x74 h5 y25f ff2 fs3 fc0 sc0 ls0 ws0">CLP<span class="_ _f"> </span><span
                        class="fs0">Reglamento (CE) nº 1272/2008 sobre clasificación, etiquetado y envasado de
                        sustancias y mezclas</span></div>
                <div class="t m0 x1d h5 y260 ff2 fs3 fc0 sc0 ls0 ws0">DGR<span class="_ _5d"> </span><span
                        class="fs1">Regulaciones de Mercancías Peligrosas (ver IATA/DGR)</span></div>
                <div class="t m0 x75 ha y261 ff2 fs0 fc0 sc0 ls0 ws0">N.º CE<span class="_ _5e"> </span>El Inventario EC
                    (EINECS, ELINCS y la lista NLP) es la fuente del número EC de siete dígitos, un identificador</div>
                <div class="t m0 x76 hb y262 ff2 fs7 fc0 sc0 ls0 ws0">fier de sustancias disponibles comercialmente
                    dentro de la UE (Unión Europea)</div>
                <div class="t m0 x77 ha y263 ff2 fs0 fc0 sc0 ls0 ws0">EH40/2005<span class="_ _5f"> </span><span
                        class="fs1">EH40/2005 Límites de exposición en el lugar de trabajo
                        (http://www.nationalarchives.gov.uk/doc/open-government-li-</span></div>
                <div class="t m0 x31 hb y264 ff2 fs7 fc0 sc0 ls0 ws0">cencia/)</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 15 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf10" class="pf w0 h0" data-page-no="10">
            <div class="pc pc10 w0 h0"><img class="bi x0 y0 w1 h1" alt=""
                    src="hs/bg10.png" />
                <div class="t m0 x0 h2 y9f ff1 fs0 fc0 sc0 ls0 ws0">Ficha de datos de seguridad</div>
                <div class="t m0 x0 h3 ya0 ff2 fs1 fc0 sc0 ls0 ws0">de acuerdo con el Reglamento (CE) No. 1907/2006
                    (REACH)</div>
                <div class="t m0 x0 hf ya1 ff1 fs2 fc0 sc0 ls0 ws0">Rojo congo (CI 22120) para microscopía</div>
                <div class="t m0 x0 h5 ya2 ff2 fs3 fc0 sc0 ls0 ws0">número de artículo:<span class="ff1">0322</span>
                </div>
                <div class="t m0 x71 hf y237 ff1 fs2 fc4 sc0 ls0 ws0">Abr.<span class="_ _57"> </span><span
                        class="fs7">Descripciones de las abreviaturas utilizadas</span></div>
                <div class="t m0 x78 ha y238 ff2 fs0 fc0 sc0 ls0 ws0">EINECS<span class="_ _7"> </span>Inventario
                    Europeo de Sustancias Químicas Comerciales Existentes</div>
                <div class="t m0 x78 ha y239 ff2 fs0 fc0 sc0 ls0 ws0">ELINCS<span class="_ _60"> </span><span
                        class="fs7">Lista Europea de Sustancias Químicas Notificadas</span></div>
                <div class="t m0 x1d h5 y265 ff2 fs3 fc0 sc0 ls0 ws0">SGA<span class="_ _5b"> </span><span
                        class="fs9">&quot;Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos
                        Químicos&quot; desarrollado por las Naciones Unidas.</span></div>
                <div class="t m0 x79 h14 y266 ff2 fs9 fc0 sc0 ls0 ws0">ciones</div>
                <div class="t m0 x1d h5 y267 ff2 fs3 fc0 sc0 ls0 ws0">IATA<span class="_ _61"> </span><span
                        class="fs1">Asociación Internacional de Transporte Aéreo</span></div>
                <div class="t m0 x7a ha y268 ff2 fs0 fc0 sc0 ls0 ws0">IATA/DGR<span class="_ _62"> </span><span
                        class="fs1">Reglamento de Mercancías Peligrosas (DGR) para el transporte aéreo (IATA)</span>
                </div>
                <div class="t m0 x58 h5 y269 ff2 fs3 fc0 sc0 ls0 ws0">OACI<span class="_ _57"> </span><span
                        class="fs7">Organización de Aviación Civil Internacional</span></div>
                <div class="t m0 x75 h5 y26a ff2 fs3 fc0 sc0 ls0 ws0">IMDG<span class="_ _60"> </span><span
                        class="fs1">Código Marítimo Internacional de Mercancías Peligrosas</span></div>
                <div class="t m0 x66 hb y26b ff2 fs11 fc0 sc0 ls0 ws0">número de índice<span class="_ _5f"> </span><span
                        class="fs7">El número de índice es el código de identificación dado a la sustancia en la parte 3
                        del anexo VI del Reglamento.</span></div>
                <div class="t m0 x7b ha y26c ff2 fs0 fc0 sc0 ls0 ws0">(CE) nº 1272/2008</div>
                <div class="t m0 x7c h5 y26d ff2 fs3 fc0 sc0 ls0 ws0">LC50<span class="_ _5f"> </span><span
                        class="fs7">Concentración Letal 50%: la CL50 corresponde a la concentración de una sustancia
                        ensayada que causa el 50 %</span></div>
                <div class="t m0 x7d h20 y26e ff2 fsa fc0 sc0 ls0 ws0">letalidad durante un intervalo de tiempo
                    especificado</div>
                <div class="t m0 x58 h5 y26f ff2 fs3 fc0 sc0 ls0 ws0">LD50<span class="_ _5f"> </span><span
                        class="fs7">Dosis Letal 50 %: la LD50 corresponde a la dosis de una sustancia probada que causa
                        un 50 % de letalidad durante un</span></div>
                <div class="t m0 x7e h19 y270 ff2 fsd fc0 sc0 ls0 ws0">intervalo de tiempo especificado</div>
                <div class="t m0 x60 h5 y271 ff2 fs3 fc0 sc0 ls0 ws0">PNL<span class="_ _63"> </span><span
                        class="fs0">Ya no es polímero</span></div>
                <div class="t m0 x60 h5 y272 ff2 fs3 fc0 sc0 ls0 ws0">PBT<span class="_ _64"> </span><span
                        class="fs0">Persistente, Bioacumulativo y Tóxico</span></div>
                <div class="t m0 x7f hb y273 ff2 fsd fc0 sc0 ls0 ws0">ALCANZAR<span class="_ _43"> </span><span
                        class="fs7">Registro, Evaluación, Autorización y Restricción de Sustancias Químicas</span></div>
                <div class="t m0 x74 ha y274 ff2 fs12 fc0 sc0 ls0 ws0">DESHACERSE<span class="_ _5b"> </span><span
                        class="fs0">Règlement concernant le transport International ferroviaire des marchandises
                        Dangereuses (Regula-</span></div>
                <div class="t m0 x80 h3 y275 ff2 fs1 fc0 sc0 ls0 ws0">ciones relativas al Transporte Internacional de
                    Mercancías Peligrosas por Ferrocarril)</div>
                <div class="t m0 x7c h5 y276 ff2 fs3 fc0 sc0 ls0 ws0">STEL<span class="_ _65"> </span><span
                        class="fs9">Límite de exposición a corto plazo</span></div>
                <div class="t m0 x58 h5 y277 ff2 fs3 fc0 sc0 ls0 ws0">SVHC<span class="_ _1f"> </span><span
                        class="fs9">Sustancia extremadamente preocupante</span></div>
                <div class="t m0 x1d h5 y278 ff2 fs3 fc0 sc0 ls0 ws0">TWA<span class="_ _66"> </span><span
                        class="fsd">Promedio ponderado en el tiempo</span></div>
                <div class="t m0 x1d h5 y279 ff2 fs3 fc0 sc0 ls0 ws0">COV<span class="_ _67"> </span><span
                        class="fs7">Compuestos orgánicos volátiles</span></div>
                <div class="t m0 x7c h5 y27a ff2 fs3 fc0 sc0 ls0 ws0">mPmB<span class="_ _68"> </span><span
                        class="fs0">Muy Persistente y muy Bioacumulativo</span></div>
                <div class="t m0 x1d h5 y27b ff2 fs3 fc0 sc0 ls0 ws0">BIEN<span class="_ _4a"> </span><span
                        class="fsb">Límite de exposición en el lugar de trabajo</span></div>
                <div class="t m0 x4 h12 y27c ff1 fs5 fc0 sc0 ls0 ws0">Referencias bibliográficas clave y fuentes de
                    datos</div>
                <div class="t m0 x4 h6 y27d ff2 fs4 fc0 sc0 ls0 ws0">Reglamento (CE) nº 1272/2008 sobre clasificación,
                    etiquetado y envasado de sustancias y mezclas. </div>
                <div class="t m0 x4 h6 y27e ff2 fs4 fc0 sc0 ls0 ws0">Reglamento (CE) nº 1907/2006 (REACH), modificado
                    por 2020/878/UE.</div>
                <div class="t m0 x4 h7 y27f ff2 fs5 fc0 sc0 ls0 ws0">Acuerdo relativo al Transporte Internacional de
                    Mercancías Peligrosas por Carretera (ADR). Reglamento relativo al </div>
                <div class="t m0 x4 h7 y280 ff2 fs5 fc0 sc0 ls0 ws0">Transporte Internacional de Mercancías Peligrosas
                    por Ferrocarril (RID). Código Marítimo Internacional de Mercancías </div>
                <div class="t m0 x4 h7 y281 ff2 fs5 fc0 sc0 ls0 ws0">Peligrosas (IMDG). Reglamento de Mercancías
                    Peligrosas (DGR) para el transporte aéreo (IATA).</div>
                <div class="t m0 x4 h2 y282 ff1 fs0 fc0 sc0 ls0 ws0">Lista de frases relevantes (código y texto completo
                    como se indica en las secciones 2 y 3)</div>
                <div class="t m0 x81 h1f y283 ff1 fs9 fc4 sc0 ls0 ws0">Código<span class="_ _69"> </span><span
                        class="fs1">Texto</span></div>
                <div class="t m0 x82 h5 y284 ff2 fs3 fc0 sc0 ls0 ws0">H350<span class="_ _63"> </span><span
                        class="fs1">Puede causar cáncer.</span></div>
                <div class="t m0 x66 ha y285 ff2 fs0 fc0 sc0 ls0 ws0">H361d<span class="_ _6a"> </span>Sospechoso de
                    dañar al feto.</div>
                <div class="t m0 x4 h26 y286 ff1 fs11 fc0 sc0 ls0 ws0">Descargo de responsabilidad</div>
                <div class="t m0 x4 h8 y287 ff2 fs2 fc0 sc0 ls0 ws0">Esta información se basa en el estado actual de
                    nuestro conocimiento. Esta SDS ha sido compilada y está </div>
                <div class="t m0 x4 h8 y288 ff2 fs2 fc0 sc0 ls0 ws0">destinada únicamente a este producto.</div>
                <div class="t m0 x0 h6 yc9 ff2 fs4 fc0 sc0 ls0 ws0">Reino Unido (es)</div>
                <div class="t m0 x41 h5 yca ff2 fs3 fc0 sc0 ls0 ws0">Página 16 / 16</div>
            </div>
            <div class="pi" data-data='{"ctm":[2.000000,0.000000,0.000000,2.000000,0.000000,0.000000]}'></div>
        </div>
    </div>
    <p style="bottom: 10px; right: 10px; position: absolute;"><a href="https://wordtohtml.net" target="_blank"
            style="font-size:11px; color: #d0d0d0">Converted to HTML with WordToHTML.net</a></p>
</body>

</html>