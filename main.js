(() => {
  'use strict';

  const WHATSAPP_NUMBER = '601154402412';
  const CONTACT_EMAIL = 'meerulhazeeq@gmail.com';
  const STORAGE_LANG = 'mukadepan_lang';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- i18n dictionary (EN / BM) ---------- */
  const I18N = {
    en: {
      skip: 'Skip to content',
      nav_pricing: 'Pricing',
      nav_compare: 'Compare',
      nav_work: 'Work',
      nav_faq: 'FAQ',
      nav_cta: 'Free Preview',
      menu_label: 'Menu',

      hero_eyebrow: 'MukaDepan Studio · Malaysia',
      hero_title: 'See your live website<br><em>before you pay RM1.</em>',
      hero_lead: 'Custom-coded, sub-second mobile speed, zero WordPress bloat. We build your live concept first — if you love it, it launches on your own domain in <strong>72 hours</strong>, not 6 weeks.',
      hero_cta_primary: 'Get My Free Preview <span aria-hidden="true">→</span>',
      hero_cta_secondary: 'See live builds <span aria-hidden="true">↓</span>',
      hero_trust: 'RM0 upfront preview <span aria-hidden="true">·</span> 72h launch <span aria-hidden="true">·</span> 100% code ownership',

      proof_slots: '2 of 5 weekly build slots open',
      proof_launch_label: 'Next Pro launch:',
      proof_fast_label: 'MukaDepan Edge Build',
      proof_fast_sub: '0.7s First Paint · Pure static edge code',
      proof_slow_label: 'Typical WordPress Template',
      proof_slow_sub: '4.8s Mobile Load · 53% visitors bounce',
      proof_cap_left: 'Pay RM0 until preview approved',
      proof_cap_right: 'FPX · DuitNow · Card',

      proc_eyebrow: 'Zero-risk process',
      proc_title: 'Preview first. Approve second. Launch in 72 hours.',
      proc_s1_title: 'Share business details (30 sec)',
      proc_s1_body: 'Drop your business name, WhatsApp number, and any Facebook, Instagram, or Google Maps link below. No lengthy discovery calls required.',
      proc_s2_title: 'Review your live preview (24h)',
      proc_s2_body: 'We send a real, interactive preview link straight to your phone. Test it yourself — walk away paying RM0 if it is not for you.',
      proc_s3_title: 'Approve & launch on your domain (72h)',
      proc_s3_body: 'Happy with the preview? Pay 50% via FPX, DuitNow QR, or Card to lock your build, and the remaining 50% only when your domain is live.',

      desk_eyebrow: 'One-screen order desk',
      desk_title: 'Transparent pricing. Zero quote surprises.',
      desk_sub: 'Pick your package and extras. Your exact total, launch date, and savings update live — then claim your free RM0 preview directly on WhatsApp.',

      step1_label: 'Choose your package',
      step1_note: 'Code & mobile QA included',
      tier_lite_name: 'MukaDepan Lite',
      tier_lite_tag: 'Starter',
      tier_lite_turn: '5-day launch',
      tier_lite_desc: '1-page launchpad (4 sections), WhatsApp CTA, Google Maps, SSL + 1st yr edge hosting, 1 revision.',
      tier_pro_name: 'MukaDepan Pro',
      tier_pro_badge: 'Most Popular',
      tier_pro_anchor: 'Agency quote: <s>RM 3,800</s>',
      tier_pro_desc: 'Full BM or EN conversion copy, FREE .com/.my domain (1st yr), 72h express launch, Google Reviews + prefilled WhatsApp flow, 90+ Speed Guarantee, Local SEO tune-up, 30 days free edits, 3 revisions, 100% code ownership.',
      tier_scale_name: 'MukaDepan Scale',
      tier_scale_tag: 'Multi-Page',
      tier_scale_turn: '7-day launch',
      tier_scale_desc: 'Up to 5 pages or full Bilingual BM+EN, booking/quote calculator or FPX link, Meta Pixel + GA4 tracking, custom UI sections, 90 days priority tweaks.',

      step2_label: 'Founding perk & boosters',
      step2_note: 'Toggle what fits',
      perk_name: 'Founding First-Site Bonus',
      perk_meta: 'One per business — brings Pro down to RM 1,290',
      care_name: 'MukaDepan Care Plan',
      care_meta: 'Unlimited minor text/photo/promo swaps (48h), domain + SSL renewal, uptime alerts · RM3.30/day · Cancel anytime',
      care_price: '+RM 99/mo',
      ext_bilingual_name: 'Full Bilingual Toggle (BM + EN)',
      ext_bilingual_meta: 'Instant switcher for both audiences · +1 day',
      ext_booking_name: 'Smart Booking / Quote Estimator',
      ext_booking_meta: 'Interactive slot or price pre-qualifier routed to WhatsApp',
      ext_fpx_name: 'FPX / ToyyibPay Checkout Link',
      ext_fpx_meta: 'Accept deposits & online banking directly · +1 day',

      step3_label: 'Payment style',
      step3_note: 'RM0 charged today',
      pay_split_name: 'One-Off (50/50 Split)',
      pay_waas_name: 'Zero-Upfront Plan',

      sum_eyebrow: 'Your preview order',
      sum_badge: 'RM 0 today',
      sum_launch_prefix: 'live by',
      claim_head: 'Lock your free 24h preview (optional details)',
      ph_biz: 'Business name (e.g. Klinik Pergigian Aman)',
      ph_wa: 'Your WhatsApp number (e.g. 012-345 6789)',
      ph_link: 'Current website, FB, or IG link (if any)',
      sum_cta: 'Claim Free Preview on WhatsApp',
      sum_email: 'Or email order to meerulhazeeq@gmail.com',
      sum_roi: '1–2 extra customers pays back your entire website — then it sells for you 24/7.',

      guar_eyebrow: 'Built-in protection',
      guar_title: 'Four promises agencies refuse to put in writing.',
      g1_title: 'RM0 Risk Preview First',
      g1_body: 'You see a working live version tailored to your business before spending a single sen. Not impressed? Walk away cleanly.',
      g2_title: '90+ Mobile Speed or Free',
      g2_body: 'We ship lean static code on edge networks — never bloated WordPress plugins. Hits 90+ Mobile PageSpeed or we tune it free.',
      g3_title: 'No-Hostage Ownership',
      g3_body: 'Your domain sits in your name and you get 100% of the source code. Care Plan is cancel-anytime — we earn renewals, never trap you.',
      g4_title: '50/50 Milestone Split',
      g4_body: 'RM0 to see preview, 50% when you approve the build, and the final 50% only after your live domain is up. Pay via FPX, DuitNow QR, or Card.',

      cmp_eyebrow: 'Side-by-side truth',
      cmp_title: 'Why Malaysian SMEs switch from templates and agencies.',
      cmp_sub: 'Real 2025–2026 Malaysian market benchmarks compared honestly.',
      cmp_col_feat: 'What Matters',
      cmp_muka_price: 'RM 1,290 first-site · RM 1,490',
      cmp_host_head: 'Hosting Bundles',
      cmp_host_sub: 'Shinjiru / Exabytes (RM480–RM900+)',
      cmp_free_head: 'Freelancers',
      cmp_agen_head: 'KL Agencies',
      cmp_r1_f: 'See live preview first?',
      cmp_r1_m: 'Yes — RM0 upfront',
      cmp_r1_h: 'No (pay upfront)',
      cmp_r1_fr: 'No (50% deposit first)',
      cmp_r1_a: 'No (50% deposit first)',
      cmp_r2_f: 'Launch turnaround',
      cmp_r2_m: '72 Hours',
      cmp_r2_h: '1–3 weeks',
      cmp_r2_fr: '1–4 weeks (ghost risk)',
      cmp_r2_a: '4–8 weeks',
      cmp_r3_f: 'Architecture & mobile speed',
      cmp_r3_m: 'Custom edge code (90+ guaranteed)',
      cmp_r3_h: 'Heavy WordPress template',
      cmp_r3_fr: 'WordPress / Elementor',
      cmp_r3_a: 'Custom or WordPress',
      cmp_r4_f: 'Year-2/3 renewal trap?',
      cmp_r4_m: 'None (RM0 self-host or RM99/mo Care)',
      cmp_r4_h: 'Yes (RM460–RM900+/yr)',
      cmp_r4_fr: 'You handle server & hacks',
      cmp_r4_a: 'RM200–RM450/mo retainer',
      cmp_r5_f: 'BM / EN sales copywriting',
      cmp_r5_m: 'Included in Pro',
      cmp_r5_h: 'DIY / minimal',
      cmp_r5_fr: 'Extra charge',
      cmp_r5_a: 'Included (high fee)',
      cmp_r6_f: 'Full code & domain ownership',
      cmp_r6_m: '100% yours',
      cmp_r6_h: 'Tied to their hosting',
      cmp_r6_fr: 'Often messy handoff',
      cmp_r6_a: 'Yes',

      work_eyebrow: 'Selected live builds',
      work_title: 'Real deployed work — tap and inspect on your phone.',
      work_sub: 'Every build runs on lean edge infrastructure with instant load speed. Your MukaDepan preview is tailored from scratch to your brand, services, and WhatsApp flow.',
      work_cta: 'Claim your free preview <span aria-hidden="true">→</span>',
      w1_desc: 'Student timetable planner · Edge web app',
      w2_desc: 'Feline encyclopedia · Fast static build',
      w3_desc: 'Cyber challenge platform · Custom dark UI',
      w4_desc: 'Commercial property advisory · Lead capture',

      faq_eyebrow: 'Honest answers',
      faq_title: 'Everything you want to ask before clicking WhatsApp.',
      faq_contact: 'Prefer email? Write to <a href="mailto:meerulhazeeq@gmail.com">meerulhazeeq@gmail.com</a> or WhatsApp <a href="https://wa.me/601154402412" target="_blank" rel="noopener">011-5440 2412</a>.',
      q1_t: 'Is the preview genuinely free with zero deposit?',
      q1_b: 'Yes. You share your business name and link, and we send back a working live concept URL within 24 hours. If you do not want to proceed, you owe RM0 and there is zero follow-up pressure.',
      q2_t: 'How can MukaDepan Pro launch in 72 hours?',
      q2_b: 'We do not waste weeks wrestling with heavy WordPress themes or bloated page builders. We build on clean, pre-engineered edge architecture and tailor copy, visuals, and WhatsApp flows directly to your niche.',
      q3_t: 'Do I have to pay RM99/mo Care forever?',
      q3_b: 'No. Care Plan is 100% optional and cancel-anytime. Without Care, you still own your domain and full source code — you can host it free on Vercel/Cloudflare Pages or ask for ad-hoc edits anytime.',
      q4_t: 'How do payments work?',
      q4_b: 'One-off builds use a 50/50 split: RM0 for preview, 50% upon approving the build, and 50% only after your live domain is online. We accept FPX online banking, DuitNow QR, and Visa/Mastercard. Tight on cash flow? Switch to the Zero-Upfront RM199/mo plan on Lite or Pro.',
      q5_t: 'Can my website be in Bahasa Melayu, English, or both?',
      q5_b: 'Pro includes conversion copywriting in either Bahasa Melayu or English. Need an instant EN/BM switcher like this page? Tick the Bilingual add-on or pick Scale (where it is already included).',
      q6_t: 'What do I need to prepare to get started?',
      q6_b: 'Just your business name, WhatsApp number, services/pricing list, and any existing FB/IG/Google Maps link. If you do not have professional photos yet, we source clean licensed visuals for your niche.',
      q7_t: 'Will my business show up better on Google?',
      q7_b: 'Every Pro and Scale site ships with clean semantic headings, local schema/meta tags, sub-second mobile speed, Google Maps integration, and Google Business Profile link optimization — the exact technical foundation Google rewards.',

      close_eyebrow: '2 of 5 weekly slots open',
      close_title: 'See your new front page tomorrow. Launch this week.',
      close_body: 'Stop sending paying customers to slow templates or a messy social link. Claim your RM0 live preview now.',
      close_cta: 'WhatsApp for Free Preview →',
      close_desk: 'Configure on Order Desk ↑',
      close_note: 'WhatsApp 011-5440 2412 · meerulhazeeq@gmail.com',

      foot_tag: 'Custom-coded, sub-second landing pages for Malaysian SMEs. Live preview first, 72-hour launch, 100% yours to own.',
      foot_nav: 'Explore',
      foot_contact: 'Direct Desk',
      foot_hours: 'Malaysia · Replies within hours',
      foot_legal: 'Built and deployed on Vercel Edge.',
      foot_top: 'Back to top',
      mob_cta: 'Free Preview'
    },
    ms: {
      skip: 'Terus ke kandungan',
      nav_pricing: 'Harga',
      nav_compare: 'Banding',
      nav_work: 'Hasil Kerja',
      nav_faq: 'Soalan',
      nav_cta: 'Preview Percuma',
      menu_label: 'Menu',

      hero_eyebrow: 'MukaDepan Studio · Malaysia',
      hero_title: 'Tengok website siap dulu<br><em>— baru bayar RM1.</em>',
      hero_lead: 'Kod tersuai, laju di telefon bawah 1 saat, tanpa WordPress berat. Kami bina konsep live dahulu — kalau puas hati, terus lancar di domain anda dalam <strong>72 jam</strong>, bukan 6 minggu.',
      hero_cta_primary: 'Dapat Preview Percuma <span aria-hidden="true">→</span>',
      hero_cta_secondary: 'Lihat contoh siap <span aria-hidden="true">↓</span>',
      hero_trust: 'Preview RM0 dahulu <span aria-hidden="true">·</span> Siap 72 jam <span aria-hidden="true">·</span> Kod 100% milik anda',

      proof_slots: '2 daripada 5 slot minggu ini dibuka',
      proof_launch_label: 'Pelancaran Pro terdekat:',
      proof_fast_label: 'Binaan Edge MukaDepan',
      proof_fast_sub: '0.7s Buka Pertama · Kod statik ringan',
      proof_slow_label: 'Templat WordPress Biasa',
      proof_slow_sub: '4.8s Buka Telefon · 53% pelawat lari',
      proof_cap_left: 'Bayar RM0 sehingga preview diluluskan',
      proof_cap_right: 'FPX · DuitNow · Kad',

      proc_eyebrow: 'Proses tanpa risiko',
      proc_title: 'Tengok preview dulu. Lulus kemudian. Lancar dalam 72 jam.',
      proc_s1_title: 'Kongsi maklumat bisnes (30 saat)',
      proc_s1_body: 'Masukkan nama bisnes, nombor WhatsApp, dan pautan Facebook, Instagram atau Google Maps di bawah. Tiada panggilan panjang.',
      proc_s2_title: 'Semak preview live di telefon (24 jam)',
      proc_s2_body: 'Kami hantar pautan preview sebenar terus ke WhatsApp anda. Cuba sendiri — tidak minat, pulang begitu saja dengan bayaran RM0.',
      proc_s3_title: 'Lulus & lancar di domain anda (72 jam)',
      proc_s3_body: 'Puas hati? Bayar 50% melalui FPX, DuitNow QR atau Kad untuk mula siapkan, dan baki 50% hanya selepas domain anda live.',

      desk_eyebrow: 'Meja tempahan satu skrin',
      desk_title: 'Harga telus. Tiada caj tersembunyi.',
      desk_sub: 'Pilih pakej dan tambahan anda. Jumlah sebenar, tarikh lancar dan penjimatan dikira terus — terus tuntut preview percuma RM0 di WhatsApp.',

      step1_label: 'Pilih pakej anda',
      step1_note: 'Kod & semakan telefon termasuk',
      tier_lite_name: 'MukaDepan Lite',
      tier_lite_tag: 'Permulaan',
      tier_lite_turn: 'Siap 5 hari',
      tier_lite_desc: 'Landing page 1 muka (4 bahagian), butang WhatsApp, Google Maps, SSL + hosting tahun pertama, 1 pindaan.',
      tier_pro_name: 'MukaDepan Pro',
      tier_pro_badge: 'Paling Berbaloi',
      tier_pro_anchor: 'Sebut harga agensi: <s>RM 3,800</s>',
      tier_pro_desc: 'Copywriting jualan BM atau EN penuh, PERCUMA domain .com/.my (thn pertama), siap pantas 72 jam, Google Reviews + mesej WhatsApp siap isi, Jaminan Laju 90+, SEO tempatan, 30 hari edit percuma, 3 pindaan, kod 100% milik anda.',
      tier_scale_name: 'MukaDepan Scale',
      tier_scale_tag: 'Berbilang Muka',
      tier_scale_turn: 'Siap 7 hari',
      tier_scale_desc: 'Sehingga 5 halaman atau Dwi-bahasa BM+EN penuh, borang tempahan/anggaran harga atau pautan FPX, Meta Pixel + GA4, rekaan seksyen khas, 90 hari keutamaan edit.',

      step2_label: 'Kelebihan pengasas & tambahan',
      step2_note: 'Pilih ikut keperluan',
      perk_name: 'Bonus Bisnes Pertama (Founding)',
      perk_meta: 'Satu setiap perniagaan — Pro jadi RM 1,290 sahaja',
      care_name: 'Pelan Penjagaan MukaDepan Care',
      care_meta: 'Tukar teks/gambar/promo kecil tanpa had (48 jam), pembaharuan domain + SSL, pemantauan uptime · RM3.30/hari · Batal bila-bila masa',
      care_price: '+RM 99/bln',
      ext_bilingual_name: 'Penukar Dwi-Bahasa Penuh (BM + EN)',
      ext_bilingual_meta: 'Butang tukar bahasa pantas untuk semua pelanggan · +1 hari',
      ext_booking_name: 'Borang Tempahan / Anggaran Harga Pintar',
      ext_booking_meta: 'Pra-kelayakan slot atau harga terus ke WhatsApp anda',
      ext_fpx_name: 'Pautan Bayaran FPX / ToyyibPay',
      ext_fpx_meta: 'Terima deposit & perbankan dalam talian terus · +1 hari',

      step3_label: 'Cara bayaran',
      step3_note: 'RM0 dicaj hari ini',
      pay_split_name: 'Sekali Bayar (Pecahan 50/50)',
      pay_waas_name: 'Pelan Tanpa Pendahuluan',

      sum_eyebrow: 'Ringkasan preview anda',
      sum_badge: 'RM 0 hari ini',
      sum_launch_prefix: 'siap pada',
      claim_head: 'Tempah preview percuma 24 jam (pilihan)',
      ph_biz: 'Nama bisnes (cth: Klinik Pergigian Aman)',
      ph_wa: 'Nombor WhatsApp anda (cth: 012-345 6789)',
      ph_link: 'Pautan website, FB atau IG sedia ada (jika ada)',
      sum_cta: 'Tuntut Preview Percuma di WhatsApp',
      sum_email: 'Atau emel ke meerulhazeeq@gmail.com',
      sum_roi: '1–2 pelanggan baru sahaja sudah cukup membayar balik kos website anda — selebihnya untung bersih 24/7.',

      guar_eyebrow: 'Jaminan bertulis',
      guar_title: 'Empat jaminan yang agensi biasa tidak berani tulis.',
      g1_title: 'Preview RM0 Tanpa Risiko',
      g1_body: 'Lihat versi live khas untuk bisnes anda sebelum keluarkan sesen pun. Tidak berkenan? Anda boleh beredar tanpa sebarang caj.',
      g2_title: 'Jaminan Laju Telefon 90+',
      g2_body: 'Kami guna kod statik ringan di rangkaian edge — bukan plugin WordPress yang berat. Skor PageSpeed Telefon 90+ atau kami baiki percuma.',
      g3_title: 'Milik Penuh Tanpa Kontrak Perangkap',
      g3_body: 'Domain didaftar atas nama anda dan kod sumber penuh diserahkan. Pelan Care boleh dibatalkan bila-bila masa.',
      g4_title: 'Pecahan Bayaran 50/50',
      g4_body: 'RM0 untuk preview, 50% selepas anda luluskan rekaan, dan baki 50% hanya bila domain anda live. Terima FPX, DuitNow QR & Kad.',

      cmp_eyebrow: 'Perbandingan telus',
      cmp_title: 'Kenapa PKS Malaysia beralih daripada templat dan agensi mahal.',
      cmp_sub: 'Perbandingan harga sebenar pasaran Malaysia 2025–2026.',
      cmp_col_feat: 'Perkara Penting',
      cmp_muka_price: 'RM 1,290 kali pertama · RM 1,490',
      cmp_host_head: 'Pakej Hosting',
      cmp_host_sub: 'Shinjiru / Exabytes (RM480–RM900+)',
      cmp_free_head: 'Freelancer',
      cmp_agen_head: 'Agensi KL',
      cmp_r1_f: 'Boleh tengok preview live dulu?',
      cmp_r1_m: 'Ya — RM0 pendahuluan',
      cmp_r1_h: 'Tidak (bayar dulu)',
      cmp_r1_fr: 'Tidak (deposit 50% dulu)',
      cmp_r1_a: 'Tidak (deposit 50% dulu)',
      cmp_r2_f: 'Tempoh siap',
      cmp_r2_m: '72 Jam',
      cmp_r2_h: '1–3 minggu',
      cmp_r2_fr: '1–4 minggu (risiko senyap)',
      cmp_r2_a: '4–8 minggu',
      cmp_r3_f: 'Seni bina & kelajuan telefon',
      cmp_r3_m: 'Kod edge khas (dijamin 90+)',
      cmp_r3_h: 'Templat WordPress berat',
      cmp_r3_fr: 'WordPress / Elementor',
      cmp_r3_a: 'Khas atau WordPress',
      cmp_r4_f: 'Perangkap caj tahun ke-2/3?',
      cmp_r4_m: 'Tiada (RM0 hos sendiri atau RM99/bln Care)',
      cmp_r4_h: 'Ya (RM460–RM900+/thn)',
      cmp_r4_fr: 'Anda urus server & masalah sendiri',
      cmp_r4_a: 'Retainer RM200–RM450/bln',
      cmp_r5_f: 'Penulisan ayat jualan BM / EN',
      cmp_r5_m: 'Termasuk dalam Pro',
      cmp_r5_h: 'Tulis sendiri / asas',
      cmp_r5_fr: 'Caj tambahan',
      cmp_r5_a: 'Termasuk (yuran tinggi)',
      cmp_r6_f: 'Pemilikan penuh kod & domain',
      cmp_r6_m: '100% milik anda',
      cmp_r6_h: 'Terkunci pada hosting mereka',
      cmp_r6_fr: 'Penyerahan sering kelam-kabut',
      cmp_r6_a: 'Ya',

      work_eyebrow: 'Contoh hasil kerja live',
      work_title: 'Laman sebenar yang telah dilancarkan — klik dan uji di telefon.',
      work_sub: 'Setiap laman dibina di atas infrastruktur edge yang pantas. Preview MukaDepan anda akan disesuaikan sepenuhnya dengan jenama dan servis anda.',
      work_cta: 'Tuntut preview percuma anda <span aria-hidden="true">→</span>',
      w1_desc: 'Perancang jadual pelajar · Aplikasi web edge',
      w2_desc: 'Ensiklopedia kucing · Laman statik pantas',
      w3_desc: 'Platform cabaran siber · Antara muka gelap khas',
      w4_desc: 'Penasihat hartanah komersial · Penjanaan prospek',

      faq_eyebrow: 'Jawapan jujur',
      faq_title: 'Semua soalan penting sebelum anda tekan WhatsApp.',
      faq_contact: 'Lebih suka emel? Hantar ke <a href="mailto:meerulhazeeq@gmail.com">meerulhazeeq@gmail.com</a> atau WhatsApp <a href="https://wa.me/601154402412" target="_blank" rel="noopener">011-5440 2412</a>.',
      q1_t: 'Betulkah preview percuma tanpa sebarang deposit?',
      q1_b: 'Betul. Anda kongsi nama bisnes dan pautan sedia ada, kami siapkan URL konsep live dalam 24 jam. Jika tidak mahu teruskan, bayaran RM0 dan tiada paksaan.',
      q2_t: 'Bagaimana MukaDepan Pro boleh siap dalam 72 jam?',
      q2_b: 'Kami tidak buang masa bergelut dengan tema WordPress yang berat. Kami guna seni bina kod edge yang sudah diuji dan terus sesuaikan ayat jualan, visual, serta aliran WhatsApp bisnes anda.',
      q3_t: 'Adakah saya wajib bayar Care RM99/bln selamanya?',
      q3_b: 'Tidak wajib. Pelan Care boleh dibatalkan bila-bila masa. Tanpa Care pun anda tetap memiliki domain dan kod sumber penuh 100%.',
      q4_t: 'Bagaimana cara pembayaran berfungsi?',
      q4_b: 'Pakej sekali bayar guna pecahan 50/50: RM0 untuk preview, 50% bila anda luluskan rekaan, dan 50% selepas domain live. Terima FPX, DuitNow QR dan Kad. Perlukan aliran tunai fleksibel? Pilih Pelan Tanpa Pendahuluan RM199/bln untuk Lite atau Pro.',
      q5_t: 'Bolehkah laman web dalam Bahasa Melayu, Inggeris, atau kedua-duanya?',
      q5_b: 'Pro sudah termasuk penulisan ayat jualan dalam BM atau Inggeris. Mahu penukar EN/BM pantas seperti laman ini? Tambah pilihan Dwi-Bahasa atau pilih Scale.',
      q6_t: 'Apa yang perlu saya sediakan untuk mula?',
      q6_b: 'Cukup nama bisnes, nombor WhatsApp, senarai servis/harga, dan pautan FB/IG/Google Maps. Jika tiada gambar profesional, kami sediakan visual berlesen yang kemas.',
      q7_t: 'Adakah bisnes saya lebih mudah dijumpai di Google?',
      q7_b: 'Setiap laman Pro dan Scale dibina dengan struktur SEO bersih, tag lokasi tempatan, kelajuan telefon bawah 1 saat, pautan Google Maps dan integrasi Google Business Profile.',

      close_eyebrow: '2 daripada 5 slot minggu ini dibuka',
      close_title: 'Lihat muka depan baru anda esok. Lancar minggu ini.',
      close_body: 'Berhenti hantar pelanggan ke templat perlahan atau pautan sosial yang berserabut. Tuntut preview percuma RM0 sekarang.',
      close_cta: 'WhatsApp untuk Preview Percuma →',
      close_desk: 'Kira di Meja Tempahan ↑',
      close_note: 'WhatsApp 011-5440 2412 · meerulhazeeq@gmail.com',

      foot_tag: 'Landing page kod tersuai berprestasi tinggi untuk PKS Malaysia. Preview percuma dulu, siap 72 jam, 100% milik anda.',
      foot_nav: 'Teroka',
      foot_contact: 'Meja Terus',
      foot_hours: 'Malaysia · Balas dalam beberapa jam',
      foot_legal: 'Dibina & dilancarkan di Vercel Edge.',
      foot_top: 'Kembali ke atas',
      mob_cta: 'Preview Percuma'
    }
  };

  /* ---------- pricing model ---------- */
  const TIERS = {
    lite: { en: 'MukaDepan Lite', ms: 'MukaDepan Lite', price: 990, days: 5, agencyAnchor: 2200, waasMonthly: 149 },
    pro: { en: 'MukaDepan Pro', ms: 'MukaDepan Pro', price: 1490, days: 3, agencyAnchor: 3800, waasMonthly: 199 },
    scale: { en: 'MukaDepan Scale', ms: 'MukaDepan Scale', price: 3200, days: 7, agencyAnchor: 7500, waasMonthly: null }
  };

  const EXTRAS = {
    bilingual: { en: 'Bilingual toggle (BM + EN)', ms: 'Penukar Dwi-Bahasa (BM + EN)', price: 350, days: 1 },
    booking: { en: 'Smart booking / quote estimator', ms: 'Borang tempahan / anggaran pintar', price: 250, days: 0 },
    fpx: { en: 'FPX / ToyyibPay checkout link', ms: 'Pautan bayaran FPX / ToyyibPay', price: 300, days: 1 }
  };

  const FIRST_BONUS = 200;
  const CARE_MONTHLY = 99;
  const WAAS_MONTHS = 12;

  let currentLang = (() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG);
      return saved === 'ms' ? 'ms' : 'en';
    } catch {
      return 'en';
    }
  })();

  const money = (n) => 'RM ' + Math.round(n).toLocaleString('en-US');

  const dateIn = (days, lang) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const locale = lang === 'ms' ? 'ms-MY' : 'en-GB';
    return new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short' }).format(d).replace(',', '');
  };

  /* ---------- mobile menu ---------- */
  const toggle = $('#menuToggle');
  const panel = $('#menuPanel');
  const desktop = window.matchMedia('(min-width: 961px)');
  const closeMenu = () => {
    if (!panel || !toggle) return;
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = panel.hidden;
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    });
    panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (e) => {
      if (panel.hidden) return;
      if (!e.target.closest('#menuPanel') && !e.target.closest('#menuToggle')) closeMenu();
    });
    desktop.addEventListener('change', closeMenu);
  }

  /* ---------- sticky mobile bar ---------- */
  const mobileOrder = $('#mobileOrder');
  const builderSection = $('#build');
  if (mobileOrder && builderSection) {
    if ('IntersectionObserver' in window) {
      const barObserver = new IntersectionObserver(([entry]) => {
        mobileOrder.classList.toggle('is-visible', entry.isIntersecting);
      }, { threshold: 0, rootMargin: '-70px 0px 0px 0px' });
      barObserver.observe(builderSection);
    } else {
      mobileOrder.classList.add('is-visible');
    }
  }

  /* ---------- elements ---------- */
  const heroDate = $('#heroDate');
  const summaryTierName = $('#summaryTierName');
  const summaryDate = $('#summaryDate');
  const orderList = $('#orderList');
  const orderLabel = $('#orderLabel');
  const orderTotal = $('#orderTotal');
  const orderUnit = $('#orderUnit');
  const orderSavings = $('#orderSavings');
  const orderPlan = $('#orderPlan');
  const paySplitAmt = $('#paySplitAmt');
  const paySplitMeta = $('#paySplitMeta');
  const payWaasTitle = $('#payWaasTitle');
  const payWaasAmt = $('#payWaasAmt');
  const payWaasMeta = $('#payWaasMeta');
  const bilingualRow = $('#bilingualRow');
  const bilingualInput = $('input[name="extra"][value="bilingual"]');
  const bilingualPrice = $('#bilingualPrice');
  const bilingualMeta = $('#bilingualMeta');
  const orderBtn = $('#orderBtn');
  const emailBtn = $('#emailBtn');
  const closingWaBtn = $('#closingWaBtn');
  const termsLine = $('#termsLine');
  const mobileLabel = $('#mobileLabel');
  const mobileTotal = $('#mobileTotal');
  const mobileOrderBtn = $('#mobileOrderBtn');
  const leadBiz = $('#leadBiz');
  const leadWa = $('#leadWa');
  const leadLink = $('#leadLink');

  /* ---------- language switcher ---------- */
  const applyLang = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';
    try { localStorage.setItem(STORAGE_LANG, lang); } catch {}

    $$('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const dict = I18N[lang];
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
  };

  /* ---------- order calculation & rendering ---------- */
  const buildLinks = (state) => {
    const ms = currentLang === 'ms';
    const biz = (leadBiz?.value || '').trim() || (ms ? '[Nama Bisnes Anda]' : '[Your Business Name]');
    const wa = (leadWa?.value || '').trim() || (ms ? '[No. WhatsApp]' : '[Your WhatsApp]');
    const link = (leadLink?.value || '').trim() || (ms ? 'Tiada lagi' : 'None yet');

    const extraNames = state.extras.length
      ? state.extras.map((e) => `${e[currentLang]} (+${money(e.price)})`).join(', ')
      : (ms ? 'Tiada' : 'None');

    const lines = ms
      ? [
          'Hai MukaDepan, saya mahu tuntut Preview Percuma RM0 (24 jam):',
          '',
          `• Bisnes: ${biz}`,
          `• WhatsApp saya: ${wa}`,
          `• Pautan sedia ada: ${link}`,
          `• Pakej: ${state.tier.ms} (${money(state.tier.price)})`,
          `• Tambahan: ${extraNames}`,
          ...(state.first ? [`• Bonus Bisnes Pertama: -${money(FIRST_BONUS)}`] : []),
          ...(state.care ? [`• Pelan Care: +${money(CARE_MONTHLY)}/bln`] : []),
          `• Cara bayar: ${state.payLine}`,
          `• Anggaran siap: ${state.launchDate}`
        ]
      : [
          'Hi MukaDepan, I would like to claim my Free RM0 24h Preview:',
          '',
          `• Business: ${biz}`,
          `• My WhatsApp: ${wa}`,
          `• Current link: ${link}`,
          `• Package: ${state.tier.en} (${money(state.tier.price)})`,
          `• Add-ons: ${extraNames}`,
          ...(state.first ? [`• Founding First-Site Bonus: -${money(FIRST_BONUS)}`] : []),
          ...(state.care ? [`• Care Plan: +${money(CARE_MONTHLY)}/mo`] : []),
          `• Payment plan: ${state.payLine}`,
          `• Target launch: ${state.launchDate}`
        ];

    const message = lines.join('\n');
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const subject = ms
      ? `Preview Percuma MukaDepan: ${biz} (${state.tier.ms})`
      : `MukaDepan Free Preview: ${biz} (${state.tier.en})`;
    const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return { waHref, mailHref, payload: { ...state, biz, wa, link, lang: currentLang } };
  };

  const render = () => {
    const tierKey = $('input[name="tier"]:checked').value;
    const tier = TIERS[tierKey];
    const isScale = tierKey === 'scale';
    const ms = currentLang === 'ms';

    // Scale already includes bilingual BM + EN
    if (bilingualInput && bilingualRow) {
      bilingualRow.classList.toggle('is-included', isScale);
      if (isScale) {
        bilingualInput.checked = false;
        bilingualInput.disabled = true;
        bilingualPrice.textContent = ms ? 'Termasuk' : 'Included';
        bilingualMeta.textContent = ms ? 'Sudah termasuk dalam MukaDepan Scale' : 'Already included in MukaDepan Scale';
      } else {
        bilingualInput.disabled = false;
        bilingualPrice.textContent = '+RM 350';
        bilingualMeta.textContent = I18N[currentLang].ext_bilingual_meta;
      }
    }

    const extras = $$('input[name="extra"]:checked')
      .filter((el) => !el.disabled)
      .map((el) => EXTRAS[el.value]);

    const first = $('input[name="first"]').checked;
    const care = $('input[name="care"]').checked;
    const payMode = $('input[name="pay"]:checked').value;

    const extrasSum = extras.reduce((acc, item) => acc + item.price, 0);
    const extrasDays = extras.reduce((acc, item) => acc + item.days, 0);
    const oneOffTotal = Math.max(0, tier.price + extrasSum - (first ? FIRST_BONUS : 0));
    const totalDays = tier.days + extrasDays;
    const launchDate = dateIn(totalDays, currentLang);

    // Update hero launch estimate (+3d for Pro)
    if (heroDate) heroDate.textContent = dateIn(3, currentLang);

    // Compute payment plan figures
    const halfAmt = Math.ceil(oneOffTotal / 2);
    if (paySplitAmt) paySplitAmt.textContent = money(oneOffTotal);
    if (paySplitMeta) {
      paySplitMeta.textContent = ms
        ? `RM0 preview · ${money(halfAmt)} lulus · ${money(oneOffTotal - halfAmt)} live`
        : `RM0 preview · ${money(halfAmt)} approval · ${money(oneOffTotal - halfAmt)} live`;
    }

    let isWaas = payMode === 'waas';
    let monthlyPrice = 0;
    let planTotal = oneOffTotal;
    let payLine = '';

    if (tier.waasMonthly !== null) {
      // Lite or Pro supports Zero-Upfront WaaS
      const extraMonthly = Math.ceil(extrasSum / WAAS_MONTHS);
      monthlyPrice = tier.waasMonthly + extraMonthly;
      planTotal = monthlyPrice * WAAS_MONTHS;
      if (payWaasTitle) payWaasTitle.textContent = ms ? 'Pelan Tanpa Pendahuluan' : 'Zero-Upfront Plan';
      if (payWaasAmt) payWaasAmt.textContent = `RM 0 setup · ${money(monthlyPrice)}${ms ? '/bln' : '/mo'}`;
      if (payWaasMeta) {
        payWaasMeta.textContent = ms
          ? `12 bulan · Hosting, domain & Care termasuk`
          : `12 months · Hosting, domain & Care included`;
      }
    } else {
      // Scale uses honest 3-milestone installment instead of undercharging WaaS
      const part3 = Math.ceil(oneOffTotal / 3);
      monthlyPrice = part3;
      planTotal = oneOffTotal;
      if (payWaasTitle) payWaasTitle.textContent = ms ? '3× Bayaran Berperingkat' : '3× Milestone Split';
      if (payWaasAmt) payWaasAmt.textContent = `3 × ${money(part3)}`;
      if (payWaasMeta) {
        payWaasMeta.textContent = ms
          ? 'Mula · Semakan · Pelancaran (0% faedah)'
          : 'Start · Mid-review · Live launch (0% interest)';
      }
    }

    // Populate itemized list
    const rows = [[tier[currentLang], money(tier.price)]];
    extras.forEach((e) => rows.push([e[currentLang], '+' + money(e.price)]));
    if (first) rows.push([ms ? 'Bonus Bisnes Pertama' : 'Founding First-Site Bonus', '−' + money(FIRST_BONUS)]);
    if (care && !(isWaas && tier.waasMonthly !== null)) {
      rows.push([ms ? 'Pelan Care (pilihan)' : 'MukaDepan Care (optional)', `+${money(CARE_MONTHLY)}/${ms ? 'bln' : 'mo'}`]);
    } else if (isWaas && tier.waasMonthly !== null) {
      rows.push([ms ? 'Hosting, domain & Care' : 'Hosting, domain & Care', ms ? 'Termasuk' : 'Included']);
    }

    orderList.replaceChildren(...rows.map(([k, v]) => {
      const li = document.createElement('li');
      const left = document.createElement('span');
      const right = document.createElement('span');
      left.textContent = k;
      right.textContent = v;
      li.append(left, right);
      return li;
    }));

    summaryTierName.textContent = tier[currentLang];
    summaryDate.textContent = launchDate;

    if (isWaas && tier.waasMonthly !== null) {
      orderLabel.textContent = ms ? 'Setiap bulan' : 'Each month';
      orderTotal.textContent = money(monthlyPrice);
      orderUnit.textContent = ms ? '/bln' : '/mo';
      orderUnit.hidden = false;
      orderPlan.hidden = false;
      orderPlan.textContent = ms
        ? `RM 0 pendahuluan · 12 bulan (Jumlah ${money(planTotal)})`
        : `RM 0 setup · 12 payments (${money(planTotal)} total)`;
      termsLine.textContent = ms ? 'RM0 preview · Hosting & Care termasuk' : 'RM0 preview · Hosting & Care included';
      payLine = ms
        ? `Tanpa Pendahuluan: RM0 setup, ${money(monthlyPrice)}/bln × 12 bulan`
        : `Zero-Upfront: RM0 setup, ${money(monthlyPrice)}/mo × 12 months`;
    } else if (isWaas && tier.waasMonthly === null) {
      orderLabel.textContent = ms ? 'Setiap fasa (×3)' : 'Per milestone (×3)';
      orderTotal.textContent = money(monthlyPrice);
      orderUnit.hidden = true;
      orderPlan.hidden = false;
      orderPlan.textContent = ms ? `Jumlah projek: ${money(oneOffTotal)} (0% faedah)` : `Project total: ${money(oneOffTotal)} (0% interest)`;
      termsLine.textContent = ms ? 'RM0 preview · 3 bayaran berperingkat' : 'RM0 preview · 3 milestone payments';
      payLine = ms ? `3× Bayaran Berperingkat: 3 × ${money(monthlyPrice)}` : `3× Milestone Split: 3 × ${money(monthlyPrice)}`;
    } else {
      orderLabel.textContent = ms ? 'Jumlah sekali bayar' : 'One-off total';
      orderTotal.textContent = money(oneOffTotal);
      orderUnit.hidden = true;
      orderPlan.hidden = !care;
      orderPlan.textContent = care
        ? (ms ? `Tambah Pelan Care: +${money(CARE_MONTHLY)}/bln (batal bila-bila masa)` : `Plus Care Plan: +${money(CARE_MONTHLY)}/mo (cancel anytime)`)
        : '';
      termsLine.textContent = ms
        ? `RM0 preview · ${money(halfAmt)} lulus · ${money(oneOffTotal - halfAmt)} live`
        : `RM0 preview · ${money(halfAmt)} approval · ${money(oneOffTotal - halfAmt)} live`;
      payLine = ms
        ? `Sekali Bayar ${money(oneOffTotal)} (50/50: ${money(halfAmt)} + ${money(oneOffTotal - halfAmt)})`
        : `One-Off ${money(oneOffTotal)} (50/50: ${money(halfAmt)} + ${money(oneOffTotal - halfAmt)})`;
    }

    const savings = Math.max(0, tier.agencyAnchor + extrasSum - oneOffTotal);
    orderSavings.textContent = ms
      ? `Jimat ${money(savings)} berbanding harga biasa agensi KL`
      : `You save ${money(savings)} vs typical KL agency rates`;

    const links = buildLinks({ tier, extras, first, care, payLine, launchDate, oneOffTotal });
    orderBtn.href = links.waHref;
    emailBtn.href = links.mailHref;
    if (mobileOrderBtn) mobileOrderBtn.href = links.waHref;
    if (closingWaBtn) {
      const quickMsg = ms
        ? 'Hai MukaDepan, saya mahu tuntut Preview Percuma RM0 (24 jam) untuk bisnes saya.'
        : 'Hi MukaDepan, I want to claim my Free RM0 24h website preview.';
      closingWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quickMsg)}`;
    }

    if (mobileLabel) mobileLabel.textContent = orderLabel.textContent;
    if (mobileTotal) mobileTotal.textContent = orderTotal.textContent + (orderUnit.hidden ? '' : orderUnit.textContent);

    orderBtn.dataset.payload = JSON.stringify(links.payload);
  };

  /* ---------- optional n8n webhook hook ---------- */
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const hook = window.MUKADEPAN_WEBHOOK_URL;
      if (!hook || !orderBtn.dataset.payload) return;
      try {
        fetch(hook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: orderBtn.dataset.payload,
          keepalive: true
        }).catch(() => {});
      } catch {}
    });
  }

  /* ---------- bind listeners ---------- */
  $$('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      render();
    });
  });

  $$('input[name="tier"], input[name="extra"], input[name="first"], input[name="care"], input[name="pay"]')
    .forEach((el) => el.addEventListener('change', render));

  [leadBiz, leadWa, leadLink].forEach((el) => {
    if (el) el.addEventListener('input', render);
  });

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  applyLang(currentLang);
  render();
})();
