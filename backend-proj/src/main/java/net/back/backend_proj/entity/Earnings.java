package net.back.backend_proj.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name="earnings")
public class Earnings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Id de donneur")
    private String IdDonneur;
    @Column(name = "montant" )
    private String montant;
    @Column(name="date" )
    private String date;
    @Column(name="note")
    private String note;



    public Earnings() {
    }

    public Earnings(Long id, String IdDonneur, String montant, String date, String note) {
        this.id = id;
        this.IdDonneur = IdDonneur;
        this.montant = montant;
        this.date = date;
        this.note = note;

    }



    public Long getId() {
        return id;
    }

    public String getIdDonneur() {
        return IdDonneur;
    }

    public String getMontant() {
        return montant;
    }

    public String getDate() {
        return date;
    }
    public String getNote() {
        return note;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public void setIdDonneur(String idDonneur) {
        IdDonneur = idDonneur;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public void setDate(String date) {
        this.date = date;
    }
    public void setNote(String note) {
        this.note = note;
    }

}
