// classe per la gestione degli utenti
class utente {
    //Costruttore
    constructor(id, id_nome, id_cognome, id_giorno, id_mese, id_anno, id_indirizzo, id_cap, id_comune, id_prov, id_tel, id_email, id_peso, id_altezza, id_sesso) {
        this.id = id;
        this.nome = id_name;
        this.cognome = id_cognome;
        this.giorno = id_giorno;
        this.mese = id_mese;
        this.anno = id_anno;
        this.indirizzo = id_indirizzo;
        this.cap = id_cap;
        this.comune = id_comune;
        this.prov = id_prov;
        this.tel = id_tel;
        this.email = id_email;
        this.peso = id_peso;
        this.altezza = id_altezza;
        this.sesso = id_sesso;
    }

    //aggiungi utente
    add(database) {
        database[this.id] = this;
    }
};

module.exports = {
    //ritorno utente da id
    get: function getUtente(id, database) {
        return database[id];
    },

    //cancello utente da id
    delete: function deleteUtente(id, database) {
        database[id] = null;
    },

    //aggiungo/modifico utente
    update: function updateUtente(id, id_nome, id_cognome, id_giorno, id_mese, id_anno, id_indirizzo, id_cap, id_comune, id_prov, id_tel, id_email, id_peso, id_altezza, id_sesso) {
        var e = new utente (id, id_nome, id_cognome, id_giorno, id_mese, id_anno, id_indirizzo, id_cap, id_comune, id_prov, id_tel, id_email, id_peso, id_altezza, id_sesso);
        e.add(database);
    }
}
