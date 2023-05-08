Boolflix
===
Creare una pagina simile a Netflix.
Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto
## Procedimento
1. Markup;
2. Dopo aver creato il file store.js, inserisco all'interno la chiamata API per la ricerca, un searchInput come stringa vuota e un userMovie come array vuoto;
3. All'input creo un v-model che sarà uguale al searchInput, cioè a ciò che scriverà l'utente, e un'emit per effettuare la chiamata API nell'app quando l'utente premerà INVIO, e faccio la stessa cosa per il bottone
4. Creati due nuovi componenti che sono Cards e CardsContainer, andrò a stampare a schermo i risultati;
5. Nel Cards farò una props in cui salverò le chiavi che mi servono che fanno parte dell'array nell'apiUrl, e nel CardsContainer farò un v-for in cui passerò varie chiavi dinamiche, e cosi stamperò a schermo

Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
## Procedimento
1. Ho aggiunto una cartella con tutte le bandiere;
2. Al posto di un tag per il testo ho messo un tag img con percorso statico ma con il nome dinamico che corrisponderà alle varie nazioni;
3. Per le serie tv ho aggiunto un'altro url API nello store e un'altra chiamata API nel file App;
4. Per stamparle ho creato un altro tag Card nel CardsContainer ciclando come ho fatto con i film, con la differenza che nell'oggetto delle serie le proprietà sono diverse: mentre nell'API dei film la proprietà del nome è "title", in quella delle serie la proprietà è "name", quindi è bastato cambiare solo questo nome e il gioco è fatto.


Milestone 3:
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)
## Procedimento
1. Aggiungo l'immagine alle props delle Card;
2. Nel tag img che ho creato ho copiato l'URL base delle immagini, ho aggiunto /w342/ che sarebbe la larghezza data in px, e infine ho stampato il nome dinamicamente;
3. Ho scaricato un'immagine di errore 404 poiché alcuni oggetti non hanno l'immagine, e l'ho aggiunta alla card con un piccolo controllo: se l'immagine è null mi stampa quella con l'errore, altrimenti quella del film/serie corrispondente;
4. Per trasformare il voto da 1 a 10 a 1 a 5, ho fatto un'operazione nel tag Cards nel CardsContainer, ossia un Math.ceil di film.vote_average/2, cosi ho potuto ottenere un numero intero da 1 a 5;
5. Ho aggiunto FontAwesome e ho scaricato la stella intera e quella vuota, e le ho inserite nel div della card;
6. Ho ciclato sia la stella piena che quella vuota, solo che per quella vuota ho fatto un'operazione, ossia 5 - vote_average, in questo modo ho le stelle piene in base al voto, e quelle vuote che sono quelle rimanenti.

Milestone 4:
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
Un header che contiene logo e search bar
Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview
## Procedimento
1. Inizialmente per vedere le card avevo stilato una ul molto grezza, ora l'ho sostituita con un div contenente i vari div corrispondenti alle varie parti della card, quindi immagine e descrizione;
2. Per renderla più completa ho aggiunto anche la descrizione del film/serie tv;
3. Ho immaginato che solo l'immagine fosse visibile e il testo invece solo quando si passa con il mouse sulla card, quindi ho reso il div della card position relative, e alla descrizione ho dato position absolute con top 0, e opacity 0, che diventerà 1 all'hover, con una piccola transizione.

## Bonus
Dato che la pagina al caricamento era vuota, ho deciso di implementare una chiamata API che mi restituisse i film più popolari, infatti avevo già salvato l'URL.
Dopo aver aggiunto un altro tag Card al container, ho creato una piccola condizione secondo la quale se l'utente non ha cercato nulla, mi fa vedere i film più popolari, altrimenti visualizzo solamente i risultati cercati.

## Considerazione
È stato un'esercitazione molto complessa ma la più completa che abbia fatto, ho riscontrato molte difficoltà (in particolare stampare le stelle in base ai voti), ma la soddisfazione nel vedere il risultato finale è sempre tanta.


