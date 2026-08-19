<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Leila El Tousy — Anwendungsentwicklerin</title>
    <meta name="description" content="Leila El Tousy — Anwendungsentwicklerin aus Marokko, auf der Suche nach einer Ausbildung als Fachinformatikerin für Anwendungsentwicklung in Deutschland, 2027." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        /* ===== RESET & BASE ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg: #f8fafb;
            --surface: #ffffff;
            --ink: #0b1a2b;
            --ink-soft: #33475b;
            --ink-faint: #6b7f8f;
            --line: #e2e8f0;
            --accent: #1e6f5c;
            --accent-light: #e7f3ef;
            --accent-ink: #135242;
            --radius: 8px;
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
            --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-mono: 'JetBrains Mono', 'Courier New', monospace;
            --transition: 0.25s ease;
        }

        html {
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background: var(--bg);
            color: var(--ink);
            font-family: var(--font-sans);
            font-size: 16px;
            line-height: 1.6;
        }

        a {
            color: var(--accent-ink);
            text-decoration-color: var(--accent);
            text-underline-offset: 3px;
            transition: color var(--transition);
        }
        a:hover {
            color: var(--accent);
        }

        .wrap {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* ===== SKIP LINK ===== */
        .skip-link {
            position: absolute;
            left: -999px;
            top: 0;
            background: var(--ink);
            color: #fff;
            padding: 10px 16px;
            z-index: 100;
            border-radius: 0 0 var(--radius) var(--radius);
        }
        .skip-link:focus {
            left: 16px;
            top: 16px;
        }

        :focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        /* ===== NAV ===== */
        .topnav {
            position: sticky;
            top: 0;
            z-index: 30;
            background: rgba(248, 250, 251, 0.85);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--line);
        }

        .topnav-inner {
            max-width: 960px;
            margin: 0 auto;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .brand {
            font-family: var(--font-mono);
            font-weight: 600;
            font-size: 16px;
            color: var(--ink);
            text-decoration: none;
            letter-spacing: -0.02em;
        }
        .brand:hover {
            color: var(--ink);
        }
        .brand .dot {
            color: var(--accent);
        }

        .navlinks {
            display: flex;
            gap: 8px;
            list-style: none;
            margin: 0;
            padding: 0;
            align-items: center;
        }
        .navlinks a {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--ink-soft);
            text-decoration: none;
            padding: 6px 14px;
            border-radius: var(--radius);
            border: 2px solid transparent;
            transition: all var(--transition);
        }
        .navlinks a:hover {
            color: var(--accent-ink);
            background: var(--accent-light);
        }

        /* Style pour l'élément actif : cadre noir */
        .navlinks a.active {
            color: var(--ink);
            border-color: var(--ink);
            background: transparent;
        }

        .nav-cta {
            background: var(--ink);
            color: #fff !important;
            padding: 6px 16px !important;
            border-radius: 999px !important;
            font-weight: 600;
            font-size: 13px !important;
            border: 2px solid var(--ink) !important;
            transition: background var(--transition);
        }
        .nav-cta:hover {
            background: var(--accent-ink) !important;
            color: #fff !important;
            border-color: var(--accent-ink) !important;
        }
        .nav-cta.active {
            border-color: var(--ink) !important;
            background: var(--ink) !important;
            color: #fff !important;
        }

        @media (max-width: 700px) {
            .navlinks li:not(:last-child) {
                display: none;
            }
        }

        /* ===== HERO ===== */
        .hero {
            padding: 64px 0 56px;
            border-bottom: 1px solid var(--line);
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
        }
        @media (max-width: 780px) {
            .hero-grid {
                grid-template-columns: 1fr;
                gap: 32px;
            }
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 500;
            color: var(--accent-ink);
            background: var(--accent-light);
            border-radius: 999px;
            padding: 4px 14px;
            margin-bottom: 20px;
        }
        .status-badge .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent);
            flex-shrink: 0;
        }

        h1 {
            font-family: var(--font-mono);
            font-weight: 600;
            font-size: clamp(32px, 5vw, 48px);
            line-height: 1.1;
            margin: 0 0 12px;
            letter-spacing: -0.02em;
        }
        h1 .cursor {
            display: inline-block;
            width: 3px;
            height: 0.85em;
            background: var(--accent);
            margin-left: 4px;
            vertical-align: -0.1em;
            animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
            50% {
                opacity: 0;
            }
        }

        .hero-role {
            font-size: 18px;
            color: var(--ink-soft);
            margin: 0 0 16px;
            max-width: 50ch;
            font-weight: 500;
        }
        .hero-role strong {
            color: var(--ink);
        }

        .hero-desc {
            font-size: 16px;
            color: var(--ink-soft);
            max-width: 56ch;
            margin: 0 0 28px;
        }

        .hero-links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            font-size: 14px;
            padding: 10px 20px;
            border-radius: var(--radius);
            text-decoration: none;
            border: 1px solid transparent;
            transition: all var(--transition);
            cursor: pointer;
        }
        .btn-primary {
            background: var(--ink);
            color: #fff;
        }
        .btn-primary:hover {
            background: #1a2d3e;
            color: #fff;
        }
        .btn-secondary {
            background: var(--surface);
            color: var(--ink);
            border-color: var(--line);
        }
        .btn-secondary:hover {
            border-color: var(--ink-faint);
            color: var(--ink);
        }

        /* Terminal Card */
        .term-card {
            background: #0d1a26;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 1px solid #1d2d3a;
        }
        .term-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            background: #13212e;
            border-bottom: 1px solid #1d2d3a;
        }
        .term-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .term-dot.red {
            background: #e0453f;
        }
        .term-dot.yellow {
            background: #e0b23f;
        }
        .term-dot.grn {
            background: #4ade80;
        }
        .term-title {
            font-family: var(--font-mono);
            font-size: 12px;
            color: #6b8a9e;
            margin-left: 6px;
        }
        .term-body {
            padding: 18px 16px;
            font-family: var(--font-mono);
            font-size: 13px;
            line-height: 1.9;
            color: #c9d5e0;
            min-height: 200px;
        }
        .term-ps {
            color: #4ade80;
        }
        .term-out {
            color: #8aa3b5;
        }
        .term-hi {
            color: #6fcf97;
        }
        .term-cursor {
            display: inline-block;
            width: 7px;
            height: 13px;
            background: #4ade80;
            vertical-align: -2px;
            animation: blink 1s steps(1) infinite;
        }

        /* ===== SECTIONS ===== */
        section {
            padding: 56px 0;
            border-bottom: 1px solid var(--line);
        }
        section:last-of-type {
            border-bottom: none;
        }

        /* ===== ÉTIQUETTES // (MODIFIÉES POUR ÊTRE PLUS GRANDES & VISIBLES) ===== */
        .section-tag {
            font-family: var(--font-mono);
            font-size: 18px; /* AGRANDI (était à 13px) */
            font-weight: 700; /* AJOUTÉ : GRAS pour plus de visibilité */
            color: var(--accent); /* AJOUTÉ : COULEUR VERTE PLUS VIVE */
            letter-spacing: 0.02em;
            margin: 0 0 8px; /* Un tout petit peu plus d'espace en dessous */
        }
        .section-tag::before {
            content: "// ";
            color: var(--ink-faint);
            font-weight: 400;
        }

        .section-title {
            font-weight: 700;
            font-size: 26px;
            margin: 0 0 24px;
            color: var(--ink);
            letter-spacing: -0.01em;
        }

        /* ===== ABOUT (RETOUR À L'ORIGINAL) ===== */
        .about-grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 40px;
            align-items: start;
        }
        @media (max-width: 780px) {
            .about-grid {
                grid-template-columns: 1fr;
                gap: 28px;
            }
        }

        .about-text p {
            color: var(--ink-soft);
            margin-bottom: 16px;
            max-width: 60ch;
        }
        .about-text strong {
            color: var(--ink);
        }

        .about-facts {
            list-style: none;
            padding: 0;
            margin: 20px 0 0;
        }
        .about-facts li {
            display: flex;
            gap: 10px;
            font-size: 15px;
            color: var(--ink-soft);
            padding: 6px 0;
        }
        .about-facts li::before {
            content: "→";
            color: var(--accent);
            flex-shrink: 0;
        }

        .stat-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 20px;
        }
        .stat-box {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 16px 12px;
            text-align: center;
            box-shadow: var(--shadow-sm);
        }
        .stat-number {
            font-family: var(--font-mono);
            font-weight: 600;
            font-size: 24px;
            color: var(--accent-ink);
            line-height: 1.2;
        }
        .stat-label {
            font-size: 12.5px;
            color: var(--ink-faint);
            margin-top: 2px;
        }

        /* ===== EDUCATION ===== */
        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            border-left: 2px solid var(--line);
        }
        .timeline li {
            position: relative;
            padding: 0 0 28px 28px;
        }
        .timeline li:last-child {
            padding-bottom: 0;
        }
        .timeline li::before {
            content: "";
            position: absolute;
            left: -7px;
            top: 4px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--surface);
            border: 2px solid var(--accent);
        }
        .timeline-date {
            font-family: var(--font-mono);
            font-size: 13px;
            color: var(--accent-ink);
            display: block;
            margin-bottom: 2px;
        }
        .timeline-title {
            font-weight: 700;
            font-size: 17px;
            margin: 0 0 2px;
        }
        .timeline-desc {
            font-size: 15px;
            color: var(--ink-soft);
            max-width: 60ch;
            margin: 0;
        }

        /* ===== PROJECTS (Vertical Grid with Images) ===== */
        .projects-grid {
            display: grid;
            gap: 20px;
        }
        .project-card {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 20px;
            box-shadow: var(--shadow-sm);
            transition: all var(--transition);
            
            /* Mise en page côte à côte (Image + Texte) */
            display: grid;
            grid-template-columns: 280px 1fr; /* L'image prendra 280px de large */
            gap: 24px;
            align-items: start;
        }
        .project-card:hover {
            border-color: var(--accent);
            box-shadow: var(--shadow-md);
            transform: translateY(-2px);
        }

        /* Zone de l'image du projet (SANS CADRE ET REMPLIE) */
        .project-image {
            width: 100%;
            height: 100%;
            min-height: 140px;
            max-height: 250px; /* Un peu plus grand */
            
            /* SUPPRESSION DU CADRE GRIS */
            background: transparent; 
            border: none; 
            border-radius: 0; /* Plus de coins arrondis pour l'image elle-même */

            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .project-image img {
            width: 100%;
            height: 100%;
            /* "cover" remplit tout le cadre en agrandissant l'image */
            object-fit: cover; 
            display: block;
            border-radius: var(--radius); /* Ajoute un petit arrondi juste à l'image */
        }

        .project-content {
            display: flex;
            flex-direction: column;
        }

        .project-head {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 4px;
        }
        .project-title {
            font-weight: 700;
            font-size: 17px;
            margin: 0;
        }
        .project-title a {
            color: var(--ink);
            text-decoration: none;
            transition: color var(--transition);
        }
        .project-title a:hover {
            color: var(--accent-ink);
        }
        .project-period {
            font-family: var(--font-mono);
            font-size: 12.5px;
            color: var(--ink-faint);
            white-space: nowrap;
        }
        .project-desc {
            font-size: 15px;
            color: var(--ink-soft);
            margin: 4px 0 14px;
            flex-grow: 1;
        }
        .project-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 8px;
            align-items: center;
        }
        .project-link {
            font-family: var(--font-mono);
            font-size: 13px;
            font-weight: 500;
            color: var(--accent-ink);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color var(--transition);
        }
        .project-link:hover {
            color: var(--accent);
        }
        .project-link svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }
        .project-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 2px;
        }
        .chip {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--accent-ink);
            background: var(--accent-light);
            border-radius: var(--radius);
            padding: 2px 10px;
        }

        /* Responsive pour les projets (Mobile) */
        @media (max-width: 650px) {
            .project-card {
                grid-template-columns: 1fr; /* L'image passe au-dessus du texte */
                gap: 16px;
            }
            .project-image {
                aspect-ratio: 16 / 9; /* L'image devient plus rectangulaire sur mobile */
                max-height: 180px;
            }
        }

        /* ===== SKILLS ===== */
        .skills-groups {
            display: grid;
            gap: 24px;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .skills-group-label {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--ink-faint);
            margin: 0 0 10px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .skills-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .skill-chip {
            font-size: 14px;
            color: var(--ink);
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 5px 12px;
            transition: border-color var(--transition);
        }
        .skill-chip:hover {
            border-color: var(--accent);
        }

        /* ===== CONTACT ===== */
        .contact-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
        .contact-text {
            color: var(--ink-soft);
            max-width: 56ch;
            margin-bottom: 20px;
        }

        /* ===== FOOTER ===== */
        footer {
            padding: 28px 0 40px;
            border-top: 1px solid var(--line);
        }
        .footer-inner {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 12px;
            font-size: 13.5px;
            color: var(--ink-faint);
        }
        .footer-inner a {
            color: var(--ink-faint);
            transition: color var(--transition);
        }
        .footer-inner a:hover {
            color: var(--accent-ink);
        }

        @media (max-width: 620px) {
            .hero {
                padding: 48px 0 32px;
            }
            section {
                padding: 40px 0;
            }
            .stat-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>

    <a class="skip-link" href="#main">Zum Inhalt springen</a>

    <nav class="topnav">
        <div class="topnav-inner">
            <a class="brand" href="#top">leila<span class="dot">.</span>dev</a>
            <ul class="navlinks" id="navlinks">
                <li><a href="#about" class="active">Über mich</a></li>
                <li><a href="#education">Ausbildung</a></li>
                <li><a href="#projects">Projekte</a></li>
                <li><a href="#skills">Fähigkeiten</a></li>
                <li><a href="#contact" class="nav-cta">Kontakt</a></li>
            </ul>
        </div>
    </nav>

    <main id="main">
        <div class="wrap">

            <!-- ===== HERO ===== -->
            <header class="hero" id="top">
                <div class="hero-grid">
                    <div>
                        <span class="status-badge">
                            <span class="dot"></span>
                            Suche Ausbildung — 2027
                        </span>
                        <h1>
                            Leila El Tousy<span class="cursor" aria-hidden="true"></span>
                        </h1>
                        <p class="hero-role">
                            Anwendungsentwicklerin aus Marokko, auf dem Weg zur
                            <strong>Ausbildung als Fachinformatikerin für Anwendungsentwicklung</strong>
                            in Deutschland.
                        </p>
                        <p class="hero-desc">
                            Ich lerne durch praktisches Tun — jedes Projekt auf dieser Seite löst ein echtes Problem oder bringt mir etwas Neues bei. Python, PHP, JavaScript und einige Praktika, bei denen ich Dinge gebaut habe, die tatsächlich genutzt wurden.
                        </p>
                        <div class="hero-links">
                            <a class="btn btn-primary" href="https://github.com/El-Tousy" target="_blank" rel="noopener">GitHub ansehen</a>
                            <a class="btn btn-secondary" href="mailto:leilaeltousy@gmail.com">Kontaktiere mich</a>
                        </div>
                    </div>

                    <div class="term-card" role="img" aria-label="Terminal mit einer Zusammenfassung von Leilas Fähigkeiten und Projekten">
                        <div class="term-bar">
                            <span class="term-dot red"></span>
                            <span class="term-dot yellow"></span>
                            <span class="term-dot grn"></span>
                            <span class="term-title">leila@devbook — zsh</span>
                        </div>
                        <div class="term-body" id="term-output" aria-hidden="true"></div>
                    </div>
                </div>
            </header>

            <!-- ===== ABOUT ===== -->
            <section id="about">
                <p class="section-tag">Über mich</p>
                <h2 class="section-title">Ein wenig über mich</h2>
                <div class="about-grid">
                    <div class="about-text">
                        <p>
                            Ich habe einen Abschluss in Informatik und bereite derzeit meine Bewerbungsunterlagen für eine <strong>Ausbildung in Deutschland</strong> vor. Mein DUT wird von der ANABIN als gleichwertig mit einem deutschen Berufsfachschulabschluss anerkannt — der praxisorientierte Weg ist genau das, was ich suche.
                        </p>
                        <p>
                            Statt mich nur auf die Theorie zu beschränken, habe ich das letzte Jahr damit verbracht, in meinen Praktika konkrete Dinge zu bauen: Dashboards, WhatsApp-Bot, IT-Infrastruktur-Migration. Ich möchte das in einem deutschen Unternehmen fortsetzen und meinen Beruf vor Ort lernen.
                        </p>
                        <ul class="about-facts">
                            <li>Basiert in Marokko — bereit, nach Deutschland zu ziehen</li>
                            <li>Deutsch B1: Hören, Lesen, Sprechen bestanden; Schreiben in Vorbereitung</li>
                            <li>Außerdem fließend in Arabisch, Französisch und Englisch</li>
                        </ul>
                    </div>
                    <div>
                        <div class="stat-grid">
                            <div class="stat-box">
                                <div class="stat-number">6</div>
                                <div class="stat-label">abgeschlossene Projekte</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-number">3</div>
                                <div class="stat-label">absolvierte Praktika</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-number">B1</div>
                                <div class="stat-label">Deutsch (ÖSD)</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-number">2027</div>
                                <div class="stat-label">angestrebter Start</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ===== EDUCATION ===== -->
            <section id="education">
                <p class="section-tag">Ausbildung</p>
                <h2 class="section-title">Werdegang</h2>
                <ul class="timeline">
                    <li>
                        <span class="timeline-date">2023 – 2024</span>
                        <p class="timeline-title">Marokkanisches Abitur</p>
                        <p class="timeline-desc">Schwerpunkt Physik &amp; Chemie, Marokko. Mit der Note "Sehr Gut" abgeschlossen.</p>
                    </li>
                    <li>
                        <span class="timeline-date">2024 – 2026</span>
                        <p class="timeline-title">Diplôme Universitaire de Technologie (DUT) — Informatik</p>
                        <p class="timeline-desc">École Supérieure de Technologie, Marokko. Zwei Praktika absolviert. Von der ANABIN als gleichwertig mit einem deutschen Berufsfachschulabschluss anerkannt.</p>
                    </li>
                </ul>
            </section>

            <!-- ===== PROJECTS ===== -->
            <section id="projects">
                <p class="section-tag">Projekte</p>
                <h2 class="section-title">Was ich gebaut habe</h2>
                <div class="projects-grid">

                    <!-- PROJET 1 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/alexandra.png" alt="Schnittstelle des Sprachassistenten Alexandra">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/Alexandra-AI-Voice-Assistante" target="_blank" rel="noopener">Alexandra — KI-Sprachassistent</a></h3>
                                <span class="project-period">Abschlussprojekt · 2026</span>
                            </div>
                            <p class="project-desc">Android-Sprachassistent, der Spracherkennung, einen OpenAI-gesteuerten Chat und intelligente Erinnerungen kombiniert — mit einem PHP/JS-Dashboard für die Verwaltung, alles basierend auf Firebase.</p>
                            <div class="project-stack">
                                <span class="chip">Kotlin</span><span class="chip">Java</span><span class="chip">OpenAI API</span><span class="chip">Firebase</span><span class="chip">HTML/CSS/JS</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/Alexandra-AI-Voice-Assistante" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- PROJET 2 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/weather.png" alt="Screenshot des Wetter-Überwachungs-Dashboards">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/Weather-supervision-dashboard-showcase" target="_blank" rel="noopener">Wetter-Überwachungs-Dashboard</a></h3>
                                <span class="project-period">Praktikum · 2026</span>
                            </div>
                            <p class="project-desc">Echtzeit-Dashboard für ein IoT-Sensornetzwerk: interaktive Karte, Alarme, Schlüsselindikatoren und rollenbasierte Zugriffskontrolle, mit fünf separaten Datenbanken.</p>
                            <div class="project-stack">
                                <span class="chip">PHP</span><span class="chip">MySQL</span><span class="chip">jQuery</span><span class="chip">Leaflet.js</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/Weather-supervision-dashboard-showcase" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- PROJET 3 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/giga-manager.png" alt="Giga Manager Admin-Dashboard">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/Admin-dashboard-project-internship-Giga-Manager-overview-screenshots-only" target="_blank" rel="noopener">Admin-Dashboard — Giga Manager</a></h3>
                                <span class="project-period">Praktikum · 2026</span>
                            </div>
                            <p class="project-desc">Admin-Dashboard für ein Hosting/Web-Unternehmen zur Verwaltung der Website, der Kundenanmeldungen und der Seiteninhalte. Außerdem Arbeit an der produktiven Website.</p>
                            <div class="project-stack">
                                <span class="chip">PHP</span><span class="chip">MySQL</span><span class="chip">HTML/CSS/JS</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/Admin-dashboard-project-internship-Giga-Manager-overview-screenshots-only" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- PROJET 4 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/glpi.png" alt="Architektur der GLPI-Migration mit Docker">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/glpi-10-to-11-docker-migration" target="_blank" rel="noopener">GLPI 10 → 11 Migration mit Docker</a></h3>
                                <span class="project-period">05/2026</span>
                            </div>
                            <p class="project-desc">Containerisierte Migration einer GLPI-Instanz von Version 10 auf Version 11, mit Verwaltung der Datenkontinuität und der Konfiguration.</p>
                            <div class="project-stack">
                                <span class="chip">Docker</span><span class="chip">GLPI</span><span class="chip">MySQL</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/glpi-10-to-11-docker-migration" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- PROJET 5 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/whatsapp-bot.png" alt="Schema der Funktionsweise des WhatsApp-Bots">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/Meta-API-python-whatsapp-bot" target="_blank" rel="noopener">WhatsApp-Bot — Meta API + OpenAI</a></h3>
                                <span class="project-period">07/2025</span>
                            </div>
                            <p class="project-desc">Interaktiver WhatsApp-Bot, der Nachrichten über die offizielle Meta-API empfängt und Antworten mit OpenAI generiert.</p>
                            <div class="project-stack">
                                <span class="chip">Python</span><span class="chip">Meta API</span><span class="chip">OpenAI API</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/Meta-API-python-whatsapp-bot" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- PROJET 6 -->
                    <article class="project-card">
                        <div class="project-image">
                            <img src="images/velo-stor.png" alt="Vorschau des Online-Shops Velo Stor">
                        </div>
                        <div class="project-content">
                            <div class="project-head">
                                <h3 class="project-title"><a href="https://github.com/El-Tousy/VELO-STOR-Online-Store" target="_blank" rel="noopener">VELO STOR — Online-Shop</a></h3>
                                <span class="project-period">07/2025</span>
                            </div>
                            <p class="project-desc">Von Grund auf neu erstellter Online-Shop, um die Produktverwaltung und einen vollständigen Kaufprozess vom Katalog bis zum Warenkorb zu üben.</p>
                            <div class="project-stack">
                                <span class="chip">HTML</span><span class="chip">CSS</span><span class="chip">JavaScript</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/El-Tousy/VELO-STOR-Online-Store" target="_blank" rel="noopener" class="project-link">
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                </div>
            </section>

            <!-- ===== SKILLS ===== -->
            <section id="skills">
                <p class="section-tag">Fähigkeiten</p>
                <h2 class="section-title">Werkzeuge &amp; Technologien</h2>
                <div class="skills-groups">
                    <div>
                        <p class="skills-group-label">Sprachen</p>
                        <div class="skills-chips">
                            <span class="skill-chip">Python</span>
                            <span class="skill-chip">PHP</span>
                            <span class="skill-chip">HTML &amp; CSS</span>
                        </div>
                    </div>
                    <div>
                        <p class="skills-group-label">Daten &amp; APIs</p>
                        <div class="skills-chips">
                            <span class="skill-chip">MySQL</span>
                            <span class="skill-chip">REST APIs</span>
                            <span class="skill-chip">Firebase</span>
                        </div>
                    </div>
                    <div>
                        <p class="skills-group-label">Werkzeuge</p>
                        <div class="skills-chips">
                            <span class="skill-chip">Git &amp; GitHub</span>
                            <span class="skill-chip">XAMPP</span>
                            <span class="skill-chip">FileZilla</span>
                            <span class="skill-chip">VS Code</span>
                            <span class="skill-chip">Android Studio</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ===== CONTACT ===== -->
            <section id="contact">
                <p class="section-tag">Kontakt</p>
                <h2 class="section-title">Lass uns sprechen</h2>
                <p class="contact-text">
                    Ich stehe offenen Ausbildungsangeboten ab 2027 gegenüber. Zögern Sie nicht, mir zu schreiben oder ein Video-Gespräch zu vereinbaren.
                </p>
                <div class="contact-row">
                    <a class="btn btn-secondary" href="mailto:leilaeltousy@gmail.com">leilaeltousy@gmail.com</a>
                    <a class="btn btn-secondary" href="https://github.com/El-Tousy" target="_blank" rel="noopener">GitHub ↗</a>
                </div>
            </section>

        </div>
    </main>

    <!-- ===== FOOTER ===== -->
    <footer>
        <div class="wrap footer-inner">
            <span>© 2026 Leila El Tousy</span>
            <a href="#top">↑ Nach oben</a>
        </div>
    </footer>

    <script>
        (function() {
            // === Terminal animation ===
            const lines = [
                { ps: true, text: "whoami" },
                { out: true, text: "Leila El Tousy" },
                { ps: true, text: "cat about.txt" },
                { out: true, text: "Abschluss in Informatik — Marokko 🇲🇦" },
                { out: true, text: "Suche Ausbildung, Start 2027" },
                { ps: true, text: "ls fähigkeiten/" },
                { out: true, hi: true, text: "python  php  javascript" },
                { out: true, hi: true, text: "kotlin  mysql  git" },
                { ps: true, text: "cat status" },
                { out: true, hi: true, text: "bereit, nach Deutschland zu ziehen" }
            ];

            const el = document.getElementById("term-output");
            if (!el) return;

            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            function renderStatic() {
                el.innerHTML = lines.map(function(l) {
                    if (l.ps) return '<div><span class="term-ps">$ </span><span>' + l.text + '</span></div>';
                    return '<div class="term-out' + (l.hi ? ' term-hi' : '') + '">' + l.text + '</div>';
                }).join('');
            }

            if (reduced) {
                renderStatic();
            } else {
                let li = 0,
                    ci = 0;
                let cur = document.createElement('div');
                el.appendChild(cur);

                function typeNext() {
                    if (li >= lines.length) {
                        const caret = document.createElement('span');
                        caret.className = 'term-cursor';
                        cur.appendChild(caret);
                        return;
                    }
                    const line = lines[li];
                    if (ci === 0) {
                        cur.innerHTML = line.ps ? '<span class="term-ps">$ </span>' : '';
                        if (!line.ps) cur.className = 'term-out' + (line.hi ? ' term-hi' : '');
                    }
                    if (ci < line.text.length) {
                        cur.innerHTML += line.text.charAt(ci) === ' ' ? '&nbsp;' : line.text.charAt(ci);
                        ci++;
                        setTimeout(typeNext, line.ps ? 32 : 14);
                    } else {
                        li++;
                        ci = 0;
                        cur = document.createElement('div');
                        el.appendChild(cur);
                        setTimeout(typeNext, 200);
                    }
                }
                typeNext();
            }

            // === Navigation active link ===
            const navLinks = document.querySelectorAll('.navlinks a');
            const sections = document.querySelectorAll('section[id]');

            function setActiveLink() {
                let current = '';
                const scrollPos = window.scrollY + 120; // offset pour la sticky nav

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', setActiveLink);
            window.addEventListener('load', setActiveLink);
        })();
    </script>

</body>
</html>
