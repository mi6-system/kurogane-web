/* German, Portuguese, Italian. Order of every row: de, pt, it */
(function () {
  var CODES = ["de", "pt", "it"];
  var T = {
    lang_label: ["Sprache", "Idioma", "Lingua"],

    nav_home: ["Start", "Início", "Home"],
    nav_download: ["Download", "Baixar", "Scarica"],
    nav_register: ["Registrierung", "Registro", "Registrazione"],
    nav_rules: ["Regeln", "Regras", "Regole"],
    nav_about: ["Über uns", "Sobre", "Info"],

    unofficial: ["inoffizieller Fan-Testserver", "servidor de teste não oficial de fãs", "server di test non ufficiale dei fan"],
    slogan: ["reines Interlude · Limit +15 / +17", "Interlude puro · limite +15 / +17", "Interlude puro · limite +15 / +17"],
    status_label: ["Server", "Servidor", "Server"],
    status_checking: ["wird geprüft", "verificando", "verifica in corso"],
    cta_download: ["Vollständigen Client herunterladen", "Baixar o cliente completo", "Scarica il client completo"],
    cta_register: ["Konto erstellen", "Criar conta", "Crea un account"],

    for_whom_title: ["Für wen", "Para quem é", "Per chi è"],
    for_whom_text: [
      "Für alle, die Interlude x32.2 in Ruhe ausprobieren möchten – ohne Spenden-Wettlauf und ohne GM-Charaktere bei den Spielern. Client herunterladen, spielen und uns sagen, was kaputt ist.",
      "Para quem quer testar o Interlude x32.2 com calma, sem corrida de doações e sem personagens GM entre os jogadores. Baixe o cliente, jogue e conte o que quebrou.",
      "Per chi vuole provare Interlude x32.2 con calma, senza corsa alle donazioni e senza personaggi GM tra i giocatori. Scarica il client, gioca e dicci cosa si è rotto."
    ],

    steps_title: ["So startest du", "Como começar", "Come iniziare"],
    step1_t: ["Vollständiger Client", "Cliente completo", "Client completo"],
    step1_d: [
      "Lade den vollständigen Client über den Link auf der Download-Seite herunter.",
      "Baixe o cliente completo pelo link na página de download.",
      "Scarica il client completo dal link nella pagina di download."
    ],
    step2_t: ["Start", "Execução", "Avvio"],
    step2_d: [
      "Entpacke den Client und starte ihn wie gewohnt.",
      "Descompacte o cliente e execute-o como de costume.",
      "Estrai il client e avvialo come al solito."
    ],
    step3_t: ["Spiel", "Jogo", "Gioco"],
    step3_d: [
      "Die Weltadresse wird separat bekanntgegeben – achte auf die Ankündigungen auf Discord und Telegram.",
      "O endereço do mundo é divulgado separadamente — acompanhe os anúncios no Discord e no Telegram.",
      "L'indirizzo del mondo viene comunicato a parte: segui gli annunci su Discord e Telegram."
    ],

    facts_title: ["Die Welt in Kürze", "O mundo em resumo", "Il mondo in breve"],
    fact_rates: ["Raten", "Rates", "Rate"],
    fact_chronicle: ["Chronik", "Crônica", "Cronaca"],
    fact_chronicle_v: ["reines Interlude", "Interlude puro", "Interlude puro"],
    fact_cap: ["Verzauberungslimit", "Limite de encantamento", "Limite di incantamento"],
    fact_cap_v: [
      "Rüstung / Schmuck +15 (100 %), Waffe +17 (100 %)",
      "armadura / joias +15 (100%), arma +17 (100%)",
      "armatura / gioielli +15 (100%), arma +17 (100%)"
    ],

    contacts_title: ["Community", "Comunidade", "Community"],
    contacts_lead: [
      "Ankündigungen, Fragen und Fehlermeldungen – in der Community.",
      "Anúncios, dúvidas e relatos de bugs ficam na comunidade.",
      "Annunci, domande e segnalazioni di bug: nella community."
    ],
    contact_soon: ["bald", "em breve", "presto"],
    contact_open: ["Öffnen →", "Abrir →", "Apri →"],

    foot_rights: [
      "Lineage 2 und zugehörige Namen gehören ihren jeweiligen Rechteinhabern.",
      "Lineage 2 e os nomes relacionados pertencem a seus respectivos detentores de direitos.",
      "Lineage 2 e i nomi correlati appartengono ai rispettivi titolari dei diritti."
    ],
    foot_note: [
      "Kurogane ist ein inoffizieller Fan-Test. Keine Verbindung zum Rechteinhaber von Lineage 2.",
      "Kurogane é um teste não oficial de fãs. Sem vínculo com o detentor dos direitos de Lineage 2.",
      "Kurogane è un test non ufficiale dei fan. Nessun legame con il titolare dei diritti di Lineage 2."
    ],
    skip: ["Zum Inhalt springen", "Ir para o conteúdo", "Vai al contenuto"],
    menu: ["Menü", "Menu", "Menu"],

    dl_kicker: ["Client", "Cliente", "Client"],
    dl_title: ["Vollständiger Client", "Cliente completo", "Client completo"],
    dl_install_title: ["So installierst du", "Como instalar", "Come installare"],
    dl_s1: ["Archiv herunterladen", "Baixe o arquivo", "Scarica l'archivio"],
    dl_s2: ["Entpacken", "Descompacte", "Estrailo"],
    dl_s3: ["Ordner System öffnen", "Abra a pasta System", "Apri la cartella System"],
    dl_s4: ["KuroganeLauncher starten", "Execute o KuroganeLauncher", "Avvia KuroganeLauncher"],
    dl_btn_soon: ["Vollständiger Client – bald", "Cliente completo — em breve", "Client completo — presto"],
    dl_btn_get: ["Vollständigen Client herunterladen", "Baixar o cliente completo", "Scarica il client completo"],

    rg_kicker: ["Konto", "Conta", "Account"],
    rg_title: ["Registrierung", "Registro", "Registrazione"],
    rg_lead: [
      "Die Registrierung öffnet mit dem Start der Welt. Die Ankündigung erscheint auf Discord und Telegram.",
      "O registro abrirá junto com o lançamento do mundo. O anúncio sairá no Discord e no Telegram.",
      "La registrazione aprirà insieme al lancio del mondo. L'annuncio sarà pubblicato su Discord e Telegram."
    ],
    rg_note: [
      "Diese Seite nimmt keine Logins oder Passwörter entgegen. Kontodaten werden nur im Spielclient eingegeben.",
      "Este site não aceita logins nem senhas. Os dados da conta são inseridos apenas no cliente do jogo.",
      "Questo sito non accetta login né password. I dati dell'account si inseriscono solo nel client di gioco."
    ],

    nf_title: ["Nicht gefunden", "Não encontrado", "Non trovato"],
    nf_lead: [
      "Diese Seite gibt es nicht. Zurück zur Startseite.",
      "Esta página não existe. Volte para o início.",
      "Questa pagina non esiste. Torna alla home."
    ],

    t_download: ["Vollständiger Client — Kurogane", "Cliente completo — Kurogane", "Client completo — Kurogane"],
    t_register: ["Registrierung — Kurogane", "Registro — Kurogane", "Registrazione — Kurogane"],
    t_rules: ["Regeln — Kurogane", "Regras — Kurogane", "Regole — Kurogane"],
    t_about: ["Über uns — Kurogane", "Sobre — Kurogane", "Info — Kurogane"],
    d_home: [
      "Kurogane – inoffizieller Fan-Test von Lineage 2 Interlude. Reine Chronik, Raten x32.2, Verzauberungslimit +15 / +17.",
      "Kurogane — teste não oficial de fãs de Lineage 2 Interlude. Crônica pura, rates x32.2, limite de encantamento +15 / +17.",
      "Kurogane — test non ufficiale dei fan di Lineage 2 Interlude. Cronaca pura, rate x32.2, limite di incantamento +15 / +17."
    ],
    d_download: [
      "Vollständiger Client für den Kurogane-Test (Lineage 2 Interlude): Download-Link.",
      "Cliente completo para o teste Kurogane (Lineage 2 Interlude): link de download.",
      "Client completo per il test Kurogane (Lineage 2 Interlude): link di download."
    ],
    d_register: [
      "So nimmst du am Kurogane-Test teil: Die Registrierung öffnet mit dem Start der Welt; Ankündigungen auf Discord und Telegram.",
      "Como participar do teste Kurogane: o registro abre com o lançamento do mundo; anúncios no Discord e no Telegram.",
      "Come partecipare al test Kurogane: la registrazione apre con il lancio del mondo; annunci su Discord e Telegram."
    ],
    d_rules: [
      "Regeln des Kurogane-Tests: keine GMs bei den Spielern, Spenden übersteigen das Limit nicht.",
      "Regras do teste Kurogane: sem GMs entre os jogadores, doações não passam do limite.",
      "Regole del test Kurogane: nessun GM tra i giocatori, le donazioni non superano il limite."
    ],
    d_about: [
      "Was Kurogane ist: ein inoffizieller Fan-Test von Lineage 2 Interlude. Schwarzes Eisen, offene Tür.",
      "O que é o Kurogane: um teste não oficial de fãs de Lineage 2 Interlude. Ferro negro, porta aberta.",
      "Cos'è Kurogane: un test non ufficiale dei fan di Lineage 2 Interlude. Ferro nero, porta aperta."
    ],
    d_notfound: ["Seite nicht gefunden.", "Página não encontrada.", "Pagina non trovata."],

    ru_kicker: ["Ordnung", "Ordem", "Ordine"],
    ru_title: ["Testregeln", "Regras do teste", "Regole del test"],
    ru_lead: [
      "Eine kurze Satzung. Wer dagegen verstößt, fliegt aus dem Test. „Bei anderen ging das“ ist kein Argument.",
      "Um regulamento curto. Quebrou, saiu do teste. «Lá em outro lugar podia» não é argumento.",
      "Un breve regolamento. Chi lo infrange esce dal test. «Altrove si poteva» non è un argomento."
    ],
    ru_1_t: ["Keine GMs bei den Spielern", "Sem GMs entre os jogadores", "Nessun GM tra i giocatori"],
    ru_1_d: [
      "Spielercharaktere erhalten keine GM-Rechte. Admin-Werkzeuge bleiben bei denen, die den Test betreiben – nicht zum Hochleveln von „Freunden“.",
      "Personagens de jogadores não recebem direitos de GM. As ferramentas de administração ficam com quem mantém o teste, não para dar nível a «amigos».",
      "I personaggi dei giocatori non ricevono diritti GM. Gli strumenti di amministrazione restano a chi gestisce il test, non per far salire di livello gli «amici»."
    ],
    ru_2_t: ["Spenden übersteigen das Limit nicht", "Doação não passa do limite", "La donazione non supera il limite"],
    ru_2_d: [
      "Auch wenn später Server-Unterstützung hinzukommt, gibt sie keine Stärke über dem Verzauberungslimit und umgeht keine Testregeln.",
      "Mesmo que mais tarde surja apoio ao servidor, ele não dará poder acima do limite de encantamento nem contornará as regras do teste.",
      "Anche se in futuro comparirà un supporto al server, non darà potere oltre il limite di incantamento né aggirerà le regole del test."
    ],
    ru_4_t: ["Reines Interlude", "Interlude puro", "Interlude puro"],
    ru_4_d: [
      "Wir holen keine anderen Chroniken oder einen eigenen P2W-Zoo ins Spiel. Meldet Bugs; fordert keine einzigartigen Waffen aus späteren Epochen.",
      "Não trazemos outras crônicas nem um zoológico P2W personalizado. Reporte bugs; não peça armas únicas de épocas posteriores.",
      "Non portiamo altre cronache né uno zoo P2W personalizzato. Segnala i bug; non chiedere armi uniche di epoche successive."
    ],
    ru_5_t: ["Fair Play", "Jogo limpo", "Gioco leale"],
    ru_5_d: [
      "Bots, Account-Diebstahl und das Weitergeben von Lücken an „die Eigenen“ führen sofort zum Ausschluss. Kleiner Test, langes Gedächtnis.",
      "Bots, roubo de contas e vazar falhas para «os seus» significam expulsão imediata. Teste pequeno, memória longa.",
      "Bot, furto di account e fughe di falle verso «i propri» portano all'espulsione immediata. Test piccolo, memoria lunga."
    ],
    ru_6_t: ["Umgangston", "Tom", "Tono"],
    ru_6_d: [
      "Das hier ist keine Arena für Mobbing. Konflikte im Spiel sind in Ordnung. Schikane außerhalb des Bildschirms nicht.",
      "Aqui não é arena de assédio. Conflito dentro do jogo tudo bem. Assédio fora da tela, não.",
      "Questa non è un'arena per le molestie. Il conflitto nel gioco va bene. Le molestie fuori dallo schermo no."
    ],

    ab_kicker: ["Wer", "Quem", "Chi"],
    ab_lead: [
      "Schwarzes Eisen. Der lateinische Name ist Kurogane; die Zeichen 黒鉄 bleiben klein. Das ist keine Konzernmarke und kein Partnerschild.",
      "Ferro negro. O nome em latim é Kurogane; os caracteres 黒鉄 ficam pequenos. Não é uma marca corporativa nem uma placa de parceiros.",
      "Ferro nero. Il nome latino è Kurogane; i caratteri 黒鉄 restano piccoli. Non è un marchio aziendale né una targa di partner."
    ],
    ab_p1: [
      "Kurogane ist ein privater Fan-Test von Lineage 2 Interlude. Er soll eine reine Chronik, hohe Raten und ein hartes Limit zunächst im kleinen Kreis erproben – und dann die Tür für alle öffnen, die dieses Tempo mögen.",
      "Kurogane é um teste privado de fãs de Lineage 2 Interlude. Existe para experimentar uma crônica pura, rates altos e um limite rígido num círculo pequeno — e depois abrir a porta para quem gosta desse ritmo.",
      "Kurogane è un test privato dei fan di Lineage 2 Interlude. Serve a provare una cronaca pura, rate alti e un limite rigido in una cerchia ristretta, per poi aprire la porta a chi ama questo ritmo."
    ],
    ab_p2: [
      "Website und Spielwelt sind getrennte Systeme. Hier gibt es Informationen, den Client und die Regeln; das Spiel läuft auf einer eigenen Infrastruktur.",
      "O site e o mundo do jogo são sistemas separados. Aqui você encontra informações, o cliente e as regras; o jogo roda em infraestrutura própria.",
      "Il sito e il mondo di gioco sono sistemi separati. Qui trovi informazioni, il client e le regole; il gioco gira su un'infrastruttura propria."
    ],
    ab_p3: [
      "Wir sind nicht Rechteinhaber von Lineage 2 und tun nicht so, als sei der Test „vom Publisher genehmigt“. Es ist ein Hobbyprojekt. Wenn der Rechteinhaber um Schließung bittet, schließen wir.",
      "Não somos detentores dos direitos de Lineage 2 e não fingimos que o teste seja «aprovado pela publisher». É um espaço de hobby. Se o detentor dos direitos pedir o encerramento, encerramos.",
      "Non siamo titolari dei diritti di Lineage 2 e non facciamo finta che il test sia «approvato dal publisher». È uno spazio amatoriale. Se il titolare dei diritti chiede la chiusura, chiudiamo."
    ],
    ab_list_title: ["Was das nicht ist", "O que isto não é", "Cosa non è"],
    ab_not_1: ["kein offizieller Server", "não é um servidor oficial", "non è un server ufficiale"],
    ab_not_2: ["kein Shop für Stärke", "não é uma loja de poder", "non è un negozio di potere"],
    ab_not_3: ["kein Kundenkonto mit Guthaben", "não é uma área pessoal com saldo", "non è un'area personale con saldo"],
    ab_not_4: ["kein Versprechen ewiger Verfügbarkeit", "não é uma promessa de estar sempre online", "non è una promessa di disponibilità eterna"]
  };

  var dict = window.KuroganeI18n && window.KuroganeI18n.dict;
  if (!dict) return;
  Object.keys(T).forEach(function (key) {
    if (!dict[key]) dict[key] = { ru: key, en: key };
    CODES.forEach(function (code, i) { dict[key][code] = T[key][i]; });
  });
})();
