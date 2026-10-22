/* Divyaum preview — shared data, header/footer and interactions */
(function () {
  var S3 = "https://divyaum-platform-assets.s3.ap-south-1.amazonaws.com/";
  function img(path, w) {
    return "https://www.divyaum.com/_next/image?url=" + encodeURIComponent(S3 + path) + "&w=" + (w || 640) + "&q=80";
  }
  window.DV = { img: img };

  /* ---------- catalogue (prices from divyaum.com, Oct 2026) ---------- */
  var P = function (id, name, kind, sub, price, mrp, cat, file, extra) {
    var o = { id: id, name: name, kind: kind, sub: sub, price: price, mrp: mrp, cat: cat, file: "products/" + file };
    for (var k in (extra || {})) o[k] = extra[k];
    return o;
  };
  DV.products = [
    P("sampoorna", "DivyAum Sampoorna Collection", "box", "3-fragrance sticks, cones, small sticks, havan cups & 7-day fragrance", 1875, 3300, "combo", "1788009104742-d97ece98d451f961.png", { tag: "Bestseller", best: 1 }),
    P("moneysaver", "Money Saver Combo Deal", "box", "8\" sticks (30) · cones (40) · 4\" sticks (40) · havan cups (15)", 1200, 1700, "combo", "1788150895271-0cf3735dd6e46573.png", { best: 2 }),
    P("fragrance7", "Spiritual Pooja Fragrance", "bottle", "7 fragrances for 7 days & 7 gods", 795, 1499, "fragrance", "1783865702320-53ae7591782e0182.png", { tag: "New", best: 3 }),
    P("trio", "3-Fragrance Dhoop Pack", "stick", "Chandan, Tejas & Ananta · 30 sticks, 8 inch", 475, 599, "sticks", "1786509892104-171ccf21f9bfe289.png", { best: 4 }),
    P("havan-loban", "Havan Cups — Loban", "cup", "Ready-to-light · box of 15", 305, 399, "havan", "1786362082590-0586c04864962600.png", { best: 5 }),
    P("cones-chandan", "Chandan Dhoop Cones", "cone", "40 cones · bamboo-free", 225, 349, "cones", "1787481647713-1b933bb3482c75c2.png", { best: 6 }),
    P("cones-guggul", "Guggul Dhoop Cones", "cone", "40 cones · bamboo-free", 225, 349, "cones", "1787482986941-75ca3fab2e8c339b.png", { best: 7 }),
    P("cones-mogra", "Mogra Dhoop Cones", "cone", "40 cones · bamboo-free", 225, 349, "cones", "1787481940049-65063fe3009547c4.png", { best: 8 }),
    P("sticks-chandan", "Chandan Dhoop Sticks", "stick", "30 sticks · 8 inch · bamboo-less", 475, 599, "sticks", "1786448980600-011bada800dbc92e.png"),
    P("sticks-ananta", "Ananta Dhoop Sticks", "stick", "30 sticks · 8 inch · bamboo-less", 475, 599, "sticks", "1787492476798-a9a9915f4bbc8734.png"),
    P("sticks-tejas", "Tejas Dhoop Sticks", "stick", "30 sticks · 8 inch · bamboo-less", 475, 599, "sticks", "1787492155097-83fb9a8aa490ab5e.png"),
    P("sticks-kasturi", "Kasturi Dhoop Sticks", "stick", "40 sticks · 4 inch · bamboo-less", 245, 349, "sticks", "1787485947822-496d7c77a328aad4.png"),
    P("sticks-namaskar", "Namaskar Dhoop Sticks", "stick", "40 sticks · 4 inch · bamboo-less", 245, 349, "sticks", "1787487266725-aabf9b58201a3bcf.png"),
    P("sticks-prana", "Prana Dhoop Sticks", "stick", "40 sticks · 4 inch · bamboo-less", 245, 349, "sticks", "1787488698570-d973c0e49bca82c4.png"),
    /* DivyAum Luxe */
    P("shiva-xl", "Shiva", "painting", "Acrylic on canvas · 29 × 38 in", 34999, 55000, "luxe", "1786192602483-4a561912f6bf238b.jpg", { sub2: "painting", lux: 1 }),
    P("buddha-xl", "Buddha", "painting", "Acrylic on canvas · 24 × 24 in", 21999, 28999, "luxe", "1786190558667-0a834562ffb44acb.png", { sub2: "painting", lux: 2 }),
    P("radhakrishna", "Radha Krishna", "painting", "Acrylic on canvas · 20 × 20 in", 14999, 22000, "luxe", "1783683995569-24140e1633b10ce3.png", { sub2: "painting", lux: 3, pos: "78% 50%" }),
    P("surya-chandra", "Surya-Chandra", "zardozi", "Hand-embroidered zardozi · 13 × 7 in", 6600, 8000, "luxe", "1786090644626-2dcab64ed30a9347.png", { sub2: "zardozi", lux: 4 }),
    P("tridevi", "Tridevi", "zardozi", "Hand-embroidered zardozi · 8 × 11 in", 7800, 9500, "luxe", "1786089718194-fec138698e1c8e26.png", { sub2: "zardozi", lux: 5 }),
    P("hanuman", "Hanuman", "painting", "Acrylic on canvas · 10 × 10 in", 4800, 6000, "luxe", "1786192407637-22e4b2a87b876fa7.png", { sub2: "painting", lux: 6 }),
    P("krishna-12", "Krishna", "painting", "Acrylic on canvas board · 12 × 12 in", 5500, 7500, "luxe", "1786189373097-77529d1c2fd660c3.png", { sub2: "painting" }),
    P("ganesha-10", "Ganesha", "painting", "Acrylic on canvas · 10 × 10 in", 4800, 6500, "luxe", "1786191794212-4a56fc311f313ca8.png", { sub2: "painting" }),
    P("buddha-12", "Buddha", "painting", "Acrylic on canvas board · 12 × 12 in", 4700, 6000, "luxe", "1782379770732-b4fcd0b025abac57.jpg", { sub2: "painting" }),
    P("shiva-8", "Shiva", "painting", "Acrylic on canvas · 8 × 8 in", 4500, 6000, "luxe", "1786192045820-99ff64b9b6d7fe0f.png", { sub2: "painting" }),
    P("ardhanarishvara", "Ardhanarishvara", "zardozi", "Hand-embroidered zardozi · 8 × 11 in", 7700, 9500, "luxe", "1783752805551-69f18fd8700cef3c.png", { sub2: "zardozi" }),
    P("tridevi-red", "Tridevi on Red Cotton", "zardozi", "Hand-embroidered zardozi · 8 × 11 in", 7800, 9500, "luxe", "1786091601666-1a9aa6269047b644.png", { sub2: "zardozi" }),
    P("samriddhi", "Samriddhi", "zardozi", "Hand-embroidered zardozi · 8 × 11 in", 7400, 10000, "luxe", "1786091335551-223b8613d42f2911.png", { sub2: "zardozi" }),
    P("krishna-z", "Krishna", "zardozi", "Hand-embroidered zardozi · 11 × 8 in", 6200, 8000, "luxe", "1785994151369-9ee903fc133032b0.png", { sub2: "zardozi" }),
    P("suryadev", "Suryadev", "zardozi", "Hand-embroidered zardozi · 6 × 6 in", 3300, 4500, "luxe", "1783751336485-1676ae44fe07d33a.png", { sub2: "zardozi" }),
    P("ganesha-z", "Ganesha", "zardozi", "Hand-embroidered zardozi · 6 × 8 in", 2800, 4000, "luxe", "1783755459078-d1a13254cb29ae93.png", { sub2: "zardozi" }),
    P("om-z", "Divine Om", "zardozi", "Hand-embroidered zardozi · 6 × 6 in", 2700, 4000, "luxe", "1783749172419-2bfb7c06658cef17.png", { sub2: "zardozi" }),
    P("plates", "Decorative Wall Plates, Set of 3", "plate", "8 in diameter · blue & white", 7500, 10000, "luxe", "1786193290955-85b1c0b2de84ff91.png", { sub2: "decor" })
  ];

  DV.poojas = [
    { name: "Bhat Puja at Mangalnath Temple", place: "Mangalnath Temple", tag: "Mangal Dosha", cat: "dosha", ben: "Vedic ritual on the Swayambhu Shivalinga to pacify Mangal Dosha (Mars defects).", file: "pooja/1786453745508-4df891671ca36351.png" },
    { name: "Mahamrityunjay 21,000 Jaap", place: "Performed by 5 Brahmans", tag: "Health", cat: "health", ben: "For recovery from illness, long life and freedom from fear. Often done on birthdays.", file: "pooja/1786606438734-545fa9da878d5567.png" },
    { name: "Gadkalika Pooja", place: "Gadkalika Mandir", tag: "Career & Studies", cat: "wealth", ben: "At the Shakti Peeth linked to Kalidasa — for success in studies, career and finances.", file: "pooja/1786606522162-2f912130f5d83214.png" },
    { name: "Rin Mukteshwar Pooja", place: "Temple pooja", tag: "Debt Relief", cat: "wealth", ben: "The “yellow puja” of Brihaspati, performed to ease the burden of debt.", file: "pooja/1786606591613-f349a0cc8554b83e.png" },
    { name: "Kaal Bhairav Pooja", place: "Kaal Bhairav Temple", tag: "Family Peace", cat: "family", ben: "For family peace, gratitude and auspicious new beginnings.", file: "pooja/1786606683093-9e09c2deae86af55.png" },
    { name: "Maa Baglamukhi Pooja", place: "Shakti pooja", tag: "Marriage & Success", cat: "family", ben: "For marriage success, leadership and protection from obstacles.", file: "pooja/1786606776020-999990089e9ca2cd.png" },
    { name: "Har Siddhi Pooja", place: "Har Siddhi Shakti Peeth", tag: "Wishes", cat: "health", ben: "A powerful Shakti Peeth puja for health, prosperity and fulfilment of wishes.", file: "pooja/1786606864037-71924c830fe6b91e.png" },
    { name: "Siddhnath Pooja", place: "Rare temple pooja", tag: "Kaal Sarp Dosh", cat: "dosha", ben: "A rare puja for the removal of Kaal Sarp Dosh and Pitr Dosh.", file: "pooja/1786606946165-bd24ea7c1280b5f0.png" },
    { name: "Mahamrityunjay 41,000 Jaap", place: "Performed by 11 Brahmans", tag: "Health", cat: "health", ben: "The extended jaap by 11 Brahmans for serious illness and protection.", file: "pooja/1786608877976-f29aeb67dc0414f7.png" }
  ];

  /* ---------- small helpers ---------- */
  var ICONS = {
    stick: '<path d="M8 21L16 3"/><path d="M15.5 2.5c1 1 1 2 0 3"/>',
    cone: '<path d="M12 4l6 15H6z"/><path d="M12 1.5c1 .8 1 1.7 0 2.5"/>',
    cup: '<path d="M5 9h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7z"/><path d="M12 3c1.2 1.2 1.2 2.5 0 3.5"/>',
    bottle: '<rect x="8" y="8" width="8" height="13" rx="2"/><path d="M10 8V5h4v3M10 3h4"/>',
    box: '<path d="M3 8l9-4 9 4-9 4z"/><path d="M3 8v8l9 4 9-4V8"/><path d="M12 12v8"/>',
    painting: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 16l5-5 4 4 3-3 6 6"/><circle cx="16" cy="9" r="1.5"/>',
    zardozi: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7"/>',
    plate: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>'
  };
  var KIND = { stick: "Dhoop Sticks", cone: "Dhoop Cones", cup: "Havan Cups", bottle: "Pooja Fragrance", box: "Combo Set", painting: "Painting", zardozi: "Zardozi Art", plate: "Wall Décor" };
  DV.icon = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || "") + "</svg>"; };
  DV.inr = function (n) { return "₹" + n.toLocaleString("en-IN"); };
  DV.off = function (p) { return Math.round((1 - p.price / p.mrp) * 100) + "% off"; };

  DV.card = function (p) {
    var t = p.tag ? '<span class="tag' + (p.tag === "Bestseller" ? " tag-flame" : "") + '">' + p.tag + "</span>" : "";
    return '<div class="card" data-cat="' + p.cat + '" data-sub="' + (p.sub2 || "") + '" data-price="' + p.price + '">' +
      '<div class="card-media"><img loading="lazy" src="' + img(p.file, 640) + '" alt="' + p.name.replace(/"/g, "") + '"' + (p.pos ? ' style="object-position:' + p.pos + '"' : "") + ">" + t +
      '<div class="quick-add"><button type="button" class="btn ' + (p.cat === "luxe" ? "btn-gold" : "btn-dark") + ' add">Add to cart</button></div></div>' +
      '<div class="card-body"><span class="kind">' + DV.icon(p.kind) + KIND[p.kind] + "</span>" +
      '<div class="card-title">' + p.name + "</div>" +
      '<div class="card-sub">' + p.sub + "</div>" +
      '<div class="prices"><span class="price">' + DV.inr(p.price) + '</span><span class="mrp">' + DV.inr(p.mrp) + '</span><span class="off">' + DV.off(p) + "</span></div>" +
      '<button type="button" class="btn btn-outline btn-sm add mobile-add" style="margin-top:8px;display:none">Add to cart</button></div></div>';
  };

  DV.poojaCard = function (p) {
    return '<a class="pj" href="pooja.html" data-cat="' + p.cat + '">' +
      '<div class="pj-media"><img loading="lazy" src="' + img(p.file, 828) + '" alt="' + p.name + '"><span class="tag">' + p.tag + "</span></div>" +
      '<div class="pj-body"><div class="pj-meta"><span>' + p.place + "</span><span>60 min</span></div>" +
      '<div class="pj-name">' + p.name + '</div><div class="pj-ben">' + p.ben + "</div>" +
      '<div class="pj-foot"><div><div class="price">₹2,100</div><div class="from">per person</div></div><span class="btn btn-primary btn-sm">Book now</span></div></div></a>';
  };

  /* ---------- header & footer ---------- */
  var page = document.body.getAttribute("data-page") || "home";
  var navItems = [["store.html", "Divya Store", "store"], ["pooja.html", "Online Pooja", "pooja"], ["astrology.html", "Astrology", "astrology"], ["luxe.html", "DivyAum Luxe", "luxe"], ["index.html#gyan", "Sanatan Gyan", "gyan"]];
  var hdr = document.getElementById("site-header");
  if (hdr) {
    hdr.outerHTML =
      '<div class="announce"><div class="wrap"><span class="hide-sm">Natural, bamboo-free dhoop · Poojas at sacred temples · Prasad delivered worldwide</span><span>Help: <a href="tel:+919755590829">+91 97555 90829</a> · 11am–6pm</span></div></div>' +
      '<header class="site"><div class="wrap"><a class="logo" href="index.html" aria-label="Divyaum home"><img src="assets/logo.png" alt="Divyaum"></a>' +
      '<nav class="main" id="mainNav" aria-label="Main">' + navItems.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === page ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a>"; }).join("") + "</nav>" +
      '<div class="hdr-actions"><button class="icon-btn" type="button" aria-label="Search"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button>' +
      '<button class="icon-btn" type="button" aria-label="Cart"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="cart-count" id="cartCount">0</span></button>' +
      '<a href="#" class="btn btn-dark btn-sm">Login</a>' +
      '<button class="icon-btn menu-btn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mainNav" id="menuBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div></header>';
  }
  var ftr = document.getElementById("site-footer");
  if (ftr) {
    ftr.outerHTML =
      '<footer class="site"><div class="wrap"><div class="f-cols">' +
      '<div class="f-brand"><img src="assets/logo.png" alt="Divyaum"><div class="f-motto">Shraddha · Samarpan · Shakti</div><p>Authentic online pooja, trusted astrology guidance, and sacred essentials delivered with devotion.</p></div>' +
      '<div class="f-col"><b>Shop & Services</b><a href="store.html">Divya Store</a><a href="luxe.html">DivyAum Luxe</a><a href="pooja.html">Online Pooja</a><a href="astrology.html">Vedic Astrology</a></div>' +
      '<div class="f-col"><b>Support</b><a href="https://www.divyaum.com/faq">FAQ</a><a href="https://www.divyaum.com/shipping-return-policy">Shipping & Returns</a><a href="https://www.divyaum.com/privacy-policy">Privacy Policy</a><a href="https://www.divyaum.com/terms-conditions">Terms & Conditions</a></div>' +
      '<div class="f-col"><b>Contact</b><span>+91 97555 90829</span><span>11am – 6pm, all days</span><span>hello@divyaum.com</span><span style="display:flex;gap:16px;margin-top:6px"><a href="https://www.instagram.com/_divyaum">Instagram</a><a href="https://www.youtube.com/@Divyaum-1">YouTube</a><a href="https://www.linkedin.com/company/house-of-param-dharam/">LinkedIn</a></span></div>' +
      '</div><div class="f-bottom"><span>© 2026 Divyaum. All rights reserved.</span><span>Design preview — not the live store</span></div></div></footer>' +
      '<a href="https://wa.me/919755590829" class="wa-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg></a>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }

  /* ---------- interactions ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var mb = document.getElementById("menuBtn"), nav = document.getElementById("mainNav");
    if (mb) mb.addEventListener("click", function () { var o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });

    var count = 0, cc = document.getElementById("cartCount"), toast = document.getElementById("toast"), tt;
    function say(m) { toast.textContent = m; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 1800); }
    document.addEventListener("click", function (e) {
      var a = e.target.closest(".add"); if (!a) return;
      e.preventDefault();
      count++; cc.textContent = count; cc.style.display = "flex";
      var t = a.textContent; a.textContent = "Added ✓"; a.classList.add("added");
      setTimeout(function () { a.textContent = t; a.classList.remove("added"); }, 1400);
      say("Added to cart");
    });

    /* filter chips: <div class="chips" data-target="id" data-limit="n" data-key="cat|sub"> */
    document.querySelectorAll(".chips[data-target]").forEach(function (group) {
      var grid = document.getElementById(group.dataset.target);
      var limit = parseInt(group.dataset.limit || "999", 10);
      var key = group.dataset.key || "cat";
      function apply(f) {
        var shown = 0;
        Array.prototype.forEach.call(grid.children, function (c) {
          var ok = (f === "all" || c.dataset[key] === f) && shown < limit;
          c.style.display = ok ? "" : "none"; if (ok) shown++;
        });
        var cnt = document.getElementById(group.dataset.target + "Count");
        var noun = group.dataset.noun || "product";
        if (cnt) cnt.textContent = shown + " " + noun + (shown === 1 ? "" : "s");
      }
      group.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        group.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); });
        apply(b.dataset.f);
      });
      var start = group.querySelector(".chip.on");
      apply(start ? start.dataset.f : "all");
      group._apply = apply;
    });

    /* hero slider — each progress bar drives the next slide */
    var slider = document.querySelector(".slider");
    if (slider) {
      var slides = slider.querySelectorAll(".slide"), bars = slider.querySelectorAll(".bar"), cur = slider.querySelector(".counter b"), i = 0;
      function go(n) {
        slides[i].classList.remove("on"); slides[i].setAttribute("aria-hidden", "true");
        i = (n + slides.length) % slides.length;
        slides[i].classList.add("on"); slides[i].setAttribute("aria-hidden", "false");
        bars.forEach(function (b, k) { b.classList.remove("on"); b.classList.toggle("done", k < i); });
        void bars[i].offsetWidth; bars[i].classList.add("on");
        if (cur) cur.textContent = ("0" + (i + 1)).slice(-2);
      }
      bars.forEach(function (b, k) {
        b.addEventListener("click", function () { go(k); });
        b.querySelector("i").addEventListener("animationend", function () { if (k === i) go(i + 1); });
      });
      slider.querySelector(".prev").addEventListener("click", function () { go(i - 1); });
      slider.querySelector(".next").addEventListener("click", function () { go(i + 1); });
      go(0);
    }

    /* testimonial carousel arrows */
    var track = document.querySelector(".rv-track");
    if (track) document.querySelectorAll("[data-rv]").forEach(function (b) {
      b.addEventListener("click", function () { track.scrollBy({ left: (b.dataset.rv === "next" ? 1 : -1) * (track.firstElementChild.offsetWidth + 24), behavior: "smooth" }); });
    });

    /* astrology topic buttons */
    document.querySelectorAll(".topics").forEach(function (g) {
      g.addEventListener("click", function (e) {
        var b = e.target.closest(".topic"); if (!b) return;
        g.querySelectorAll(".topic").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      });
    });
    var form = document.getElementById("astroForm");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); document.getElementById("formOk").style.display = "block"; });
  });
})();
